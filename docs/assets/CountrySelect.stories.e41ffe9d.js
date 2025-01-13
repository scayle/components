import{e as F,v as G,x as U,j as y,k as g,o as p,f as x,m as A,l as I,F as K,u as R}from"./vue.esm-bundler.b273ba75.js";import{_ as M}from"./Select.9c241db4.js";import{_ as E}from"./Option.a7ee5a50.js";import{_ as W}from"./CountryFlag.cc7c93ee.js";import{u as j}from"./useConfig.46e52741.js";import{_ as q}from"./_plugin-vue_export-helper.cdc0426e.js";import"./index.dc338bd7.js";import"./SearchInput.6e937c3a.js";import"./Input.310ceaf0.js";import"./useTranslation.af5e9418.js";import"./close.08060f32.js";import"./Popper.a2a40fe0.js";import"./useNodeRootElement.8a60063e.js";import"./utils.b3a37e59.js";import"./Tag.79dce8d9.js";import"./sanitize-html.061669d0.js";const N=F({name:"CountrySelect",components:{Select:M,Option:E,CountryFlag:W},props:{modelValue:{type:String,validator:e=>e.length===2,default:null},countries:{type:Array,validator:e=>e.every(t=>t.length===2),default:()=>[]},languageTag:{type:String,default:null},appendDropdownToBody:{type:Boolean,default:!0}},emits:{["update:modelValue"](e){return!0}},setup(e){const t=j(),{languageTag:r}=G(e);return{locale:U(()=>{var c;return(c=r.value)!=null?c:t.locale})}},computed:{countryOptions(){return this.countries.map(e=>({code:e,name:this.translateCountryCode(e)}))},value:{get(){var e;return(e=this.countryOptions)==null?void 0:e.find(t=>t.code===this.modelValue)},set(e){this.$emit("update:modelValue",e.code)}}},methods:{translateCountryCode(e){const t=new Intl.DisplayNames([this.locale],{type:"region"});try{const r=t.of(e.toUpperCase());return r!==e.toUpperCase()?r:""}catch{return""}}}});function z(e,t,r,O,c,J){const $=W,k=E,L=M;return p(),y(L,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=o=>e.value=o),"append-dropdown-to-body":e.appendDropdownToBody,"get-label":o=>o==null?void 0:o.name,class:"ay-country-select",searchable:""},{default:g(({query:o})=>[(p(!0),x(K,null,A(e.countryOptions.filter(n=>{var m;return(m=n==null?void 0:n.name)==null?void 0:m.toLowerCase().includes(o.toLowerCase())}),n=>(p(),y(k,{key:n.code,label:n.name,value:n},{icon:g(()=>[I($,{"country-code":n.code},null,8,["country-code"])]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue","append-dropdown-to-body","get-label"])}const d=q(N,[["render",z]]);N.__docgenInfo={displayName:"CountrySelect",exportName:"default",description:"",tags:{},props:[{name:"modelValue",description:"2 digit country code",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"countries",description:"Array of 2 digit country codes",type:{name:"string[]"},defaultValue:{func:!0,value:"() => []"}},{name:"languageTag",description:"Translation Language",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"appendDropdownToBody",description:"Whether the select dropdown should be part of the select itself or inserted in the body",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue",type:{names:["undefined"]}}],sourceFiles:["/home/runner/work/components/components/src/components/CountrySelect/CountrySelect.vue"]};const de={title:"Components/CountrySelect",component:d},i=e=>({components:{CountrySelect:d},setup(){return{args:e}},template:'<CountrySelect v-bind="args"></CountrySelect>'}),H=e=>({components:{CountrySelect:d},setup(){const t=R("DE");return{args:e,valueModel:t}},template:`
        <div>
          <p class="mb-2">Selected value: <span id="selected">{{ valueModel }}</span></p>
          <CountrySelect v-model="valueModel" v-bind="args"></CountrySelect>
        </div>
    `}),a=i.bind({});a.args={countries:["DE","US","BG","RO"]};const s=i.bind({});s.args={countries:["DE","GE","DK"],languageTag:"de",modelValue:"de"};const l=H.bind({});l.args={countries:["DE","GE","DK"],languageTag:"es"};const u=i.bind({});u.args={...a.args,appendDropdownToBody:!1};var f,C,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`(args: any) => ({
  components: {
    CountrySelect
  },
  setup() {
    return {
      args
    };
  },
  template: '<CountrySelect v-bind="args"></CountrySelect>'
})`,...(v=(C=a.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var S,_,h;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`(args: any) => ({
  components: {
    CountrySelect
  },
  setup() {
    return {
      args
    };
  },
  template: '<CountrySelect v-bind="args"></CountrySelect>'
})`,...(h=(_=s.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var b,V,D;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`(args: any) => ({
  components: {
    CountrySelect
  },
  setup() {
    const valueModel = ref('DE');
    return {
      args,
      valueModel
    };
  },
  template: \`
        <div>
          <p class="mb-2">Selected value: <span id="selected">{{ valueModel }}</span></p>
          <CountrySelect v-model="valueModel" v-bind="args"></CountrySelect>
        </div>
    \`
})`,...(D=(V=l.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var T,w,B;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`(args: any) => ({
  components: {
    CountrySelect
  },
  setup() {
    return {
      args
    };
  },
  template: '<CountrySelect v-bind="args"></CountrySelect>'
})`,...(B=(w=u.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};const ie=["Default","WithGermanLabels","WithSelectedValue","WithDropdownNotMountedToBody"];export{a as Default,u as WithDropdownNotMountedToBody,s as WithGermanLabels,l as WithSelectedValue,ie as __namedExportsOrder,de as default};
