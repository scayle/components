import{e as H,x as v,f as a,q as c,t as f,g,A as h,_ as M,P as O,o as n}from"./vue.esm-bundler.b273ba75.js";const Q={class:"label"},z=["name","placeholder","type","disabled"],P=["name","placeholder","type","disabled"],R={key:3,class:"invalid-feedback"},G={key:4,class:"label-hint mb-0"},F=H({__name:"FormField",props:{modelValue:{type:[String,Number],default:null},name:{type:String,default:""},type:{type:String,default:"text"},placeholder:{type:String,default:null},rules:{type:[String,Object],default:null},errors:{type:Array,default:()=>[]},component:{type:String,default:"input"},disabled:{type:Boolean,default:!1},helpText:{type:String,default:null},hasLabel:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(e,{emit:N}){const t=e,I=N,l=v({get:()=>t.modelValue,set:y=>I("update:modelValue",y)}),j=v(()=>t.rules?typeof t.rules=="string"?t.rules.includes("required"):!!t.rules.required:!1);return(y,s)=>(n(),a("label",Q,[e.hasLabel?(n(),a("span",{key:0,class:c(["label-text",j.value?"is-required":""])},f(e.name),3)):g("",!0),e.component==="input"?h((n(),a("input",{key:1,"onUpdate:modelValue":s[0]||(s[0]=p=>l.value=p),class:c(["form-control",{"is-invalid":e.errors.length}]),name:e.name,placeholder:e.placeholder,type:e.type,disabled:e.disabled},null,10,z)),[[M,l.value]]):e.component==="textarea"?h((n(),a("textarea",{key:2,"onUpdate:modelValue":s[1]||(s[1]=p=>l.value=p),class:c(["form-control",{"is-invalid":e.errors.length}]),name:e.name,placeholder:e.placeholder,type:e.type,disabled:e.disabled},null,10,P)),[[O,l.value]]):g("",!0),e.errors.length?(n(),a("span",R,f(e.errors[0]),1)):e.helpText?(n(),a("span",G,f(e.helpText),1)):g("",!0)]))}});F.__docgenInfo={exportName:"default",displayName:"FormField",description:"",tags:{},props:[{name:"modelValue",type:{name:"string|number"},defaultValue:{func:!1,value:"null"}},{name:"name",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"rules",type:{name:"string|object"},defaultValue:{func:!1,value:"null"}},{name:"errors",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"component",type:{name:"FormFieldComponent"},defaultValue:{func:!1,value:"'input'"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"helpText",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"hasLabel",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/components/components/src/components/FormField/FormField.vue"]};const K={title:"Components/FormField",component:F},r={FormField:F},o=e=>({components:r,setup(){return{args:{...e,modelValue:42,name:"Answer to the Ultimate Question of Life, the Universe, and Everything"}}},template:'<FormField v-bind="args" ></FormField>'}),u=e=>({components:r,setup(){return{args:{...e,component:"input",helpText:"This is a help text for the input field",placeholder:"User Id"}}},template:'<FormField v-bind="args" ></FormField>'}),d=e=>({components:r,setup(){return{args:{...e,modelValue:41,errors:["The given value is invalid"]}}},template:'<FormField v-bind="args" ></FormField>'}),i=e=>({components:r,setup(){return{args:{...e,component:"textarea",modelValue:`The description of a very well known product!
A must have!`,name:"Description",rules:"required"}}},template:'<FormField v-bind="args" ></FormField>'}),m=e=>({components:r,setup(){return{args:{...e,component:"textarea",name:"Description",disabled:!0}}},template:'<FormField v-bind="args" ></FormField>'});var b,x,V;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args: {
        ...args,
        modelValue: 42,
        name: 'Answer to the Ultimate Question of Life, the Universe, and Everything'
      }
    };
  },
  template: '<FormField v-bind="args" ></FormField>'
})`,...(V=(x=o.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};var T,S,k;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args: {
        ...args,
        component: 'input',
        helpText: 'This is a help text for the input field',
        placeholder: 'User Id'
      }
    };
  },
  template: '<FormField v-bind="args" ></FormField>'
})`,...(k=(S=u.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var D,w,U;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args: {
        ...args,
        modelValue: 41,
        errors: ['The given value is invalid']
      }
    };
  },
  template: '<FormField v-bind="args" ></FormField>'
})`,...(U=(w=d.parameters)==null?void 0:w.docs)==null?void 0:U.source}}};var q,A,E;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args: {
        ...args,
        component: 'textarea',
        modelValue: 'The description of a very well known product!\\nA must have!',
        name: 'Description',
        rules: 'required'
      }
    };
  },
  template: '<FormField v-bind="args" ></FormField>'
})`,...(E=(A=i.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var C,L,B;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args: {
        ...args,
        component: 'textarea',
        name: 'Description',
        disabled: true
      }
    };
  },
  template: '<FormField v-bind="args" ></FormField>'
})`,...(B=(L=m.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};const W=["Default","HelpText","Errors","Textarea","Disabeld"];export{o as Default,m as Disabeld,d as Errors,u as HelpText,i as Textarea,W as __namedExportsOrder,K as default};
