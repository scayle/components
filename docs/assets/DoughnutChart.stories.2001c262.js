import{f as te,l as ae,O as ne,a0 as re,o as se,u as oe}from"./vue.esm-bundler.b273ba75.js";import{C as z,A as ie,D as le}from"./index.23cb2f4f.js";import{g as ue}from"./chart-utils.54aee14d.js";import{_ as ce}from"./_plugin-vue_export-helper.cdc0426e.js";z.register(ie);z.register({id:"doughnut-centertext",beforeDraw(e){var t,n;if((n=(t=e.config.options)==null?void 0:t.elements)!=null&&n.center){const a=e.ctx,s=e.config.options.elements.center,o=s.title,i=s.heading;if(!o&&!i)return;const v=s.fontStyle||"Arial",Q=s.color,U=s.headingColor,Z=(s.sidePadding||20)/100*(e._metasets[e._metasets.length-1].data[0].innerRadius*2),C=e._metasets[e._metasets.length-1].data[0].innerRadius*2-Z,x=o&&i?10:0,y=(e.chartArea.left+e.chartArea.right)/2,D=(e.chartArea.top+e.chartArea.bottom)/2;if(a.textAlign="center",a.textBaseline="middle",i&&(a.fillStyle=U,a.font=`bold ${C*.09}px ${v}`,a.fillText(i,y,D-x)),o){const f=o.split(`
`);a.fillStyle=Q,a.font=`bold ${C*.175}px ${v}`;for(let l=0;l<f.length;l++){const ee=D+x+l*22-(f.length-1)*22/2;a.fillText(f[l],y,ee)}}}}});const X={name:"DoughnutChart",components:{DoughnutChartJs:le},props:{chartData:{type:Array,required:!0},title:{type:String,default:""},titleColor:{type:String,default:"#000"},heading:{type:String,default:""},headingColor:{type:String,default:"#8b8e92"},width:{type:String,default:"300px"},activeIndex:{type:Number,default:-1}},computed:{data(){const e=this.chartData.map(t=>t.y);return{labels:this.chartData.map(t=>t.x),datasets:[{data:e,backgroundColor:this.chartData.map((t,n)=>{var a;return(a=t.background)!=null?a:ue(n)})}]}},options(){return{elements:{center:{title:this.title,color:this.titleColor,fontStyle:"Arial",heading:this.heading,headingColor:this.headingColor}},plugins:{legend:{display:!1},tooltip:{callbacks:{label:e=>this.chartData[e.dataIndex].tooltip}}},borderWidth:this.chartData.length===1?0:4,hoverBorderWidth:this.chartData.length===1?0:6,hoverBorderColor:"transparent",responsive:!0,maintainAspectRatio:!0}}},watch:{activeIndex(e){var n,a;const t=this.$refs.doughnut.chart;!t||(e<0?((n=t.tooltip)==null||n.setActiveElements([]),t.setActiveElements([])):(t.setActiveElements([{datasetIndex:0,index:e}]),(a=t.tooltip)==null||a.setActiveElements([{datasetIndex:0,index:e}])),t.update())}}};function de(e,t,n,a,s,o){const i=re("DoughnutChartJs");return se(),te("div",{style:ne({width:n.width})},[ae(i,{ref:"doughnut",data:o.data,options:o.options},null,8,["data","options"])],4)}const Y=ce(X,[["render",de]]);X.__docgenInfo={displayName:"DoughnutChart",exportName:"default",description:"",tags:{},props:[{name:"chartData",type:{name:"array"},required:!0},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"titleColor",type:{name:"string"},defaultValue:{func:!1,value:"'#000'"}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"headingColor",type:{name:"string"},defaultValue:{func:!1,value:"'#8b8e92'"}},{name:"width",type:{name:"string"},defaultValue:{func:!1,value:"'300px'"}},{name:"activeIndex",type:{name:"number"},defaultValue:{func:!1,value:"-1"}}],sourceFiles:["/home/runner/work/components/components/src/components/Statistics/DoughnutChart/DoughnutChart.vue"]};const Ce={title:"Statistics/DoughnutChart",component:Y,argTypes:{chartData:{description:"An array containing the items of the chart. Every item should have an `x` and `y` property where `x` represents the name of the item (e.g. PayPal payments) and `y` its value (e.g. 123)"},title:{description:"The title to be displayed inside of the doughnut"},heading:{description:"A heading text above the title inside of the doughnut"},width:{description:"The width of the doughnut (e.g. `200px`)"},activeIndex:{description:"The index of the element that should be highlighted (manual hover effect)"}}},G={DoughnutChart:Y},K=[{x:"Female",y:66},{x:"Male",y:34}],r=e=>({components:G,setup(){return{args:{...e,chartData:K}}},template:'<DoughnutChart v-bind="args"></DoughnutChart>'}),u=(e={})=>r({...e,title:"100 Customers"}),c=(e={})=>r({...e,title:"100 Customers",titleColor:"#ff0000"}),d=(e={})=>r({...e,title:`10.000 
Customers`}),g=(e={})=>r({...e,heading:"Customers"}),h=(e={})=>r({...e,heading:"Customers",headingColor:"#ff0000"}),p=(e={})=>r({...e,title:"10.000",heading:"Customers"}),m=(e={})=>({components:G,setup(){const t=oe({...e,activeIndex:-1,chartData:K});return{args:t,updateActiveIndex:a=>t.value.activeIndex=a}},template:`
         <div class="inline-block">
            <DoughnutChart v-bind="args"></DoughnutChart>
            <div class="flex items-center justify-center gap-2 p-6">
                Hover:
                <button @mouseenter="updateActiveIndex(0)" @mouseleave="updateActiveIndex(-1)">Female</button>
                /
                <button @mouseenter="updateActiveIndex(1)" @mouseleave="updateActiveIndex(-1)">Male</button>
            </div>
        </div>
    `});var b,A,I;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args: {
        ...args,
        chartData
      }
    };
  },
  template: '<DoughnutChart v-bind="args"></DoughnutChart>'
})`,...(I=(A=r.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var S,_,L;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`(args: any = {}) => Default({
  ...args,
  title: '100 Customers'
})`,...(L=(_=u.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var k,H,w;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`(args: any = {}) => Default({
  ...args,
  title: '100 Customers',
  titleColor: '#ff0000'
})`,...(w=(H=c.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var B,E,V;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`(args: any = {}) => Default({
  ...args,
  title: '10.000 \\nCustomers'
})`,...(V=(E=d.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var W,P,T;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`(args: any = {}) => Default({
  ...args,
  heading: 'Customers'
})`,...(T=(P=g.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var $,F,N;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`(args: any = {}) => Default({
  ...args,
  heading: 'Customers',
  headingColor: '#ff0000'
})`,...(N=(F=h.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var J,M,O;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`(args: any = {}) => Default({
  ...args,
  title: '10.000',
  heading: 'Customers'
})`,...(O=(M=p.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var R,j,q;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`(args: any = {}) => ({
  components,
  setup() {
    const reactiveArgs = ref({
      ...args,
      activeIndex: -1,
      chartData
    });
    const updateActiveIndex = (index: number) => reactiveArgs.value.activeIndex = index;
    return {
      args: reactiveArgs,
      updateActiveIndex
    };
  },
  template: \`
         <div class="inline-block">
            <DoughnutChart v-bind="args"></DoughnutChart>
            <div class="flex items-center justify-center gap-2 p-6">
                Hover:
                <button @mouseenter="updateActiveIndex(0)" @mouseleave="updateActiveIndex(-1)">Female</button>
                /
                <button @mouseenter="updateActiveIndex(1)" @mouseleave="updateActiveIndex(-1)">Male</button>
            </div>
        </div>
    \`
})`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const xe=["Default","CenterLabel","CenterLabelDifferentColor","LongLabelWithLineBreak","CenterHeading","CenterHeadingDifferentColor","CenterHeadingWithLabel","ActiveIndex"];export{m as ActiveIndex,g as CenterHeading,h as CenterHeadingDifferentColor,p as CenterHeadingWithLabel,u as CenterLabel,c as CenterLabelDifferentColor,r as Default,d as LongLabelWithLineBreak,xe as __namedExportsOrder,Ce as default};
