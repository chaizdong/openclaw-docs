import{B as e,Bt as t,H as n,Kt as r,Qt as i,Rt as a,V as o,Vt as s,a as c,an as l,c as u,cn as d,dt as f,ft as p,ht as m,jt as h,mt as g}from"./_plugin-vue_export-helper-CtX_x4q1.js";function _(e,t){let r=s(n,null);return h(()=>e.hljs||r?.mergedHljsRef.value)}function v(e){let{textColor2:t,fontSize:n,fontWeightStrong:r,textColor3:i}=e;return{textColor:t,fontSize:n,fontWeightStrong:r,"mono-3":`#a0a1a7`,"hue-1":`#0184bb`,"hue-2":`#4078f2`,"hue-3":`#a626a4`,"hue-4":`#50a14f`,"hue-5":`#e45649`,"hue-5-2":`#c91243`,"hue-6":`#986801`,"hue-6-2":`#c18401`,lineNumberTextColor:i}}var y={name:`Code`,common:c,self:v},b=f([p(`code`,`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[m(`show-line-numbers`,`
 display: flex;
 `),g(`line-numbers`,`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),m(`word-wrap`,[f(`pre`,`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),f(`pre`,`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),f(`[class^=hljs]`,`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:e})=>{let t=`${e.bPrefix}code`;return[`${t} .hljs-comment,
 ${t} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${t} .hljs-doctag,
 ${t} .hljs-keyword,
 ${t} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${t} .hljs-section,
 ${t} .hljs-name,
 ${t} .hljs-selector-tag,
 ${t} .hljs-deletion,
 ${t} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${t} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${t} .hljs-string,
 ${t} .hljs-regexp,
 ${t} .hljs-addition,
 ${t} .hljs-attribute,
 ${t} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${t} .hljs-built_in,
 ${t} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${t} .hljs-attr,
 ${t} .hljs-variable,
 ${t} .hljs-template-variable,
 ${t} .hljs-type,
 ${t} .hljs-selector-class,
 ${t} .hljs-selector-attr,
 ${t} .hljs-selector-pseudo,
 ${t} .hljs-number {
 color: var(--n-hue-6);
 }`,`${t} .hljs-symbol,
 ${t} .hljs-bullet,
 ${t} .hljs-link,
 ${t} .hljs-meta,
 ${t} .hljs-selector-id,
 ${t} .hljs-title {
 color: var(--n-hue-2);
 }`,`${t} .hljs-emphasis {
 font-style: italic;
 }`,`${t} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${t} .hljs-link {
 text-decoration: underline;
 }`]}]),x=a({name:`Code`,props:Object.assign(Object.assign({},u.props),{language:String,code:{type:String,default:``},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),setup(t,{slots:n}){let{internalNoHighlight:a}=t,{mergedClsPrefixRef:s,inlineThemeDisabled:c}=o(),f=l(null),p=a?{value:void 0}:_(t),m=(e,t,n)=>{let{value:r}=p;return!r||!(e&&r.getLanguage(e))?null:r.highlight(n?t.trim():t,{language:e}).value},g=h(()=>t.inline||t.wordWrap?!1:t.showLineNumbers),v=()=>{if(n.default)return;let{value:e}=f;if(!e)return;let{language:r}=t,i=t.uri?window.decodeURIComponent(t.code):t.code;if(r){let n=m(r,i,t.trim);if(n!==null){if(t.inline)e.innerHTML=n;else{let t=e.querySelector(`.__code__`);t&&e.removeChild(t);let r=document.createElement(`pre`);r.className=`__code__`,r.innerHTML=n,e.appendChild(r)}return}}if(t.inline){e.textContent=i;return}let a=e.querySelector(`.__code__`);if(a)a.textContent=i;else{let t=document.createElement(`pre`);t.className=`__code__`,t.textContent=i,e.innerHTML=``,e.appendChild(t)}};r(v),i(d(t,`language`),v),i(d(t,`code`),v),a||i(p,v);let x=u(`Code`,`-code`,b,y,t,s),S=h(()=>{let{common:{cubicBezierEaseInOut:e,fontFamilyMono:n},self:{textColor:r,fontSize:i,fontWeightStrong:a,lineNumberTextColor:o,"mono-3":s,"hue-1":c,"hue-2":l,"hue-3":u,"hue-4":d,"hue-5":f,"hue-5-2":p,"hue-6":m,"hue-6-2":h}}=x.value,{internalFontSize:g}=t;return{"--n-font-size":g?`${g}px`:i,"--n-font-family":n,"--n-font-weight-strong":a,"--n-bezier":e,"--n-text-color":r,"--n-mono-3":s,"--n-hue-1":c,"--n-hue-2":l,"--n-hue-3":u,"--n-hue-4":d,"--n-hue-5":f,"--n-hue-5-2":p,"--n-hue-6":m,"--n-hue-6-2":h,"--n-line-number-text-color":o}}),C=c?e(`code`,h(()=>`${t.internalFontSize||`a`}`),S,t):void 0;return{mergedClsPrefix:s,codeRef:f,mergedShowLineNumbers:g,lineNumbers:h(()=>{let e=1,n=[],r=!1;for(let i of t.code)i===`
`?(r=!0,n.push(e++)):r=!1;return r||n.push(e++),n.join(`
`)}),cssVars:c?void 0:S,themeClass:C?.themeClass,onRender:C?.onRender}},render(){var e;let{mergedClsPrefix:n,wordWrap:r,mergedShowLineNumbers:i,onRender:a}=this;return a?.(),t(`code`,{class:[`${n}-code`,this.themeClass,r&&`${n}-code--word-wrap`,i&&`${n}-code--show-line-numbers`],style:this.cssVars,ref:`codeRef`},i?t(`pre`,{class:`${n}-code__line-numbers`},this.lineNumbers):null,(e=this.$slots).default?.call(e))}});export{x as t};