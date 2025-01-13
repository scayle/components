import{e as S,j as C,k as l,O as $,o as m,l as o,s as u,f as F,F as V,u as H}from"./vue.esm-bundler.b273ba75.js";import{a as U}from"./chunk-WFFRPTHA.7b7bd586.js";import{M as f}from"./ModalTemplate.734582f2.js";import{b as M,a as v,_ as y,c as g}from"./ModalHeader.35ebd199.js";import{u as E}from"./useTranslation.af5e9418.js";import{_ as O}from"./_plugin-vue_export-helper.cdc0426e.js";import"./preview-errors.186ba3db.js";import"./index.67736049.js";import"./BaseModal.2048681e.js";import"./Spinner.81853108.js";import"./close.08060f32.js";import"./useConfig.46e52741.js";const j=`
### BaseModal

A headless component that wraps the dialog element and adds some extra behavior.

---

### Modal

Fully constructed modal with common used properties.

**Example:**

\`\`\`vue
<template>
    <Modal visible submitting title="Some Title" cancel-text="Cancel" submit-text="Submit" @update:visible="" />
</template>

<script>
import { Modal } from '@scayle/components';

export default {
    components: {
        Modal,
    },
};
<\/script>
\`\`\`

---

### ModalTemplate

Is the base template to building your own custom modals with the building blocks we have.

**Example:**

\`\`\`vue
<template>
    <ModalTemplate visible @update:visible="">
        <template #default="{ cancel, submit }">
            <ModalHeader title="Some title" @click="cancel" />

            <ModalBody>
                <slot />
            </ModalBody>

            <ModalFooter>
                <ModalButton text="Cancel" @click="cancel" />
                <ModalButton submitting text="Submit" variant="submit" @click="submit" />
            </ModalFooter>
        </template>
    </ModalTemplate>
</template>

<script>
import {
    ModalBody,
    ModalHeader,
    ModalFooter,
    ModalButton,
    ModalTemplate,
} from '@scayle/components';

export default {
    components: {
        ModalBody,
        ModalHeader,
        ModalFooter,
        ModalButton,
        ModalTemplate,
    },
};
<\/script>
\`\`\`

#### Use case

The use case of the ModalTemplate is to build your own custom modals or to remove any of the you do not want to use. For an example the footer.

**Example:**

\`\`\`vue
<template>
    <ModalTemplate visible @update:visible="">
        <template #default="{ cancel, submit }">
            <ModalHeader title="Some title" @click="cancel" />

            <ModalBody>
                <slot />
            </ModalBody>
        </template>
    </ModalTemplate>
</template>

<script>
import {
    ModalBody,
    ModalHeader,
    ModalButton,
    ModalTemplate,
} from '@scayle/components';

export default {
    components: {
        ModalBody,
        ModalHeader,
        ModalButton,
        ModalTemplate,
    },
};
<\/script>
\`\`\`
`,h=S({name:"Modal",components:{ModalBody:M,ModalFooter:v,ModalButton:y,ModalHeader:g,ModalTemplate:f},props:{visible:{type:Boolean,required:!0},title:{type:String,default:"Title"},cancelText:{type:String,default:null},submitText:{type:String,default:null},submitting:{type:Boolean,default:!1},width:{type:String,default:"50%"}},emits:{cancel(){return!0},submit(){return!0},["update:visible"](e){return!0}},setup(){const{t:e}=E();return{t:e}}});function N(e,t,i,D,I,z){const B=g,_=M,s=y,k=v,x=f;return m(),C(x,{"disable-cancelling":e.submitting,style:$({width:e.width}),visible:e.visible,onCancel:t[0]||(t[0]=n=>e.$emit("cancel")),onSubmit:t[1]||(t[1]=n=>e.$emit("submit")),"onUpdate:visible":t[2]||(t[2]=n=>e.$emit("update:visible",n))},{default:l(({cancel:n,submit:w})=>[o(B,{title:e.title,onClick:n},null,8,["title","onClick"]),o(_,null,{default:l(()=>[u(e.$slots,"default")]),_:3}),o(k,null,{default:l(()=>{var d,r;return[e.$slots.footer?u(e.$slots,"footer",{key:1}):(m(),F(V,{key:0},[o(s,{disabled:e.submitting,text:(d=e.cancelText)!=null?d:e.t("modal.cancel"),onClick:n},null,8,["disabled","text","onClick"]),o(s,{submitting:e.submitting,text:(r=e.submitText)!=null?r:e.t("modal.submit"),variant:"submit",onClick:w},null,8,["submitting","text","onClick"])],64))]}),_:2},1024)]),_:3},8,["disable-cancelling","style","visible"])}const T=O(h,[["render",N]]);h.__docgenInfo={displayName:"Modal",exportName:"default",description:"",tags:{},props:[{name:"visible",type:{name:"boolean"},required:!0},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"'Title'"}},{name:"cancelText",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"submitText",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"submitting",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"width",type:{name:"string"},defaultValue:{func:!1,value:"'50%'"}}],events:[{name:"cancel"},{name:"submit"},{name:"update:visible"}],slots:[{name:"default"},{name:"footer"}],sourceFiles:["/home/runner/work/components/components/src/components/Modal/Modal/Modal.vue"]};const ee={title:"Components/Modal",component:T,parameters:{docs:{description:{component:j}}},argTypes:{visible:{description:"boolean value to show/hide the modal"},title:{description:"the title of the modal"},cancelText:{description:"used to override the text inside of the cancel button"},submitText:{description:"used to override the text inside of the submit button"},width:{description:"controls the width of the modal (for example `50%` or `200px`)"},submitting:{description:"a boolean to control the loading state of the modal and prevent interaction/closing"},submit:{description:"an event triggered after the user clicked on the submit button"},cancel:{description:"an event triggered after the user clicked on the cancel button"},footer:{description:"the slot used to override the content of the modal footer and provide custom buttons"}}},q=e=>({components:{Modal:T},setup(){const t=H(e.visible),i=U("update:visible");return{args:e,visible:t,onVisibleUpdate:i}},template:`
    <div class="flex items-center justify-center h-32">
        <button class="btn btn-primary" @click="visible = true">Open Modal</button>
        <Modal
            v-bind="args"
            v-on="args"
            v-model:visible="visible"
            @update:visible="onVisibleUpdate"
        >
        Modal Body
        </Modal>
    </div>`}),a=q.bind({});var p,c,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`(args: any) => ({
  components: {
    Modal
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
  template: \`
    <div class="flex items-center justify-center h-32">
        <button class="btn btn-primary" @click="visible = true">Open Modal</button>
        <Modal
            v-bind="args"
            v-on="args"
            v-model:visible="visible"
            @update:visible="onVisibleUpdate"
        >
        Modal Body
        </Modal>
    </div>\`
})`,...(b=(c=a.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const te=["Default"];export{a as Default,te as __namedExportsOrder,ee as default};
