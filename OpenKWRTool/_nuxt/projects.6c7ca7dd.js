import{V as $e,a as Te}from"./index.e02ebc51.js";import{aN as Pe,q as f,aO as ke,aP as Ve,aQ as Le,a8 as ve,aR as we,g as z,l as Z,aS as Re,aT as Oe,m as J,av as Be,P as fe,x,y as M,o as m,h as V,w as y,F as A,N as Ae,B as ie,r as p,a5 as pe,a2 as ee,ag as be,i as g,k as ge,ae as Ie,c as Q,b as E,G as W,I as le,V as Ee,T as We,s as Y,U as ze,al as Ne,W as Fe,a as P,H as ne,z as se,Y as Me,Z as je,a1 as He,M as De,C as Ke,t as me,$ as Ge,aU as qe,j as Ue,a6 as Xe,d as ue,a9 as Ye,aV as Qe}from"./entry.266dd42c.js";import{u as Ze}from"./useKeyboardOnlyFocus.30cc1204.js";import{a as Je}from"./headless.5334a779.js";const xe=e=>{const{globalConfig:o,mergeGlobalConfig:s,setGlobalConfig:l,getGlobalConfig:c}=Pe(),a=f(()=>{var u;const i=ke(o.value),C={...i,colors:Ve(i.colors)},h=Le(C,e.value);return(u=e.value.colors)!=null&&u.variables&&Object.keys(e.value.colors.variables).forEach(_=>{h.colors.variables[_]=e.value.colors.variables[_]}),h});return ve(we,{mergeGlobalConfig:s,setGlobalConfig:l,getGlobalConfig:c,globalConfig:a}),a},ea=z({name:"VaCssVarsRenderer",inheritAttrs:!1,setup(e,{slots:o,attrs:s}){const{colorsToCSSVariable:l,colors:c}=J(),a=f(()=>l(c));return()=>Be(fe,s,Je(o.default,{},{style:a.value})||void 0)}}),aa=z({name:"VaConfig",components:{CssVarsRenderer:ea},props:{...Z,components:{type:Object,default:()=>({})},colors:{type:Object},i18n:{type:Object}},inheritAttrs:!1,setup(e){const o=Re(),s=f(()=>[...o.value,e.components]);Oe(s);const l=xe(f(()=>{const a={};return e.colors&&(a.colors=e.colors),e.i18n&&(a.i18n=e.i18n),a})),c=f(()=>!!e.colors);return{newConfig:l,doRenderCssVars:c}}});function ta(e,o,s,l,c,a){const u=M("CssVarsRenderer");return e.doRenderCssVars?(m(),V(u,Ae(ie({key:0},e.$attrs)),{default:y(()=>[A(e.$slots,"default")]),_:3},16)):A(e.$slots,"default",{key:1})}const oa=x(aa,[["render",ta]]),de=(e,o)=>{const s=p(),l=c=>{c.forEach(a=>{var u;const i=g(a);i&&((u=s.value)==null||u.observe(i))})};return pe(e,c=>{var a;(a=s.value)==null||a.disconnect(),l(c)}),ee(()=>{s.value=new ResizeObserver(o),l(e)}),be(()=>{var c;return(c=s.value)==null?void 0:c.disconnect()}),s};const na=z({name:"VaInnerLoading",components:{VaIcon:ge},props:{...Ie,...Z,color:{type:String},icon:{type:String,default:"va-loading"},size:{type:Number,default:30}},setup(e){const{getColor:o}=J();return{colorComputed:f(()=>o(e.color)),computedClass:f(()=>({"va-inner-loading--active":e.loading})),ariaAttributesComputed:f(()=>({"aria-busy":e.loading}))}}}),sa={key:0,class:"va-inner-loading__overlay","aria-hidden":"true"};function ia(e,o,s,l,c,a){const u=M("va-icon");return m(),Q("div",ie({class:["va-inner-loading",e.computedClass],"aria-live":"polite"},e.ariaAttributesComputed),[A(e.$slots,"default"),e.$props.loading?(m(),Q("div",sa,[E(u,{class:"va-inner-loading__spinner",spin:"",color:e.colorComputed,size:e.$props.size,name:e.$props.icon},null,8,["color","size","name"])])):W("",!0)],16)}const la=x(na,[["render",ia]]),ra=le(la),Ce=Symbol("TabsView");const B=e=>(e==null?void 0:e.clientWidth)||0,ca=z({name:"VaTabs",components:{VaButton:Ee,VaConfig:oa},emits:["update:modelValue","click:next","click:prev"],props:{...We,...Z,modelValue:{type:[String,Number],default:null},left:{type:Boolean,default:!0},right:{type:Boolean,default:!1},center:{type:Boolean,default:!1},grow:{type:Boolean,default:!1},hidePagination:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},hideSlider:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1},color:{type:String,default:"primary"},prevIcon:{type:String,default:"va-arrow-left"},nextIcon:{type:String,default:"va-arrow-right"},ariaMoveRightLabel:{type:String,default:"$t:movePaginationLeft"},ariaMoveLeftLabel:{type:String,default:"$t:movePaginationRight"}},setup:(e,{emit:o})=>{const s=Y(),l=Y(),c=Y(),a=p([]),u=p(null),i=p(null),C=p(0),h=p(0),_=p(!1),d=p(0),S=p(0),$=p(!1),{valueComputed:L}=ze(e,o),w=Ne({VaTab:{color:e.color}}),j=f(()=>{const{left:t,right:n,center:r,grow:v,disabled:k}=e;return{"va-tabs__container--left":t&&!n&&!r&&!v,"va-tabs__container--right":n,"va-tabs__container--center":r,"va-tabs__container--grow":v,"va-tabs__container--disabled":k}}),ae=f(()=>({"va-tabs--vertical":e.vertical})),{getColor:H}=J(),D=f(()=>H(e.color)),K=f(()=>e.hideSlider?{display:"none"}:{backgroundColor:D.value,height:e.vertical?`${u.value}px`:"",width:e.vertical?"":`${i.value}px`,transform:`translateY(-${h.value}px) translateX(${C.value}px)`,transition:$.value?"var(--va-tabs-slider-wrapper-transition)":""}),te=f(()=>e.vertical?{transform:"translateX(0px)"}:{transform:`translateX(${S.value-d.value}px)`,transition:$.value?"var(--va-tabs-slider-transition)":"",position:e.hidePagination?"unset":"absolute"}),oe=f(()=>d.value===0),G=f(()=>{const t=a.value[a.value.length-1],n=g(t.leftSidePosition),r=g(t.rightSidePosition),v=B(l.value);return r<=d.value+v||n<=d.value}),N=()=>{i.value=0,u.value=0},I=t=>{const n=B(l.value),r=g(t.leftSidePosition),v=g(t.rightSidePosition);if(!_.value){d.value=0;return}if(!(r-d.value>=0&&v-d.value<=n)){if(r-d.value<0){d.value=r;return}if(v-d.value>n){d.value=v-n;return}d.value=0}},F=()=>{if(S.value=0,!_.value)return;const t=B(l.value),n=B(c.value);e.right?S.value=n-t:e.center&&(S.value=Math.floor((n-t)/2))},T=()=>{N(),a.value.forEach(t=>{var n;t.updateSidePositions();const r=(((n=t.name)==null?void 0:n.value)||t.id)===L.value;t.isActive=t.isActiveRouterLink||r,t.isActive&&(I(t),X(t))}),F()},b=()=>{const t=B(c.value),n=B(s.value);requestAnimationFrame(()=>{_.value=!!(c.value&&s.value&&t>n)})},q=()=>{var t,n;const r=B(l.value);let v=d.value-r;for(let k=0;k<a.value.length-1;k++){const R=g((t=a.value[k])==null?void 0:t.leftSidePosition),O=g((n=a.value[k+1])==null?void 0:n.leftSidePosition);if(R>v&&R<d.value||O>=d.value){v=R;break}}d.value=Math.max(0,v),o("click:prev")},U=()=>{var t;const n=B(l.value),r=d.value+n;let v=r;for(let O=0;O<a.value.length-1&&!(g(a.value[O].rightSidePosition)>r&&(v=g(a.value[O].leftSidePosition),d.value<v));O++);const R=g((t=a.value[a.value.length-1])==null?void 0:t.rightSidePosition)-n;v=Math.min(R,v),d.value=Math.max(0,v),o("click:next")},X=t=>{var n;const r=g(t.tabElement),v=(r==null?void 0:r.offsetTop)||0,k=(r==null?void 0:r.offsetLeft)||0,R=(r==null?void 0:r.clientHeight)||0,O=(r==null?void 0:r.clientWidth)||0;if(e.vertical){const Se=(((n=l.value)==null?void 0:n.clientHeight)||0)-v-R;h.value=Math.max(Se,0),u.value=R,C.value=0,i.value=0}else C.value=k,i.value=O,h.value=0,u.value=0},re=()=>{$.value||requestAnimationFrame(()=>{$.value=!0})},ce=t=>{var n;t&&(L.value=((n=t.name)==null?void 0:n.value)||t.id,e.stateful&&T())},he=t=>{var n;const r=a.value.push(t)-1;t.id=((n=t.name)==null?void 0:n.value)||r},_e=t=>{a.value=a.value.filter(n=>n.id!==t.id),a.value.forEach((n,r)=>{var v;n.id=((v=n.name)==null?void 0:v.value)||r})};return ve(Ce,{parentDisabled:e.disabled,selectTab:ce,moveToTab:I,registerTab:he,unregisterTab:_e}),pe(()=>e.modelValue,T),de([s],b),de([l],T),ee(()=>{requestAnimationFrame(()=>{re()})}),{...Fe(),wrapper:s,container:l,tabs:c,tabsList:a,sliderHeight:u,sliderWidth:i,sliderOffsetX:C,sliderOffsetY:h,showPagination:_,tabsContentOffset:d,startingXPoint:S,animationIncluded:$,colorComputed:D,tabConfig:w,computedClass:j,computedTabsClass:ae,tabSelected:L,sliderStyles:K,paginationControlledStyles:te,disablePaginationLeft:oe,disablePaginationRight:G,resetSliderSizes:N,moveToTab:I,updateStartingXPoint:F,updateTabsState:T,updatePagination:b,movePaginationLeft:q,movePaginationRight:U,updateSlider:X,includeAnimation:re,selectTab:ce}}}),ua=["aria-disabled"],da=P("div",{class:"va-tabs__slider"},null,-1),va=[da],fa={class:"va-tabs__tabs-items"},pa={class:"va-tabs__content"};function ba(e,o,s,l,c,a){const u=M("va-button"),i=M("va-config");return m(),Q("div",{class:ne(["va-tabs",e.computedTabsClass])},[P("div",{ref:"wrapper",class:"va-tabs__wrapper",role:"tablist","aria-disabled":e.$props.disabled},[e.showPagination&&!e.$props.hidePagination?(m(),V(u,{key:0,class:"va-tabs__pagination","aria-label":e.tp(e.$props.ariaMoveLeftLabel),size:"medium",disabled:e.disablePaginationLeft,color:e.color,preset:"secondary",icon:e.$props.prevIcon,onClick:e.movePaginationLeft},null,8,["aria-label","disabled","color","icon","onClick"])):W("",!0),P("div",{ref:"container",class:ne(["va-tabs__container",e.computedClass])},[P("div",{ref:"tabs",class:"va-tabs__tabs",style:se(e.paginationControlledStyles)},[P("div",{class:"va-tabs__slider-wrapper","aria-hidden":"true",style:se(e.sliderStyles)},va,4),E(i,{components:e.tabConfig},{default:y(()=>[P("div",fa,[A(e.$slots,"tabs")])]),_:3},8,["components"])],4)],2),e.showPagination&&!e.$props.hidePagination?(m(),V(u,{key:1,class:"va-tabs__pagination","aria-label":e.tp(e.$props.ariaMoveRightLabel),size:"medium",color:e.color,disabled:e.disablePaginationRight,preset:"secondary",icon:e.$props.nextIcon,onClick:e.movePaginationRight},null,8,["aria-label","color","disabled","icon","onClick"])):W("",!0)],8,ua),P("div",pa,[A(e.$slots,"default")])],2)}const ga=x(ca,[["render",ba]]),ma=le(ga);const Ca=z({name:"VaTab",components:{VaIcon:ge},emits:["click","keydown-enter","focus"],props:{...Me,...Z,selected:{type:Boolean,default:!1},color:{type:String,default:""},icon:{type:String,default:""},label:{type:String,default:""},disabled:{type:Boolean},name:{type:[String,Number]},tag:{type:String,default:"div"}},setup:(e,{emit:o})=>{const s=Y(),l=p(!1),c=p(!1),a=p(0),u=p(0),{keyboardFocusListeners:i,hasKeyboardFocus:C}=Ze(),{tagComputed:h,hrefComputed:_,isActiveRouterLink:d}=je(e),S=f(()=>({"va-tab--disabled":e.disabled})),{parentDisabled:$,selectTab:L,moveToTab:w,registerTab:j,unregisterTab:ae}=He(Ce,{parentDisabled:!1,tabsList:[],selectTab:b=>b,moveToTab:b=>b,registerTab:b=>b,unregisterTab:b=>b}),H=f(()=>e.disabled||$?-1:0),{getColor:D}=J(),K=f(()=>D(e.color)),te=f(()=>({color:c.value||l.value?K.value:"inherit"})),oe=b=>{c.value=b},G=()=>{var b,q;const U=((b=s.value)==null?void 0:b.offsetLeft)||0,X=((q=s.value)==null?void 0:q.offsetWidth)||0;a.value=U+X,u.value=U},N=()=>{L(T),o("click")},I=()=>{L(T),o("keydown-enter")},F=()=>{C.value&&w(T),o("focus")},T={name:f(()=>e.name),id:null,tabElement:s,isActive:l,tabIndexComputed:H,isActiveRouterLink:d,rightSidePosition:a,leftSidePosition:u,onTabClick:N,onTabKeydown:I,onFocus:F,updateSidePositions:G};return ee(()=>{j(T)}),be(()=>{ae(T)}),{tabElement:s,parentDisabled:$,isActive:l,hoverState:c,tagComputed:h,hrefComputed:_,isActiveRouterLink:d,colorComputed:K,classComputed:S,computedStyle:te,tabIndexComputed:H,rightSidePosition:a,leftSidePosition:u,updateHoverState:oe,updateSidePositions:G,onTabClick:N,onTabKeydown:I,onFocus:F,keyboardFocusListeners:i}}}),ha=["tabindex"],_a=["textContent"];function ya(e,o,s,l,c,a){const u=M("va-icon");return m(),V(Ge(e.tagComputed),{ref:"tabElement",class:ne(["va-tab",e.classComputed]),role:"tab","aria-selected":e.isActive,"aria-disabled":e.$props.disabled||e.parentDisabled,href:e.hrefComputed,target:e.target,to:e.to,replace:e.replace,exact:e.exact,"active-class":e.activeClass,"exact-active-class":e.exactActiveClass,style:se(e.computedStyle),onMouseenter:o[3]||(o[3]=i=>e.updateHoverState(!0)),onMouseleave:o[4]||(o[4]=i=>e.updateHoverState(!1))},{default:y(()=>[P("div",ie({class:"va-tab__content",tabindex:e.tabIndexComputed,onFocus:o[0]||(o[0]=(...i)=>e.onFocus&&e.onFocus(...i)),onClick:o[1]||(o[1]=(...i)=>e.onTabClick&&e.onTabClick(...i)),onKeydown:o[2]||(o[2]=De((...i)=>e.onTabKeydown&&e.onTabKeydown(...i),["enter"]))},Ke(e.keyboardFocusListeners,!0)),[A(e.$slots,"default",{},()=>[e.icon?(m(),V(u,{key:0,class:"va-tab__icon",size:"small",name:e.icon},null,8,["name"])):W("",!0),P("span",{class:"va-tab__label",textContent:me(e.label)},null,8,_a)])],16,ha)]),_:3},40,["aria-selected","aria-disabled","href","target","to","replace","exact","active-class","exact-active-class","class","style"])}const Sa=x(Ca,[["render",ya]]),$a=le(Sa),Ta={class:"flex flex-col gap-4"},wa=z({__name:"projects",setup(e){const o=p(0),s=p(!1),l=p([{id:0,path:"/project",type:"Save / load project"},{id:1,path:"/project/qualifier",type:"Keyword qualifier"},{id:2,path:"/project/structure",type:"Structure builder"}]),c=qe(),a=f(()=>localStorage.keywords!==void 0),u=i=>{s.value=!0,Qe(i)};return ee(()=>o.value=l.value.findIndex(i=>i.path===c.path)),(i,C)=>{const h=$a,_=ma,d=$e,S=Te,$=ra,L=Ye;return m(),V(L,{name:"default"},{default:y(()=>[g(a)?(m(),V(S,{key:0,class:"mb-4"},{default:y(()=>[E(d,null,{default:y(()=>[E(_,{modelValue:g(o),"onUpdate:modelValue":C[0]||(C[0]=w=>Ue(o)?o.value=w:null),center:""},{tabs:y(()=>[(m(!0),Q(fe,null,Xe(g(l),w=>(m(),V(h,{onClick:j=>u(w.path)},{default:y(()=>[ue(me(w.type),1)]),_:2},1032,["onClick"]))),256))]),_:1},8,["modelValue"])]),_:1})]),_:1})):W("",!0),g(s)?(m(),V($,{key:1,loading:"",class:"mb-4"},{default:y(()=>[E(S,{color:"info"},{default:y(()=>[E(d,null,{default:y(()=>[ue("Loading keywords")]),_:1})]),_:1})]),_:1})):W("",!0),P("div",Ta,[A(i.$slots,"default")])]),_:3})}}});export{wa as default};
