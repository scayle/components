<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
    name: 'ResizeObserver',
    props: {
        options: {
            // eslint-disable-next-line no-undef
            type: Object as PropType<ResizeObserverOptions>,
            default: () => ({}),
        },
    },
    emits: {
        resize(_payload: ResizeObserverEntry[]) {
            return true;
        },
    },
    data() {
        return {
            observer: null as ResizeObserver | null,
        };
    },
    mounted() {
        this.observer = new ResizeObserver(entries => {
            this.$emit('resize', entries);
        });

        this.observer?.observe(this.$el.nextElementSibling, this.options);
    },
    beforeUnmount() {
        this.observer?.unobserve(this.$el.nextElementSibling);
    },
    render() {
        return this.$slots.default?.();
    },
});
</script>
