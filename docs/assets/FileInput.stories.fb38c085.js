import{a as h}from"./chunk-WFFRPTHA.7b7bd586.js";import{e as M,v as V,u as I,x as z,z as B,f as L,n as l,t as O,q as N,S as J,o as W}from"./vue.esm-bundler.b273ba75.js";import{_ as q}from"./_plugin-vue_export-helper.cdc0426e.js";import"./preview-errors.186ba3db.js";import"./index.67736049.js";const $=M({name:"FileInput",props:{multiple:{type:Boolean,default:!0},accept:{type:Array,default:null}},emits:{change(e){return!0}},setup(e,{emit:t}){const u=B(),{accept:d,multiple:c}=V(e),i=I(!1),a=I(!1),F=r=>d.value?d.value.includes(r.type):!0,v=r=>{for(const n of r)if("kind"in n&&"getAsFile"in n&&n.kind!=="file"||!F(n))return!1;return!0},w=z(()=>a.value?"ay-file-input__outer--invalid":i.value?"ay-file-input__outer--dragging":"");return{drop:r=>{var n;if(r.preventDefault(),i.value=!1,a.value){a.value=!1;return}if((n=r==null?void 0:r.dataTransfer)!=null&&n.items){const s=[];for(const f of r.dataTransfer.items){const y=f.getAsFile();!y||s.push(y)}s.length&&t("change",c.value?s:s[0])}a.value=!1},isInvalid:a,isDragging:i,outerClasses:w,onDragLeave:r=>{var n,s;if((s=(n=u==null?void 0:u.vnode)==null?void 0:n.el)!=null&&s.contains(r.relatedTarget)){r.preventDefault(),r.stopPropagation();return}i.value=!1,a.value=!1},onDragEnter:r=>{var s;i.value=!0,a.value=!1;const n=r==null?void 0:r.dataTransfer;if(!((s=n==null?void 0:n.items)!=null&&s.length)){a.value=!0;return}if(n.items.length>1&&!c.value){a.value=!0;return}v(n.items)||(a.value=!0)},addImagesFromFileInput:r=>{var s;const n=r.currentTarget;if(!!((s=n==null?void 0:n.files)!=null&&s.length)){if(a.value=!1,c.value){if(!v(n.files)){a.value=!0;return}t("change",[...n.files])}else{const f=n.files[0];if(!F(f)){a.value=!0;return}t("change",f)}n.value=""}}}}}),P={class:"ay-file-input__container"},G={class:"ay-file-input__label"},H=["accept","multiple"],K={class:"ay-file-input__help"};function Q(e,t,u,d,c,i){return W(),L("div",{class:"ay-file-input",onDragenter:t[1]||(t[1]=(...a)=>e.onDragEnter&&e.onDragEnter(...a)),onDragleave:t[2]||(t[2]=(...a)=>e.onDragLeave&&e.onDragLeave(...a)),onDrop:t[3]||(t[3]=(...a)=>e.drop&&e.drop(...a)),onDragover:t[4]||(t[4]=J(()=>{},["prevent"]))},[l("div",{class:N([e.outerClasses,"ay-file-input__outer"])},[l("div",P,[l("label",G,[l("input",{accept:e.accept?e.accept.join(", "):void 0,multiple:e.multiple,class:"ay-file-input__input",type:"file",onChange:t[0]||(t[0]=(...a)=>e.addImagesFromFileInput&&e.addImagesFromFileInput(...a))},null,40,H),l("span",null,O(e.multiple?"Choose Files":"Choose a File"),1)]),l("p",K,O(e.multiple?"or drag and drop files":"or drag and drop a file"),1)])],2)],32)}const k=q($,[["render",Q]]);$.__docgenInfo={displayName:"FileInput",exportName:"default",description:"",tags:{},props:[{name:"multiple",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"accept",type:{name:"array"},defaultValue:{func:!1,value:"null"}}],events:[{name:"change"}],sourceFiles:["/home/runner/work/components/components/src/components/FileInput/FileInput.vue"]};const re={title:"Components/FileInput",component:k,excludeStories:/.*Data$/,argTypes:{multiple:{description:"To define whether the input accepts multiple files"},accept:{description:'A string array with file extensions to accept (without dot). If no array is passed, every file is accepted. For example `["png", "svg"]`'}}},D=e=>{const t={name:e.name,type:e.type,size:e.size,lastModified:e.lastModified};return t.__proto__=File.prototype,t},m=e=>({components:{FileInput:k},setup(){return e.change=t=>{Array.isArray(t)?h("change")(t.map(D)):h("change")(D(t))},{args:e}},template:'<FileInput v-bind="args" v-on="args" />'}),g=m.bind({}),o=m.bind({});o.args={accept:["image/jpeg","image/jpg"]};const p=m.bind({});p.args={multiple:!1};var b,_,A;g.parameters={...g.parameters,docs:{...(b=g.parameters)==null?void 0:b.docs,source:{originalSource:`(args: any) => ({
  components: {
    FileInput
  },
  setup() {
    args.change = (fileOrFiles: File | File[]) => {
      if (Array.isArray(fileOrFiles)) {
        action('change')(fileOrFiles.map(fileToObjectForRepresentation));
      } else {
        action('change')(fileToObjectForRepresentation(fileOrFiles));
      }
    };
    return {
      args
    };
  },
  template: '<FileInput v-bind="args" v-on="args" />'
})`,...(A=(_=g.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var T,j,C;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`(args: any) => ({
  components: {
    FileInput
  },
  setup() {
    args.change = (fileOrFiles: File | File[]) => {
      if (Array.isArray(fileOrFiles)) {
        action('change')(fileOrFiles.map(fileToObjectForRepresentation));
      } else {
        action('change')(fileToObjectForRepresentation(fileOrFiles));
      }
    };
    return {
      args
    };
  },
  template: '<FileInput v-bind="args" v-on="args" />'
})`,...(C=(j=o.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var R,E,S;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`(args: any) => ({
  components: {
    FileInput
  },
  setup() {
    args.change = (fileOrFiles: File | File[]) => {
      if (Array.isArray(fileOrFiles)) {
        action('change')(fileOrFiles.map(fileToObjectForRepresentation));
      } else {
        action('change')(fileToObjectForRepresentation(fileOrFiles));
      }
    };
    return {
      args
    };
  },
  template: '<FileInput v-bind="args" v-on="args" />'
})`,...(S=(E=p.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const se=["Default","AcceptingOnlyJpegs","WithoutMultipleFiles"];export{o as AcceptingOnlyJpegs,g as Default,p as WithoutMultipleFiles,se as __namedExportsOrder,re as default};
