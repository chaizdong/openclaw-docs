import{$t as e,At as t,B as n,Bt as r,Ct as i,Dt as a,F as o,Ft as s,Ht as c,It as l,J as u,Jt as d,K as f,Kt as p,Lt as m,M as h,Mt as g,Nt as _,Q as v,Qt as y,Rt as b,Tt as x,Ut as S,V as ee,Vt as C,Y as w,Yt as T,Z as E,Zt as D,_t as O,a as k,an as A,at as te,c as j,cn as M,dn as N,dt as P,en as F,et as I,ft as L,gt as R,ht as z,jt as B,ln as V,mt as H,o as ne,ot as U,qt as W,t as G,tn as K,z as re}from"./_plugin-vue_export-helper-CtX_x4q1.js";import{t as q}from"./flatten-DadFbFrG.js";import{a as ie,i as ae,n as J,o as oe,r as se,t as ce}from"./render-CfeVGll4.js";import{n as le,t as Y}from"./Grid-B6PsY0lQ.js";import{t as X}from"./Code-DkMOxQr-.js";import{n as ue,t as Z}from"./Card-BKFf-BiJ.js";var de=J(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[J(`&::-webkit-scrollbar`,{width:0,height:0})]),Q=b({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=A(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=v();return de.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:se,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return r(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}});function fe(e,t=[],n){let r={};return Object.getOwnPropertyNames(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),Object.assign(r,n)}var pe=/\s/;function me(e){for(var t=e.length;t--&&pe.test(e.charAt(t)););return t}var $=/^\s+/;function he(e){return e&&e.slice(0,me(e)+1).replace($,``)}var ge=NaN,_e=/^[-+]0x[0-9a-f]+$/i,ve=/^0b[01]+$/i,ye=/^0o[0-7]+$/i,be=parseInt;function xe(e){if(typeof e==`number`)return e;if(o(e))return ge;if(h(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=h(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=he(e);var n=ve.test(e);return n||ye.test(e)?be(e.slice(2),n?2:8):_e.test(e)?ge:+e}var Se=function(){return re.Date.now()},Ce=`Expected a function`,we=Math.max,Te=Math.min;function Ee(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,f=!0;if(typeof e!=`function`)throw TypeError(Ce);t=xe(t)||0,h(n)&&(u=!!n.leading,d=`maxWait`in n,a=d?we(xe(n.maxWait)||0,t):a,f=`trailing`in n?!!n.trailing:f);function p(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n),o}function m(e){return l=e,s=setTimeout(v,t),u?p(e):o}function g(e){var n=e-c,r=e-l,i=t-n;return d?Te(i,a-r):i}function _(e){var n=e-c,r=e-l;return c===void 0||n>=t||n<0||d&&r>=a}function v(){var e=Se();if(_(e))return y(e);s=setTimeout(v,g(e))}function y(e){return s=void 0,f&&r?p(e):(r=i=void 0,o)}function b(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0}function x(){return s===void 0?o:y(Se())}function S(){var e=Se(),n=_(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return m(c);if(d)return clearTimeout(s),s=setTimeout(v,t),p(c)}return s===void 0&&(s=setTimeout(v,t)),o}return S.cancel=b,S.flush=x,S}var De=`Expected a function`;function Oe(e,t,n){var r=!0,i=!0;if(typeof e!=`function`)throw TypeError(De);return h(n)&&(r=`leading`in n?!!n.leading:r,i=`trailing`in n?!!n.trailing:i),Ee(e,t,{leading:r,maxWait:t,trailing:i})}var ke=b({name:`Add`,render(){return r(`svg`,{width:`512`,height:`512`,viewBox:`0 0 512 512`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},r(`path`,{d:`M256 112V400M400 256H112`,stroke:`currentColor`,"stroke-width":`32`,"stroke-linecap":`round`,"stroke-linejoin":`round`}))}}),Ae={tabFontSizeSmall:`14px`,tabFontSizeMedium:`14px`,tabFontSizeLarge:`16px`,tabGapSmallLine:`36px`,tabGapMediumLine:`36px`,tabGapLargeLine:`36px`,tabGapSmallLineVertical:`8px`,tabGapMediumLineVertical:`8px`,tabGapLargeLineVertical:`8px`,tabPaddingSmallLine:`6px 0`,tabPaddingMediumLine:`10px 0`,tabPaddingLargeLine:`14px 0`,tabPaddingVerticalSmallLine:`6px 12px`,tabPaddingVerticalMediumLine:`8px 16px`,tabPaddingVerticalLargeLine:`10px 20px`,tabGapSmallBar:`36px`,tabGapMediumBar:`36px`,tabGapLargeBar:`36px`,tabGapSmallBarVertical:`8px`,tabGapMediumBarVertical:`8px`,tabGapLargeBarVertical:`8px`,tabPaddingSmallBar:`4px 0`,tabPaddingMediumBar:`6px 0`,tabPaddingLargeBar:`10px 0`,tabPaddingVerticalSmallBar:`6px 12px`,tabPaddingVerticalMediumBar:`8px 16px`,tabPaddingVerticalLargeBar:`10px 20px`,tabGapSmallCard:`4px`,tabGapMediumCard:`4px`,tabGapLargeCard:`4px`,tabGapSmallCardVertical:`4px`,tabGapMediumCardVertical:`4px`,tabGapLargeCardVertical:`4px`,tabPaddingSmallCard:`8px 16px`,tabPaddingMediumCard:`10px 20px`,tabPaddingLargeCard:`12px 24px`,tabPaddingSmallSegment:`4px 0`,tabPaddingMediumSegment:`6px 0`,tabPaddingLargeSegment:`8px 0`,tabPaddingVerticalLargeSegment:`0 8px`,tabPaddingVerticalSmallCard:`8px 12px`,tabPaddingVerticalMediumCard:`10px 16px`,tabPaddingVerticalLargeCard:`12px 20px`,tabPaddingVerticalSmallSegment:`0 4px`,tabPaddingVerticalMediumSegment:`0 6px`,tabGapSmallSegment:`0`,tabGapMediumSegment:`0`,tabGapLargeSegment:`0`,tabGapSmallSegmentVertical:`0`,tabGapMediumSegmentVertical:`0`,tabGapLargeSegmentVertical:`0`,panePaddingSmall:`8px 0 0 0`,panePaddingMedium:`12px 0 0 0`,panePaddingLarge:`16px 0 0 0`,closeSize:`18px`,closeIconSize:`14px`};function je(e){let{textColor2:t,primaryColor:n,textColorDisabled:r,closeIconColor:i,closeIconColorHover:a,closeIconColorPressed:o,closeColorHover:s,closeColorPressed:c,tabColor:l,baseColor:u,dividerColor:d,fontWeight:f,textColor1:p,borderRadius:m,fontSize:h,fontWeightStrong:g}=e;return Object.assign(Object.assign({},Ae),{colorSegment:l,tabFontSizeCard:h,tabTextColorLine:p,tabTextColorActiveLine:n,tabTextColorHoverLine:n,tabTextColorDisabledLine:r,tabTextColorSegment:p,tabTextColorActiveSegment:t,tabTextColorHoverSegment:t,tabTextColorDisabledSegment:r,tabTextColorBar:p,tabTextColorActiveBar:n,tabTextColorHoverBar:n,tabTextColorDisabledBar:r,tabTextColorCard:p,tabTextColorHoverCard:p,tabTextColorActiveCard:n,tabTextColorDisabledCard:r,barColor:n,closeIconColor:i,closeIconColorHover:a,closeIconColorPressed:o,closeColorHover:s,closeColorPressed:c,closeBorderRadius:m,tabColor:l,tabColorSegment:u,tabBorderColor:d,tabFontWeightActive:f,tabFontWeight:f,tabBorderRadius:m,paneTextColor:t,fontWeightStrong:g})}var Me={name:`Tabs`,common:k,self:je},Ne=I(`n-tabs`),Pe={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Fe=b({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:Pe,slots:Object,setup(e){let t=C(Ne,null);return t||w(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return r(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Ie=b({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},fe(Pe,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=C(Ne);return{trigger:d,mergedClosable:B(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:i,label:o,tab:s,value:l,mergedClosable:u,trigger:d,$slots:{default:f}}=this,p=o??s;return r(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?r(`div`,{class:`${t}-tabs-tab-pad`}):null,r(`div`,Object.assign({key:n,"data-name":n,"data-disabled":i?!0:void 0},c({class:[`${t}-tabs-tab`,l===n&&`${t}-tabs-tab--active`,i&&`${t}-tabs-tab--disabled`,u&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:d===`click`?this.activateTab:void 0,onMouseenter:d===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),r(`span`,{class:`${t}-tabs-tab__label`},e?r(a,null,r(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),r(ne,{clsPrefix:t},{default:()=>r(ke,null)})):f?f():typeof p==`object`?p:ce(p??n)),u&&this.type===`card`?r(ue,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:i}):null))}}),Le=L(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[z(`segment-type`,[L(`tabs-rail`,[P(`&.transition-disabled`,[L(`tabs-capsule`,`
 transition: none;
 `)])])]),z(`top`,[L(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),z(`left`,[L(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),z(`left, right`,`
 flex-direction: row;
 `,[L(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),L(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),z(`right`,`
 flex-direction: row-reverse;
 `,[L(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),L(`tabs-bar`,`
 left: 0;
 `)]),z(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[L(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),L(`tabs-bar`,`
 top: 0;
 `)]),L(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[L(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),L(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[L(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[z(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),P(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),z(`flex`,[L(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[L(`tabs-wrapper`,`
 width: 100%;
 `,[L(`tabs-tab`,`
 margin-right: 0;
 `)])])]),L(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[H(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),H(`prefix`,`padding-right: 16px;`),H(`suffix`,`padding-left: 16px;`)]),z(`top, bottom`,[P(`>`,[L(`tabs-nav`,[L(`tabs-nav-scroll-wrapper`,[P(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),P(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),z(`shadow-start`,[P(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),z(`shadow-end`,[P(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),z(`left, right`,[L(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),P(`>`,[L(`tabs-nav`,[L(`tabs-nav-scroll-wrapper`,[P(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),P(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),z(`shadow-start`,[P(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),z(`shadow-end`,[P(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),L(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[L(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[P(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),P(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),L(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),L(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),L(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),L(`tabs-tab`,`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[z(`disabled`,{cursor:`not-allowed`}),H(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),H(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),L(`tabs-bar`,`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[P(`&.transition-disabled`,`
 transition: none;
 `),z(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),L(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),L(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[P(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),P(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),P(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),P(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),P(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),L(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),z(`line-type, bar-type`,[L(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[P(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),z(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),z(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),L(`tabs-nav`,[z(`line-type`,[z(`top`,[H(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),L(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),L(`tabs-bar`,`
 bottom: -1px;
 `)]),z(`left`,[H(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),L(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),L(`tabs-bar`,`
 right: -1px;
 `)]),z(`right`,[H(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),L(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),L(`tabs-bar`,`
 left: -1px;
 `)]),z(`bottom`,[H(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),L(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),L(`tabs-bar`,`
 top: -1px;
 `)]),H(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),L(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),L(`tabs-bar`,`
 border-radius: 0;
 `)]),z(`card-type`,[H(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),L(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),L(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),L(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[z(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[H(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),R(`disabled`,[P(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),z(`closable`,`padding-right: 8px;`),z(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),z(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),z(`left, right`,`
 flex-direction: column; 
 `,[H(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),L(`tabs-wrapper`,`
 flex-direction: column;
 `),L(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[L(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),z(`top`,[z(`card-type`,[L(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),H(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),L(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[z(`active`,`
 border-bottom: 1px solid #0000;
 `)]),L(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),L(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),z(`left`,[z(`card-type`,[L(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),H(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),L(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[z(`active`,`
 border-right: 1px solid #0000;
 `)]),L(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),L(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),z(`right`,[z(`card-type`,[L(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),H(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),L(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[z(`active`,`
 border-left: 1px solid #0000;
 `)]),L(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),L(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),z(`bottom`,[z(`card-type`,[L(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),H(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),L(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[z(`active`,`
 border-top: 1px solid #0000;
 `)]),L(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),L(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Re=Oe,ze=b({name:`Tabs`,props:Object.assign(Object.assign({},j.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(t,{slots:r}){let{mergedClsPrefixRef:i,inlineThemeDisabled:a,mergedComponentPropsRef:o}=ee(t),s=j(`Tabs`,`-tabs`,Le,Me,t,i),c=A(null),l=A(null),f=A(null),m=A(null),h=A(null),g=A(null),_=A(!0),v=A(!0),b=ae(t,[`labelSize`,`size`]),x=B(()=>b.value?b.value:o?.value?.Tabs?.size||`medium`),C=ae(t,[`activeName`,`value`]),w=A(C.value??t.defaultValue??(r.default?q(r.default())[0]?.props?.name:null)),T=ie(C,w),E={id:0},D=B(()=>{if(!(!t.justifyContent||t.type===`card`))return{display:`flex`,justifyContent:t.justifyContent}});y(T,()=>{E.id=0,I(),L()});function k(){let{value:e}=T;return e===null?null:c.value?.querySelector(`[data-name="${e}"]`)}function N(e){if(t.type===`card`)return;let{value:n}=l;if(!n)return;let r=n.style.opacity===`0`;if(e){let a=`${i.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=t;if(e.dataset.disabled===`true`?n.classList.add(a):n.classList.remove(a),[`top`,`bottom`].includes(s)){if(F([`top`,`maxHeight`,`height`]),typeof o==`number`&&e.offsetWidth>=o){let t=Math.floor((e.offsetWidth-o)/2)+e.offsetLeft;n.style.left=`${t}px`,n.style.maxWidth=`${o}px`}else n.style.left=`${e.offsetLeft}px`,n.style.maxWidth=`${e.offsetWidth}px`;n.style.width=`8192px`,r&&(n.style.transition=`none`),n.offsetWidth,r&&(n.style.transition=``,n.style.opacity=`1`)}else{if(F([`left`,`maxWidth`,`width`]),typeof o==`number`&&e.offsetHeight>=o){let t=Math.floor((e.offsetHeight-o)/2)+e.offsetTop;n.style.top=`${t}px`,n.style.maxHeight=`${o}px`}else n.style.top=`${e.offsetTop}px`,n.style.maxHeight=`${e.offsetHeight}px`;n.style.height=`8192px`,r&&(n.style.transition=`none`),n.offsetHeight,r&&(n.style.transition=``,n.style.opacity=`1`)}}}function P(){if(t.type===`card`)return;let{value:e}=l;e&&(e.style.opacity=`0`)}function F(e){let{value:t}=l;if(t)for(let n of e)t.style[n]=``}function I(){if(t.type===`card`)return;let e=k();e?N(e):P()}function L(){let e=h.value?.$el;if(!e)return;let t=k();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let R=A(null),z=0,V=null;function H(e){let t=R.value;if(t){z=e.getBoundingClientRect().height;let n=`${z}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};V?(r(),V(),V=null):V=r}}function ne(e){let t=R.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(z,n)}px`};V?(V(),V=null,r()):V=r}}function W(){let e=R.value;if(e){e.style.maxHeight=``,e.style.height=``;let{paneWrapperStyle:n}=t;if(typeof n==`string`)e.style.cssText=n;else if(n){let{maxHeight:t,height:r}=n;t!==void 0&&(e.style.maxHeight=t),r!==void 0&&(e.style.height=r)}}}let G={value:[]},K=A(`next`);function re(e){let t=T.value,n=`next`;for(let r of G.value){if(r===t)break;if(r===e){n=`prev`;break}}K.value=n,J(e)}function J(e){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=t;n&&u(n,e),r&&u(r,e),i&&u(i,e),w.value=e}function se(e){let{onClose:n}=t;n&&u(n,e)}let ce=!0;function le(){let{value:e}=l;if(!e)return;ce||=!1;let t=`transition-disabled`;e.classList.add(t),I(),e.classList.remove(t)}let Y=A(null);function X({transitionDisabled:e}){let t=c.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=k();n&&Y.value&&(Y.value.style.width=`${n.offsetWidth}px`,Y.value.style.height=`${n.offsetHeight}px`,Y.value.style.transform=`translateX(${n.offsetLeft-te(getComputedStyle(t).paddingLeft)}px)`,e&&Y.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}y([T],()=>{t.type===`segment`&&S(()=>{X({transitionDisabled:!1})})}),p(()=>{t.type===`segment`&&X({transitionDisabled:!0})});let ue=0;function Z(e){if(e.contentRect.width===0&&e.contentRect.height===0||ue===e.contentRect.width)return;ue=e.contentRect.width;let{type:n}=t;if((n===`line`||n===`bar`)&&(ce||t.justifyContent?.startsWith(`space`))&&le(),n!==`segment`){let{placement:e}=t;$((e===`top`||e===`bottom`?h.value?.$el:g.value)||null)}}let de=Re(Z,64);y([()=>t.justifyContent,()=>t.size],()=>{S(()=>{let{type:e}=t;(e===`line`||e===`bar`)&&le()})});let Q=A(!1);function fe(e){let{target:n,contentRect:{width:r,height:i}}=e,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=t;if(!Q.value)s===`top`||s===`bottom`?a<r&&(Q.value=!0):o<i&&(Q.value=!0);else{let{value:e}=m;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(Q.value=!1):o-i>e.$el.offsetHeight&&(Q.value=!1)}$(h.value?.$el||null)}let pe=Re(fe,64);function me(){let{onAdd:e}=t;e&&e(),S(()=>{let e=k(),{value:t}=h;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function $(e){if(!e)return;let{placement:n}=t;if(n===`top`||n===`bottom`){let{scrollLeft:t,scrollWidth:n,offsetWidth:r}=e;_.value=t<=0,v.value=t+r>=n}else{let{scrollTop:t,scrollHeight:n,offsetHeight:r}=e;_.value=t<=0,v.value=t+r>=n}}let he=Re(e=>{$(e.target)},64);d(Ne,{triggerRef:M(t,`trigger`),tabStyleRef:M(t,`tabStyle`),tabClassRef:M(t,`tabClass`),addTabStyleRef:M(t,`addTabStyle`),addTabClassRef:M(t,`addTabClass`),paneClassRef:M(t,`paneClass`),paneStyleRef:M(t,`paneStyle`),mergedClsPrefixRef:i,typeRef:M(t,`type`),closableRef:M(t,`closable`),valueRef:T,tabChangeIdRef:E,onBeforeLeaveRef:M(t,`onBeforeLeave`),activateTab:re,handleClose:se,handleAdd:me}),oe(()=>{I(),L()}),e(()=>{let{value:e}=f;if(!e)return;let{value:t}=i,n=`${t}-tabs-nav-scroll-wrapper--shadow-start`,r=`${t}-tabs-nav-scroll-wrapper--shadow-end`;_.value?e.classList.remove(n):e.classList.add(n),v.value?e.classList.remove(r):e.classList.add(r)});let ge={syncBarPosition:()=>{I()}},_e=()=>{X({transitionDisabled:!0})},ve=B(()=>{let{value:e}=x,{type:n}=t,r=`${e}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:c,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:v,closeIconSize:y,closeColorHover:b,closeColorPressed:S,closeBorderRadius:ee,[O(`panePadding`,e)]:C,[O(`tabPadding`,r)]:w,[O(`tabPaddingVertical`,r)]:T,[O(`tabGap`,r)]:E,[O(`tabGap`,`${r}Vertical`)]:D,[O(`tabTextColor`,n)]:k,[O(`tabTextColorActive`,n)]:A,[O(`tabTextColorHover`,n)]:te,[O(`tabTextColorDisabled`,n)]:j,[O(`tabFontSize`,e)]:M},common:{cubicBezierEaseInOut:N}}=s.value;return{"--n-bezier":N,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":M,"--n-tab-text-color":k,"--n-tab-text-color-active":A,"--n-tab-text-color-disabled":j,"--n-tab-text-color-hover":te,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":v,"--n-close-icon-size":y,"--n-close-color-hover":b,"--n-close-color-pressed":S,"--n-close-border-radius":ee,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":c,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":w,"--n-tab-padding-vertical":T,"--n-tab-gap":E,"--n-tab-gap-vertical":D,"--n-pane-padding-left":U(C,`left`),"--n-pane-padding-right":U(C,`right`),"--n-pane-padding-top":U(C,`top`),"--n-pane-padding-bottom":U(C,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),ye=a?n(`tabs`,B(()=>`${x.value[0]}${t.type[0]}`),ve,t):void 0;return Object.assign({mergedClsPrefix:i,mergedValue:T,renderedNames:new Set,segmentCapsuleElRef:Y,tabsPaneWrapperRef:R,tabsElRef:c,barElRef:l,addTabInstRef:m,xScrollInstRef:h,scrollWrapperElRef:f,addTabFixed:Q,tabWrapperStyle:D,handleNavResize:de,mergedSize:x,handleScroll:he,handleTabsResize:pe,cssVars:a?void 0:ve,themeClass:ye?.themeClass,animationDirection:K,renderNameListRef:G,yScrollElRef:g,handleSegmentResize:_e,onAnimationBeforeLeave:H,onAnimationEnter:ne,onAnimationAfterEnter:W,onRender:ye?.onRender},ge)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:i,addable:a,mergedSize:o,renderNameListRef:s,onRender:c,paneWrapperClass:l,paneWrapperStyle:u,$slots:{default:d,prefix:p,suffix:m}}=this;c?.();let h=d?q(d()).filter(e=>e.type.__TAB_PANE__===!0):[],g=d?q(d()).filter(e=>e.type.__TAB__===!0):[],_=!g.length,v=t===`card`,y=t===`segment`,b=!v&&!y&&this.justifyContent;s.value=[];let x=()=>{let t=r(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},b?null:r(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),_?h.map((e,t)=>(s.value.push(e.props.name),Ue(r(Ie,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!b||b===`center`||b===`start`||b===`end`)}),e.children?{default:e.children.tab}:void 0)))):g.map((e,t)=>(s.value.push(e.props.name),Ue(t!==0&&!b?He(e):e))),!i&&a&&v?Ve(a,(_?h.length:g.length)!==0):null,b?null:r(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return r(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},v&&a?r(E,{onResize:this.handleTabsResize},{default:()=>t}):t,v?r(`div`,{class:`${e}-tabs-pad`}):null,v?null:r(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},S=y?`top`:n;return r(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${o}-size`,b&&`${e}-tabs--flex`,`${e}-tabs--${S}`],style:this.cssVars},r(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${S}`,`${e}-tabs-nav`]},f(p,t=>t&&r(`div`,{class:`${e}-tabs-nav__prefix`},t)),y?r(E,{onResize:this.handleSegmentResize},{default:()=>r(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},r(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},r(`div`,{class:`${e}-tabs-wrapper`},r(`div`,{class:`${e}-tabs-tab`}))),_?h.map((e,t)=>(s.value.push(e.props.name),r(Ie,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):g.map((e,t)=>(s.value.push(e.props.name),t===0?e:He(e))))}):r(E,{onResize:this.handleNavResize},{default:()=>r(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(S)?r(Q,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:x}):r(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},x()))}),i&&a&&v?Ve(a,!0):null,f(m,t=>t&&r(`div`,{class:`${e}-tabs-nav__suffix`},t))),_&&(this.animated&&(S===`top`||S===`bottom`)?r(`div`,{ref:`tabsPaneWrapperRef`,style:u,class:[`${e}-tabs-pane-wrapper`,l]},Be(h,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Be(h,this.mergedValue,this.renderedNames)))}});function Be(e,t,n,a,o,s,c){let l=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,s=t===r;if(e.key!==void 0&&(e.key=r),s||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);l.push(t?K(e,[[x,s]]):e)}}),c?r(i,{name:`${c}-transition`,onBeforeLeave:a,onEnter:o,onAfterEnter:s},{default:()=>l}):l}function Ve(e,t){return r(Ie,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function He(e){let n=t(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function Ue(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var We={class:`plugins`},Ge={class:`plugin-type-card`},Ke={class:`type-icon`},qe={class:`type-desc`},Je={class:`type-examples`},Ye=`---
name: weather-check
description: 查询天气预报
metadata:
  openclaw:
    requires:
      bins: ["curl"]
      env: ["WEATHER_API_KEY"]
---

# 天气查询技能
当用户询问天气时，调用天气 API 获取信息...
`,Xe=G({__name:`Plugins`,setup(e){let t=[{type:`频道插件`,icon:`📱`,examples:[`discord`,`telegram`,`slack`,`whatsapp`],desc:`聊天平台集成`},{type:`模型提供者`,icon:`🤖`,examples:[`anthropic`,`openai`,`google`],desc:`AI 模型接入`},{type:`记忆后端`,icon:`🧠`,examples:[`memory-core`,`memory-lancedb`],desc:`记忆存储引擎`},{type:`语音引擎`,icon:`🔊`,examples:[`elevenlabs`,`microsoft-speech`],desc:`文字转语音`},{type:`特殊功能`,icon:`⚡`,examples:[`copilot-proxy`,`device-pair`],desc:`特定能力扩展`}],n=[{hook:`gateway:boot`,when:`Gateway 启动时`,usage:`初始化资源`},{hook:`agent:before-start`,when:`Agent 开始处理前`,usage:`注入上下文`},{hook:`llm:before-call`,when:`调用 AI 模型前`,usage:`修改提示词`},{hook:`message:before-send`,when:`发送消息前`,usage:`过滤/转换内容`},{hook:`tool:after-call`,when:`工具执行后`,usage:`记录日志`}];return(e,r)=>{let i=D(`n-tag`),o=D(`n-table`);return W(),s(`div`,We,[m(V(Z),{title:`插件系统概述`},{default:F(()=>[...r[0]||=[g(`p`,{class:`desc`},` OpenClaw 的大部分功能都是通过插件实现的，核心只提供框架。 extensions/ 目录下有 76 个内置插件。 `,-1)]]),_:1}),m(V(Z),{title:`插件类型`,class:`types-card`},{default:F(()=>[m(V(Y),{cols:5,"x-gap":15,"y-gap":15},{default:F(()=>[(W(),s(a,null,T(t,e=>m(V(le),{key:e.type},{default:F(()=>[g(`div`,Ge,[g(`div`,Ke,N(e.icon),1),g(`h4`,null,N(e.type),1),g(`p`,qe,N(e.desc),1),g(`div`,Je,[(W(!0),s(a,null,T(e.examples,e=>(W(),_(i,{key:e,size:`small`,bordered:!1,style:{"margin-right":`4px`,"margin-bottom":`4px`}},{default:F(()=>[l(N(e),1)]),_:2},1024))),128))])])]),_:2},1024)),64))]),_:1})]),_:1}),m(V(Z),{title:`钩子系统`,class:`hooks-card`},{default:F(()=>[m(o,{bordered:!1,"single-line":!1},{default:F(()=>[r[1]||=g(`thead`,null,[g(`tr`,null,[g(`th`,null,`钩子`),g(`th`,null,`触发时机`),g(`th`,null,`典型用途`)])],-1),g(`tbody`,null,[(W(),s(a,null,T(n,e=>g(`tr`,{key:e.hook},[g(`td`,null,[g(`code`,null,N(e.hook),1)]),g(`td`,null,N(e.when),1),g(`td`,null,N(e.usage),1)])),64))])]),_:1})]),_:1}),m(V(Z),{title:`技能系统（Skills）`,class:`skills-card`},{default:F(()=>[m(V(ze),{type:`card`,animated:``},{default:F(()=>[m(V(Fe),{name:`intro`,tab:`介绍`},{default:F(()=>[...r[2]||=[g(`p`,null,` 技能是比插件更轻量的扩展方式，本质是一个带元数据的 Markdown 文件。 目前有 50+ 技能可供选择。 `,-1)]]),_:1}),m(V(Fe),{name:`example`,tab:`示例`},{default:F(()=>[m(V(X),{code:Ye,language:`markdown`})]),_:1})]),_:1})]),_:1})])}}},[[`__scopeId`,`data-v-08448a88`]]);export{Xe as default};