import{u as m}from"./vue.esm-bundler.b273ba75.js";import{a as V}from"./chunk-WFFRPTHA.7b7bd586.js";import{S as s}from"./SearchInput.6e937c3a.js";import"./preview-errors.186ba3db.js";import"./index.67736049.js";import"./Input.310ceaf0.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./index.dc338bd7.js";import"./useTranslation.af5e9418.js";import"./useConfig.46e52741.js";const x={title:"Components/SearchInput",component:s,argTypes:{"update:modelValue":{action:"update:modelValue"},modelValue:{description:"The value of the input (v-model)"},placeholder:{description:"The placeholder of the input"},loading:{description:"Replaces the search icon on the left with a rotating loading spinner"},size:{description:"The size of the input"}}},c=({...n})=>({components:{SearchInput:s},setup(){const o=m(n.modelValue||"");return{args:n,onUpdate:t=>{o.value=t,V("update:modelValue")(t)},initialModelValue:o}},template:`
        <SearchInput v-bind="args" :model-value="initialModelValue" @update:modelValue="onUpdate"/>
    `}),e=c.bind({});e.args={modelValue:"",placeholder:""};const a=c.bind({});a.args={modelValue:"",placeholder:"",loading:!0};var l,r,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
  ...args
}) => ({
  components: {
    SearchInput
  },
  setup() {
    const initialModelValue = ref(args.modelValue || '');
    const onUpdate = value => {
      initialModelValue.value = value;
      action('update:modelValue')(value);
    };
    return {
      args,
      onUpdate,
      initialModelValue
    };
  },
  template: \`
        <SearchInput v-bind="args" :model-value="initialModelValue" @update:modelValue="onUpdate"/>
    \`
})`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var d,u,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`({
  ...args
}) => ({
  components: {
    SearchInput
  },
  setup() {
    const initialModelValue = ref(args.modelValue || '');
    const onUpdate = value => {
      initialModelValue.value = value;
      action('update:modelValue')(value);
    };
    return {
      args,
      onUpdate,
      initialModelValue
    };
  },
  template: \`
        <SearchInput v-bind="args" :model-value="initialModelValue" @update:modelValue="onUpdate"/>
    \`
})`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const z=["Default","Loading"];export{e as Default,a as Loading,z as __namedExportsOrder,x as default};
