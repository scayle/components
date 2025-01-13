import{e as m,f,n as r,O as C,A as _,P as v,l as I,o as V,u as g}from"./vue.esm-bundler.b273ba75.js";import{_ as p}from"./Input.310ceaf0.js";import{_ as y}from"./_plugin-vue_export-helper.cdc0426e.js";const l=e=>/^#([0-9a-f]{3}){1,2}$/i.test(e),c=m({name:"ColorInput",components:{Input:p},props:{modelValue:{type:String,validation:e=>l(e),default:""}},emits:{["update:modelValue"](e){return!0}},computed:{value:{get(){return this.modelValue},set(e){if(!l(e))return"";this.$emit("update:modelValue",e)}}}}),k={class:"ay-color-input"},$={class:"ay-color-input__picker"};function h(e,o,N,x,B,D){const i=p;return V(),f("div",k,[r("div",$,[r("label",{for:"color-picker",style:C({backgroundColor:e.value})},null,4),_(r("input",{id:"color-picker","onUpdate:modelValue":o[0]||(o[0]=n=>e.value=n),type:"color"},null,512),[[v,e.value]])]),I(i,{id:"other-input",modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=n=>e.value=n),class:"ay-color-input__input"},null,8,["modelValue"])])}const d=y(c,[["render",h]]);c.__docgenInfo={displayName:"ColorInput",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue",type:{names:["undefined"]}}],sourceFiles:["/home/runner/work/components/components/src/components/ColorInput/ColorInput.vue"]};const E={title:"Components/ColorInput",component:d,argTypes:{modelValue:{description:"Represents the selected color as hex string"}}},b=()=>({components:{ColorInput:d},setup(){return{currentColor:g("#ff0000")}},template:`
        <div>
            <p class="mb-2">{{currentColor}}</p>
            <ColorInput v-model="currentColor"></ColorInput>
        </div>
    `}),t=b.bind({});var s,a,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => ({
  components: {
    ColorInput
  },
  setup() {
    const currentColor = ref('#ff0000');
    return {
      currentColor
    };
  },
  template: \`
        <div>
            <p class="mb-2">{{currentColor}}</p>
            <ColorInput v-model="currentColor"></ColorInput>
        </div>
    \`
})`,...(u=(a=t.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const O=["Default"];export{t as Default,O as __namedExportsOrder,E as default};
