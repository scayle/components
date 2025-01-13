import{C as m,L as h,P as f,p as g,a as y,b as C,c as v,T as L,d as _,i as b,e as x}from"./index.23cb2f4f.js";import{j as D,a0 as S,o as k}from"./vue.esm-bundler.b273ba75.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";m.register(h,f,g,y,C,v,L,_,b);const c={name:"LineChart",components:{LineChartJs:x},props:{chartData:{type:Object,required:!0},unit:{type:String,default:""},locale:{type:String,default:"en"},rtl:{type:Boolean,default:!1}},computed:{data(){const e=Object.keys(this.chartData),a=Object.values(this.chartData);return{labels:e,datasets:[{data:a,fill:!0,borderColor:"#FBB410",borderWidth:2,backgroundColor:t=>{const n=t.chart.ctx.createLinearGradient(0,0,0,160);return n.addColorStop(0,"#fdd25180"),n.addColorStop(.5,"#FDD2513C"),n.addColorStop(1,"#FDD25100"),n}}]}},computedUnit(){return this.unit.length?` ${this.unit}`:""},options(){const e=this.rtl,a=this.locale;return{locale:a,plugins:{tooltip:{rtl:e,callbacks:{label:t=>" "+(t.formattedValue||t.raw)+this.computedUnit}},legend:{display:!1}},elements:{line:{tension:.2},point:{radius:2,hitRadius:6}},scales:{x:{grid:{display:!1},ticks:{color:"#828991"},adapters:{date:{locale:a}},reverse:e},y:{type:"linear",position:e?"right":"left",ticks:{color:"#828991",callback:t=>t+this.computedUnit}}},responsive:!0,maintainAspectRatio:!0}}}};function T(e,a,t,d,n,s){const u=S("LineChartJs");return k(),D(u,{data:s.data,options:s.options},null,8,["data","options"])}const p=w(c,[["render",T]]);c.__docgenInfo={displayName:"LineChart",exportName:"default",description:"",tags:{},props:[{name:"chartData",type:{name:"object"},required:!0},{name:"unit",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"locale",type:{name:"string"},defaultValue:{func:!1,value:"'en'"}},{name:"rtl",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/components/components/src/components/Statistics/LineChart/LineChart.vue"]};const O={title:"Statistics/LineChart",component:p,argTypes:{chartData:{description:"An array containing the items of the chart. Every item should have an `x` and `y` property where `x` represents the name of the item (e.g. PayPal payments) and `y` its value (e.g. 123)"},unit:{description:"The unit string to display as suffix of every item value (y) within the chart"},locale:{description:"The locale used for formatting"},rtl:{description:"To enable right-to-left display of the charts x-axis"}}},j={LineChart:p},r=e=>({components:j,setup(){return{args:{...e,chartData:{"26.05.":750,"27.05.":1050,"28.05.":900,"29.05.":800,"30.05.":1150,"31.05.":1100,"01.06.":1200,"02.06.":900}}}},template:'<div class="max-w-2xl"><LineChart v-bind="args"></LineChart></div>'});var o,i,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args: {
        ...args,
        chartData: {
          '26.05.': 750,
          '27.05.': 1050,
          '28.05.': 900,
          '29.05.': 800,
          '30.05.': 1150,
          '31.05.': 1100,
          '01.06.': 1200,
          '02.06.': 900
        }
      }
    };
  },
  template: '<div class="max-w-2xl"><LineChart v-bind="args"></LineChart></div>'
})`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const P=["Default"];export{r as Default,P as __namedExportsOrder,O as default};
