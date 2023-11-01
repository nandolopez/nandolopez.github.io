import{q as u,s as T,r as w,a2 as V,ag as L,a8 as E,a1 as N,Q as B,x as m,o as d,c as h,F as f,g as _,a5 as I,y as S,b as g,w as c,H as k,z as p,h as z,a as l,G as j,X as R,P as O,ak as P,a6 as W,ad as D,l as H,m as q,n as K,K as Y,I as M,d as $,i as b,e as G}from"./entry.266dd42c.js";const Q={hideOnScroll:{type:Boolean,default:!1},fixed:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1}};function U(e,t){const a=u(()=>t.value?!!e.hideOnScroll:!1),o=u(()=>{if(!(!e.bottom&&!a.value))return e.bottom&&a.value?"translateY(100%)":e.bottom?e.fixed?"translateY(-100%)":"translateY(0)":"translateY(-100%)"}),r=u(()=>e.fixed?"fixed":a.value?"absolute":void 0);return{fixedBarStyleComputed:u(()=>{const i={top:e.bottom&&(a.value||e.fixed)?"100%":void 0,transform:e.hideOnScroll||e.fixed?o.value:void 0};return r.value&&Object.assign(i,{position:r.value}),i})}}function X(e){if(!e)throw new Error("No target was provided for `useScroll` hook!");return typeof e=="string"?document.querySelector(e):e}function Z(e,t){const a=T();let o;const r=w(!1),s=w(0),i=n=>{const v=n.target,y=n.target instanceof Window?v.scrollY:v.scrollTop;r.value=s.value<y,s.value=y};return V(()=>{o=e?window:X(t||a.value),o==null||o.addEventListener("scroll",i,e)}),L(()=>{o==null||o.removeEventListener("scroll",i)}),{scrollRoot:a,isScrolledDown:r}}const J={top:[0,1,2],left:[0,3,6],right:[2,5,8],bottom:[6,7,8]},ee=["left","right","top","bottom"],te=e=>{const t=()=>[...ee].sort((o,r)=>(e[o].order??0)-(e[r].order??0)),a=(o,r,s)=>{r.forEach(i=>{o[i]=s})};return u(()=>{const o=t(),r=[".",".",".",".",".",".",".",".","."].map(()=>"content");return o.forEach(s=>{a(r,J[s],s)}),['"'+r.slice(0,3).join(" ")+'"','"'+r.slice(3,6).join(" ")+'"','"'+r.slice(6,9).join(" ")+'"'].join(" ")})},oe={top:{type:Object,default:()=>({order:2})},right:{type:Object,default:()=>({order:1})},left:{type:Object,default:()=>({order:1})},bottom:{type:Object,default:()=>({order:2})}},A="VaLayout",ae=e=>{const t=w({top:null,right:null,bottom:null,left:null}),a=u(()=>{const{top:r,right:s,bottom:i,left:n}=t.value,{top:v,right:y,bottom:x,left:C}=e;return{top:r&&!v.absolute?r.sizes.height:0,right:s&&!y.absolute?s.sizes.width:0,bottom:i&&!x.absolute?i.sizes.height:0,left:n&&!C.absolute?n.sizes.width:0}}),o=u(()=>({top:e.top.order||0,right:e.right.order||0,bottom:e.bottom.order||0,left:e.left.order||0}));E(A,{items:t,paddings:a,orders:o})},re=(e,t)=>{const a=N(A,null);if(!a)throw new Error("VaLayoutChild must be used inside VaLayout");return B(()=>{t.value?a.items.value[e]={sizes:t.value}:a.items.value[e]=null}),L(()=>{a.items.value[e]=null}),{paddings:u(()=>Object.keys(a.paddings.value).reduce((o,r)=>(a.orders.value[r]>a.orders.value[e]&&(o[r]=a.paddings.value[r]),o),{}))}},se={},ne={class:"va-layout__absolute-area-wrapper"};function le(e,t){return d(),h("div",ne,[f(e.$slots,"default")])}const ie=m(se,[["render",le]]),de=_({name:"VaLayoutSizeKeeper",emits:{resize:e=>!0},setup(e,{emit:t}){const a=w();let o=null;return I(a,r=>{o&&o.disconnect(),o=new ResizeObserver(([s])=>{t("resize",s.contentRect)}),o.observe(r)}),{el:a}}}),ue={class:"va-resize-observer",ref:"el"};function ce(e,t,a,o,r,s){return d(),h("div",ue,[f(e.$slots,"default")],512)}const he=m(de,[["render",ce]]);const ve=_({name:"VaLayoutFixedWrapper",components:{VaResizeObserver:he},props:{area:{type:String,required:!0}},setup(e){const t=w(null),a=u(()=>e.area==="top"||e.area==="bottom"?"vertical":"horizontal"),o=n=>n?n+"px":"0px",r=u(()=>a.value==="vertical"?{width:`calc(100% - ${o(s.value.left)} - ${o(s.value.right)})`,[e.area]:0}:{height:`calc(100% - ${o(s.value.top)} - ${o(s.value.bottom)})`,[e.area]:0}),{paddings:s}=re(e.area,t),i=u(()=>Object.keys(s.value).reduce((n,v)=>v===e.area?n:{...n,[v]:`${s.value[v]}px`},{}));return{direction:a,computedStyle:i,paddings:s,size:t,styles:r}}});function fe(e,t,a,o,r,s){const i=S("VaResizeObserver");return d(),h("div",{class:"va-layout-fixed-wrapper",style:p(typeof[{height:e.size&&e.direction==="vertical"?e.size.height+"px":"auto",width:e.size&&e.direction==="horizontal"?e.size.width+"px":"auto"}]=="object"?Array.isArray([{height:e.size&&e.direction==="vertical"?e.size.height+"px":"auto",width:e.size&&e.direction==="horizontal"?e.size.width+"px":"auto"}])?[{height:e.size&&e.direction==="vertical"?e.size.height+"px":"auto",width:e.size&&e.direction==="horizontal"?e.size.width+"px":"auto"},`--va-0-styles-width: ${String(e.styles.width)};--va-1-styles-height: ${String(e.styles.height)}`]:{...[{height:e.size&&e.direction==="vertical"?e.size.height+"px":"auto",width:e.size&&e.direction==="horizontal"?e.size.width+"px":"auto"}],"--va-0-styles-width":String(e.styles.width),"--va-1-styles-height":String(e.styles.height)}:[{height:e.size&&e.direction==="vertical"?e.size.height+"px":"auto",width:e.size&&e.direction==="horizontal"?e.size.width+"px":"auto"}]+`;--va-0-styles-width: ${String(e.styles.width)};--va-1-styles-height: ${String(e.styles.height)}`)},[g(i,{class:k(["va-layout-fixed-wrapper__content",`va-layout-fixed-wrapper__content--${e.area}`]),onResize:t[0]||(t[0]=n=>e.size=n)},{default:c(()=>[f(e.$slots,"default")]),_:3},8,["class"])],4)}const ge=m(ve,[["render",fe]]);const ye=_({name:"VaLayoutArea",components:{VaLayoutAbsoluteWrapper:ie,VaLayoutFixedWrapper:ge},props:{area:{type:String,required:!0},config:{type:Object,required:!0}},emits:["overlay-click"],setup(e){return{absolute:u(()=>e.config.absolute||!1),fixed:u(()=>e.config.fixed||!1),overlay:u(()=>e.config.overlay||!1),zIndex:u(()=>(e.config.order||0)+1)}}});function pe(e,t,a,o,r,s){const i=S("VaLayoutFixedWrapper"),n=S("VaLayoutAbsoluteWrapper");return d(),h(O,null,[e.absolute?(d(),z(n,{key:0,style:p(`--va-0-props-area: ${String(e.$props.area)};--va-1-z-index: ${String(e.zIndex)};--va-2-z-index-1: ${String(e.zIndex-1)}`)},{default:c(()=>[l("div",{class:k(`va-layout-area va-layout__area va-layout__area--${e.area}`)},[e.fixed?(d(),z(i,{key:0,area:e.area},{default:c(()=>[f(e.$slots,"default")]),_:3},8,["area"])):f(e.$slots,"default",{key:1})],2)]),_:3},8,["style"])):(d(),h("div",{key:1,class:k(`va-layout-area va-layout__area va-layout__area--${e.area}`),style:p(`--va-0-props-area: ${String(e.$props.area)};--va-1-z-index: ${String(e.zIndex)};--va-2-z-index-1: ${String(e.zIndex-1)}`)},[e.fixed?(d(),z(i,{key:0,area:e.area},{default:c(()=>[f(e.$slots,"default")]),_:3},8,["area"])):f(e.$slots,"default",{key:1})],6)),g(R,{style:p(`--va-0-props-area: ${String(e.$props.area)};--va-1-z-index: ${String(e.zIndex)};--va-2-z-index-1: ${String(e.zIndex-1)}`)},{default:c(()=>[e.overlay?(d(),h("div",{key:0,class:k(["va-layout-area__overlay",{"va-layout-area__overlay--fixed":e.fixed}]),onClick:t[0]||(t[0]=v=>e.$emit("overlay-click"))},null,2)):j("",!0)]),_:1},8,["style"])],64)}const me=m(ye,[["render",pe]]);const F=["top","left","right","bottom"],_e=_({name:"VaLayout",props:{...oe,allowBodyScrollOnOverlay:{type:Boolean,default:!1}},emits:["top-overlay-click","left-overlay-click","right-overlay-click","bottom-overlay-click"],components:{VaLayoutArea:me},setup(e,{slots:t}){ae(e);const a=u(()=>!e.allowBodyScrollOnOverlay&&F.some(r=>{var s;return(s=e[r])==null?void 0:s.overlay})),o=P();return B(()=>{var r;const s=(r=o.value)==null?void 0:r.body;s&&(a.value?s.style.overflow="hidden":s.style.overflow="")}),{areaNames:F,templateArea:te(e),verticalTemplate:u(()=>[t.top?"min-content":"0fr","1fr",t.bottom?"min-content":"0fr"].filter(Boolean).join(" ")),horizontalTemplate:u(()=>[t.left?"min-content":"0fr","1fr",t.right?"min-content":"0fr"].filter(Boolean).join(" "))}}}),be={class:"va-layout__area va-layout__area--content"};function we(e,t,a,o,r,s){const i=S("VaLayoutArea");return d(),h("div",{class:"va-layout",style:p(`--va-0-horizontal-template: ${String(e.horizontalTemplate)};--va-1-vertical-template: ${String(e.verticalTemplate)};--va-2-template-area: ${String(e.templateArea)}`)},[(d(!0),h(O,null,W(e.areaNames,n=>(d(),z(i,{key:n,area:n,config:e.$props[n]||{},onOverlayClick:v=>e.$emit(`${n}-overlay-click`)},{default:c(()=>[f(e.$slots,n)]),_:2},1032,["area","config","onOverlayClick"]))),128)),l("div",be,[f(e.$slots,"default",{},()=>[f(e.$slots,"content")])])],4)}const $e=m(_e,[["render",we]]),ke=D($e);const ze=_({name:"VaNavbar",props:{...Q,...H,color:{type:String,default:"background-secondary"},textColor:{type:String},shape:{type:Boolean,default:!1},shadowed:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1}},setup(e){const{scrollRoot:t,isScrolledDown:a}=Z(e.fixed),{fixedBarStyleComputed:o}=U(e,a),{getColor:r,shiftHSLAColor:s}=q(),i=u(()=>r(e.color)),{textColorComputed:n}=K(i),v=u(()=>({borderTopColor:s(i.value,{h:-1,s:-11,l:10})})),y=u(()=>({...o.value,backgroundColor:i.value,color:n.value,fill:n.value}));return{bemClasses:Y("va-navbar",()=>({shadowed:e.shadowed,bordered:e.bordered})),scrollRoot:t,computedStyle:y,shapeStyleComputed:v}}}),xe={class:"va-navbar__left"},Se={class:"va-navbar__center"},Ce={class:"va-navbar__right"};function Fe(e,t,a,o,r,s){return d(),h("header",{ref:"scrollRoot",class:k(["va-navbar",e.bemClasses]),style:p(e.computedStyle)},[f(e.$slots,"default",{},()=>[l("div",xe,[f(e.$slots,"left")]),l("div",Se,[f(e.$slots,"center")]),l("div",Ce,[f(e.$slots,"right")])]),e.shape?(d(),h("div",{key:0,class:"va-navbar__background-shape",style:p(e.shapeStyleComputed)},null,4)):j("",!0)],6)}const Ve=m(ze,[["render",Fe]]),Le=_({name:"VaNavbarItem",props:{}}),Be={class:"va-navbar__item"};function je(e,t,a,o,r,s){return d(),h("div",Be,[f(e.$slots,"default")])}const Oe=m(Le,[["render",je]]),Me=M(Ve),Ae=M(Oe),Te=["stroke"],Ee=l("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},null,-1),Ne=l("polyline",{points:"9 22 9 12 15 12 15 22"},null,-1),Ie=[Ee,Ne],Re=["stroke"],Pe=l("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},null,-1),We=l("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},null,-1),De=[Pe,We],He=["stroke"],qe=l("polyline",{points:"3 6 5 6 21 6"},null,-1),Ke=l("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},null,-1),Ye=l("line",{x1:"10",y1:"11",x2:"10",y2:"17"},null,-1),Ge=l("line",{x1:"14",y1:"11",x2:"14",y2:"17"},null,-1),Qe=[qe,Ke,Ye,Ge],Ue=["stroke"],Xe=l("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},null,-1),Ze=l("rect",{x:"9",y:"9",width:"6",height:"6"},null,-1),Je=l("line",{x1:"9",y1:"1",x2:"9",y2:"4"},null,-1),et=l("line",{x1:"15",y1:"1",x2:"15",y2:"4"},null,-1),tt=l("line",{x1:"9",y1:"20",x2:"9",y2:"23"},null,-1),ot=l("line",{x1:"15",y1:"20",x2:"15",y2:"23"},null,-1),at=l("line",{x1:"20",y1:"9",x2:"23",y2:"9"},null,-1),rt=l("line",{x1:"20",y1:"14",x2:"23",y2:"14"},null,-1),st=l("line",{x1:"1",y1:"9",x2:"4",y2:"9"},null,-1),nt=l("line",{x1:"1",y1:"14",x2:"4",y2:"14"},null,-1),lt=[Xe,Ze,Je,et,tt,ot,at,rt,st,nt],it={key:0,width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#FFFFFF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},dt=l("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},null,-1),ut=[dt],ct={key:1,xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},ht=l("circle",{cx:"12",cy:"12",r:"5"},null,-1),vt=l("path",{d:"M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"},null,-1),ft=[ht,vt],gt={class:"p-4"},pt=_({__name:"default",setup(e){const t=w(),a=()=>{document.documentElement.classList.add("dark"),localStorage.dark_mode="true",t.value=!0},o=()=>{document.documentElement.classList.remove("dark"),localStorage.dark_mode="false",t.value=!1},r=()=>{t.value?o():a()};return V(async()=>{"dark_mode"in localStorage?localStorage.dark_mode==="true"?a():o():window.matchMedia("(prefers-color-scheme: dark)").matches&&a()}),(s,i)=>{const n=G,v=Ae,y=Me,x=ke;return d(),z(x,{style:{height:"500px"}},{top:c(()=>[g(y,{color:b(t)?"backgroundPrimary":"textPrimary",class:"rounded-xl"},{left:c(()=>[g(v,{class:"navbar-item-slot"},{default:c(()=>[g(n,{class:"font-bold text-lg dark:text-white",to:"/","is-active":""},{default:c(()=>[$("Keyword Research OST")]),_:1})]),_:1})]),center:c(()=>[g(v,{class:"navbar-item-slot flex gap-4"},{default:c(()=>[g(n,{"active-class":"text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500",class:"flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 gap-4 group w-full",to:"/"},{default:c(()=>[(d(),h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:b(t)?"#FFFFFF":"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Ie,8,Te)),$(" Home ")]),_:1}),g(n,{"active-class":"text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500",class:"flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 gap-4 group w-full",to:"/concatenator"},{default:c(()=>[(d(),h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:b(t)?"#FFFFFF":"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},De,8,Re)),$(" Concatenator ")]),_:1}),g(n,{"active-class":"text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500",class:"flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 gap-4 group w-full",to:"/cleaner"},{default:c(()=>[(d(),h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:b(t)?"#FFFFFF":"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},Qe,8,He)),$(" Cleaner ")]),_:1}),g(n,{"active-class":"text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500",class:"flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 gap-4 group w-full",to:"/project"},{default:c(()=>[(d(),h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:b(t)?"#FFFFFF":"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},lt,8,Ue)),$(" Projects ")]),_:1})]),_:1})]),right:c(()=>[g(v,{class:"navbar-item-slot"},{default:c(()=>[l("button",{type:"button",class:"text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",onClick:i[0]||(i[0]=C=>r())},[b(t)?(d(),h("svg",it,ut)):(d(),h("svg",ct,ft))])]),_:1})]),_:1},8,["color"])]),content:c(()=>[l("main",gt,[f(s.$slots,"default")])]),_:3})}}});export{pt as default};
