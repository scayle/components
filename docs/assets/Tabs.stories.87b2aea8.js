import{T as i}from"./Tab.02c59975.js";import{T as s}from"./Tabs.a5ad2279.js";import{T as p}from"./TabButton.6b4aba22.js";import"./vue.esm-bundler.b273ba75.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./utils.b3a37e59.js";const y={title:"Components/Tabs",component:s,argTypes:{tabs:{description:"This is not a real prop, but is used for injecting content to the slot of tabs."},click:{action:"click"}}},l=({tabs:n,...e})=>({components:{Tab:i,Tabs:s},setup(){return{args:e,tabs:n}},template:`
        <Tabs v-bind="args" v-on="args">
          <Tab v-for="tab in tabs" :key="tab.name" v-bind="tab">
              {{ tab.content }}
          </Tab>
        </Tabs>
    `}),u=({tabs:n,...e})=>({components:{TabButton:p,Tabs:s},setup(){return{args:e,tabs:n}},template:`
        <Tabs v-bind="args" v-on="args">
          <TabButton v-for="tab in tabs" :key="tab.name" v-bind="tab">
              {{ tab.content }}
          </TabButton>
        </Tabs>
    `}),a=l.bind({});a.args={tabs:[{name:"tab-1",label:"Tab 1",content:"Test Tab 1"},{name:"tab-2",label:"Tab 2 long label",content:"Test Tab 2"},{name:"Tab 3",content:"Test Tab 3"}]};const t=u.bind({});t.args={tabs:[{name:"tab-1",label:"Tab 1",content:"Test Tab 1"},{name:"tab-2",label:"Tab 2 long label",badgeText:210,content:"Test Tab 2"},{name:"Tab 3",content:"Test Tab 3",badgeText:5}]};var b,o,r;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`({
  tabs,
  ...args
}) => ({
  components: {
    Tab,
    Tabs
  },
  setup() {
    return {
      args,
      tabs
    };
  },
  template: \`
        <Tabs v-bind="args" v-on="args">
          <Tab v-for="tab in tabs" :key="tab.name" v-bind="tab">
              {{ tab.content }}
          </Tab>
        </Tabs>
    \`
})`,...(r=(o=a.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var T,c,m;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`({
  tabs,
  ...args
}) => ({
  components: {
    TabButton,
    Tabs
  },
  setup() {
    return {
      args,
      tabs
    };
  },
  template: \`
        <Tabs v-bind="args" v-on="args">
          <TabButton v-for="tab in tabs" :key="tab.name" v-bind="tab">
              {{ tab.content }}
          </TabButton>
        </Tabs>
    \`
})`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const x=["Default","ButtonedTabs"];export{t as ButtonedTabs,a as Default,x as __namedExportsOrder,y as default};
