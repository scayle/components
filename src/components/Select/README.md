
The `<select>` component allows the user to select one or more values through a dropdown menu.

### Examples

#### Single-Select

When `multiple` is false, users can select only one item from a list of mutually exclusive options.

Basic

```vue
<select>
    <option v-for="option in testOptions" :value="option.name" :key="option" :label="option.name" :hint="option.hint" />
</select>
```

with Description

```vue
<select>
    <option v-for="option in testOptions" :value="option.name" :key="option" :label="option.name" :hint="option.hint" :description="option.description" />
</select>
```

with Leading Icon

```vue
<select>
    <option v-for="option in testOptions" :value="option.name" :key="option" :label="option.name" :hint="option.hint">
        <template #icon>
            <IconPanelExternal class="icon icon-xs" />
        </template>
    </option>
</select>
```

with Leading Icon + Description

```vue
<select>
    <option v-for="option in testOptions" :value="option.name" :key="option" :label="option.name" :hint="option.hint" :description="option.description">
        <template #icon>
            <IconPanelExternal class="icon icon-xs" />
        </template>
    </option>
</select>
```

Searching

```vue
<select searchable v-model="selectValue">
    <template #default="{query}">
        <option v-for="option in selectOptions.filter(o => o.toLowerCase().includes(query.toLowerCase()))" :value="option" :key="option">
            {{option}}
        </option>
    </template>
</select>
```

Object `modelValue` and `get-label` prop

```vue
<template>
    <select v-model="selectValue" :get-label="value => value?.label">
        <option v-for="option in selectOptions" :value="option" :key="option.id">
            {{ option.label }}
        </option>
    </select>
</template>

<script lang="ts">
export default {
    data() {
        return {
            selectValue: { id: 1, label: 'Coats' },
            selectOptions: [
                { id: 1, label: 'Coats' },
                { id: 2, label: 'Blouses' },
                { id: 3, label: 'Accessories' },
            ],
        };
    },
};
</script>
```

Grouped Select

```vue
<template>
    <select>
        <option-group v-for="group in fruitOptions" :title="group.group" :key="group.group">
            <option v-for="fruit in group.items" :value="fruit.name" :key="fruit.name">
                {{ fruit.icon }} - {{ fruit.name }}
            </option>
        </option-group>
    </select>
</template>

<script lang="ts">
export default {
    data() {
        return {
            fruitOptions: [
                {
                    group: 'Citrus',
                    items: [
                        {
                            name: 'Lemon',
                            icon: '🍋',
                        },
                        {
                            name: 'Orange',
                            icon: '🍊',
                        },
                    ],
                },
                {
                    group: 'Melon',
                    items: [
                        {
                            name: 'Watermelon',
                            icon: '🍉',
                        },
                        {
                            name: 'Honeydew',
                            icon: '🍈',
                        },
                    ],
                },
                {
                    group: 'Berry',
                    items: [
                        {
                            name: 'Strawberry',
                            icon: '🍓',
                        },
                        {
                            name: 'Blueberry',
                            icon: '🫐',
                        },
                    ],
                },
            ],
        };
    },
};
</script>
```

#### Multi-Select

TODO: See styleguide
