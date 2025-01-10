
### BaseModal

A headless component that wraps the dialog element and adds some extra behavior.

---

### Modal

Fully constructed modal with common used properties.

**Example:**

```vue
<template>
    <Modal visible submitting title="Some Title" cancel-text="Cancel" submit-text="Submit" @update:visible="" />
</template>

<script>
import { Modal } from '@scayle/components';

export default {
    components: {
        Modal,
    },
};
</script>
```

---

### ModalTemplate

Is the base template to building your own custom modals with the building blocks we have.

**Example:**

```vue
<template>
    <ModalTemplate visible @update:visible="">
        <template #default="{ cancel, submit }">
            <ModalHeader title="Some title" @click="cancel" />

            <ModalBody>
                <slot />
            </ModalBody>

            <ModalFooter>
                <ModalButton text="Cancel" @click="cancel" />
                <ModalButton submitting text="Submit" variant="submit" @click="submit" />
            </ModalFooter>
        </template>
    </ModalTemplate>
</template>

<script>
import {
    ModalBody,
    ModalHeader,
    ModalFooter,
    ModalButton,
    ModalTemplate,
} from '@scayle/components';

export default {
    components: {
        ModalBody,
        ModalHeader,
        ModalFooter,
        ModalButton,
        ModalTemplate,
    },
};
</script>
```

#### Use case

The use case of the ModalTemplate is to build your own custom modals or to remove any of the you do not want to use. For an example the footer.

**Example:**

```vue
<template>
    <ModalTemplate visible @update:visible="">
        <template #default="{ cancel, submit }">
            <ModalHeader title="Some title" @click="cancel" />

            <ModalBody>
                <slot />
            </ModalBody>
        </template>
    </ModalTemplate>
</template>

<script>
import {
    ModalBody,
    ModalHeader,
    ModalButton,
    ModalTemplate,
} from '@scayle/components';

export default {
    components: {
        ModalBody,
        ModalHeader,
        ModalButton,
        ModalTemplate,
    },
};
</script>
```
