import{E as r}from"./EmptyState.1bffc204.js";import"./vue.esm-bundler.b273ba75.js";import"./_plugin-vue_export-helper.cdc0426e.js";const c={title:"Components/EmptyState",component:r,argTypes:{icon:{description:"The icon to display on top of the empty state"},textTitle:{description:"The title of the empty state"},textHint:{description:"A descriptive text under the title"},textButton:{description:"The text inside of the action button"},primaryBtnClicked:{description:"An event emitted after the button was clicked (only if the button was not overridden)"},button:{description:"The slot to override the button which is rendered by `textButton` prop"}}},i={EmptyState:r},t=s=>({components:i,setup(){return{args:{...s,textTitle:"No products found",textHint:"We could not find any products."}}},template:'<EmptyState v-bind="args"></EmptyState>'});var e,n,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args: {
        ...args,
        textTitle: 'No products found',
        textHint: 'We could not find any products.'
      }
    };
  },
  template: '<EmptyState v-bind="args"></EmptyState>'
})`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const m=["Default"];export{t as Default,m as __namedExportsOrder,c as default};
