import{P as b}from"./Popper.a2a40fe0.js";import"./index.dc338bd7.js";import"./vue.esm-bundler.b273ba75.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./useNodeRootElement.8a60063e.js";const P=`
Docs can be found at: https://popper.js.org/
`,T={title:"Components/Popper",component:b,parameters:{docs:{description:{component:P}}},argTypes:{trigger:{description:"The triggering event for the popper (e.g. click, hover, manual)"},popperClass:{description:"A class to add to the popper element"},placement:{description:"The placement preference of the popper (e.g. top, bottom, left, right)"},showArrow:{description:"Whether or not to show the arrow on the popper"},transition:{description:"A transition to use when showing/hiding the popper"},content:{description:"The slot used to show the content inside the popper"},reference:{description:"The slot used to provide the popper reference element. When this element is clicked/hovered etc, the popper will show. The popper will also be positioned relative to this element."}}},o=w=>({components:{Popper:b},setup(){return{args:w}},template:'<Popper v-bind="args" class="pt-12"><template #reference><button class="btn">{{ args.trigger ? "Open on hover" : "Open on click" }}</button></template><template #content><div class="text-white">content</div></template></Popper>'}),e=o.bind({});e.args={};const t=o.bind({});t.args={trigger:"hover"};const r=o.bind({});r.args={showArrow:!0};const n=o.bind({});n.args={showArrow:!0,placement:"right"};var p,s,a;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`(args: any) => ({
  components: {
    Popper
  },
  setup() {
    return {
      args
    };
  },
  template: '<Popper v-bind="args" class="pt-12">' + '<template #reference>' + '<button class="btn">{{ args.trigger ? "Open on hover" : "Open on click" }}</button>' + '</template>' + '<template #content>' + '<div class="text-white">content</div>' + '</template>' + '</Popper>'
})`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var c,i,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`(args: any) => ({
  components: {
    Popper
  },
  setup() {
    return {
      args
    };
  },
  template: '<Popper v-bind="args" class="pt-12">' + '<template #reference>' + '<button class="btn">{{ args.trigger ? "Open on hover" : "Open on click" }}</button>' + '</template>' + '<template #content>' + '<div class="text-white">content</div>' + '</template>' + '</Popper>'
})`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,d,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`(args: any) => ({
  components: {
    Popper
  },
  setup() {
    return {
      args
    };
  },
  template: '<Popper v-bind="args" class="pt-12">' + '<template #reference>' + '<button class="btn">{{ args.trigger ? "Open on hover" : "Open on click" }}</button>' + '</template>' + '<template #content>' + '<div class="text-white">content</div>' + '</template>' + '</Popper>'
})`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var h,u,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`(args: any) => ({
  components: {
    Popper
  },
  setup() {
    return {
      args
    };
  },
  template: '<Popper v-bind="args" class="pt-12">' + '<template #reference>' + '<button class="btn">{{ args.trigger ? "Open on hover" : "Open on click" }}</button>' + '</template>' + '<template #content>' + '<div class="text-white">content</div>' + '</template>' + '</Popper>'
})`,...(v=(u=n.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const y=["Default","OpenOnHover","WithArrow","RightAligned"];export{e as Default,t as OpenOnHover,n as RightAligned,r as WithArrow,y as __namedExportsOrder,T as default};
