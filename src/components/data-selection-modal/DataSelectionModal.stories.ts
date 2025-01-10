import { computed, ref, watch } from 'vue';
import { action } from '@storybook/addon-actions';
import DataSelectionModal from './index.vue';
import mockData from './mock-data';

export default {
    title: 'Components/DataSelectionModal',
    component: DataSelectionModal,
    argTypes: {
        visible: {
            description: 'This prop controls the visibility of the modal (supports v-model).',
        },

        title: {
            description: 'The title of the modal',
        },

        allItemsTitle: {
            description: 'The title for the "All Items" category. For example "All Imports".',
        },

        loading: {
            description: 'By setting this prop to `true`, a loading spinner is shown instead of the categories.',
        },

        favoritesEnabled: {
            description:
                'With this prop the favorites function is toggled. If enabled, a clickable star icon is shown for every item and the favorites category appears.',
        },

        'update:visible': {
            description: 'This event is triggered if the visibilty is changed by the modal',
        },

        submitAction: {
            description:
                'This event is triggered after clicking on an item panel. The payload of the event is the `value` property of the item.',
        },

        toggleFavourite: {
            description:
                'This event is triggered after clicking on the star icon inside of an item panel. The payload of the event is an object containing the following properties: `value` as the `value` property of the item and `isFavorite` as a boolean.',
        },
    },
};

const Template = (args: any) => ({
    components: { DataSelectionModal },

    setup() {
        const visible = ref(!!args.visible);
        const onVisibleUpdate = action('update:visible');

        watch(
            computed(() => args.visible),
            newValue => (visible.value = newValue)
        );

        const itemsForSelection = ref(args.items);

        const toggleFav = ({ value, isFavorite }) => {
            let found = false;
            let i: number;
            let j: number;
            for (i = 0; i < itemsForSelection.value.length; i++) {
                for (j = 0; j < itemsForSelection.value[i].items.length; j++) {
                    if (itemsForSelection.value[i].items[j].value === value) {
                        found = true;
                        break;
                    }
                }
                if (found) {
                    break;
                }
            }

            itemsForSelection.value[i].items[j].isFavorite = isFavorite;
        };

        return {
            args,
            visible,
            itemsForSelection,
            onVisibleUpdate,
            toggleFav,
        };
    },

    template: `
    <div class="flex items-center justify-center h-32">
        <button class="btn btn-primary" @click="visible = true">Open Modal</button>
        <DataSelectionModal
            v-bind="args"
            v-on="args"
            :items-for-selection="itemsForSelection"
            v-model:visible="visible"
            @update:visible="onVisibleUpdate"
            @toggle-favourite="toggleFav"
        />
    </div>`,
});

export const Default = Template.bind({});
Default.args = {
    items: mockData,
    title: 'Imports',
    allItemsTitle: 'All Imports',
};

export const Favorites = Template.bind({});
Favorites.args = {
    items: mockData,
    title: 'Imports',
    allItemsTitle: 'All Imports',
    favoritesEnabled: true,
};
