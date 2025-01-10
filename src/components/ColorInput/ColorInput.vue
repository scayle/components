<template>
    <div class="ay-color-input">
        <div class="ay-color-input__picker">
            <label for="color-picker" :style="{ backgroundColor: value }" />
            <input id="color-picker" v-model="value" type="color">
        </div>
        <Input id="other-input" v-model="value" class="ay-color-input__input" />
    </div>
</template>

<script lang="ts">
import './ColorInput.css';
import { defineComponent, type PropType } from 'vue';
import Input from '../Input/Input.vue';

const validateHexCode = (value: string) => {
    const reg = /^#([0-9a-f]{3}){1,2}$/i;
    return reg.test(value);
};

export default defineComponent({
    name: 'ColorInput',

    components: {
        /* eslint-disable */
        Input,
    },

    props: {
        modelValue: {
            type: String as PropType<string>,
            validation: (value: string) => validateHexCode(value),
            default: '',
        },
    },

    emits: {
        ['update:modelValue'](_payload: string) {
            return true;
        },
    },

    computed: {
        value: {
            get() {
                return this.modelValue;
            },
            set(val: string) {
                // emit only valid hex colors
                const isValid = validateHexCode(val);
                if (!isValid) {
                    return '';
                }

                this.$emit('update:modelValue', val);
            },
        },
    },
});
</script>
