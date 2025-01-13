import{_ as F}from"./warning-fill.45a4d386.js";import{e as $,f as o,O as k,s as P,g as d,n as r,t as i,o as c}from"./vue.esm-bundler.b273ba75.js";import{c as p}from"./index.f631250a.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";import"./index.d79d41b9.js";const W=$({name:"DashboardStatistic",props:{value:{type:String,required:!0},color:{type:String,default:""},label:{type:String,default:""},secondaryLabel:{type:String,default:""}},computed:{iconStyles(){return{background:p(this.color).lighten(.9).string(),color:p(this.color).string()}}}}),N={class:"ay-dashboard-statistic"},B={class:"ay-dashboard-statistic__body"},C={class:"ay-dashboard-statistic__value"},q={class:"ay-dashboard-statistic__label"},A={key:0,class:"ay-dashboard-statistic__label--secondary"};function E(a,O,w,z,j,G){return c(),o("div",N,[a.$slots.default?(c(),o("div",{key:0,class:"ay-dashboard-statistic__icon icon",style:k(a.iconStyles)},[P(a.$slots,"default")],4)):d("",!0),r("div",B,[r("div",C,i(a.value),1),r("div",q,i(a.label),1),a.secondaryLabel?(c(),o("div",A,i(a.secondaryLabel),1)):d("",!0)])])}const l=V(W,[["render",E]]);W.__docgenInfo={displayName:"DashboardStatistic",exportName:"default",description:"",tags:{},props:[{name:"value",type:{name:"string"},required:!0},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"secondaryLabel",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/components/components/src/components/DashboardStatistic/DashboardStatistic.vue"]};const R={title:"Dashboard/DashboardStatistic",component:l,argTypes:{value:{description:"The title of the statistics panel"},label:{description:"The subtitle of the statistics panel"},secondaryLabel:{description:"The text underneath the label"},color:{description:"The color of the icon provided by the default slot"},default:{description:"The slot used to provide the icon on the right of the statistics panel"}}},I=a=>({components:{DashboardStatistic:l},setup(){return{args:a}},template:'<DashboardStatistic v-bind="args"></DashboardStatistic>'}),T=a=>({components:{DashboardStatistic:l,IconPanelWarningFill:F},setup(){return{args:a}},template:`
        <DashboardStatistic v-bind="args">
            <IconPanelWarningFill />
        </DashboardStatistic>
    `}),e=I.bind({});e.args={value:"99",label:"Label"};const t=I.bind({});t.args={value:"99",color:"red",label:"Label",secondaryLabel:"Secondary Label"};const s=T.bind({});s.args={value:"99",color:"red",label:"Label"};const n=T.bind({});n.args={value:"99",color:"red",label:"Label",secondaryLabel:"Secondary Label"};var u,b,m;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => ({
  components: {
    DashboardStatistic
  },
  setup() {
    return {
      args
    };
  },
  template: '<DashboardStatistic v-bind="args"></DashboardStatistic>'
})`,...(m=(b=e.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var h,g,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`(args: any) => ({
  components: {
    DashboardStatistic
  },
  setup() {
    return {
      args
    };
  },
  template: '<DashboardStatistic v-bind="args"></DashboardStatistic>'
})`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var S,f,_;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`(args: any) => ({
  components: {
    DashboardStatistic,
    IconPanelWarningFill
  },
  setup() {
    return {
      args
    };
  },
  template: \`
        <DashboardStatistic v-bind="args">
            <IconPanelWarningFill />
        </DashboardStatistic>
    \`
})`,...(_=(f=s.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var D,v,L;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`(args: any) => ({
  components: {
    DashboardStatistic,
    IconPanelWarningFill
  },
  setup() {
    return {
      args
    };
  },
  template: \`
        <DashboardStatistic v-bind="args">
            <IconPanelWarningFill />
        </DashboardStatistic>
    \`
})`,...(L=(v=n.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};const U=["Default","WithSecondaryLabel","WithIcon","WithIconAndSecondaryLabel"];export{e as Default,s as WithIcon,n as WithIconAndSecondaryLabel,t as WithSecondaryLabel,U as __namedExportsOrder,R as default};
