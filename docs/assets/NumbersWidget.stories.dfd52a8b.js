import{I as p}from"./users.edadb0bd.js";import{_ as V}from"./ValueAnimation.60895f50.js";import{S as q}from"./Spinner.81853108.js";import{f as s,n as o,j as f,U as D,g as b,t as d,l as B,k as F,q as U,o as a,y as L}from"./vue.esm-bundler.b273ba75.js";import{_ as j}from"./_plugin-vue_export-helper.cdc0426e.js";const k={name:"NumbersWidget",components:{ValueAnimation:V},props:{title:{type:String,required:!0},icon:{type:String,default:null},data:{type:Object,required:!0},loading:{type:Boolean,default:!1},isPrice:{type:Boolean,default:!1},currency:{type:String,default:null},locale:{type:String,required:!0}},computed:{isNegative(){return this.percentageIncrease<0},showIncrease(){return!!this.data.previous&&this.data.current!==this.data.previous},percentageIncrease(){return this.showIncrease?((this.data.current-this.data.previous)/this.data.previous*100).toFixed(2):null}},methods:{formatValue(e,t="compact"){return e?this.isPrice?this.formatPrice(e/100,this.currency,t):this.formatNumber(e):0},formatPrice(e,t="",r="standard"){const l=this.locale,m=e.toLocaleString(l,{minimumFractionDigits:2,maximumFractionDigits:2});if(t===null||t==="")return m;try{return Intl.NumberFormat(l,{style:"currency",currency:t,currencyDisplay:"symbol",notation:r}).format(e)}catch{return m+" "+t}},formatNumber(e){return e==null?e:e.toLocaleString(this.locale)}}},E={class:"card simple-statistic mb-0 shadow-sm"},O={class:"card-body"},z={class:"flex items-center space-x-2"},T={key:0,class:"border rounded p-1 text-dark-grey"},G={class:"headline-15"},H={key:1,class:"flex items-center mt-4"},J={class:"headline-26 leading-0"};function K(e,t,r,l,m,n){const P=q,w=V;return a(),s("div",E,[o("div",O,[o("div",z,[r.icon?(a(),s("div",T,[(a(),f(D(r.icon)))])):b("",!0),o("span",G,d(r.title),1)]),r.loading?(a(),f(P,{key:0,class:"text-left mt-9"})):(a(),s("div",H,[o("div",J,[B(w,{value:r.data.current,"is-price":r.isPrice},{default:F(({value:A})=>[L(d(n.formatValue(A)),1)]),_:1},8,["value","is-price"])]),n.showIncrease?(a(),s("span",{key:0,class:U(["badge mt-1 mis-auto",{"badge-success":!n.isNegative,"badge-danger":n.isNegative}])},d(n.percentageIncrease)+"% ",3)):b("",!0)]))])])}const C=j(k,[["render",K]]);k.__docgenInfo={displayName:"NumbersWidget",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!0},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"data",type:{name:"object"},required:!0},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isPrice",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"currency",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"locale",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/components/components/src/components/NumbersWidget/NumbersWidget.vue"]};const Z={title:"Statistics/NumbersWidget",component:C},g={NumbersWidget:C},i=e=>({components:g,setup(){return{args:{...e,title:"Active Customers",data:{current:56342},icon:p,locale:"en"}}},template:'<NumbersWidget v-bind="args"></NumbersWidget>'}),c=e=>({components:g,setup(){return{args:{...e,title:"Active Customers",data:{current:56342,previous:42364},icon:p,locale:"en"}}},template:'<NumbersWidget v-bind="args"></NumbersWidget>'}),u=e=>({components:g,setup(){return{args:{...e,title:"Active Customers",loading:!0,icon:p,locale:"en"}}},template:'<NumbersWidget v-bind="args"></NumbersWidget>'});var _,h,y;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args: {
        ...args,
        title: 'Active Customers',
        data: {
          current: 56342
        },
        icon: IconPanelUsers,
        locale: 'en'
      }
    };
  },
  template: '<NumbersWidget v-bind="args"></NumbersWidget>'
})`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var N,v,W;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args: {
        ...args,
        title: 'Active Customers',
        data: {
          current: 56342,
          previous: 42364
        },
        icon: IconPanelUsers,
        locale: 'en'
      }
    };
  },
  template: '<NumbersWidget v-bind="args"></NumbersWidget>'
})`,...(W=(v=c.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};var I,S,x;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args: {
        ...args,
        title: 'Active Customers',
        loading: true,
        icon: IconPanelUsers,
        locale: 'en'
      }
    };
  },
  template: '<NumbersWidget v-bind="args"></NumbersWidget>'
})`,...(x=(S=u.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const $=["Default","ShowIncrease","Loading"];export{i as Default,u as Loading,c as ShowIncrease,$ as __namedExportsOrder,Z as default};
