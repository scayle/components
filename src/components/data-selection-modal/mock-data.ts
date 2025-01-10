import IconPanelUsers from '~icons/panel/users';
import IconPanelTag from '~icons/panel/tag';
import IconPanelWarehouse from '~icons/panel/warehouse';
import IconPanelTranslate from '~icons/panel/translate';
import IconPanelStructureVertical from '~icons/panel/structure-vertical';
import IconPanelStore from '~icons/panel/store';
import IconPanelShirt from '~icons/panel/shirt';
import IconPanelVoucher from '~icons/panel/voucher';
import IconPanelSettings from '~icons/panel/settings';
import { markRaw } from 'vue';

const productImports = [
    {
        value: 'product name',
        label: 'product name',
        description: 'product name',
        isFavorite: true,
    },
    {
        value: 'basic advanced attribute',
        label: 'basic advanced attribute',
        description: 'basic advanced attribute',
        isFavorite: true,
    },
    {
        value: 'unlock attribute group',
        label: 'unlock attribute group',
        description: 'unlock attribute group',
        isFavorite: true,
    },
    {
        value: 'product simple attributes',
        label: 'product simple attributes',
        description: 'product simple attributes',
        isFavorite: true,
    },
    {
        value: 'product sorting keys',
        label: 'product sorting keys',
        description: 'product sorting keys',
    },
    {
        value: 'product indexing',
        label: 'product indexing',
        description: 'product indexing',
    },
];

const shopImports = [
    {
        value: 'create shop category',
        label: 'create shop category',
        description: 'create shop category',
    },
    {
        value: 'move shop category',
        label: 'move shop category',
        description: 'move shop category',
    },
    {
        value: 'update shop category',
        label: 'update shop category',
        description: 'update shop category',
    },
    {
        value: 'shop search synonym',
        label: 'shop search synonym',
        description: 'shop search synonym',
    },
    {
        value: 'update assortment',
        label: 'import update assortment',
        description: 'update assortment',
    },
    {
        value: 'redirect',
        label: 'redirect',
        description: 'redirect',
    },
];

/** @module import-types-list */
export default [
    {
        value: 'prices',
        label: 'import price',
        icon: markRaw(IconPanelTag),
        items: [
            {
                value: 'price campaign',
                label: 'import price campaign',
                description: 'price campaign',
            },
            {
                value: 'price',
                label: 'import shop price',
                description: 'price',
            },
            {
                value: 'overwrite merchant price',
                label: 'import overwrite merchant price',
                description: 'overwrite merchant price',
            },
            {
                value: 'remove custom price',
                label: 'import remove custom price',
                description: 'remove custom price',
            },
            {
                value: 'remove price history',
                label: 'import remove price history',
                description: 'remove price history',
            },
        ],
    },
    {
        value: 'merchants',
        label: 'import merchants',
        icon: markRaw(IconPanelWarehouse),
        items: [
            {
                value: 'merchant attribute mapping',
                label: 'merchant attribute mapping',
                description: 'merchant attribute mapping',
            },
            {
                value: 'merchant category mapping',
                label: 'import merchant category mapping',
                description: 'merchant category mapping',
            },
            {
                value: 'merchant product state',
                label: 'merchant product state',
                description: 'merchant product state',
            },
            {
                value: 'zip code warehouse',
                label: 'zip code warehouse',
                description: 'zip code warehouse',
            },
        ],
    },
    {
        value: 'translations',
        label: 'translation',
        icon: markRaw(IconPanelTranslate),
        items: [
            {
                value: 'attribute translation',
                label: 'attribute translation',
                description: 'attribute translation',
            },
            {
                value: 'attribute group translation',
                label: 'attribute group translation',
                description: 'attribute group translation',
            },
            {
                value: 'master category translation',
                label: 'master category translation',
                description: 'master category translation',
            },
        ],
    },
    {
        value: 'settings',
        label: 'settings',
        icon: markRaw(IconPanelStructureVertical),
        items: [
            {
                value: 'attribute',
                label: 'attribute',
                description: 'attribute',
            },
            {
                value: 'master category',
                label: 'master category',
                description: 'master category',
            },
            {
                value: 'attribute mapping',
                label: 'attribute mapping',
                description: 'attribute mapping',
            },
        ],
    },
    {
        value: 'shops',
        label: 'import shops',
        icon: markRaw(IconPanelStore),
        items: shopImports,
    },
    {
        value: 'products',
        label: 'product',
        icon: markRaw(IconPanelShirt),
        items: productImports,
    },
    {
        value: 'customers',
        label: 'customers',
        icon: markRaw(IconPanelUsers),
        items: [
            {
                value: 'customer group',
                label: 'customer group',
                description: 'customer group',
            },
            {
                value: 'block customer',
                label: 'block customer',
                description: 'block customer',
            },
        ],
    },
    {
        value: 'vouchers',
        label: 'vouchers',
        icon: markRaw(IconPanelVoucher),
        items: [
            {
                value: 'activate voucher',
                label: 'activate voucher',
                description: 'activate voucher',
            },
            {
                value: 'deactivate voucher',
                label: 'deactivate voucher',
                description: 'deactivate voucher',
            },
        ],
    },
    {
        value: 'checkout configurations',
        label: 'co configurations',
        icon: markRaw(IconPanelSettings),
        items: [
            {
                value: 'tenant checkout configuration',
                label: 'tenant checkout configuration',
                description: 'tenant checkout configuration',
            },
            {
                value: 'country checkout configuration',
                label: 'country checkout configuration',
                description: 'country checkout configuration',
            },
            {
                value: 'shop checkout configuration',
                label: 'shop checkout configuration',
                description: 'shop checkout configuration',
            },
        ],
    },
];
