/**
 * Internal dependencies.
 */
import { getCurrentInstance } from 'vue';

export default function useEmitter() {
    const vm = getCurrentInstance();

    if (!vm) {
        throw new Error('Do not use outside of a component!');
    }

    return {
        emit: vm.emit,
    };
}
