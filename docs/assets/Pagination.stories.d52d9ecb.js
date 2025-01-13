import{u as m}from"./vue.esm-bundler.b273ba75.js";import{_ as c}from"./Pagination.75e450f7.js";import"./chevron-right.d2e28c24.js";import"./utils.b3a37e59.js";import"./_plugin-vue_export-helper.cdc0426e.js";const f={title:"Components/Pagination",component:c,excludeStories:/.*Data$/,argTypes:{}},p=a=>({components:{Pagination:c},setup(){const u=m(a.currentPage||1);return{args:a,currentPage:u}},template:'<Pagination v-bind="args" v-on="args" v-model:current-page="currentPage" />'}),e=p.bind({});e.args={pageSize:15,total:120};const n=p.bind({});n.args={pageSize:15,total:120,disableCollapsedPages:!0};var r,t,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: any) => ({
  components: {
    Pagination
  },
  setup() {
    const currentPage = ref(args.currentPage || 1);
    return {
      args,
      currentPage
    };
  },
  template: '<Pagination v-bind="args" v-on="args" v-model:current-page="currentPage" />'
})`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var s,g,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`(args: any) => ({
  components: {
    Pagination
  },
  setup() {
    const currentPage = ref(args.currentPage || 1);
    return {
      args,
      currentPage
    };
  },
  template: '<Pagination v-bind="args" v-on="args" v-model:current-page="currentPage" />'
})`,...(i=(g=n.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};const _=["Default","WithCollapsedPagesDisabled"];export{e as Default,n as WithCollapsedPagesDisabled,_ as __namedExportsOrder,f as default};
