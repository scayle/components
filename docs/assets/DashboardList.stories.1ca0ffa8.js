import{S as f}from"./Spinner.81853108.js";import{e as D,f as r,n as a,t,s as o,j as V,o as i,y as N,O as B}from"./vue.esm-bundler.b273ba75.js";import{u as C}from"./useTranslation.af5e9418.js";import{_}from"./_plugin-vue_export-helper.cdc0426e.js";import{c as E}from"./index.f631250a.js";import"./useConfig.46e52741.js";import"./index.d79d41b9.js";const y=D({name:"DashboardList",components:{Spinner:f},props:{title:{type:String,default:""},subtitle:{type:String,default:""},isLoading:{type:Boolean,default:!1}},setup(){const{t:e}=C();return{t:e}}}),W={class:"ay-dashboard-list"},w={class:"ay-dashboard-list__header"},F={class:"ay-dashboard-list__header-title"},O={class:"ay-dashboard-list__header-subtitle"},j={key:1,class:"ay-dashboard-list__content"},z={key:2,class:"ay-dashboard-list__empty-state-message"};function q(e,R,$,I,M,k){const T=f;return i(),r("div",W,[a("div",w,[a("div",null,[a("div",F,t(e.title),1),a("div",O,t(e.subtitle),1)]),o(e.$slots,"actions")]),e.isLoading?(i(),V(T,{key:0,class:"ay-dashboard-list__loader"})):e.$slots.default?(i(),r("ul",j,[o(e.$slots,"default")])):(i(),r("div",z,[o(e.$slots,"emptyState",{},()=>[N(t(e.t("dashboard-list.no-data-found")),1)])]))])}const p=_(y,[["render",q]]);y.__docgenInfo={displayName:"DashboardList",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"isLoading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"actions"},{name:"default"},{name:"emptyState"}],sourceFiles:["/home/runner/work/components/components/src/components/DashboardList/DashboardList.vue"]};const P=D({name:"DashboardListItem",props:{value:{type:String,default:""},label:{type:String,default:""},initials:{type:String,default:""},color:{type:String,default:""}},computed:{avatarStyles(){if(!!this.color)return{background:E(this.color).string()}}}}),A={class:"ay-dashboard-list-item"},G={class:"ay-dashboard-list-item__avatar avatar-sm"},H=["title"];function J(e,R,$,I,M,k){return i(),r("li",A,[a("div",G,[a("div",{class:"ay-dashboard-list-item__avatar-initials",style:B(e.avatarStyles)},t(e.initials),5)]),a("span",{class:"ay-dashboard-list-item__label",title:e.label},t(e.label),9,H),a("span",null,t(e.value),1)])}const K=_(P,[["render",J]]);P.__docgenInfo={displayName:"DashboardListItem",exportName:"default",description:"",tags:{},props:[{name:"value",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"initials",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"color",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/home/runner/work/components/components/src/components/DashboardList/DashboardListItem.vue"]};const ae={title:"Dashboard/DashboardList",component:p},s=()=>({components:{DashboardList:p,DashboardListItem:K},setup(){return{items:[{value:"60,445",label:"Mapper ServiceProvider DCI",initials:"MSD"},{value:"13,754",label:"Mapper_ServiceProvider_Wisebase",initials:"M"},{value:"1,731",label:"Partner Role 11 (Direct Shipping)",initials:"PR1"},{value:"1,731",label:"Partner Role 11 (Direct Shipping)",initials:"PR1"},{value:"1,731",label:"Partner Role 11 (Direct Shipping)",initials:"PR1"},{value:"1,731",label:"Partner Role 11 (Direct Shipping)",initials:"PR1"},{value:"1,731",label:"Partner Role 11 (Direct Shipping)",initials:"PR1"},{value:"1,731",label:"Partner Role 11 (Direct Shipping)",initials:"PR1",color:"blue"}]}},template:`<DashboardList title="Simple Title" subtitle="Simple Subtitle">
        <DashboardListItem v-for="item in items" v-bind="item" />
        </DashboardList>`});s.args=[{value:"60,445",label:"Mapper ServiceProvider DCI",initials:"MSD"},{value:"13,754",label:"Mapper_ServiceProvider_Wisebase",initials:"M"},{value:"1,731",label:"Partner Role 11 (Direct Shipping)",initials:"PR1"},{value:"1,731",label:"Partner Role 11 (Direct Shipping)",initials:"PR1"},{value:"1,731",label:"Partner Role 11 (Direct Shipping)",initials:"PR1"},{value:"1,731",label:"Partner Role 11 (Direct Shipping)",initials:"PR1"},{value:"1,731",label:"Partner Role 11 (Direct Shipping)",initials:"PR1"},{value:"1,731",label:"Partner Role 11 (Direct Shipping)",initials:"PR1",color:"blue"}];const L=(e={})=>({components:{DashboardList:p},setup(){return{args:{title:"Simple Title",subtitle:"Simple Subtitle",...e}}},template:'<DashboardList v-bind="args"></DashboardList>'}),l=L.bind({}),n=L.bind({});n.args={title:"Simple Title",subtitle:"Simple Subtitle",isLoading:!0};var d,u,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => ({
  components: {
    DashboardList,
    DashboardListItem
  },
  setup() {
    return {
      items: [{
        value: '60,445',
        label: 'Mapper ServiceProvider DCI',
        initials: 'MSD'
      }, {
        value: '13,754',
        label: 'Mapper_ServiceProvider_Wisebase',
        initials: 'M'
      }, {
        value: '1,731',
        label: 'Partner Role 11 (Direct Shipping)',
        initials: 'PR1'
      }, {
        value: '1,731',
        label: 'Partner Role 11 (Direct Shipping)',
        initials: 'PR1'
      }, {
        value: '1,731',
        label: 'Partner Role 11 (Direct Shipping)',
        initials: 'PR1'
      }, {
        value: '1,731',
        label: 'Partner Role 11 (Direct Shipping)',
        initials: 'PR1'
      }, {
        value: '1,731',
        label: 'Partner Role 11 (Direct Shipping)',
        initials: 'PR1'
      }, {
        value: '1,731',
        label: 'Partner Role 11 (Direct Shipping)',
        initials: 'PR1',
        color: 'blue'
      }]
    };
  },
  template: \`<DashboardList title="Simple Title" subtitle="Simple Subtitle">
        <DashboardListItem v-for="item in items" v-bind="item" />
        </DashboardList>\`
})`,...(c=(u=s.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,b,h;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`(args: any = {}) => ({
  components: {
    DashboardList
  },
  setup() {
    return {
      args: {
        title: 'Simple Title',
        subtitle: 'Simple Subtitle',
        ...args
      }
    };
  },
  template: '<DashboardList v-bind="args"></DashboardList>'
})`,...(h=(b=l.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,S,g;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`(args: any = {}) => ({
  components: {
    DashboardList
  },
  setup() {
    return {
      args: {
        title: 'Simple Title',
        subtitle: 'Simple Subtitle',
        ...args
      }
    };
  },
  template: '<DashboardList v-bind="args"></DashboardList>'
})`,...(g=(S=n.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const te=["Default","Empty","Loading"];export{s as Default,l as Empty,n as Loading,te as __namedExportsOrder,ae as default};
