(self.webpackChunkselfcare_account_security_overview_widget=self.webpackChunkselfcare_account_security_overview_widget||[]).push([[715,245],{55834:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(89523),o=n.n(r),i=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function a(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(o()[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var a=new RegExp(i),c=null;null!==(c=a.exec(e));)if(c[0].trim())if(c[1]){var s=c[1].trim(),u=[s,""];s.indexOf("=")>-1&&(u=s.split("=")),t.attrs[u[0]]=u[1],a.lastIndex--}else c[2]&&(t.attrs[c[2]]=c[3].trim().substring(1,c[3].length-1));return t}var c=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,s=/^\s*$/,u=Object.create(null);function l(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(l,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var f={parse:function(e,t){t||(t={}),t.components||(t.components=u);var n,r=[],o=[],i=-1,l=!1;if(0!==e.indexOf("<")){var f=e.indexOf("<");r.push({type:"text",content:-1===f?e:e.substring(0,f)})}return e.replace(c,(function(c,u){if(l){if(c!=="</"+n.name+">")return;l=!1}var f,p="/"!==c.charAt(1),d=c.startsWith("\x3c!--"),g=u+c.length,y=e.charAt(g);if(d){var m=a(c);return i<0?(r.push(m),r):((f=o[i]).children.push(m),r)}if(p&&(i++,"tag"===(n=a(c)).type&&t.components[n.name]&&(n.type="component",l=!0),n.voidElement||l||!y||"<"===y||n.children.push({type:"text",content:e.slice(g,e.indexOf("<",g))}),0===i&&r.push(n),(f=o[i-1])&&f.children.push(n),o[i]=n),(!p||n.voidElement)&&(i>-1&&(n.voidElement||n.name===c.slice(2,-1))&&(i--,n=-1===i?r:o[i]),!l&&"<"!==y&&y)){f=-1===i?r:o[i].children;var v=e.indexOf("<",g),h=e.slice(g,-1===v?void 0:v);s.test(h)&&(h=" "),(v>-1&&i+f.length>=0||" "!==h)&&f.push({type:"text",content:h})}})),r},stringify:function(e){return e.reduce((function(e,t){return e+l("",t)}),"")}};const p=f},46715:(e,t,n)=>{"use strict";n.r(t),n.d(t,{I18nContext:()=>v,I18nextProvider:()=>X,Trans:()=>_,Translation:()=>Q,composeInitialProps:()=>x,date:()=>oe,getDefaults:()=>b,getI18n:()=>w,getInitialProps:()=>E,initReactI18next:()=>P,number:()=>ae,plural:()=>se,select:()=>ce,selectOrdinal:()=>ue,setDefaults:()=>h,setI18n:()=>j,time:()=>ie,useSSR:()=>ee,useTranslation:()=>M,withSSR:()=>re,withTranslation:()=>J});var r=n(6914),o=n(4521),i=n(52202),a=n(98868),c=n(55834),s=n(82268),u=n(88885),l=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,f={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},p=function(e){return f[e]};function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y,m={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:function(e){return e.replace(l,p)}},v=(0,a.createContext)();function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};m=g(g({},m),e)}function b(){return m}var O=function(){function e(){(0,s.Z)(this,e),this.usedNamespaces={}}return(0,u.Z)(e,[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach((function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function j(e){y=e}function w(){return y}var P={type:"3rdParty",init:function(e){h(e.options.react),j(e)}};function x(e){return function(t){return new Promise((function(n){var r=E();e.getInitialProps?e.getInitialProps(t).then((function(e){n(g(g({},e),r))})):n(r)}))}}function E(){var e=w(),t=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],n={},r={};return e.languages.forEach((function(n){r[n]={},t.forEach((function(t){r[n][t]=e.getResourceBundle(n,t)||{}}))})),n.initialI18nStore=r,n.initialLanguage=e.language,n}function S(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var k={};function N(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&k[t[0]]||("string"==typeof t[0]&&(k[t[0]]=new Date),S.apply(void 0,t))}function I(e,t,n){e.loadNamespaces(t,(function(){e.isInitialized?n():e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}))}function Z(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.languages[0],o=!!t.options&&t.options.fallbackLng,i=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e)||!t.hasResourceBundle(r,e)&&t.services.backendConnector.backend&&(!t.options.resources||t.options.partialBundledLanguages)&&(!a(r,e)||o&&!a(i,e)))}function C(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return N("i18n.languages were undefined or empty",t.languages),!0;var r=void 0!==t.options.ignoreJSONStructure;return r?t.hasLoadedNamespace(e,{precheck:function(t,r){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):Z(e,t,n)}function D(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}var R=["format"],T=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function B(e){return e?e.props?e.props.children:e.children:[]}function U(e){return Array.isArray(e)?e:[e]}function F(e,t){if(!e)return"";var n="",i=U(e),c=t.transSupportBasicHtmlNodes&&t.transKeepBasicHtmlNodesFor?t.transKeepBasicHtmlNodesFor:[];return i.forEach((function(e,i){if("string"==typeof e)n+="".concat(e);else if((0,a.isValidElement)(e)){var s=Object.keys(e.props).length,u=c.indexOf(e.type)>-1,l=e.props.children;if(!l&&u&&0===s)n+="<".concat(e.type,"/>");else if(l||u&&0===s)if(e.props.i18nIsDynamicList)n+="<".concat(i,"></").concat(i,">");else if(u&&1===s&&"string"==typeof l)n+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var f=F(l,t);n+="<".concat(i,">").concat(f,"</").concat(i,">")}else n+="<".concat(i,"></").concat(i,">")}else if(null===e)S("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===(0,o.Z)(e)){var p=e.format,d=(0,r.Z)(e,R),g=Object.keys(d);if(1===g.length){var y=p?"".concat(g[0],", ").concat(p):g[0];n+="{{".concat(y,"}}")}else S("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else S("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}function _(e){var t=e.children,n=e.count,i=e.parent,s=e.i18nKey,u=e.context,l=e.tOptions,f=void 0===l?{}:l,p=e.values,d=e.defaults,g=e.components,y=e.ns,m=e.i18n,h=e.t,O=e.shouldUnescape,j=(0,r.Z)(e,T),P=(0,a.useContext)(v)||{},x=P.i18n,E=P.defaultNS,S=m||x||w();if(!S)return N("You will need to pass in an i18next instance by using i18nextReactModule"),t;var k=h||S.t.bind(S)||function(e){return e};u&&(f.context=u);var I=L(L({},b()),S.options&&S.options.react),Z=y||k.ns||E||S.options&&S.options.defaultNS;Z="string"==typeof Z?[Z]:Z||["translation"];var C=d||F(t,I)||I.transEmptyNodeValue||s,D=I.hashTransKey,R=s||(D?D(C):C),A=p?f.interpolation:{interpolation:L(L({},f.interpolation),{},{prefix:"#$?",suffix:"?$#"})},_=L(L(L(L({},f),{},{count:n},p),A),{},{defaultValue:C,ns:Z}),H=function(e,t,n,r,i,s){if(""===t)return[];var u=r.transKeepBasicHtmlNodesFor||[],l=t&&new RegExp(u.join("|")).test(t);if(!e&&!l)return[t];var f={};!function e(t){U(t).forEach((function(t){"string"!=typeof t&&(z(t)?e(B(t)):"object"!==(0,o.Z)(t)||(0,a.isValidElement)(t)||Object.assign(f,t))}))}(e);var p=c.Z.parse("<0>".concat(t,"</0>")),d=L(L({},f),i);function g(e,t,n){var r=B(e),o=m(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return(0,a.isValidElement)(e)}))}(r)&&0===o.length?r:o}function y(e,t,n,r,o){e.dummy&&(e.children=t),n.push((0,a.cloneElement)(e,L(L({},e.props),{},{key:r}),o?void 0:t))}function m(t,i,c){var f=U(t);return U(i).reduce((function(t,i,p){var v,h,b,O=i.children&&i.children[0]&&i.children[0].content&&n.services.interpolator.interpolate(i.children[0].content,d,n.language);if("tag"===i.type){var j=f[parseInt(i.name,10)];!j&&1===c.length&&c[0][i.name]&&(j=c[0][i.name]),j||(j={});var w=0!==Object.keys(i.attrs).length?(v={props:i.attrs},(b=L({},h=j)).props=Object.assign(v.props,h.props),b):j,P=(0,a.isValidElement)(w),x=P&&z(i,!0)&&!i.voidElement,E=l&&"object"===(0,o.Z)(w)&&w.dummy&&!P,S="object"===(0,o.Z)(e)&&null!==e&&Object.hasOwnProperty.call(e,i.name);if("string"==typeof w){var k=n.services.interpolator.interpolate(w,d,n.language);t.push(k)}else if(z(w)||x)y(w,g(w,i,c),t,p);else if(E){var N=m(f,i.children,c);t.push((0,a.cloneElement)(w,L(L({},w.props),{},{key:p}),N))}else if(Number.isNaN(parseFloat(i.name)))if(S)y(w,g(w,i,c),t,p,i.voidElement);else if(r.transSupportBasicHtmlNodes&&u.indexOf(i.name)>-1)if(i.voidElement)t.push((0,a.createElement)(i.name,{key:"".concat(i.name,"-").concat(p)}));else{var I=m(f,i.children,c);t.push((0,a.createElement)(i.name,{key:"".concat(i.name,"-").concat(p)},I))}else if(i.voidElement)t.push("<".concat(i.name," />"));else{var Z=m(f,i.children,c);t.push("<".concat(i.name,">").concat(Z,"</").concat(i.name,">"))}else if("object"!==(0,o.Z)(w)||P)1===i.children.length&&O?t.push((0,a.cloneElement)(w,L(L({},w.props),{},{key:p}),O)):t.push((0,a.cloneElement)(w,L(L({},w.props),{},{key:p})));else{var C=i.children[0]?O:null;C&&t.push(C)}}else if("text"===i.type){var D=r.transWrapTextNodes,R=s?r.unescape(n.services.interpolator.interpolate(i.content,d,n.language)):n.services.interpolator.interpolate(i.content,d,n.language);D?t.push((0,a.createElement)(D,{key:"".concat(i.name,"-").concat(p)},R)):t.push(R)}return t}),[])}return B(m([{dummy:!0,children:e||[]}],p,U(e||[]))[0])}(g||t,R?k(R,_):C,S,I,_,O),K=void 0!==i?i:I.defaultTransParent;return K?(0,a.createElement)(K,j,H):H}var H=n(4870);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=function(e,t){var n=(0,a.useRef)();return(0,a.useEffect)((function(){n.current=t?n.current:e}),[e,t]),n.current};function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=(0,a.useContext)(v)||{},o=r.i18n,i=r.defaultNS,c=n||o||w();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new O),!c){N("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},u=[s,{},!1];return u.t=s,u.i18n={},u.ready=!1,u}c.options.react&&void 0!==c.options.react.wait&&N("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=V(V(V({},b()),c.options.react),t),f=l.useSuspense,p=l.keyPrefix,d=e||i||c.options&&c.options.defaultNS;d="string"==typeof d?[d]:d||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(d);var g=(c.isInitialized||c.initializedStoreOnce)&&d.every((function(e){return C(e,c,l)}));function y(){return c.getFixedT(null,"fallback"===l.nsMode?d:d[0],p)}var m=(0,a.useState)(y),h=(0,H.Z)(m,2),j=h[0],P=h[1],x=d.join(),E=W(x),S=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=l.bindI18n,t=l.bindI18nStore;function n(){S.current&&P(y)}return S.current=!0,g||f||I(c,d,(function(){S.current&&P(y)})),g&&E&&E!==x&&S.current&&P(y),e&&c&&c.on(e,n),t&&c&&c.store.on(t,n),function(){S.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,n)})),t&&c&&t.split(" ").forEach((function(e){return c.store.off(e,n)}))}}),[c,x]);var k=(0,a.useRef)(!0);(0,a.useEffect)((function(){S.current&&!k.current&&P(y),k.current=!1}),[c,p]);var Z=[j,c,g];if(Z.t=j,Z.i18n=c,Z.ready=g,g)return Z;if(!g&&!f)return Z;throw new Promise((function(e){I(c,d,(function(){e()}))}))}var $=["forwardedRef"];function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function J(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function o(o){var i=o.forwardedRef,c=(0,r.Z)(o,$),s=M(e,Y(Y({},c),{},{keyPrefix:t.keyPrefix})),u=(0,H.Z)(s,3),l=u[0],f=u[1],p=u[2],d=Y(Y({},c),{},{t:l,i18n:f,tReady:p});return t.withRef&&i?d.ref=i:!t.withRef&&i&&(d.forwardedRef=i),(0,a.createElement)(n,d)}return o.displayName="withI18nextTranslation(".concat(D(n),")"),o.WrappedComponent=n,t.withRef?(0,a.forwardRef)((function(e,t){return(0,a.createElement)(o,Object.assign({},e,{forwardedRef:t}))})):o}}var G=["ns","children"];function Q(e){var t=e.ns,n=e.children,o=M(t,(0,r.Z)(e,G)),i=(0,H.Z)(o,3),a=i[0],c=i[1],s=i[2];return n(a,{i18n:c,lng:c.language},s)}function X(e){var t=e.i18n,n=e.defaultNS,r=e.children,o=(0,a.useMemo)((function(){return{i18n:t,defaultNS:n}}),[t,n]);return(0,a.createElement)(v.Provider,{value:o},r)}function ee(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.i18n,o=(0,a.useContext)(v)||{},i=o.i18n,c=r||i||w();c.options&&c.options.isClone||(e&&!c.initializedStoreOnce&&(c.services.resourceStore.data=e,c.options.ns=Object.values(e).reduce((function(e,t){return Object.keys(t).forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}),c.options.ns),c.initializedStoreOnce=!0,c.isInitialized=!0),t&&!c.initializedLanguageOnce&&(c.changeLanguage(t),c.initializedLanguageOnce=!0))}var te=["initialI18nStore","initialLanguage"];function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(){return function(e){function t(t){var n=t.initialI18nStore,o=t.initialLanguage,c=(0,r.Z)(t,te);return ee(n,o),(0,a.createElement)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},c))}return t.getInitialProps=x(e),t.displayName="withI18nextSSR(".concat(D(e),")"),t.WrappedComponent=e,t}}var oe=function(){return""},ie=function(){return""},ae=function(){return""},ce=function(){return""},se=function(){return""},ue=function(){return""}},89523:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},82268:(e,t,n)=>{"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:()=>r})},88885:(e,t,n)=>{"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{Z:()=>o})},52202:(e,t,n)=>{"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>r})},6914:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(14974);function o(e,t){if(null==e)return{};var n,o,i=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},14974:(e,t,n)=>{"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:()=>r})},4870:(e,t,n)=>{"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:()=>o})},4521:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:()=>r})}}]);