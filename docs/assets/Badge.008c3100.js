import{e as n,x as t,f as s,q as r,t as o,o as p}from"./vue.esm-bundler.b273ba75.js";import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";const d=["primary","secondary","info","warning","danger"],a=n({name:"Badge",props:{type:{type:String,default:"primary"},label:{type:String,default:null}},setup(e){return{className:t(()=>d.includes(e.type)?`ay-badge--${e.type}`:"ay-badge--primary")}}}),c=["textContent"];function m(e,u,i,y,f,g){return p(),s("span",{class:r([e.className,"ay-badge"]),textContent:o(e.label||e.type)},null,10,c)}const b=l(a,[["render",m]]);a.__docgenInfo={displayName:"Badge",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"BadgeType"},defaultValue:{func:!1,value:"'primary'"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/components/components/src/components/Badges/Badge.vue"]};export{b as B};
