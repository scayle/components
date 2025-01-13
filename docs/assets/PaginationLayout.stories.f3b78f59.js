import{x as v,e as j,v as X,f as z,n as $,j as w,k as g,g as _,s as p,l as Y,$ as q,o as u,F as G,m as H,t as J,X as l,Y as c,u as h}from"./vue.esm-bundler.b273ba75.js";import{_ as O,P as K}from"./Pagination.75e450f7.js";import{_ as E}from"./Select.9c241db4.js";import{_ as M}from"./Option.a7ee5a50.js";import{u as Q}from"./index.dc338bd7.js";import{_ as Z}from"./_plugin-vue_export-helper.cdc0426e.js";import"./chevron-right.d2e28c24.js";import"./utils.b3a37e59.js";import"./SearchInput.6e937c3a.js";import"./Input.310ceaf0.js";import"./useTranslation.af5e9418.js";import"./useConfig.46e52741.js";import"./close.08060f32.js";import"./Popper.a2a40fe0.js";import"./useNodeRootElement.8a60063e.js";import"./Tag.79dce8d9.js";function x({total:e,pageSize:a,currentPage:i}){const t=o=>o==null?void 0:o.toLocaleString(),S=v(()=>(i.value-1)*a.value+1),r=v(()=>i.value*a.value);return{paginationInfo:v(()=>{const o=t(r.value),y=t(S.value),n=t(e.value);return e.value<=0?`Showing ${t(0)} of ${n}`:r.value>e.value?`Showing ${y}-${n} of ${n}`:`Showing ${y}-${o} of ${n}`})}}const R=j({name:"PaginationLayout",components:{Option:M,Select:E,Pagination:O},props:{...K,appendSelectDropdownToBody:{type:Boolean,default:!0},withoutPageSizeSelector:{type:Boolean,default:!1},pageSizes:{type:Array,default:()=>[15,30,45,60]}},emits:{change(e){return!0},["update:currentPage"](e){return!0},["update:pageSize"](e){return!0}},setup(e,{emit:a}){const{total:i,pageSizes:t,currentPage:S}=X(e),r=Q(e,"pageSize",a),P=v(()=>t.value.includes(r.value)?t.value:[r.value,...t.value].sort()),{paginationInfo:o}=x({total:i,pageSize:r,currentPage:S});return{paginationInfo:o,totalPageSizes:P,currentPageSize:r}}}),ee={class:"ay-pagination-layout"},ne={class:"ay-pagination-layout__group"},ae={key:0,class:"ay-pagination-layout__info"},te={class:"ay-pagination-layout__group"};function oe(e,a,i,t,S,r){const P=M,o=E,y=O;return u(),z("div",ee,[$("div",ne,[e.withoutPageSizeSelector?_("",!0):(u(),w(o,{key:0,modelValue:e.currentPageSize,"onUpdate:modelValue":a[0]||(a[0]=n=>e.currentPageSize=n),"append-dropdown-to-body":e.appendSelectDropdownToBody},{default:g(()=>[(u(!0),z(G,null,H(e.totalPageSizes,n=>(u(),w(P,{key:n,label:n.toString(),value:n},null,8,["label","value"]))),128))]),_:1},8,["modelValue","append-dropdown-to-body"])),p(e.$slots,"info",{paginationInfo:e.paginationInfo},()=>[e.total>0?(u(),z("div",ae,J(e.paginationInfo),1)):_("",!0)]),p(e.$slots,"after-info")]),$("div",te,[Y(y,{"current-page":e.currentPage,"disable-collapsed-pages":e.disableCollapsedPages,"page-size":e.currentPageSize,total:e.total,onChange:a[1]||(a[1]=n=>e.$emit("change",n)),"onUpdate:currentPage":a[2]||(a[2]=n=>e.$emit("update:currentPage",n))},q({_:2},[e.$slots["prev-page-button"]?{name:"prev-page-button",fn:g(n=>[p(e.$slots,"prev-page-button",l(c(n)))]),key:"0"}:void 0,e.$slots["pages-container"]?{name:"pages-container",fn:g(n=>[p(e.$slots,"pages-container",l(c(n)))]),key:"1"}:void 0,e.$slots["page-button"]?{name:"page-button",fn:g(n=>[p(e.$slots,"page-button",l(c(n)))]),key:"2"}:void 0,e.$slots["next-page-button"]?{name:"next-page-button",fn:g(n=>[p(e.$slots,"next-page-button",l(c(n)))]),key:"3"}:void 0,e.$slots["separator-btn"]?{name:"separator-btn",fn:g(n=>[p(e.$slots,"separator-btn",l(c(n)))]),key:"4"}:void 0]),1032,["current-page","disable-collapsed-pages","page-size","total"])])])}const U=Z(R,[["render",oe]]);R.__docgenInfo={displayName:"PaginationLayout",exportName:"default",description:"",tags:{},props:[{name:"appendSelectDropdownToBody",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"withoutPageSizeSelector",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"pageSizes",type:{name:"array"},defaultValue:{func:!1,value:"[15, 30, 45, 60]"}}],events:[{name:"change"},{name:"update:currentPage"},{name:"update:pageSize"}],slots:[{name:"info",scoped:!0,bindings:[{name:"pagination-info",title:"binding"}]},{name:"after-info"},{name:"prev-page-button",scoped:!0,bindings:[]},{name:"pages-container",scoped:!0,bindings:[]},{name:"page-button",scoped:!0,bindings:[]},{name:"next-page-button",scoped:!0,bindings:[]},{name:"separator-btn",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/components/components/src/components/Pagination/PaginationLayout.vue"]};const ze={title:"Components/PaginationLayout",component:U,excludeStories:/.*Data$/,argTypes:{}},b=e=>({components:{PaginationLayout:U},setup(){const a=h(e.pageSize||15),i=h(e.currentPage||1);return{args:e,pageSize:a,currentPage:i}},template:`<PaginationLayout
        v-bind="args"
        v-on="args"
        v-model:page-size="pageSize"
        v-model:current-page="currentPage"
    />`}),s=b.bind({});s.args={pageSize:15,total:120};const d=b.bind({});d.args={...s.args,disableCollapsedPages:!0};const m=b.bind({});m.args={...s.args,withoutPageSizeSelector:!0};const f=b.bind({});f.args={...s.args,appendSelectDropdownToBody:!1};var L,k,B;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`(args: any) => ({
  components: {
    PaginationLayout
  },
  setup() {
    const pageSize = ref(args.pageSize || 15);
    const currentPage = ref(args.currentPage || 1);
    return {
      args,
      pageSize,
      currentPage
    };
  },
  template: \`<PaginationLayout
        v-bind="args"
        v-on="args"
        v-model:page-size="pageSize"
        v-model:current-page="currentPage"
    />\`
})`,...(B=(k=s.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var D,V,C;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`(args: any) => ({
  components: {
    PaginationLayout
  },
  setup() {
    const pageSize = ref(args.pageSize || 15);
    const currentPage = ref(args.currentPage || 1);
    return {
      args,
      pageSize,
      currentPage
    };
  },
  template: \`<PaginationLayout
        v-bind="args"
        v-on="args"
        v-model:page-size="pageSize"
        v-model:current-page="currentPage"
    />\`
})`,...(C=(V=d.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var T,N,I;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`(args: any) => ({
  components: {
    PaginationLayout
  },
  setup() {
    const pageSize = ref(args.pageSize || 15);
    const currentPage = ref(args.currentPage || 1);
    return {
      args,
      pageSize,
      currentPage
    };
  },
  template: \`<PaginationLayout
        v-bind="args"
        v-on="args"
        v-model:page-size="pageSize"
        v-model:current-page="currentPage"
    />\`
})`,...(I=(N=m.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var W,F,A;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`(args: any) => ({
  components: {
    PaginationLayout
  },
  setup() {
    const pageSize = ref(args.pageSize || 15);
    const currentPage = ref(args.currentPage || 1);
    return {
      args,
      pageSize,
      currentPage
    };
  },
  template: \`<PaginationLayout
        v-bind="args"
        v-on="args"
        v-model:page-size="pageSize"
        v-model:current-page="currentPage"
    />\`
})`,...(A=(F=f.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};const $e=["Default","WithCollapsedPagesDisabled","WithoutPageSizeSelector","WithSelectDropdownNotAppendedToBody"];export{s as Default,d as WithCollapsedPagesDisabled,f as WithSelectDropdownNotAppendedToBody,m as WithoutPageSizeSelector,$e as __namedExportsOrder,ze as default};
