var H=Object.defineProperty;var L=(t,n,o)=>n in t?H(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o;var v=(t,n,o)=>(L(t,typeof n!="symbol"?n+"":n,o),o);import{t as M,w as R,d as z}from"./index.dc338bd7.js";import{v as D,u as _,x as T,W as U,C as J,z as x,e as Q,o as h,j as b,k as Y,A as G,n as d,q as C,g as y,t as S,B as K,T as X}from"./vue.esm-bundler.b273ba75.js";import{_ as Z}from"./warning-fill.45a4d386.js";import{a as tt,_ as nt}from"./checkmark.72a0f906.js";import{_ as et}from"./close.08060f32.js";import{b as ot,c as I,d as st}from"./utils.b3a37e59.js";import{u as F}from"./useNodeRootElement.8a60063e.js";import{_ as it}from"./_plugin-vue_export-helper.cdc0426e.js";const at=`
The notification behaves like a composable.
There is no need to add an HTML element into your code. Just import \`useNotification\` and access its methods.

The notification is then being injected into the DOM.

==Important: You can only call the useNotification composable inside of your setup function (composition API).==

## Usage

### Info notification

\`\`\`js
import { useNotification } from '@scayle/components';

useNotification().info("This is the title", "This is the subtitle");
\`\`\`

### Success notification

\`\`\`js
import { useNotification } from '@scayle/components';

useNotification().success("This is the title", "This is the subtitle");
\`\`\`

### Warning notification

\`\`\`js
import { useNotification } from '@scayle/components';

useNotification().warning("This is the title", "This is the subtitle");
\`\`\`

### Error notification

\`\`\`js
import { useNotification } from '@scayle/components';

useNotification().error("This is the title", "This is the subtitle");
\`\`\`

### Clear all open notifications

\`\`\`js
import { useNotification } from '@scayle/components';

useNotification().clear();
\`\`\`

### Passing options

\`\`\`js
import { useNotification } from '@scayle/components';

useNotification().warning("This is the title", "This is the subtitle", {
    duration: 0
});
\`\`\`

## Available options

The optional config parameter accepts an object containing the following properties:

\`\`\`html

<table>
    <thead>
    <tr>
        <th>Attribute</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>duration</td>
        <td>Number</td>
        <td>\`8000\`</td>
        <td>Visibility duration in milliseconds, set to \`0\` to keep notification visible</td>
    </tr>
    <tr>
        <td>dismissible</td>
        <td>Boolean</td>
        <td>\`true\`</td>
        <td>Allow user to dismiss a notification by clicking it</td>
    </tr>
    <tr>
        <td>onClick</td>
        <td>Function</td>
        <td>-</td>
        <td>Do something when user clicks notification</td>
    </tr>
    <tr>
        <td>onDismiss</td>
        <td>Function</td>
        <td>-</td>
        <td>Do something after notification gets dismissed</td>
    </tr>
    <tr>
        <td>queue</td>
        <td>Boolean</td>
        <td>\`false\`</td>
        <td>Wait for existing notifications to dismiss before showing new</td>
    </tr>
    <tr>
        <td>pauseOnHover</td>
        <td>Boolean</td>
        <td>\`true\`</td>
        <td>Pause the timer when mouse on over a notification</td>
    </tr>
    </tbody>
</table>
\`\`\`
`;class rt{constructor(n,o){v(this,"startedAt");v(this,"timer");this.callback=n,this.delay=o,this.startedAt=Date.now(),this.callback=n,this.timer=setTimeout(n,o)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}function ct(t){let n=-1,o=null;const{queue:u,duration:l,dismissible:e,pauseOnHover:i}=D(t),s=_(null),r=M("container"),c=T(()=>{var f;return(f=r.value)==null?void 0:f.parentElement}),a=_(!1),{rootElement:m}=F(c),W=T(()=>{var f;return u.value?(((f=s.value)==null?void 0:f.childElementCount)||0)>0:!1}),g=async()=>{o==null||o.stop(),clearTimeout(n),n=-1,a.value=!1,await ot(150),t.onDismiss();const f=r.value;U(null,f),I(f)},P=()=>{!e.value||(t.onClick(),g())},V=()=>{!i.value||o==null||o.pause()},q=()=>{!i.value||o==null||o.resume()},$=()=>{const f=m.value||document.body;s.value=f.querySelector(".ay-notification"),!s.value&&(s.value=document.createElement("div"),s.value.className="ay-notification",f.appendChild(s.value))},k=()=>{if(W.value||!s.value||!r.value){n=setTimeout(k,250);return}s.value.insertAdjacentElement("afterbegin",r.value),I(c.value),a.value=!0,l.value&&(o=new rt(g,l.value))};return R(m,()=>{$(),k()}),{isActive:a,dismiss:g,whenClicked:P,resumeTimer:q,pauseTimer:V}}const p=_({});function j(){let t={};const n=x(),o=(e,i)=>{var s,r,c,a,m;(r=(s=p.value)[e])!=null||(s[e]=[]),(c=p.value[e])==null||c.push(i),n&&((a=t[e])!=null||(t[e]=[]),(m=t[e])==null||m.push(i))},u=(e,i)=>{var s,r,c,a;!p.value[e]||(p.value[e]=(r=(s=p.value[e])==null?void 0:s.filter(m=>m!==i))!=null?r:[],n&&(t[e]=(a=(c=t[e])==null?void 0:c.filter(m=>m!==i))!=null?a:[]))},l=e=>{var i;(i=p.value[e])==null||i.forEach(s=>s())};return n&&J(()=>{Object.entries(t).forEach(([e,i])=>{i.forEach(s=>u(e,s))}),t={}}),{on:o,off:u,trigger:l}}var N=(t=>(t.CLOSE_NOTIFICATIONS="close-notifications",t))(N||{});const B=Q({name:"Toast",props:{title:{type:String,required:!0},subtitle:{type:String,default:""},type:{type:String,default:"success"},duration:{type:Number,default:8e3},dismissible:{type:Boolean,default:!0},onDismiss:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}},queue:Boolean,pauseOnHover:{type:Boolean,default:!0}},setup(t){const{type:n}=D(t),o=T(()=>{const a={info:"blue",error:"danger",success:"success",warning:"warning"}[n.value];return`bg-${a} shadow-${a}`}),{dismiss:u,isActive:l,whenClicked:e,resumeTimer:i,pauseTimer:s}=ct(t),{on:r}=j();return r(N.CLOSE_NOTIFICATIONS,u),{isActive:l,iconClasses:o,dismiss:u,whenClicked:e,pauseTimer:s,resumeTimer:i}}}),ut={class:"flex items-center max-w-sm"},lt={class:"flex-grow notification"},ft={class:"ay-notification__title text-sm text-white uppercase font-black"},mt={class:"ay-notification__subtitle text-base text-white text-opacity-70 text-start notification"};function dt(t,n,o,u,l,e){const i=tt,s=et,r=nt,c=Z;return h(),b(X,{duration:150,name:"ay-notification-animation"},{default:Y(()=>[G(d("div",{ref:"container",role:"alert",class:C(["ay-notification__item list-complete-item",[`ay-notification__item--${t.type}`]]),onMouseover:n[0]||(n[0]=(...a)=>t.pauseTimer&&t.pauseTimer(...a)),onMouseleave:n[1]||(n[1]=(...a)=>t.resumeTimer&&t.resumeTimer(...a)),onClick:n[2]||(n[2]=(...a)=>t.whenClicked&&t.whenClicked(...a))},[d("div",ut,[d("div",{class:C(["ay-notification__icon text-white flex flex-shrink-0 w-8 h-8 mie-4 rounded-full items-center justify-center",t.iconClasses])},[t.type==="info"?(h(),b(i,{key:0,class:"icon-sm"})):y("",!0),t.type==="error"?(h(),b(s,{key:1,class:"icon-sm"})):y("",!0),t.type==="success"?(h(),b(r,{key:2,class:"icon-sm"})):y("",!0),t.type==="warning"?(h(),b(c,{key:3,class:"icon-sm"})):y("",!0)],2),d("div",lt,[d("div",ft,S(t.title),1),d("div",mt,S(t.subtitle),1)]),n[3]||(n[3]=d("div",{class:"mis-4 flex flex-col space-y-2"},[d("button",{class:"btn ay-notification__notification-btn"},"Ok")],-1))])],34),[[K,t.isActive]])]),_:1})}const pt=it(B,[["render",dt]]);B.__docgenInfo={displayName:"Toast",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!0},{name:"subtitle",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'success'"}},{name:"duration",type:{name:"number"},defaultValue:{func:!1,value:"8000"}},{name:"dismissible",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"onDismiss",type:{name:"func"},defaultValue:{func:!0,value:"() => {}"}},{name:"onClick",type:{name:"func"},defaultValue:{func:!0,value:"() => {}"}},{name:"queue",type:{name:"boolean"}},{name:"pauseOnHover",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/components/components/src/composables/Notification/Notification.vue"]};const ht=(t={})=>{const{trigger:n}=j();if(!x())throw new Error("Notificator can only be used inside components!");const u=z(),{rootElement:l}=F(u),e=s=>{var a;const r={...t,...s},c=st({props:r,component:pt,attachTo:l.value||document.body});if(!c)throw new Error("Failed to create notification instance!");return{dismiss:(a=c==null?void 0:c.ctx)==null?void 0:a.dismiss}},i=s=>(r,c="",a)=>e({...a,title:r,subtitle:c,type:s});return{open:e,success:i("success"),error:i("error"),info:i("info"),warning:i("warning"),default:i("default"),clear:()=>n(N.CLOSE_NOTIFICATIONS)}},bt=()=>{const t=ht(),n=o=>(u,l,e={})=>t[o](u,l,e);return{info:n("info"),success:n("success"),warning:n("warning"),error:n("error"),clear:t.clear}},St={title:"Composables/useNotification",parameters:{docs:{description:{component:at}}}},w=t=>({setup(){const n=bt(),o=()=>{n.info("Info","The export has been started and might take some minutes.")},u=()=>{n.success("Success","Field was saved successfully.")},l=()=>{n.warning("Warning","Please make sure that every field is valid.")},e=()=>{n.error("Error","Internal server error.")},i=()=>{n.clear()};return{args:{...t},clear:i,showError:e,showSuccess:u,showWarning:l,showInfo:o}},template:`
        <div class="p-16 flex flex-col items-start space-y-6">
            <button class="btn btn-primary" @click="showInfo">Show info</button>
            <button class="btn btn-primary" @click="showSuccess">Show success</button>
            <button class="btn btn-primary" @click="showWarning">Show warning</button>
            <button class="btn btn-primary" @click="showError">Show error</button>
            <button class="btn btn-primary" @click="clear">Clear notifications</button>
        </div>
    `});var E,O,A;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`(args: any) => ({
  setup() {
    const notificator = useNotification();
    const showInfo = () => {
      notificator.info('Info', 'The export has been started and might take some minutes.');
    };
    const showSuccess = () => {
      notificator.success('Success', 'Field was saved successfully.');
    };
    const showWarning = () => {
      notificator.warning('Warning', 'Please make sure that every field is valid.');
    };
    const showError = () => {
      notificator.error('Error', 'Internal server error.');
    };
    const clear = () => {
      notificator.clear();
    };
    return {
      args: {
        ...args
      },
      clear,
      showError,
      showSuccess,
      showWarning,
      showInfo
    };
  },
  template: \`
        <div class="p-16 flex flex-col items-start space-y-6">
            <button class="btn btn-primary" @click="showInfo">Show info</button>
            <button class="btn btn-primary" @click="showSuccess">Show success</button>
            <button class="btn btn-primary" @click="showWarning">Show warning</button>
            <button class="btn btn-primary" @click="showError">Show error</button>
            <button class="btn btn-primary" @click="clear">Clear notifications</button>
        </div>
    \`
})`,...(A=(O=w.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const It=["Default"];export{w as Default,It as __namedExportsOrder,St as default};
