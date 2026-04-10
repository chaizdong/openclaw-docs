import{B as e,Bt as t,Rt as n,V as r,_t as i,a,c as o,d as s,dt as c,ft as l,gt as u,ht as d,it as f,jt as p,vt as m,yt as h}from"./_plugin-vue_export-helper-CtX_x4q1.js";var g={thPaddingSmall:`6px`,thPaddingMedium:`12px`,thPaddingLarge:`12px`,tdPaddingSmall:`6px`,tdPaddingMedium:`12px`,tdPaddingLarge:`12px`};function _(e){let{dividerColor:t,cardColor:n,modalColor:r,popoverColor:i,tableHeaderColor:a,tableColorStriped:o,textColor1:s,textColor2:c,borderRadius:l,fontWeightStrong:u,lineHeight:d,fontSizeSmall:p,fontSizeMedium:m,fontSizeLarge:h}=e;return Object.assign(Object.assign({},g),{fontSizeSmall:p,fontSizeMedium:m,fontSizeLarge:h,lineHeight:d,borderRadius:l,borderColor:f(n,t),borderColorModal:f(r,t),borderColorPopover:f(i,t),tdColor:n,tdColorModal:r,tdColorPopover:i,tdColorStriped:f(n,o),tdColorStripedModal:f(r,o),tdColorStripedPopover:f(i,o),thColor:f(n,a),thColorModal:f(r,a),thColorPopover:f(i,a),thTextColor:s,tdTextColor:c,thFontWeight:u})}var v={name:`Table`,common:a,self:_},y=c([l(`table`,`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[c(`th`,`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[c(`&:last-child`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),c(`td`,`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[c(`&:last-child`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),d(`bordered`,`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[c(`tr`,[c(`&:last-child`,[c(`td`,`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),d(`single-line`,[c(`th`,`
 border-right: 0px solid var(--n-merged-border-color);
 `),c(`td`,`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),d(`single-column`,[c(`tr`,[c(`&:not(:last-child)`,[c(`td`,`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),d(`striped`,[c(`tr:nth-of-type(even)`,[c(`td`,`background-color: var(--n-td-color-striped)`)])]),u(`bottom-bordered`,[c(`tr`,[c(`&:last-child`,[c(`td`,`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),m(l(`table`,`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[c(`th`,`
 background-color: var(--n-th-color-modal);
 `),c(`td`,`
 background-color: var(--n-td-color-modal);
 `)])),h(l(`table`,`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[c(`th`,`
 background-color: var(--n-th-color-popover);
 `),c(`td`,`
 background-color: var(--n-td-color-popover);
 `)]))]),b=n({name:`Table`,props:Object.assign(Object.assign({},o.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:String}),setup(t){let{mergedClsPrefixRef:n,inlineThemeDisabled:a,mergedRtlRef:c,mergedComponentPropsRef:l}=r(t),u=p(()=>t.size||l?.value?.Table?.size||`medium`),d=o(`Table`,`-table`,y,v,t,n),f=s(`Table`,c,n),m=p(()=>{let e=u.value,{self:{borderColor:t,tdColor:n,tdColorModal:r,tdColorPopover:a,thColor:o,thColorModal:s,thColorPopover:c,thTextColor:l,tdTextColor:f,borderRadius:p,thFontWeight:m,lineHeight:h,borderColorModal:g,borderColorPopover:_,tdColorStriped:v,tdColorStripedModal:y,tdColorStripedPopover:b,[i(`fontSize`,e)]:x,[i(`tdPadding`,e)]:S,[i(`thPadding`,e)]:C},common:{cubicBezierEaseInOut:w}}=d.value;return{"--n-bezier":w,"--n-td-color":n,"--n-td-color-modal":r,"--n-td-color-popover":a,"--n-td-text-color":f,"--n-border-color":t,"--n-border-color-modal":g,"--n-border-color-popover":_,"--n-border-radius":p,"--n-font-size":x,"--n-th-color":o,"--n-th-color-modal":s,"--n-th-color-popover":c,"--n-th-font-weight":m,"--n-th-text-color":l,"--n-line-height":h,"--n-td-padding":S,"--n-th-padding":C,"--n-td-color-striped":v,"--n-td-color-striped-modal":y,"--n-td-color-striped-popover":b}}),h=a?e(`table`,p(()=>u.value[0]),m,t):void 0;return{rtlEnabled:f,mergedClsPrefix:n,cssVars:a?void 0:m,themeClass:h?.themeClass,onRender:h?.onRender}},render(){var e;let{mergedClsPrefix:n}=this;return(e=this.onRender)==null||e.call(this),t(`table`,{class:[`${n}-table`,this.themeClass,{[`${n}-table--rtl`]:this.rtlEnabled,[`${n}-table--bottom-bordered`]:this.bottomBordered,[`${n}-table--bordered`]:this.bordered,[`${n}-table--single-line`]:this.singleLine,[`${n}-table--single-column`]:this.singleColumn,[`${n}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}});export{b as t};