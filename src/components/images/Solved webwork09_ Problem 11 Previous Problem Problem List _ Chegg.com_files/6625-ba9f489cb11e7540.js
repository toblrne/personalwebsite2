"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6625],{76760:function(e,o,r){r.d(o,{FloatingInputWrapper:function(){return y},InputWrapper:function(){return Z}});var t=r(27378),n=r(24662),a=r(82816),l=r(68860),i=r(95999),d=r(63819),c=r(45980),s=r(43604),u=i.Z.size.px12,h="".concat(.625,"rem"),g=s.ZP.div.withConfig({componentId:"sc-1ftnaog-0"})(["position:relative;width:",";",""],(function(e){return e.width||"auto"}),(function(e){var o=e.errorText;return e.helperText||o?"margin-bottom: .375rem;":"margin-bottom: calc(".concat(u," + ").concat(h,");")})),m=s.ZP.label.withConfig({componentId:"sc-1ftnaog-1"})(["",""],(function(e){var o=e.visuallyHidden,r=e.adjustToBackgroundColor,t=e.customTheme,n=e.disabled;return o?d.Z:"\n  font-family: ".concat(i.Z.family.default,";\n  font-size: ").concat(t.labelfontSize,";\n  color: ").concat(r?l.Z.white:n?t.disabledFontColor:t.labelColor,";\n  padding: 0px;\n  padding-bottom: ").concat(t.labelPaddingBottom,";\n  display: block;\n  font-weight: ").concat(i.Z.weight.bold,";\n  line-height: ").concat(t.labelLineHeight,";\n  &:hover {\n    cursor: text;\n  }\n  ")})),p=s.ZP.div.withConfig({componentId:"sc-1ftnaog-2"})(["color:",";font-family:",";font-size:",";height:",";margin-top:",";padding-left:",";display:flex;line-height:",";"],(function(e){var o=e.adjustToBackgroundColor,r=e.customTheme,t=e.disabled;return o?l.Z.white:t?r.disabledFontColor:r.helperTextColor}),i.Z.family.default,(function(e){return e.customTheme.helperTextFontSize}),u,(function(e){return e.customTheme.helperTextMarginTop}),(function(e){return e.customTheme.helperTextPaddingLeft}),(function(e){return e.customTheme.helperTextLineHeight})),b=(0,s.ZP)(p).withConfig({componentId:"sc-1ftnaog-3"})(["color:",";"],(function(e){return e.customTheme.errorTextColor})),f=s.ZP.div.withConfig({componentId:"sc-1ftnaog-4"})(["position:absolute;top:50%;right:",";transform:translateY(-50%);display:flex;pointer-events:",";color:",";",""],(function(e){return e.customTheme.trailingIconRight}),(function(e){return e.trailingIconClickable?"auto":"none"}),(function(e){return e.customTheme.trailingIconColor}),(function(e){var o=e.disabled,r=e.customTheme;return o&&"color: ".concat(r.trailingIconDisabledColor,";")})),C=s.ZP.label.withConfig({componentId:"sc-1ftnaog-5"})(["position:absolute;font-family:",";font-size:",";color:",";top:",";z-index:1;transition:all 0.2s ease-out;pointer-events:none;line-height:",";&:hover{cursor:text;}"," @media (prefers-reduced-motion:reduce){transition:none;}"],i.Z.family.default,(function(e){return e.customTheme.floatingLabelfontSize}),(function(e){var o=e.adjustToBackgroundColor,r=e.customTheme;return o?l.Z.white:r.labelColor}),(function(e){return e.setLabelOffset?"0.9rem":"1.25rem"}),(function(e){return e.customTheme.labelLineHeight}),(function(e){return e.isFloating&&"\n      top: ".concat(c.Z.px8,";\n      font-size: ").concat(i.Z.size.px12,";\n      font-weight: ").concat(i.Z.weight.bold,";\n    ")})),x=(0,s.ZP)(p).withConfig({componentId:"sc-1ftnaog-6"})(["padding-left:0;"]),T=(0,s.ZP)(b).withConfig({componentId:"sc-1ftnaog-7"})(["padding-left:0;"]),B=s.ZP.div.withConfig({componentId:"sc-1ftnaog-8"})(["position:absolute;top:70%;transform:translateY(-50%);right:0;display:flex;pointer-events:none;transition:all 0.2s ease-out;@media (prefers-reduced-motion:reduce){transition:none;}"," ",""],(function(e){return e.disabled&&"color: ".concat(l.Z.grey,";")}),(function(e){return e.adjustToBackgroundColor&&"color: ".concat(l.Z.white,";")})),v=function(e){return{default:function(e){return{labelColor:e.colors.border.dark900,labelfontSize:e.font.size.xs,floatingLabelfontSize:e.font.size.md,labelLineHeight:e.font.lineHeight.sm,labelPaddingBottom:e.spacing.xs,helperTextColor:e.colors.border.dark700,helperTextFontSize:e.font.size.xxs,errorTextColor:e.colors.error.dark,helperTextMarginTop:e.spacing.xxs,helperTextLineHeight:e.font.lineHeight.sm,trailingIconRight:e.spacing.md,trailingIconDisabledColor:e.colors.border.medium500,trailingIconColor:e.colors.border.medium700,disabledFontColor:e.colors.border.medium500,helperTextPaddingLeft:"0",showCancelIcon:!0}},fanta:function(e){return{labelColor:l.Z.grey,labelfontSize:e.font.size.xxs,labelLineHeight:"initial",labelPaddingBottom:"0.4375rem",helperTextColor:l.Z.grey,helperTextFontSize:i.Z.size.px14,helperTextPaddingLeft:e.spacing.md,errorTextColor:l.Z.errorRed,helperTextMarginTop:c.Z.px4,helperTextLineHeight:"initial",showCancelIcon:!1,trailingIconRight:e.spacing.xs,trailingIconDisabledColor:l.Z.grey,trailingIconColor:l.Z.dark,disabledFontColor:l.Z.grey}},prop:e}},w=s.ZP.div.withConfig({componentId:"sc-1ftnaog-9"})(["margin-left:4px;"]),I=function(e){var o=e["data-test"],r=e.adjustToBackgroundColor,i=e.children,d=e.className,c=e.disabled,s=e.errorCta,u=e.errorText,h=e.helperText,C=e.inputId,x=e.labelText,T=e.onLabelMouseEnter,B=e.onLabelMouseLeave,I=e.theme,Z=e.trailingIcon,k=e.trailingIconClickable,y=e.visuallyHideLabel,E=e.width,F=(0,n.useComponentTheme)({name:"InputWrapper",theme:v(I)});return t.createElement(g,{width:E,errorText:u,helperText:h,className:d,"data-test":"".concat(o||C,"_group")},t.createElement(m,{id:"".concat(C,"_label"),htmlFor:C,visuallyHidden:y,onMouseEnter:T,onMouseLeave:B,"data-test":"".concat(o||C,"_label"),adjustToBackgroundColor:r,customTheme:F,disabled:c},x),t.createElement("div",{style:{position:"relative"}},t.cloneElement(i,{"aria-describedby":h?"".concat(C,"_helptext"):void 0,errorText:u}),Z&&t.createElement(f,{customTheme:F,"data-test":"".concat(o||C,"_icon_positioner"),disabled:c,trailingIconClickable:k},t.cloneElement(Z,{size:"xsmall"}))),u&&t.createElement(b,{role:"alert",id:"".concat(C,"_error"),"data-test":"".concat(o||C,"_error"),customTheme:F},F.showCancelIcon?t.createElement(t.Fragment,null,t.createElement(a.Z,{iconFill:"circlefill",size:"xsmall",svgColor:l.Z.red700}),t.createElement(w,null,u)):t.createElement(t.Fragment,null,u,s&&s)),!u&&h&&t.createElement(p,{id:"".concat(C,"_helptext"),"data-test":"".concat(o||C,"_helptext"),adjustToBackgroundColor:r,customTheme:F,disabled:c},h))};I.displayName="InputWrapper";var Z=I,k=function(e){var o=e.children,r=e.width,i=e.disabled,d=e.labelText,c=e.errorText,s=e.errorCta,u=e.helperText,h=e.inputId,m=e.trailingIcon,p=e.isFloating,b=e.adjustToBackgroundColor,f=e.setLabelOffset,I=void 0!==f&&f,Z=e.theme,k=(0,n.useComponentTheme)({name:"InputWrapper",theme:v(Z)});return t.createElement(g,{width:r,errorText:c,helperText:u},t.createElement(C,{id:"".concat(h,"_label"),htmlFor:h,isFloating:p,setLabelOffset:I,"data-test":"".concat(h,"_label"),adjustToBackgroundColor:b,customTheme:k},d),t.createElement("div",{style:{position:"relative"}},t.cloneElement(o,{"aria-describedby":u?"".concat(h,"_helptext"):void 0,errorText:c}),m&&t.createElement(B,{disabled:i,adjustToBackgroundColor:b},t.cloneElement(m,{size:"xsmall"}))),c&&t.createElement(T,{id:"".concat(h,"_error"),"data-test":"".concat(h,"_error"),role:"alert",customTheme:k},k.showCancelIcon?t.createElement(t.Fragment,null,t.createElement(a.Z,{iconFill:"circlefill",size:"xsmall",svgColor:l.Z.red700}),t.createElement(w,null,c)):t.createElement(t.Fragment,null,c,s&&s)),!c&&u&&t.createElement(x,{id:"".concat(h,"_helptext"),"data-test":"".concat(h,"_helptext"),adjustToBackgroundColor:b,customTheme:k,disabled:i},u))};k.displayName="FloatingInputWrapper";var y=k},86625:function(e,o,r){r.d(o,{Input:function(){return T},getBaseInputStyles:function(){return m},getFloatingInputStyles:function(){return p},getThemeConfig:function(){return b}});var t=r(25773),n=r(96535),a=r(27378),l=r(24662),i=function(e){var o=e;0===o.indexOf("(")&&-1===e.indexOf(")")&&(o=o.substring(0,o.length-1));var r=(o=o.replace(/\D/g,"")).match(/^(\d{1,3})(\d{0,3})(\d{0,4})(.*)$/);return r&&(o="".concat(3===r[1].length?"(":"").concat(r[1]).concat(3===r[1].length?")":"").concat(r[2]?" ":"").concat(r[2]).concat(r[3]?"-":"").concat(r[3])),o},d=r(76760),c=r(95999),s=r(45980),u=r(68860),h=r(43604),g="2px",m=function(e){var o=e.errorText,r=e.disabled,t=e.isFocused,n=e.hasTrailingIcon,a=e.isLabelHovered,l=e["aria-expanded"],i=e.customTheme;return(0,h.iv)(["border-radius:",";position:relative;box-sizing:border-box;border-style:solid;border-width:",";border-color:",";"," font-family:",";font-size:",";color:",";width:100%;line-height:",";padding:calc("," - ",") calc("," - ",");"," display:flex;align-items:center;height:",";text-overflow:ellipsis;background-color:",";&::placeholder{color:",";}&:hover{"," border-color:",";}"," &:active,&:focus{border-width:",";border-color:",";box-shadow:",";outline:none;}"," "," ",""],i.borderRadius,o?i.errorBorder:i.defaultBorder,o?i.errorBorderColor:i.defaultBorderColor,o&&"\n    box-shadow: ".concat(i.errorBoxShadow,";"),c.Z.family.default,c.Z.size.px16,i.fontColor,i.lineHeight,s.Z.px8,g,s.Z.px16,g,i.showCaretDownIcon&&"\n      padding-top: 1rem;\n      padding-bottom: .813rem;\n      padding-left: 1rem;\n    ",i.height,o?i.errorBackgroundColor:u.Z.white,i.placeholderColor,i.showCaretDownIcon&&"border-width: ".concat(i.hoverBorder,";"),i.hoverBorderColor,a&&!r&&"\n      border-width: ".concat(i.hoverBorder,";\n      border-color: ").concat(i.hoverBorderColor,";"),i.showCaretDownIcon&&i.activeBorder,i.activeBorderColor,i.showCaretDownIcon&&i.activeBoxShadow,(t||l)&&"\n      border-color: ".concat(i.activeBorderColor," !important;\n      box-shadow: ").concat(i.activeBoxShadow," !important;\n      border-width: ").concat(i.showCaretDownIcon&&i.activeBorder," !important;\n     "),r&&"\n    background-color: ".concat(i.disabledBackgroundColor,";\n    &::placeholder {\n      color: ").concat(i.disabledPlaceholderColor,";\n    }\n    color: ").concat(i.disabledColor,";\n    border-color: ").concat(o?i.errorBorderColor:i.disabledBorderColor,";\n    border-width: ").concat(i.disabledBorder,";\n    &:hover,\n    &:focus,\n    &:active {\n      border-color: ").concat(o?i.errorBorderColor:i.disabledBorderColor,";\n      border-width: ").concat(i.disabledBorder,";\n      outline: none;\n    }\n  "),n&&"padding-right: 2rem;")},p=function(e){var o=e.errorText,r=e.disabled,t=e.isFocused,n=e.hasTrailingIcon,a=e["aria-expanded"],l=e.adjustToBackgroundColor,i=e.customTheme;return(0,h.iv)(["background:transparent;box-sizing:border-box;border:none;border-bottom:"," solid;border-color:",";font-family:",";font-size:",";color:",";width:100%;line-height:",";display:block;text-overflow:ellipsis;padding:"," 0 calc("," - ",") 0;&:hover{border-width:",";border-color:",";}&:active,&:focus{border-color:",";border-width:",";outline:none;}"," "," ",""],o?i.errorBorder:i.defaultBorder,"".concat(o?i.errorBorderColor:i.defaultBorderColor),c.Z.family.default,c.Z.size.px16,l?u.Z.white:u.Z.dark,c.Z.lineHeight.xs,s.Z.px32,s.Z.px8,g,i.hoverBorder,i.hoverBorderColor,l?u.Z.white:i.activeBorderColor,i.activeBorder,(t||a)&&"border-color: ".concat(l?u.Z.white:u.Z.dark," !important;"),r&&"\n    background-color: ".concat(i.disabledFloatingBackgroundColor,";\n    color: ").concat(i.disabledColor,";\n    -webkit-text-fill-color: ").concat(i.disabledColor,";\n    border-color: ").concat(i.disabledBorderColor,";\n    border-width: ").concat(i.disabledBorder,";\n    &:hover,\n    &:focus,\n    &:active {\n      border-color: ").concat(i.disabledBorderColor,";\n      border-width: ").concat(i.disabledBorder,";\n      outline: none;\n    }\n  "),n&&"padding-right: 1.5rem;")};var b=function(e){return{default:function(e){return{defaultBorderColor:e.colors.border.dark700,hoverBorderColor:e.colors.border.dark900,activeBorderColor:e.colors.border.dark900,disabledColor:e.colors.border.medium500,disabledBackgroundColor:e.colors.border.light200,disabledFloatingBackgroundColor:e.colors.primary.light,disabledBorderColor:e.colors.border.light200,errorBorderColor:e.colors.error.dark,errorBackgroundColor:e.colors.error.light,placeholderColor:e.colors.border.dark700,lineHeight:e.font.lineHeight.sm,height:e.spacing.xl3,disabledPlaceholderColor:e.colors.border.medium500,fontColor:e.colors.border.dark900,borderRadius:e.radius.sm,defaultBorder:"1px",hoverBorder:"1px",activeBorder:"1px",activeBoxShadow:"inset 0 0 0 1px ".concat(e.colors.border.dark900),disabledBorder:"1px",errorBorder:"1px",errorBoxShadow:"inset 0 0 0 1px ".concat(e.colors.error.dark),showCaretDownIcon:!0}},fanta:{borderRadius:"0",defaultBorder:"2px",defaultBorderColor:u.Z.greyLight,hoverBorder:"2px",hoverBorderColor:u.Z.greyMedium,activeBorder:"2px",activeBoxShadow:"none",activeBorderColor:u.Z.dark,disabledColor:u.Z.grey,disabledBackgroundColor:u.Z.greyLight,disabledBorder:"2px",disabledBorderColor:u.Z.greyLight,errorBorder:"2px",errorBoxShadow:"none",errorBorderColor:u.Z.errorRed,errorBackgroundColor:u.Z.white,placeholderColor:u.Z.grey,showCaretDownIcon:!1,lineHeight:c.Z.lineHeight.md,height:s.Z.px40,disabledPlaceholderColor:u.Z.grey,fontColor:u.Z.dark,disabledFloatingBackgroundColor:u.Z.greyLight},prop:e}},f=h.ZP.input.withConfig({componentId:"xtxmwa-0"})(["",""],(function(e){return m(e)})),C=h.ZP.input.withConfig({componentId:"xtxmwa-1"})(["",""],(function(e){return p(e)})),x=a.forwardRef((function(e,o){var r=e["data-test"],c=e.adjustToBackgroundColor,s=e.className,u=e.disabled,h=e.errorCta,g=e.errorText,m=e.helperText,p=e.inputId,C=e.labelText,x=e.onChange,T=e.theme,B=e.trailingIcon,v=e.trailingIconClickable,w=e.type,I=void 0===w?"text":w,Z=e.visuallyHideLabel,k=e.width,y=(0,n.Z)(e,["data-test","adjustToBackgroundColor","className","disabled","errorCta","errorText","helperText","inputId","labelText","onChange","theme","trailingIcon","trailingIconClickable","type","visuallyHideLabel","width"]),E=(0,l.useComponentTheme)({name:"Input",theme:b(T)});return a.createElement(d.InputWrapper,{adjustToBackgroundColor:c,className:s,"data-test":r,disabled:u,errorCta:h,errorText:g,helperText:m,inputId:p,labelText:C,trailingIcon:B,trailingIconClickable:v,visuallyHideLabel:Z,width:k},a.createElement(f,(0,t.Z)({},y,{customTheme:E,"data-test":r||p,disabled:u,hasTrailingIcon:Boolean(B),id:p,onChange:function(e){x("tel"!==I?e.target.value:i(e.target.value))},ref:o,type:I})))}));x.displayName="Input";var T=x,B=r(8136),v=a.forwardRef((function(e,o){var r=e.inputId,c=e.errorText,s=e.errorCta,u=e.className,h=e.trailingIcon,g=e.value,m=e.disabled,p=e.labelText,f=e.helperText,x=e.width,T=e.adjustToBackgroundColor,v=e["data-test"],w=e.onChange,I=e.onFocus,Z=e.onBlur,k=e.type,y=void 0===k?"text":k,E=e.theme,F=(0,n.Z)(e,["inputId","errorText","errorCta","className","trailingIcon","value","disabled","labelText","helperText","width","adjustToBackgroundColor","data-test","onChange","onFocus","onBlur","type","theme"]),z=(0,l.useComponentTheme)({name:"Input",theme:b(E)}),L=(0,a.useState)(!1),H=(0,B.Z)(L,2),P=H[0],_=H[1];return a.createElement(d.FloatingInputWrapper,{inputId:r,className:u,labelText:p,errorText:c,errorCta:s,helperText:f,width:x,trailingIcon:h,disabled:m,adjustToBackgroundColor:T,isFloating:P||Boolean(g),setLabelOffset:"date"===y||"time"===y,"data-test":v},a.createElement(C,(0,t.Z)({customTheme:z},F,{id:r,"data-test":v||r,ref:o,disabled:m,value:g,type:y,hasTrailingIcon:Boolean(h),adjustToBackgroundColor:T,onChange:function(e){w("tel"!==y?e.target.value:i(e.target.value))},onFocus:function(e){_(!0),I&&I(e)},onBlur:function(e){_(!1),Z&&Z(e)}})))}));v.displayName="FloatingInput"}}]);
//# sourceMappingURL=6625-ba9f489cb11e7540.js.map