import{I as l}from"./shirt.9b2b3210.js";import{o as n,f as r,n as o,j as s,U as S,g as c,t as d,k as y,F as x,m as k,q as I,l as rt,y as ot}from"./vue.esm-bundler.b273ba75.js";import{E as z}from"./EmptyState.1bffc204.js";import{_ as D}from"./ValueAnimation.60895f50.js";import{S as G}from"./Spinner.81853108.js";import{_ as J}from"./Select.9c241db4.js";import{_ as K}from"./Option.a7ee5a50.js";import{u as it}from"./useConfig.46e52741.js";import{_ as st}from"./_plugin-vue_export-helper.cdc0426e.js";import"./index.dc338bd7.js";import"./SearchInput.6e937c3a.js";import"./Input.310ceaf0.js";import"./useTranslation.af5e9418.js";import"./close.08060f32.js";import"./Popper.a2a40fe0.js";import"./useNodeRootElement.8a60063e.js";import"./utils.b3a37e59.js";import"./Tag.79dce8d9.js";const ct={class:"icon",width:"1.2em",height:"1.2em",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"};function lt(t,i){return n(),r("svg",ct,i[0]||(i[0]=[o("path",{fill:"currentColor","fill-rule":"nonzero",d:"M8.432 4a2 2 0 0 1 1.675.889l.086.143.87 1.583H20c1.054 0 1.918.801 1.995 1.816l.005.146v9.461c0 1.034-.816 1.882-1.85 1.957L20 20H4c-1.054 0-1.918-.8-1.995-1.815L2 18.038V5.962c0-1.034.816-1.882 1.85-1.957L4 4zm0 1.5H4c-.25 0-.45.169-.492.38l-.008.082v12.076c0 .22.172.414.409.454L4 18.5h16c.25 0 .45-.169.492-.38l.008-.082V8.577a.475.475 0 0 0-.409-.454L20 8.115h-9.825L8.878 5.752a.49.49 0 0 0-.351-.244z"},null,-1)]))}const ut={name:"panel-folder",render:lt},Q={name:"StatisticsTable",components:{Select:J,Option:K,Spinner:G,ValueAnimation:D,EmptyState:z},props:{data:{type:Array,required:!0},filterOptions:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},title:{type:String,required:!0},icon:null,rowIcon:null,unit:{type:String,default:""},emptyText:{type:String,default:""},emptyHint:{type:String,default:""},initialFilter:{type:String,default:""}},emits:["selectFilter"],data(){return{activeFilter:this.initialFilter}},computed:{computedUnit(){return this.unit.length?` ${this.unit}`:""}},watch:{activeFilter(t){this.$emit("selectFilter",t)}},methods:{formatNumber(t){if(t==null)return t;const i=it();return t.toLocaleString(i.locale)}}},dt={class:"card min-h-[290px]"},mt={class:"card-header flex items-center py-5 px-4 border-0"},pt={key:0,class:"border rounded p-1 text-dark-grey mr-2"},ft={key:1,class:"max-h-80 overflow-y-auto"},gt=["src"],_t={class:"flex overflow-hidden flex-col grow"},bt={class:"headline-15 inline-flex font-bold"},ht={class:"shrink truncate"},St={key:0},yt={key:0,class:"badge badge-secondary mr-1"},vt={class:"badge badge-secondary"};function Tt(t,i,a,xt,v,T){const Y=K,Z=J,$=G,tt=D,et=z;return n(),r("div",dt,[o("div",mt,[a.icon?(n(),r("div",pt,[(n(),s(S(a.icon)))])):c("",!0),o("h4",null,d(a.title),1),a.filterOptions.length?(n(),s(Z,{key:1,modelValue:v.activeFilter,"onUpdate:modelValue":i[0]||(i[0]=e=>v.activeFilter=e),class:"ml-auto w-24"},{default:y(()=>[(n(!0),r(x,null,k(a.filterOptions,e=>(n(),s(Y,{key:e.name,value:e.name,label:e.name,hint:e.hint},null,8,["value","label","hint"]))),128))]),_:1},8,["modelValue"])):c("",!0)]),o("div",{class:I(["card-body p-0",{"flex items-center justify-center":a.loading}])},[a.loading?(n(),s($,{key:0})):(n(),r("div",ft,[(n(!0),r(x,null,k(a.data,(e,nt)=>(n(),r("div",{key:nt,class:I(["flex px-4 py-1",[a.rowIcon?"items-start":"items-center"]])},[(n(),s(S(e.url?"a":"div"),{href:e.url,rel:"noopener",target:"_blank",class:"flex justify-center items-center mie-2 overflow-hidden"},{default:y(()=>[a.rowIcon?(n(),s(S(a.rowIcon),{key:0,class:"text-dark-grey"})):e.image_url?(n(),r("img",{key:1,src:e.image_url,class:"w-10 h-14 border rounded object-contain",alt:""},null,8,gt)):c("",!0)]),_:2},1032,["href"])),o("div",_t,[o("div",bt,[o("span",ht,d(e.name),1),rt(tt,{class:"mis-auto text-right",value:e.count},{default:y(({value:at})=>[ot(d(T.formatNumber(at)+T.computedUnit),1)]),_:2},1032,["value"])]),e.brand||e.color?(n(),r("div",St,[e.brand?(n(),r("span",yt,d(e.brand),1)):c("",!0),o("span",vt,d(e.color),1)])):c("",!0)])],2))),128)),a.data.length===0?(n(),s(et,{key:0,icon:a.icon,"text-title":a.emptyText,"text-hint":a.emptyHint},null,8,["icon","text-title","text-hint"])):c("",!0)]))],2)])}const X=st(Q,[["render",Tt]]);Q.__docgenInfo={displayName:"StatisticsTable",exportName:"default",description:"",tags:{},props:[{name:"data",type:{name:"array"},required:!0},{name:"filterOptions",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"},required:!0},{name:"icon",type:{name:"null",func:!0}},{name:"rowIcon",type:{name:"null",func:!0}},{name:"unit",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"emptyText",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"emptyHint",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"initialFilter",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"selectFilter",type:{names:["undefined"]}}],sourceFiles:["/home/runner/work/components/components/src/components/Statistics/StatisticsTable/StatisticsTable.vue"]};const qt={title:"Statistics/StatisticsTable",component:X,argTypes:{icon:{table:{disable:!0}},rowIcon:{table:{disable:!0}}}},u={StatisticsTable:X},h=[{image_url:"/mock-product.avif",name:"Shirt",brand:"Vero Moda",color:"White",count:20500},{image_url:"/mock-product.avif",name:"Shirt",brand:"Vero Moda",color:"White",count:20500},{image_url:"/mock-product.avif",name:"Shirt",brand:"Vero Moda",color:"White",count:20500},{image_url:"/mock-product.avif",name:"Shirt",brand:"Vero Moda",color:"White",count:20500},{image_url:"/mock-product.avif",name:"Shirt",brand:"Vero Moda",color:"White",count:20500},{image_url:"/mock-product.avif",name:"Shirt",brand:"Vero Moda",color:"White",count:20500},{image_url:"/mock-product.avif",name:"Shirt",brand:"Vero Moda",color:"White",count:20500},{image_url:"/mock-product.avif",name:"Shirt",brand:"Vero Moda",color:"White",count:20500}],m=t=>({components:u,setup(){return{args:{...t,data:h,title:"Top Products",icon:l,filterOptions:[]}}},template:'<StatisticsTable v-bind="args"></StatisticsTable>'}),p=t=>({components:u,setup(){return{args:{...t,data:h,title:"Top Products",icon:l,filterOptions:[],rowIcon:ut}}},template:'<StatisticsTable v-bind="args"></StatisticsTable>'}),f=t=>({components:u,setup(){return{args:{...t,data:h,title:"Top Products",icon:l,filterOptions:[{name:"Count"},{name:"Revenue"}]}}},template:'<StatisticsTable v-bind="args"></StatisticsTable>'}),g=t=>({components:u,setup(){return{args:{...t,data:h,title:"Top Products",icon:l,filterOptions:[{name:"Count"},{name:"Revenue"}],initialFilter:"Revenue",unit:"\u20AC"}}},template:'<StatisticsTable v-bind="args"></StatisticsTable>'}),_=t=>({components:u,setup(){return{args:{...t,data:[],title:"Top Products",icon:l,emptyText:"No products found",emptyHint:"Please create some products first."}}},template:'<StatisticsTable v-bind="args"></StatisticsTable>'}),b=t=>({components:u,setup(){return{args:{...t,data:[],title:"Top Products",icon:l,loading:!0}}},template:'<StatisticsTable v-bind="args"></StatisticsTable>'});var V,w,P;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args: {
        ...args,
        data,
        title: 'Top Products',
        icon: IconPanelShirt,
        filterOptions: []
      }
    };
  },
  template: '<StatisticsTable v-bind="args"></StatisticsTable>'
})`,...(P=(w=m.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var F,O,W;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args: {
        ...args,
        data,
        title: 'Top Products',
        icon: IconPanelShirt,
        filterOptions: [],
        rowIcon: IconPanelFolder
      }
    };
  },
  template: '<StatisticsTable v-bind="args"></StatisticsTable>'
})`,...(W=(O=p.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var C,L,N;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args: {
        ...args,
        data,
        title: 'Top Products',
        icon: IconPanelShirt,
        filterOptions: [{
          name: 'Count'
        }, {
          name: 'Revenue'
        }]
      }
    };
  },
  template: '<StatisticsTable v-bind="args"></StatisticsTable>'
})`,...(N=(L=f.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var M,E,H;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args: {
        ...args,
        data,
        title: 'Top Products',
        icon: IconPanelShirt,
        filterOptions: [{
          name: 'Count'
        }, {
          name: 'Revenue'
        }],
        initialFilter: 'Revenue',
        unit: '\u20AC'
      }
    };
  },
  template: '<StatisticsTable v-bind="args"></StatisticsTable>'
})`,...(H=(E=g.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var A,B,R;_.parameters={..._.parameters,docs:{...(A=_.parameters)==null?void 0:A.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args: {
        ...args,
        data: [],
        title: 'Top Products',
        icon: IconPanelShirt,
        emptyText: 'No products found',
        emptyHint: 'Please create some products first.'
      }
    };
  },
  template: '<StatisticsTable v-bind="args"></StatisticsTable>'
})`,...(R=(B=_.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var U,q,j;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args: {
        ...args,
        data: [],
        title: 'Top Products',
        icon: IconPanelShirt,
        loading: true
      }
    };
  },
  template: '<StatisticsTable v-bind="args"></StatisticsTable>'
})`,...(j=(q=b.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};const jt=["Default","WithIconsInsteadOfImages","WithFilter","WithUnit","EmptyState","Loading"];export{m as Default,_ as EmptyState,b as Loading,f as WithFilter,p as WithIconsInsteadOfImages,g as WithUnit,jt as __namedExportsOrder,qt as default};
