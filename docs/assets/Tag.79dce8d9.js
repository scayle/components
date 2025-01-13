import{_ as r}from"./close.08060f32.js";import{e as u,f as p,s as c,j as f,q as n,g as d,o as s}from"./vue.esm-bundler.b273ba75.js";import{_ as m}from"./_plugin-vue_export-helper.cdc0426e.js";const l=u({name:"Tag",props:{closable:{type:Boolean,default:!1},type:{type:String,default:null},disabled:{type:Boolean,default:!1}},emits:{close(e){return!0}},computed:{typeClass(){return this.type?{info:"ay-tag--info",warning:"ay-tag--warning",success:"ay-tag--success",danger:"ay-tag--danger"}[this.type]:"ay-tag--default"}}});function i(e,a,g,y,_,b){const o=r;return s(),p("span",{class:n([e.typeClass,"ay-tag"])},[c(e.$slots,"default"),e.closable?(s(),f(o,{key:0,class:n(["ay-tag__close-btn",{disabled:e.disabled}]),onClick:a[0]||(a[0]=t=>e.disabled?null:e.$emit("close",t))},null,8,["class"])):d("",!0)],2)}const $=m(l,[["render",i]]);l.__docgenInfo={displayName:"Tag",exportName:"default",description:"",tags:{},props:[{name:"closable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",type:{name:"'info' | 'warning' | 'danger' | 'success' | null"},defaultValue:{func:!1,value:"null"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"close"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/components/components/src/components/Tag/Tag.vue"]};export{$ as _};
