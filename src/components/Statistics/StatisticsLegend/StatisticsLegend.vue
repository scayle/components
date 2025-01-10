<template>
    <div
        class="grid gap-x-4 overflow-y-auto"
        :class="{
            'rounded border border-secondary/20 p-4': border,
            'max-h-52 grid-cols-2': twoCols,
            'max-h-60': !twoCols,
        }"
    >
        <Checkbox
            v-for="(item, index) in items"
            :key="index"
            v-model="item.visible"
            :background-color="item.background"
            :dark-check="item.color === 'black'"
            :disabled="isCheckboxDisabled(item)"
            class="mr-0 flex items-center rounded p-2 hover:bg-light"
            :class="{ 'bg-light': activeIndex === index }"
            @input="$emit('toggle', index)"
            @mouseenter="$emit('hover', index)"
            @mouseleave="$emit('hover', -1)"
        >
            <slot v-if="$slots.item" name="item" :item="item" />
            <template v-else>
                {{ item.x }}
            </template>
        </Checkbox>
    </div>
</template>

<script lang="ts" setup>
import { computed, type PropType } from 'vue';
import Checkbox from '../../Checkbox/Checkbox.vue';

const props = defineProps({
    items: {
        type: Array as PropType<any[]>,
        required: true,
    },
    border: {
        type: Boolean,
        default: true,
    },
    twoCols: {
        type: Boolean,
        default: true,
    },
    activeIndex: {
        type: Number,
        default: null,
    },
});

defineEmits(['toggle', 'hover']);

const visibleItems = computed(() => props.items.filter(item => item.visible));

function isCheckboxDisabled(element: any) {
    return visibleItems.value.length === 1 && element.visible;
}
</script>
