import{B as y}from"./Breadcrumbs.f9d4ca6d.js";import{A as T}from"./AppHeader.7440f946.js";import"./chevron-right.d2e28c24.js";import"./vue.esm-bundler.b273ba75.js";import"./DropdownItem.4f4382c8.js";import"./Popper.a2a40fe0.js";import"./index.dc338bd7.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./useNodeRootElement.8a60063e.js";import"./Spinner.81853108.js";import"./more.254f4089.js";const G={title:"Components/AppHeader",component:T,argTypes:{title:{description:"The title of the app header"},avatar:{description:"The slot before the title"},breadcrumbs:{description:"The slot for the breadcrumbs (below the title)"},default:{description:"The slot on the right of the app header"}}},s=({withBeforeTitle:D,withBreadcrumbs:S,withDefaultSlot:A,...H})=>({components:{AppHeader:T,Breadcrumbs:y},setup(){return{args:H,withBeforeTitle:D,withBreadcrumbs:S,withDefaultSlot:A}},template:`
        <AppHeader v-bind="args">
          <template v-if="withBeforeTitle" #avatar>
              <div class="w-12 h-12 bg-gray rounded-full bg-black mr-4"/>
          </template>

          <template v-if="withBreadcrumbs" #breadcrumbs>
              <Breadcrumbs v-bind="args">

              </Breadcrumbs>
          </template>

          <template v-if="withDefaultSlot" #default>
              <button class="btn btn-primary inline-flex items-center">
                  Demo
              </button>
          </template>
        </AppHeader>
    `}),e=s.bind({});e.args={title:"Title"};const t=s.bind({});t.args={title:"Title",withBeforeTitle:!0};const r=s.bind({});r.args={title:"Title",withBreadcrumbs:!0,breadcrumbs:[{href:"#",name:"Test"},{href:"#",name:"Test 2"},{href:"#",name:"Test 3"},{name:"Test 4"}]};const n=s.bind({});n.args={title:"Title",withDefaultSlot:!0};const a=s.bind({});a.args={title:"Title",withBeforeTitle:!0,withBreadcrumbs:!0,withDefaultSlot:!0};var i,l,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({
  withBeforeTitle,
  withBreadcrumbs,
  withDefaultSlot,
  ...args
}) => ({
  components: {
    AppHeader,
    Breadcrumbs
  },
  setup() {
    return {
      args,
      withBeforeTitle,
      withBreadcrumbs,
      withDefaultSlot
    };
  },
  template: \`
        <AppHeader v-bind="args">
          <template v-if="withBeforeTitle" #avatar>
              <div class="w-12 h-12 bg-gray rounded-full bg-black mr-4"/>
          </template>

          <template v-if="withBreadcrumbs" #breadcrumbs>
              <Breadcrumbs v-bind="args">

              </Breadcrumbs>
          </template>

          <template v-if="withDefaultSlot" #default>
              <button class="btn btn-primary inline-flex items-center">
                  Demo
              </button>
          </template>
        </AppHeader>
    \`
})`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var o,p,u;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`({
  withBeforeTitle,
  withBreadcrumbs,
  withDefaultSlot,
  ...args
}) => ({
  components: {
    AppHeader,
    Breadcrumbs
  },
  setup() {
    return {
      args,
      withBeforeTitle,
      withBreadcrumbs,
      withDefaultSlot
    };
  },
  template: \`
        <AppHeader v-bind="args">
          <template v-if="withBeforeTitle" #avatar>
              <div class="w-12 h-12 bg-gray rounded-full bg-black mr-4"/>
          </template>

          <template v-if="withBreadcrumbs" #breadcrumbs>
              <Breadcrumbs v-bind="args">

              </Breadcrumbs>
          </template>

          <template v-if="withDefaultSlot" #default>
              <button class="btn btn-primary inline-flex items-center">
                  Demo
              </button>
          </template>
        </AppHeader>
    \`
})`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,c,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`({
  withBeforeTitle,
  withBreadcrumbs,
  withDefaultSlot,
  ...args
}) => ({
  components: {
    AppHeader,
    Breadcrumbs
  },
  setup() {
    return {
      args,
      withBeforeTitle,
      withBreadcrumbs,
      withDefaultSlot
    };
  },
  template: \`
        <AppHeader v-bind="args">
          <template v-if="withBeforeTitle" #avatar>
              <div class="w-12 h-12 bg-gray rounded-full bg-black mr-4"/>
          </template>

          <template v-if="withBreadcrumbs" #breadcrumbs>
              <Breadcrumbs v-bind="args">

              </Breadcrumbs>
          </template>

          <template v-if="withDefaultSlot" #default>
              <button class="btn btn-primary inline-flex items-center">
                  Demo
              </button>
          </template>
        </AppHeader>
    \`
})`,...(b=(c=r.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var f,h,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`({
  withBeforeTitle,
  withBreadcrumbs,
  withDefaultSlot,
  ...args
}) => ({
  components: {
    AppHeader,
    Breadcrumbs
  },
  setup() {
    return {
      args,
      withBeforeTitle,
      withBreadcrumbs,
      withDefaultSlot
    };
  },
  template: \`
        <AppHeader v-bind="args">
          <template v-if="withBeforeTitle" #avatar>
              <div class="w-12 h-12 bg-gray rounded-full bg-black mr-4"/>
          </template>

          <template v-if="withBreadcrumbs" #breadcrumbs>
              <Breadcrumbs v-bind="args">

              </Breadcrumbs>
          </template>

          <template v-if="withDefaultSlot" #default>
              <button class="btn btn-primary inline-flex items-center">
                  Demo
              </button>
          </template>
        </AppHeader>
    \`
})`,...(w=(h=n.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var B,g,v;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`({
  withBeforeTitle,
  withBreadcrumbs,
  withDefaultSlot,
  ...args
}) => ({
  components: {
    AppHeader,
    Breadcrumbs
  },
  setup() {
    return {
      args,
      withBeforeTitle,
      withBreadcrumbs,
      withDefaultSlot
    };
  },
  template: \`
        <AppHeader v-bind="args">
          <template v-if="withBeforeTitle" #avatar>
              <div class="w-12 h-12 bg-gray rounded-full bg-black mr-4"/>
          </template>

          <template v-if="withBreadcrumbs" #breadcrumbs>
              <Breadcrumbs v-bind="args">

              </Breadcrumbs>
          </template>

          <template v-if="withDefaultSlot" #default>
              <button class="btn btn-primary inline-flex items-center">
                  Demo
              </button>
          </template>
        </AppHeader>
    \`
})`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const I=["Default","BeforeTitle","WithBreadcrumbs","DefaultSlot","AllOptions"];export{a as AllOptions,t as BeforeTitle,e as Default,n as DefaultSlot,r as WithBreadcrumbs,I as __namedExportsOrder,G as default};
