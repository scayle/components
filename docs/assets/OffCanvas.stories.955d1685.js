import{e as C,j as g,k as f,T as O,o,l as d,n as t,s as i,f as c,t as $,F as k,g as B,u as V}from"./vue.esm-bundler.b273ba75.js";import{a as T}from"./chunk-WFFRPTHA.7b7bd586.js";import{_ as v}from"./BaseModal.2048681e.js";import{_ as w}from"./close.08060f32.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";import"./preview-errors.186ba3db.js";import"./index.67736049.js";const b=C({name:"OffCanvas",components:{BaseModal:v},props:{visible:{type:Boolean,default:!1},title:{type:String,default:"Title"}},emits:{["update:visible"](e){return!0}},computed:{innerVisible:{get(){return this.visible},set(e){this.$emit("update:visible",e)}}}}),S={class:"ay-off-canvas__header"},U={class:"ay-off-canvas__header-title"},D=["onClick"],F={class:"ay-off-canvas__body"},M={key:0,class:"ay-off-canvas__footer"};function E(e,s,r,P,q,z){const h=w,y=v;return o(),g(O,{name:"ay-off-canvas-slide-in"},{default:f(()=>[d(y,{visible:e.innerVisible,"onUpdate:visible":s[0]||(s[0]=n=>e.innerVisible=n),class:"ay-off-canvas"},{default:f(({cancel:n,submit:l})=>[t("div",S,[e.$slots.header?i(e.$slots,"header",{key:0,cancel:n,submit:l}):(o(),c(k,{key:1},[t("span",U,$(e.title),1),t("button",{class:"ay-off-canvas__close-btn",onClick:n},[d(h,{class:"icon-md"})],8,D)],64))]),t("div",F,[i(e.$slots,"default")]),e.$slots.footer?(o(),c("div",M,[i(e.$slots,"footer",{cancel:n,submit:l})])):B("",!0)]),_:3},8,["visible"])]),_:3})}const _=N(b,[["render",E]]);b.__docgenInfo={displayName:"OffCanvas",exportName:"default",description:"",tags:{},props:[{name:"visible",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'Title'"}}],events:[{name:"update:visible",type:{names:["undefined"]}}],slots:[{name:"header",scoped:!0,bindings:[{name:"cancel",title:"binding"},{name:"submit",title:"binding"}]},{name:"default"},{name:"footer",scoped:!0,bindings:[{name:"cancel",title:"binding"},{name:"submit",title:"binding"}]}],sourceFiles:["/home/runner/work/components/components/src/components/OffCanvas/OffCanvas.vue"]};const I=`
Built on top of BaseModal.vue, this component includes some layout and design and is based on OffCanvas.vue from backbone-panel.
`,R={title:"Components/OffCanvas",component:_,parameters:{docs:{description:{component:I}}},argTypes:{visible:{description:"Controls the visibility of the OffCanvas"},title:{description:"The title shown in the default header"},default:{description:"The content of the dialog"},header:{description:"Override the header content with this slot"},footer:{description:"Override the footer content with this slot"}}},j=e=>({components:{OffCanvas:_},setup(){const s=V(e.visible),r=T("update:visible");return{args:e,visible:s,onVisibleUpdate:r}},template:'<OffCanvas v-bind="args">Off Canvas Body</OffCanvas>'}),a=j.bind({});var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`(args: any) => ({
  components: {
    OffCanvas
  },
  setup() {
    const visible = ref(args.visible);
    const onVisibleUpdate = action('update:visible');
    return {
      args,
      visible,
      onVisibleUpdate
    };
  },
  template: '<OffCanvas v-bind="args">Off Canvas Body</OffCanvas>'
})`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const W=["Default"];export{a as Default,W as __namedExportsOrder,R as default};
