<template>
    <li class="ay-dropdown-item">
        <slot />
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DropdownItem',
});
</script>
