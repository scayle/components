import type { ComputedRef, DeepReadonly } from 'vue';
import { ref, computed, reactive, readonly } from 'vue';

export interface Store<T, U> {
    getCurrentValue: ComputedRef<T>;
    isEmpty: ComputedRef<boolean>;
    isNotEmpty: ComputedRef<boolean>;
    isMultiSelect?: boolean;

    clearValue(): void;

    setWholeValue(_value: T): void;

    toggleValue(_value: U): void;

    setValue(_value: U): void;

    removeValue(_value: U): void;

    compareValue(_compareValue: U): boolean;
}

export type SelectOption<T> = {
    value: T;
    disabled: boolean | undefined;
    label: string | undefined;
    // ref
};

export type SelectState<T, U> = {
    activeId: string | null;
    currentValue: T;
    isOpen: boolean;
    options: { uuid: string; opt: SelectOption<U> }[];
};

export type BaseSelectStore<T, U> = {
    state: DeepReadonly<SelectState<T, U>>;

    isMultiSelect?: boolean;
    isFullyOpened: ComputedRef<boolean>;
    selectOption: (_: U) => void;
    deselectOption: (_: U) => void;
    openMenu: () => void;
    closeMenu: () => void;
    toggleMenu: () => void;
    selectActive: () => void;
    addOption: (_arg0: string, _arg1: SelectOption<U>) => void;
    removeOption: (_: string) => void;
    navigateNext: () => void;
    navigatePrevious: () => void;
    setActive: (_: string) => void;
    _changeFullyOpenedState: (_state: boolean) => void;
} & Pick<
    Store<T, U>,
    'setValue' | 'setWholeValue' | 'removeValue' | 'clearValue' | 'compareValue' | 'isEmpty' | 'isNotEmpty'
>;

export type CreateStoreOptions<U> = {
    onSelected?: (_value: U) => void;
};

export default function createStore<T, U>(
    store: Store<T, U>,
    { onSelected = () => {} }: CreateStoreOptions<U> = {}
): BaseSelectStore<T, U> {
    const fullyOpened = ref(false);
    const options: SelectState<T, U>['options'] = reactive([]);

    const state: SelectState<T, U> = reactive({
        activeId: null,
        isOpen: false,
        options: options as any,
        currentValue: store.getCurrentValue,
    });

    function selectOption(val: U) {
        store.toggleValue(val);
        onSelected(val);
    }

    function deselectOption(val: U) {
        store.removeValue(val);
    }

    function openMenu() {
        if (store.isNotEmpty.value) {
            state.activeId = options.find(o => store.compareValue(o.opt.value))?.uuid ?? null;
        }

        state.isOpen = true;
    }

    function closeMenu() {
        state.isOpen = false;
        state.activeId = null;
    }

    function toggleMenu() {
        if (state.isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    function addOption(uuid: string, opt: SelectOption<U>) {
        options.push({ uuid, opt });
    }

    function removeOption(uuid: string) {
        const index = options.findIndex(o => o.uuid === uuid);

        // index not found
        if (index === -1) {
            return;
        }

        options.splice(index, 1);
    }

    function setActive(uuid: string) {
        state.activeId = uuid;
    }

    function getOptionElementIdData(currentOptionId: string) {
        const currentElement = document.querySelector(`[data-select-option-id="${currentOptionId}"]`);
        const optionGroupParentId = currentElement?.getAttribute('data-select-option-group-parent-id');

        return {
            currentElement,
            optionGroupParentId,
        };
    }

    function getNextOptionElementId(currentOptionId: string | null): string | null | undefined {
        if (!currentOptionId) {
            return;
        }

        const { currentElement, optionGroupParentId } = getOptionElementIdData(currentOptionId);
        let nextElementUuid = currentElement?.nextElementSibling?.getAttribute('data-select-option-id');

        // if we do not have next element uuid
        if (!nextElementUuid && optionGroupParentId) {
            const nextOptionGroup = currentElement?.closest(
                `[data-select-option-group-id="${optionGroupParentId}"]`
            )?.nextElementSibling;

            if (!nextOptionGroup) {
                return;
            }

            // get first option
            nextElementUuid = nextOptionGroup
                ?.querySelector('[data-select-option-id]')
                ?.getAttribute('data-select-option-id');
        }

        return nextElementUuid;
    }

    function getPreviousOptionElementId(currentOptionId: string | null): string | null | undefined {
        if (!currentOptionId) {
            return;
        }

        const { currentElement, optionGroupParentId } = getOptionElementIdData(currentOptionId);
        let previousElementUuid = currentElement?.previousElementSibling?.getAttribute('data-select-option-id');

        // if we do not have next element uuid
        if (!previousElementUuid && optionGroupParentId) {
            const previousOptionGroup = currentElement?.closest(
                `[data-select-option-group-id="${optionGroupParentId}"]`
            )?.previousElementSibling;

            if (!previousOptionGroup) {
                return;
            }

            // get first option
            previousElementUuid = previousOptionGroup
                ?.querySelector('[data-select-option-id]:last-child')
                ?.getAttribute('data-select-option-id');
        }

        return previousElementUuid;
    }

    function navigateNext() {
        const currentElement = document.querySelector(`[data-select-option-id="${state.activeId}"]`);
        const nextElementUuid = getNextOptionElementId(state.activeId);

        if (!currentElement) {
            state.activeId = options[0]?.uuid ?? null;
        } else if (nextElementUuid) {
            state.activeId = nextElementUuid;
        }

        if (state.activeId && !state.isOpen) {
            openMenu();
        }
    }

    function navigatePrevious() {
        const currentElement = document.querySelector(`[data-select-option-id="${state.activeId}"]`);
        const previousElementUuid = getPreviousOptionElementId(state.activeId);

        if (!currentElement) {
            state.activeId = options[0]?.uuid ?? null;
        } else if (previousElementUuid) {
            state.activeId = previousElementUuid;
        }

        if (state.activeId && !state.isOpen) {
            openMenu();
        }
    }

    function selectActive() {
        const activeOption = options.find(o => o.uuid === state.activeId);
        if (activeOption) {
            selectOption(activeOption.opt.value);
        }
    }

    const _changeFullyOpenedState = (state: boolean) => {
        fullyOpened.value = state;
    };

    return {
        state: readonly(state) as BaseSelectStore<T, U>['state'],
        selectOption,
        deselectOption,
        openMenu,
        closeMenu,
        toggleMenu,
        addOption,
        removeOption,
        navigateNext,
        navigatePrevious,
        setActive,
        selectActive,
        isEmpty: store.isEmpty,
        isNotEmpty: store.isNotEmpty,
        setValue: store.setValue.bind(store),
        removeValue: store.removeValue.bind(store),
        clearValue: store.clearValue.bind(store),
        compareValue: store.compareValue.bind(store),
        setWholeValue: store.setWholeValue.bind(store),
        isFullyOpened: computed(() => fullyOpened.value),
        _changeFullyOpenedState,
    };
}
