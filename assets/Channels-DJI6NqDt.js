import{B as e,Bt as t,Dt as n,Ft as r,It as i,J as a,Jt as o,K as s,Lt as c,Mt as l,Rt as u,V as d,Yt as f,Zt as p,_t as m,a as h,an as g,c as _,cn as v,d as y,dn as b,dt as x,en as S,et as C,ft as w,gt as T,ht as E,jt as D,ln as O,mt as k,ot as A,qt as j,rt as M,t as N}from"./_plugin-vue_export-helper-CtX_x4q1.js";import{t as P}from"./color-to-class-DNAdiWtP.js";import{n as F,t as I}from"./Card-BKFf-BiJ.js";import{t as L}from"./Table-C2234hep.js";var R={closeIconSizeTiny:`12px`,closeIconSizeSmall:`12px`,closeIconSizeMedium:`14px`,closeIconSizeLarge:`14px`,closeSizeTiny:`16px`,closeSizeSmall:`16px`,closeSizeMedium:`18px`,closeSizeLarge:`18px`,padding:`0 7px`,closeMargin:`0 0 0 4px`};function z(e){let{textColor2:t,primaryColorHover:n,primaryColorPressed:r,primaryColor:i,infoColor:a,successColor:o,warningColor:s,errorColor:c,baseColor:l,borderColor:u,opacityDisabled:d,tagColor:f,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,borderRadiusSmall:g,fontSizeMini:_,fontSizeTiny:v,fontSizeSmall:y,fontSizeMedium:b,heightMini:x,heightTiny:S,heightSmall:C,heightMedium:w,closeColorHover:T,closeColorPressed:E,buttonColor2Hover:D,buttonColor2Pressed:O,fontWeightStrong:k}=e;return Object.assign(Object.assign({},R),{closeBorderRadius:g,heightTiny:x,heightSmall:S,heightMedium:C,heightLarge:w,borderRadius:g,opacityDisabled:d,fontSizeTiny:_,fontSizeSmall:v,fontSizeMedium:y,fontSizeLarge:b,fontWeightStrong:k,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:l,colorCheckable:`#0000`,colorHoverCheckable:D,colorPressedCheckable:O,colorChecked:i,colorCheckedHover:n,colorCheckedPressed:r,border:`1px solid ${u}`,textColor:t,color:f,colorBordered:`rgb(250, 250, 252)`,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,closeColorHover:T,closeColorPressed:E,borderPrimary:`1px solid ${M(i,{alpha:.3})}`,textColorPrimary:i,colorPrimary:M(i,{alpha:.12}),colorBorderedPrimary:M(i,{alpha:.1}),closeIconColorPrimary:i,closeIconColorHoverPrimary:i,closeIconColorPressedPrimary:i,closeColorHoverPrimary:M(i,{alpha:.12}),closeColorPressedPrimary:M(i,{alpha:.18}),borderInfo:`1px solid ${M(a,{alpha:.3})}`,textColorInfo:a,colorInfo:M(a,{alpha:.12}),colorBorderedInfo:M(a,{alpha:.1}),closeIconColorInfo:a,closeIconColorHoverInfo:a,closeIconColorPressedInfo:a,closeColorHoverInfo:M(a,{alpha:.12}),closeColorPressedInfo:M(a,{alpha:.18}),borderSuccess:`1px solid ${M(o,{alpha:.3})}`,textColorSuccess:o,colorSuccess:M(o,{alpha:.12}),colorBorderedSuccess:M(o,{alpha:.1}),closeIconColorSuccess:o,closeIconColorHoverSuccess:o,closeIconColorPressedSuccess:o,closeColorHoverSuccess:M(o,{alpha:.12}),closeColorPressedSuccess:M(o,{alpha:.18}),borderWarning:`1px solid ${M(s,{alpha:.35})}`,textColorWarning:s,colorWarning:M(s,{alpha:.15}),colorBorderedWarning:M(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:M(s,{alpha:.12}),closeColorPressedWarning:M(s,{alpha:.18}),borderError:`1px solid ${M(c,{alpha:.23})}`,textColorError:c,colorError:M(c,{alpha:.1}),colorBorderedError:M(c,{alpha:.08}),closeIconColorError:c,closeIconColorHoverError:c,closeIconColorPressedError:c,closeColorHoverError:M(c,{alpha:.12}),closeColorPressedError:M(c,{alpha:.18})})}var B={name:`Tag`,common:h,self:z},V={color:Object,type:{type:String,default:`default`},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},H=w(`tag`,`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[E(`strong`,`
 font-weight: var(--n-font-weight-strong);
 `),k(`border`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),k(`icon`,`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),k(`avatar`,`
 display: flex;
 margin: 0 6px 0 0;
 `),k(`close`,`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),E(`round`,`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[k(`icon`,`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),k(`avatar`,`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),E(`closable`,`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),E(`icon, avatar`,[E(`round`,`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),E(`disabled`,`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),E(`checkable`,`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[T(`disabled`,[x(`&:hover`,`background-color: var(--n-color-hover-checkable);`,[T(`checked`,`color: var(--n-text-color-hover-checkable);`)]),x(`&:active`,`background-color: var(--n-color-pressed-checkable);`,[T(`checked`,`color: var(--n-text-color-pressed-checkable);`)])]),E(`checked`,`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[T(`disabled`,[x(`&:hover`,`background-color: var(--n-color-checked-hover);`),x(`&:active`,`background-color: var(--n-color-checked-pressed);`)])])])]),U=Object.assign(Object.assign(Object.assign({},_.props),V),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),W=C(`n-tag`),G=u({name:`Tag`,props:U,slots:Object,setup(t){let n=g(null),{mergedBorderedRef:r,mergedClsPrefixRef:i,inlineThemeDisabled:s,mergedRtlRef:c,mergedComponentPropsRef:l}=d(t),u=D(()=>t.size||l?.value?.Tag?.size||`medium`),f=_(`Tag`,`-tag`,H,B,t,i);o(W,{roundRef:v(t,`round`)});function p(){if(!t.disabled&&t.checkable){let{checked:e,onCheckedChange:n,onUpdateChecked:r,"onUpdate:checked":i}=t;r&&r(!e),i&&i(!e),n&&n(!e)}}function h(e){if(t.triggerClickOnClose||e.stopPropagation(),!t.disabled){let{onClose:n}=t;n&&a(n,e)}}let b={setTextContent(e){let{value:t}=n;t&&(t.textContent=e)}},x=y(`Tag`,c,i),S=D(()=>{let{type:e,color:{color:n,textColor:i}={}}=t,a=u.value,{common:{cubicBezierEaseInOut:o},self:{padding:s,closeMargin:c,borderRadius:l,opacityDisabled:d,textColorCheckable:p,textColorHoverCheckable:h,textColorPressedCheckable:g,textColorChecked:_,colorCheckable:v,colorHoverCheckable:y,colorPressedCheckable:b,colorChecked:x,colorCheckedHover:S,colorCheckedPressed:C,closeBorderRadius:w,fontWeightStrong:T,[m(`colorBordered`,e)]:E,[m(`closeSize`,a)]:D,[m(`closeIconSize`,a)]:O,[m(`fontSize`,a)]:k,[m(`height`,a)]:j,[m(`color`,e)]:M,[m(`textColor`,e)]:N,[m(`border`,e)]:P,[m(`closeIconColor`,e)]:F,[m(`closeIconColorHover`,e)]:I,[m(`closeIconColorPressed`,e)]:L,[m(`closeColorHover`,e)]:R,[m(`closeColorPressed`,e)]:z}}=f.value,B=A(c);return{"--n-font-weight-strong":T,"--n-avatar-size-override":`calc(${j} - 8px)`,"--n-bezier":o,"--n-border-radius":l,"--n-border":P,"--n-close-icon-size":O,"--n-close-color-pressed":z,"--n-close-color-hover":R,"--n-close-border-radius":w,"--n-close-icon-color":F,"--n-close-icon-color-hover":I,"--n-close-icon-color-pressed":L,"--n-close-icon-color-disabled":F,"--n-close-margin-top":B.top,"--n-close-margin-right":B.right,"--n-close-margin-bottom":B.bottom,"--n-close-margin-left":B.left,"--n-close-size":D,"--n-color":n||(r.value?E:M),"--n-color-checkable":v,"--n-color-checked":x,"--n-color-checked-hover":S,"--n-color-checked-pressed":C,"--n-color-hover-checkable":y,"--n-color-pressed-checkable":b,"--n-font-size":k,"--n-height":j,"--n-opacity-disabled":d,"--n-padding":s,"--n-text-color":i||N,"--n-text-color-checkable":p,"--n-text-color-checked":_,"--n-text-color-hover-checkable":h,"--n-text-color-pressed-checkable":g}}),C=s?e(`tag`,D(()=>{let e=``,{type:n,color:{color:i,textColor:a}={}}=t;return e+=n[0],e+=u.value[0],i&&(e+=`a${P(i)}`),a&&(e+=`b${P(a)}`),r.value&&(e+=`c`),e}),S,t):void 0;return Object.assign(Object.assign({},b),{rtlEnabled:x,mergedClsPrefix:i,contentRef:n,mergedBordered:r,handleClick:p,handleCloseClick:h,cssVars:s?void 0:S,themeClass:C?.themeClass,onRender:C?.onRender})},render(){var e;let{mergedClsPrefix:n,rtlEnabled:r,closable:i,color:{borderColor:a}={},round:o,onRender:c,$slots:l}=this;c?.();let u=s(l.avatar,e=>e&&t(`div`,{class:`${n}-tag__avatar`},e)),d=s(l.icon,e=>e&&t(`div`,{class:`${n}-tag__icon`},e));return t(`div`,{class:[`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:r,[`${n}-tag--strong`]:this.strong,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:o,[`${n}-tag--avatar`]:u,[`${n}-tag--icon`]:d,[`${n}-tag--closable`]:i}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},d||u,t(`span`,{class:`${n}-tag__content`,ref:`contentRef`},(e=this.$slots).default?.call(e)),!this.checkable&&i?t(F,{clsPrefix:n,class:`${n}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:o,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?t(`div`,{class:`${n}-tag__border`,style:{borderColor:a}}):null)}}),K={class:`channels`},q={class:`interface-item`},J=N({__name:`Channels`,setup(e){let t=[{name:`WhatsApp`,lib:`Baileys`,auth:`扫码配对`},{name:`Telegram`,lib:`grammY`,auth:`Bot Token`},{name:`Discord`,lib:`discord.js`,auth:`Bot Token`},{name:`Slack`,lib:`@slack/bolt`,auth:`OAuth / Token`},{name:`Signal`,lib:`signal-cli`,auth:`手机号`},{name:`iMessage`,lib:`BlueBubbles`,auth:`macOS 桥接`},{name:`飞书`,lib:`Feishu SDK`,auth:`App ID`},{name:`LINE`,lib:`LINE SDK`,auth:`Channel Token`}],a=[{category:`连接管理`,methods:[`connect()`,`disconnect()`,`reconnect()`]},{category:`消息入站`,methods:[`onMessage()`]},{category:`消息出站`,methods:[`send()`]},{category:`状态同步`,methods:[`sendTyping()`,`markRead()`,`react()`]},{category:`媒体处理`,methods:[`uploadMedia()`,`downloadMedia()`]}];return(e,o)=>{let s=p(`n-grid-item`),u=p(`n-grid`);return j(),r(`div`,K,[c(O(I),{title:`什么是频道？`},{default:S(()=>[...o[0]||=[l(`p`,{class:`desc`},` "频道"是 OpenClaw 对聊天平台的抽象。每个频道代表一个聊天平台的连接。 用户通过已有的聊天工具与 AI 交互，不需要新装 App。 `,-1)]]),_:1}),c(O(I),{title:`支持的聊天平台`,class:`platforms-card`},{default:S(()=>[c(O(L),{bordered:!1,"single-line":!1},{default:S(()=>[o[1]||=l(`thead`,null,[l(`tr`,null,[l(`th`,null,`平台`),l(`th`,null,`底层库`),l(`th`,null,`认证方式`)])],-1),l(`tbody`,null,[(j(),r(n,null,f(t,e=>l(`tr`,{key:e.name},[l(`td`,null,[c(O(G),{type:`success`,size:`large`,bordered:!1},{default:S(()=>[i(b(e.name),1)]),_:2},1024)]),l(`td`,null,b(e.lib),1),l(`td`,null,b(e.auth),1)])),64))])]),_:1})]),_:1}),c(O(I),{title:`频道插件接口`,class:`interface-card`},{default:S(()=>[o[2]||=l(`p`,{class:`card-desc`},`每个频道插件遵循统一的接口模式`,-1),c(u,{cols:2,"x-gap":20,"y-gap":20},{default:S(()=>[(j(),r(n,null,f(a,e=>c(s,{key:e.category},{default:S(()=>[l(`div`,q,[l(`h4`,null,b(e.category),1),l(`ul`,null,[(j(!0),r(n,null,f(e.methods,e=>(j(),r(`li`,{key:e},[l(`code`,null,b(e),1)]))),128))])])]),_:2},1024)),64))]),_:1})]),_:1})])}}},[[`__scopeId`,`data-v-51a8bfe7`]]);export{J as default};