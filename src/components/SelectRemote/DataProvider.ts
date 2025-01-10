import { ref, computed } from 'vue';
import type { Ref } from 'vue';

export interface BasicFilter {
    query: string;
}

export type SortOption<Type> = {
    key: keyof Type;
    dir: 'asc' | 'desc';
};

export interface DataProvider<T> {
    data: Ref<T[]>;

    loading: Ref<boolean>;
}

export interface PaginationDataProvider<T> extends DataProvider<T> {
    // TODO: For something like a datatable where we have only one page loaded
    // at a time and can directly select a page
    // setPage: (_page: number) => Promise<void>;
    // nextPage: () => Promise<void>;
    // prevPage: () => Promise<void>;

    loadPage: () => Promise<void>;

    currentPage: Ref<number>;
}

export interface SortableDataProvider<T> extends DataProvider<T> {
    sort: (_sortConfig: SortOption<T>[]) => Promise<void>;
}

export interface FilterableDataProvider<T, D extends BasicFilter = BasicFilter> extends DataProvider<T> {
    filter: (_filters: Partial<D>) => Promise<void>;
}

export interface SearchableDataProvider<T> extends DataProvider<T> {
    search: (_query: string) => Promise<void>;
}

type KeyOfType<T, V> = keyof {
    [P in keyof T as T[P] extends V ? P : never]: any;
};

export const useArrayDataProvider = function useArrayDataProvider<T>(
    items: T[],
    searchable: KeyOfType<T, string>[]
): FilterableDataProvider<T> & SearchableDataProvider<T> & SortableDataProvider<T> & PaginationDataProvider<T> {
    const currentFilter = ref<BasicFilter>({
        query: '',
    });

    const currentSort: Ref<SortOption<T>[]> = ref([]);

    const currentPage = ref(1);

    const loadPage = () => {
        currentPage.value++;
        return Promise.resolve();
    };

    const PAGE_SIZE = 8;

    const sortedData: Ref<T[]> = ref([]);
    const filteredData: Ref<T[]> = ref([]);

    const data = computed(() => {
        return filteredData.value.slice(0, currentPage.value * PAGE_SIZE);
    });

    const loading = ref(false);

    function compare<T>(a: T, b: T) {
        if (typeof a === 'string' && typeof b === 'string') {
            return a.localeCompare(b);
        } else if (typeof a === 'number' && typeof b === 'number') {
            return a < b ? -1 : (a > b ? 1 : 0);
        }
        return 0;
    }

    const query = function(): Promise<void> {
        currentPage.value = 1;

        sortedData.value = items.slice(0).sort((a, b) => {
            for (const { dir, key } of currentSort.value) {
                const res = dir === 'asc' ? compare(a[key], b[key]) : compare(b[key], a[key]);
                if (res !== 0) {
                    return res;
                }
            }
            return 0;
        });

        filteredData.value = sortedData.value.filter(s => {
            return searchable.some(key =>
                (s[key] as unknown as string).toLowerCase().includes(currentFilter.value.query.toLowerCase() ?? '')
            );
        });

        return Promise.resolve();
    };

    const filter = (filters: Partial<BasicFilter> = {}) => {
        currentFilter.value = { ...currentFilter.value, ...filters };

        return query();
    };

    const search = (q: string) => {
        currentFilter.value = { ...currentFilter.value, query: q };

        return query();
    };

    const sort = (sortConfig: SortOption<T>[]) => {
        currentSort.value = sortConfig;

        return query();
    };

    return {
        data,
        currentPage,
        loadPage,
        filter,
        sort,
        search,
        loading,
    };
};

interface ODataOptions<T> {
    limit?: number;
    offset?: number;

    filter?: {
        query?: string;
        props?: string[];
    };

    sort?: SortOption<T>[];
}

interface ODataResponse<T> {
    '@odata.context': string;
    value: T[];
}

function fetchFromODataEndpoint<T>(baseUrl: string, options: ODataOptions<T>): Promise<ODataResponse<T>> {
    const { filter, sort, offset = 0, limit } = options;

    const endpoint = baseUrl;

    function buildFilter(query = '', props: string[] = []): string {
        return props.map(p => `contains(${p},'${query}')`).join(' or ');
    }

    function buildOrderby(sortConfig: SortOption<T>[] = []): string {
        return sortConfig.map(({ key, dir }) => `${key as string} ${dir}`).join(',');
    }

    return fetch(
        endpoint +
            '?' +
            new URLSearchParams({
                $top: limit?.toString() ?? '',
                $skip: offset.toString() ?? '',
                $filter: buildFilter(filter?.query, filter?.props),
                $orderby: buildOrderby(sort),
            })
    ).then(resp => resp.json() as unknown as ODataResponse<T>);
}

export const useODataDataProvider = function useODataDataProvider<T>(
    baseUrl: string,
    searchable: string[]
): FilterableDataProvider<T> & SearchableDataProvider<T> & SortableDataProvider<T> & PaginationDataProvider<T> {
    const currentPage = ref(1);

    const currentFilter = ref<BasicFilter>({
        query: '',
    });

    const currentSort: Ref<SortOption<T>[]> = ref([]);

    const PAGE_SIZE = 10;

    const filteredData: Ref<T[]> = ref([]);

    const data = computed(() => {
        return filteredData.value;
    });

    const loading = ref(false);

    const loadPage = () => {
        if (filteredData.value.length < currentPage.value * PAGE_SIZE) {
            return Promise.resolve();
        }

        currentPage.value++;

        loading.value = true;

        return fetchFromODataEndpoint<T>(baseUrl, {
            limit: PAGE_SIZE,
            offset: (currentPage.value - 1) * PAGE_SIZE,
            filter: {
                props: searchable,
                query: currentFilter.value.query,
            },
            sort: currentSort.value,
        }).then(fetchedData => {
            loading.value = false;
            filteredData.value.push(...fetchedData.value);
        });
    };

    const query = function() {
        loading.value = true;

        currentPage.value = 1;

        return fetchFromODataEndpoint<T>(baseUrl, {
            limit: PAGE_SIZE,
            offset: (currentPage.value - 1) * PAGE_SIZE,
            filter: {
                props: searchable,
                query: currentFilter.value.query,
            },
            sort: currentSort.value,
        }).then(fetchedData => {
            loading.value = false;
            filteredData.value = fetchedData.value;
        });
    };

    const filter = (filters: Partial<BasicFilter>) => {
        currentFilter.value = { ...currentFilter.value, ...filters };

        return query();
    };

    const sort = (sortConfig: SortOption<T>[]) => {
        currentSort.value = sortConfig;

        return query();
    };

    const search = (q: string) => {
        currentFilter.value = { ...currentFilter.value, query: q };

        return query();
    };

    return {
        data,
        currentPage,
        loadPage,
        filter,
        sort,
        search,
        loading,
    };
};
