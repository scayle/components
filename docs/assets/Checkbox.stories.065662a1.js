import{u as x}from"./vue.esm-bundler.b273ba75.js";import{a as f}from"./chunk-WFFRPTHA.7b7bd586.js";import{C}from"./Checkbox.6a056d6b.js";import"./preview-errors.186ba3db.js";import"./index.67736049.js";import"./_plugin-vue_export-helper.cdc0426e.js";const _={title:"Components/Checkbox",component:C,argTypes:{label:{description:"The text to display on the right of the Checkbox"},modelValue:{description:"The boolean value representing whether the checkbox is checked or not"},backgroundColor:{description:"The background color of the checkbox (only visible if checked)"},darkCheck:{description:"Turns the color of the check mark icon from white to black"},disabled:{description:"Prevents interaction with the Checkbox if set to `true`"},change:{action:"change"}}},l=t=>({components:{Checkbox:C},setup(){const d=x(t.modelValue);return{args:t,modelValue:d,onModelValueUpdate:r=>{d.value=r,f("update:modelValue")(r)}}},template:`<Checkbox
        v-bind="args"
        v-on="args"
        :modelValue="modelValue"
        @update:modelValue="onModelValueUpdate"
    />`}),e=l.bind({});e.args={label:"Checkbox"};const a=l.bind({});a.args={label:"Checkbox",modelValue:!0};const o=l.bind({});o.args={label:"Checkbox",disabled:!0};const n=l.bind({});n.args={label:"Checkbox",modelValue:!0,disabled:!0};var u,s,c;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => ({
  components: {
    Checkbox
  },
  setup() {
    const modelValue = ref(args.modelValue);
    const onModelValueUpdate = (value: boolean) => {
      modelValue.value = value;
      action('update:modelValue')(value);
    };
    return {
      args,
      modelValue,
      onModelValueUpdate
    };
  },
  template: \`<Checkbox
        v-bind="args"
        v-on="args"
        :modelValue="modelValue"
        @update:modelValue="onModelValueUpdate"
    />\`
})`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var m,p,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`(args: any) => ({
  components: {
    Checkbox
  },
  setup() {
    const modelValue = ref(args.modelValue);
    const onModelValueUpdate = (value: boolean) => {
      modelValue.value = value;
      action('update:modelValue')(value);
    };
    return {
      args,
      modelValue,
      onModelValueUpdate
    };
  },
  template: \`<Checkbox
        v-bind="args"
        v-on="args"
        :modelValue="modelValue"
        @update:modelValue="onModelValueUpdate"
    />\`
})`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var V,b,h;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`(args: any) => ({
  components: {
    Checkbox
  },
  setup() {
    const modelValue = ref(args.modelValue);
    const onModelValueUpdate = (value: boolean) => {
      modelValue.value = value;
      action('update:modelValue')(value);
    };
    return {
      args,
      modelValue,
      onModelValueUpdate
    };
  },
  template: \`<Checkbox
        v-bind="args"
        v-on="args"
        :modelValue="modelValue"
        @update:modelValue="onModelValueUpdate"
    />\`
})`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,k,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`(args: any) => ({
  components: {
    Checkbox
  },
  setup() {
    const modelValue = ref(args.modelValue);
    const onModelValueUpdate = (value: boolean) => {
      modelValue.value = value;
      action('update:modelValue')(value);
    };
    return {
      args,
      modelValue,
      onModelValueUpdate
    };
  },
  template: \`<Checkbox
        v-bind="args"
        v-on="args"
        :modelValue="modelValue"
        @update:modelValue="onModelValueUpdate"
    />\`
})`,...(v=(k=n.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const E=["Default","Checked","DefaultDisabled","CheckedDisabled"];export{a as Checked,n as CheckedDisabled,e as Default,o as DefaultDisabled,E as __namedExportsOrder,_ as default};
