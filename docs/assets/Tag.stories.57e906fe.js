import{u as p}from"./vue.esm-bundler.b273ba75.js";import{_ as n}from"./Tag.79dce8d9.js";import"./close.08060f32.js";import"./_plugin-vue_export-helper.cdc0426e.js";const v={title:"Components/Tag",component:n,argTypes:{closable:{description:"If `true` an x-button is shown at the end of every tag which triggers an event on click"},close:{description:"Event fired after the x-button of a tag was clicked"}}},e=s=>({components:{Tag:n},setup(){return{args:s}},template:`<div class="space-x-2">
        <Tag>Default</Tag>
        <Tag type="info">Info</Tag>
        <Tag type="success">Success</Tag>
        <Tag type="warning">Warning</Tag>
        <Tag type="danger">Danger</Tag>
    </div>`});e.args={closable:!1};const a=s=>({components:{Tag:n},setup(){const l=p(!0);return{args:s,visible:l}},template:`<div>
        <input type="checkbox" v-model="visible" class="mr-2">
        <Tag v-if="visible" closable @close="visible = false">Moin</Tag>
    </div>`});a.args={closable:!0};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`(args: any) => ({
  components: {
    Tag
  },
  setup() {
    return {
      args
    };
  },
  template: \`<div class="space-x-2">
        <Tag>Default</Tag>
        <Tag type="info">Info</Tag>
        <Tag type="success">Success</Tag>
        <Tag type="warning">Warning</Tag>
        <Tag type="danger">Danger</Tag>
    </div>\`
})`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var i,c,g;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`(args: any) => ({
  components: {
    Tag
  },
  setup() {
    const visible = ref(true);
    return {
      args,
      visible
    };
  },
  template: \`<div>
        <input type="checkbox" v-model="visible" class="mr-2">
        <Tag v-if="visible" closable @close="visible = false">Moin</Tag>
    </div>\`
})`,...(g=(c=a.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const f=["Default","Closable"];export{a as Closable,e as Default,f as __namedExportsOrder,v as default};
