import{e as F,x as q,f as y,F as k,m as A,q as x,o as i,j as U,k as E,s as M,y as P,t as g,u as j,$ as z,E as G,n as o}from"./vue.esm-bundler.b273ba75.js";import{g as t,a as n}from"./chart-utils.54aee14d.js";import{C as K}from"./Checkbox.6a056d6b.js";import"./_plugin-vue_export-helper.cdc0426e.js";const O=F({__name:"StatisticsLegend",props:{items:{type:Array,required:!0},border:{type:Boolean,default:!0},twoCols:{type:Boolean,default:!0},activeIndex:{type:Number,default:null}},emits:["toggle","hover"],setup(e){const f=e,v=q(()=>f.items.filter(s=>s.visible));function h(s){return v.value.length===1&&s.visible}return(s,r)=>(i(),y("div",{class:x(["grid gap-x-4 overflow-y-auto",{"rounded border border-secondary/20 p-4":e.border,"max-h-52 grid-cols-2":e.twoCols,"max-h-60":!e.twoCols}])},[(i(!0),y(k,null,A(e.items,(a,l)=>(i(),U(K,{key:l,modelValue:a.visible,"onUpdate:modelValue":d=>a.visible=d,"background-color":a.background,"dark-check":a.color==="black",disabled:h(a),class:x(["mr-0 flex items-center rounded p-2 hover:bg-light",{"bg-light":e.activeIndex===l}]),onInput:d=>s.$emit("toggle",l),onMouseenter:d=>s.$emit("hover",l),onMouseleave:r[0]||(r[0]=d=>s.$emit("hover",-1))},{default:E(()=>[s.$slots.item?M(s.$slots,"item",{key:0,item:a}):(i(),y(k,{key:1},[P(g(a.x),1)],64))]),_:2},1032,["modelValue","onUpdate:modelValue","background-color","dark-check","disabled","class","onInput","onMouseenter"]))),128))],2))}});O.__docgenInfo={exportName:"default",displayName:"StatisticsLegend",description:"",tags:{},props:[{name:"items",type:{name:"any[]"},required:!0},{name:"border",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"twoCols",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"activeIndex",type:{name:"number"},defaultValue:{func:!1,value:"null"}}],events:[{name:"toggle"},{name:"hover"}],slots:[{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"}]}],sourceFiles:["/home/runner/work/components/components/src/components/Statistics/StatisticsLegend/StatisticsLegend.vue"]};const H={class:"ml-2 flex grow items-center justify-between"},J={class:"font-bold"},Q={class:"inline-flex items-center"},R={class:"mr-2"},X={class:"rounded bg-dark px-2 py-1 text-sm font-bold text-dark-grey"},S=F({__name:"StatisticsLegendStorybookWrapper",props:{border:{type:Boolean,default:!0},twoCols:{type:Boolean,default:!0},useSlot:{type:Boolean,default:!1}},setup(e){const f=e,v=j([{x:"Denmark",y:4e4,percentage:12,visible:!0,background:t(0),color:n(t(0))},{x:"Norway",y:6e5,percentage:-8,visible:!0,background:t(1),color:n(t(1))},{x:"Germany",y:12e5,percentage:21,visible:!0,background:t(2),color:n(t(2))},{x:"United Kingdom",y:5e4,percentage:7,visible:!0,background:t(3),color:n(t(3))},{x:"Austria",y:9e5,percentage:-15,visible:!0,background:t(4),color:n(t(4))},{x:"Switzerland",y:424e3,percentage:17,visible:!0,background:t(5),color:n(t(5))}]);return(h,s)=>(i(),U(O,G({items:v.value},f),z({_:2},[e.useSlot?{name:"item",fn:E(({item:r})=>[o("div",H,[o("span",J,g(r.x),1),o("div",Q,[o("span",R,g(r.y),1),o("span",X,g(r.percentage)+" % ",1)])])]),key:"0"}:void 0]),1040,["items"]))}});S.__docgenInfo={exportName:"default",displayName:"StatisticsLegendStorybookWrapper",description:"",tags:{},props:[{name:"border",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"twoCols",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"useSlot",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/components/components/src/components/Statistics/StatisticsLegend/StatisticsLegendStorybookWrapper.vue"]};const se={title:"Statistics/StatisticsLegend",component:S,argTypes:{items:{description:"An array containing the items of the legend. Every item should have an `x` and `y` property where `x` represents the name of the item (e.g. PayPal payments) and `y` its value (e.g. 123)"},border:{description:"To show a border around the legend"},twoCols:{description:"To display the legend in 2 instead of 1 column"},activeIndex:{description:"The index of the element that should be highlighted (manual hover effect)"},hover:{description:"The event is triggered upon mouseenter in one element - its index is being emitted. On mouseleave, `-1` is being emitted"},toggle:{description:"The event is triggered after an item was (un)selected. It emits the index of the item"},useSlot:{description:"This prop does only exist in Storybook"}}},b={StatisticsLegendWrapper:S},c=e=>({components:b,setup(){return{args:{...e}}},template:'<StatisticsLegendWrapper v-bind="args"></StatisticsLegendWrapper>'}),u=e=>({components:b,setup(){return{args:{...e,border:!1}}},template:'<StatisticsLegendWrapper v-bind="args"></StatisticsLegendWrapper>'}),p=e=>({components:b,setup(){return{args:{...e,twoCols:!1}}},template:'<StatisticsLegendWrapper v-bind="args"></StatisticsLegendWrapper>'}),m=e=>({components:b,setup(){return{args:{...e,twoCols:!1,useSlot:!0}}},template:'<StatisticsLegendWrapper v-bind="args"></StatisticsLegendWrapper>'});var L,w,W;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args: {
        ...args
      }
    };
  },
  template: '<StatisticsLegendWrapper v-bind="args"></StatisticsLegendWrapper>'
})`,...(W=(w=c.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var C,B,V;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args: {
        ...args,
        border: false
      }
    };
  },
  template: '<StatisticsLegendWrapper v-bind="args"></StatisticsLegendWrapper>'
})`,...(V=(B=u.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var _,I,N;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args: {
        ...args,
        twoCols: false
      }
    };
  },
  template: '<StatisticsLegendWrapper v-bind="args"></StatisticsLegendWrapper>'
})`,...(N=(I=p.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var $,T,D;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args: {
        ...args,
        twoCols: false,
        useSlot: true
      }
    };
  },
  template: '<StatisticsLegendWrapper v-bind="args"></StatisticsLegendWrapper>'
})`,...(D=(T=m.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const ae=["Default","NoBorder","OneColumn","UseLabelSlot"];export{c as Default,u as NoBorder,p as OneColumn,m as UseLabelSlot,ae as __namedExportsOrder,se as default};
