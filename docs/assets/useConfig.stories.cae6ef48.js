import{e as m}from"./vue.esm-bundler.b273ba75.js";import{u as p}from"./useConfig.46e52741.js";const d={title:"Composables/useConfig"},u=m({setup(){return{config:p()}},template:"<div>Locale: {{config.locale}}</div>"}),l=m({setup(){return{config:p({locale:"de"})}},render(){return this.$slots.default()}}),n=e=>({components:{ShowConfig:u},setup(){return{args:e}},template:"<ShowConfig/>"}),o=e=>({components:{GermanLocale:l,ShowConfig:u},setup(){return{args:e}},template:"<GermanLocale><ShowConfig/></GermanLocale>"});var r,t,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`(args: any) => ({
  components: {
    ShowConfig
  },
  setup() {
    return {
      args
    };
  },
  template: '<ShowConfig/>'
})`,...(s=(t=n.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var a,c,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`(args: any) => ({
  components: {
    GermanLocale,
    ShowConfig
  },
  setup() {
    return {
      args
    };
  },
  template: '<GermanLocale><ShowConfig/></GermanLocale>'
})`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const C=["Default","OverrideConfig"];export{n as Default,o as OverrideConfig,C as __namedExportsOrder,d as default};
