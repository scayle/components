
The notification behaves like a composable.
There is no need to add an HTML element into your code. Just import `useNotification` and access its methods.

The notification is then being injected into the DOM.

==Important: You can only call the useNotification composable inside of your setup function (composition API).==

## Usage

### Info notification

```js
import { useNotification } from '@scayle/components';

useNotification().info("This is the title", "This is the subtitle");
```

### Success notification

```js
import { useNotification } from '@scayle/components';

useNotification().success("This is the title", "This is the subtitle");
```

### Warning notification

```js
import { useNotification } from '@scayle/components';

useNotification().warning("This is the title", "This is the subtitle");
```

### Error notification

```js
import { useNotification } from '@scayle/components';

useNotification().error("This is the title", "This is the subtitle");
```

### Clear all open notifications

```js
import { useNotification } from '@scayle/components';

useNotification().clear();
```

### Passing options

```js
import { useNotification } from '@scayle/components';

useNotification().warning("This is the title", "This is the subtitle", {
    duration: 0
});
```

## Available options

The optional config parameter accepts an object containing the following properties:

```html

<table>
    <thead>
    <tr>
        <th>Attribute</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>duration</td>
        <td>Number</td>
        <td>`8000`</td>
        <td>Visibility duration in milliseconds, set to `0` to keep notification visible</td>
    </tr>
    <tr>
        <td>dismissible</td>
        <td>Boolean</td>
        <td>`true`</td>
        <td>Allow user to dismiss a notification by clicking it</td>
    </tr>
    <tr>
        <td>onClick</td>
        <td>Function</td>
        <td>-</td>
        <td>Do something when user clicks notification</td>
    </tr>
    <tr>
        <td>onDismiss</td>
        <td>Function</td>
        <td>-</td>
        <td>Do something after notification gets dismissed</td>
    </tr>
    <tr>
        <td>queue</td>
        <td>Boolean</td>
        <td>`false`</td>
        <td>Wait for existing notifications to dismiss before showing new</td>
    </tr>
    <tr>
        <td>pauseOnHover</td>
        <td>Boolean</td>
        <td>`true`</td>
        <td>Pause the timer when mouse on over a notification</td>
    </tr>
    </tbody>
</table>
```
