import{_ as o}from"./Card.4a593158.js";import"./vue.esm-bundler.b273ba75.js";import"./_plugin-vue_export-helper.cdc0426e.js";const l={title:"Components/Card",component:o,argTypes:{header:{description:"The slot at the top of the Card"},default:{description:"The content slot of the Card"},footer:{description:"The slot at the bottom of the Card"}}},p=n=>({components:{Card:o},setup(){return{args:n}},template:`<Card v-bind="args">
      <template #header>
          <h4>Header</h4>
      </template>

      <template #default>
          <p>Body</p>
      </template>

      <template #footer>
          <p>Footer</p>
      </template>
    </Card>`}),e=p.bind({});e.args={};var t,a,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`(args: any) => ({
  components: {
    Card
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Card v-bind="args">
      <template #header>
          <h4>Header</h4>
      </template>

      <template #default>
          <p>Body</p>
      </template>

      <template #footer>
          <p>Footer</p>
      </template>
    </Card>\`
})`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,l as default};
