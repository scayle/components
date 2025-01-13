import{_ as i}from"./Input.310ceaf0.js";import"./vue.esm-bundler.b273ba75.js";import"./_plugin-vue_export-helper.cdc0426e.js";const l="\nA styled wrapper around the `<input>` element which also supports adding custom elements within the input.\n",g={title:"Components/Input",component:i,argTypes:{size:{options:["small","normal"],description:"The size of the spinner"},modelValue:{description:"The input's value. Supports v-model"},prepend:{description:"Content that appears before the input but within its borders"},append:{description:"Content that appears after the input but within its borders"},prefix:{description:"Content that appears inside the input before its value"},suffix:{description:"Content that appears inside the input after its value"},onInput:{}},parameters:{docs:{description:{component:l}}}},u=m=>({components:{Input:i},setup(){return{args:m}},template:'<Input v-bind="args" />'}),e=u.bind({});e.args={size:"normal",modelValue:"Default Input"};const t=u.bind({});t.args={size:"small",modelValue:"Small Input"};var n,s,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`(args: any) => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var a,p,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`(args: any) => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(o=(p=t.parameters)==null?void 0:p.docs)==null?void 0:o.source}}};const f=["Default","Small"];export{e as Default,t as Small,f as __namedExportsOrder,g as default};
