import{u as R}from"./vue.esm-bundler.b273ba75.js";import{M as g,_ as v}from"./Option.a7ee5a50.js";import{t as n,f as U,O as X}from"./OptionGroup.34816af3.js";import"./Popper.a2a40fe0.js";import"./index.dc338bd7.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./useNodeRootElement.8a60063e.js";import"./Input.310ceaf0.js";import"./useTranslation.af5e9418.js";import"./useConfig.46e52741.js";import"./utils.b3a37e59.js";import"./SearchInput.6e937c3a.js";import"./Tag.79dce8d9.js";import"./close.08060f32.js";const gn={title:"Components/Multiselect",component:g,argTypes:{tagClearable:{description:"If `true` an x-button is shown at the end of every tag which removes it on click"},maxTags:{description:"The maximum amount of tags that are displayed outside of the `+n` summary tag"}}},t=({options:e,...o})=>({components:{MultiSelect:g,Option:v},setup(){return{args:o,options:e}},template:`
        <MultiSelect v-bind="args">
            <Option
                v-for="option in options"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
            />
        </MultiSelect>
    `}),Q=({options:e,...o})=>({components:{MultiSelect:g,Option:v},setup(){const b=R(o.modelValue||[]);return{args:o,modelValue:b,options:e,onClick:()=>{b.value=[...b.value,Math.round(Math.random()*100)]}}},template:`
        <div class="flex">
            <MultiSelect v-bind="args" v-model="modelValue">
                <Option
                    v-for="option in options"
                    :value="option.name"
                    :key="option"
                    :label="option.name"
                    :hint="option.hint"
                />
            </MultiSelect>

            <div class="flex items-end">
              <button :disabled="args.disabled" class="btn btn-primary ml-2" @click="onClick">Add random number</button>
            </div>
        </div>
    `}),Y=({options:e,...o})=>({components:{MultiSelect:g,Option:v,OptionGroup:X},setup(){return{args:o,options:e}},template:`
        <MultiSelect v-bind="args">
            <Option-group v-for="group in options" :title="group.group" :key="group.group">
                <Option v-for="item in group.items" :value="item.name" :key="item.name">
                    {{ item.icon }} - {{ item.name }}
                </Option>
            </Option-group>
        </MultiSelect>
    `}),i=t.bind({});i.args={options:n};const a=t.bind({});a.args={options:n,label:"MultiSelect Field"};const r=t.bind({});r.args={options:n,label:"MultiSelect Field",modelValue:[n[0].name],clearable:!0};const s=t.bind({});s.args={options:n,modelValue:[n[0].name],tagClearable:!0};const l=t.bind({});l.args={options:n,modelValue:[n[0].name],tagClearable:!0,disabled:!0};const p=t.bind({});p.args={options:n,getLabel:e=>"Testing - "+e};const u=t.bind({});u.args={options:n,modelValue:n.slice(0,3).map(e=>e.name),maxTags:3};const m=Q.bind({});m.args={options:n,label:"MultiSelect Field",modelValue:[n[0].name],clearable:!0,tagClearable:!0};const c=Q.bind({disabled:!0});c.args={options:n,label:"MultiSelect Field",modelValue:[n[0].name],clearable:!0,tagClearable:!0,disabled:!0};const d=Y.bind({});d.args={options:U};var h,S,M;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`({
  options,
  ...args
}) => ({
  components: {
    MultiSelect,
    Option
  },
  setup() {
    return {
      args,
      options
    };
  },
  template: \`
        <MultiSelect v-bind="args">
            <Option
                v-for="option in options"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
            />
        </MultiSelect>
    \`
})`,...(M=(S=i.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var O,f,k;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`({
  options,
  ...args
}) => ({
  components: {
    MultiSelect,
    Option
  },
  setup() {
    return {
      args,
      options
    };
  },
  template: \`
        <MultiSelect v-bind="args">
            <Option
                v-for="option in options"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
            />
        </MultiSelect>
    \`
})`,...(k=(f=a.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var y,C,W;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`({
  options,
  ...args
}) => ({
  components: {
    MultiSelect,
    Option
  },
  setup() {
    return {
      args,
      options
    };
  },
  template: \`
        <MultiSelect v-bind="args">
            <Option
                v-for="option in options"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
            />
        </MultiSelect>
    \`
})`,...(W=(C=r.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var T,V,x;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`({
  options,
  ...args
}) => ({
  components: {
    MultiSelect,
    Option
  },
  setup() {
    return {
      args,
      options
    };
  },
  template: \`
        <MultiSelect v-bind="args">
            <Option
                v-for="option in options"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
            />
        </MultiSelect>
    \`
})`,...(x=(V=s.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var A,_,G;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`({
  options,
  ...args
}) => ({
  components: {
    MultiSelect,
    Option
  },
  setup() {
    return {
      args,
      options
    };
  },
  template: \`
        <MultiSelect v-bind="args">
            <Option
                v-for="option in options"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
            />
        </MultiSelect>
    \`
})`,...(G=(_=l.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var w,D,E;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`({
  options,
  ...args
}) => ({
  components: {
    MultiSelect,
    Option
  },
  setup() {
    return {
      args,
      options
    };
  },
  template: \`
        <MultiSelect v-bind="args">
            <Option
                v-for="option in options"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
            />
        </MultiSelect>
    \`
})`,...(E=(D=p.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var L,F,N;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`({
  options,
  ...args
}) => ({
  components: {
    MultiSelect,
    Option
  },
  setup() {
    return {
      args,
      options
    };
  },
  template: \`
        <MultiSelect v-bind="args">
            <Option
                v-for="option in options"
                :value="option.name"
                :key="option"
                :label="option.name"
                :hint="option.hint"
            />
        </MultiSelect>
    \`
})`,...(N=(F=u.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var B,I,j;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`({
  options,
  ...args
}) => ({
  components: {
    MultiSelect,
    Option
  },
  setup() {
    const modelValue = ref(args.modelValue || []);
    const onClick = () => {
      modelValue.value = [...modelValue.value, Math.round(Math.random() * 100)];
    };
    return {
      args,
      modelValue,
      options,
      onClick
    };
  },
  template: \`
        <div class="flex">
            <MultiSelect v-bind="args" v-model="modelValue">
                <Option
                    v-for="option in options"
                    :value="option.name"
                    :key="option"
                    :label="option.name"
                    :hint="option.hint"
                />
            </MultiSelect>

            <div class="flex items-end">
              <button :disabled="args.disabled" class="btn btn-primary ml-2" @click="onClick">Add random number</button>
            </div>
        </div>
    \`
})`,...(j=(I=m.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var q,z,H;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`TemplateWithAddButton.bind({
  disabled: true
})`,...(H=(z=c.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var J,K,P;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`({
  options,
  ...args
}: any) => ({
  components: {
    MultiSelect,
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
        <MultiSelect v-bind="args">
            <Option-group v-for="group in options" :title="group.group" :key="group.group">
                <Option v-for="item in group.items" :value="item.name" :key="item.name">
                    {{ item.icon }} - {{ item.name }}
                </Option>
            </Option-group>
        </MultiSelect>
    \`
})`,...(P=(K=d.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};const bn=["Default","WithLabel","WithClearOption","WithTagClearOption","WithTagClearOptionDisabled","WithGetLabel","WithCustomTagAmount","WithAddingNewElements","WithAddingNewElementsDisabled","Grouped"];export{i as Default,d as Grouped,m as WithAddingNewElements,c as WithAddingNewElementsDisabled,r as WithClearOption,u as WithCustomTagAmount,p as WithGetLabel,a as WithLabel,s as WithTagClearOption,l as WithTagClearOptionDisabled,bn as __namedExportsOrder,gn as default};
