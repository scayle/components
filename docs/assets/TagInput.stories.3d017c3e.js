import{_ as z}from"./Input.310ceaf0.js";import{_ as E}from"./Tag.79dce8d9.js";import{e as M,v as A,x as O,f as T,j as d,k as h,q as b,a5 as R,g as y,o as s,F as j,m as G,S as P,y as H,t as V,n as J}from"./vue.esm-bundler.b273ba75.js";import{u as K}from"./useTranslation.af5e9418.js";import{_ as Q}from"./_plugin-vue_export-helper.cdc0426e.js";import"./close.08060f32.js";import"./useConfig.46e52741.js";const F=M({name:"TagInput",components:{Input:z,Tag:E},props:{modelValue:{type:Array,default:()=>[]},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:null},clearable:{type:Boolean,default:!1},tagType:{type:String,default:null},limit:{type:Number,default:0}},emits:{"update:modelValue"(e){return!0},change(e){return!0},blur(){return!0},focus(){return!0},removedTag(e){return!0}},setup(e){const{t}=K(),{placeholder:c}=A(e),i=O(()=>{var n;return(n=c.value)!=null?n:t("tag-input.enter-or-paste-ids")});return{t,placeholderText:i}},data(){return{inputText:"",tagsVisibilityLimit:15,limitTagVisibility:!0}},computed:{visibleTags(){var e;return this.limitTagVisibility&&((e=this.modelValue)==null?void 0:e.slice)?this.modelValue.slice(0,this.tagsVisibilityLimit):this.modelValue},isInputDisabled(){return this.disabled||this.limit>0&&this.modelValue.length>=this.limit},typeClass(){return this.tagType?{info:"ay-tag-input--info",warning:"ay-tag-input--warning",success:"ay-tag-input--success",danger:"ay-tag-input--danger"}[this.tagType]:"ay-tag-input--default"}},methods:{inputChanged(e){var f,r,g;const i=((f=e.target)==null?void 0:f.value).replace(/[ |,\s]+/g," ").trim().split(" ").filter(a=>!!a).map(a=>a.toLowerCase());if(!i.length)return;this.emitChange(Array.from(new Set([...this.modelValue,...i]))),this.inputText="";const n=(g=(r=this.$refs.tagsInput)==null?void 0:r.$el)==null?void 0:g.querySelector("input");n&&(n.value="")},emitChange(e){this.$emit("update:modelValue",e),this.$emit("change",e)},removeTag(e){const t=this.modelValue.indexOf(e);t!==-1&&this.emitChange([...this.modelValue.slice(0,t),...this.modelValue.slice(t+1)]),this.$emit("removedTag",e)},toggleShowMore(){this.limitTagVisibility=!this.limitTagVisibility},inputBlur(){this.$emit("blur")},focus(){var e,t;this.$refs.tagsInput&&((t=(e=this.$refs.tagsInput.$el)==null?void 0:e.querySelector("input"))==null||t.focus())}}});function U(e,t,c,i,n,f){const r=E,g=z;return s(),T("div",{class:b([e.typeClass,"ay-tag-input"]),onClick:t[1]||(t[1]=(...a)=>e.focus&&e.focus(...a))},[e.visibleTags.length>0?(s(),d(R,{key:0,class:b([{"ay-tag-input__tags-wrapper--disabled":e.disabled,"bg-white":!e.disabled},"ay-tag-input__tags-wrapper"]),name:"ay-tag-fade",tag:"div"},{default:h(()=>[(s(!0),T(j,null,G(e.visibleTags,a=>(s(),d(r,{key:a,closable:!e.disabled,type:e.tagType,size:"small",onClose:P(W=>e.removeTag(a),["prevent","stop"])},{default:h(()=>[H(V(a),1)]),_:2},1032,["closable","type","onClose"]))),128)),e.modelValue.length>e.tagsVisibilityLimit?(s(),d(r,{key:"less-more",type:e.tagType,size:"small",onClick:e.toggleShowMore},{default:h(()=>[J("span",null,V(`${e.modelValue.length-e.tagsVisibilityLimit} `+(e.limitTagVisibility?e.t("tag-input.more"):e.t("tag-input.fewer"))),1)]),_:1},8,["type","onClick"])):y("",!0)]),_:1},8,["class"])):y("",!0),e.isInputDisabled?y("",!0):(s(),d(g,{key:1,ref:"tagsInput","model-value":e.inputText,placeholder:e.placeholderText,class:"ay-tag-input__text-input",onBlur:e.inputBlur,onChange:e.inputChanged,onFocus:t[0]||(t[0]=a=>e.$emit("focus"))},null,8,["model-value","placeholder","onBlur","onChange"]))],2)}const q=Q(F,[["render",U]]);F.__docgenInfo={displayName:"TagInput",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string[]"},defaultValue:{func:!0,value:"() => []"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"clearable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"tagType",type:{name:"'info' | 'warning' | 'danger' | 'success' | null"},defaultValue:{func:!1,value:"null"}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"0"}}],events:[{name:"focus"},{name:"update:modelValue",type:{names:["undefined"]}},{name:"change",type:{names:["undefined"]}},{name:"blur"},{name:"removedTag",type:{names:["undefined"]}}],sourceFiles:["/home/runner/work/components/components/src/components/TagInput/TagInput.vue"]};const ne={title:"Components/TagInput",component:q,argTypes:{modelValue:{description:"Represents an array of the selected tags"},disabled:{description:"Prop to disable the tags input and prevent interaction"},placeholder:{description:"The placeholder is shown after focusing the tags input"},clearable:{description:"If `true` an x-button is shown at the end of every tag which triggers an event on click"},tagType:{description:"The type determines the color of the tags"},limit:{description:"The amount of tags shown before summarizing them under the `+n` tag"},focus:{description:"The event triggered after the user focused the tags input"},change:{description:"Triggered after the `modelValue` changes"},blur:{description:"The event triggered after the tags input lost focus"},removedTag:{description:"Event fired after the x-button of a tag was clicked"}}},m=e=>({components:{TagInput:q},setup(){return{args:e}},data:()=>({tagValues:e.tags}),template:'<TagInput v-model="tagValues" v-bind="args" />'}),l=m.bind({});l.args={tags:["1","3","5"]};const o=m.bind({});o.args={tags:["1","2","3"],disabled:!0};const u=m.bind({});u.args={tags:["1","2","3","4","5"],limit:5};const p=m.bind({});p.args={tags:["1","2","3","4","5"],tagType:"danger"};var v,I,w;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`(args: any) => ({
  components: {
    TagInput
  },
  setup() {
    return {
      args
    };
  },
  data: () => ({
    tagValues: args.tags
  }),
  template: '<TagInput v-model="tagValues" v-bind="args" />'
})`,...(w=(I=l.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var C,$,k;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`(args: any) => ({
  components: {
    TagInput
  },
  setup() {
    return {
      args
    };
  },
  data: () => ({
    tagValues: args.tags
  }),
  template: '<TagInput v-model="tagValues" v-bind="args" />'
})`,...(k=($=o.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var S,_,B;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`(args: any) => ({
  components: {
    TagInput
  },
  setup() {
    return {
      args
    };
  },
  data: () => ({
    tagValues: args.tags
  }),
  template: '<TagInput v-model="tagValues" v-bind="args" />'
})`,...(B=(_=u.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var L,D,N;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`(args: any) => ({
  components: {
    TagInput
  },
  setup() {
    return {
      args
    };
  },
  data: () => ({
    tagValues: args.tags
  }),
  template: '<TagInput v-model="tagValues" v-bind="args" />'
})`,...(N=(D=p.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};const se=["Default","Disabled","Limit","TagType"];export{l as Default,o as Disabled,u as Limit,p as TagType,se as __namedExportsOrder,ne as default};
