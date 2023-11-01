import{W as L,b as v,h as B,c as M,d as P}from"./index.5ce900ab.js";import{g as $,q as u,R as A,x as W,y as k,o as F,c as N,b as R,w as D,F as I,N as z,O,T,ae as j,U as q,a3 as U,af as i}from"./entry.266dd42c.js";const x=$({name:"VaMessageListWrapper",components:{VaMessageList:L(B)},props:{...v},setup(e){return{messagesColor:u(()=>e.error?"danger":e.success?"success":""),hasError:A(e,"error"),messagesComputed:u(()=>e.error?e.errorMessages:e.messages),errorLimit:u(()=>e.error?Number(e.errorCount):99)}}}),G={class:"va-message-list-wrapper"};function H(e,l,s,d,c,n){const r=k("va-message-list");return F(),N("div",G,[R(r,{color:e.messagesColor,limit:e.errorLimit,"has-error":e.hasError,"model-value":e.messagesComputed,"inherit-slots":["message"]},{default:D(t=>[I(e.$slots,"default",z(O(t)))]),_:3},8,["color","limit","has-error","model-value"])])}const Y=W(x,[["render",H]]),Z={...T,...j,...v,arrayValue:{type:[String,Boolean,Object,Number],default:void 0},label:{type:String,default:""},leftLabel:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},indeterminate:{type:Boolean,default:!1},indeterminateValue:{type:null,default:null},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},p=[...M,"update:modelValue","focus","blur"],J=e=>{const l=[e.falseValue,e.trueValue];if(e.indeterminate&&l.push(e.indeterminateValue),new Set(l).size!==l.length)throw new Error("falseValue, trueValue, indeterminateValue props should have strictly different values, which is not the case.")},ee=(e,l,{input:s,label:d,container:c})=>{J(e);const n=()=>S(()=>{l("update:modelValue",!1),_()}),r=()=>{var a;(a=i(s.value))==null||a.focus()},{valueComputed:t}=q(e,l),{computedError:g,computedErrorMessages:y,validate:h,validationAriaAttributes:b,withoutValidation:S,resetValidation:_}=P(e,l,{reset:n,focus:r,value:t}),{isFocused:f}=U(),C=a=>!!a&&[i(d.value),i(c.value)].includes(a),E=a=>{s.value===a.target&&!C(a.relatedTarget)&&(f.value=!1,h(),l("blur",a))},w=a=>{f.value=!0,l("focus",a)},m=u(()=>e.indeterminate&&t.value===e.indeterminateValue),V=u(()=>e.arrayValue!==void 0&&e.arrayValue!==null),o=u(()=>{var a;return V.value?(a=e.modelValue)==null?void 0:a.includes(e.arrayValue):t.value===e.trueValue});return{isChecked:o,isIndeterminate:m,onBlur:E,onFocus:w,toggleSelection:()=>{if(!(e.readonly||e.disabled||e.loading)){if(V.value){e.modelValue?Array.isArray(e.modelValue)?e.modelValue.includes(e.arrayValue)?l("update:modelValue",e.modelValue.filter(a=>a!==e.arrayValue)):l("update:modelValue",e.modelValue.concat(e.arrayValue)):l("update:modelValue",e.modelValue===e.arrayValue?[]:[e.modelValue,e.arrayValue]):l("update:modelValue",[e.arrayValue]);return}if(e.indeterminate){m.value?t.value=e.trueValue:o.value?t.value=e.falseValue:t.value=e.indeterminateValue;return}o.value?t.value=e.falseValue:t.value=e.trueValue}},reset:n,focus:r,computedError:g,computedErrorMessages:y,validationAriaAttributes:b}};export{Y as V,Z as a,ee as b,p as u};
