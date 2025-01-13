import{e as b,f as l,F as k,m as C,o as c,q as S,O as B,n as r,t as d}from"./vue.esm-bundler.b273ba75.js";import{g as w}from"./chart-utils.54aee14d.js";const z={class:"whitespace-nowrap"},H=["onMouseenter"],I={class:"mx-4 flex w-full overflow-hidden"},P={class:"inline-block overflow-hidden text-ellipsis rounded bg-black/20 px-2 py-1 text-xs font-bold uppercase text-white"},D={class:"absolute -top-12 hidden animate-fade-in flex-col items-center group-hover:flex"},_={class:"rounded bg-black/80 px-2 py-1"},N={class:"block text-sm font-bold text-white/60"},$={class:"block text-base font-bold text-white"},u=b({__name:"BarChartHorizontalStacked",props:{items:{type:Array,required:!0},totalCount:{type:Number,default:null},activeIndex:{type:Number,default:null}},emits:["hover"],setup(t){const s=t,y=e=>e===0,x=e=>e===s.items.length-1,f=e=>e===s.totalCount?"100%":e===0?"0%":`${e/s.totalCount*100}%`,g=(e,n)=>{var a;return{width:s.totalCount?f(e.y):void 0,backgroundColor:(a=e.background)!=null?a:w(n)}};return(e,n)=>(c(),l("div",z,[(c(!0),l(k,null,C(t.items,(a,o)=>(c(),l("div",{key:o,class:S(["border-color-white group box-border inline-flex h-24 items-center justify-center border transition-all",{"rounded-l-lg":y(o),"rounded-r-lg":x(o),"hover:scale-[1.07]":t.items.length>1,"hover:scale-[1.02]":t.items.length===1,"scale-[1.07]":t.items.length>1&&t.activeIndex===o,"scale-[1.02]":t.items.length===1&&t.activeIndex===o}]),style:B(g(a,o)),onMouseenter:v=>e.$emit("hover",o),onMouseleave:n[0]||(n[0]=v=>e.$emit("hover",-1))},[r("div",I,[r("span",P,d(a.x),1)]),r("div",D,[r("div",_,[r("span",N,d(a.x),1),r("span",$,d(a.y),1)]),n[1]||(n[1]=r("span",{class:"h-0 w-0 border-x-[6px] border-t-[9px] border-x-transparent border-t-black/80"},null,-1))])],46,H))),128))]))}});u.__docgenInfo={exportName:"default",displayName:"BarChartHorizontalStacked",description:"",tags:{},props:[{name:"items",type:{name:"any[]"},required:!0},{name:"totalCount",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"activeIndex",type:{name:"number"},defaultValue:{func:!1,value:"null"}}],events:[{name:"hover"}],sourceFiles:["/home/runner/work/components/components/src/components/Statistics/BarChartHorizontalStacked/BarChartHorizontalStacked.vue"]};const q={title:"Statistics/BarChartHorizontalStacked",component:u,argTypes:{items:{description:"An array containing the items of the chart. every item should have an `x` and `y` property where `x` represents the name of the item (e.g. PayPal payments) and `y` its value (e.g. 123)"},totalCount:{description:"The sum of every `y` property from the items used to calculate the percentual width of each item displayed"},activeIndex:{description:"The index of the element that should be highlighted (manual hover effect)"},hover:{description:"The event is triggered upon mouseenter in one element - its index is being emitted. on mouseleave, `-1` is being emitted"}}},F={BarChartHorizontalStacked:u},i=t=>({components:F,setup(){return{args:{...t,items:[{x:"PayPal",y:34},{x:"Kreditkarte",y:20},{x:"Invoice",y:16},{x:"Paydirekt",y:8},{x:"Sofort",y:9},{x:"Lastschrift",y:8},{x:"Discover",y:4},{x:"DinersClub",y:1}],totalCount:100}}},template:'<BarChartHorizontalStacked v-bind="args" class="pt-16 mx-6"></BarChartHorizontalStacked>'});var m,h,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args: {
        ...args,
        items: [{
          x: 'PayPal',
          y: 34
        }, {
          x: 'Kreditkarte',
          y: 20
        }, {
          x: 'Invoice',
          y: 16
        }, {
          x: 'Paydirekt',
          y: 8
        }, {
          x: 'Sofort',
          y: 9
        }, {
          x: 'Lastschrift',
          y: 8
        }, {
          x: 'Discover',
          y: 4
        }, {
          x: 'DinersClub',
          y: 1
        }],
        totalCount: 100
      }
    };
  },
  template: '<BarChartHorizontalStacked v-bind="args" class="pt-16 mx-6"></BarChartHorizontalStacked>'
  // pt-16 is to properly display the tooltips in storybook
})`,...(p=(h=i.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};const M=["Default"];export{i as Default,M as __namedExportsOrder,q as default};
