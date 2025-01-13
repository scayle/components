import{B as r}from"./Badge.008c3100.js";import{_ as s}from"./Badges.8e9b3431.js";import"./vue.esm-bundler.b273ba75.js";import"./_plugin-vue_export-helper.cdc0426e.js";const B={title:"Components/Badges",component:s,argTypes:{default:{description:"The slot to provide the Badges you want to group"}}},p=({...o})=>({components:{Badge:r,Badges:s},setup(){return{args:o}},template:`<Badges>
      <Badge label="test"/>
      <Badge type="warning" label="test2"/>
      <Badge type="info" label="test3"/>
    </Badges>`}),e=p.bind({});e.args={};var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`({
  ...args
}) => ({
  components: {
    Badge,
    Badges
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Badges>
      <Badge label="test"/>
      <Badge type="warning" label="test2"/>
      <Badge type="info" label="test3"/>
    </Badges>\`
})`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const i=["Default"];export{e as Default,i as __namedExportsOrder,B as default};
