import{_ as H,a as J}from"./checkmark.72a0f906.js";import{_ as K}from"./warning-fill.45a4d386.js";import{e as M,f as c,n,q as v,j as g,s as B,t as d,g as f,o as t,y as Q}from"./vue.esm-bundler.b273ba75.js";const R={class:"info-banner card"},U={class:"card-body flex"},X={class:"icon-wrapper"},Y={class:"text flex grow flex-col justify-center"},Z={class:"title"},ee={key:0,class:"subtitle"},ne={key:0,class:"action"},te={key:1,class:"self-center text-dark-grey"},y=M({__name:"InfoBanner",props:{type:{type:String,default:"default"},title:{type:String,default:""},subtitle:{type:String,default:""},buttonText:{type:String,default:""},dateString:{type:String,default:""}},emits:["buttonClick"],setup(e){return(p,b)=>{const O=H,A=K,G=J;return t(),c("div",R,[n("div",U,[n("div",X,[n("div",{class:v(["icon-wrapper-lvl1",e.type])},[n("div",{class:v(["icon-wrapper-lvl2",e.type])},[e.type==="success"?(t(),g(O,{key:0,class:"icon-sm icon-svg icon"})):["warning","danger"].includes(e.type)?(t(),g(A,{key:1,class:"icon-sm icon-svg icon"})):(t(),g(G,{key:2,class:"icon-sm icon-svg icon"}))],2)],2)]),n("div",Y,[n("div",Z,[B(p.$slots,"title",{},()=>[Q(d(e.title),1)])]),B(p.$slots,"subtitle",{},()=>[e.subtitle?(t(),c("div",ee,d(e.subtitle),1)):f("",!0)])]),e.buttonText?(t(),c("div",ne,[n("button",{class:"btn",type:"button",onClick:b[0]||(b[0]=ae=>p.$emit("buttonClick"))},d(e.buttonText),1)])):f("",!0),e.dateString?(t(),c("div",te,d(e.dateString),1)):f("",!0)])])}}});y.__docgenInfo={exportName:"default",displayName:"InfoBanner",description:"",tags:{},props:[{name:"type",type:{name:"InfoBannerType"},defaultValue:{func:!1,value:"'default'"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"buttonText",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"dateString",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"buttonClick"}],slots:[{name:"title"},{name:"subtitle"}],sourceFiles:["/home/runner/work/components/components/src/components/InfoBanner/InfoBanner.vue"]};const ie={title:"Components/InfoBanner",component:y,argTypes:{}},a=e=>({components:{InfoBanner:y},setup(){return{args:e}},template:'<InfoBanner v-bind="args" />'}),s=a.bind({});s.args={title:"This is the title",subtitle:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."};const r=a.bind({});r.args={buttonText:"Button",title:"This is the title",subtitle:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."};const o=a.bind({});o.args={dateString:"10.10.2023",title:"This is the title",subtitle:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."};const i=a.bind({});i.args={type:"success",title:"This is the title",subtitle:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."};const l=a.bind({});l.args={type:"info",title:"This is the title",subtitle:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."};const u=a.bind({});u.args={type:"warning",title:"This is the title",subtitle:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."};const m=a.bind({});m.args={type:"danger",title:"This is the title",subtitle:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."};var I,h,S;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`(args: any) => ({
  components: {
    InfoBanner
  },
  setup() {
    return {
      args
    };
  },
  template: '<InfoBanner v-bind="args" />'
})`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var _,k,T;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`(args: any) => ({
  components: {
    InfoBanner
  },
  setup() {
    return {
      args
    };
  },
  template: '<InfoBanner v-bind="args" />'
})`,...(T=(k=r.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var x,D,C;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`(args: any) => ({
  components: {
    InfoBanner
  },
  setup() {
    return {
      args
    };
  },
  template: '<InfoBanner v-bind="args" />'
})`,...(C=(D=o.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var q,V,w;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`(args: any) => ({
  components: {
    InfoBanner
  },
  setup() {
    return {
      args
    };
  },
  template: '<InfoBanner v-bind="args" />'
})`,...(w=(V=i.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var L,W,N;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`(args: any) => ({
  components: {
    InfoBanner
  },
  setup() {
    return {
      args
    };
  },
  template: '<InfoBanner v-bind="args" />'
})`,...(N=(W=l.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var $,F,P;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`(args: any) => ({
  components: {
    InfoBanner
  },
  setup() {
    return {
      args
    };
  },
  template: '<InfoBanner v-bind="args" />'
})`,...(P=(F=u.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var j,E,z;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`(args: any) => ({
  components: {
    InfoBanner
  },
  setup() {
    return {
      args
    };
  },
  template: '<InfoBanner v-bind="args" />'
})`,...(z=(E=m.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};const le=["Default","DefaultWithButton","DefaultWithDateString","Success","Info","Warning","Danger"];export{m as Danger,s as Default,r as DefaultWithButton,o as DefaultWithDateString,l as Info,i as Success,u as Warning,le as __namedExportsOrder,ie as default};
