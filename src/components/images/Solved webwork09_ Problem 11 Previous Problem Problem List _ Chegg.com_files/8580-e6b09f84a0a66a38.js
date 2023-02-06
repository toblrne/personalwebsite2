"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8580],{26287:function(e,t,n){n.d(t,{Avatar:function(){return w}});var r=n(96535),o=n(27378),i=n(39385),a=n(68860),c=n(95999),u=n(45980),l=n(43604),s=c.Z.weight,d=c.Z.family,f={large:88,medium:48,small:24},m=function(e){return f[e]},p=l.ZP.img.withConfig({componentId:"iw4p3l-0"})(["height:100%;width:100%;object-fit:cover;height:","rem;width:","rem;border-radius:50%;"],(function(e){var t=e.size;return m(t)/16}),(function(e){var t=e.size;return m(t)/16})),g=l.ZP.span.withConfig({componentId:"iw4p3l-1"})(["display:inline-flex;align-items:center;justify-content:center;font-weight:",";font-size:",";height:","rem;width:","rem;border-radius:50%;color:",";background-color:",";padding:"," 0 0;box-sizing:border-box;overflow:hidden;"],s.heavy,(function(e){return function(e){switch(e){case"small":return"1rem";case"medium":return"".concat(2.25,"rem");default:return"".concat(3,"rem")}}(e.size)}),(function(e){var t=e.size;return m(t)/16}),(function(e){var t=e.size;return m(t)/16}),a.Z.white,a.Z.dark,(function(e){return"small"===e.size?"3px":"5px"})),C=l.ZP.span.withConfig({componentId:"iw4p3l-2"})(["font-weight:",";font-size:","rem;color:",";margin-left:",";display:flex;align-items:center;svg{margin-left:-",";}"],s.medium,.875,a.Z.dark,u.Z.px8,u.Z.px4),h=l.ZP.div.withConfig({componentId:"iw4p3l-3"})(["display:inline-flex;align-items:center;justify-content:center;font-family:",";user-select:none;"],d.default),v=(0,l.ZP)(h).withConfig({componentId:"iw4p3l-4"})(["border:0;padding:0;background-color:",";","{padding:0;background-color:",";color:",";cursor:pointer;}"],a.Z.transparent,g,a.Z.greyLight,a.Z.grey),Z=function(e){var t,n=e.name,c=e.email,u=e.image,l=e.isVerified,s=e.size,d=(0,r.Z)(e,["name","email","image","isVerified","size"]),f=l?"":(t=n||c)&&t.charAt(0).toUpperCase();return o.createElement(h,d,u?o.createElement(p,{size:s,src:u.src,alt:u.alt}):o.createElement(g,{size:s},f),"small"===s&&o.createElement(C,null,l?n:function(e,t){if(e){var n=e.split(" ");return n.length>1?"".concat(n[0]," ").concat(n[n.length-1].slice(0,1),"."):n[0]}return t&&t.split("@")[0]}(n,c),l?o.createElement(o.Fragment,null,"\xa0\xa0",o.createElement(i.Z,{size:"xsmall",svgColor:a.Z.sky})):""))};Z.displayName="Avatar";var w=Z,y=n(25773),E=n(95238),b=function(e){var t=e.renderAsButton,n=(0,r.Z)(e,["renderAsButton"]);return o.createElement(v,(0,y.Z)({},n,{as:t?"button":"div"}),o.createElement(g,{size:"large","data-test":"avatarCircle"},o.createElement(E.Z,{size:"large"})))};b.displayName="UploadAvatar"},2034:function(e,t,n){n.d(t,{ButtonLink:function(){return g},OutlineButtonLink:function(){return Z},SecondaryButtonLink:function(){return h}});var r=n(25773),o=n(96535),i=n(27378),a=n(45980),c=n(68860),u=n(95017),l=n(43604),s=(0,l.ZP)(u.Button).withConfig({componentId:"lkithz-0"})(["text-decoration:none;-webkit-appearance:none;&:focus{outline-offset:",";outline:4px dashed ",";}"],a.Z.px4,c.Z.deepSea600),d=(0,l.ZP)(u.SecondaryButton).withConfig({componentId:"lkithz-1"})(["text-decoration:none;-webkit-appearance:none;"]),f=(0,l.ZP)(u.OutlineButton).withConfig({componentId:"lkithz-2"})(["text-decoration:none;-webkit-appearance:none;"]),m=(0,l.ZP)(u.ReverseButton).withConfig({componentId:"lkithz-3"})(["text-decoration:none;-webkit-appearance:none;"]),p=(0,i.forwardRef)((function(e,t){var n=e.children,a=e["data-test"],c=e.type,u=void 0===c?"text/html":c,l=(0,o.Z)(e,["children","data-test","type"]);return i.createElement(s,(0,r.Z)({"data-test":a||void 0,forwardedAs:"a",type:u,ref:t},l),n)}));p.displayName="ButtonLink";var g=p,C=(0,i.forwardRef)((function(e,t){var n=e.children,a=e["data-test"],c=e.type,u=void 0===c?"text/html":c,l=(0,o.Z)(e,["children","data-test","type"]);return i.createElement(d,(0,r.Z)({"data-test":a||void 0,forwardedAs:"a",type:u,ref:t},l),n)}));C.displayName="SecondaryButtonLink";var h=C,v=(0,i.forwardRef)((function(e,t){var n=e.children,a=e["data-test"],c=e.type,u=void 0===c?"text/html":c,l=(0,o.Z)(e,["children","data-test","type"]);return i.createElement(f,(0,r.Z)({"data-test":a||void 0,forwardedAs:"a",type:u,ref:t},l),n)}));v.displayName="OutlineButtonLink";var Z=v,w=(0,i.forwardRef)((function(e,t){var n=e.children,a=e["data-test"],c=e.type,u=void 0===c?"text/html":c,l=(0,o.Z)(e,["children","data-test","type"]);return i.createElement(m,(0,r.Z)({"data-test":a||void 0,forwardedAs:"a",type:u,ref:t},l),n)}));w.displayName="ReverseButtonLink"},41929:function(e,t,n){var r=n(25773),o=n(27378),i=n(44652),a=o.forwardRef((function(e,t){return o.createElement(i.SvgIcon,(0,r.Z)({},e,{ref:t}),o.createElement(i.SvgFill,{d:"M11.9 3.534a4.023 4.023 0 1 0-.002 8.047 4.023 4.023 0 0 0 .001-8.047ZM5.78 7.557a6.119 6.119 0 0 1 6.12-6.118 6.119 6.119 0 1 1-6.12 6.118ZM32.1 32.42a4.023 4.023 0 1 0 0 8.047 4.023 4.023 0 0 0 0-8.047Zm-6.118 4.023a6.119 6.119 0 0 1 6.119-6.118 6.119 6.119 0 1 1-6.12 6.118ZM32.874.11c.519.257.73.886.473 1.404L12.53 43.418a1.048 1.048 0 0 1-1.877-.932L31.47.582c.257-.518.886-.73 1.404-.472Z",fillRule:"evenodd",clipRule:"evenodd"}))}));a.displayName="Percent",a.defaultProps={"aria-label":"Percent"},t.Z=a},95238:function(e,t,n){var r=n(25773),o=n(27378),i=n(87135),a=n(38235),c=o.forwardRef((function(e,t){return o.createElement(a.Icon,(0,r.Z)({ref:t},e),o.createElement(i.Z,{d:"M31.75 13.1799H38.54C39.5889 13.1797 40.5958 13.5916 41.344 14.3267C42.0922 15.0618 42.5217 16.0615 42.54 17.1101V36C42.54 37.0608 42.1186 38.0781 41.3685 38.8284C40.6183 39.5786 39.6009 40 38.54 40H9.77002C8.70917 40 7.69174 39.5786 6.94159 38.8284C6.19144 38.0781 5.77002 37.0608 5.77002 36V17.1799C5.77002 16.1191 6.19144 15.1018 6.94159 14.3516C7.69174 13.6013 8.70917 13.1799 9.77002 13.1799H16.56V12.24C16.5547 11.3823 16.8896 10.5576 17.4913 9.94653C18.093 9.33545 18.9124 8.98779 19.77 8.97998H28.54C29.3976 8.98779 30.217 9.33545 30.8188 9.94653C31.4205 10.5576 31.7554 11.3823 31.75 12.24V13.1799ZM39.5812 37.0112C39.8494 36.7432 40 36.3792 40 36L39.96 17.1101C39.96 16.731 39.8094 16.3669 39.5412 16.0989C39.273 15.8308 38.9093 15.6799 38.53 15.6799H29.2V12.2C29.2041 12.1094 29.1902 12.0188 29.1592 11.9336C29.1282 11.8484 29.0807 11.77 29.0193 11.7031C28.9863 11.667 28.9496 11.6348 28.91 11.6067C28.876 11.5825 28.8398 11.5615 28.8019 11.5439C28.7197 11.5056 28.6307 11.4839 28.54 11.48H19.77C19.5861 11.4878 19.4127 11.5676 19.2873 11.7024C19.1619 11.8372 19.0946 12.0159 19.1 12.2V15.6799H9.77002C9.39075 15.6799 9.02707 15.8308 8.75888 16.0989C8.49069 16.3669 8.34003 16.731 8.34003 17.1101V36C8.34003 36.3792 8.49069 36.7432 8.75888 37.0112C9.02707 37.2793 9.39075 37.4299 9.77002 37.4299H38.57C38.9493 37.4299 39.313 37.2793 39.5812 37.0112ZM35 18C34.5229 17.998 34.0559 18.1377 33.6583 18.4014C33.2607 18.665 32.9502 19.0405 32.7663 19.4807C32.5823 19.9209 32.5332 20.406 32.6251 20.874C32.7169 21.3423 32.9457 21.7725 33.2823 22.1106C33.619 22.4487 34.0483 22.6792 34.5161 22.7729C34.9839 22.8667 35.469 22.8196 35.9099 22.6375C36.3509 22.4553 36.7278 22.1465 36.9931 21.75C37.2584 21.3535 37.4 20.887 37.4 20.4099C37.4 19.7725 37.1474 19.1611 36.6976 18.7095C36.2478 18.2578 35.6374 18.0027 35 18ZM35 21.48C34.7855 21.4819 34.5753 21.4202 34.3962 21.3022C34.2171 21.1843 34.0771 21.0156 33.9941 20.8179C33.9112 20.6201 33.8889 20.4023 33.9303 20.1919C33.9716 19.9814 34.0747 19.7881 34.2263 19.6365C34.378 19.4849 34.5713 19.3816 34.7818 19.3403C34.9922 19.2991 35.2101 19.321 35.4079 19.4041C35.6057 19.4871 35.7742 19.627 35.8921 19.8062C36.01 19.9854 36.0719 20.1956 36.07 20.4099C36.0673 20.6919 35.9534 20.9617 35.7531 21.1602C35.5527 21.3586 35.282 21.47 35 21.47V21.48ZM24.1499 19.1101C22.6705 19.1101 21.2243 19.5486 19.9943 20.3706C18.7642 21.1926 17.8055 22.3608 17.2393 23.7275C16.6732 25.0942 16.525 26.5984 16.8137 28.0493C17.1023 29.5002 17.8147 30.833 18.8608 31.8792C19.9069 32.9253 21.2397 33.6377 22.6907 33.9263C24.1416 34.2148 25.6456 34.0669 27.0124 33.5007C28.3792 32.9346 29.5474 31.9756 30.3693 30.7456C31.1912 29.5156 31.6299 28.0696 31.6299 26.5901C31.6273 24.6072 30.8384 22.7058 29.4362 21.3037C28.034 19.9016 26.1329 19.1128 24.1499 19.1101ZM24.1499 31.75C23.1294 31.75 22.1317 31.4473 21.2832 30.8804C20.4346 30.3135 19.7733 29.5076 19.3827 28.5647C18.9922 27.6218 18.89 26.5842 19.0891 25.5833C19.2882 24.5823 19.7796 23.6631 20.5013 22.9414C21.2229 22.2197 22.1423 21.7283 23.1433 21.5291C24.1442 21.3298 25.1817 21.4321 26.1246 21.8228C27.0674 22.2134 27.8733 22.8745 28.4403 23.7231C29.0073 24.5718 29.3099 25.5696 29.3099 26.5901C29.3099 27.9585 28.7663 29.271 27.7986 30.2388C26.8309 31.2065 25.5184 31.75 24.1499 31.75Z"}))}));c.displayName="CameraIcon",c.defaultProps={"aria-label":"Camera"},t.Z=c},3826:function(e,t,n){n.d(t,{LargeToggletip:function(){return C},Toggletip:function(){return g}});var r=n(27378),o=n(24662),i=n(36648),a=n(64649),c=n(8136),u=n(29777),l=n(1738);function s(e){var t=(0,r.useRef)(null),n=(0,r.useState)(!1),o=(0,c.Z)(n,2),i=o[0],s=o[1],d=function(e){(0,u.Z)(e)?("Escape"!==e.key&&"Esc"!==e.key||s(!1),t.current&&(0,l.Z)(e,t.current)&&s(!1)):s(!1)},f=function(){i?setTimeout((function(){s(!0)}),0):s(!0)};(0,r.useEffect)((function(){return i&&(document.addEventListener("click",d,!0),document.addEventListener("keydown",d,!0)),function(){document.removeEventListener("click",d,!0),document.removeEventListener("keydown",d,!0)}}),[i]);var m=e.props.onClick,p=e.props.onKeyDown,g=r.cloneElement(e,(0,a.Z)({onClick:function(e){m&&m(e),f()},onKeyDown:function(e){p&&p(e),e.key&&"Enter"===e.key&&f()}},"aria-expanded",i));return{isToggletipShown:i,extendedTargetElement:g,wrapperRef:t}}var d=n(43604),f=d.ZP.span.withConfig({componentId:"sc-1b07im2-0"})(["position:relative;display:inline-block;"]),m=d.ZP.div.withConfig({componentId:"sc-1b07im2-1"})(["",""],(function(e){var t=e.position,n=e.isShown,r=e.customTheme;return(0,i.getTooltipStyles)(t,n,r)})),p=d.ZP.span.withConfig({componentId:"sc-1b07im2-2"})(["font-size:",";font-weight:700;"],(function(e){return e.customTheme.tooltipTitleFontSize})),g=function(e){var t=e.children,n=e.targetElement,a=e.position,c=void 0===a?"bottomRight":a,u=e.className,l=e["data-test"],d=e.theme,p=s(n),g=p.isToggletipShown,C=p.onMouseLeaveWrapper,h=p.extendedTargetElement,v=p.wrapperRef,Z=(0,o.useComponentTheme)({name:"Tooltip",theme:(0,i.getThemeConfig)(null===d||void 0===d?void 0:d.tooltip)});return r.createElement(f,{onMouseLeave:C,className:u,ref:v,"data-test":l?"".concat(l,"-wrapper"):void 0},h,r.createElement(m,{isShown:g,position:c,role:"tooltip","data-test":l||void 0,customTheme:Z},t))},C=function(e){var t=e.children,n=e.targetElement,a=e.position,c=void 0===a?"bottomRight":a,u=e.title,l=e.className,d=e["data-test"],g=e.theme,C=s(n),h=C.isToggletipShown,v=C.onMouseLeaveWrapper,Z=C.extendedTargetElement,w=C.wrapperRef,y=(0,o.useComponentTheme)({name:"Tooltip",theme:(0,i.getThemeConfig)(null===g||void 0===g?void 0:g.tooltip)});return r.createElement(f,{onMouseLeave:v,className:l,ref:w,"data-test":d?"".concat(d,"-wrapper"):void 0},Z,r.createElement(m,{isShown:h,position:c,role:"tooltip","data-test":d||void 0,customTheme:y},r.createElement(p,{customTheme:y},u),r.createElement("span",null,t)))}},76415:function(e,t,n){function r(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}n.d(t,{Z:function(){return r}})},85902:function(e,t,n){function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:function(){return r}})},99907:function(e,t,n){function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}n.d(t,{Z:function(){return r}})},40306:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(64083),o=n(87926),i=n(32825),a=n(85902),c=n(99907);function u(e,t){if((0,a.Z)(2,arguments),!t||"object"!==typeof t)return new Date(NaN);var n="years"in t?(0,c.Z)(t.years):0,u="months"in t?(0,c.Z)(t.months):0,l="weeks"in t?(0,c.Z)(t.weeks):0,s="days"in t?(0,c.Z)(t.days):0,d="hours"in t?(0,c.Z)(t.hours):0,f="minutes"in t?(0,c.Z)(t.minutes):0,m="seconds"in t?(0,c.Z)(t.seconds):0,p=(0,i.Z)(e),g=u||n?(0,o.Z)(p,u+12*n):p,C=s||l?(0,r.Z)(g,s+7*l):g,h=f+60*d,v=m+60*h,Z=1e3*v,w=new Date(C.getTime()+Z);return w}},64083:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(99907),o=n(32825),i=n(85902);function a(e,t){(0,i.Z)(2,arguments);var n=(0,o.Z)(e),a=(0,r.Z)(t);return isNaN(a)?new Date(NaN):a?(n.setDate(n.getDate()+a),n):n}},87926:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(99907),o=n(32825),i=n(85902);function a(e,t){(0,i.Z)(2,arguments);var n=(0,o.Z)(e),a=(0,r.Z)(t);if(isNaN(a))return new Date(NaN);if(!a)return n;var c=n.getDate(),u=new Date(n.getTime());u.setMonth(n.getMonth()+a+1,0);var l=u.getDate();return c>=l?u:(n.setFullYear(u.getFullYear(),u.getMonth(),c),n)}},95519:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(32825),o=n(85902);function i(e,t){(0,o.Z)(2,arguments);var n=t||{},i=(0,r.Z)(e).getTime(),a=(0,r.Z)(n.start).getTime(),c=(0,r.Z)(n.end).getTime();if(!(a<=c))throw new RangeError("Invalid interval");return i>=a&&i<=c}},32825:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(85902);function o(e){(0,r.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}},80040:function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=8580-e6b09f84a0a66a38.js.map