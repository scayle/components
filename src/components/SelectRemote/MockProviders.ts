import { ref, computed, type Ref } from 'vue';
import statesData from './data/states.json';
import brandsData from './data/brands.json';
import type {
    FilterableDataProvider,
    SearchableDataProvider,
    BasicFilter,
    SortOption,
    SortableDataProvider,
    PaginationDataProvider,
} from './DataProvider';

export interface StateData {
    name: string;
    region: string;
    original: boolean;
}

export interface StateFilter {
    query: string;
    onlyOriginal: boolean;
    region: string | null;
}

export const useUSADataProvider = function(): FilterableDataProvider<StateData, StateFilter> &
    SearchableDataProvider<StateData> &
    SortableDataProvider<StateData> &
    PaginationDataProvider<StateData> {
    const states: StateData[] = statesData;

    const currentFilter = ref<StateFilter>({
        query: '',
        region: null,
        onlyOriginal: false,
    });

    const currentPage = ref(1);

    const loadPage = () => {
        currentPage.value++;
        return Promise.resolve();
    };

    const PAGE_SIZE = 8;

    const sortedData: Ref<StateData[]> = ref(states.slice(0));
    const filteredData: Ref<StateData[]> = ref([]);

    const data = computed(() => {
        return filteredData.value.slice(0, currentPage.value * PAGE_SIZE);
    });

    const loading = ref(false);

    const filter = (filters: Partial<StateFilter> = {}) => {
        currentFilter.value = { ...currentFilter.value, ...filters };

        loading.value = true;

        return new Promise<void>(resolve => {
            setTimeout(() => {
                loading.value = false;
                currentPage.value = 1;
                filteredData.value = sortedData.value.filter(s => {
                    return (
                        (!currentFilter.value.region || s.region === currentFilter.value.region) &&
                        s.name.toLowerCase().includes(currentFilter.value.query.toLowerCase() ?? '') &&
                        (!currentFilter.value.onlyOriginal || s.original)
                    );
                });
                resolve();
            }, 500);
        });
    };

    const sort = (sortConfig: SortOption<StateData>[]) => {
        sortedData.value = states.slice(0).sort((a, b) => {
            for (const { dir } of sortConfig) {
                // TODO: don't hardcode prop key
                const res = dir === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
                if (res !== 0) {
                    return res;
                }
            }
            return 0;
        });

        return filter();
    };

    const search = (query: string) => {
        return filter({ query });
    };

    return {
        data,
        currentPage,
        loadPage,
        filter,
        search,
        sort,
        loading,
    };
};

// Mock the Autocomplete API used in the Panel
interface AutocompleteResponse {
    id: number;
    text: string;
    locale: string;
}

interface AutocompleteOptions {
    field: string;
    allow_empty_query: boolean;
    params?: Record<string, string | number>;
    limit: number;
    offset?: number;
    language?: string;
    query: string;
}

const demoBrandData: AutocompleteResponse[] = brandsData;

function fetchFromAutocompleteEndpoint(options: AutocompleteOptions): Promise<AutocompleteResponse[]> {
    const { query = '', offset = 0, limit } = options;

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                demoBrandData
                    .filter(brand => brand.text.toLowerCase().includes(query.toLowerCase()))
                    .slice(offset, limit + offset)
            );
        }, 300);
    });
}

export const useBrandAutocompleteProvider = function(): SearchableDataProvider<AutocompleteResponse> &
    SortableDataProvider<AutocompleteResponse> &
    PaginationDataProvider<AutocompleteResponse> {
    const currentPage = ref(1);

    const currentFilter = ref<BasicFilter>({
        query: '',
    });

    const PAGE_SIZE = 8;

    const filteredData: Ref<AutocompleteResponse[]> = ref([]);

    const data = computed(() => {
        return filteredData.value;
    });

    const loading = ref(false);

    const loadPage = () => {
        currentPage.value++;

        loading.value = true;

        return fetchFromAutocompleteEndpoint({
            field: 'attribute_through_attribute_group',
            allow_empty_query: true,
            limit: PAGE_SIZE,
            offset: (currentPage.value - 1) * PAGE_SIZE,
            language: 'de-DE',
            query: currentFilter.value.query,
        }).then(fetchedData => {
            loading.value = false;
            filteredData.value.push(...fetchedData);
        });
    };

    const search = (query: string) => {
        currentFilter.value = { query };

        loading.value = true;

        return fetchFromAutocompleteEndpoint({
            field: 'attribute_through_attribute_group',
            allow_empty_query: true,
            limit: PAGE_SIZE,
            offset: 0,
            language: 'de-DE',
            query: currentFilter.value.query,
        }).then(fetchedData => {
            currentPage.value = 1;
            loading.value = false;
            filteredData.value = fetchedData;
        });
    };

    const sort = (_sortConfig: SortOption<AutocompleteResponse>[]) => {
        return Promise.resolve();
    };

    return {
        data,
        currentPage,
        loadPage,
        search,
        sort,
        loading,
    };
};
