import{o as kn,f as wn,n as v,u as Cn}from"./vue.esm-bundler.b273ba75.js";import{_ as t}from"./Select.9c241db4.js";import{_ as i}from"./Option.a7ee5a50.js";import{t as e,f as w,O as bn}from"./OptionGroup.34816af3.js";import"./index.dc338bd7.js";import"./SearchInput.6e937c3a.js";import"./Input.310ceaf0.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./useTranslation.af5e9418.js";import"./useConfig.46e52741.js";import"./close.08060f32.js";import"./Popper.a2a40fe0.js";import"./useNodeRootElement.8a60063e.js";import"./utils.b3a37e59.js";import"./Tag.79dce8d9.js";const Ln={class:"icon",width:"1.2em",height:"1.2em",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"};function xn(n,o){return kn(),wn("svg",Ln,o[0]||(o[0]=[v("g",{fill:"none","fill-rule":"evenodd"},[v("path",{d:"M2 2h20v20H2z"}),v("g",{"stroke-linecap":"square"},[v("path",{fill:"currentColor","fill-rule":"nonzero",d:"M18.333 3.017a2.65 2.65 0 0 1 2.65 2.65v12.666a2.65 2.65 0 0 1-2.65 2.65H5.667a2.65 2.65 0 0 1-2.65-2.65V5.667a2.65 2.65 0 0 1 2.65-2.65Zm0 1.3H5.667a1.35 1.35 0 0 0-1.35 1.35v12.666c0 .746.604 1.35 1.35 1.35h12.666a1.35 1.35 0 0 0 1.35-1.35V5.667a1.35 1.35 0 0 0-1.35-1.35M15.65 8.35v7.133h-1.3l-.001-4.914-5.556 5.557-.92-.919L13.43 9.65H8.517v-1.3z"})])],-1)]))}const fn={name:"panel-external",render:xn},Vn=`
The \`<select>\` component allows the user to select one or more values through a dropdown menu.

### Examples

#### Single-Select

When \`multiple\` is false, users can select only one item from a list of mutually exclusive options.

Basic

\`\`\`vue
<select>
    <option v-for="option in testOptions" :value="option.name" :key="option" :label="option.name" :hint="option.hint" />
</select>
\`\`\`

with Description

\`\`\`vue
<select>
    <option v-for="option in testOptions" :value="option.name" :key="option" :label="option.name" :hint="option.hint" :description="option.description" />
</select>
\`\`\`

with Leading Icon

\`\`\`vue
<select>
    <option v-for="option in testOptions" :value="option.name" :key="option" :label="option.name" :hint="option.hint">
        <template #icon>
            <IconPanelExternal class="icon icon-xs" />
        </template>
    </option>
</select>
\`\`\`

with Leading Icon + Description

\`\`\`vue
<select>
    <option v-for="option in testOptions" :value="option.name" :key="option" :label="option.name" :hint="option.hint" :description="option.description">
        <template #icon>
            <IconPanelExternal class="icon icon-xs" />
        </template>
    </option>
</select>
\`\`\`

Searching

\`\`\`vue
<select searchable v-model="selectValue">
    <template #default="{query}">
        <option v-for="option in selectOptions.filter(o => o.toLowerCase().includes(query.toLowerCase()))" :value="option" :key="option">
            {{option}}
        </option>
    </template>
</select>
\`\`\`

Object \`modelValue\` and \`get-label\` prop

\`\`\`vue
<template>
    <select v-model="selectValue" :get-label="value => value?.label">
        <option v-for="option in selectOptions" :value="option" :key="option.id">
            {{ option.label }}
        </option>
    </select>
</template>

<script lang="ts">
export default {
    data() {
        return {
            selectValue: { id: 1, label: 'Coats' },
            selectOptions: [
                { id: 1, label: 'Coats' },
                { id: 2, label: 'Blouses' },
                { id: 3, label: 'Accessories' },
            ],
        };
    },
};
<\/script>
\`\`\`

Grouped Select

\`\`\`vue
<template>
    <select>
        <option-group v-for="group in fruitOptions" :title="group.group" :key="group.group">
            <option v-for="fruit in group.items" :value="fruit.name" :key="fruit.name">
                {{ fruit.icon }} - {{ fruit.name }}
            </option>
        </option-group>
    </select>
</template>

<script lang="ts">
export default {
    data() {
        return {
            fruitOptions: [
                {
                    group: 'Citrus',
                    items: [
                        {
                            name: 'Lemon',
                            icon: '\u{1F34B}',
                        },
                        {
                            name: 'Orange',
                            icon: '\u{1F34A}',
                        },
                    ],
                },
                {
                    group: 'Melon',
                    items: [
                        {
                            name: 'Watermelon',
                            icon: '\u{1F349}',
                        },
                        {
                            name: 'Honeydew',
                            icon: '\u{1F348}',
                        },
                    ],
                },
                {
                    group: 'Berry',
                    items: [
                        {
                            name: 'Strawberry',
                            icon: '\u{1F353}',
                        },
                        {
                            name: 'Blueberry',
                            icon: '\u{1FAD0}',
                        },
                    ],
                },
            ],
        };
    },
};
<\/script>
\`\`\`

#### Multi-Select

TODO: See styleguide
`,Nn={title:"Components/Select",component:t,parameters:{docs:{description:{component:Vn}}},argTypes:{default:{description:"Use the default slot to control the available options. All Option components within this slot will be rendered as options. For searchable selects, the query will be passed as a slot prop."},modelValue:{description:"The value of the select control."},placeholder:{description:"The default text to show in the input when no value is selected. Defaults to 'Select an option'"},disabled:{description:"Control whether the input is disabled. Defaults to false."},clearable:{description:"When enabled a clear button will appear in the input that can be used to clear the value. Defaults to false."},searchable:{description:"Enable or disable the search functionality. Defaults to false."},getLabel:{description:"A function `((string | object) => string)` to map the current modelValue to a label to display in the input. Used when the options are no simply strings."}}},p=({options:n,...o})=>({components:{Select:t,Option:i},setup(){return{args:o,options:n}},template:`
        <Select v-bind="args">
            <Option
                v-for="option in options"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
            />
        </Select>
    `}),s=p.bind({});s.args={options:e};const a=p.bind({});a.args={options:e,multiple:!0};const r=p.bind({});r.args={options:e,label:"Select Field"};const l=p.bind({});l.args={options:e,disabled:!0};const c=p.bind({});c.args={options:e,placeholder:"Custom Placeholder"};const m=p.bind({});m.args={options:e,modelValue:e[0].name,clearable:!0};const u=p.bind({});u.args={options:e,modelValue:e[0].name,clearable:!0,disabled:!0};const h=n=>({components:{Select:t,Option:i},setup(){return{args:n,testOptions:e}},template:`
        <Select>
            <Option
                v-for="option in testOptions"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
                :description="option.description"
            />
        </Select>
    `}),S=n=>({components:{Select:t,Option:i},setup(){return{args:n,testOptions:e}},template:`
        <Select placeholder="Custom placeholder">
            <Option
                v-for="option in testOptions"
                :value="option.name"
                :key="option"
                :label="option.name"
            />
        </Select>
    `}),b=n=>({components:{Select:t,Option:i,IconPanelExternal:fn},setup(){return{args:n,testOptions:e}},template:`
        <Select>
            <Option
                v-for="option in testOptions"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
            >
                <template #icon>
                    <IconPanelExternal class="icon icon-xs" />
                </template>
            </Option>
        </Select>
    `}),f=n=>({components:{Select:t,Option:i,IconPanelExternal:fn},setup(){return{args:n,testOptions:e}},template:`
        <Select>
            <Option
                v-for="option in testOptions"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
                :description="option.description"
            >
                <template #icon>
                    <IconPanelExternal class="icon icon-xs" />
                </template>
            </Option>
        </Select>
    `}),y=n=>({components:{Select:t,Option:i},setup(){const o=Cn("Coats");return{args:n,selectValue:o,selectOptions:["Coats","Blouses","Accessories"]}},template:`
        <p class="mb-2">Selected Value: {{selectValue}}</p>
        <Select searchable v-model="selectValue">
            <template #default="{ query }">
                <Option
                    v-for="option in selectOptions.filter(o => o.toLowerCase().includes(query.toLowerCase()))"
                    :value="option"
                    :key="option"
                >
                    {{ option }}
                </Option>
            </template>
        </Select>
    `}),k=n=>({components:{Select:t,Option:i},setup(){return{args:n,selectValue:null,selectOptions:[{id:1,label:"Coats",modifiedLabel:"modified Coats"},{id:2,label:"Blouses",modifiedLabel:"modified Blouses"},{id:3,label:"Accessories",modifiedLabel:"modified Accessories"}]}},template:`
        <Select v-model="selectValue" :get-label="value => value?.modifiedLabel">
            <Option v-for="option in selectOptions" :value="option" :key="option.id">
                {{ option.label }}
            </Option>
        </Select>
    `}),yn=({options:n,...o})=>({components:{Select:t,Option:i,OptionGroup:bn},setup(){return{args:o,options:n}},template:`
        <Select v-bind="args">
            <Option-group v-for="group in options" :title="group.group" :key="group.group">
                <Option v-for="item in group.items" :value="item.name" :key="item.name">
                    {{ item.icon }} - {{ item.name }}
                </Option>
            </Option-group>
        </Select>
    `}),Dn=({options:n,...o})=>({components:{Select:t,Option:i,OptionGroup:bn},setup(){return{args:o,options:n}},template:`
        <Select v-bind="args">
            <Option-group v-for="group in options" :title="group.group" :key="group.group">
                <Option v-for="item in group.items" :value="item.name" :key="item.name" :close-on-select="false">
                    {{ item.icon }} - {{ item.name }}
                </Option>
            </Option-group>
        </Select>
    `}),d=Dn.bind({});d.args={options:w};const g=yn.bind({});g.args={options:w};const O=yn.bind({});O.args={options:w,appendDropdownToBody:!1};var C,L,x;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`({
  options,
  ...args
}) => ({
  components: {
    Select,
    Option
  },
  setup() {
    return {
      args,
      options
    };
  },
  template: \`
        <Select v-bind="args">
            <Option
                v-for="option in options"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
            />
        </Select>
    \`
})`,...(x=(L=s.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var V,D,W;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`({
  options,
  ...args
}) => ({
  components: {
    Select,
    Option
  },
  setup() {
    return {
      args,
      options
    };
  },
  template: \`
        <Select v-bind="args">
            <Option
                v-for="option in options"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
            />
        </Select>
    \`
})`,...(W=(D=a.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var B,I,_;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`({
  options,
  ...args
}) => ({
  components: {
    Select,
    Option
  },
  setup() {
    return {
      args,
      options
    };
  },
  template: \`
        <Select v-bind="args">
            <Option
                v-for="option in options"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
            />
        </Select>
    \`
})`,...(_=(I=r.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var P,E,A;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`({
  options,
  ...args
}) => ({
  components: {
    Select,
    Option
  },
  setup() {
    return {
      args,
      options
    };
  },
  template: \`
        <Select v-bind="args">
            <Option
                v-for="option in options"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
            />
        </Select>
    \`
})`,...(A=(E=l.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var T,G,M;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`({
  options,
  ...args
}) => ({
  components: {
    Select,
    Option
  },
  setup() {
    return {
      args,
      options
    };
  },
  template: \`
        <Select v-bind="args">
            <Option
                v-for="option in options"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
            />
        </Select>
    \`
})`,...(M=(G=c.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var q,H,U;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`({
  options,
  ...args
}) => ({
  components: {
    Select,
    Option
  },
  setup() {
    return {
      args,
      options
    };
  },
  template: \`
        <Select v-bind="args">
            <Option
                v-for="option in options"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
            />
        </Select>
    \`
})`,...(U=(H=m.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var z,K,N;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`({
  options,
  ...args
}) => ({
  components: {
    Select,
    Option
  },
  setup() {
    return {
      args,
      options
    };
  },
  template: \`
        <Select v-bind="args">
            <Option
                v-for="option in options"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
            />
        </Select>
    \`
})`,...(N=(K=u.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var j,F,Z;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`(args: any) => ({
  components: {
    Select,
    Option
  },
  setup() {
    return {
      args,
      testOptions
    };
  },
  template: \`
        <Select>
            <Option
                v-for="option in testOptions"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
                :description="option.description"
            />
        </Select>
    \`
})`,...(Z=(F=h.parameters)==null?void 0:F.docs)==null?void 0:Z.source}}};var J,Q,R;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`(args: any) => ({
  components: {
    Select,
    Option
  },
  setup() {
    return {
      args,
      testOptions
    };
  },
  template: \`
        <Select placeholder="Custom placeholder">
            <Option
                v-for="option in testOptions"
                :value="option.name"
                :key="option"
                :label="option.name"
            />
        </Select>
    \`
})`,...(R=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var X,Y,$;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`(args: any) => ({
  components: {
    Select,
    Option,
    IconPanelExternal
  },
  setup() {
    return {
      args,
      testOptions
    };
  },
  template: \`
        <Select>
            <Option
                v-for="option in testOptions"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
            >
                <template #icon>
                    <IconPanelExternal class="icon icon-xs" />
                </template>
            </Option>
        </Select>
    \`
})`,...($=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var nn,en,on;f.parameters={...f.parameters,docs:{...(nn=f.parameters)==null?void 0:nn.docs,source:{originalSource:`(args: any) => ({
  components: {
    Select,
    Option,
    IconPanelExternal
  },
  setup() {
    return {
      args,
      testOptions
    };
  },
  template: \`
        <Select>
            <Option
                v-for="option in testOptions"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
                :description="option.description"
            >
                <template #icon>
                    <IconPanelExternal class="icon icon-xs" />
                </template>
            </Option>
        </Select>
    \`
})`,...(on=(en=f.parameters)==null?void 0:en.docs)==null?void 0:on.source}}};var tn,pn,sn;y.parameters={...y.parameters,docs:{...(tn=y.parameters)==null?void 0:tn.docs,source:{originalSource:`(args: any) => ({
  components: {
    Select,
    Option
  },
  setup() {
    const selectValue = ref('Coats');
    return {
      args,
      selectValue,
      selectOptions: ['Coats', 'Blouses', 'Accessories']
    };
  },
  template: \`
        <p class="mb-2">Selected Value: {{selectValue}}</p>
        <Select searchable v-model="selectValue">
            <template #default="{ query }">
                <Option
                    v-for="option in selectOptions.filter(o => o.toLowerCase().includes(query.toLowerCase()))"
                    :value="option"
                    :key="option"
                >
                    {{ option }}
                </Option>
            </template>
        </Select>
    \`
})`,...(sn=(pn=y.parameters)==null?void 0:pn.docs)==null?void 0:sn.source}}};var an,rn,ln;k.parameters={...k.parameters,docs:{...(an=k.parameters)==null?void 0:an.docs,source:{originalSource:`(args: any) => ({
  components: {
    Select,
    Option
  },
  setup() {
    return {
      args,
      selectValue: null,
      selectOptions: [{
        id: 1,
        label: 'Coats',
        modifiedLabel: 'modified Coats'
      }, {
        id: 2,
        label: 'Blouses',
        modifiedLabel: 'modified Blouses'
      }, {
        id: 3,
        label: 'Accessories',
        modifiedLabel: 'modified Accessories'
      }]
    };
  },
  template: \`
        <Select v-model="selectValue" :get-label="value => value?.modifiedLabel">
            <Option v-for="option in selectOptions" :value="option" :key="option.id">
                {{ option.label }}
            </Option>
        </Select>
    \`
})`,...(ln=(rn=k.parameters)==null?void 0:rn.docs)==null?void 0:ln.source}}};var cn,mn,un;d.parameters={...d.parameters,docs:{...(cn=d.parameters)==null?void 0:cn.docs,source:{originalSource:`({
  options,
  ...args
}: any) => ({
  components: {
    Select,
    Option,
    OptionGroup
  },
  setup() {
    return {
      args,
      options
    };
  },
  template: \`
        <Select v-bind="args">
            <Option-group v-for="group in options" :title="group.group" :key="group.group">
                <Option v-for="item in group.items" :value="item.name" :key="item.name" :close-on-select="false">
                    {{ item.icon }} - {{ item.name }}
                </Option>
            </Option-group>
        </Select>
    \`
})`,...(un=(mn=d.parameters)==null?void 0:mn.docs)==null?void 0:un.source}}};var dn,gn,On;g.parameters={...g.parameters,docs:{...(dn=g.parameters)==null?void 0:dn.docs,source:{originalSource:`({
  options,
  ...args
}: any) => ({
  components: {
    Select,
    Option,
    OptionGroup
  },
  setup() {
    return {
      args,
      options
    };
  },
  template: \`
        <Select v-bind="args">
            <Option-group v-for="group in options" :title="group.group" :key="group.group">
                <Option v-for="item in group.items" :value="item.name" :key="item.name">
                    {{ item.icon }} - {{ item.name }}
                </Option>
            </Option-group>
        </Select>
    \`
})`,...(On=(gn=g.parameters)==null?void 0:gn.docs)==null?void 0:On.source}}};var vn,hn,Sn;O.parameters={...O.parameters,docs:{...(vn=O.parameters)==null?void 0:vn.docs,source:{originalSource:`({
  options,
  ...args
}: any) => ({
  components: {
    Select,
    Option,
    OptionGroup
  },
  setup() {
    return {
      args,
      options
    };
  },
  template: \`
        <Select v-bind="args">
            <Option-group v-for="group in options" :title="group.group" :key="group.group">
                <Option v-for="item in group.items" :value="item.name" :key="item.name">
                    {{ item.icon }} - {{ item.name }}
                </Option>
            </Option-group>
        </Select>
    \`
})`,...(Sn=(hn=O.parameters)==null?void 0:hn.docs)==null?void 0:Sn.source}}};const jn=["SingleSelect","MultiSelect","WithLabel","Disabled","WithPlaceholder","WithClearOption","WithClearOptionDisabled","WithDescription","WithCustomPlaceholder","WithLeadingIcon","WithLeadingIconAndDescription","Searching","UsingGetLabel","KeepDropdownOpened","Grouped","WhenDropdownNotMountedToBody"];export{l as Disabled,g as Grouped,d as KeepDropdownOpened,a as MultiSelect,y as Searching,s as SingleSelect,k as UsingGetLabel,O as WhenDropdownNotMountedToBody,m as WithClearOption,u as WithClearOptionDisabled,S as WithCustomPlaceholder,h as WithDescription,r as WithLabel,b as WithLeadingIcon,f as WithLeadingIconAndDescription,c as WithPlaceholder,jn as __namedExportsOrder,Nn as default};
