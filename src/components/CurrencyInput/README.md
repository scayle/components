
There's also a headless variant which takes the same props and lets you pass in your own input as the default slot.

    <currency-behavior v-model="currencyValue" currency="EUR" v-slot="{nativeBindings}">
        <input v-bind="nativeBindings" />
    </currency-behavior>

    <currency-behavior v-model="currencyValue" currency="USD" v-slot="{componentBindings}">
        <ay-input v-bind="componentBindings"></ay-input>
    </currency-behavior>
