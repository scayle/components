import{B as p}from"./Breadcrumbs.f9d4ca6d.js";import"./chevron-right.d2e28c24.js";import"./vue.esm-bundler.b273ba75.js";import"./DropdownItem.4f4382c8.js";import"./Popper.a2a40fe0.js";import"./index.dc338bd7.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./useNodeRootElement.8a60063e.js";import"./Spinner.81853108.js";import"./more.254f4089.js";const w={title:"Components/Breadcrumbs",component:p,argTypes:{breadcrumbs:{description:"The array containing the breadcrumbs."},collapseAtSize:{description:"The amount of items which makes the breadcrumbs collapse. In the collapsed state, only the first and last item are shown. The ones inbetween are hidden under a dropdown."}}},d=({collapsed:c,notCollapsed:l,...i})=>({components:{Breadcrumbs:p},setup(){return{args:i,collapsed:c,notCollapsed:l}},template:`
        <Breadcrumbs v-bind="args">

        </Breadcrumbs>
    `}),e=d.bind({});e.args={breadcrumbs:[{href:"#",name:"With link 1"},{name:"Without link"},{href:"#",name:"With link 2"},{name:"Current page"}]};const r=d.bind({});r.args={collapseAtSize:5,breadcrumbs:[{name:"With link 1",href:"#"},{name:"Without link"},{name:"With link 2",href:"#"},{name:"Current page",href:"#"}]};var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  collapsed,
  notCollapsed,
  ...args
}) => ({
  components: {
    Breadcrumbs
  },
  setup() {
    return {
      args,
      collapsed,
      notCollapsed
    };
  },
  template: \`
        <Breadcrumbs v-bind="args">

        </Breadcrumbs>
    \`
})`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var t,o,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`({
  collapsed,
  notCollapsed,
  ...args
}) => ({
  components: {
    Breadcrumbs
  },
  setup() {
    return {
      args,
      collapsed,
      notCollapsed
    };
  },
  template: \`
        <Breadcrumbs v-bind="args">

        </Breadcrumbs>
    \`
})`,...(m=(o=r.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const S=["Collapsed","NotCollapsed"];export{e as Collapsed,r as NotCollapsed,S as __namedExportsOrder,w as default};
