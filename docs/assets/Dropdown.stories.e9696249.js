import{D as T,b as k,a as v}from"./DropdownItem.4f4382c8.js";import"./Popper.a2a40fe0.js";import"./index.dc338bd7.js";import"./vue.esm-bundler.b273ba75.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./useNodeRootElement.8a60063e.js";const B=`
Docs can be found at: https://popper.js.org/
`,A={title:"Components/Dropdown",component:T,parameters:{docs:{description:{component:B}}},argTypes:{trigger:{description:"The triggering event for the popper (e.g. click, hover, manual)"},popperClass:{description:"A class to add to the popper element"},placement:{description:"The placement preference of the popper (e.g. top, bottom, left, right)"},showArrow:{description:"Whether or not to show the arrow on the popper"},transition:{description:"A transition to use when showing/hiding the popper"},appendToBody:{description:"By default the dropdown is teleported to the body, otherwise it will be part of the wrapper of the dropdown"},dropdown:{description:"The content to show inside the popper"},default:{description:"The popper reference element. When this element is clicked/hovered etc, the popper will show. The popper will also be positioned relative to this element."}}},n={Dropdown:T,DropdownItem:k,DropdownMenu:v},e=o=>({components:n,setup(){return{args:o}},template:`<Dropdown v-bind="args" show-arrow>
        <button class="btn btn-default inline-flex items-center">
            Demo
        </button>

        <template #dropdown>
            <DropdownMenu>
                <DropdownItem>Foo</DropdownItem>
                <DropdownItem>Bar</DropdownItem>
            </DropdownMenu>
        </template>
    </Dropdown>`}),t=o=>({components:n,setup(){return{args:o}},template:`<Dropdown v-bind="args" :append-to-body="false" show-arrow>
        <button class="btn btn-default inline-flex items-center">
            Demo
        </button>

        <template #dropdown>
            <DropdownMenu>
                <DropdownItem>Foo</DropdownItem>
                <DropdownItem>Bar</DropdownItem>
            </DropdownMenu>
        </template>
    </Dropdown>`}),r=o=>({components:n,setup(){return{args:o}},template:`<Dropdown v-bind="args" show-arrow>
        <button class="btn btn-default inline-flex items-center">
            Demo
        </button>

        <template #dropdown="{ onClick }">
            <DropdownMenu>
                <DropdownItem>Foo</DropdownItem>
                <DropdownItem>Bar</DropdownItem>
                <DropdownItem>
                    <Dropdown trigger="hover" placement="right" show-arrow @click="onClick">
                        Bar With Menu

                        <template #dropdown>
                            <DropdownMenu>
                                <DropdownItem>Testing</DropdownItem>
                                <DropdownItem>Testing 1</DropdownItem>
                                <DropdownItem>Testing 2</DropdownItem>
                                <DropdownItem>Testing 3</DropdownItem>
                            </DropdownMenu>
                        </template>
                    </Dropdown>
                </DropdownItem>
            </DropdownMenu>
        </template>
    </Dropdown>`}),p=o=>({components:n,setup(){return{args:o}},template:`<Dropdown v-bind="args" show-arrow>
        <button class="btn btn-default inline-flex items-center">
            Demo
        </button>

        <template #dropdown="{ onClick }">
            <DropdownMenu>
                <DropdownItem>Foo</DropdownItem>
                <DropdownItem>Bar</DropdownItem>
                <DropdownItem>
                    <Dropdown placement="right" show-arrow @click="onClick">
                        Bar With Menu

                        <template #dropdown>
                            <DropdownMenu>
                                <DropdownItem>Testing</DropdownItem>
                                <DropdownItem>Testing 1</DropdownItem>
                                <DropdownItem>Testing 2</DropdownItem>
                                <DropdownItem>Testing 3</DropdownItem>
                            </DropdownMenu>
                        </template>
                    </Dropdown>
                </DropdownItem>
            </DropdownMenu>
        </template>
    </Dropdown>`}),d=o=>({components:n,setup(){return{args:o}},template:`<Dropdown v-bind="args" trigger="hover" show-arrow>
        <button class="btn btn-default inline-flex items-center">
            Demo
        </button>

        <template #dropdown="{ onClick }">
            <DropdownMenu>
                <DropdownItem>Foo</DropdownItem>
                <DropdownItem>Bar</DropdownItem>
                <DropdownItem>
                    <Dropdown trigger="hover" placement="right" show-arrow @click="onClick">
                        Bar With Menu

                        <template #dropdown>
                            <DropdownMenu >
                                <DropdownItem>Testing</DropdownItem>
                                <DropdownItem>Testing 1</DropdownItem>
                                <DropdownItem>Testing 2</DropdownItem>
                                <DropdownItem>Testing 3</DropdownItem>
                            </DropdownMenu>
                        </template>
                    </Dropdown>
                </DropdownItem>
            </DropdownMenu>
        </template>
    </Dropdown>`});var w,m,s;e.parameters={...e.parameters,docs:{...(w=e.parameters)==null?void 0:w.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args
    };
  },
  template: \`<Dropdown v-bind="args" show-arrow>
        <button class="btn btn-default inline-flex items-center">
            Demo
        </button>

        <template #dropdown>
            <DropdownMenu>
                <DropdownItem>Foo</DropdownItem>
                <DropdownItem>Bar</DropdownItem>
            </DropdownMenu>
        </template>
    </Dropdown>\`
})`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var a,D,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args
    };
  },
  template: \`<Dropdown v-bind="args" :append-to-body="false" show-arrow>
        <button class="btn btn-default inline-flex items-center">
            Demo
        </button>

        <template #dropdown>
            <DropdownMenu>
                <DropdownItem>Foo</DropdownItem>
                <DropdownItem>Bar</DropdownItem>
            </DropdownMenu>
        </template>
    </Dropdown>\`
})`,...(i=(D=t.parameters)==null?void 0:D.docs)==null?void 0:i.source}}};var l,c,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args
    };
  },
  template: \`<Dropdown v-bind="args" show-arrow>
        <button class="btn btn-default inline-flex items-center">
            Demo
        </button>

        <template #dropdown="{ onClick }">
            <DropdownMenu>
                <DropdownItem>Foo</DropdownItem>
                <DropdownItem>Bar</DropdownItem>
                <DropdownItem>
                    <Dropdown trigger="hover" placement="right" show-arrow @click="onClick">
                        Bar With Menu

                        <template #dropdown>
                            <DropdownMenu>
                                <DropdownItem>Testing</DropdownItem>
                                <DropdownItem>Testing 1</DropdownItem>
                                <DropdownItem>Testing 2</DropdownItem>
                                <DropdownItem>Testing 3</DropdownItem>
                            </DropdownMenu>
                        </template>
                    </Dropdown>
                </DropdownItem>
            </DropdownMenu>
        </template>
    </Dropdown>\`
})`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var I,g,h;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args
    };
  },
  template: \`<Dropdown v-bind="args" show-arrow>
        <button class="btn btn-default inline-flex items-center">
            Demo
        </button>

        <template #dropdown="{ onClick }">
            <DropdownMenu>
                <DropdownItem>Foo</DropdownItem>
                <DropdownItem>Bar</DropdownItem>
                <DropdownItem>
                    <Dropdown placement="right" show-arrow @click="onClick">
                        Bar With Menu

                        <template #dropdown>
                            <DropdownMenu>
                                <DropdownItem>Testing</DropdownItem>
                                <DropdownItem>Testing 1</DropdownItem>
                                <DropdownItem>Testing 2</DropdownItem>
                                <DropdownItem>Testing 3</DropdownItem>
                            </DropdownMenu>
                        </template>
                    </Dropdown>
                </DropdownItem>
            </DropdownMenu>
        </template>
    </Dropdown>\`
})`,...(h=(g=p.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,M,f;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`(args: any) => ({
  components,
  setup() {
    return {
      args
    };
  },
  template: \`<Dropdown v-bind="args" trigger="hover" show-arrow>
        <button class="btn btn-default inline-flex items-center">
            Demo
        </button>

        <template #dropdown="{ onClick }">
            <DropdownMenu>
                <DropdownItem>Foo</DropdownItem>
                <DropdownItem>Bar</DropdownItem>
                <DropdownItem>
                    <Dropdown trigger="hover" placement="right" show-arrow @click="onClick">
                        Bar With Menu

                        <template #dropdown>
                            <DropdownMenu >
                                <DropdownItem>Testing</DropdownItem>
                                <DropdownItem>Testing 1</DropdownItem>
                                <DropdownItem>Testing 2</DropdownItem>
                                <DropdownItem>Testing 3</DropdownItem>
                            </DropdownMenu>
                        </template>
                    </Dropdown>
                </DropdownItem>
            </DropdownMenu>
        </template>
    </Dropdown>\`
})`,...(f=(M=d.parameters)==null?void 0:M.docs)==null?void 0:f.source}}};const S=["Default","WithDropdownNotAppendedToBody","WithNestedMenu","WithNestedMenuBeingClickable","WithNestedMenuAndHover"];export{e as Default,t as WithDropdownNotAppendedToBody,r as WithNestedMenu,d as WithNestedMenuAndHover,p as WithNestedMenuBeingClickable,S as __namedExportsOrder,A as default};
