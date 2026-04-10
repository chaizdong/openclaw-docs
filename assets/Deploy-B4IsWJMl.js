import{B as e,Bt as t,Dt as n,Ft as r,G as i,It as a,J as o,Jt as s,K as c,Lt as l,Mt as u,Rt as d,V as f,Vt as p,Y as m,Yt as h,_t as g,a as _,c as v,cn as y,d as b,dn as x,dt as S,en as C,et as w,ft as T,gt as E,ht as D,jt as O,ln as k,mt as A,o as j,qt as M,t as N}from"./_plugin-vue_export-helper-CtX_x4q1.js";import{t as P}from"./flatten-DadFbFrG.js";import{n as ee,r as F,t as I}from"./Grid-B6PsY0lQ.js";import{t as L}from"./Code-DkMOxQr-.js";import{r as R,t as z}from"./Card-BKFf-BiJ.js";import{n as B,t as V}from"./icon-switch.cssr-npV3msYz.js";import{t as H}from"./Alert-CXX1PKM1.js";var U=d({name:`Checkmark`,render(){return t(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 16 16`},t(`g`,{fill:`none`},t(`path`,{d:`M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z`,fill:`currentColor`})))}}),W={stepHeaderFontSizeSmall:`14px`,stepHeaderFontSizeMedium:`16px`,indicatorIndexFontSizeSmall:`14px`,indicatorIndexFontSizeMedium:`16px`,indicatorSizeSmall:`22px`,indicatorSizeMedium:`28px`,indicatorIconSizeSmall:`14px`,indicatorIconSizeMedium:`18px`};function G(e){let{fontWeightStrong:t,baseColor:n,textColorDisabled:r,primaryColor:i,errorColor:a,textColor1:o,textColor2:s}=e;return Object.assign(Object.assign({},W),{stepHeaderFontWeight:t,indicatorTextColorProcess:n,indicatorTextColorWait:r,indicatorTextColorFinish:i,indicatorTextColorError:a,indicatorBorderColorProcess:i,indicatorBorderColorWait:r,indicatorBorderColorFinish:i,indicatorBorderColorError:a,indicatorColorProcess:i,indicatorColorWait:`#0000`,indicatorColorFinish:`#0000`,indicatorColorError:`#0000`,splitorColorProcess:r,splitorColorWait:r,splitorColorFinish:i,splitorColorError:r,headerTextColorProcess:o,headerTextColorWait:r,headerTextColorFinish:r,headerTextColorError:a,descriptionTextColorProcess:s,descriptionTextColorWait:r,descriptionTextColorFinish:r,descriptionTextColorError:a})}var K={name:`Steps`,common:_,self:G},q=T(`steps`,`
 width: 100%;
 display: flex;
`,[T(`step`,`
 position: relative;
 display: flex;
 flex: 1;
 `,[D(`disabled`,`cursor: not-allowed`),D(`clickable`,`
 cursor: pointer;
 `),S(`&:last-child`,[T(`step-splitor`,`display: none;`)])]),T(`step-splitor`,`
 background-color: var(--n-splitor-color);
 margin-top: calc(var(--n-step-header-font-size) / 2);
 height: 1px;
 flex: 1;
 align-self: flex-start;
 margin-left: 12px;
 margin-right: 12px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),T(`step-content`,`flex: 1;`,[T(`step-content-header`,`
 color: var(--n-header-text-color);
 margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);
 line-height: var(--n-step-header-font-size);
 font-size: var(--n-step-header-font-size);
 position: relative;
 display: flex;
 font-weight: var(--n-step-header-font-weight);
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[A(`title`,`
 white-space: nowrap;
 flex: 0;
 `)]),A(`description`,`
 color: var(--n-description-text-color);
 margin-top: 12px;
 margin-left: 9px;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),T(`step-indicator`,`
 background-color: var(--n-indicator-color);
 box-shadow: 0 0 0 1px var(--n-indicator-border-color);
 height: var(--n-indicator-size);
 width: var(--n-indicator-size);
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[T(`step-indicator-slot`,`
 position: relative;
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 font-size: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 `,[A(`index`,`
 display: inline-block;
 text-align: center;
 position: absolute;
 left: 0;
 top: 0;
 white-space: nowrap;
 font-size: var(--n-indicator-index-font-size);
 width: var(--n-indicator-icon-size);
 height: var(--n-indicator-icon-size);
 line-height: var(--n-indicator-icon-size);
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[V()]),T(`icon`,`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[V()]),T(`base-icon`,`
 color: var(--n-indicator-text-color);
 transition: color .3s var(--n-bezier);
 `,[V()])])]),D(`vertical`,`flex-direction: column;`,[E(`show-description`,[S(`>`,[T(`step`,`padding-bottom: 8px;`)])]),S(`>`,[T(`step`,`margin-bottom: 16px;`,[S(`&:last-child`,`margin-bottom: 0;`),S(`>`,[T(`step-indicator`,[S(`>`,[T(`step-splitor`,`
 position: absolute;
 bottom: -8px;
 width: 1px;
 margin: 0 !important;
 left: calc(var(--n-indicator-size) / 2);
 height: calc(100% - var(--n-indicator-size));
 `)])]),T(`step-content`,[A(`description`,`margin-top: 8px;`)])])])])]),D(`content-bottom`,[E(`vertical`,[S(`>`,[T(`step`,`flex-direction: column`,[S(`>`,[T(`step-line`,`display: flex;`,[S(`>`,[T(`step-splitor`,`
 margin-top: 0;
 align-self: center;
 `)])])]),S(`>`,[T(`step-content`,`margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);`,[T(`step-content-header`,`
 margin-left: 0;
 `),T(`step-content__description`,`
 margin-left: 0;
 `)])])])])])])]);function J(e,t){return typeof e!=`object`||!e||Array.isArray(e)?null:(e.props||={},e.props.internalIndex=t+1,e)}function Y(e){return e.map((e,t)=>J(e,t))}var X=Object.assign(Object.assign({},v.props),{current:Number,status:{type:String,default:`process`},size:{type:String,default:`medium`},vertical:Boolean,contentPlacement:{type:String,default:`right`},"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),Z=w(`n-steps`),Q=d({name:`Steps`,props:X,slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,mergedRtlRef:r}=f(e),i=b(`Steps`,r,n);return s(Z,{props:e,mergedThemeRef:v(`Steps`,`-steps`,q,K,e,n),mergedClsPrefixRef:n,stepsSlots:t}),{mergedClsPrefix:n,rtlEnabled:i}},render(){let{mergedClsPrefix:e}=this;return t(`div`,{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`,this.contentPlacement===`bottom`&&`${e}-steps--content-bottom`]},Y(P(F(this))))}}),$=d({name:`Step`,props:{status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},slots:Object,setup(t){let n=p(Z,null);n||m(`step`,"`n-step` must be placed inside `n-steps`.");let{inlineThemeDisabled:r}=f(),{props:i,mergedThemeRef:a,mergedClsPrefixRef:s,stepsSlots:c}=n,l=y(i,`vertical`),u=y(i,`contentPlacement`),d=O(()=>{let{status:e}=t;if(e)return e;{let{internalIndex:e}=t,{current:n}=i;if(n===void 0)return`process`;if(e<n)return`finish`;if(e===n)return i.status||`process`;if(e>n)return`wait`}return`process`}),h=O(()=>{let{value:e}=d,{size:t}=i,{common:{cubicBezierEaseInOut:n},self:{stepHeaderFontWeight:r,[g(`stepHeaderFontSize`,t)]:o,[g(`indicatorIndexFontSize`,t)]:s,[g(`indicatorSize`,t)]:c,[g(`indicatorIconSize`,t)]:l,[g(`indicatorTextColor`,e)]:u,[g(`indicatorBorderColor`,e)]:f,[g(`headerTextColor`,e)]:p,[g(`splitorColor`,e)]:m,[g(`indicatorColor`,e)]:h,[g(`descriptionTextColor`,e)]:_}}=a.value;return{"--n-bezier":n,"--n-description-text-color":_,"--n-header-text-color":p,"--n-indicator-border-color":f,"--n-indicator-color":h,"--n-indicator-icon-size":l,"--n-indicator-index-font-size":s,"--n-indicator-size":c,"--n-indicator-text-color":u,"--n-splitor-color":m,"--n-step-header-font-size":o,"--n-step-header-font-weight":r}}),_=r?e(`step`,O(()=>{let{value:e}=d,{size:t}=i;return`${e[0]}${t[0]}`}),h,i):void 0;return{stepsSlots:c,mergedClsPrefix:s,vertical:l,mergedStatus:d,handleStepClick:O(()=>{if(t.disabled)return;let{onUpdateCurrent:e,"onUpdate:current":n}=i;return e||n?()=>{e&&o(e,t.internalIndex),n&&o(n,t.internalIndex)}:void 0}),cssVars:r?void 0:h,themeClass:_?.themeClass,onRender:_?.onRender,contentPlacement:u}},render(){let{mergedClsPrefix:e,onRender:r,handleStepClick:a,disabled:o,contentPlacement:s,vertical:l}=this,u=c(this.$slots.default,n=>{let r=n||this.description;return r?t(`div`,{class:`${e}-step-content__description`},r):null}),d=t(`div`,{class:`${e}-step-splitor`}),f=t(`div`,{class:`${e}-step-indicator`,key:s},t(`div`,{class:`${e}-step-indicator-slot`},t(B,null,{default:()=>c(this.$slots.icon,n=>{let{mergedStatus:r,stepsSlots:a}=this;return r===`finish`||r===`error`?r===`finish`?t(j,{clsPrefix:e,key:`finish`},{default:()=>i(a[`finish-icon`],()=>[t(U,null)])}):r===`error`?t(j,{clsPrefix:e,key:`error`},{default:()=>i(a[`error-icon`],()=>[t(R,null)])}):null:n||t(`div`,{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex)})})),l?d:null),p=t(`div`,{class:`${e}-step-content`},t(`div`,{class:`${e}-step-content-header`},t(`div`,{class:`${e}-step-content-header__title`},i(this.$slots.title,()=>[this.title])),!l&&s===`right`?d:null),u),m;return m=!l&&s===`bottom`?t(n,null,t(`div`,{class:`${e}-step-line`},f,d),p):t(n,null,f,p),r?.(),t(`div`,{class:[`${e}-step`,o&&`${e}-step--disabled`,!o&&a&&`${e}-step--clickable`,this.themeClass,u&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:a},m)}}),te={class:`deploy`},ne={class:`command-item`},re={class:`command-category`},ie={class:`command-code`},ae={class:`command-desc`},oe=N({__name:`Deploy`,setup(e){let t=[{title:`环境准备`,desc:`确保已安装 Node.js >= 22 和 pnpm`,code:`node --version
pnpm --version`},{title:`克隆项目`,desc:`从 GitHub 克隆 OpenClaw`,code:`git clone https://github.com/openclaw/openclaw.git
cd openclaw`},{title:`安装依赖`,desc:`使用 pnpm 安装依赖`,code:`pnpm install
pnpm build`},{title:`交互式引导`,desc:`运行 onboarding 向导`,code:`openclaw onboard`},{title:`启动 Gateway`,desc:`启动核心服务`,code:`openclaw gateway`},{title:`登录频道`,desc:`配置聊天平台账号`,code:`openclaw channels login whatsapp`}],i=[{category:`初始化`,cmd:`openclaw onboard`,desc:`交互式引导`},{category:`Gateway`,cmd:`openclaw gateway`,desc:`启动服务`},{category:`诊断`,cmd:`openclaw doctor`,desc:`诊断修复`},{category:`频道`,cmd:`openclaw channels status`,desc:`查看状态`},{category:`Agent`,cmd:`openclaw agent chat`,desc:`开始聊天`},{category:`配置`,cmd:`openclaw config get key`,desc:`读取配置`}];return(e,o)=>(M(),r(`div`,te,[l(k(H),{title:`快速开始`,type:`success`},{default:C(()=>[...o[0]||=[a(` 推荐使用 `,-1),u(`code`,null,`openclaw onboard`,-1),a(` 交互式向导完成初始设置。 `,-1)]]),_:1}),l(k(z),{title:`安装步骤`,class:`install-card`},{default:C(()=>[l(k(Q),{vertical:``},{default:C(()=>[(M(),r(n,null,h(t,e=>l(k($),{key:e.title,title:e.title,description:e.desc},{icon:C(()=>[...o[1]||=[a(`✓`,-1)]]),default:C(()=>[l(k(L),{code:e.code,language:`bash`},null,8,[`code`])]),_:2},1032,[`title`,`description`])),64))]),_:1})]),_:1}),l(k(z),{title:`CLI 命令速查`,class:`cli-card`},{default:C(()=>[l(k(I),{cols:2,"x-gap":20,"y-gap":20},{default:C(()=>[(M(),r(n,null,h(i,e=>l(k(ee),{key:e.cmd},{default:C(()=>[u(`div`,ne,[u(`div`,re,x(e.category),1),u(`code`,ie,x(e.cmd),1),u(`span`,ae,x(e.desc),1)])]),_:2},1024)),64))]),_:1})]),_:1}),l(k(z),{title:`配置文件示例`,class:`config-card`},{default:C(()=>[...o[2]||=[u(`p`,{class:`card-desc`},`位置：~/.openclaw/openclaw.json`,-1),u(`pre`,{class:`config-example`},`{
  "gateway": { "port": 18789, "bind": "127.0.0.1" },
  "channels": { "whatsapp": { "enabled": true } },
  "models": { "default": "claude-opus-4-6" },
  "memory": { "embeddings": "local" }
}`,-1)]]),_:1})]))}},[[`__scopeId`,`data-v-5619b8d3`]]);export{oe as default};