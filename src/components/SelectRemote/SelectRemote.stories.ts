import { watch, ref } from 'vue';
import Option from '../Select/components/Option/Option.vue';
import Select from '../Select/Select.vue';

import Checkbox from '../Checkbox/Checkbox.vue';

import SelectRemote from './SelectRemote.vue';

import { useBrandAutocompleteProvider, useUSADataProvider, type StateData } from './MockProviders';
import { useODataDataProvider } from './DataProvider';

import type { SortOption } from './DataProvider';

export default {
    title: 'Components/SelectRemote',
    component: SelectRemote,
};

export const States = (args: any) => ({
    components: { SelectRemote, Select, Option, Checkbox },
    setup() {
        const provider = useUSADataProvider();

        const regions = ['New England', 'Mid-atlantic', 'Midwest', 'South', 'Mountain', 'Pacific'];

        const selectedRegion = ref<string>('New England');
        const originalThirteen = ref<boolean>(false);
        const sortConfig = ref<SortOption<StateData>[]>([{ dir: 'asc', key: 'name' }]);

        watch(
            [selectedRegion, originalThirteen],
            () => {
                provider.filter({ region: selectedRegion.value, onlyOriginal: originalThirteen.value });
            },
            {
                immediate: true,
            }
        );

        watch(
            [sortConfig],
            () => {
                provider.sort(sortConfig.value);
            },
            {
                immediate: true,
            }
        );

        const toggleSort = () => {
            if (sortConfig.value[0].dir === 'asc') {
                sortConfig.value = [{ dir: 'desc', key: 'name' }];
            } else {
                sortConfig.value = [{ dir: 'asc', key: 'name' }];
            }
        };

        return {
            args,
            provider,
            regions,
            selectedRegion,
            originalThirteen,
            sortConfig,
            toggleSort,
        };
    },
    template: `
        <div class="flex space-x-5">
            <SelectRemote searchable label="State" :provider="provider" :get-label="s => s?.name">
                <template #option="{option}">
                    <Option :value="option" :key="option.name">
                        {{ option.name }}
                    </Option>
                </template>
            </SelectRemote>

            <Select v-model="selectedRegion" label="Region" clearable>
                <Option
                    v-for="option in regions"
                    :value="option"
                    :key="option"
                    :label="option"
                />
            </Select>

            <div class="label">
                <span class="label-text">Original 13</span>

                <Checkbox v-model="originalThirteen"></Checkbox>
            </div>

            <div class="label">
                <span class="label-text">Sort</span>

                <button class="btn btn-default" @click="toggleSort">{{sortConfig[0].dir}}</button>
            </div>
        </div>
    `,
});

export const Autocomplete = (args: any) => ({
    components: { SelectRemote, Option },
    setup() {
        const provider = useBrandAutocompleteProvider();

        return {
            provider,
            args,
        };
    },
    template: `
        <SelectRemote searchable :provider="provider">
            <template #option="{option}">
                <Option
                    :value="option.text"
                    :key="option.id"
                >
                    <span>{{ option.text }}</span>
                    <span v-if="option.locale">{{option.locale}}</span>
                </Option>
            </template>
        </SelectRemote>
    `,
});

interface Product {
    ProductID: number;
    ProductName: string;
    SupplierID: number;
    CategoryID: number;
    QuantityPerUnit: number;
    UnitPrice: number;
    UnitsInStock: number;
    UnitsOnOrder: number;
    ReorderLevel: number;
    Discontinued: boolean;
}

export const OData = (args: any) => ({
    components: { SelectRemote, Option },
    setup() {
        const provider = useODataDataProvider<Product>(
            'https://services.odata.org/V4/Northwind/Northwind.svc/Products',
            ['ProductName']
        );

        const sortConfig = ref<SortOption<Product>[]>([{ dir: 'asc', key: 'ProductName' }]);

        watch(
            [sortConfig],
            () => {
                provider.sort(sortConfig.value);
            },
            {
                immediate: true,
            }
        );

        const toggleSort = () => {
            if (sortConfig.value[0].dir === 'asc') {
                sortConfig.value = [{ dir: 'desc', key: 'ProductName' }];
            } else {
                sortConfig.value = [{ dir: 'asc', key: 'ProductName' }];
            }
        };

        return {
            provider,
            sortConfig,
            toggleSort,
            args,
        };
    },
    template: `
        <div class="flex space-x-5">
            <SelectRemote searchable label="Product" :provider="provider">
                <template #option="{option}">
                    <Option
                        :value="option.ProductName"
                        :key="option.ProductID"
                    >
                        <span>{{ option.ProductName }}</span>
                    </Option>
                </template>
            </SelectRemote>

            <div class="label">
                <span class="label-text">Sort</span>

                <button class="btn btn-default" @click="toggleSort">{{sortConfig[0].dir}}</button>
            </div>
        </div>
    `,
});

export const WithDropdownNotMountedToBody = (args: any) => ({
    components: { SelectRemote, Option },
    setup() {
        const provider = useODataDataProvider<Product>(
            'https://services.odata.org/V4/Northwind/Northwind.svc/Products',
            ['ProductName']
        );

        const sortConfig = ref<SortOption<Product>[]>([{ dir: 'asc', key: 'ProductName' }]);

        watch(
            [sortConfig],
            () => {
                provider.sort(sortConfig.value);
            },
            {
                immediate: true,
            }
        );

        const toggleSort = () => {
            if (sortConfig.value[0].dir === 'asc') {
                sortConfig.value = [{ dir: 'desc', key: 'ProductName' }];
            } else {
                sortConfig.value = [{ dir: 'asc', key: 'ProductName' }];
            }
        };

        return {
            provider,
            sortConfig,
            toggleSort,
            args,
        };
    },
    template: `
        <div class="flex space-x-5">
            <SelectRemote label="Product" searchable :provider="provider" :append-dropdown-to-body="false">
                <template #option="{option}">
                    <Option
                        :value="option.ProductName"
                        :key="option.ProductID"
                    >
                        <span>{{ option.ProductName }}</span>
                    </Option>
                </template>
            </SelectRemote>

            <div class="label">
                <span class="label-text">Sort</span>

                <button class="btn btn-default" @click="toggleSort">{{sortConfig[0].dir}}</button>
            </div>
        </div>
    `,
});
