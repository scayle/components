import { ref } from 'vue';
import ColorInput from './ColorInput.vue';

export default {
    title: 'Components/ColorInput',
    component: ColorInput,
    argTypes: {
        modelValue: {
            description: 'Represents the selected color as hex string',
        },
    },
};

const Template = () => ({
    components: { ColorInput },
    setup() {
        const currentColor = ref('#ff0000');
        return { currentColor };
    },
    template: `
        <div>
            <p class="mb-2">{{currentColor}}</p>
            <ColorInput v-model="currentColor"></ColorInput>
        </div>
    `,
});

export const Default = Template.bind({});
