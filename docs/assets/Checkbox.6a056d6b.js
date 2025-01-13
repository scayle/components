import{e as f,f as s,n as o,q as t,O as p,t as i,g as h,s as m,o as d}from"./vue.esm-bundler.b273ba75.js";import{_ as b}from"./_plugin-vue_export-helper.cdc0426e.js";const c=f({name:"Checkbox",props:{modelValue:{type:Boolean,default:!1},label:{type:String,default:null},backgroundColor:{type:String,default:null},darkCheck:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:{"update:modelValue"(e){return!0},change(e){return!0}},setup(e,{emit:a}){return{onChange:n=>{const l=n.target.checked;a("update:modelValue",l),a("change",l)}}},computed:{style(){return this.disabled?void 0:{backgroundColor:this.backgroundColor,borderColor:this.backgroundColor}}}}),k={class:"ay-checkbox__input"},y=["checked","disabled"],C={key:0,class:"ay-checkbox__label"};function g(e,a,u,n,l,V){return d(),s("label",{class:t([{"ay-checkbox--checked":e.modelValue,"flex items-center":!e.label&&e.$slots.default,"ay-checkbox--disabled":e.disabled},"ay-checkbox"])},[o("span",k,[o("span",{class:t(["ay-checkbox__inner",{"dark-check":e.darkCheck}]),style:p(e.style)},null,6),o("input",{checked:e.modelValue,"aria-hidden":"false",class:"ay-checkbox__original",type:"checkbox",disabled:e.disabled,onChange:a[0]||(a[0]=(...r)=>e.onChange&&e.onChange(...r))},null,40,y)]),e.label&&!e.$slots.default?(d(),s("span",C,i(e.label),1)):h("",!0),m(e.$slots,"default")],2)}const $=b(c,[["render",g]]);c.__docgenInfo={displayName:"Checkbox",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"backgroundColor",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"darkCheck",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"change"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/components/components/src/components/Checkbox/Checkbox.vue"]};export{$ as C};
