import{e as f,v as m,R as p,A as b,o as v,f as g,s as C}from"./vue.esm-bundler.b273ba75.js";import{_ as h}from"./_plugin-vue_export-helper.cdc0426e.js";function s(e,n,a){if(!n){e.close();return}if(a){e.showModal();return}e.show()}const k={beforeMount(e,{value:n},{transition:a}){a&&n&&a.beforeEnter(e)},mounted(e,{value:n,modifiers:a},{transition:l}){l&&n&&l.enter(e),s(e,n,a.modal)},updated(e,{value:n,oldValue:a,modifiers:l},{transition:o}){!n!=!a&&(o?n?(o.beforeEnter(e),s(e,!0,l.modal),o.enter(e)):o.leave(e,()=>{s(e,!1,l.modal)}):s(e,n,l.modal))},beforeUnmount(e,{modifiers:n}){s(e,!1,n.modal)}},u=f({name:"BaseModal",directives:{dialog:k},props:{visible:{type:Boolean,required:!0},disableCancelling:{type:Boolean,default:!1}},emits:{cancel(){return!0},submit(){return!0},["update:visible"](e){return!0}},setup(e,{emit:n}){const{visible:a,disableCancelling:l}=m(e),o=()=>{l.value||(n("cancel"),n("update:visible",!1))};return{cancel:o,submit:()=>{n("submit"),n("update:visible",!1)},handleCancel:i=>{i.preventDefault(),o()},handleClick:i=>{if(!a.value)return;const r=i.target;(r==null?void 0:r.nodeName)==="DIALOG"&&o()}}}});function B(e,n,a,l,o,c){const d=p("dialog");return b((v(),g("dialog",{onCancel:n[0]||(n[0]=(...t)=>e.handleCancel&&e.handleCancel(...t)),onClick:n[1]||(n[1]=(...t)=>e.handleClick&&e.handleClick(...t))},[C(e.$slots,"default",{cancel:e.cancel,submit:e.submit})],32)),[[d,e.visible,void 0,{modal:!0}]])}const D=h(u,[["render",B]]);u.__docgenInfo={displayName:"BaseModal",exportName:"default",description:"",tags:{},props:[{name:"visible",type:{name:"boolean"},required:!0},{name:"disableCancelling",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"cancel"},{name:"submit"},{name:"update:visible"}],slots:[{name:"default",scoped:!0,bindings:[{name:"cancel",title:"binding"},{name:"submit",title:"binding"}]}],sourceFiles:["/home/runner/work/components/components/src/components/Modal/BaseModal.vue"]};export{D as _};
