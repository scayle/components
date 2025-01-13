import{o as c,f as V,n,e as U,v as F,u as P,x as A,j as L,k as f,R as N,l as r,E as O,A as R}from"./vue.esm-bundler.b273ba75.js";import{a as W}from"./chunk-WFFRPTHA.7b7bd586.js";import{T as B}from"./Tabs.a5ad2279.js";import{T as D}from"./Tab.02c59975.js";import{s as j}from"./sanitize-html.061669d0.js";import{_ as q}from"./_plugin-vue_export-helper.cdc0426e.js";import"./preview-errors.186ba3db.js";import"./index.67736049.js";import"./utils.b3a37e59.js";const G={class:"icon",width:"1.2em",height:"1.2em",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"};function J(e,t){return c(),V("svg",G,t[0]||(t[0]=[n("path",{fill:"currentColor","fill-rule":"nonzero",d:"M8 20.333a1 1 0 0 1-.117-1.993L8 18.333h1.236L12.69 5.667H12a1 1 0 0 1-.117-1.994L12 3.667h4a1 1 0 0 1 .117 1.993L16 5.667h-1.237l-3.455 12.666H12a1 1 0 0 1 .117 1.994l-.117.006z"},null,-1)]))}const K={name:"panel-text-italic",render:J},Q={class:"icon",width:"1.2em",height:"1.2em",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"};function X(e,t){return c(),V("svg",Q,t[0]||(t[0]=[n("path",{fill:"currentColor","fill-rule":"nonzero",d:"M6.333 5.666H6a1 1 0 0 1-.117-1.993L6 3.667h7.333a4.333 4.333 0 0 1 3.14 7.32 5 5 0 0 1-2.255 9.341l-.218.005H6a1 1 0 0 1-.117-1.993L6 18.333h.333zM14 12.333H8.333v6H14a3 3 0 0 0 .176-5.995zm-.667-6.666-5-.001v4.667h5a2.333 2.333 0 0 0 .16-4.661z"},null,-1)]))}const Y={name:"panel-text-bold",render:X},Z={class:"icon",width:"1.2em",height:"1.2em",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"};function ee(e,t){return c(),V("svg",Z,t[0]||(t[0]=[n("path",{fill:"currentColor","fill-rule":"nonzero",d:"M17.333 3.667a1 1 0 0 1 .117 1.993l-.117.007h-1.667v13.666a1 1 0 0 1-1.993.117l-.006-.117V5.667h-2v13.666a1 1 0 0 1-1.994.117l-.006-.117v-5.666h-.334a5 5 0 0 1-.217-9.996l.217-.004zm-7.667 8v-6h-.333a3 3 0 0 0-.176 5.995l.176.005z"},null,-1)]))}const te={name:"panel-text-paragraph",render:ee};const I=U({name:"HtmlEditor",directives:{"sanitize-html":j},components:{Tab:D,Tabs:B},inheritAttrs:!1,props:{modelValue:{type:String,default:""},selectedTab:{type:String,default:"text",validator:e=>["text","preview"].includes(e)},disabled:{type:Boolean,default:!1}},emits:{input(e){return!0},["update:modelValue"](e){return!0},["tab-click"](e){return!0}},setup(e,{emit:t}){const{modelValue:p}=F(e),a=P(null),h=l=>t("tab-click",l),w=l=>{if(!a.value)return;const o=a.value.selectionStart,u=a.value.selectionEnd,g=a.value.value.substring(o,u),s=`<${l}>${g}</${l}>`,x=a.value.value.substring(0,o)+s+a.value.value.substring(u);t("input",x),t("update:modelValue",x)},v=l=>{const o=l.target.value;t("input",o),t("update:modelValue",o)},b=A(()=>p.value.replace(/\n/g,"<br>"));return{onInput:v,tabClick:h,wrapTag:w,textAreaEl:a,modelValueFormattedForPreview:b}}}),ae={class:"ay-html-editor__actions"},ne=["disabled"],le=["disabled"],oe=["disabled"],se=["disabled","value"];function re(e,t,p,a,h,w){const v=te,b=Y,l=K,o=D,u=B,g=N("sanitize-html");return c(),L(u,{"selected-tab":e.selectedTab,class:"ay-html-editor",onClick:e.tabClick},{default:f(()=>[r(o,{class:"ay-html-editor__text",label:"Text",name:"text"},{default:f(()=>[n("div",ae,[n("button",{disabled:e.disabled,class:"ay-html-editor__button",onClick:t[0]||(t[0]=s=>e.wrapTag("p"))},[r(v,{class:"icon icon-xs fill-current"})],8,ne),n("button",{disabled:e.disabled,class:"ay-html-editor__button",onClick:t[1]||(t[1]=s=>e.wrapTag("b"))},[r(b,{class:"icon icon-xs fill-current"})],8,le),n("button",{disabled:e.disabled,class:"ay-html-editor__button",onClick:t[2]||(t[2]=s=>e.wrapTag("i"))},[r(l,{class:"icon icon-xs fill-current"})],8,oe)]),n("textarea",O({ref:"textAreaEl",disabled:e.disabled,value:e.modelValue},e.$attrs,{onInput:t[3]||(t[3]=(...s)=>e.onInput&&e.onInput(...s))}),null,16,se)]),_:1}),r(o,{class:"ay-html-editor__preview",label:"Preview",name:"preview"},{default:f(()=>[R(n("div",null,null,512),[[g,e.modelValueFormattedForPreview]])]),_:1})]),_:1},8,["selected-tab","onClick"])}const S=q(I,[["render",re]]);I.__docgenInfo={displayName:"HtmlEditor",exportName:"default",description:"",tags:{},props:[{name:"modelValue",description:"The value to edit with the textarea element or to show it as a preview.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"selectedTab",description:"Set the selected tab. Either 'text' or 'preview'.",values:["text","preview"],type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"disabled",description:"Disable the editor.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"input"},{name:"update:modelValue"},{name:"tab-click"}],sourceFiles:["/home/runner/work/components/components/src/components/HtmlEditor/HtmlEditor.vue"]};const fe={title:"Components/HtmlEditor",component:S,excludeStories:/.*Data$/,argTypes:{input:{action:"input"},tabClick:{action:"tab-click"}}},_=e=>({components:{HtmlEditor:S},setup(){const t=P(e.modelValue);return{modelValue:t,args:{...e,"update:modelValue":a=>{t.value=a,W("update:modelValue")(a)}}}},template:'<HtmlEditor v-bind="args" v-on="args" :model-value="modelValue" />'}),m=_.bind({}),d=_.bind({});d.args={modelValue:"<b>Hello World!</b>",selectedTab:"preview"};const i=_.bind({});i.args={modelValue:"<b>Hello World!</b>",disabled:!0};var E,H,T;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`(args: any) => ({
  components: {
    HtmlEditor
  },
  setup() {
    const modelValue = ref(args.modelValue);
    const onModelValueUpdate = (v: string) => {
      modelValue.value = v;
      action('update:modelValue')(v);
    };
    return {
      modelValue,
      args: {
        ...args,
        'update:modelValue': onModelValueUpdate
      }
    };
  },
  template: '<HtmlEditor v-bind="args" v-on="args" :model-value="modelValue" />'
})`,...(T=(H=m.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var y,$,k;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`(args: any) => ({
  components: {
    HtmlEditor
  },
  setup() {
    const modelValue = ref(args.modelValue);
    const onModelValueUpdate = (v: string) => {
      modelValue.value = v;
      action('update:modelValue')(v);
    };
    return {
      modelValue,
      args: {
        ...args,
        'update:modelValue': onModelValueUpdate
      }
    };
  },
  template: '<HtmlEditor v-bind="args" v-on="args" :model-value="modelValue" />'
})`,...(k=($=d.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var C,z,M;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`(args: any) => ({
  components: {
    HtmlEditor
  },
  setup() {
    const modelValue = ref(args.modelValue);
    const onModelValueUpdate = (v: string) => {
      modelValue.value = v;
      action('update:modelValue')(v);
    };
    return {
      modelValue,
      args: {
        ...args,
        'update:modelValue': onModelValueUpdate
      }
    };
  },
  template: '<HtmlEditor v-bind="args" v-on="args" :model-value="modelValue" />'
})`,...(M=(z=i.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};const Ve=["Default","PreviewOpenFirst","EditorDisabled"];export{m as Default,i as EditorDisabled,d as PreviewOpenFirst,Ve as __namedExportsOrder,fe as default};
