import{B as e,Bt as t,Dt as n,Ft as r,Gt as i,It as a,J as o,Jt as s,K as c,Lt as l,Mt as u,Rt as d,Ut as f,V as p,Vt as m,W as h,Yt as g,_t as _,a as v,an as y,c as b,cn as x,d as S,dn as C,dt as w,en as T,et as E,ft as D,gt as O,ht as k,it as A,jt as j,l as M,ln as N,mt as P,qt as F,rt as I,t as L,u as R}from"./_plugin-vue_export-helper-CtX_x4q1.js";import{i as z}from"./vue-router-BIRxL8Vw.js";import{i as ee}from"./flatten-DadFbFrG.js";import{i as B,n as te,t as V}from"./Grid-B6PsY0lQ.js";import{t as H}from"./color-to-class-DNAdiWtP.js";import{t as U}from"./Card-BKFf-BiJ.js";import{n as W,t as G}from"./icon-switch.cssr-npV3msYz.js";import{t as K}from"./FadeInExpandTransition-AhjiCsbF.js";var q=E(`n-form-item`);function ne(e,{defaultSize:t=`medium`,mergedSize:n,mergedDisabled:r}={}){let a=m(q,null);s(q,null);let o=j(n?()=>n(a):()=>{let{size:n}=e;if(n)return n;if(a){let{mergedSize:e}=a;if(e.value!==void 0)return e.value}return t}),c=j(r?()=>r(a):()=>{let{disabled:t}=e;return t===void 0?a?a.disabled.value:!1:t}),l=j(()=>{let{status:t}=e;return t||a?.mergedValidationStatus.value});return i(()=>{a&&a.restoreValidation()}),{mergedSizeRef:o,mergedDisabledRef:c,mergedStatusRef:l,nTriggerFormBlur(){a&&a.handleContentBlur()},nTriggerFormChange(){a&&a.handleContentChange()},nTriggerFormFocus(){a&&a.handleContentFocus()},nTriggerFormInput(){a&&a.handleContentInput()}}}var re=w([w(`@keyframes rotator`,`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),D(`base-loading`,`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[P(`transition-wrapper`,`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[G()]),P(`placeholder`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[G({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),P(`container`,`
 animation: rotator 3s linear infinite both;
 `,[P(`icon`,`
 height: 1em;
 width: 1em;
 `)])])]),J=`1.6s`,ie=d({name:`BaseLoading`,props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0}},{strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0},scale:{type:Number,default:1},radius:{type:Number,default:100}}),setup(e){M(`-base-loading`,re,x(e,`clsPrefix`))},render(){let{clsPrefix:e,radius:n,strokeWidth:r,stroke:i,scale:a}=this,o=n/a;return t(`div`,{class:`${e}-base-loading`,role:`img`,"aria-label":`loading`},t(W,null,{default:()=>this.show?t(`div`,{key:`icon`,class:`${e}-base-loading__transition-wrapper`},t(`div`,{class:`${e}-base-loading__container`},t(`svg`,{class:`${e}-base-loading__icon`,viewBox:`0 0 ${2*o} ${2*o}`,xmlns:`http://www.w3.org/2000/svg`,style:{color:i}},t(`g`,null,t(`animateTransform`,{attributeName:`transform`,type:`rotate`,values:`0 ${o} ${o};270 ${o} ${o}`,begin:`0s`,dur:J,fill:`freeze`,repeatCount:`indefinite`}),t(`circle`,{class:`${e}-base-loading__icon`,fill:`none`,stroke:`currentColor`,"stroke-width":r,"stroke-linecap":`round`,cx:o,cy:o,r:n-r/2,"stroke-dasharray":5.67*n,"stroke-dashoffset":18.48*n},t(`animateTransform`,{attributeName:`transform`,type:`rotate`,values:`0 ${o} ${o};135 ${o} ${o};450 ${o} ${o}`,begin:`0s`,dur:J,fill:`freeze`,repeatCount:`indefinite`}),t(`animate`,{attributeName:`stroke-dashoffset`,values:`${5.67*n};${1.42*n};${5.67*n}`,begin:`0s`,dur:J,fill:`freeze`,repeatCount:`indefinite`})))))):t(`div`,{key:`placeholder`,class:`${e}-base-loading__placeholder`},this.$slots)}))}}),{cubicBezierEaseInOut:Y}=R;function ae({duration:e=`.2s`,delay:t=`.1s`}={}){return[w(`&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to`,{opacity:1}),w(`&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from`,`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),w(`&.fade-in-width-expand-transition-leave-active`,`
 overflow: hidden;
 transition:
 opacity ${e} ${Y},
 max-width ${e} ${Y} ${t},
 margin-left ${e} ${Y} ${t},
 margin-right ${e} ${Y} ${t};
 `),w(`&.fade-in-width-expand-transition-enter-active`,`
 overflow: hidden;
 transition:
 opacity ${e} ${Y} ${t},
 max-width ${e} ${Y},
 margin-left ${e} ${Y},
 margin-right ${e} ${Y};
 `)]}var oe=D(`base-wave`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),se=d({name:`BaseWave`,props:{clsPrefix:{type:String,required:!0}},setup(e){M(`-base-wave`,oe,x(e,`clsPrefix`));let t=y(null),n=y(!1),r=null;return i(()=>{r!==null&&window.clearTimeout(r)}),{active:n,selfRef:t,play(){r!==null&&(window.clearTimeout(r),n.value=!1,r=null),f(()=>{var e;(e=t.value)==null||e.offsetHeight,n.value=!0,r=window.setTimeout(()=>{n.value=!1,r=null},1e3)})}}},render(){let{clsPrefix:e}=this;return t(`div`,{ref:`selfRef`,"aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),ce=B&&`chrome`in window;B&&navigator.userAgent.includes(`Firefox`);var le=B&&navigator.userAgent.includes(`Safari`)&&!ce;function X(e){return A(e,[255,255,255,.16])}function Z(e){return A(e,[0,0,0,.12])}var ue=E(`n-button-group`),de={paddingTiny:`0 6px`,paddingSmall:`0 10px`,paddingMedium:`0 14px`,paddingLarge:`0 18px`,paddingRoundTiny:`0 10px`,paddingRoundSmall:`0 14px`,paddingRoundMedium:`0 18px`,paddingRoundLarge:`0 22px`,iconMarginTiny:`6px`,iconMarginSmall:`6px`,iconMarginMedium:`6px`,iconMarginLarge:`6px`,iconSizeTiny:`14px`,iconSizeSmall:`18px`,iconSizeMedium:`18px`,iconSizeLarge:`20px`,rippleDuration:`.6s`};function fe(e){let{heightTiny:t,heightSmall:n,heightMedium:r,heightLarge:i,borderRadius:a,fontSizeTiny:o,fontSizeSmall:s,fontSizeMedium:c,fontSizeLarge:l,opacityDisabled:u,textColor2:d,textColor3:f,primaryColorHover:p,primaryColorPressed:m,borderColor:h,primaryColor:g,baseColor:_,infoColor:v,infoColorHover:y,infoColorPressed:b,successColor:x,successColorHover:S,successColorPressed:C,warningColor:w,warningColorHover:T,warningColorPressed:E,errorColor:D,errorColorHover:O,errorColorPressed:k,fontWeight:A,buttonColor2:j,buttonColor2Hover:M,buttonColor2Pressed:N,fontWeightStrong:P}=e;return Object.assign(Object.assign({},de),{heightTiny:t,heightSmall:n,heightMedium:r,heightLarge:i,borderRadiusTiny:a,borderRadiusSmall:a,borderRadiusMedium:a,borderRadiusLarge:a,fontSizeTiny:o,fontSizeSmall:s,fontSizeMedium:c,fontSizeLarge:l,opacityDisabled:u,colorOpacitySecondary:`0.16`,colorOpacitySecondaryHover:`0.22`,colorOpacitySecondaryPressed:`0.28`,colorSecondary:j,colorSecondaryHover:M,colorSecondaryPressed:N,colorTertiary:j,colorTertiaryHover:M,colorTertiaryPressed:N,colorQuaternary:`#0000`,colorQuaternaryHover:M,colorQuaternaryPressed:N,color:`#0000`,colorHover:`#0000`,colorPressed:`#0000`,colorFocus:`#0000`,colorDisabled:`#0000`,textColor:d,textColorTertiary:f,textColorHover:p,textColorPressed:m,textColorFocus:p,textColorDisabled:d,textColorText:d,textColorTextHover:p,textColorTextPressed:m,textColorTextFocus:p,textColorTextDisabled:d,textColorGhost:d,textColorGhostHover:p,textColorGhostPressed:m,textColorGhostFocus:p,textColorGhostDisabled:d,border:`1px solid ${h}`,borderHover:`1px solid ${p}`,borderPressed:`1px solid ${m}`,borderFocus:`1px solid ${p}`,borderDisabled:`1px solid ${h}`,rippleColor:g,colorPrimary:g,colorHoverPrimary:p,colorPressedPrimary:m,colorFocusPrimary:p,colorDisabledPrimary:g,textColorPrimary:_,textColorHoverPrimary:_,textColorPressedPrimary:_,textColorFocusPrimary:_,textColorDisabledPrimary:_,textColorTextPrimary:g,textColorTextHoverPrimary:p,textColorTextPressedPrimary:m,textColorTextFocusPrimary:p,textColorTextDisabledPrimary:d,textColorGhostPrimary:g,textColorGhostHoverPrimary:p,textColorGhostPressedPrimary:m,textColorGhostFocusPrimary:p,textColorGhostDisabledPrimary:g,borderPrimary:`1px solid ${g}`,borderHoverPrimary:`1px solid ${p}`,borderPressedPrimary:`1px solid ${m}`,borderFocusPrimary:`1px solid ${p}`,borderDisabledPrimary:`1px solid ${g}`,rippleColorPrimary:g,colorInfo:v,colorHoverInfo:y,colorPressedInfo:b,colorFocusInfo:y,colorDisabledInfo:v,textColorInfo:_,textColorHoverInfo:_,textColorPressedInfo:_,textColorFocusInfo:_,textColorDisabledInfo:_,textColorTextInfo:v,textColorTextHoverInfo:y,textColorTextPressedInfo:b,textColorTextFocusInfo:y,textColorTextDisabledInfo:d,textColorGhostInfo:v,textColorGhostHoverInfo:y,textColorGhostPressedInfo:b,textColorGhostFocusInfo:y,textColorGhostDisabledInfo:v,borderInfo:`1px solid ${v}`,borderHoverInfo:`1px solid ${y}`,borderPressedInfo:`1px solid ${b}`,borderFocusInfo:`1px solid ${y}`,borderDisabledInfo:`1px solid ${v}`,rippleColorInfo:v,colorSuccess:x,colorHoverSuccess:S,colorPressedSuccess:C,colorFocusSuccess:S,colorDisabledSuccess:x,textColorSuccess:_,textColorHoverSuccess:_,textColorPressedSuccess:_,textColorFocusSuccess:_,textColorDisabledSuccess:_,textColorTextSuccess:x,textColorTextHoverSuccess:S,textColorTextPressedSuccess:C,textColorTextFocusSuccess:S,textColorTextDisabledSuccess:d,textColorGhostSuccess:x,textColorGhostHoverSuccess:S,textColorGhostPressedSuccess:C,textColorGhostFocusSuccess:S,textColorGhostDisabledSuccess:x,borderSuccess:`1px solid ${x}`,borderHoverSuccess:`1px solid ${S}`,borderPressedSuccess:`1px solid ${C}`,borderFocusSuccess:`1px solid ${S}`,borderDisabledSuccess:`1px solid ${x}`,rippleColorSuccess:x,colorWarning:w,colorHoverWarning:T,colorPressedWarning:E,colorFocusWarning:T,colorDisabledWarning:w,textColorWarning:_,textColorHoverWarning:_,textColorPressedWarning:_,textColorFocusWarning:_,textColorDisabledWarning:_,textColorTextWarning:w,textColorTextHoverWarning:T,textColorTextPressedWarning:E,textColorTextFocusWarning:T,textColorTextDisabledWarning:d,textColorGhostWarning:w,textColorGhostHoverWarning:T,textColorGhostPressedWarning:E,textColorGhostFocusWarning:T,textColorGhostDisabledWarning:w,borderWarning:`1px solid ${w}`,borderHoverWarning:`1px solid ${T}`,borderPressedWarning:`1px solid ${E}`,borderFocusWarning:`1px solid ${T}`,borderDisabledWarning:`1px solid ${w}`,rippleColorWarning:w,colorError:D,colorHoverError:O,colorPressedError:k,colorFocusError:O,colorDisabledError:D,textColorError:_,textColorHoverError:_,textColorPressedError:_,textColorFocusError:_,textColorDisabledError:_,textColorTextError:D,textColorTextHoverError:O,textColorTextPressedError:k,textColorTextFocusError:O,textColorTextDisabledError:d,textColorGhostError:D,textColorGhostHoverError:O,textColorGhostPressedError:k,textColorGhostFocusError:O,textColorGhostDisabledError:D,borderError:`1px solid ${D}`,borderHoverError:`1px solid ${O}`,borderPressedError:`1px solid ${k}`,borderFocusError:`1px solid ${O}`,borderDisabledError:`1px solid ${D}`,rippleColorError:D,waveOpacity:`0.6`,fontWeight:A,fontWeightStrong:P})}var pe={name:`Button`,common:v,self:fe},me=w([D(`button`,`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[k(`color`,[P(`border`,{borderColor:`var(--n-border-color)`}),k(`disabled`,[P(`border`,{borderColor:`var(--n-border-color-disabled)`})]),O(`disabled`,[w(`&:focus`,[P(`state-border`,{borderColor:`var(--n-border-color-focus)`})]),w(`&:hover`,[P(`state-border`,{borderColor:`var(--n-border-color-hover)`})]),w(`&:active`,[P(`state-border`,{borderColor:`var(--n-border-color-pressed)`})]),k(`pressed`,[P(`state-border`,{borderColor:`var(--n-border-color-pressed)`})])])]),k(`disabled`,{backgroundColor:`var(--n-color-disabled)`,color:`var(--n-text-color-disabled)`},[P(`border`,{border:`var(--n-border-disabled)`})]),O(`disabled`,[w(`&:focus`,{backgroundColor:`var(--n-color-focus)`,color:`var(--n-text-color-focus)`},[P(`state-border`,{border:`var(--n-border-focus)`})]),w(`&:hover`,{backgroundColor:`var(--n-color-hover)`,color:`var(--n-text-color-hover)`},[P(`state-border`,{border:`var(--n-border-hover)`})]),w(`&:active`,{backgroundColor:`var(--n-color-pressed)`,color:`var(--n-text-color-pressed)`},[P(`state-border`,{border:`var(--n-border-pressed)`})]),k(`pressed`,{backgroundColor:`var(--n-color-pressed)`,color:`var(--n-text-color-pressed)`},[P(`state-border`,{border:`var(--n-border-pressed)`})])]),k(`loading`,`cursor: wait;`),D(`base-wave`,`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[k(`active`,{zIndex:1,animationName:`button-wave-spread, button-wave-opacity`})]),B&&`MozBoxSizing`in document.createElement(`div`).style?w(`&::moz-focus-inner`,{border:0}):null,P(`border, state-border`,`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),P(`border`,`
 border: var(--n-border);
 `),P(`state-border`,`
 border: var(--n-border);
 border-color: #0000;
 z-index: 1;
 `),P(`icon`,`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[D(`icon-slot`,`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[G({top:`50%`,originalTransform:`translateY(-50%)`})]),ae()]),P(`content`,`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[w(`~`,[P(`icon`,{margin:`var(--n-icon-margin)`,marginRight:0})])]),k(`block`,`
 display: flex;
 width: 100%;
 `),k(`dashed`,[P(`border, state-border`,{borderStyle:`dashed !important`})]),k(`disabled`,{cursor:`not-allowed`,opacity:`var(--n-opacity-disabled)`})]),w(`@keyframes button-wave-spread`,{from:{boxShadow:`0 0 0.5px 0 var(--n-ripple-color)`},to:{boxShadow:`0 0 0.5px 4.5px var(--n-ripple-color)`}}),w(`@keyframes button-wave-opacity`,{from:{opacity:`var(--n-wave-opacity)`},to:{opacity:0}})]),Q=d({name:`Button`,props:Object.assign(Object.assign({},b.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:`button`},type:{type:String,default:`default`},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:`left`},attrType:{type:String,default:`button`},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!le},spinProps:Object}),slots:Object,setup(t){let n=y(null),r=y(null),i=y(!1),a=ee(()=>!t.quaternary&&!t.tertiary&&!t.secondary&&!t.text&&(!t.color||t.ghost||t.dashed)&&t.bordered),s=m(ue,{}),{inlineThemeDisabled:c,mergedClsPrefixRef:l,mergedRtlRef:u,mergedComponentPropsRef:d}=p(t),{mergedSizeRef:f}=ne({},{defaultSize:`medium`,mergedSize:e=>{let{size:n}=t;if(n)return n;let{size:r}=s;if(r)return r;let{mergedSize:i}=e||{};return i?i.value:d?.value?.Button?.size||`medium`}}),h=j(()=>t.focusable&&!t.disabled),g=e=>{var r;h.value||e.preventDefault(),!t.nativeFocusBehavior&&(e.preventDefault(),!t.disabled&&h.value&&((r=n.value)==null||r.focus({preventScroll:!0})))},v=e=>{var n;if(!t.disabled&&!t.loading){let{onClick:i}=t;i&&o(i,e),t.text||(n=r.value)==null||n.play()}},x=e=>{switch(e.key){case`Enter`:if(!t.keyboard)return;i.value=!1}},C=e=>{switch(e.key){case`Enter`:if(!t.keyboard||t.loading){e.preventDefault();return}i.value=!0}},w=()=>{i.value=!1},T=b(`Button`,`-button`,me,pe,t,l),E=S(`Button`,u,l),D=j(()=>{let{common:{cubicBezierEaseInOut:e,cubicBezierEaseOut:n},self:r}=T.value,{rippleDuration:i,opacityDisabled:a,fontWeight:o,fontWeightStrong:s}=r,c=f.value,{dashed:l,type:u,ghost:d,text:p,color:m,round:h,circle:g,textColor:v,secondary:y,tertiary:b,quaternary:x,strong:S}=t,C={"--n-font-weight":S?s:o},w={"--n-color":`initial`,"--n-color-hover":`initial`,"--n-color-pressed":`initial`,"--n-color-focus":`initial`,"--n-color-disabled":`initial`,"--n-ripple-color":`initial`,"--n-text-color":`initial`,"--n-text-color-hover":`initial`,"--n-text-color-pressed":`initial`,"--n-text-color-focus":`initial`,"--n-text-color-disabled":`initial`},E=u===`tertiary`,D=u===`default`,O=E?`default`:u;if(p){let e=v||m;w={"--n-color":`#0000`,"--n-color-hover":`#0000`,"--n-color-pressed":`#0000`,"--n-color-focus":`#0000`,"--n-color-disabled":`#0000`,"--n-ripple-color":`#0000`,"--n-text-color":e||r[_(`textColorText`,O)],"--n-text-color-hover":e?X(e):r[_(`textColorTextHover`,O)],"--n-text-color-pressed":e?Z(e):r[_(`textColorTextPressed`,O)],"--n-text-color-focus":e?X(e):r[_(`textColorTextHover`,O)],"--n-text-color-disabled":e||r[_(`textColorTextDisabled`,O)]}}else if(d||l){let e=v||m;w={"--n-color":`#0000`,"--n-color-hover":`#0000`,"--n-color-pressed":`#0000`,"--n-color-focus":`#0000`,"--n-color-disabled":`#0000`,"--n-ripple-color":m||r[_(`rippleColor`,O)],"--n-text-color":e||r[_(`textColorGhost`,O)],"--n-text-color-hover":e?X(e):r[_(`textColorGhostHover`,O)],"--n-text-color-pressed":e?Z(e):r[_(`textColorGhostPressed`,O)],"--n-text-color-focus":e?X(e):r[_(`textColorGhostHover`,O)],"--n-text-color-disabled":e||r[_(`textColorGhostDisabled`,O)]}}else if(y){let e=D?r.textColor:E?r.textColorTertiary:r[_(`color`,O)],t=m||e,n=u!==`default`&&u!==`tertiary`;w={"--n-color":n?I(t,{alpha:Number(r.colorOpacitySecondary)}):r.colorSecondary,"--n-color-hover":n?I(t,{alpha:Number(r.colorOpacitySecondaryHover)}):r.colorSecondaryHover,"--n-color-pressed":n?I(t,{alpha:Number(r.colorOpacitySecondaryPressed)}):r.colorSecondaryPressed,"--n-color-focus":n?I(t,{alpha:Number(r.colorOpacitySecondaryHover)}):r.colorSecondaryHover,"--n-color-disabled":r.colorSecondary,"--n-ripple-color":`#0000`,"--n-text-color":t,"--n-text-color-hover":t,"--n-text-color-pressed":t,"--n-text-color-focus":t,"--n-text-color-disabled":t}}else if(b||x){let e=D?r.textColor:E?r.textColorTertiary:r[_(`color`,O)],t=m||e;b?(w[`--n-color`]=r.colorTertiary,w[`--n-color-hover`]=r.colorTertiaryHover,w[`--n-color-pressed`]=r.colorTertiaryPressed,w[`--n-color-focus`]=r.colorSecondaryHover,w[`--n-color-disabled`]=r.colorTertiary):(w[`--n-color`]=r.colorQuaternary,w[`--n-color-hover`]=r.colorQuaternaryHover,w[`--n-color-pressed`]=r.colorQuaternaryPressed,w[`--n-color-focus`]=r.colorQuaternaryHover,w[`--n-color-disabled`]=r.colorQuaternary),w[`--n-ripple-color`]=`#0000`,w[`--n-text-color`]=t,w[`--n-text-color-hover`]=t,w[`--n-text-color-pressed`]=t,w[`--n-text-color-focus`]=t,w[`--n-text-color-disabled`]=t}else w={"--n-color":m||r[_(`color`,O)],"--n-color-hover":m?X(m):r[_(`colorHover`,O)],"--n-color-pressed":m?Z(m):r[_(`colorPressed`,O)],"--n-color-focus":m?X(m):r[_(`colorFocus`,O)],"--n-color-disabled":m||r[_(`colorDisabled`,O)],"--n-ripple-color":m||r[_(`rippleColor`,O)],"--n-text-color":v||(m?r.textColorPrimary:E?r.textColorTertiary:r[_(`textColor`,O)]),"--n-text-color-hover":v||(m?r.textColorHoverPrimary:r[_(`textColorHover`,O)]),"--n-text-color-pressed":v||(m?r.textColorPressedPrimary:r[_(`textColorPressed`,O)]),"--n-text-color-focus":v||(m?r.textColorFocusPrimary:r[_(`textColorFocus`,O)]),"--n-text-color-disabled":v||(m?r.textColorDisabledPrimary:r[_(`textColorDisabled`,O)])};let k={"--n-border":`initial`,"--n-border-hover":`initial`,"--n-border-pressed":`initial`,"--n-border-focus":`initial`,"--n-border-disabled":`initial`};k=p?{"--n-border":`none`,"--n-border-hover":`none`,"--n-border-pressed":`none`,"--n-border-focus":`none`,"--n-border-disabled":`none`}:{"--n-border":r[_(`border`,O)],"--n-border-hover":r[_(`borderHover`,O)],"--n-border-pressed":r[_(`borderPressed`,O)],"--n-border-focus":r[_(`borderFocus`,O)],"--n-border-disabled":r[_(`borderDisabled`,O)]};let{[_(`height`,c)]:A,[_(`fontSize`,c)]:j,[_(`padding`,c)]:M,[_(`paddingRound`,c)]:N,[_(`iconSize`,c)]:P,[_(`borderRadius`,c)]:F,[_(`iconMargin`,c)]:L,waveOpacity:R}=r,z={"--n-width":g&&!p?A:`initial`,"--n-height":p?`initial`:A,"--n-font-size":j,"--n-padding":g||p?`initial`:h?N:M,"--n-icon-size":P,"--n-icon-margin":L,"--n-border-radius":p?`initial`:g||h?A:F};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":e,"--n-bezier-ease-out":n,"--n-ripple-duration":i,"--n-opacity-disabled":a,"--n-wave-opacity":R},C),w),k),z)}),O=c?e(`button`,j(()=>{let e=``,{dashed:n,type:r,ghost:i,text:a,color:o,round:s,circle:c,textColor:l,secondary:u,tertiary:d,quaternary:p,strong:m}=t;n&&(e+=`a`),i&&(e+=`b`),a&&(e+=`c`),s&&(e+=`d`),c&&(e+=`e`),u&&(e+=`f`),d&&(e+=`g`),p&&(e+=`h`),m&&(e+=`i`),o&&(e+=`j${H(o)}`),l&&(e+=`k${H(l)}`);let{value:h}=f;return e+=`l${h[0]}`,e+=`m${r[0]}`,e}),D,t):void 0;return{selfElRef:n,waveElRef:r,mergedClsPrefix:l,mergedFocusable:h,mergedSize:f,showBorder:a,enterPressed:i,rtlEnabled:E,handleMousedown:g,handleKeydown:C,handleBlur:w,handleKeyup:x,handleClick:v,customColorCssVars:j(()=>{let{color:e}=t;if(!e)return null;let n=X(e);return{"--n-border-color":e,"--n-border-color-hover":n,"--n-border-color-pressed":Z(e),"--n-border-color-focus":n,"--n-border-color-disabled":e}}),cssVars:c?void 0:D,themeClass:O?.themeClass,onRender:O?.onRender}},render(){let{mergedClsPrefix:e,tag:n,onRender:r}=this;r?.();let i=c(this.$slots.default,n=>n&&t(`span`,{class:`${e}-button__content`},n));return t(n,{ref:`selfElRef`,class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement===`right`&&i,t(K,{width:!0},{default:()=>c(this.$slots.icon,n=>(this.loading||this.renderIcon||n)&&t(`span`,{class:`${e}-button__icon`,style:{margin:h(this.$slots.default)?`0`:``}},t(W,null,{default:()=>this.loading?t(ie,Object.assign({clsPrefix:e,key:`loading`,class:`${e}-icon-slot`,strokeWidth:20},this.spinProps)):t(`div`,{key:`icon`,class:`${e}-icon-slot`,role:`none`},this.renderIcon?this.renderIcon():n)})))}),this.iconPlacement===`left`&&i,this.text?null:t(se,{ref:`waveElRef`,clsPrefix:e}),this.showBorder?t(`div`,{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?t(`div`,{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),he={class:`home`},ge={class:`hero`},_e={class:`hero-content`},ve={class:`hero-actions`},ye={class:`features`},be={class:`feature-icon`},xe={class:`platforms`},Se={class:`platform-grid`},Ce={class:`flow-section`},we={class:`flow-steps`},Te={class:`step-number`},Ee={class:`step-title`},De={key:0},$={key:1},Oe={key:2},ke={key:3},Ae={key:4},je={class:`step-desc`},Me={key:0},Ne={key:1},Pe={key:2},Fe={key:3},Ie={key:4},Le=L({__name:`Home`,setup(e){let t=z(),i=[{icon:`🏠`,title:`完全自托管`,desc:`运行在你自己的设备上，数据完全可控`},{icon:`💬`,title:`20+ 聊天平台`,desc:`WhatsApp、Telegram、Discord、Slack、飞书等`},{icon:`🤖`,title:`多 AI 模型`,desc:`Claude、GPT、Gemini 等主流模型支持`},{icon:`🧩`,title:`插件化架构`,desc:`76+ 插件，功能无限扩展`},{icon:`⚡`,title:`50+ 技能`,desc:`轻量级技能系统，快速添加新能力`},{icon:`🧠`,title:`记忆系统`,desc:`向量嵌入 + 混合搜索，记住每次对话`}],o=[`WhatsApp`,`Telegram`,`Discord`,`Slack`,`Signal`,`iMessage`,`Google Chat`,`Matrix`,`Teams`,`IRC`,`飞书`,`LINE`];return(e,s)=>(F(),r(`div`,he,[u(`section`,ge,[u(`div`,_e,[s[4]||=u(`h1`,null,`🦞 OpenClaw`,-1),s[5]||=u(`p`,{class:`subtitle`},`自托管个人 AI 助手平台`,-1),s[6]||=u(`p`,{class:`description`},` OpenClaw（龙虾）是一个运行在你自己设备上的 AI 管家， 它能通过 WhatsApp、Telegram、Discord 等你日常使用的聊天软件跟你对话。 完全自托管，数据在你自己的设备上。 `,-1),u(`div`,ve,[l(N(Q),{size:`large`,type:`primary`,onClick:s[0]||=e=>N(t).push(`/architecture`)},{default:T(()=>[...s[2]||=[a(` 了解架构 `,-1)]]),_:1}),l(N(Q),{size:`large`,onClick:s[1]||=e=>N(t).push(`/deploy`)},{default:T(()=>[...s[3]||=[a(` 快速开始 `,-1)]]),_:1})])])]),u(`section`,ye,[s[7]||=u(`h2`,null,`核心特性`,-1),l(N(V),{cols:3,"x-gap":20,"y-gap":20},{default:T(()=>[(F(),r(n,null,g(i,e=>l(N(te),{key:e.title},{default:T(()=>[l(N(U),{class:`feature-card`},{default:T(()=>[u(`div`,be,C(e.icon),1),u(`h3`,null,C(e.title),1),u(`p`,null,C(e.desc),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),u(`section`,xe,[s[8]||=u(`h2`,null,`支持的聊天平台`,-1),s[9]||=u(`p`,{class:`section-desc`},`通过已有的聊天工具与 AI 交互，不需要新装 App`,-1),u(`div`,Se,[(F(),r(n,null,g(o,e=>u(`div`,{class:`platform-tag`,key:e},C(e),1)),64))])]),u(`section`,Ce,[s[10]||=u(`h2`,null,`消息处理流程`,-1),u(`div`,we,[(F(),r(n,null,g(5,e=>u(`div`,{class:`flow-step`,key:e},[u(`div`,Te,C(e),1),u(`div`,Ee,[e===1?(F(),r(`span`,De,`频道接收`)):e===2?(F(),r(`span`,$,`Gateway 路由`)):e===3?(F(),r(`span`,Oe,`加载上下文`)):e===4?(F(),r(`span`,ke,`AI 处理`)):(F(),r(`span`,Ae,`发送回复`))]),u(`div`,je,[e===1?(F(),r(`span`,Me,`用户在 WhatsApp 等平台发送消息`)):e===2?(F(),r(`span`,Ne,`解析发送者、频道、会话，生成会话键`)):e===3?(F(),r(`span`,Pe,`注入 AGENTS.md、SOUL.md、记忆等`)):e===4?(F(),r(`span`,Fe,`调用 AI 模型，可能调用工具`)):(F(),r(`span`,Ie,`将回复转为平台特定格式发送`))])])),64))])]),l(N(U),{title:`技术栈`,class:`tech-card`},{default:T(()=>[l(N(V),{cols:4,"x-gap":20,"y-gap":20},{default:T(()=>[...s[11]||=[u(`div`,{class:`tech-item`},[u(`strong`,null,`主语言`),u(`span`,null,`TypeScript / Node.js (>=22)`)],-1),u(`div`,{class:`tech-item`},[u(`strong`,null,`包管理`),u(`span`,null,`pnpm (monorepo)`)],-1),u(`div`,{class:`tech-item`},[u(`strong`,null,`通信协议`),u(`span`,null,`WebSocket`)],-1),u(`div`,{class:`tech-item`},[u(`strong`,null,`数据存储`),u(`span`,null,`SQLite + sqlite-vec`)],-1),u(`div`,{class:`tech-item`},[u(`strong`,null,`验证`),u(`span`,null,`TypeBox (JSON Schema)`)],-1),u(`div`,{class:`tech-item`},[u(`strong`,null,`沙箱`),u(`span`,null,`Docker (可选)`)],-1),u(`div`,{class:`tech-item`},[u(`strong`,null,`测试`),u(`span`,null,`Vitest`)],-1),u(`div`,{class:`tech-item`},[u(`strong`,null,`协议`),u(`span`,null,`MIT 开源`)],-1)]]),_:1})]),_:1})]))}},[[`__scopeId`,`data-v-d0b7067e`]]);export{Le as default};