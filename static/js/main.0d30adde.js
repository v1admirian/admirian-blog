/*! For license information please see main.0d30adde.js.LICENSE.txt */
(()=>{var e={4:(e,t,n)=>{"use strict";var r=n(853),o=n(43),i=n(950);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}var l=Symbol.for("react.element"),c=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),m=Symbol.for("react.consumer"),g=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),b=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),w=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var k=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var S=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function C(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=j&&e[j]||e["@@iterator"])?e:null}var E=Symbol.for("react.client.reference");function T(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===E?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case d:return"Fragment";case u:return"Portal";case h:return"Profiler";case f:return"StrictMode";case y:return"Suspense";case b:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case g:return(e.displayName||"Context")+".Provider";case m:return(e._context.displayName||"Context")+".Consumer";case v:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case x:return null!==(t=e.displayName||null)?t:T(e.type)||"Memo";case w:t=e._payload,e=e._init;try{return T(e(t))}catch(n){}}return null}var A,P,z=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=Object.assign;function M(e){if(void 0===A)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);A=t&&t[1]||"",P=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+A+e+P}var R=!1;function I(e,t){if(!e||R)return"";R=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(o){var r=o}Reflect.construct(e,[],n)}else{try{n.call()}catch(i){r=i}e.call(n.prototype)}}else{try{throw Error()}catch(a){r=a}(n=e())&&"function"===typeof n.catch&&n.catch((function(){}))}}catch(s){if(s&&r&&"string"===typeof s.stack)return[s.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=r.DetermineComponentFrameRoot(),a=i[0],s=i[1];if(a&&s){var l=a.split("\n"),c=s.split("\n");for(o=r=0;r<l.length&&!l[r].includes("DetermineComponentFrameRoot");)r++;for(;o<c.length&&!c[o].includes("DetermineComponentFrameRoot");)o++;if(r===l.length||o===c.length)for(r=l.length-1,o=c.length-1;1<=r&&0<=o&&l[r]!==c[o];)o--;for(;1<=r&&0<=o;r--,o--)if(l[r]!==c[o]){if(1!==r||1!==o)do{if(r--,0>--o||l[r]!==c[o]){var u="\n"+l[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=o);break}}}finally{R=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?M(n):""}function $(e){switch(e.tag){case 26:case 27:case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 15:return e=I(e.type,!1);case 11:return e=I(e.type.render,!1);case 1:return e=I(e.type,!0);default:return""}}function L(e){try{var t="";do{t+=$(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function N(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function _(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function D(e){if(N(e)!==e)throw Error(a(188))}function F(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=F(e)))return t;e=e.sibling}return null}var B=Array.isArray,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},V=[],U=-1;function Y(e){return{current:e}}function G(e){0>U||(e.current=V[U],V[U]=null,U--)}function q(e,t){U++,V[U]=e.current,e.current=t}var K=Y(null),X=Y(null),Q=Y(null),Z=Y(null);function J(e,t){switch(q(Q,t),q(X,e),q(K,null),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?Xu(t):0;break;default:if(t=(e=8===e?t.parentNode:t).tagName,e=e.namespaceURI)t=Qu(e=Xu(e),t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}G(K),q(K,t)}function ee(){G(K),G(X),G(Q)}function te(e){null!==e.memoizedState&&q(Z,e);var t=K.current,n=Qu(t,e.type);t!==n&&(q(X,e),q(K,n))}function ne(e){X.current===e&&(G(K),G(X)),Z.current===e&&(G(Z),Ld._currentValue=W)}var re=Object.prototype.hasOwnProperty,oe=r.unstable_scheduleCallback,ie=r.unstable_cancelCallback,ae=r.unstable_shouldYield,se=r.unstable_requestPaint,le=r.unstable_now,ce=r.unstable_getCurrentPriorityLevel,ue=r.unstable_ImmediatePriority,de=r.unstable_UserBlockingPriority,fe=r.unstable_NormalPriority,he=r.unstable_LowPriority,pe=r.unstable_IdlePriority,me=r.log,ge=r.unstable_setDisableYieldValue,ve=null,ye=null;function be(e){if("function"===typeof me&&ge(e),ye&&"function"===typeof ye.setStrictMode)try{ye.setStrictMode(ve,e)}catch(t){}}var xe=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(we(e)/ke|0)|0},we=Math.log,ke=Math.LN2;var Se=128,je=4194304;function Ce(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194176&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ee(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=e.warmLanes;e=0!==e.finishedLanes;var s=134217727&n;return 0!==s?0!==(n=s&~o)?r=Ce(n):0!==(i&=s)?r=Ce(i):e||0!==(a=s&~a)&&(r=Ce(a)):0!==(s=n&~o)?r=Ce(s):0!==i?r=Ce(i):e||0!==(a=n&~a)&&(r=Ce(a)),0===r?0:0!==t&&t!==r&&0===(t&o)&&((o=r&-r)>=(a=t&-t)||32===o&&0!==(4194176&a))?t:r}function Te(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function Ae(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Pe(){var e=Se;return 0===(4194176&(Se<<=1))&&(Se=128),e}function ze(){var e=je;return 0===(62914560&(je<<=1))&&(je=4194304),e}function Oe(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Me(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Re(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-xe(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194218&n}function Ie(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}function $e(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Le(){var e=H.p;return 0!==e?e:void 0===(e=window.event)?32:Qd(e.type)}var Ne=Math.random().toString(36).slice(2),_e="__reactFiber$"+Ne,De="__reactProps$"+Ne,Fe="__reactContainer$"+Ne,Be="__reactEvents$"+Ne,He="__reactListeners$"+Ne,We="__reactHandles$"+Ne,Ve="__reactResources$"+Ne,Ue="__reactMarker$"+Ne;function Ye(e){delete e[_e],delete e[De],delete e[Be],delete e[He],delete e[We]}function Ge(e){var t=e[_e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Fe]||n[_e]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ld(e);null!==e;){if(n=e[_e])return n;e=ld(e)}return t}n=(e=n).parentNode}return null}function qe(e){if(e=e[_e]||e[Fe]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function Ke(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(a(33))}function Xe(e){var t=e[Ve];return t||(t=e[Ve]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[Ue]=!0}var Ze=new Set,Je={};function et(e,t){tt(e,t),tt(e+"Capture",t)}function tt(e,t){for(Je[e]=t,e=0;e<t.length;e++)Ze.add(t[e])}var nt=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},it={};function at(e,t,n){if(o=t,re.call(it,o)||!re.call(ot,o)&&(rt.test(o)?it[o]=!0:(ot[o]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var o}function st(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function lt(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ut(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ut(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ut(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ht(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var pt=/[\n"\\]/g;function mt(e){return e.replace(pt,(function(e){return"\\"+e.charCodeAt(0).toString(16)+" "}))}function gt(e,t,n,r,o,i,a,s){e.name="",null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a?e.type=a:e.removeAttribute("type"),null!=t?"number"===a?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):"submit"!==a&&"reset"!==a||e.removeAttribute("value"),null!=t?yt(e,a,ct(t)):null!=n?yt(e,a,ct(n)):null!=r&&e.removeAttribute("value"),null==o&&null!=i&&(e.defaultChecked=!!i),null!=o&&(e.checked=o&&"function"!==typeof o&&"symbol"!==typeof o),null!=s&&"function"!==typeof s&&"symbol"!==typeof s&&"boolean"!==typeof s?e.name=""+ct(s):e.removeAttribute("name")}function vt(e,t,n,r,o,i,a,s){if(null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.type=i),null!=t||null!=n){if(!("submit"!==i&&"reset"!==i||void 0!==t&&null!==t))return;n=null!=n?""+ct(n):"",t=null!=t?""+ct(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:o)&&"symbol"!==typeof r&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a&&(e.name=a)}function yt(e,t,n){"number"===t&&ht(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function bt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function xt(e,t,n){null==t||((t=""+ct(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ct(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(a(92));if(B(r)){if(1<r.length)throw Error(a(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ct(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var St=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jt(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||St.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ct(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(a(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var o in t)r=t[o],t.hasOwnProperty(o)&&n[o]!==r&&jt(e,o,r)}else for(var i in t)t.hasOwnProperty(i)&&jt(e,i,t[i])}function Et(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),At=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pt(e){return At.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var zt=null;function Ot(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Mt=null,Rt=null;function It(e){var t=qe(e);if(t&&(e=t.stateNode)){var n=e[De]||null;e:switch(e=t.stateNode,t.type){case"input":if(gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=r[De]||null;if(!o)throw Error(a(90));gt(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&ft(r)}break e;case"textarea":xt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&bt(e,!!n.multiple,t,!1)}}}var $t=!1;function Lt(e,t,n){if($t)return e(t,n);$t=!0;try{return e(t)}finally{if($t=!1,(null!==Mt||null!==Rt)&&(_c(),Mt&&(t=Mt,e=Rt,Rt=Mt=null,It(t),e)))for(t=0;t<e.length;t++)It(e[t])}}function Nt(e,t){var n=e.stateNode;if(null===n)return null;var r=n[De]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var _t=!1;if(nt)try{var Dt={};Object.defineProperty(Dt,"passive",{get:function(){_t=!0}}),window.addEventListener("test",Dt,Dt),window.removeEventListener("test",Dt,Dt)}catch(kf){_t=!1}var Ft=null,Bt=null,Ht=null;function Wt(){if(Ht)return Ht;var e,t,n=Bt,r=n.length,o="value"in Ft?Ft.value:Ft.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return Ht=o.slice(e,1<t?1-t:void 0)}function Vt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Ut(){return!0}function Yt(){return!1}function Gt(e){function t(t,n,r,o,i){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?Ut:Yt,this.isPropagationStopped=Yt,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Ut)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Ut)},persist:function(){},isPersistent:Ut}),t}var qt,Kt,Xt,Qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zt=Gt(Qt),Jt=O({},Qt,{view:0,detail:0}),en=Gt(Jt),tn=O({},Jt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xt&&(Xt&&"mousemove"===e.type?(qt=e.screenX-Xt.screenX,Kt=e.screenY-Xt.screenY):Kt=qt=0,Xt=e),qt)},movementY:function(e){return"movementY"in e?e.movementY:Kt}}),nn=Gt(tn),rn=Gt(O({},tn,{dataTransfer:0})),on=Gt(O({},Jt,{relatedTarget:0})),an=Gt(O({},Qt,{animationName:0,elapsedTime:0,pseudoElement:0})),sn=Gt(O({},Qt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),ln=Gt(O({},Qt,{data:0})),cn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},un={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=dn[e])&&!!t[e]}function hn(){return fn}var pn=Gt(O({},Jt,{key:function(e){if(e.key){var t=cn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Vt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?un[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hn,charCode:function(e){return"keypress"===e.type?Vt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Vt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),mn=Gt(O({},tn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),gn=Gt(O({},Jt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hn})),vn=Gt(O({},Qt,{propertyName:0,elapsedTime:0,pseudoElement:0})),yn=Gt(O({},tn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),bn=Gt(O({},Qt,{newState:0,oldState:0})),xn=[9,13,27,32],wn=nt&&"CompositionEvent"in window,kn=null;nt&&"documentMode"in document&&(kn=document.documentMode);var Sn=nt&&"TextEvent"in window&&!kn,jn=nt&&(!wn||kn&&8<kn&&11>=kn),Cn=String.fromCharCode(32),En=!1;function Tn(e,t){switch(e){case"keyup":return-1!==xn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function An(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Pn=!1;var zn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function On(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!zn[e.type]:"textarea"===t}function Mn(e,t,n,r){Mt?Rt?Rt.push(r):Rt=[r]:Mt=r,0<(t=Lu(t,"onChange")).length&&(n=new Zt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rn=null,In=null;function $n(e){Au(e,0)}function Ln(e){if(ft(Ke(e)))return e}function Nn(e,t){if("change"===e)return t}var _n=!1;if(nt){var Dn;if(nt){var Fn="oninput"in document;if(!Fn){var Bn=document.createElement("div");Bn.setAttribute("oninput","return;"),Fn="function"===typeof Bn.oninput}Dn=Fn}else Dn=!1;_n=Dn&&(!document.documentMode||9<document.documentMode)}function Hn(){Rn&&(Rn.detachEvent("onpropertychange",Wn),In=Rn=null)}function Wn(e){if("value"===e.propertyName&&Ln(In)){var t=[];Mn(t,In,e,Ot(e)),Lt($n,t)}}function Vn(e,t,n){"focusin"===e?(Hn(),In=n,(Rn=t).attachEvent("onpropertychange",Wn)):"focusout"===e&&Hn()}function Un(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Ln(In)}function Yn(e,t){if("click"===e)return Ln(t)}function Gn(e,t){if("input"===e||"change"===e)return Ln(t)}var qn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Kn(e,t){if(qn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!re.call(t,o)||!qn(e[o],t[o]))return!1}return!0}function Xn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qn(e,t){var n,r=Xn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Xn(r)}}function Zn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Zn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Jn(e){for(var t=ht((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=ht((e=t.contentWindow).document)}return t}function er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function tr(e,t){var n=Jn(t);t=e.focusedElem;var r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Zn(t.ownerDocument.documentElement,t)){if(null!==r&&er(t))if(e=r.start,void 0===(n=r.end)&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if((n=(e=t.ownerDocument||document)&&e.defaultView||window).getSelection){n=n.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=void 0===r.end?i:Math.min(r.end,o),!n.extend&&i>r&&(o=r,r=i,i=o),o=Qn(t,i);var a=Qn(t,r);o&&a&&(1!==n.rangeCount||n.anchorNode!==o.node||n.anchorOffset!==o.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&((e=e.createRange()).setStart(o.node,o.offset),n.removeAllRanges(),i>r?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}for(e=[],n=t;n=n.parentNode;)1===n.nodeType&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for("function"===typeof t.focus&&t.focus(),t=0;t<e.length;t++)(n=e[t]).element.scrollLeft=n.left,n.element.scrollTop=n.top}}var nr=nt&&"documentMode"in document&&11>=document.documentMode,rr=null,or=null,ir=null,ar=!1;function sr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;ar||null==rr||rr!==ht(r)||("selectionStart"in(r=rr)&&er(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ir&&Kn(ir,r)||(ir=r,0<(r=Lu(or,"onSelect")).length&&(t=new Zt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},ur={},dr={};function fr(e){if(ur[e])return ur[e];if(!cr[e])return e;var t,n=cr[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return ur[e]=n[t];return e}nt&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);var hr=fr("animationend"),pr=fr("animationiteration"),mr=fr("animationstart"),gr=fr("transitionrun"),vr=fr("transitionstart"),yr=fr("transitioncancel"),br=fr("transitionend"),xr=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function kr(e,t){xr.set(e,t),et(t,[e])}var Sr=[],jr=0,Cr=0;function Er(){for(var e=jr,t=Cr=jr=0;t<e;){var n=Sr[t];Sr[t++]=null;var r=Sr[t];Sr[t++]=null;var o=Sr[t];Sr[t++]=null;var i=Sr[t];if(Sr[t++]=null,null!==r&&null!==o){var a=r.pending;null===a?o.next=o:(o.next=a.next,a.next=o),r.pending=o}0!==i&&zr(n,o,i)}}function Tr(e,t,n,r){Sr[jr++]=e,Sr[jr++]=t,Sr[jr++]=n,Sr[jr++]=r,Cr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Ar(e,t,n,r){return Tr(e,t,n,r),Or(e)}function Pr(e,t){return Tr(e,null,null,t),Or(e)}function zr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var o=!1,i=e.return;null!==i;)i.childLanes|=n,null!==(r=i.alternate)&&(r.childLanes|=n),22===i.tag&&(null===(e=i.stateNode)||1&e._visibility||(o=!0)),e=i,i=i.return;o&&null!==t&&3===e.tag&&(i=e.stateNode,o=31-xe(n),null===(e=(i=i.hiddenUpdates)[o])?i[o]=[t]:e.push(t),t.lane=536870912|n)}function Or(e){if(50<Ac)throw Ac=0,Pc=null,Error(a(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Mr={},Rr=new WeakMap;function Ir(e,t){if("object"===typeof e&&null!==e){var n=Rr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:L(t)},Rr.set(e,t),t)}return{value:e,source:t,stack:L(t)}}var $r=[],Lr=0,Nr=null,_r=0,Dr=[],Fr=0,Br=null,Hr=1,Wr="";function Vr(e,t){$r[Lr++]=_r,$r[Lr++]=Nr,Nr=e,_r=t}function Ur(e,t,n){Dr[Fr++]=Hr,Dr[Fr++]=Wr,Dr[Fr++]=Br,Br=e;var r=Hr;e=Wr;var o=32-xe(r)-1;r&=~(1<<o),n+=1;var i=32-xe(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Hr=1<<32-xe(t)+o|n<<o|r,Wr=i+e}else Hr=1<<i|n<<o|r,Wr=e}function Yr(e){null!==e.return&&(Vr(e,1),Ur(e,1,0))}function Gr(e){for(;e===Nr;)Nr=$r[--Lr],$r[Lr]=null,_r=$r[--Lr],$r[Lr]=null;for(;e===Br;)Br=Dr[--Fr],Dr[Fr]=null,Wr=Dr[--Fr],Dr[Fr]=null,Hr=Dr[--Fr],Dr[Fr]=null}var qr=null,Kr=null,Xr=!1,Qr=null,Zr=!1,Jr=Error(a(519));function eo(e){throw io(Ir(Error(a(418,"")),e)),Jr}function to(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[_e]=e,t[De]=r,n){case"dialog":Pu("cancel",t),Pu("close",t);break;case"iframe":case"object":case"embed":Pu("load",t);break;case"video":case"audio":for(n=0;n<Eu.length;n++)Pu(Eu[n],t);break;case"source":Pu("error",t);break;case"img":case"image":case"link":Pu("error",t),Pu("load",t);break;case"details":Pu("toggle",t);break;case"input":Pu("invalid",t),vt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),dt(t);break;case"select":Pu("invalid",t);break;case"textarea":Pu("invalid",t),wt(t,r.value,r.defaultValue,r.children),dt(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Hu(t.textContent,n)?(null!=r.popover&&(Pu("beforetoggle",t),Pu("toggle",t)),null!=r.onScroll&&Pu("scroll",t),null!=r.onScrollEnd&&Pu("scrollend",t),null!=r.onClick&&(t.onclick=Wu),t=!0):t=!1,t||eo(e)}function no(e){for(qr=e.return;qr;)switch(qr.tag){case 3:case 27:return void(Zr=!0);case 5:case 13:return void(Zr=!1);default:qr=qr.return}}function ro(e){if(e!==qr)return!1;if(!Xr)return no(e),Xr=!0,!1;var t,n=!1;if((t=3!==e.tag&&27!==e.tag)&&((t=5===e.tag)&&(t=!("form"!==(t=e.type)&&"button"!==t)||Zu(e.type,e.memoizedProps)),t=!t),t&&(n=!0),n&&Kr&&eo(e),no(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){Kr=sd(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}Kr=null}}else Kr=qr?sd(e.stateNode.nextSibling):null;return!0}function oo(){Kr=qr=null,Xr=!1}function io(e){null===Qr?Qr=[e]:Qr.push(e)}var ao=Error(a(460)),so=Error(a(474)),lo={then:function(){}};function co(e){return"fulfilled"===(e=e.status)||"rejected"===e}function uo(){}function fo(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(uo,uo),t=n),t.status){case"fulfilled":return t.value;case"rejected":if((e=t.reason)===ao)throw Error(a(483));throw e;default:if("string"===typeof t.status)t.then(uo,uo);else{if(null!==(e=tc)&&100<e.shellSuspendCounter)throw Error(a(482));(e=t).status="pending",e.then((function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}}),(function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}}))}switch(t.status){case"fulfilled":return t.value;case"rejected":if((e=t.reason)===ao)throw Error(a(483));throw e}throw ho=t,ao}}var ho=null;function po(){if(null===ho)throw Error(a(459));var e=ho;return ho=null,e}var mo=null,go=0;function vo(e){var t=go;return go+=1,null===mo&&(mo=[]),fo(mo,e,t)}function yo(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function bo(e,t){if(t.$$typeof===l)throw Error(a(525));throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xo(e){return(0,e._init)(e._payload)}function wo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function o(e,t){return(e=Nl(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=33554434,n):r:(t.flags|=33554434,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=33554434),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Hl(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function f(e,t,n,r){var i=n.type;return i===d?p(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===w&&xo(i)===t.type)?(yo(t=o(t,n.props),n),t.return=e,t):(yo(t=Dl(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function h(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Wl(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function p(e,t,n,r,i){return null===t||7!==t.tag?((t=Fl(n,e.mode,r,i)).return=e,t):((t=o(t,n)).return=e,t)}function m(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Hl(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case c:return yo(n=Dl(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case u:return(t=Wl(t,e.mode,n)).return=e,t;case w:return m(e,t=(0,t._init)(t._payload),n)}if(B(t)||C(t))return(t=Fl(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return m(e,vo(t),n);if(t.$$typeof===g)return m(e,Es(e,t),n);bo(e,t)}return null}function v(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==o?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case c:return n.key===o?f(e,t,n,r):null;case u:return n.key===o?h(e,t,n,r):null;case w:return v(e,t,n=(o=n._init)(n._payload),r)}if(B(n)||C(n))return null!==o?null:p(e,t,n,r,null);if("function"===typeof n.then)return v(e,t,vo(n),r);if(n.$$typeof===g)return v(e,t,Es(e,n),r);bo(e,n)}return null}function y(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return l(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case c:return f(t,e=e.get(null===r.key?n:r.key)||null,r,o);case u:return h(t,e=e.get(null===r.key?n:r.key)||null,r,o);case w:return y(e,t,n,r=(0,r._init)(r._payload),o)}if(B(r)||C(r))return p(t,e=e.get(n)||null,r,o,null);if("function"===typeof r.then)return y(e,t,n,vo(r),o);if(r.$$typeof===g)return y(e,t,n,Es(t,r),o);bo(t,r)}return null}function b(l,f,h,p){if("object"===typeof h&&null!==h&&h.type===d&&null===h.key&&(h=h.props.children),"object"===typeof h&&null!==h){switch(h.$$typeof){case c:e:{for(var x=h.key;null!==f;){if(f.key===x){if((x=h.type)===d){if(7===f.tag){n(l,f.sibling),(p=o(f,h.props.children)).return=l,l=p;break e}}else if(f.elementType===x||"object"===typeof x&&null!==x&&x.$$typeof===w&&xo(x)===f.type){n(l,f.sibling),yo(p=o(f,h.props),h),p.return=l,l=p;break e}n(l,f);break}t(l,f),f=f.sibling}h.type===d?((p=Fl(h.props.children,l.mode,p,h.key)).return=l,l=p):(yo(p=Dl(h.type,h.key,h.props,null,l.mode,p),h),p.return=l,l=p)}return s(l);case u:e:{for(x=h.key;null!==f;){if(f.key===x){if(4===f.tag&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(l,f.sibling),(p=o(f,h.children||[])).return=l,l=p;break e}n(l,f);break}t(l,f),f=f.sibling}(p=Wl(h,l.mode,p)).return=l,l=p}return s(l);case w:return b(l,f,h=(x=h._init)(h._payload),p)}if(B(h))return function(o,a,s,l){for(var c=null,u=null,d=a,f=a=0,h=null;null!==d&&f<s.length;f++){d.index>f?(h=d,d=null):h=d.sibling;var p=v(o,d,s[f],l);if(null===p){null===d&&(d=h);break}e&&d&&null===p.alternate&&t(o,d),a=i(p,a,f),null===u?c=p:u.sibling=p,u=p,d=h}if(f===s.length)return n(o,d),Xr&&Vr(o,f),c;if(null===d){for(;f<s.length;f++)null!==(d=m(o,s[f],l))&&(a=i(d,a,f),null===u?c=d:u.sibling=d,u=d);return Xr&&Vr(o,f),c}for(d=r(d);f<s.length;f++)null!==(h=y(d,o,f,s[f],l))&&(e&&null!==h.alternate&&d.delete(null===h.key?f:h.key),a=i(h,a,f),null===u?c=h:u.sibling=h,u=h);return e&&d.forEach((function(e){return t(o,e)})),Xr&&Vr(o,f),c}(l,f,h,p);if(C(h)){if("function"!==typeof(x=C(h)))throw Error(a(150));return function(o,s,l,c){if(null==l)throw Error(a(151));for(var u=null,d=null,f=s,h=s=0,p=null,g=l.next();null!==f&&!g.done;h++,g=l.next()){f.index>h?(p=f,f=null):p=f.sibling;var b=v(o,f,g.value,c);if(null===b){null===f&&(f=p);break}e&&f&&null===b.alternate&&t(o,f),s=i(b,s,h),null===d?u=b:d.sibling=b,d=b,f=p}if(g.done)return n(o,f),Xr&&Vr(o,h),u;if(null===f){for(;!g.done;h++,g=l.next())null!==(g=m(o,g.value,c))&&(s=i(g,s,h),null===d?u=g:d.sibling=g,d=g);return Xr&&Vr(o,h),u}for(f=r(f);!g.done;h++,g=l.next())null!==(g=y(f,o,h,g.value,c))&&(e&&null!==g.alternate&&f.delete(null===g.key?h:g.key),s=i(g,s,h),null===d?u=g:d.sibling=g,d=g);return e&&f.forEach((function(e){return t(o,e)})),Xr&&Vr(o,h),u}(l,f,h=x.call(h),p)}if("function"===typeof h.then)return b(l,f,vo(h),p);if(h.$$typeof===g)return b(l,f,Es(l,h),p);bo(l,h)}return"string"===typeof h&&""!==h||"number"===typeof h||"bigint"===typeof h?(h=""+h,null!==f&&6===f.tag?(n(l,f.sibling),(p=o(f,h)).return=l,l=p):(n(l,f),(p=Hl(h,l.mode,p)).return=l,l=p),s(l)):n(l,f)}return function(e,t,n,r){try{go=0;var o=b(e,t,n,r);return mo=null,o}catch(a){if(a===ao)throw a;var i=$l(29,a,null,e.mode);return i.lanes=r,i.return=e,i}}}var ko=wo(!0),So=wo(!1),jo=Y(null),Co=Y(0);function Eo(e,t){q(Co,e=cc),q(jo,t),cc=e|t.baseLanes}function To(){q(Co,cc),q(jo,jo.current)}function Ao(){cc=Co.current,G(jo),G(Co)}var Po=Y(null),zo=null;function Oo(e){var t=e.alternate;q($o,1&$o.current),q(Po,e),null===zo&&(null===t||null!==jo.current||null!==t.memoizedState)&&(zo=e)}function Mo(e){if(22===e.tag){if(q($o,$o.current),q(Po,e),null===zo){var t=e.alternate;null!==t&&null!==t.memoizedState&&(zo=e)}}else Ro()}function Ro(){q($o,$o.current),q(Po,Po.current)}function Io(e){G(Po),zo===e&&(zo=null),G($o)}var $o=Y(0);function Lo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var No="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach((function(e){return e()}))}},_o=r.unstable_scheduleCallback,Do=r.unstable_NormalPriority,Fo={$$typeof:g,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bo(){return{controller:new No,data:new Map,refCount:0}}function Ho(e){e.refCount--,0===e.refCount&&_o(Do,(function(){e.controller.abort()}))}var Wo=null,Vo=0,Uo=0,Yo=null;function Go(){if(0===--Vo&&null!==Wo){null!==Yo&&(Yo.status="fulfilled");var e=Wo;Wo=null,Uo=0,Yo=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var qo=z.S;z.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Wo){var n=Wo=[];Vo=0,Uo=wu(),Yo={status:"pending",value:void 0,then:function(e){n.push(e)}}}Vo++,t.then(Go,Go)}(0,t),null!==qo&&qo(e,t)};var Ko=Y(null);function Xo(){var e=Ko.current;return null!==e?e:tc.pooledCache}function Qo(e,t){q(Ko,null===t?Ko.current:t.pool)}function Zo(){var e=Xo();return null===e?null:{parent:Fo._currentValue,pool:e}}var Jo=0,ei=null,ti=null,ni=null,ri=!1,oi=!1,ii=!1,ai=0,si=0,li=null,ci=0;function ui(){throw Error(a(321))}function di(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qn(e[n],t[n]))return!1;return!0}function fi(e,t,n,r,o,i){return Jo=i,ei=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=null===e||null===e.memoizedState?Ea:Ta,ii=!1,i=n(r,o),ii=!1,oi&&(i=pi(t,n,r,o)),hi(e),i}function hi(e){z.H=Ca;var t=null!==ti&&null!==ti.next;if(Jo=0,ni=ti=ei=null,ri=!1,si=0,li=null,t)throw Error(a(300));null===e||Va||null!==(e=e.dependencies)&&Ss(e)&&(Va=!0)}function pi(e,t,n,r){ei=e;var o=0;do{if(oi&&(li=null),si=0,oi=!1,25<=o)throw Error(a(301));if(o+=1,ni=ti=null,null!=e.updateQueue){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,null!=i.memoCache&&(i.memoCache.index=0)}z.H=Aa,i=t(n,r)}while(oi);return i}function mi(){var e=z.H,t=e.useState()[0];return t="function"===typeof t.then?wi(t):t,e=e.useState()[0],(null!==ti?ti.memoizedState:null)!==e&&(ei.flags|=1024),t}function gi(){var e=0!==ai;return ai=0,e}function vi(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function yi(e){if(ri){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}ri=!1}Jo=0,ni=ti=ei=null,oi=!1,si=ai=0,li=null}function bi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ni?ei.memoizedState=ni=e:ni=ni.next=e,ni}function xi(){if(null===ti){var e=ei.alternate;e=null!==e?e.memoizedState:null}else e=ti.next;var t=null===ni?ei.memoizedState:ni.next;if(null!==t)ni=t,ti=e;else{if(null===e){if(null===ei.alternate)throw Error(a(467));throw Error(a(310))}e={memoizedState:(ti=e).memoizedState,baseState:ti.baseState,baseQueue:ti.baseQueue,queue:ti.queue,next:null},null===ni?ei.memoizedState=ni=e:ni=ni.next=e}return ni}function wi(e){var t=si;return si+=1,null===li&&(li=[]),e=fo(li,e,t),t=ei,null===(null===ni?t.memoizedState:ni.next)&&(t=t.alternate,z.H=null===t||null===t.memoizedState?Ea:Ta),e}function ki(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return wi(e);if(e.$$typeof===g)return Cs(e)}throw Error(a(438,String(e)))}function Si(e){var t=null,n=ei.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=ei.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map((function(e){return e.slice()})),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},ei.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=S;return t.index++,n}function ji(e,t){return"function"===typeof t?t(e):t}function Ci(e){return Ei(xi(),ti,e)}function Ei(e,t,n){var r=e.queue;if(null===r)throw Error(a(311));r.lastRenderedReducer=n;var o=e.baseQueue,i=r.pending;if(null!==i){if(null!==o){var s=o.next;o.next=i.next,i.next=s}t.baseQueue=o=i,r.pending=null}if(i=e.baseState,null===o)e.memoizedState=i;else{var l=s=null,c=null,u=t=o.next,d=!1;do{var f=-536870913&u.lane;if(f!==u.lane?(rc&f)===f:(Jo&f)===f){var h=u.revertLane;if(0===h)null!==c&&(c=c.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Uo&&(d=!0);else{if((Jo&h)===h){u=u.next,h===Uo&&(d=!0);continue}f={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=f,s=i):c=c.next=f,ei.lanes|=h,dc|=h}f=u.action,ii&&n(i,f),i=u.hasEagerState?u.eagerState:n(i,f)}else h={lane:f,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=h,s=i):c=c.next=h,ei.lanes|=f,dc|=f;u=u.next}while(null!==u&&u!==t);if(null===c?s=i:c.next=l,!qn(i,e.memoizedState)&&(Va=!0,d&&null!==(n=Yo)))throw n;e.memoizedState=i,e.baseState=s,e.baseQueue=c,r.lastRenderedState=i}return null===o&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ti(e){var t=xi(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(null!==o){n.pending=null;var s=o=o.next;do{i=e(i,s.action),s=s.next}while(s!==o);qn(i,t.memoizedState)||(Va=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ai(e,t,n){var r=ei,o=xi(),i=Xr;if(i){if(void 0===n)throw Error(a(407));n=n()}else n=t();var s=!qn((ti||o).memoizedState,n);if(s&&(o.memoizedState=n,Va=!0),o=o.queue,Ji(Oi.bind(null,r,o,e),[e]),o.getSnapshot!==t||s||null!==ni&&1&ni.memoizedState.tag){if(r.flags|=2048,qi(9,zi.bind(null,r,o,n,t),{destroy:void 0},null),null===tc)throw Error(a(349));i||0!==(60&Jo)||Pi(r,t,n)}return n}function Pi(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ei.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},ei.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function zi(e,t,n,r){t.value=n,t.getSnapshot=r,Mi(t)&&Ri(e)}function Oi(e,t,n){return n((function(){Mi(t)&&Ri(e)}))}function Mi(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qn(e,n)}catch(r){return!0}}function Ri(e){var t=Pr(e,2);null!==t&&Mc(t,e,2)}function Ii(e){var t=bi();if("function"===typeof e){var n=e;if(e=n(),ii){be(!0);try{n()}finally{be(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},t}function $i(e,t,n,r){return e.baseState=n,Ei(e,ti,"function"===typeof r?r:ji)}function Li(e,t,n,r,o){if(ka(e))throw Error(a(485));if(null!==(e=t.action)){var i={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){i.listeners.push(e)}};null!==z.T?n(!0):i.isTransition=!1,r(i),null===(n=t.pending)?(i.next=t.pending=i,Ni(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Ni(e,t){var n=t.action,r=t.payload,o=e.state;if(t.isTransition){var i=z.T,a={};z.T=a;try{var s=n(o,r),l=z.S;null!==l&&l(a,s),_i(e,t,s)}catch(c){Fi(e,t,c)}finally{z.T=i}}else try{_i(e,t,i=n(o,r))}catch(u){Fi(e,t,u)}}function _i(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then((function(n){Di(e,t,n)}),(function(n){return Fi(e,t,n)})):Di(e,t,n)}function Di(e,t,n){t.status="fulfilled",t.value=n,Bi(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,Ni(e,n)))}function Fi(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,Bi(t),t=t.next}while(t!==r)}e.action=null}function Bi(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Hi(e,t){return t}function Wi(e,t){if(Xr){var n=tc.formState;if(null!==n){e:{var r=ei;if(Xr){if(Kr){t:{for(var o=Kr,i=Zr;8!==o.nodeType;){if(!i){o=null;break t}if(null===(o=sd(o.nextSibling))){o=null;break t}}o="F!"===(i=o.data)||"F"===i?o:null}if(o){Kr=sd(o.nextSibling),r="F!"===o.data;break e}}eo(r)}r=!1}r&&(t=n[0])}}return(n=bi()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:t},n.queue=r,n=ba.bind(null,ei,r),r.dispatch=n,r=Ii(!1),i=wa.bind(null,ei,!1,r.queue),o={state:t,dispatch:null,action:e,pending:null},(r=bi()).queue=o,n=Li.bind(null,ei,o,i,n),o.dispatch=n,r.memoizedState=e,[t,n,!1]}function Vi(e){return Ui(xi(),ti,e)}function Ui(e,t,n){t=Ei(e,t,Hi)[0],e=Ci(ji)[0],t="object"===typeof t&&null!==t&&"function"===typeof t.then?wi(t):t;var r=xi(),o=r.queue,i=o.dispatch;return n!==r.memoizedState&&(ei.flags|=2048,qi(9,Yi.bind(null,o,n),{destroy:void 0},null)),[t,i,e]}function Yi(e,t){e.action=t}function Gi(e){var t=xi(),n=ti;if(null!==n)return Ui(t,n,e);xi(),t=t.memoizedState;var r=(n=xi()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function qi(e,t,n,r){return e={tag:e,create:t,inst:n,deps:r,next:null},null===(t=ei.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},ei.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ki(){return xi().memoizedState}function Xi(e,t,n,r){var o=bi();ei.flags|=e,o.memoizedState=qi(1|t,n,{destroy:void 0},void 0===r?null:r)}function Qi(e,t,n,r){var o=xi();r=void 0===r?null:r;var i=o.memoizedState.inst;null!==ti&&null!==r&&di(r,ti.memoizedState.deps)?o.memoizedState=qi(t,n,i,r):(ei.flags|=e,o.memoizedState=qi(1|t,n,i,r))}function Zi(e,t){Xi(8390656,8,e,t)}function Ji(e,t){Qi(2048,8,e,t)}function ea(e,t){return Qi(4,2,e,t)}function ta(e,t){return Qi(4,4,e,t)}function na(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function ra(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Qi(4,4,na.bind(null,t,e),n)}function oa(){}function ia(e,t){var n=xi();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&di(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function aa(e,t){var n=xi();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&di(t,r[1]))return r[0];if(r=e(),ii){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r}function sa(e,t,n){return void 0===n||0!==(1073741824&Jo)?e.memoizedState=t:(e.memoizedState=n,e=Oc(),ei.lanes|=e,dc|=e,n)}function la(e,t,n,r){return qn(n,t)?n:null!==jo.current?(e=sa(e,n,r),qn(e,t)||(Va=!0),e):0===(42&Jo)?(Va=!0,e.memoizedState=n):(e=Oc(),ei.lanes|=e,dc|=e,t)}function ca(e,t,n,r,o){var i=H.p;H.p=0!==i&&8>i?i:8;var a=z.T,s={};z.T=s,wa(e,!1,t,n);try{var l=o(),c=z.S;if(null!==c&&c(s,l),null!==l&&"object"===typeof l&&"function"===typeof l.then)xa(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then((function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)}),(function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)})),r}(l,r),zc());else xa(e,t,r,zc())}catch(u){xa(e,t,{then:function(){},status:"rejected",reason:u},zc())}finally{H.p=i,z.T=a}}function ua(){}function da(e,t,n,r){if(5!==e.tag)throw Error(a(476));var o=fa(e).queue;ca(e,o,t,W,null===n?ua:function(){return ha(e),n(r)})}function fa(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:W},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function ha(e){xa(e,fa(e).next.queue,{},zc())}function pa(){return Cs(Ld)}function ma(){return xi().memoizedState}function ga(){return xi().memoizedState}function va(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=zc(),r=Ms(t,e=Os(n),n);return null!==r&&(Mc(r,t,n),Rs(r,t,n)),t={cache:Bo()},void(e.payload=t)}t=t.return}}function ya(e,t,n){var r=zc();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ka(e)?Sa(t,n):null!==(n=Ar(e,t,n,r))&&(Mc(n,e,r),ja(n,t,r))}function ba(e,t,n){xa(e,t,n,zc())}function xa(e,t,n,r){var o={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ka(e))Sa(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,qn(s,a))return Tr(e,t,o,0),null===tc&&Er(),!1}catch(l){}if(null!==(n=Ar(e,t,o,r)))return Mc(n,e,r),ja(n,t,r),!0}return!1}function wa(e,t,n,r){if(r={lane:2,revertLane:wu(),action:r,hasEagerState:!1,eagerState:null,next:null},ka(e)){if(t)throw Error(a(479))}else null!==(t=Ar(e,n,r,2))&&Mc(t,e,2)}function ka(e){var t=e.alternate;return e===ei||null!==t&&t===ei}function Sa(e,t){oi=ri=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ja(e,t,n){if(0!==(4194176&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ie(e,n)}}var Ca={readContext:Cs,use:ki,useCallback:ui,useContext:ui,useEffect:ui,useImperativeHandle:ui,useLayoutEffect:ui,useInsertionEffect:ui,useMemo:ui,useReducer:ui,useRef:ui,useState:ui,useDebugValue:ui,useDeferredValue:ui,useTransition:ui,useSyncExternalStore:ui,useId:ui};Ca.useCacheRefresh=ui,Ca.useMemoCache=ui,Ca.useHostTransitionStatus=ui,Ca.useFormState=ui,Ca.useActionState=ui,Ca.useOptimistic=ui;var Ea={readContext:Cs,use:ki,useCallback:function(e,t){return bi().memoizedState=[e,void 0===t?null:t],e},useContext:Cs,useEffect:Zi,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Xi(4194308,4,na.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xi(4194308,4,e,t)},useInsertionEffect:function(e,t){Xi(4,2,e,t)},useMemo:function(e,t){var n=bi();t=void 0===t?null:t;var r=e();if(ii){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=bi();if(void 0!==n){var o=n(t);if(ii){be(!0);try{n(t)}finally{be(!1)}}}else o=t;return r.memoizedState=r.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},r.queue=e,e=e.dispatch=ya.bind(null,ei,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},bi().memoizedState=e},useState:function(e){var t=(e=Ii(e)).queue,n=ba.bind(null,ei,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:oa,useDeferredValue:function(e,t){return sa(bi(),e,t)},useTransition:function(){var e=Ii(!1);return e=ca.bind(null,ei,e.queue,!0,!1),bi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=ei,o=bi();if(Xr){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===tc)throw Error(a(349));0!==(60&rc)||Pi(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Zi(Oi.bind(null,r,i,e),[e]),r.flags|=2048,qi(9,zi.bind(null,r,i,n,t),{destroy:void 0},null),n},useId:function(){var e=bi(),t=tc.identifierPrefix;if(Xr){var n=Wr;t=":"+t+"R"+(n=(Hr&~(1<<32-xe(Hr)-1)).toString(32)+n),0<(n=ai++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ci++).toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return bi().memoizedState=va.bind(null,ei)}};Ea.useMemoCache=Si,Ea.useHostTransitionStatus=pa,Ea.useFormState=Wi,Ea.useActionState=Wi,Ea.useOptimistic=function(e){var t=bi();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=wa.bind(null,ei,!0,n),n.dispatch=t,[e,t]};var Ta={readContext:Cs,use:ki,useCallback:ia,useContext:Cs,useEffect:Ji,useImperativeHandle:ra,useInsertionEffect:ea,useLayoutEffect:ta,useMemo:aa,useReducer:Ci,useRef:Ki,useState:function(){return Ci(ji)},useDebugValue:oa,useDeferredValue:function(e,t){return la(xi(),ti.memoizedState,e,t)},useTransition:function(){var e=Ci(ji)[0],t=xi().memoizedState;return["boolean"===typeof e?e:wi(e),t]},useSyncExternalStore:Ai,useId:ma};Ta.useCacheRefresh=ga,Ta.useMemoCache=Si,Ta.useHostTransitionStatus=pa,Ta.useFormState=Vi,Ta.useActionState=Vi,Ta.useOptimistic=function(e,t){return $i(xi(),0,e,t)};var Aa={readContext:Cs,use:ki,useCallback:ia,useContext:Cs,useEffect:Ji,useImperativeHandle:ra,useInsertionEffect:ea,useLayoutEffect:ta,useMemo:aa,useReducer:Ti,useRef:Ki,useState:function(){return Ti(ji)},useDebugValue:oa,useDeferredValue:function(e,t){var n=xi();return null===ti?sa(n,e,t):la(n,ti.memoizedState,e,t)},useTransition:function(){var e=Ti(ji)[0],t=xi().memoizedState;return["boolean"===typeof e?e:wi(e),t]},useSyncExternalStore:Ai,useId:ma};function Pa(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:O({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}Aa.useCacheRefresh=ga,Aa.useMemoCache=Si,Aa.useHostTransitionStatus=pa,Aa.useFormState=Gi,Aa.useActionState=Gi,Aa.useOptimistic=function(e,t){var n=xi();return null!==ti?$i(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])};var za={isMounted:function(e){return!!(e=e._reactInternals)&&N(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=zc(),o=Os(r);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Ms(e,o,r))&&(Mc(t,e,r),Rs(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=zc(),o=Os(r);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Ms(e,o,r))&&(Mc(t,e,r),Rs(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=zc(),r=Os(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=Ms(e,r,n))&&(Mc(t,e,n),Rs(t,e,n))}};function Oa(e,t,n,r,o,i,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!Kn(n,r)||!Kn(o,i))}function Ma(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&za.enqueueReplaceState(t,t.state,null)}function Ra(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var o in n===t&&(n=O({},n)),e)void 0===n[o]&&(n[o]=e[o]);return n}var Ia="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function $a(e){Ia(e)}function La(e){console.error(e)}function Na(e){Ia(e)}function _a(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout((function(){throw n}))}}function Da(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout((function(){throw r}))}}function Fa(e,t,n){return(n=Os(n)).tag=3,n.payload={element:null},n.callback=function(){_a(e,t)},n}function Ba(e){return(e=Os(e)).tag=3,e}function Ha(e,t,n,r){var o=n.type.getDerivedStateFromError;if("function"===typeof o){var i=r.value;e.payload=function(){return o(i)},e.callback=function(){Da(t,n,r)}}var a=n.stateNode;null!==a&&"function"===typeof a.componentDidCatch&&(e.callback=function(){Da(t,n,r),"function"!==typeof o&&(null===kc?kc=new Set([this]):kc.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Wa=Error(a(461)),Va=!1;function Ua(e,t,n,r){t.child=null===e?So(t,null,n,r):ko(t,e.child,n,r)}function Ya(e,t,n,r,o){n=n.render;var i=t.ref;if("ref"in r){var a={};for(var s in r)"ref"!==s&&(a[s]=r[s])}else a=r;return js(t),r=fi(e,t,n,a,i,o),s=gi(),null===e||Va?(Xr&&s&&Yr(t),t.flags|=1,Ua(e,t,r,o),t.child):(vi(e,t,o),fs(e,t,o))}function Ga(e,t,n,r,o){if(null===e){var i=n.type;return"function"!==typeof i||Ll(i)||void 0!==i.defaultProps||null!==n.compare?((e=Dl(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,qa(e,t,i,r,o))}if(i=e.child,!hs(e,o)){var a=i.memoizedProps;if((n=null!==(n=n.compare)?n:Kn)(a,r)&&e.ref===t.ref)return fs(e,t,o)}return t.flags|=1,(e=Nl(i,r)).ref=t.ref,e.return=t,t.child=e}function qa(e,t,n,r,o){if(null!==e){var i=e.memoizedProps;if(Kn(i,r)&&e.ref===t.ref){if(Va=!1,t.pendingProps=r=i,!hs(e,o))return t.lanes=e.lanes,fs(e,t,o);0!==(131072&e.flags)&&(Va=!0)}}return Za(e,t,n,r,o)}function Ka(e,t,n){var r=t.pendingProps,o=r.children,i=0!==(2&t.stateNode._pendingVisibility),a=null!==e?e.memoizedState:null;if(Qa(e,t),"hidden"===r.mode||i){if(0!==(128&t.flags)){if(r=null!==a?a.baseLanes|n:n,null!==e){for(o=t.child=e.child,i=0;null!==o;)i=i|o.lanes|o.childLanes,o=o.sibling;t.childLanes=i&~r}else t.childLanes=0,t.child=null;return Xa(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,Xa(e,t,null!==a?a.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Qo(0,null!==a?a.cachePool:null),null!==a?Eo(t,a):To(),Mo(t)}else null!==a?(Qo(0,a.cachePool),Eo(t,a),Ro(),t.memoizedState=null):(null!==e&&Qo(0,null),To(),Ro());return Ua(e,t,o,n),t.child}function Xa(e,t,n,r){var o=Xo();return o=null===o?null:{parent:Fo._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},null!==e&&Qo(0,null),To(),Mo(t),null!==e&&ks(e,t,r,!0),null}function Qa(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=2097664);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(a(284));null!==e&&e.ref===n||(t.flags|=2097664)}}function Za(e,t,n,r,o){return js(t),n=fi(e,t,n,r,void 0,o),r=gi(),null===e||Va?(Xr&&r&&Yr(t),t.flags|=1,Ua(e,t,n,o),t.child):(vi(e,t,o),fs(e,t,o))}function Ja(e,t,n,r,o,i){return js(t),t.updateQueue=null,n=pi(t,r,n,o),hi(e),r=gi(),null===e||Va?(Xr&&r&&Yr(t),t.flags|=1,Ua(e,t,n,i),t.child):(vi(e,t,i),fs(e,t,i))}function es(e,t,n,r,o){if(js(t),null===t.stateNode){var i=Mr,a=n.contextType;"object"===typeof a&&null!==a&&(i=Cs(a)),i=new n(r,i),t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,i.updater=za,t.stateNode=i,i._reactInternals=t,(i=t.stateNode).props=r,i.state=t.memoizedState,i.refs={},Ps(t),a=n.contextType,i.context="object"===typeof a&&null!==a?Cs(a):Mr,i.state=t.memoizedState,"function"===typeof(a=n.getDerivedStateFromProps)&&(Pa(t,n,a,r),i.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(a=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),a!==i.state&&za.enqueueReplaceState(i,i.state,null),Ns(t,r,i,o),Ls(),i.state=t.memoizedState),"function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){i=t.stateNode;var s=t.memoizedProps,l=Ra(n,s);i.props=l;var c=i.context,u=n.contextType;a=Mr,"object"===typeof u&&null!==u&&(a=Cs(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof i.getSnapshotBeforeUpdate,s=t.pendingProps!==s,u||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(s||c!==a)&&Ma(t,i,r,a),As=!1;var f=t.memoizedState;i.state=f,Ns(t,r,i,o),Ls(),c=t.memoizedState,s||f!==c||As?("function"===typeof d&&(Pa(t,n,d,r),c=t.memoizedState),(l=As||Oa(t,n,l,r,f,c,a))?(u||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),i.props=r,i.state=c,i.context=a,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,zs(e,t),u=Ra(n,a=t.memoizedProps),i.props=u,d=t.pendingProps,f=i.context,c=n.contextType,l=Mr,"object"===typeof c&&null!==c&&(l=Cs(c)),(c="function"===typeof(s=n.getDerivedStateFromProps)||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(a!==d||f!==l)&&Ma(t,i,r,l),As=!1,f=t.memoizedState,i.state=f,Ns(t,r,i,o),Ls();var h=t.memoizedState;a!==d||f!==h||As||null!==e&&null!==e.dependencies&&Ss(e.dependencies)?("function"===typeof s&&(Pa(t,n,s,r),h=t.memoizedState),(u=As||Oa(t,n,u,r,f,h,l)||null!==e&&null!==e.dependencies&&Ss(e.dependencies))?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,h,l),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,h,l)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=l,r=u):("function"!==typeof i.componentDidUpdate||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return i=r,Qa(e,t),r=0!==(128&t.flags),i||r?(i=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:i.render(),t.flags|=1,null!==e&&r?(t.child=ko(t,e.child,null,o),t.child=ko(t,null,n,o)):Ua(e,t,n,o),t.memoizedState=i.state,e=t.child):e=fs(e,t,o),e}function ts(e,t,n,r){return oo(),t.flags|=256,Ua(e,t,n,r),t.child}var ns={dehydrated:null,treeContext:null,retryLane:0};function rs(e){return{baseLanes:e,cachePool:Zo()}}function os(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=pc),e}function is(e,t,n){var r,o=t.pendingProps,i=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&$o.current)),r&&(i=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(Xr){if(i?Oo(t):Ro(),Xr){var l,c=Kr;if(l=c){e:{for(l=c,c=Zr;8!==l.nodeType;){if(!c){c=null;break e}if(null===(l=sd(l.nextSibling))){c=null;break e}}c=l}null!==c?(t.memoizedState={dehydrated:c,treeContext:null!==Br?{id:Hr,overflow:Wr}:null,retryLane:536870912},(l=$l(18,null,null,0)).stateNode=c,l.return=t,t.child=l,qr=t,Kr=null,l=!0):l=!1}l||eo(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return"$!"===c.data?t.lanes=16:t.lanes=536870912,null;Io(t)}return c=o.children,o=o.fallback,i?(Ro(),c=ss({mode:"hidden",children:c},i=t.mode),o=Fl(o,i,n,null),c.return=t,o.return=t,c.sibling=o,t.child=c,(i=t.child).memoizedState=rs(n),i.childLanes=os(e,r,n),t.memoizedState=ns,o):(Oo(t),as(t,c))}if(null!==(l=e.memoizedState)&&null!==(c=l.dehydrated)){if(s)256&t.flags?(Oo(t),t.flags&=-257,t=ls(e,t,n)):null!==t.memoizedState?(Ro(),t.child=e.child,t.flags|=128,t=null):(Ro(),i=o.fallback,c=t.mode,o=ss({mode:"visible",children:o.children},c),(i=Fl(i,c,n,null)).flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,ko(t,e.child,null,n),(o=t.child).memoizedState=rs(n),o.childLanes=os(e,r,n),t.memoizedState=ns,t=i);else if(Oo(t),"$!"===c.data){if(r=c.nextSibling&&c.nextSibling.dataset)var u=r.dgst;r=u,(o=Error(a(419))).stack="",o.digest=r,io({value:o,source:null,stack:null}),t=ls(e,t,n)}else if(Va||ks(e,t,n,!1),r=0!==(n&e.childLanes),Va||r){if(null!==(r=tc)){if(0!==(42&(o=n&-n)))o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(0!==(o=0!==(o&(r.suspendedLanes|n))?0:o)&&o!==l.retryLane)throw l.retryLane=o,Pr(e,o),Mc(r,e,o),Wa}"$?"===c.data||Vc(),t=ls(e,t,n)}else"$?"===c.data?(t.flags|=128,t.child=e.child,t=su.bind(null,e),c._reactRetry=t,t=null):(e=l.treeContext,Kr=sd(c.nextSibling),qr=t,Xr=!0,Qr=null,Zr=!1,null!==e&&(Dr[Fr++]=Hr,Dr[Fr++]=Wr,Dr[Fr++]=Br,Hr=e.id,Wr=e.overflow,Br=t),(t=as(t,o.children)).flags|=4096);return t}return i?(Ro(),i=o.fallback,c=t.mode,u=(l=e.child).sibling,(o=Nl(l,{mode:"hidden",children:o.children})).subtreeFlags=31457280&l.subtreeFlags,null!==u?i=Nl(u,i):(i=Fl(i,c,n,null)).flags|=2,i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,null===(c=e.child.memoizedState)?c=rs(n):(null!==(l=c.cachePool)?(u=Fo._currentValue,l=l.parent!==u?{parent:u,pool:u}:l):l=Zo(),c={baseLanes:c.baseLanes|n,cachePool:l}),i.memoizedState=c,i.childLanes=os(e,r,n),t.memoizedState=ns,o):(Oo(t),e=(n=e.child).sibling,(n=Nl(n,{mode:"visible",children:o.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function as(e,t){return(t=ss({mode:"visible",children:t},e.mode)).return=e,e.child=t}function ss(e,t){return Bl(e,t,0,null)}function ls(e,t,n){return ko(t,e.child,null,n),(e=as(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function cs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),xs(e.return,t,n)}function us(e,t,n,r,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function ds(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ua(e,t,r.children,n),0!==(2&(r=$o.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&cs(e,n,t);else if(19===e.tag)cs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(q($o,r),o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===Lo(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),us(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===Lo(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}us(t,!0,n,null,i);break;case"together":us(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),dc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(ks(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Nl(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Nl(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function hs(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Ss(e))}function ps(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Va=!0;else{if(!hs(e,n)&&0===(128&t.flags))return Va=!1,function(e,t,n){switch(t.tag){case 3:J(t,t.stateNode.containerInfo),ys(t,Fo,e.memoizedState.cache),oo();break;case 27:case 5:te(t);break;case 4:J(t,t.stateNode.containerInfo);break;case 10:ys(t,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(Oo(t),t.flags|=128,null):0!==(n&t.child.childLanes)?is(e,t,n):(Oo(t),null!==(e=fs(e,t,n))?e.sibling:null);Oo(t);break;case 19:var o=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(ks(e,t,n,!1),r=0!==(n&t.childLanes)),o){if(r)return ds(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),q($o,$o.current),r)break;return null;case 22:case 23:return t.lanes=0,Ka(e,t,n);case 24:ys(t,Fo,e.memoizedState.cache)}return fs(e,t,n)}(e,t,n);Va=0!==(131072&e.flags)}else Va=!1,Xr&&0!==(1048576&t.flags)&&Ur(t,_r,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,o=r._init;if(r=o(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((o=r.$$typeof)===v){t.tag=11,t=Ya(null,t,r,e,n);break e}if(o===x){t.tag=14,t=Ga(null,t,r,e,n);break e}}throw t=T(r)||r,Error(a(306,t,""))}Ll(r)?(e=Ra(r,e),t.tag=1,t=es(null,t,r,e,n)):(t.tag=0,t=Za(null,t,r,e,n))}return t;case 0:return Za(e,t,t.type,t.pendingProps,n);case 1:return es(e,t,r=t.type,o=Ra(r,t.pendingProps),n);case 3:e:{if(J(t,t.stateNode.containerInfo),null===e)throw Error(a(387));var i=t.pendingProps;r=(o=t.memoizedState).element,zs(e,t),Ns(t,i,null,n);var s=t.memoizedState;if(i=s.cache,ys(t,Fo,i),i!==o.cache&&ws(t,[Fo],n,!0),Ls(),i=s.element,o.isDehydrated){if(o={element:i,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=ts(e,t,i,n);break e}if(i!==r){io(r=Ir(Error(a(424)),t)),t=ts(e,t,i,n);break e}for(Kr=sd(t.stateNode.containerInfo.firstChild),qr=t,Xr=!0,Qr=null,Zr=!0,n=So(t,null,i,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(oo(),i===r){t=fs(e,t,n);break e}Ua(e,t,i,n)}t=t.child}return t;case 26:return Qa(e,t),null===e?(n=gd(t.type,null,t.pendingProps,null))?t.memoizedState=n:Xr||(n=t.type,e=t.pendingProps,(r=Ku(Q.current).createElement(n))[_e]=t,r[De]=e,Yu(r,n,e),Qe(r),t.stateNode=r):t.memoizedState=gd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return te(t),null===e&&Xr&&(r=t.stateNode=cd(t.type,t.pendingProps,Q.current),qr=t,Zr=!0,Kr=sd(r.firstChild)),r=t.pendingProps.children,null!==e||Xr?Ua(e,t,r,n):t.child=ko(t,null,r,n),Qa(e,t),t.child;case 5:return null===e&&Xr&&((o=r=Kr)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Ue])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(i=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(i!==o.rel||e.getAttribute("href")!==(null==o.href?null:o.href)||e.getAttribute("crossorigin")!==(null==o.crossOrigin?null:o.crossOrigin)||e.getAttribute("title")!==(null==o.title?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((i=e.getAttribute("src"))!==(null==o.src?null:o.src)||e.getAttribute("type")!==(null==o.type?null:o.type)||e.getAttribute("crossorigin")!==(null==o.crossOrigin?null:o.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var i=null==o.name?null:""+o.name;if("hidden"===o.type&&e.getAttribute("name")===i)return e}if(null===(e=sd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,Zr))?(t.stateNode=r,qr=t,Kr=sd(r.firstChild),Zr=!1,o=!0):o=!1),o||eo(t)),te(t),o=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,r=i.children,Zu(o,i)?r=null:null!==s&&Zu(o,s)&&(t.flags|=32),null!==t.memoizedState&&(o=fi(e,t,mi,null,null,n),Ld._currentValue=o),Qa(e,t),Ua(e,t,r,n),t.child;case 6:return null===e&&Xr&&((e=n=Kr)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=sd(e.nextSibling)))return null}return e}(n,t.pendingProps,Zr))?(t.stateNode=n,qr=t,Kr=null,e=!0):e=!1),e||eo(t)),null;case 13:return is(e,t,n);case 4:return J(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ko(t,null,r,n):Ua(e,t,r,n),t.child;case 11:return Ya(e,t,t.type,t.pendingProps,n);case 7:return Ua(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ua(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ys(t,t.type,r.value),Ua(e,t,r.children,n),t.child;case 9:return o=t.type._context,r=t.pendingProps.children,js(t),r=r(o=Cs(o)),t.flags|=1,Ua(e,t,r,n),t.child;case 14:return Ga(e,t,t.type,t.pendingProps,n);case 15:return qa(e,t,t.type,t.pendingProps,n);case 19:return ds(e,t,n);case 22:return Ka(e,t,n);case 24:return js(t),r=Cs(Fo),null===e?(null===(o=Xo())&&(o=tc,i=Bo(),o.pooledCache=i,i.refCount++,null!==i&&(o.pooledCacheLanes|=n),o=i),t.memoizedState={parent:r,cache:o},Ps(t),ys(t,Fo,o)):(0!==(e.lanes&n)&&(zs(e,t),Ns(t,null,null,n),Ls()),o=e.memoizedState,i=t.memoizedState,o.parent!==r?(o={parent:r,cache:r},t.memoizedState=o,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=o),ys(t,Fo,r)):(r=i.cache,ys(t,Fo,r),r!==o.cache&&ws(t,[Fo],n,!0))),Ua(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}var ms=Y(null),gs=null,vs=null;function ys(e,t,n){q(ms,t._currentValue),t._currentValue=n}function bs(e){e._currentValue=ms.current,G(ms)}function xs(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ws(e,t,n,r){var o=e.child;for(null!==o&&(o.return=e);null!==o;){var i=o.dependencies;if(null!==i){var s=o.child;i=i.firstContext;e:for(;null!==i;){var l=i;i=o;for(var c=0;c<t.length;c++)if(l.context===t[c]){i.lanes|=n,null!==(l=i.alternate)&&(l.lanes|=n),xs(i.return,n,e),r||(s=null);break e}i=l.next}}else if(18===o.tag){if(null===(s=o.return))throw Error(a(341));s.lanes|=n,null!==(i=s.alternate)&&(i.lanes|=n),xs(s,n,e),s=null}else s=o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===e){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}}function ks(e,t,n,r){e=null;for(var o=t,i=!1;null!==o;){if(!i)if(0!==(524288&o.flags))i=!0;else if(0!==(262144&o.flags))break;if(10===o.tag){var s=o.alternate;if(null===s)throw Error(a(387));if(null!==(s=s.memoizedProps)){var l=o.type;qn(o.pendingProps.value,s.value)||(null!==e?e.push(l):e=[l])}}else if(o===Z.current){if(null===(s=o.alternate))throw Error(a(387));s.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(null!==e?e.push(Ld):e=[Ld])}o=o.return}null!==e&&ws(t,e,n,r),t.flags|=262144}function Ss(e){for(e=e.firstContext;null!==e;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function js(e){gs=e,vs=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Cs(e){return Ts(gs,e)}function Es(e,t){return null===gs&&js(e),Ts(e,t)}function Ts(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===vs){if(null===e)throw Error(a(308));vs=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else vs=vs.next=t;return n}var As=!1;function Ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Os(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ms(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&ec)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,t=Or(e),zr(e,null,n),t}return Tr(e,r,t,n),Or(e)}function Rs(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194176&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ie(e,n)}}function Is(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===i?o=i=a:i=i.next=a,n=n.next}while(null!==n);null===i?o=i=t:i=i.next=t}else o=i=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $s=!1;function Ls(){if($s){if(null!==Yo)throw Yo}}function Ns(e,t,n,r){$s=!1;var o=e.updateQueue;As=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(null!==s){o.shared.pending=null;var l=s,c=l.next;l.next=null,null===a?i=c:a.next=c,a=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==i){var d=o.baseState;for(a=0,u=c=l=null,s=i;;){var f=-536870913&s.lane,h=f!==s.lane;if(h?(rc&f)===f:(r&f)===f){0!==f&&f===Uo&&($s=!0),null!==u&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var p=e,m=s;f=t;var g=n;switch(m.tag){case 1:if("function"===typeof(p=m.payload)){d=p.call(g,d,f);break e}d=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null===(f="function"===typeof(p=m.payload)?p.call(g,d,f):p)||void 0===f)break e;d=O({},d,f);break e;case 2:As=!0}}null!==(f=s.callback)&&(e.flags|=64,h&&(e.flags|=8192),null===(h=o.callbacks)?o.callbacks=[f]:h.push(f))}else h={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=h,l=d):u=u.next=h,a|=f;if(null===(s=s.next)){if(null===(s=o.shared.pending))break;s=(h=s).next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}null===u&&(l=d),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=u,null===i&&(o.shared.lanes=0),dc|=a,e.lanes=a,e.memoizedState=d}}function _s(e,t){if("function"!==typeof e)throw Error(a(191,e));e.call(t)}function Ds(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)_s(n[e],t)}function Fs(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var o=r.next;n=o;do{if((n.tag&e)===e){r=void 0;var i=n.create,a=n.inst;r=i(),a.destroy=r}n=n.next}while(n!==o)}}catch(s){ru(t,t.return,s)}}function Bs(e,t,n){try{var r=t.updateQueue,o=null!==r?r.lastEffect:null;if(null!==o){var i=o.next;r=i;do{if((r.tag&e)===e){var a=r.inst,s=a.destroy;if(void 0!==s){a.destroy=void 0,o=t;var l=n;try{s()}catch(c){ru(o,l,c)}}}r=r.next}while(r!==i)}}catch(c){ru(t,t.return,c)}}function Hs(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{Ds(t,n)}catch(r){ru(e,e.return,r)}}}function Ws(e,t,n){n.props=Ra(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){ru(e,t,r)}}function Vs(e,t){try{var n=e.ref;if(null!==n){var r=e.stateNode;switch(e.tag){case 26:case 27:case 5:var o=r;break;default:o=r}"function"===typeof n?e.refCleanup=n(o):n.current=o}}catch(i){ru(e,t,i)}}function Us(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(o){ru(e,t,o)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(i){ru(e,t,i)}else n.current=null}function Ys(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(o){ru(e,e.return,o)}}function Gs(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,i=null,s=null,l=null,c=null,u=null,d=null;for(p in n){var f=n[p];if(n.hasOwnProperty(p)&&null!=f)switch(p){case"checked":case"value":break;case"defaultValue":c=f;default:r.hasOwnProperty(p)||Vu(e,t,p,null,r,f)}}for(var h in r){var p=r[h];if(f=n[h],r.hasOwnProperty(h)&&(null!=p||null!=f))switch(h){case"type":i=p;break;case"name":o=p;break;case"checked":u=p;break;case"defaultChecked":d=p;break;case"value":s=p;break;case"defaultValue":l=p;break;case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(a(137,t));break;default:p!==f&&Vu(e,t,h,p,r,f)}}return void gt(e,s,l,c,u,d,i,o);case"select":for(i in p=s=l=h=null,n)if(c=n[i],n.hasOwnProperty(i)&&null!=c)switch(i){case"value":break;case"multiple":p=c;default:r.hasOwnProperty(i)||Vu(e,t,i,null,r,c)}for(o in r)if(i=r[o],c=n[o],r.hasOwnProperty(o)&&(null!=i||null!=c))switch(o){case"value":h=i;break;case"defaultValue":l=i;break;case"multiple":s=i;default:i!==c&&Vu(e,t,o,i,r,c)}return t=l,n=s,r=p,void(null!=h?bt(e,!!n,h,!1):!!r!==!!n&&(null!=t?bt(e,!!n,t,!0):bt(e,!!n,n?[]:"",!1)));case"textarea":for(l in p=h=null,n)if(o=n[l],n.hasOwnProperty(l)&&null!=o&&!r.hasOwnProperty(l))switch(l){case"value":case"children":break;default:Vu(e,t,l,null,r,o)}for(s in r)if(o=r[s],i=n[s],r.hasOwnProperty(s)&&(null!=o||null!=i))switch(s){case"value":h=o;break;case"defaultValue":p=o;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=o)throw Error(a(91));break;default:o!==i&&Vu(e,t,s,o,r,i)}return void xt(e,h,p);case"option":for(var m in n)if(h=n[m],n.hasOwnProperty(m)&&null!=h&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else Vu(e,t,m,null,r,h);for(c in r)if(h=r[c],p=n[c],r.hasOwnProperty(c)&&h!==p&&(null!=h||null!=p))if("selected"===c)e.selected=h&&"function"!==typeof h&&"symbol"!==typeof h;else Vu(e,t,c,h,r,p);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)h=n[g],n.hasOwnProperty(g)&&null!=h&&!r.hasOwnProperty(g)&&Vu(e,t,g,null,r,h);for(u in r)if(h=r[u],p=n[u],r.hasOwnProperty(u)&&h!==p&&(null!=h||null!=p))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(a(137,t));break;default:Vu(e,t,u,h,r,p)}return;default:if(Et(t)){for(var v in n)h=n[v],n.hasOwnProperty(v)&&void 0!==h&&!r.hasOwnProperty(v)&&Uu(e,t,v,void 0,r,h);for(d in r)h=r[d],p=n[d],!r.hasOwnProperty(d)||h===p||void 0===h&&void 0===p||Uu(e,t,d,h,r,p);return}}for(var y in n)h=n[y],n.hasOwnProperty(y)&&null!=h&&!r.hasOwnProperty(y)&&Vu(e,t,y,null,r,h);for(f in r)h=r[f],p=n[f],!r.hasOwnProperty(f)||h===p||null==h&&null==p||Vu(e,t,f,h,r,p)}(r,e.type,n,t),r[De]=t}catch(o){ru(e,e.return,o)}}function qs(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag||4===e.tag}function Ks(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||qs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&27!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function Xs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Wu));else if(4!==r&&27!==r&&null!==(e=e.child))for(Xs(e,t,n),e=e.sibling;null!==e;)Xs(e,t,n),e=e.sibling}function Qs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&27!==r&&null!==(e=e.child))for(Qs(e,t,n),e=e.sibling;null!==e;)Qs(e,t,n),e=e.sibling}var Zs=!1,Js=!1,el=!1,tl="function"===typeof WeakSet?WeakSet:Set,nl=null,rl=!1;function ol(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:vl(e,n),4&r&&Fs(5,n);break;case 1:if(vl(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(s){ru(n,n.return,s)}else{var o=Ra(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){ru(n,n.return,l)}}64&r&&Hs(n),512&r&&Vs(n,n.return);break;case 3:if(vl(e,n),64&r&&null!==(r=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:e=n.child.stateNode}try{Ds(r,e)}catch(s){ru(n,n.return,s)}}break;case 26:vl(e,n),512&r&&Vs(n,n.return);break;case 27:case 5:vl(e,n),null===t&&4&r&&Ys(n),512&r&&Vs(n,n.return);break;case 12:default:vl(e,n);break;case 13:vl(e,n),4&r&&ul(e,n);break;case 22:if(!(o=null!==n.memoizedState||Zs)){t=null!==t&&null!==t.memoizedState||Js;var i=Zs,a=Js;Zs=o,(Js=t)&&!a?bl(e,n,0!==(8772&n.subtreeFlags)):vl(e,n),Zs=i,Js=a}512&r&&("manual"===n.memoizedProps.mode?Vs(n,n.return):Us(n,n.return))}}function il(e){var t=e.alternate;null!==t&&(e.alternate=null,il(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Ye(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var al=null,sl=!1;function ll(e,t,n){for(n=n.child;null!==n;)cl(e,t,n),n=n.sibling}function cl(e,t,n){if(ye&&"function"===typeof ye.onCommitFiberUnmount)try{ye.onCommitFiberUnmount(ve,n)}catch(a){}switch(n.tag){case 26:Js||Us(n,t),ll(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:Js||Us(n,t);var r=al,o=sl;for(al=n.stateNode,ll(e,t,n),t=(n=n.stateNode).attributes;t.length;)n.removeAttributeNode(t[0]);Ye(n),al=r,sl=o;break;case 5:Js||Us(n,t);case 6:o=al;var i=sl;if(al=null,ll(e,t,n),sl=i,null!==(al=o))if(sl)try{e=al,r=n.stateNode,8===e.nodeType?e.parentNode.removeChild(r):e.removeChild(r)}catch(s){ru(n,t,s)}else try{al.removeChild(n.stateNode)}catch(s){ru(n,t,s)}break;case 18:null!==al&&(sl?(t=al,n=n.stateNode,8===t.nodeType?id(t.parentNode,n):1===t.nodeType&&id(t,n),gf(t)):id(al,n.stateNode));break;case 4:r=al,o=sl,al=n.stateNode.containerInfo,sl=!0,ll(e,t,n),al=r,sl=o;break;case 0:case 11:case 14:case 15:Js||Bs(2,n,t),Js||Bs(4,n,t),ll(e,t,n);break;case 1:Js||(Us(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&Ws(n,t,r)),ll(e,t,n);break;case 21:ll(e,t,n);break;case 22:Js||Us(n,t),Js=(r=Js)||null!==n.memoizedState,ll(e,t,n),Js=r;break;default:ll(e,t,n)}}function ul(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{gf(e)}catch(n){ru(t,t.return,n)}}function dl(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new tl),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new tl),t;default:throw Error(a(435,e.tag))}}(e);t.forEach((function(t){var r=lu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}function fl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r],i=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 27:case 5:al=l.stateNode,sl=!1;break e;case 3:case 4:al=l.stateNode.containerInfo,sl=!0;break e}l=l.return}if(null===al)throw Error(a(160));cl(i,s,o),al=null,sl=!1,null!==(i=o.alternate)&&(i.return=null),o.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)pl(t,e),t=t.sibling}var hl=null;function pl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:fl(t,e),ml(e),4&r&&(Bs(3,e,e.return),Fs(3,e),Bs(5,e,e.return));break;case 1:fl(t,e),ml(e),512&r&&(Js||null===n||Us(n,n.return)),64&r&&Zs&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var o=hl;if(fl(t,e),ml(e),512&r&&(Js||null===n||Us(n,n.return)),4&r){var i=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(r){case"title":(!(i=o.getElementsByTagName("title")[0])||i[Ue]||i[_e]||"http://www.w3.org/2000/svg"===i.namespaceURI||i.hasAttribute("itemprop"))&&(i=o.createElement(r),o.head.insertBefore(i,o.querySelector("head > title"))),Yu(i,r,n),i[_e]=e,Qe(i),r=i;break e;case"link":var s=Td("link","href",o).get(r+(n.href||""));if(s)for(var l=0;l<s.length;l++)if((i=s[l]).getAttribute("href")===(null==n.href?null:n.href)&&i.getAttribute("rel")===(null==n.rel?null:n.rel)&&i.getAttribute("title")===(null==n.title?null:n.title)&&i.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){s.splice(l,1);break t}Yu(i=o.createElement(r),r,n),o.head.appendChild(i);break;case"meta":if(s=Td("meta","content",o).get(r+(n.content||"")))for(l=0;l<s.length;l++)if((i=s[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&i.getAttribute("name")===(null==n.name?null:n.name)&&i.getAttribute("property")===(null==n.property?null:n.property)&&i.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&i.getAttribute("charset")===(null==n.charSet?null:n.charSet)){s.splice(l,1);break t}Yu(i=o.createElement(r),r,n),o.head.appendChild(i);break;default:throw Error(a(468,r))}i[_e]=e,Qe(i),r=i}e.stateNode=r}else Ad(o,e.type,e.stateNode);else e.stateNode=kd(o,r,e.memoizedProps);else i!==r?(null===i?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):i.count--,null===r?Ad(o,e.type,e.stateNode):kd(o,r,e.memoizedProps)):null===r&&null!==e.stateNode&&Gs(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(4&r&&null===e.alternate){o=e.stateNode,i=e.memoizedProps;try{for(var c=o.firstChild;c;){var u=c.nextSibling,d=c.nodeName;c[Ue]||"HEAD"===d||"BODY"===d||"SCRIPT"===d||"STYLE"===d||"LINK"===d&&"stylesheet"===c.rel.toLowerCase()||o.removeChild(c),c=u}for(var f=e.type,h=o.attributes;h.length;)o.removeAttributeNode(h[0]);Yu(o,f,i),o[_e]=e,o[De]=i}catch(m){ru(e,e.return,m)}}case 5:if(fl(t,e),ml(e),512&r&&(Js||null===n||Us(n,n.return)),32&e.flags){o=e.stateNode;try{kt(o,"")}catch(m){ru(e,e.return,m)}}4&r&&null!=e.stateNode&&Gs(e,o=e.memoizedProps,null!==n?n.memoizedProps:o),1024&r&&(el=!0);break;case 6:if(fl(t,e),ml(e),4&r){if(null===e.stateNode)throw Error(a(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(m){ru(e,e.return,m)}}break;case 3:if(Ed=null,o=hl,hl=fd(t.containerInfo),fl(t,e),hl=o,ml(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{gf(t.containerInfo)}catch(m){ru(e,e.return,m)}el&&(el=!1,gl(e));break;case 4:r=hl,hl=fd(e.stateNode.containerInfo),fl(t,e),ml(e),hl=r;break;case 12:fl(t,e),ml(e);break;case 13:fl(t,e),ml(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(bc=le()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,dl(e,r)));break;case 22:if(512&r&&(Js||null===n||Us(n,n.return)),c=null!==e.memoizedState,u=null!==n&&null!==n.memoizedState,Zs=(d=Zs)||c,Js=(f=Js)||u,fl(t,e),Js=f,Zs=d,ml(e),(t=e.stateNode)._current=e,t._visibility&=-3,t._visibility|=2&t._pendingVisibility,8192&r&&(t._visibility=c?-2&t._visibility:1|t._visibility,c&&(t=Zs||Js,null===n||u||t||yl(e)),null===e.memoizedProps||"manual"!==e.memoizedProps.mode))e:for(n=null,t=e;;){if(5===t.tag||26===t.tag||27===t.tag){if(null===n){u=n=t;try{if(o=u.stateNode,c)"function"===typeof(i=o.style).setProperty?i.setProperty("display","none","important"):i.display="none";else{s=u.stateNode;var p=void 0!==(l=u.memoizedProps.style)&&null!==l&&l.hasOwnProperty("display")?l.display:null;s.style.display=null==p||"boolean"===typeof p?"":(""+p).trim()}}catch(m){ru(u,u.return,m)}}}else if(6===t.tag){if(null===n){u=t;try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(m){ru(u,u.return,m)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,dl(e,n))));break;case 19:fl(t,e),ml(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,dl(e,r)));break;case 21:break;default:fl(t,e),ml(e)}}function ml(e){var t=e.flags;if(2&t){try{if(27!==e.tag){e:{for(var n=e.return;null!==n;){if(qs(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 27:var o=r.stateNode;Qs(e,Ks(e),o);break;case 5:var i=r.stateNode;32&r.flags&&(kt(i,""),r.flags&=-33),Qs(e,Ks(e),i);break;case 3:case 4:var s=r.stateNode.containerInfo;Xs(e,Ks(e),s);break;default:throw Error(a(161))}}}catch(l){ru(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function gl(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;gl(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function vl(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)ol(e,t.alternate,t),t=t.sibling}function yl(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Bs(4,t,t.return),yl(t);break;case 1:Us(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&Ws(t,t.return,n),yl(t);break;case 26:case 27:case 5:Us(t,t.return),yl(t);break;case 22:Us(t,t.return),null===t.memoizedState&&yl(t);break;default:yl(t)}e=e.sibling}}function bl(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,o=e,i=t,a=i.flags;switch(i.tag){case 0:case 11:case 15:bl(o,i,n),Fs(4,i);break;case 1:if(bl(o,i,n),"function"===typeof(o=(r=i).stateNode).componentDidMount)try{o.componentDidMount()}catch(c){ru(r,r.return,c)}if(null!==(o=(r=i).updateQueue)){var s=r.stateNode;try{var l=o.shared.hiddenCallbacks;if(null!==l)for(o.shared.hiddenCallbacks=null,o=0;o<l.length;o++)_s(l[o],s)}catch(c){ru(r,r.return,c)}}n&&64&a&&Hs(i),Vs(i,i.return);break;case 26:case 27:case 5:bl(o,i,n),n&&null===r&&4&a&&Ys(i),Vs(i,i.return);break;case 12:default:bl(o,i,n);break;case 13:bl(o,i,n),n&&4&a&&ul(o,i);break;case 22:null===i.memoizedState&&bl(o,i,n),Vs(i,i.return)}t=t.sibling}}function xl(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Ho(n))}function wl(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ho(e))}function kl(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Sl(e,t,n,r),t=t.sibling}function Sl(e,t,n,r){var o=t.flags;switch(t.tag){case 0:case 11:case 15:kl(e,t,n,r),2048&o&&Fs(9,t);break;case 3:kl(e,t,n,r),2048&o&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Ho(e)));break;case 12:if(2048&o){kl(e,t,n,r),e=t.stateNode;try{var i=t.memoizedProps,a=i.id,s=i.onPostCommit;"function"===typeof s&&s(a,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ru(t,t.return,l)}}else kl(e,t,n,r);break;case 23:break;case 22:i=t.stateNode,null!==t.memoizedState?4&i._visibility?kl(e,t,n,r):Cl(e,t):4&i._visibility?kl(e,t,n,r):(i._visibility|=4,jl(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&o&&xl(t.alternate,t);break;case 24:kl(e,t,n,r),2048&o&&wl(t.alternate,t);break;default:kl(e,t,n,r)}}function jl(e,t,n,r,o){for(o=o&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var i=e,a=t,s=n,l=r,c=a.flags;switch(a.tag){case 0:case 11:case 15:jl(i,a,s,l,o),Fs(8,a);break;case 23:break;case 22:var u=a.stateNode;null!==a.memoizedState?4&u._visibility?jl(i,a,s,l,o):Cl(i,a):(u._visibility|=4,jl(i,a,s,l,o)),o&&2048&c&&xl(a.alternate,a);break;case 24:jl(i,a,s,l,o),o&&2048&c&&wl(a.alternate,a);break;default:jl(i,a,s,l,o)}t=t.sibling}}function Cl(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,o=r.flags;switch(r.tag){case 22:Cl(n,r),2048&o&&xl(r.alternate,r);break;case 24:Cl(n,r),2048&o&&wl(r.alternate,r);break;default:Cl(n,r)}t=t.sibling}}var El=8192;function Tl(e){if(e.subtreeFlags&El)for(e=e.child;null!==e;)Al(e),e=e.sibling}function Al(e){switch(e.tag){case 26:Tl(e),e.flags&El&&null!==e.memoizedState&&function(e,t,n){if(null===zd)throw Error(a(475));var r=zd;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var o=vd(n.href),i=e.querySelector(yd(o));if(i)return null!==(e=i._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Md.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=i,void Qe(i);i=e.ownerDocument||e,n=bd(n),(o=ud.get(o))&&jd(n,o),Qe(i=i.createElement("link"));var s=i;s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),Yu(i,"link",n),t.instance=i}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Md.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(hl,e.memoizedState,e.memoizedProps);break;case 5:default:Tl(e);break;case 3:case 4:var t=hl;hl=fd(e.stateNode.containerInfo),Tl(e),hl=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=El,El=16777216,Tl(e),El=t):Tl(e))}}function Pl(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function zl(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];nl=r,Rl(r,e)}Pl(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Ol(e),e=e.sibling}function Ol(e){switch(e.tag){case 0:case 11:case 15:zl(e),2048&e.flags&&Bs(9,e,e.return);break;case 3:case 12:default:zl(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&4&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-5,Ml(e)):zl(e)}}function Ml(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];nl=r,Rl(r,e)}Pl(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:Bs(8,t,t.return),Ml(t);break;case 22:4&(n=t.stateNode)._visibility&&(n._visibility&=-5,Ml(t));break;default:Ml(t)}e=e.sibling}}function Rl(e,t){for(;null!==nl;){var n=nl;switch(n.tag){case 0:case 11:case 15:Bs(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Ho(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,nl=r;else e:for(n=e;null!==nl;){var o=(r=nl).sibling,i=r.return;if(il(r),r===n){nl=null;break e}if(null!==o){o.return=i,nl=o;break e}nl=i}}}function Il(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $l(e,t,n,r){return new Il(e,t,n,r)}function Ll(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Nl(e,t){var n=e.alternate;return null===n?((n=$l(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=31457280&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _l(e,t){e.flags&=31457282;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Dl(e,t,n,r,o,i){var s=0;if(r=e,"function"===typeof e)Ll(e)&&(s=1);else if("string"===typeof e)s=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,K.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case d:return Fl(n.children,o,i,t);case f:s=8,o|=24;break;case h:return(e=$l(12,n,t,2|o)).elementType=h,e.lanes=i,e;case y:return(e=$l(13,n,t,o)).elementType=y,e.lanes=i,e;case b:return(e=$l(19,n,t,o)).elementType=b,e.lanes=i,e;case k:return Bl(n,o,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case p:case g:s=10;break e;case m:s=9;break e;case v:s=11;break e;case x:s=14;break e;case w:s=16,r=null;break e}s=29,n=Error(a(130,null===e?"null":typeof e,"")),r=null}return(t=$l(s,n,t,o)).elementType=e,t.type=r,t.lanes=i,t}function Fl(e,t,n,r){return(e=$l(7,e,r,t)).lanes=n,e}function Bl(e,t,n,r){(e=$l(22,e,r,t)).elementType=k,e.lanes=n;var o={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var e=o._current;if(null===e)throw Error(a(456));if(0===(2&o._pendingVisibility)){var t=Pr(e,2);null!==t&&(o._pendingVisibility|=2,Mc(t,e,2))}},attach:function(){var e=o._current;if(null===e)throw Error(a(456));if(0!==(2&o._pendingVisibility)){var t=Pr(e,2);null!==t&&(o._pendingVisibility&=-3,Mc(t,e,2))}}};return e.stateNode=o,e}function Hl(e,t,n){return(e=$l(6,e,null,t)).lanes=n,e}function Wl(e,t,n){return(t=$l(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vl(e){e.flags|=4}function Ul(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!Pd(t)){if(null!==(t=Po.current)&&((4194176&rc)===rc?null!==zo:(62914560&rc)!==rc&&0===(536870912&rc)||t!==zo))throw ho=lo,so;e.flags|=8192}}function Yl(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?ze():536870912,e.lanes|=t,mc|=t)}function Gl(e,t){if(!Xr)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ql(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=31457280&o.subtreeFlags,r|=31457280&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kl(e,t,n){var r=t.pendingProps;switch(Gr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return ql(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),bs(Fo),ee(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(ro(t)?Vl(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==Qr&&(Ic(Qr),Qr=null))),ql(t),null;case 26:return n=t.memoizedState,null===e?(Vl(t),null!==n?(ql(t),Ul(t,n)):(ql(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Vl(t),ql(t),Ul(t,n)):(ql(t),t.flags&=-16777217):(e.memoizedProps!==r&&Vl(t),ql(t),t.flags&=-16777217),null;case 27:ne(t),n=Q.current;var o=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Vl(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return ql(t),null}e=K.current,ro(t)?to(t):(e=cd(o,r,n),t.stateNode=e,Vl(t))}return ql(t),null;case 5:if(ne(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Vl(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return ql(t),null}if(e=K.current,ro(t))to(t);else{switch(o=Ku(Q.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?o.createElement("select",{is:r.is}):o.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?o.createElement(n,{is:r.is}):o.createElement(n)}}e[_e]=t,e[De]=r;e:for(o=t.child;null!==o;){if(5===o.tag||6===o.tag)e.appendChild(o.stateNode);else if(4!==o.tag&&27!==o.tag&&null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;null===o.sibling;){if(null===o.return||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=e;e:switch(Yu(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Vl(t)}}return ql(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Vl(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(e=Q.current,ro(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(o=qr))switch(o.tag){case 27:case 5:r=o.memoizedProps}e[_e]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Hu(e.nodeValue,n)))||eo(t)}else(e=Ku(e).createTextNode(r))[_e]=t,t.stateNode=e}return ql(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(o=ro(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(a(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(a(317));o[_e]=t}else oo(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ql(t),o=!1}else null!==Qr&&(Ic(Qr),Qr=null),o=!0;if(!o)return 256&t.flags?(Io(t),t):(Io(t),null)}if(Io(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){o=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(o=r.alternate.memoizedState.cachePool.pool);var i=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(i=r.memoizedState.cachePool.pool),i!==o&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Yl(t,t.updateQueue),ql(t),null;case 4:return ee(),null===e&&Mu(t.stateNode.containerInfo),ql(t),null;case 10:return bs(t.type),ql(t),null;case 19:if(G($o),null===(o=t.memoizedState))return ql(t),null;if(r=0!==(128&t.flags),null===(i=o.rendering))if(r)Gl(o,!1);else{if(0!==uc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(i=Lo(e))){for(t.flags|=128,Gl(o,!1),e=i.updateQueue,t.updateQueue=e,Yl(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)_l(n,e),n=n.sibling;return q($o,1&$o.current|2),t.child}e=e.sibling}null!==o.tail&&le()>xc&&(t.flags|=128,r=!0,Gl(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=Lo(i))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Yl(t,e),Gl(o,!0),null===o.tail&&"hidden"===o.tailMode&&!i.alternate&&!Xr)return ql(t),null}else 2*le()-o.renderingStartTime>xc&&536870912!==n&&(t.flags|=128,r=!0,Gl(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(null!==(e=o.last)?e.sibling=i:t.child=i,o.last=i)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=le(),t.sibling=null,e=$o.current,q($o,r?1&e|2:1&e),t):(ql(t),null);case 22:case 23:return Io(t),Ao(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(ql(t),6&t.subtreeFlags&&(t.flags|=8192)):ql(t),null!==(n=t.updateQueue)&&Yl(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&G(Ko),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),bs(Fo),ql(t),null;case 25:return null}throw Error(a(156,t.tag))}function Xl(e,t){switch(Gr(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return bs(Fo),ee(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return ne(t),null;case 13:if(Io(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));oo()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return G($o),null;case 4:return ee(),null;case 10:return bs(t.type),null;case 22:case 23:return Io(t),Ao(),null!==e&&G(Ko),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return bs(Fo),null;default:return null}}function Ql(e,t){switch(Gr(t),t.tag){case 3:bs(Fo),ee();break;case 26:case 27:case 5:ne(t);break;case 4:ee();break;case 13:Io(t);break;case 19:G($o);break;case 10:bs(t.type);break;case 22:case 23:Io(t),Ao(),null!==e&&G(Ko);break;case 24:bs(Fo)}}var Zl={getCacheForType:function(e){var t=Cs(Fo),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},Jl="function"===typeof WeakMap?WeakMap:Map,ec=0,tc=null,nc=null,rc=0,oc=0,ic=null,ac=!1,sc=!1,lc=!1,cc=0,uc=0,dc=0,fc=0,hc=0,pc=0,mc=0,gc=null,vc=null,yc=!1,bc=0,xc=1/0,wc=null,kc=null,Sc=!1,jc=null,Cc=0,Ec=0,Tc=null,Ac=0,Pc=null;function zc(){if(0!==(2&ec)&&0!==rc)return rc&-rc;if(null!==z.T){return 0!==Uo?Uo:wu()}return Le()}function Oc(){0===pc&&(pc=0===(536870912&rc)||Xr?Pe():536870912);var e=Po.current;return null!==e&&(e.flags|=32),pc}function Mc(e,t,n){(e===tc&&2===oc||null!==e.cancelPendingCommit)&&(Fc(e,0),Nc(e,rc,pc,!1)),Me(e,n),0!==(2&ec)&&e===tc||(e===tc&&(0===(2&ec)&&(fc|=n),4===uc&&Nc(e,rc,pc,!1)),mu(e))}function Rc(e,t,n){if(0!==(6&ec))throw Error(a(327));for(var r=!n&&0===(60&t)&&0===(t&e.expiredLanes)||Te(e,t),o=r?function(e,t){var n=ec;ec|=2;var r=Hc(),o=Wc();tc!==e||rc!==t?(wc=null,xc=le()+500,Fc(e,t)):sc=Te(e,t);e:for(;;)try{if(0!==oc&&null!==nc){t=nc;var i=ic;t:switch(oc){case 1:oc=0,ic=null,Xc(e,t,i,1);break;case 2:if(co(i)){oc=0,ic=null,Kc(t);break}t=function(){2===oc&&tc===e&&(oc=7),mu(e)},i.then(t,t);break e;case 3:oc=7;break e;case 4:oc=5;break e;case 7:co(i)?(oc=0,ic=null,Kc(t)):(oc=0,ic=null,Xc(e,t,i,7));break;case 5:var s=null;switch(nc.tag){case 26:s=nc.memoizedState;case 5:case 27:var l=nc;if(!s||Pd(s)){oc=0,ic=null;var c=l.sibling;if(null!==c)nc=c;else{var u=l.return;null!==u?(nc=u,Qc(u)):nc=null}break t}}oc=0,ic=null,Xc(e,t,i,5);break;case 6:oc=0,ic=null,Xc(e,t,i,6);break;case 8:Dc(),uc=6;break e;default:throw Error(a(462))}}Gc();break}catch(d){Bc(e,d)}return vs=gs=null,z.H=r,z.A=o,ec=n,null!==nc?0:(tc=null,rc=0,Er(),uc)}(e,t):Uc(e,t,!0),i=r;;){if(0===o){sc&&!r&&Nc(e,t,0,!1);break}if(6===o)Nc(e,t,0,!ac);else{if(n=e.current.alternate,i&&!Lc(n)){o=Uc(e,t,!1),i=!1;continue}if(2===o){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=0!==(s=-536870913&e.pendingLanes)?s:536870912&s?536870912:0;if(0!==s){t=s;e:{var l=e;o=gc;var c=l.current.memoizedState.isDehydrated;if(c&&(Fc(l,s).flags|=256),2!==(s=Uc(l,s,!1))){if(lc&&!c){l.errorRecoveryDisabledLanes|=i,fc|=i,o=4;break e}i=vc,vc=o,null!==i&&Ic(i)}o=s}if(i=!1,2!==o)continue}}if(1===o){Fc(e,0),Nc(e,t,0,!0);break}e:{switch(r=e,o){case 0:case 1:throw Error(a(345));case 4:if((4194176&t)===t){Nc(r,t,pc,!ac);break e}break;case 2:vc=null;break;case 3:case 5:break;default:throw Error(a(329))}if(r.finishedWork=n,r.finishedLanes=t,(62914560&t)===t&&10<(i=bc+300-le())){if(Nc(r,t,pc,!ac),0!==Ee(r,0))break e;r.timeoutHandle=ed($c.bind(null,r,n,vc,wc,yc,t,pc,fc,mc,ac,2,-0,0),i)}else $c(r,n,vc,wc,yc,t,pc,fc,mc,ac,0,-0,0)}}break}mu(e)}function Ic(e){null===vc?vc=e:vc.push.apply(vc,e)}function $c(e,t,n,r,o,i,s,l,c,u,d,f,h){var p=t.subtreeFlags;if((8192&p||16785408===(16785408&p))&&(zd={stylesheets:null,count:0,unsuspend:Od},Al(t),null!==(t=function(){if(null===zd)throw Error(a(475));var e=zd;return e.stylesheets&&0===e.count&&Id(e,e.stylesheets),0<e.count?function(t){var n=setTimeout((function(){if(e.stylesheets&&Id(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}),6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=t(Jc.bind(null,e,n,r,o,s,l,c,1,f,h)),void Nc(e,i,s,!u);Jc(e,n,r,o,s,l,c,d,f,h)}function Lc(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!qn(i(),o))return!1}catch(a){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nc(e,t,n,r){t&=~hc,t&=~fc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var o=t;0<o;){var i=31-xe(o),a=1<<i;r[i]=-1,o&=~a}0!==n&&Re(e,n,t)}function _c(){return 0!==(6&ec)||(gu(0,!1),!1)}function Dc(){if(null!==nc){if(0===oc)var e=nc.return;else vs=gs=null,yi(e=nc),mo=null,go=0,e=nc;for(;null!==e;)Ql(e.alternate,e),e=e.return;nc=null}}function Fc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,td(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Dc(),tc=e,nc=n=Nl(e.current,null),rc=t,oc=0,ic=null,ac=!1,sc=Te(e,t),lc=!1,mc=pc=hc=fc=dc=uc=0,vc=gc=null,yc=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var o=31-xe(r),i=1<<o;t|=e[o],r&=~i}return cc=t,Er(),n}function Bc(e,t){ei=null,z.H=Ca,t===ao?(t=po(),oc=3):t===so?(t=po(),oc=4):oc=t===Wa?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,ic=t,null===nc&&(uc=1,_a(e,Ir(t,e.current)))}function Hc(){var e=z.H;return z.H=Ca,null===e?Ca:e}function Wc(){var e=z.A;return z.A=Zl,e}function Vc(){uc=4,ac||(4194176&rc)!==rc&&null!==Po.current||(sc=!0),0===(134217727&dc)&&0===(134217727&fc)||null===tc||Nc(tc,rc,pc,!1)}function Uc(e,t,n){var r=ec;ec|=2;var o=Hc(),i=Wc();tc===e&&rc===t||(wc=null,Fc(e,t)),t=!1;var a=uc;e:for(;;)try{if(0!==oc&&null!==nc){var s=nc,l=ic;switch(oc){case 8:Dc(),a=6;break e;case 3:case 2:case 6:null===Po.current&&(t=!0);var c=oc;if(oc=0,ic=null,Xc(e,s,l,c),n&&sc){a=0;break e}break;default:c=oc,oc=0,ic=null,Xc(e,s,l,c)}}Yc(),a=uc;break}catch(u){Bc(e,u)}return t&&e.shellSuspendCounter++,vs=gs=null,ec=r,z.H=o,z.A=i,null===nc&&(tc=null,rc=0,Er()),a}function Yc(){for(;null!==nc;)qc(nc)}function Gc(){for(;null!==nc&&!ae();)qc(nc)}function qc(e){var t=ps(e.alternate,e,cc);e.memoizedProps=e.pendingProps,null===t?Qc(e):nc=t}function Kc(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ja(n,t,t.pendingProps,t.type,void 0,rc);break;case 11:t=Ja(n,t,t.pendingProps,t.type.render,t.ref,rc);break;case 5:yi(t);default:Ql(n,t),t=ps(n,t=nc=_l(t,cc),cc)}e.memoizedProps=e.pendingProps,null===t?Qc(e):nc=t}function Xc(e,t,n,r){vs=gs=null,yi(t),mo=null,go=0;var o=t.return;try{if(function(e,t,n,r,o){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&ks(t,n,o,!0),null!==(n=Po.current)){switch(n.tag){case 13:return null===zo?Vc():null===n.alternate&&0===uc&&(uc=3),n.flags&=-257,n.flags|=65536,n.lanes=o,r===lo?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),ou(e,r,o)),!1;case 22:return n.flags|=65536,r===lo?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),ou(e,r,o)),!1}throw Error(a(435,n.tag))}return ou(e,r,o),Vc(),!1}if(Xr)return null!==(t=Po.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=o,r!==Jr&&io(Ir(e=Error(a(422),{cause:r}),n))):(r!==Jr&&io(Ir(t=Error(a(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,o&=-o,e.lanes|=o,r=Ir(r,n),Is(e,o=Fa(e.stateNode,r,o)),4!==uc&&(uc=2)),!1;var i=Error(a(520),{cause:r});if(i=Ir(i,n),null===gc?gc=[i]:gc.push(i),4!==uc&&(uc=2),null===t)return!0;r=Ir(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,Is(n,e=Fa(n.stateNode,r,e)),!1;case 1:if(t=n.type,i=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==i&&"function"===typeof i.componentDidCatch&&(null===kc||!kc.has(i))))return n.flags|=65536,o&=-o,n.lanes|=o,Ha(o=Ba(o),e,n,r),Is(n,o),!1}n=n.return}while(null!==n);return!1}(e,o,t,n,rc))return uc=1,_a(e,Ir(n,e.current)),void(nc=null)}catch(i){if(null!==o)throw nc=o,i;return uc=1,_a(e,Ir(n,e.current)),void(nc=null)}32768&t.flags?(Xr||1===r?e=!0:sc||0!==(536870912&rc)?e=!1:(ac=e=!0,(2===r||3===r||6===r)&&(null!==(r=Po.current)&&13===r.tag&&(r.flags|=16384))),Zc(t,e)):Qc(t)}function Qc(e){var t=e;do{if(0!==(32768&t.flags))return void Zc(t,ac);e=t.return;var n=Kl(t.alternate,t,cc);if(null!==n)return void(nc=n);if(null!==(t=t.sibling))return void(nc=t);nc=t=e}while(null!==t);0===uc&&(uc=5)}function Zc(e,t){do{var n=Xl(e.alternate,e);if(null!==n)return n.flags&=32767,void(nc=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(nc=e);nc=e=n}while(null!==e);uc=6,nc=null}function Jc(e,t,n,r,o,i,s,l,c,u){var d=z.T,f=H.p;try{H.p=2,z.T=null,function(e,t,n,r,o,i,s,l){do{tu()}while(null!==jc);if(0!==(6&ec))throw Error(a(327));var c=e.finishedWork;if(r=e.finishedLanes,null===c)return null;if(e.finishedWork=null,e.finishedLanes=0,c===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var u=c.lanes|c.childLanes;if(function(e,t,n,r,o,i){var a=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=a&~n;0<n;){var u=31-xe(n),d=1<<u;s[u]=0,l[u]=-1;var f=c[u];if(null!==f)for(c[u]=null,u=0;u<f.length;u++){var h=f[u];null!==h&&(h.lane&=-536870913)}n&=~d}0!==r&&Re(e,r,0),0!==i&&0===o&&0!==e.tag&&(e.suspendedLanes|=i&~(a&~t))}(e,r,u|=Cr,i,s,l),e===tc&&(nc=tc=null,rc=0),0===(10256&c.subtreeFlags)&&0===(10256&c.flags)||Sc||(Sc=!0,Ec=u,Tc=n,function(e,t){oe(e,t)}(fe,(function(){return tu(),null}))),n=0!==(15990&c.flags),0!==(15990&c.subtreeFlags)||n?(n=z.T,z.T=null,i=H.p,H.p=2,s=ec,ec|=4,function(e,t){if(e=e.containerInfo,Gu=Vd,er(e=Jn(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(g){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,f=e,h=null;t:for(;;){for(var p;f!==n||0!==o&&3!==f.nodeType||(l=s+o),f!==i||0!==r&&3!==f.nodeType||(c=s+r),3===f.nodeType&&(s+=f.nodeValue.length),null!==(p=f.firstChild);)h=f,f=p;for(;;){if(f===e)break t;if(h===n&&++u===o&&(l=s),h===i&&++d===r&&(c=s),null!==(p=f.nextSibling))break;h=(f=h).parentNode}f=p}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(qu={focusedElem:e,selectionRange:n},Vd=!1,nl=t;null!==nl;)if(e=(t=nl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,nl=e;else for(;null!==nl;){switch(i=(t=nl).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==i){e=void 0,n=t,o=i.memoizedProps,i=i.memoizedState,r=n.stateNode;try{var m=Ra(n.type,o,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(m,i),r.__reactInternalSnapshotBeforeUpdate=e}catch(v){ru(n,n.return,v)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))ad(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ad(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(a(163))}if(null!==(e=t.sibling)){e.return=t.return,nl=e;break}nl=t.return}m=rl,rl=!1}(e,c),pl(c,e),tr(qu,e.containerInfo),Vd=!!Gu,qu=Gu=null,e.current=c,ol(e,c.alternate,c),se(),ec=s,H.p=i,z.T=n):e.current=c,Sc?(Sc=!1,jc=e,Cc=r):eu(e,u),u=e.pendingLanes,0===u&&(kc=null),function(e){if(ye&&"function"===typeof ye.onCommitFiberRoot)try{ye.onCommitFiberRoot(ve,e,void 0,128===(128&e.current.flags))}catch(t){}}(c.stateNode),mu(e),null!==t)for(o=e.onRecoverableError,c=0;c<t.length;c++)u=t[c],o(u.value,{componentStack:u.stack});0!==(3&Cc)&&tu(),u=e.pendingLanes,0!==(4194218&r)&&0!==(42&u)?e===Pc?Ac++:(Ac=0,Pc=e):Ac=0,gu(0,!1)}(e,t,n,r,f,o,i,s)}finally{z.T=d,H.p=f}}function eu(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Ho(t)))}function tu(){if(null!==jc){var e=jc,t=Ec;Ec=0;var n=$e(Cc),r=z.T,o=H.p;try{if(H.p=32>n?32:n,z.T=null,null===jc)var i=!1;else{n=Tc,Tc=null;var s=jc,l=Cc;if(jc=null,Cc=0,0!==(6&ec))throw Error(a(331));var c=ec;if(ec|=4,Ol(s.current),Sl(s,s.current,l,n),ec=c,gu(0,!1),ye&&"function"===typeof ye.onPostCommitFiberRoot)try{ye.onPostCommitFiberRoot(ve,s)}catch(u){}i=!0}return i}finally{H.p=o,z.T=r,eu(e,t)}}return!1}function nu(e,t,n){t=Ir(n,t),null!==(e=Ms(e,t=Fa(e.stateNode,t,2),2))&&(Me(e,2),mu(e))}function ru(e,t,n){if(3===e.tag)nu(e,e,n);else for(;null!==t;){if(3===t.tag){nu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===kc||!kc.has(r))){e=Ir(n,e),null!==(r=Ms(t,n=Ba(2),2))&&(Ha(n,r,t,e),Me(r,2),mu(r));break}}t=t.return}}function ou(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new Jl;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(lc=!0,o.add(n),e=iu.bind(null,e,t,n),t.then(e,e))}function iu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,tc===e&&(rc&n)===n&&(4===uc||3===uc&&(62914560&rc)===rc&&300>le()-bc?0===(2&ec)&&Fc(e,0):hc|=n,mc===rc&&(mc=0)),mu(e)}function au(e,t){0===t&&(t=ze()),null!==(e=Pr(e,t))&&(Me(e,t),mu(e))}function su(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),au(e,n)}function lu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}null!==r&&r.delete(t),au(e,n)}var cu=null,uu=null,du=!1,fu=!1,hu=!1,pu=0;function mu(e){var t;e!==uu&&null===e.next&&(null===uu?cu=uu=e:uu=uu.next=e),fu=!0,du||(du=!0,t=vu,rd((function(){0!==(6&ec)?oe(ue,t):t()})))}function gu(e,t){if(!hu&&fu){hu=!0;do{for(var n=!1,r=cu;null!==r;){if(!t)if(0!==e){var o=r.pendingLanes;if(0===o)var i=0;else{var a=r.suspendedLanes,s=r.pingedLanes;i=(1<<31-xe(42|e)+1)-1,i=201326677&(i&=o&~(a&~s))?201326677&i|1:i?2|i:0}0!==i&&(n=!0,xu(r,i))}else i=rc,0===(3&(i=Ee(r,r===tc?i:0)))||Te(r,i)||(n=!0,xu(r,i));r=r.next}}while(n);hu=!1}}function vu(){fu=du=!1;var e=0;0!==pu&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==Ju&&(Ju=e,!0);return Ju=null,!1}()&&(e=pu),pu=0);for(var t=le(),n=null,r=cu;null!==r;){var o=r.next,i=yu(r,t);0===i?(r.next=null,null===n?cu=o:n.next=o,null===o&&(uu=n)):(n=r,(0!==e||0!==(3&i))&&(fu=!0)),r=o}gu(e,!1)}function yu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=-62914561&e.pendingLanes;0<i;){var a=31-xe(i),s=1<<a,l=o[a];-1===l?0!==(s&n)&&0===(s&r)||(o[a]=Ae(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}if(n=rc,n=Ee(e,e===(t=tc)?n:0),r=e.callbackNode,0===n||e===t&&2===oc||null!==e.cancelPendingCommit)return null!==r&&null!==r&&ie(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||Te(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&ie(r),$e(n)){case 2:case 8:n=de;break;case 32:default:n=fe;break;case 268435456:n=pe}return r=bu.bind(null,e),n=oe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&ie(r),e.callbackPriority=2,e.callbackNode=null,2}function bu(e,t){var n=e.callbackNode;if(tu()&&e.callbackNode!==n)return null;var r=rc;return 0===(r=Ee(e,e===tc?r:0))?null:(Rc(e,r,t),yu(e,le()),null!=e.callbackNode&&e.callbackNode===n?bu.bind(null,e):null)}function xu(e,t){if(tu())return null;Rc(e,t,!0)}function wu(){return 0===pu&&(pu=Pe()),pu}function ku(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:Pt(""+e)}function Su(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var ju=0;ju<wr.length;ju++){var Cu=wr[ju];kr(Cu.toLowerCase(),"on"+(Cu[0].toUpperCase()+Cu.slice(1)))}kr(hr,"onAnimationEnd"),kr(pr,"onAnimationIteration"),kr(mr,"onAnimationStart"),kr("dblclick","onDoubleClick"),kr("focusin","onFocus"),kr("focusout","onBlur"),kr(gr,"onTransitionRun"),kr(vr,"onTransitionStart"),kr(yr,"onTransitionCancel"),kr(br,"onTransitionEnd"),tt("onMouseEnter",["mouseout","mouseover"]),tt("onMouseLeave",["mouseout","mouseover"]),tt("onPointerEnter",["pointerout","pointerover"]),tt("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tu=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eu));function Au(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;i=s,o.currentTarget=c;try{i(o)}catch(u){Ia(u)}o.currentTarget=null,i=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,c=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;i=s,o.currentTarget=c;try{i(o)}catch(u){Ia(u)}o.currentTarget=null,i=l}}}}function Pu(e,t){var n=t[Be];void 0===n&&(n=t[Be]=new Set);var r=e+"__bubble";n.has(r)||(Ru(t,e,2,!1),n.add(r))}function zu(e,t,n){var r=0;t&&(r|=4),Ru(n,e,r,t)}var Ou="_reactListening"+Math.random().toString(36).slice(2);function Mu(e){if(!e[Ou]){e[Ou]=!0,Ze.forEach((function(t){"selectionchange"!==t&&(Tu.has(t)||zu(t,!1,e),zu(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ou]||(t[Ou]=!0,zu("selectionchange",!1,t))}}function Ru(e,t,n,r){switch(Qd(t)){case 2:var o=Ud;break;case 8:o=Yd;break;default:o=Gd}n=o.bind(null,t,n,e),o=void 0,!_t||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Iu(e,t,n,r,o){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===o||8===s.nodeType&&s.parentNode===o)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===o||8===l.nodeType&&l.parentNode===o))return;a=a.return}for(;null!==s;){if(null===(a=Ge(s)))return;if(5===(l=a.tag)||6===l||26===l||27===l){r=i=a;continue e}s=s.parentNode}}r=r.return}Lt((function(){var r=i,o=Ot(n),a=[];e:{var s=xr.get(e);if(void 0!==s){var l=Zt,c=e;switch(e){case"keypress":if(0===Vt(n))break e;case"keydown":case"keyup":l=pn;break;case"focusin":c="focus",l=on;break;case"focusout":c="blur",l=on;break;case"beforeblur":case"afterblur":l=on;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=nn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=rn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=gn;break;case hr:case pr:case mr:l=an;break;case br:l=vn;break;case"scroll":case"scrollend":l=en;break;case"wheel":l=yn;break;case"copy":case"cut":case"paste":l=sn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=mn;break;case"toggle":case"beforetoggle":l=bn}var u=0!==(4&t),d=!u&&("scroll"===e||"scrollend"===e),f=u?null!==s?s+"Capture":null:s;u=[];for(var h,p=r;null!==p;){var m=p;if(h=m.stateNode,5!==(m=m.tag)&&26!==m&&27!==m||null===h||null===f||null!=(m=Nt(p,f))&&u.push($u(p,m,h)),d)break;p=p.return}0<u.length&&(s=new l(s,c,null,n,o),a.push({event:s,listeners:u}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===zt||!(c=n.relatedTarget||n.fromElement)||!Ge(c)&&!c[Fe])&&(l||s)&&(s=o.window===o?o:(s=o.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?Ge(c):null)&&(d=N(c),u=c.tag,c!==d||5!==u&&27!==u&&6!==u)&&(c=null)):(l=null,c=r),l!==c)){if(u=nn,m="onMouseLeave",f="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(u=mn,m="onPointerLeave",f="onPointerEnter",p="pointer"),d=null==l?s:Ke(l),h=null==c?s:Ke(c),(s=new u(m,p+"leave",l,n,o)).target=d,s.relatedTarget=h,m=null,Ge(o)===r&&((u=new u(f,p+"enter",c,n,o)).target=h,u.relatedTarget=d,m=u),d=m,l&&c)e:{for(f=c,p=0,h=u=l;h;h=Nu(h))p++;for(h=0,m=f;m;m=Nu(m))h++;for(;0<p-h;)u=Nu(u),p--;for(;0<h-p;)f=Nu(f),h--;for(;p--;){if(u===f||null!==f&&u===f.alternate)break e;u=Nu(u),f=Nu(f)}u=null}else u=null;null!==l&&_u(a,s,l,u,!1),null!==c&&null!==d&&_u(a,d,c,u,!0)}if("select"===(l=(s=r?Ke(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Nn;else if(On(s))if(_n)g=Gn;else{g=Un;var v=Vn}else!(l=s.nodeName)||"input"!==l.toLowerCase()||"checkbox"!==s.type&&"radio"!==s.type?r&&Et(r.elementType)&&(g=Nn):g=Yn;switch(g&&(g=g(e,r))?Mn(a,g,n,o):(v&&v(e,s,r),"focusout"===e&&r&&"number"===s.type&&null!=r.memoizedProps.value&&yt(s,"number",s.value)),v=r?Ke(r):window,e){case"focusin":(On(v)||"true"===v.contentEditable)&&(rr=v,or=r,ir=null);break;case"focusout":ir=or=rr=null;break;case"mousedown":ar=!0;break;case"contextmenu":case"mouseup":case"dragend":ar=!1,sr(a,n,o);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":sr(a,n,o)}var y;if(wn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Pn?Tn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(jn&&"ko"!==n.locale&&(Pn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Pn&&(y=Wt()):(Bt="value"in(Ft=o)?Ft.value:Ft.textContent,Pn=!0)),0<(v=Lu(r,b)).length&&(b=new ln(b,e,null,n,o),a.push({event:b,listeners:v}),y?b.data=y:null!==(y=An(n))&&(b.data=y))),(y=Sn?function(e,t){switch(e){case"compositionend":return An(t);case"keypress":return 32!==t.which?null:(En=!0,Cn);case"textInput":return(e=t.data)===Cn&&En?null:e;default:return null}}(e,n):function(e,t){if(Pn)return"compositionend"===e||!wn&&Tn(e,t)?(e=Wt(),Ht=Bt=Ft=null,Pn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(b=Lu(r,"onBeforeInput")).length&&(v=new ln("onBeforeInput","beforeinput",null,n,o),a.push({event:v,listeners:b}),v.data=y)),function(e,t,n,r,o){if("submit"===t&&n&&n.stateNode===o){var i=ku((o[De]||null).action),a=r.submitter;a&&null!==(t=(t=a[De]||null)?ku(t.formAction):a.getAttribute("formAction"))&&(i=t,a=null);var s=new Zt("action","action",null,r,o);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==pu){var e=a?Su(o,a):new FormData(o);da(n,{pending:!0,data:e,method:o.method,action:i},null,e)}}else"function"===typeof i&&(s.preventDefault(),e=a?Su(o,a):new FormData(o),da(n,{pending:!0,data:e,method:o.method,action:i},i,e))},currentTarget:o}]})}}(a,e,r,n,o)}Au(a,t)}))}function $u(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Lu(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,i=o.stateNode;5!==(o=o.tag)&&26!==o&&27!==o||null===i||(null!=(o=Nt(e,n))&&r.unshift($u(e,o,i)),null!=(o=Nt(e,t))&&r.push($u(e,o,i))),e=e.return}return r}function Nu(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function _u(e,t,n,r,o){for(var i=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(s=s.tag,null!==l&&l===r)break;5!==s&&26!==s&&27!==s||null===c||(l=c,o?null!=(c=Nt(n,i))&&a.unshift($u(n,c,l)):o||null!=(c=Nt(n,i))&&a.push($u(n,c,l))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Du=/\r\n?/g,Fu=/\u0000|\uFFFD/g;function Bu(e){return("string"===typeof e?e:""+e).replace(Du,"\n").replace(Fu,"")}function Hu(e,t){return t=Bu(t),Bu(e)===t}function Wu(){}function Vu(e,t,n,r,o,i){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||kt(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&kt(e,""+r);break;case"className":st(e,"class",r);break;case"tabIndex":st(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":st(e,n,r);break;case"style":Ct(e,r,i);break;case"data":if("object"!==t){st(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Pt(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof i&&("formAction"===n?("input"!==t&&Vu(e,t,"name",o.name,o,null),Vu(e,t,"formEncType",o.formEncType,o,null),Vu(e,t,"formMethod",o.formMethod,o,null),Vu(e,t,"formTarget",o.formTarget,o,null)):(Vu(e,t,"encType",o.encType,o,null),Vu(e,t,"method",o.method,o,null),Vu(e,t,"target",o.target,o,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Pt(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Wu);break;case"onScroll":null!=r&&Pu("scroll",e);break;case"onScrollEnd":null!=r&&Pu("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=o.children)throw Error(a(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=Pt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Pu("beforetoggle",e),Pu("toggle",e),at(e,"popover",r);break;case"xlinkActuate":lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":lt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":lt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":lt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":lt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":at(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&at(e,n=Tt.get(n)||n,r)}}function Uu(e,t,n,r,o,i){switch(n){case"style":Ct(e,r,i);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=o.children)throw Error(a(60));e.innerHTML=n}}break;case"children":"string"===typeof r?kt(e,r):("number"===typeof r||"bigint"===typeof r)&&kt(e,""+r);break;case"onScroll":null!=r&&Pu("scroll",e);break;case"onScrollEnd":null!=r&&Pu("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Wu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Je.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),"function"===typeof(i=null!=(i=e[De]||null)?i[n]:null)&&e.removeEventListener(t,i,o),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):at(e,n,r):("function"!==typeof i&&null!==i&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,o)))}}function Yu(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pu("error",e),Pu("load",e);var r,o=!1,i=!1;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(null!=s)switch(r){case"src":o=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:Vu(e,t,r,s,n,null)}}return i&&Vu(e,t,"srcSet",n.srcSet,n,null),void(o&&Vu(e,t,"src",n.src,n,null));case"input":Pu("invalid",e);var l=r=s=i=null,c=null,u=null;for(o in n)if(n.hasOwnProperty(o)){var d=n[o];if(null!=d)switch(o){case"name":i=d;break;case"type":s=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(a(137,t));break;default:Vu(e,t,o,d,n,null)}}return vt(e,r,l,c,u,s,i,!1),void dt(e);case"select":for(i in Pu("invalid",e),o=s=r=null,n)if(n.hasOwnProperty(i)&&null!=(l=n[i]))switch(i){case"value":r=l;break;case"defaultValue":s=l;break;case"multiple":o=l;default:Vu(e,t,i,l,n,null)}return t=r,n=s,e.multiple=!!o,void(null!=t?bt(e,!!o,t,!1):null!=n&&bt(e,!!o,n,!0));case"textarea":for(s in Pu("invalid",e),r=i=o=null,n)if(n.hasOwnProperty(s)&&null!=(l=n[s]))switch(s){case"value":o=l;break;case"defaultValue":i=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(null!=l)throw Error(a(91));break;default:Vu(e,t,s,l,n,null)}return wt(e,o,i,r),void dt(e);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(o=n[c]))if("selected"===c)e.selected=o&&"function"!==typeof o&&"symbol"!==typeof o;else Vu(e,t,c,o,n,null);return;case"dialog":Pu("cancel",e),Pu("close",e);break;case"iframe":case"object":Pu("load",e);break;case"video":case"audio":for(o=0;o<Eu.length;o++)Pu(Eu[o],e);break;case"image":Pu("error",e),Pu("load",e);break;case"details":Pu("toggle",e);break;case"embed":case"source":case"link":Pu("error",e),Pu("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(o=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:Vu(e,t,u,o,n,null)}return;default:if(Et(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(o=n[d])&&Uu(e,t,d,o,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(null!=(o=n[l])&&Vu(e,t,l,o,n,null))}var Gu=null,qu=null;function Ku(e){return 9===e.nodeType?e:e.ownerDocument}function Xu(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qu(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function Zu(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Ju=null;var ed="function"===typeof setTimeout?setTimeout:void 0,td="function"===typeof clearTimeout?clearTimeout:void 0,nd="function"===typeof Promise?Promise:void 0,rd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof nd?function(e){return nd.resolve(null).then(e).catch(od)}:ed;function od(e){setTimeout((function(){throw e}))}function id(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===r)return e.removeChild(o),void gf(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=o}while(n);gf(t)}function ad(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ad(n),Ye(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function sd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}function ld(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function cd(e,t,n){switch(t=Ku(n),e){case"html":if(!(e=t.documentElement))throw Error(a(452));return e;case"head":if(!(e=t.head))throw Error(a(453));return e;case"body":if(!(e=t.body))throw Error(a(454));return e;default:throw Error(a(451))}}var ud=new Map,dd=new Set;function fd(e){return"function"===typeof e.getRootNode?e.getRootNode():e.ownerDocument}var hd=H.d;H.d={f:function(){var e=hd.f(),t=_c();return e||t},r:function(e){var t=qe(e);null!==t&&5===t.tag&&"form"===t.type?ha(t):hd.r(e)},D:function(e){hd.D(e),md("dns-prefetch",e,null)},C:function(e,t){hd.C(e,t),md("preconnect",e,t)},L:function(e,t,n){hd.L(e,t,n);var r=pd;if(r&&e&&t){var o='link[rel="preload"][as="'+mt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(o+='[imagesrcset="'+mt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(o+='[imagesizes="'+mt(n.imageSizes)+'"]')):o+='[href="'+mt(e)+'"]';var i=o;switch(t){case"style":i=vd(e);break;case"script":i=xd(e)}ud.has(i)||(e=O({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),ud.set(i,e),null!==r.querySelector(o)||"style"===t&&r.querySelector(yd(i))||"script"===t&&r.querySelector(wd(i))||(Yu(t=r.createElement("link"),"link",e),Qe(t),r.head.appendChild(t)))}},m:function(e,t){hd.m(e,t);var n=pd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",o='link[rel="modulepreload"][as="'+mt(r)+'"][href="'+mt(e)+'"]',i=o;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=xd(e)}if(!ud.has(i)&&(e=O({rel:"modulepreload",href:e},t),ud.set(i,e),null===n.querySelector(o))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(wd(i)))return}Yu(r=n.createElement("link"),"link",e),Qe(r),n.head.appendChild(r)}}},X:function(e,t){hd.X(e,t);var n=pd;if(n&&e){var r=Xe(n).hoistableScripts,o=xd(e),i=r.get(o);i||((i=n.querySelector(wd(o)))||(e=O({src:e,async:!0},t),(t=ud.get(o))&&Cd(e,t),Qe(i=n.createElement("script")),Yu(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(o,i))}},S:function(e,t,n){hd.S(e,t,n);var r=pd;if(r&&e){var o=Xe(r).hoistableStyles,i=vd(e);t=t||"default";var a=o.get(i);if(!a){var s={loading:0,preload:null};if(a=r.querySelector(yd(i)))s.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ud.get(i))&&jd(e,n);var l=a=r.createElement("link");Qe(l),Yu(l,"link",e),l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),l.addEventListener("load",(function(){s.loading|=1})),l.addEventListener("error",(function(){s.loading|=2})),s.loading|=4,Sd(a,t,r)}a={type:"stylesheet",instance:a,count:1,state:s},o.set(i,a)}}},M:function(e,t){hd.M(e,t);var n=pd;if(n&&e){var r=Xe(n).hoistableScripts,o=xd(e),i=r.get(o);i||((i=n.querySelector(wd(o)))||(e=O({src:e,async:!0,type:"module"},t),(t=ud.get(o))&&Cd(e,t),Qe(i=n.createElement("script")),Yu(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(o,i))}}};var pd="undefined"===typeof document?null:document;function md(e,t,n){var r=pd;if(r&&"string"===typeof t&&t){var o=mt(t);o='link[rel="'+e+'"][href="'+o+'"]',"string"===typeof n&&(o+='[crossorigin="'+n+'"]'),dd.has(o)||(dd.add(o),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(o)&&(Yu(t=r.createElement("link"),"link",e),Qe(t),r.head.appendChild(t)))}}function gd(e,t,n,r){var o,i,s,l,c=(c=Q.current)?fd(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=vd(n.href),(r=(n=Xe(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=vd(n.href);var u=Xe(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(yd(e)))&&!u._p&&(d.instance=u,d.state.loading=5),ud.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ud.set(e,n),u||(o=c,i=e,s=n,l=d.state,o.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=o.createElement("link"),l.preload=i,i.addEventListener("load",(function(){return l.loading|=1})),i.addEventListener("error",(function(){return l.loading|=2})),Yu(i,"link",s),Qe(i),o.head.appendChild(i))))),t&&null===r)throw Error(a(528,""));return d}if(t&&null!==r)throw Error(a(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=xd(n),(r=(n=Xe(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function vd(e){return'href="'+mt(e)+'"'}function yd(e){return'link[rel="stylesheet"]['+e+"]"}function bd(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function xd(e){return'[src="'+mt(e)+'"]'}function wd(e){return"script[async]"+e}function kd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+mt(n.href)+'"]');if(r)return t.instance=r,Qe(r),r;var o=O({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return Qe(r=(e.ownerDocument||e).createElement("style")),Yu(r,"style",o),Sd(r,n.precedence,e),t.instance=r;case"stylesheet":o=vd(n.href);var i=e.querySelector(yd(o));if(i)return t.state.loading|=4,t.instance=i,Qe(i),i;r=bd(n),(o=ud.get(o))&&jd(r,o),Qe(i=(e.ownerDocument||e).createElement("link"));var s=i;return s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),Yu(i,"link",r),t.state.loading|=4,Sd(i,n.precedence,e),t.instance=i;case"script":return i=xd(n.src),(o=e.querySelector(wd(i)))?(t.instance=o,Qe(o),o):(r=n,(o=ud.get(i))&&Cd(r=O({},n),o),Qe(o=(e=e.ownerDocument||e).createElement("script")),Yu(o,"link",r),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(a(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Sd(r,n.precedence,e));return t.instance}function Sd(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=r.length?r[r.length-1]:null,i=o,a=0;a<r.length;a++){var s=r[a];if(s.dataset.precedence===t)i=s;else if(i!==o)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function jd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Cd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Ed=null;function Td(e,t,n){if(null===Ed){var r=new Map,o=Ed=new Map;o.set(n,r)}else(r=(o=Ed).get(n))||(r=new Map,o.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var i=n[o];if(!(i[Ue]||i[_e]||"link"===e&&"stylesheet"===i.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==i.namespaceURI){var a=i.getAttribute(t)||"";a=e+a;var s=r.get(a);s?s.push(i):r.set(a,[i])}}return r}function Ad(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function Pd(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var zd=null;function Od(){}function Md(){if(this.count--,0===this.count)if(this.stylesheets)Id(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Rd=null;function Id(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Rd=new Map,t.forEach($d,e),Rd=null,Md.call(e))}function $d(e,t){if(!(4&t.state.loading)){var n=Rd.get(e);if(n)var r=n.get(null);else{n=new Map,Rd.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<o.length;i++){var a=o[i];"LINK"!==a.nodeName&&"not all"===a.getAttribute("media")||(n.set(a.dataset.precedence,a),r=a)}r&&n.set(null,r)}a=(o=t.instance).getAttribute("data-precedence"),(i=n.get(a)||r)===r&&n.set(null,o),n.set(a,o),this.count++,r=Md.bind(this),o.addEventListener("load",r),o.addEventListener("error",r),i?i.parentNode.insertBefore(o,i.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(o,e.firstChild),t.state.loading|=4}}var Ld={$$typeof:g,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Nd(e,t,n,r,o,i,a,s){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Oe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oe(0),this.hiddenUpdates=Oe(null),this.identifierPrefix=r,this.onUncaughtError=o,this.onCaughtError=i,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function _d(e,t,n,r,o,i,a,s,l,c,u,d){return e=new Nd(e,t,n,a,s,l,c,d),t=1,!0===i&&(t|=24),i=$l(3,null,null,t),e.current=i,i.stateNode=e,(t=Bo()).refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:r,isDehydrated:n,cache:t},Ps(i),e}function Dd(e){return e?e=Mr:Mr}function Fd(e,t,n,r,o,i){o=Dd(o),null===r.context?r.context=o:r.pendingContext=o,(r=Os(t)).payload={element:n},null!==(i=void 0===i?null:i)&&(r.callback=i),null!==(n=Ms(e,r,t))&&(Mc(n,0,t),Rs(n,e,t))}function Bd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Hd(e,t){Bd(e,t),(e=e.alternate)&&Bd(e,t)}function Wd(e){if(13===e.tag){var t=Pr(e,67108864);null!==t&&Mc(t,0,67108864),Hd(e,67108864)}}var Vd=!0;function Ud(e,t,n,r){var o=z.T;z.T=null;var i=H.p;try{H.p=2,Gd(e,t,n,r)}finally{H.p=i,z.T=o}}function Yd(e,t,n,r){var o=z.T;z.T=null;var i=H.p;try{H.p=8,Gd(e,t,n,r)}finally{H.p=i,z.T=o}}function Gd(e,t,n,r){if(Vd){var o=qd(r);if(null===o)Iu(e,t,r,Kd,n),sf(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return Jd=lf(Jd,e,t,n,r,o),!0;case"dragenter":return ef=lf(ef,e,t,n,r,o),!0;case"mouseover":return tf=lf(tf,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return nf.set(i,lf(nf.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,rf.set(i,lf(rf.get(i)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(sf(e,r),4&t&&-1<af.indexOf(e)){for(;null!==o;){var i=qe(o);if(null!==i)switch(i.tag){case 3:if((i=i.stateNode).current.memoizedState.isDehydrated){var a=Ce(i.pendingLanes);if(0!==a){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;a;){var l=1<<31-xe(a);s.entanglements[1]|=l,a&=~l}mu(i),0===(6&ec)&&(xc=le()+500,gu(0,!1))}}break;case 13:null!==(s=Pr(i,2))&&Mc(s,0,2),_c(),Hd(i,2)}if(null===(i=qd(r))&&Iu(e,t,r,Kd,n),i===o)break;o=i}null!==o&&r.stopPropagation()}else Iu(e,t,r,null,n)}}function qd(e){return Xd(e=Ot(e))}var Kd=null;function Xd(e){if(Kd=null,null!==(e=Ge(e))){var t=N(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=_(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Kd=e,null}function Qd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ce()){case ue:return 2;case de:return 8;case fe:case he:return 32;case pe:return 268435456;default:return 32}default:return 32}}var Zd=!1,Jd=null,ef=null,tf=null,nf=new Map,rf=new Map,of=[],af="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sf(e,t){switch(e){case"focusin":case"focusout":Jd=null;break;case"dragenter":case"dragleave":ef=null;break;case"mouseover":case"mouseout":tf=null;break;case"pointerover":case"pointerout":nf.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rf.delete(t.pointerId)}}function lf(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},null!==t&&(null!==(t=qe(t))&&Wd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function cf(e){var t=Ge(e.target);if(null!==t){var n=N(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=_(n)))return e.blockedOn=t,void function(e,t){var n=H.p;try{return H.p=e,t()}finally{H.p=n}}(e.priority,(function(){if(13===n.tag){var e=zc(),t=Pr(n,e);null!==t&&Mc(t,0,e),Hd(n,e)}}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function uf(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=qd(e.nativeEvent);if(null!==n)return null!==(t=qe(n))&&Wd(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);zt=r,n.target.dispatchEvent(r),zt=null,t.shift()}return!0}function df(e,t,n){uf(e)&&n.delete(t)}function ff(){Zd=!1,null!==Jd&&uf(Jd)&&(Jd=null),null!==ef&&uf(ef)&&(ef=null),null!==tf&&uf(tf)&&(tf=null),nf.forEach(df),rf.forEach(df)}function hf(e,t){e.blockedOn===t&&(e.blockedOn=null,Zd||(Zd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ff)))}var pf=null;function mf(e){pf!==e&&(pf=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,(function(){pf===e&&(pf=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],o=e[t+2];if("function"!==typeof r){if(null===Xd(r||n))continue;break}var i=qe(n);null!==i&&(e.splice(t,3),t-=3,da(i,{pending:!0,data:o,method:n.method,action:r},r,o))}})))}function gf(e){function t(t){return hf(t,e)}null!==Jd&&hf(Jd,e),null!==ef&&hf(ef,e),null!==tf&&hf(tf,e),nf.forEach(t),rf.forEach(t);for(var n=0;n<of.length;n++){var r=of[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<of.length&&null===(n=of[0]).blockedOn;)cf(n),null===n.blockedOn&&of.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var o=n[r],i=n[r+1],a=o[De]||null;if("function"===typeof i)a||mf(n);else if(a){var s=null;if(i&&i.hasAttribute("formAction")){if(o=i,a=i[De]||null)s=a.formAction;else if(null!==Xd(o))continue}else s=a.action;"function"===typeof s?n[r+1]=s:(n.splice(r,3),r-=3),mf(n)}}}function vf(e){this._internalRoot=e}function yf(e){this._internalRoot=e}yf.prototype.render=vf.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Fd(t.current,zc(),e,t,null,null)},yf.prototype.unmount=vf.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;0===e.tag&&tu(),Fd(e.current,2,null,e,null,null),_c(),t[Fe]=null}},yf.prototype.unstable_scheduleHydration=function(e){if(e){var t=Le();e={blockedOn:null,target:e,priority:t};for(var n=0;n<of.length&&0!==t&&t<of[n].priority;n++);of.splice(n,0,e),0===n&&cf(e)}};var bf=o.version;if("19.0.0"!==bf)throw Error(a(527,bf,"19.0.0"));H.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=N(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(r=o.return)){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return D(o),e;if(i===r)return D(o),t;i=i.sibling}throw Error(a(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?F(e):null)?null:e.stateNode};var xf={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:z,findFiberByHostInstance:Ge,reconcilerVersion:"19.0.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var wf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wf.isDisabled&&wf.supportsFiber)try{ve=wf.inject(xf),ye=wf}catch(Sf){}}t.createRoot=function(e,t){if(!s(e))throw Error(a(299));var n=!1,r="",o=$a,i=La,l=Na;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(o=t.onUncaughtError),void 0!==t.onCaughtError&&(i=t.onCaughtError),void 0!==t.onRecoverableError&&(l=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=_d(e,1,!1,null,0,n,r,o,i,l,0,null),e[Fe]=t.current,Mu(8===e.nodeType?e.parentNode:e),new vf(t)},t.hydrateRoot=function(e,t,n){if(!s(e))throw Error(a(299));var r=!1,o="",i=$a,l=La,c=Na,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(l=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(u=n.formState)),(t=_d(e,1,!0,t,0,r,o,i,l,c,0,u)).context=Dd(null),n=t.current,(o=Os(r=zc())).callback=null,Ms(n,o,r),t.current.lanes=r,Me(t,r),mu(t),e[Fe]=t.current,Mu(e),new yf(t)},t.version="19.0.0"},43:(e,t,n)=>{"use strict";e.exports=n(288)},132:(e,t)=>{"use strict";var n,r=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function v(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case i:case s:case a:case f:case h:return e;default:switch(e=e&&e.$$typeof){case u:case c:case d:case m:case p:case l:return e;default:return t}}case o:return t}}}n=Symbol.for("react.module.reference"),t.ForwardRef=d,t.isMemo=function(e){return v(e)===p}},139:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,i(n)))}return e}function i(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=a(t,n));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},288:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,m(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function j(e,t,r,o,i,a){return r=a.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:a}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(){}function P(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l,c,u=!1;if(null===e)u=!0;else switch(s){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case f:return P((u=e._init)(e._payload),t,o,i,a)}}if(u)return a=a(e),u=""===i?"."+T(e,0):i,w(a)?(o="",null!=u&&(o=u.replace(E,"$&/")+"/"),P(a,t,o,"",(function(e){return e}))):null!=a&&(C(a)&&(l=a,c=o+(null==a.key||e&&e.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+u,a=j(l.type,c,void 0,0,0,l.props)),t.push(a)),1;u=0;var d,p=""===i?".":i+":";if(w(e))for(var m=0;m<e.length;m++)u+=P(i=e[m],t,o,s=p+T(i,m),a);else if("function"===typeof(m=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=h&&d[h]||d["@@iterator"])?d:null))for(e=m.call(e),m=0;!(i=e.next()).done;)u+=P(i=i.value,t,o,s=p+T(i,m++),a);else if("object"===s){if("function"===typeof e.then)return P(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(A,A):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,o,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function z(e,t,n){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function R(){}t.Children={map:z,forEach:function(e,t,n){z(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return z(e,(function(){t++})),t},toArray:function(e){return z(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=a,t.PureComponent=b,t.StrictMode=i,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,t.act=function(){throw Error("act(...) is not supported in production builds of React.")},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=m({},e.props),o=e.key;if(null!=t)for(i in void 0!==t.ref&&void 0,void 0!==t.key&&(o=""+t.key),t)!S.call(t,i)||"key"===i||"__self"===i||"__source"===i||"ref"===i&&void 0===t.ref||(r[i]=t[i]);var i=arguments.length-2;if(1===i)r.children=n;else if(1<i){for(var a=Array(i),s=0;s<i;s++)a[s]=arguments[s+2];r.children=a}return j(e.type,o,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},t.createElement=function(e,t,n){var r,o={},i=null;if(null!=t)for(r in void 0!==t.key&&(i=""+t.key),t)S.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return j(e,i,void 0,0,0,o)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=k.T,n={};k.T=n;try{var r=e(),o=k.S;null!==o&&o(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(R,M)}catch(i){M(i)}finally{k.T=t}},t.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},t.use=function(e){return k.H.use(e)},t.useActionState=function(e,t,n){return k.H.useActionState(e,t,n)},t.useCallback=function(e,t){return k.H.useCallback(e,t)},t.useContext=function(e){return k.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return k.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return k.H.useEffect(e,t)},t.useId=function(){return k.H.useId()},t.useImperativeHandle=function(e,t,n){return k.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return k.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return k.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return k.H.useMemo(e,t)},t.useOptimistic=function(e,t){return k.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return k.H.useReducer(e,t,n)},t.useRef=function(e){return k.H.useRef(e)},t.useState=function(e){return k.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return k.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return k.H.useTransition()},t.version="19.0.0"},324:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var c=i[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(o=n?n.call(r,u,d,c):void 0)||void 0===o&&u!==d)return!1}return!0}},358:(e,t)=>{"use strict";const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,s=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function l(e,t,n){do{const n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function c(e,t,n){for(;t>n;){const n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function u(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},366:e=>{var t="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,l,c,u;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(l=s;0!==l--;)if(!i(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(l=s;0!==l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof a.toString)return e.toString()===a.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=s;0!==l--;)if(!Object.prototype.hasOwnProperty.call(a,c[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!==l--;)if(("_owner"!==c[l]&&"__v"!==c[l]&&"__o"!==c[l]||!e.$$typeof)&&!i(e[c[l]],a[c[l]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},391:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},579:(e,t,n)=>{"use strict";e.exports=n(799)},672:(e,t,n)=>{"use strict";var r=n(43);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(o(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal");var l=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(o(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=l.T,n=a.p;try{if(l.T=null,a.p=2,e)return e()}finally{l.T=t,a.p=n,a.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,a.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&a.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),o="string"===typeof t.integrity?t.integrity:void 0,i="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:o,fetchPriority:i}):"script"===n&&a.d.X(e,{crossOrigin:r,integrity:o,fetchPriority:i,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);a.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},t.requestFormReset=function(e){a.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},t.useFormStatus=function(){return l.H.useHostTransitionStatus()},t.version="19.0.0"},740:e=>{"use strict";e.exports=function(e,t,n,r,o,i,a,s){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,s],u=0;(l=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},799:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(e,t,r){var o=null;if(void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),"key"in t)for(var i in r={},t)"key"!==i&&(r[i]=t[i]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:o,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=o,t.jsxs=o},816:(e,t,n)=>{"use strict";e.exports=n(132)},853:(e,t,n)=>{"use strict";e.exports=n(896)},896:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<i(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>i(l,n))c<o&&0>i(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<o&&0>i(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,f=null,h=3,p=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(u);null!==t;){if(null===t.callback)o(u);else{if(!(t.startTime<=e))break;o(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,x(e),!m)if(null!==r(c))m=!0,O();else{var t=r(u);null!==t&&M(w,t.startTime-e)}}var k,S=!1,j=-1,C=5,E=-1;function T(){return!(t.unstable_now()-E<C)}function A(){if(S){var e=t.unstable_now();E=e;var n=!0;try{e:{m=!1,g&&(g=!1,y(j),j=-1),p=!0;var i=h;try{t:{for(x(e),f=r(c);null!==f&&!(f.expirationTime>e&&T());){var a=f.callback;if("function"===typeof a){f.callback=null,h=f.priorityLevel;var s=a(f.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof s){f.callback=s,x(e),n=!0;break t}f===r(c)&&o(c),x(e)}else o(c);f=r(c)}if(null!==f)n=!0;else{var l=r(u);null!==l&&M(w,l.startTime-e),n=!1}}break e}finally{f=null,h=i,p=!1}n=void 0}}finally{n?k():S=!1}}}if("function"===typeof b)k=function(){b(A)};else if("undefined"!==typeof MessageChannel){var P=new MessageChannel,z=P.port2;P.port1.onmessage=A,k=function(){z.postMessage(null)}}else k=function(){v(A,0)};function O(){S||(S=!0,k())}function M(e,n){j=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,O())},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,o,i){var a=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?a+i:a:i=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:i,expirationTime:s=i+s,sortIndex:-1},i>a?(e.sortIndex=i,n(u,e),null===r(c)&&e===r(u)&&(g?(y(j),j=-1):g=!0,M(w,i-a))):(e.sortIndex=s,n(c,e),m||p||(m=!0,O())),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,n.d(i,a),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".dab41eb1.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="admirian-blog:";n.l=(r,o,i,a)=>{if(e[r])e[r].push(o);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var f=(t,n)=>{s.onerror=s.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise(((n,r)=>o=e[t]=[n,r]));r.push(o[2]=i);var a=n.p+n.u(t),s=new Error;n.l(a,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,i,a=r[0],s=r[1],l=r[2],c=0;if(a.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)l(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunkadmirian_blog=self.webpackChunkadmirian_blog||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n.t(e,2),r=n(391),o=(n(358),"popstate");function i(){return f((function(e,t){let{pathname:n="/",search:r="",hash:o=""}=d(e.location.hash.substring(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),c("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"===typeof t?t:u(t))}),(function(e,t){s("/"===e.pathname.charAt(0),`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}),arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function a(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function s(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function l(e,t){return{usr:e.state,key:e.key,idx:t}}function c(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?d(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function u(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function d(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function f(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:i=document.defaultView,v5Compat:s=!1}=r,d=i.history,f="POP",h=null,p=m();function m(){return(d.state||{idx:null}).idx}function g(){f="POP";let e=m(),t=null==e?null:e-p;p=e,h&&h({action:f,location:y.location,delta:t})}function v(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"===typeof e?e:u(e);return n=n.replace(/ $/,"%20"),a(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}null==p&&(p=0,d.replaceState({...d.state,idx:p},""));let y={get action(){return f},get location(){return e(i,d)},listen(e){if(h)throw new Error("A history only accepts one active listener");return i.addEventListener(o,g),h=e,()=>{i.removeEventListener(o,g),h=null}},createHref:e=>t(i,e),createURL:v,encodeLocation(e){let t=v(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){f="PUSH";let r=c(y.location,e,t);n&&n(r,e),p=m()+1;let o=l(r,p),a=y.createHref(r);try{d.pushState(o,"",a)}catch(u){if(u instanceof DOMException&&"DataCloneError"===u.name)throw u;i.location.assign(a)}s&&h&&h({action:f,location:y.location,delta:1})},replace:function(e,t){f="REPLACE";let r=c(y.location,e,t);n&&n(r,e),p=m();let o=l(r,p),i=y.createHref(r);d.replaceState(o,"",i),s&&h&&h({action:f,location:y.location,delta:0})},go:e=>d.go(e)};return y}new WeakMap;function h(e,t){return p(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function p(e,t,n,r){let o=A(("string"===typeof t?d(t):t).pathname||"/",n);if(null==o)return null;let i=m(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let a=null;for(let s=0;null==a&&s<i.length;++s){let e=T(o);a=C(i[s],e,r)}return a}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=(e,o,i)=>{let s={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};s.relativePath.startsWith("/")&&(a(s.relativePath.startsWith(r),`Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(r.length));let l=R([r,s.relativePath]),c=n.concat(s);e.children&&e.children.length>0&&(a(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),m(e.children,t,c,l)),(null!=e.path||e.index)&&t.push({path:l,score:j(l,e.index),routesMeta:c})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of g(e.path))o(e,t,n);else o(e,t)})),t}function g(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return o?[i,""]:[i];let a=g(r.join("/")),s=[];return s.push(...a.map((e=>""===e?i:[i,e].join("/")))),o&&s.push(...a),s.map((t=>e.startsWith("/")&&""===t?"/":t))}var v=/^:[\w-]+$/,y=3,b=2,x=1,w=10,k=-2,S=e=>"*"===e;function j(e,t){let n=e.split("/"),r=n.length;return n.some(S)&&(r+=k),t&&(r+=b),n.filter((e=>!S(e))).reduce(((e,t)=>e+(v.test(t)?y:""===t?x:w)),r)}function C(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,o={},i="/",a=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===i?t:t.slice(i.length)||"/",u=E({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=E({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(o,u.params),a.push({params:o,pathname:R([i,u.pathname]),pathnameBase:I(R([i,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(i=R([i,u.pathnameBase]))}return a}function E(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];s("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))");let i=new RegExp(o,t?void 0:"i");return[i,r]}(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=l[n]||"";a=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=o&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:i,pathnameBase:a,pattern:e}}function T(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return s(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function A(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function P(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function z(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function O(e){let t=z(e);return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function M(e,t,n){let r,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=d(e):(r={...e},a(!r.pathname||!r.pathname.includes("?"),P("?","pathname","search",r)),a(!r.pathname||!r.pathname.includes("#"),P("#","pathname","hash",r)),a(!r.search||!r.search.includes("#"),P("#","search","hash",r)));let i,s=""===e||""===r.pathname,l=s?"/":r.pathname;if(null==l)i=n;else{let e=t.length-1;if(!o&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}i=e>=0?t[e]:"/"}let c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:o=""}="string"===typeof e?d(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:$(r),hash:L(o)}}(r,i),u=l&&"/"!==l&&l.endsWith("/"),f=(s||"."===l)&&n.endsWith("/");return c.pathname.endsWith("/")||!u&&!f||(c.pathname+="/"),c}var R=e=>e.join("/").replace(/\/\/+/g,"/"),I=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",L=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function N(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var _=["POST","PUT","PATCH","DELETE"],D=(new Set(_),["GET",..._]);new Set(D),Symbol("ResetLoaderData");var F=e.createContext(null);F.displayName="DataRouter";var B=e.createContext(null);B.displayName="DataRouterState";var H=e.createContext({isTransitioning:!1});H.displayName="ViewTransition";var W=e.createContext(new Map);W.displayName="Fetchers";var V=e.createContext(null);V.displayName="Await";var U=e.createContext(null);U.displayName="Navigation";var Y=e.createContext(null);Y.displayName="Location";var G=e.createContext({outlet:null,matches:[],isDataRoute:!1});G.displayName="Route";var q=e.createContext(null);q.displayName="RouteError";function K(){return null!=e.useContext(Y)}function X(){return a(K(),"useLocation() may be used only in the context of a <Router> component."),e.useContext(Y).location}var Q="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Z(t){e.useContext(U).static||e.useLayoutEffect(t)}function J(){let{isDataRoute:t}=e.useContext(G);return t?function(){let{router:t}=le("useNavigate"),n=ue("useNavigate"),r=e.useRef(!1);Z((()=>{r.current=!0}));let o=e.useCallback((async function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(r.current,Q),r.current&&("number"===typeof e?t.navigate(e):await t.navigate(e,{fromRouteId:n,...o}))}),[t,n]);return o}():function(){a(K(),"useNavigate() may be used only in the context of a <Router> component.");let t=e.useContext(F),{basename:n,navigator:r}=e.useContext(U),{matches:o}=e.useContext(G),{pathname:i}=X(),l=JSON.stringify(O(o)),c=e.useRef(!1);Z((()=>{c.current=!0}));let u=e.useCallback((function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s(c.current,Q),!c.current)return;if("number"===typeof e)return void r.go(e);let a=M(e,JSON.parse(l),i,"path"===o.relative);null==t&&"/"!==n&&(a.pathname="/"===a.pathname?n:R([n,a.pathname])),(o.replace?r.replace:r.push)(a,o.state,o)}),[n,r,l,i,t]);return u}()}e.createContext(null);function ee(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=e.useContext(G),{pathname:o}=X(),i=JSON.stringify(O(r));return e.useMemo((()=>M(t,JSON.parse(i),o,"path"===n)),[t,i,o,n])}function te(t,n,r,o){a(K(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i,static:l}=e.useContext(U),{matches:c}=e.useContext(G),u=c[c.length-1],f=u?u.params:{},p=u?u.pathname:"/",m=u?u.pathnameBase:"/",g=u&&u.route;{let e=g&&g.path||"";he(p,!g||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let v,y=X();if(n){let e="string"===typeof n?d(n):n;a("/"===m||e.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${e.pathname}" was given in the \`location\` prop.`),v=e}else v=y;let b=v.pathname||"/",x=b;if("/"!==m){let e=m.replace(/^\//,"").split("/");x="/"+b.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=!l&&r&&r.matches&&r.matches.length>0?r.matches:h(t,{pathname:x});s(g||null!=w,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),s(null==w||void 0!==w[w.length-1].route.element||void 0!==w[w.length-1].route.Component||void 0!==w[w.length-1].route.lazy,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=ae(w&&w.map((e=>Object.assign({},e,{params:Object.assign({},f,e.params),pathname:R([m,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?m:R([m,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),c,r,o);return n&&k?e.createElement(Y.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},k):k}function ne(){let t=de(),n=N(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,o="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:o},a={padding:"2px 4px",backgroundColor:o},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=e.createElement(e.Fragment,null,e.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),e.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",e.createElement("code",{style:a},"ErrorBoundary")," or"," ",e.createElement("code",{style:a},"errorElement")," prop on your route.")),e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:i},r):null,s)}var re=e.createElement(ne,null),oe=class extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(G.Provider,{value:this.props.routeContext},e.createElement(q.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ie(t){let{routeContext:n,match:r,children:o}=t,i=e.useContext(F);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(G.Provider,{value:n},o)}function ae(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==t){if(!r)return null;if(r.errors)t=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;t=r.matches}}let o=t,i=r?.errors;if(null!=i){let e=o.findIndex((e=>e.route.id&&void 0!==i?.[e.route.id]));a(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),o=o.slice(0,Math.min(o.length,e+1))}let s=!1,l=-1;if(r)for(let e=0;e<o.length;e++){let t=o[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(l=e),t.route.id){let{loaderData:e,errors:n}=r,i=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id]);if(t.route.lazy||i){s=!0,o=l>=0?o.slice(0,l+1):[o[0]];break}}}return o.reduceRight(((t,a,c)=>{let u,d=!1,f=null,h=null;r&&(u=i&&a.route.id?i[a.route.id]:void 0,f=a.route.errorElement||re,s&&(l<0&&0===c?(he("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,h=null):l===c&&(d=!0,h=a.route.hydrateFallbackElement||null)));let p=n.concat(o.slice(0,c+1)),m=()=>{let n;return n=u?f:d?h:a.route.Component?e.createElement(a.route.Component,null):a.route.element?a.route.element:t,e.createElement(ie,{match:a,routeContext:{outlet:t,matches:p,isDataRoute:null!=r},children:n})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===c)?e.createElement(oe,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()}),null)}function se(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function le(t){let n=e.useContext(F);return a(n,se(t)),n}function ce(t){let n=e.useContext(B);return a(n,se(t)),n}function ue(t){let n=function(t){let n=e.useContext(G);return a(n,se(t)),n}(t),r=n.matches[n.matches.length-1];return a(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function de(){let t=e.useContext(q),n=ce("useRouteError"),r=ue("useRouteError");return void 0!==t?t:n.errors?.[r]}var fe={};function he(e,t,n){t||fe[e]||(fe[e]=!0,s(!1,n))}e.memo((function(e){let{routes:t,future:n,state:r}=e;return te(t,void 0,r,n)}));function pe(e){a(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function me(t){let{basename:n="/",children:r=null,location:o,navigationType:i="POP",navigator:l,static:c=!1}=t;a(!K(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),f=e.useMemo((()=>({basename:u,navigator:l,static:c,future:{}})),[u,l,c]);"string"===typeof o&&(o=d(o));let{pathname:h="/",search:p="",hash:m="",state:g=null,key:v="default"}=o,y=e.useMemo((()=>{let e=A(h,u);return null==e?null:{location:{pathname:e,search:p,hash:m,state:g,key:v},navigationType:i}}),[u,h,p,m,g,v,i]);return s(null!=y,`<Router basename="${u}"> is not able to match the URL "${h}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==y?null:e.createElement(U.Provider,{value:f},e.createElement(Y.Provider,{children:r,value:y}))}function ge(e){let{children:t,location:n}=e;return te(ve(t),n)}e.Component;function ve(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return e.Children.forEach(t,((t,o)=>{if(!e.isValidElement(t))return;let i=[...n,o];if(t.type===e.Fragment)return void r.push.apply(r,ve(t.props.children,i));a(t.type===pe,`[${"string"===typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),a(!t.props.index||!t.props.children,"An index route cannot have child routes.");let s={id:t.props.id||i.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(s.children=ve(t.props.children,i)),r.push(s)})),r}var ye="get",be="application/x-www-form-urlencoded";function xe(e){return null!=e&&"string"===typeof e.tagName}var we=null;var ke=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Se(e){return null==e||ke.has(e)?e:(s(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${be}"`),null)}function je(e,t){let n,r,o,i,a;if(xe(s=e)&&"form"===s.tagName.toLowerCase()){let a=e.getAttribute("action");r=a?A(a,t):null,n=e.getAttribute("method")||ye,o=Se(e.getAttribute("enctype"))||be,i=new FormData(e)}else if(function(e){return xe(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return xe(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let a=e.form;if(null==a)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||a.getAttribute("action");if(r=s?A(s,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||ye,o=Se(e.getAttribute("formenctype"))||Se(a.getAttribute("enctype"))||be,i=new FormData(a,e),!function(){if(null===we)try{new FormData(document.createElement("form"),0),we=!1}catch(e){we=!0}return we}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";i.append(`${e}x`,"0"),i.append(`${e}y`,"0")}else t&&i.append(t,r)}}else{if(xe(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ye,r=null,o=be,a=e}var s;return i&&"text/plain"===o&&(a=i,i=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:i,body:a}}function Ce(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}async function Ee(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function Te(e){return null!=e&&"string"===typeof e.page}function Ae(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Pe(e,t,n,r,o,i){let a=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===i?t.filter(((e,t)=>a(e,t)||s(e,t))):"data"===i?t.filter(((t,i)=>{let l=r.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(a(t,i)||s(t,i))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0})):[]}function ze(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map((e=>{let r=t.routes[e.route.id];if(!r)return[];let o=[r.module];return r.clientActionModule&&(o=o.concat(r.clientActionModule)),r.clientLoaderModule&&(o=o.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(o=o.concat(r.hydrateFallbackModule)),r.imports&&(o=o.concat(r.imports)),o})).flat(1),[...new Set(r)];var r}function Oe(e,t){let n=new Set,r=new Set(t);return e.reduce(((e,o)=>{if(t&&!Te(o)&&"script"===o.as&&o.href&&r.has(o.href))return e;let i=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(o));return n.has(i)||(n.add(i),e.push({key:i,link:o})),e}),[])}function Me(e){return{__html:e}}Symbol("SingleFetchRedirect");function Re(e,t){let n="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===n.pathname?n.pathname="_root.data":t&&"/"===A(n.pathname,t)?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}e.Component;function Ie(t){let{error:n,isOutsideRemixApp:r}=t;console.error(n);let o,i=e.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '}});if(N(n))return e.createElement($e,{title:"Unhandled Thrown Response!"},e.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),i);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return e.createElement($e,{title:"Application Error!",isOutsideRemixApp:r},e.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},o.stack),i)}function $e(t){let{title:n,renderScripts:r,isOutsideRemixApp:o,children:i}=t,{routeModules:a}=Fe();return a.root?.Layout&&!o?i:e.createElement("html",{lang:"en"},e.createElement("head",null,e.createElement("meta",{charSet:"utf-8"}),e.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),e.createElement("title",null,n)),e.createElement("body",null,e.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},i,r?e.createElement(Ge,null):null)))}function Le(e){return!0===e}function Ne(){let t=e.useContext(F);return Ce(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function _e(){let t=e.useContext(B);return Ce(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var De=e.createContext(void 0);function Fe(){let t=e.useContext(De);return Ce(t,"You must render this element inside a <HydratedRouter> element"),t}function Be(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function He(e,t,n){if(n&&!Ye)return[e[0]];if(t){let n=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,n+1)}return e}function We(t){let{page:n,...r}=t,{router:o}=Ne(),i=e.useMemo((()=>h(o.routes,n,o.basename)),[o.routes,n,o.basename]);return i?e.createElement(Ue,{page:n,matches:i,...r}):null}function Ve(t){let{manifest:n,routeModules:r}=Fe(),[o,i]=e.useState([]);return e.useEffect((()=>{let e=!1;return async function(e,t,n){let r=await Promise.all(e.map((async e=>{let r=t.routes[e.route.id];if(r){let e=await Ee(r,n);return e.links?e.links():[]}return[]})));return Oe(r.flat(1).filter(Ae).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(t,n,r).then((t=>{e||i(t)})),()=>{e=!0}}),[t,n,r]),o}function Ue(t){let{page:n,matches:r,...o}=t,i=X(),{manifest:a,routeModules:s}=Fe(),{basename:l}=Ne(),{loaderData:c,matches:u}=_e(),d=e.useMemo((()=>Pe(n,r,u,a,i,"data")),[n,r,u,a,i]),f=e.useMemo((()=>Pe(n,r,u,a,i,"assets")),[n,r,u,a,i]),h=e.useMemo((()=>{if(n===i.pathname+i.search+i.hash)return[];let e=new Set,t=!1;if(r.forEach((n=>{let r=a.routes[n.route.id];r&&r.hasLoader&&(!d.some((e=>e.route.id===n.route.id))&&n.route.id in c&&s[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))})),0===e.size)return[];let o=Re(n,l);return t&&e.size>0&&o.searchParams.set("_routes",r.filter((t=>e.has(t.route.id))).map((e=>e.route.id)).join(",")),[o.pathname+o.search]}),[l,c,i,a,d,r,n,s]),p=e.useMemo((()=>ze(f,a)),[f,a]),m=Ve(f);return e.createElement(e.Fragment,null,h.map((t=>e.createElement("link",{key:t,rel:"prefetch",as:"fetch",href:t,...o}))),p.map((t=>e.createElement("link",{key:t,rel:"modulepreload",href:t,...o}))),m.map((t=>{let{key:n,link:r}=t;return e.createElement("link",{key:n,...r})})))}De.displayName="FrameworkContext";var Ye=!1;function Ge(t){let{manifest:n,serverHandoffString:r,isSpaMode:o,ssr:i,renderMeta:a}=Fe(),{router:s,static:l,staticContext:c}=Ne(),{matches:u}=_e(),d=Le(i);a&&(a.didRenderScripts=!0);let f=He(u,null,o);e.useEffect((()=>{0}),[]);let p=e.useMemo((()=>{let o=c?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",i=l?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${d?"":`import ${JSON.stringify(n.url)}`};\n${f.map(((e,t)=>{let r=`route${t}`,o=n.routes[e.route.id];Ce(o,`Route ${e.route.id} not found in manifest`);let{clientActionModule:i,clientLoaderModule:a,hydrateFallbackModule:s,module:l}=o,c=[...i?[{module:i,varName:`${r}_clientAction`}]:[],...a?[{module:a,varName:`${r}_clientLoader`}]:[],...s?[{module:s,varName:`${r}_HydrateFallback`}]:[],{module:l,varName:`${r}_main`}];return 1===c.length?`import * as ${r} from ${JSON.stringify(l)};`:[c.map((e=>`import * as ${e.varName} from "${e.module}";`)).join("\n"),`const ${r} = {${c.map((e=>`...${e.varName}`)).join(",")}};`].join("\n")})).join("\n")}\n  ${d?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let n=new Set(t.state.matches.map((e=>e.route.id))),r=t.state.location.pathname.split("/").filter(Boolean),o=["/"];for(r.pop();r.length>0;)o.push(`/${r.join("/")}`),r.pop();o.forEach((e=>{let r=h(t.routes,e,t.basename);r&&r.forEach((e=>n.add(e.route.id)))}));let i=[...n].reduce(((t,n)=>Object.assign(t,{[n]:e.routes[n]})),{});return{...e,routes:i}}(n,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${f.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return e.createElement(e.Fragment,null,e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Me(o),type:void 0}),e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Me(i),type:"module",async:!0}))}),[]),m=Ye?[]:n.entry.imports.concat(ze(f,n,{includeHydrateFallback:!0}));return Ye?null:e.createElement(e.Fragment,null,d?null:e.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:t.crossOrigin}),e.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:t.crossOrigin}),[...new Set(g)].map((n=>e.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:t.crossOrigin}))),p);var g}function qe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)}))}}var Ke="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{Ke&&(window.__reactRouterVersion="7.3.0")}catch(RA){}function Xe(t){let{basename:n,children:r,window:o}=t,a=e.useRef();null==a.current&&(a.current=i({window:o,v5Compat:!0}));let s=a.current,[l,c]=e.useState({action:s.action,location:s.location}),u=e.useCallback((t=>{e.startTransition((()=>c(t)))}),[c]);return e.useLayoutEffect((()=>s.listen(u)),[s,u]),e.createElement(me,{basename:n,children:r,location:l.location,navigationType:l.action,navigator:s})}var Qe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ze=e.forwardRef((function(t,n){let r,{onClick:o,discover:i="render",prefetch:l="none",relative:c,reloadDocument:d,replace:f,state:h,target:p,to:m,preventScrollReset:g,viewTransition:v,...y}=t,{basename:b}=e.useContext(U),x="string"===typeof m&&Qe.test(m),w=!1;if("string"===typeof m&&x&&(r=m,Ke))try{let e=new URL(window.location.href),t=m.startsWith("//")?new URL(e.protocol+m):new URL(m),n=A(t.pathname,b);t.origin===e.origin&&null!=n?m=n+t.search+t.hash:w=!0}catch(RA){s(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let k=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(K(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=e.useContext(U),{hash:i,pathname:s,search:l}=ee(t,{relative:n}),c=s;return"/"!==r&&(c="/"===s?r:R([r,s])),o.createHref({pathname:c,search:l,hash:i})}(m,{relative:c}),[S,j,C]=function(t,n){let r=e.useContext(De),[o,i]=e.useState(!1),[a,s]=e.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:f}=n,h=e.useRef(null);e.useEffect((()=>{if("render"===t&&s(!0),"viewport"===t){let e=new IntersectionObserver((e=>{e.forEach((e=>{s(e.isIntersecting)}))}),{threshold:.5});return h.current&&e.observe(h.current),()=>{e.disconnect()}}}),[t]),e.useEffect((()=>{if(o){let e=setTimeout((()=>{s(!0)}),100);return()=>{clearTimeout(e)}}}),[o]);let p=()=>{i(!0)},m=()=>{i(!1),s(!1)};return r?"intent"!==t?[a,h,{}]:[a,h,{onFocus:Be(l,p),onBlur:Be(c,m),onMouseEnter:Be(u,p),onMouseLeave:Be(d,m),onTouchStart:Be(f,p)}]:[!1,h,{}]}(l,y),E=function(t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,viewTransition:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=J(),c=X(),d=ee(t,{relative:a});return e.useCallback((e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,n)){e.preventDefault();let n=void 0!==r?r:u(c)===u(d);l(t,{replace:n,state:o,preventScrollReset:i,relative:a,viewTransition:s})}}),[c,l,d,r,o,n,t,i,a,s])}(m,{replace:f,state:h,target:p,preventScrollReset:g,relative:c,viewTransition:v});let T=e.createElement("a",{...y,...C,href:r||k,onClick:w||d?o:function(e){o&&o(e),e.defaultPrevented||E(e)},ref:qe(n,j),target:p,"data-discover":x||"render"!==i?void 0:"true"});return S&&!x?e.createElement(e.Fragment,null,T,e.createElement(We,{page:k})):T}));Ze.displayName="Link";var Je=e.forwardRef((function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:s=!1,style:l,to:c,viewTransition:u,children:d,...f}=t,h=ee(c,{relative:f.relative}),p=X(),m=e.useContext(B),{navigator:g,basename:v}=e.useContext(U),y=null!=m&&function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.useContext(H);a(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=nt("useViewTransitionState"),i=ee(t,{relative:n.relative});if(!r.isTransitioning)return!1;let s=A(r.currentLocation.pathname,o)||r.currentLocation.pathname,l=A(r.nextLocation.pathname,o)||r.nextLocation.pathname;return null!=E(i.pathname,l)||null!=E(i.pathname,s)}(h)&&!0===u,b=g.encodeLocation?g.encodeLocation(h).pathname:h.pathname,x=p.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;o||(x=x.toLowerCase(),w=w?w.toLowerCase():null,b=b.toLowerCase()),w&&v&&(w=A(w,v)||w);const k="/"!==b&&b.endsWith("/")?b.length-1:b.length;let S,j=x===b||!s&&x.startsWith(b)&&"/"===x.charAt(k),C=null!=w&&(w===b||!s&&w.startsWith(b)&&"/"===w.charAt(b.length)),T={isActive:j,isPending:C,isTransitioning:y},P=j?r:void 0;S="function"===typeof i?i(T):[i,j?"active":null,C?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let z="function"===typeof l?l(T):l;return e.createElement(Ze,{...f,"aria-current":P,className:S,ref:n,style:z,to:c,viewTransition:u},"function"===typeof d?d(T):d)}));Je.displayName="NavLink";var et=e.forwardRef(((t,n)=>{let{discover:r="render",fetcherKey:o,navigate:i,reloadDocument:s,replace:l,state:c,method:d=ye,action:f,onSubmit:h,relative:p,preventScrollReset:m,viewTransition:g,...v}=t,y=it(),b=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=e.useContext(U),o=e.useContext(G);a(o,"useFormAction must be used inside a RouteContext");let[i]=o.matches.slice(-1),s={...ee(t||".",{relative:n})},l=X();if(null==t){s.search=l.search;let e=new URLSearchParams(s.search),t=e.getAll("index"),n=t.some((e=>""===e));if(n){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();s.search=n?`?${n}`:""}}t&&"."!==t||!i.route.index||(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(s.pathname="/"===s.pathname?r:R([r,s.pathname]));return u(s)}(f,{relative:p}),x="get"===d.toLowerCase()?"get":"post",w="string"===typeof f&&Qe.test(f);return e.createElement("form",{ref:n,method:x,action:b,onSubmit:s?h:e=>{if(h&&h(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||d;y(t||e.currentTarget,{fetcherKey:o,method:n,navigate:i,replace:l,state:c,relative:p,preventScrollReset:m,viewTransition:g})},...v,"data-discover":w||"render"!==r?void 0:"true"})}));function tt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nt(t){let n=e.useContext(F);return a(n,tt(t)),n}et.displayName="Form";var rt=0,ot=()=>`__${String(++rt)}__`;function it(){let{router:t}=nt("useSubmit"),{basename:n}=e.useContext(U),r=ue("useRouteId");return e.useCallback((async function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:i,method:a,encType:s,formData:l,body:c}=je(e,n);if(!1===o.navigate){let e=o.fetcherKey||ot();await t.fetch(e,r,o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:c,formMethod:o.method||a,formEncType:o.encType||s,flushSync:o.flushSync})}else await t.navigate(o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:c,formMethod:o.method||a,formEncType:o.encType||s,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})}),[t,n,r])}new TextEncoder;var at=n(366),st=n.n(at),lt=n(740),ct=n.n(lt),ut=n(324),dt=n.n(ut),ft=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(ft||{}),ht={rel:["amphtml","canonical","alternate"]},pt={type:["application/ld+json"]},mt={charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},gt=Object.values(ft),vt={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},yt=Object.entries(vt).reduce(((e,t)=>{let[n,r]=t;return e[r]=n,e}),{}),bt="data-rh",xt="defaultTitle",wt="defer",kt="encodeSpecialCharacters",St="onChangeClientState",jt="titleTemplate",Ct="prioritizeSeoTags",Et=(e,t)=>{for(let n=e.length-1;n>=0;n-=1){const r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},Tt=e=>{let t=Et(e,"title");const n=Et(e,jt);if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,(()=>t));const r=Et(e,xt);return t||r||void 0},At=e=>Et(e,St)||(()=>{}),Pt=(e,t)=>t.filter((t=>"undefined"!==typeof t[e])).map((t=>t[e])).reduce(((e,t)=>({...e,...t})),{}),zt=(e,t)=>t.filter((e=>"undefined"!==typeof e.base)).map((e=>e.base)).reverse().reduce(((t,n)=>{if(!t.length){const r=Object.keys(n);for(let o=0;o<r.length;o+=1){const i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}}return t}),[]),Ot=(e,t,n)=>{const r={};return n.filter((t=>{return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&(n=`Helmet: ${e} should be of type "Array". Instead found type "${typeof t[e]}"`,console&&"function"===typeof console.warn&&console.warn(n)),!1);var n})).map((t=>t[e])).reverse().reduce(((e,n)=>{const o={};n.filter((e=>{let n;const i=Object.keys(e);for(let r=0;r<i.length;r+=1){const o=i[r],a=o.toLowerCase();-1===t.indexOf(a)||"rel"===n&&"canonical"===e[n].toLowerCase()||"rel"===a&&"stylesheet"===e[a].toLowerCase()||(n=a),-1===t.indexOf(o)||"innerHTML"!==o&&"cssText"!==o&&"itemprop"!==o||(n=o)}if(!n||!e[n])return!1;const a=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][a]&&(o[n][a]=!0,!0)})).reverse().forEach((t=>e.push(t)));const i=Object.keys(o);for(let t=0;t<i.length;t+=1){const e=i[t],n={...r[e],...o[e]};r[e]=n}return e}),[]).reverse()},Mt=(e,t)=>{if(Array.isArray(e)&&e.length)for(let n=0;n<e.length;n+=1){if(e[n][t])return!0}return!1},Rt=e=>Array.isArray(e)?e.join(""):e,It=(e,t)=>Array.isArray(e)?e.reduce(((e,n)=>(((e,t)=>{const n=Object.keys(e);for(let r=0;r<n.length;r+=1)if(t[n[r]]&&t[n[r]].includes(e[n[r]]))return!0;return!1})(n,t)?e.priority.push(n):e.default.push(n),e)),{priority:[],default:[]}):{default:e,priority:[]},$t=(e,t)=>({...e,[t]:void 0}),Lt=["noscript","script","style"],Nt=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},_t=e=>Object.keys(e).reduce(((t,n)=>{const r="undefined"!==typeof e[n]?`${n}="${e[n]}"`:`${n}`;return t?`${t} ${r}`:r}),""),Dt=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(((t,n)=>(t[vt[n]||n]=e[n],t)),t)},Ft=(t,n)=>n.map(((n,r)=>{const o={key:r,[bt]:!0};return Object.keys(n).forEach((e=>{const t=vt[e]||e;if("innerHTML"===t||"cssText"===t){const e=n.innerHTML||n.cssText;o.dangerouslySetInnerHTML={__html:e}}else o[t]=n[e]})),e.createElement(t,o)})),Bt=function(t,n){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];switch(t){case"title":return{toComponent:()=>((t,n,r)=>{const o=Dt(r,{key:n,[bt]:!0});return[e.createElement("title",o,n)]})(0,n.title,n.titleAttributes),toString:()=>((e,t,n,r)=>{const o=_t(n),i=Rt(t);return o?`<${e} ${bt}="true" ${o}>${Nt(i,r)}</${e}>`:`<${e} ${bt}="true">${Nt(i,r)}</${e}>`})(t,n.title,n.titleAttributes,r)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Dt(n),toString:()=>_t(n)};default:return{toComponent:()=>Ft(t,n),toString:()=>function(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.reduce(((t,r)=>{const o=r,i=Object.keys(o).filter((e=>!("innerHTML"===e||"cssText"===e))).reduce(((e,t)=>{const r="undefined"===typeof o[t]?t:`${t}="${Nt(o[t],n)}"`;return e?`${e} ${r}`:r}),""),a=o.innerHTML||o.cssText||"",s=-1===Lt.indexOf(e);return`${t}<${e} ${bt}="true" ${i}${s?"/>":`>${a}</${e}>`}`}),"")}(t,n,r)}}},Ht=e=>{const{baseTag:t,bodyAttributes:n,encode:r=!0,htmlAttributes:o,noscriptTags:i,styleTags:a,title:s="",titleAttributes:l,prioritizeSeoTags:c}=e;let{linkTags:u,metaTags:d,scriptTags:f}=e,h={toComponent:()=>{},toString:()=>""};return c&&({priorityMethods:h,linkTags:u,metaTags:d,scriptTags:f}=(e=>{let{metaTags:t,linkTags:n,scriptTags:r,encode:o}=e;const i=It(t,mt),a=It(n,ht),s=It(r,pt);return{priorityMethods:{toComponent:()=>[...Ft("meta",i.priority),...Ft("link",a.priority),...Ft("script",s.priority)],toString:()=>`${Bt("meta",i.priority,o)} ${Bt("link",a.priority,o)} ${Bt("script",s.priority,o)}`},metaTags:i.default,linkTags:a.default,scriptTags:s.default}})(e)),{priority:h,base:Bt("base",t,r),bodyAttributes:Bt("bodyAttributes",n,r),htmlAttributes:Bt("htmlAttributes",o,r),link:Bt("link",u,r),meta:Bt("meta",d,r),noscript:Bt("noscript",i,r),script:Bt("script",f,r),style:Bt("style",a,r),title:Bt("title",{title:s,titleAttributes:l},r)}},Wt=[],Vt=!("undefined"===typeof window||!window.document||!window.document.createElement),Ut=class{instances=[];canUseDOM=(()=>Vt)();context;value={setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?Wt:this.instances,add:e=>{(this.canUseDOM?Wt:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?Wt:this.instances).indexOf(e);(this.canUseDOM?Wt:this.instances).splice(t,1)}}};constructor(e,t){this.context=e,this.canUseDOM=t||!1,t||(e.helmet=Ht({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Yt=e.createContext({}),Gt=class t extends e.Component{static canUseDOM=(()=>Vt)();helmetData;constructor(e){super(e),this.helmetData=new Ut(this.props.context||{},t.canUseDOM)}render(){return e.createElement(Yt.Provider,{value:this.helmetData.value},this.props.children)}},qt=(e,t)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${e}[${bt}]`),o=[].slice.call(r),i=[];let a;return t&&t.length&&t.forEach((t=>{const n=document.createElement(e);for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))if("innerHTML"===e)n.innerHTML=t.innerHTML;else if("cssText"===e)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{const r=e,o="undefined"===typeof t[r]?"":t[r];n.setAttribute(e,o)}n.setAttribute(bt,"true"),o.some(((e,t)=>(a=t,n.isEqualNode(e))))?o.splice(a,1):i.push(n)})),o.forEach((e=>e.parentNode?.removeChild(e))),i.forEach((e=>n.appendChild(e))),{oldTags:o,newTags:i}},Kt=(e,t)=>{const n=document.getElementsByTagName(e)[0];if(!n)return;const r=n.getAttribute(bt),o=r?r.split(","):[],i=[...o],a=Object.keys(t);for(const s of a){const e=t[s]||"";n.getAttribute(s)!==e&&n.setAttribute(s,e),-1===o.indexOf(s)&&o.push(s);const r=i.indexOf(s);-1!==r&&i.splice(r,1)}for(let s=i.length-1;s>=0;s-=1)n.removeAttribute(i[s]);o.length===i.length?n.removeAttribute(bt):n.getAttribute(bt)!==a.join(",")&&n.setAttribute(bt,a.join(","))},Xt=(e,t)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:o,linkTags:i,metaTags:a,noscriptTags:s,onChangeClientState:l,scriptTags:c,styleTags:u,title:d,titleAttributes:f}=e;Kt("body",r),Kt("html",o),((e,t)=>{"undefined"!==typeof e&&document.title!==e&&(document.title=Rt(e)),Kt("title",t)})(d,f);const h={baseTag:qt("base",n),linkTags:qt("link",i),metaTags:qt("meta",a),noscriptTags:qt("noscript",s),scriptTags:qt("script",c),styleTags:qt("style",u)},p={},m={};Object.keys(h).forEach((e=>{const{newTags:t,oldTags:n}=h[e];t.length&&(p[e]=t),n.length&&(m[e]=h[e].oldTags)})),t&&t(),l(e,p,m)},Qt=null,Zt=e=>{Qt&&cancelAnimationFrame(Qt),e.defer?Qt=requestAnimationFrame((()=>{Xt(e,(()=>{Qt=null}))})):(Xt(e),Qt=null)},Jt=class extends e.Component{rendered=!1;shouldComponentUpdate(e){return!dt()(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:t}=this.props.context;let n=null;const r=(o=e.get().map((e=>{const t={...e.props};return delete t.context,t})),{baseTag:zt(["href"],o),bodyAttributes:Pt("bodyAttributes",o),defer:Et(o,wt),encode:Et(o,kt),htmlAttributes:Pt("htmlAttributes",o),linkTags:Ot("link",["rel","href"],o),metaTags:Ot("meta",["name","charset","http-equiv","property","itemprop"],o),noscriptTags:Ot("noscript",["innerHTML"],o),onChangeClientState:At(o),scriptTags:Ot("script",["src","innerHTML"],o),styleTags:Ot("style",["cssText"],o),title:Tt(o),titleAttributes:Pt("titleAttributes",o),prioritizeSeoTags:Mt(o,Ct)});var o;Gt.canUseDOM?Zt(r):Ht&&(n=Ht(r)),t(n)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},en=class extends e.Component{static defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1};shouldComponentUpdate(e){return!st()($t(this.props,"helmetData"),$t(e,"helmetData"))}mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case"script":case"noscript":return{innerHTML:t};case"style":return{cssText:t};default:throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(e,t,n,r){return{...t,[e.type]:[...t[e.type]||[],{...n,...this.mapNestedChildrenToProps(e,r)}]}}mapObjectTypeChildren(e,t,n,r){switch(e.type){case"title":return{...t,[e.type]:r,titleAttributes:{...n}};case"body":return{...t,bodyAttributes:{...n}};case"html":return{...t,htmlAttributes:{...n}};default:return{...t,[e.type]:{...n}}}}mapArrayTypeChildrenToProps(e,t){let n={...t};return Object.keys(e).forEach((t=>{n={...n,[t]:e[t]}})),n}warnOnInvalidChildren(e,t){return ct()(gt.some((t=>e.type===t)),"function"===typeof e.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${gt.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),ct()(!t||"string"===typeof t||Array.isArray(t)&&!t.some((e=>"string"!==typeof e)),`Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,n){let r={};return e.Children.forEach(t,(e=>{if(!e||!e.props)return;const{children:t,...o}=e.props,i=Object.keys(o).reduce(((e,t)=>(e[yt[t]||t]=o[t],e)),{});let{type:a}=e;switch("symbol"===typeof a?a=a.toString():this.warnOnInvalidChildren(e,t),a){case"Symbol(react.fragment)":n=this.mapChildrenToProps(t,n);break;case"link":case"meta":case"noscript":case"script":case"style":r=this.flattenArrayTypeChildren(e,r,i,t);break;default:n=this.mapObjectTypeChildren(e,n,i,t)}})),this.mapArrayTypeChildrenToProps(r,n)}render(){const{children:t,...n}=this.props;let r={...n},{helmetData:o}=n;if(t&&(r=this.mapChildrenToProps(t,r)),o&&!(o instanceof Ut)){o=new Ut(o.context,!0),delete r.helmetData}return o?e.createElement(Jt,{...r,context:o.value}):e.createElement(Yt.Consumer,null,(t=>e.createElement(Jt,{...r,context:t})))}};var tn=function(){return tn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},tn.apply(this,arguments)};Object.create;function nn(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var rn="-ms-",on="-moz-",an="-webkit-",sn="comm",ln="rule",cn="decl",un="@keyframes",dn=Math.abs,fn=String.fromCharCode,hn=Object.assign;function pn(e){return e.trim()}function mn(e,t){return(e=t.exec(e))?e[0]:e}function gn(e,t,n){return e.replace(t,n)}function vn(e,t,n){return e.indexOf(t,n)}function yn(e,t){return 0|e.charCodeAt(t)}function bn(e,t,n){return e.slice(t,n)}function xn(e){return e.length}function wn(e){return e.length}function kn(e,t){return t.push(e),e}function Sn(e,t){return e.filter((function(e){return!mn(e,t)}))}var jn=1,Cn=1,En=0,Tn=0,An=0,Pn="";function zn(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:jn,column:Cn,length:a,return:"",siblings:s}}function On(e,t){return hn(zn("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Mn(e){for(;e.root;)e=On(e.root,{children:[e]});kn(e,e.siblings)}function Rn(){return An=Tn>0?yn(Pn,--Tn):0,Cn--,10===An&&(Cn=1,jn--),An}function In(){return An=Tn<En?yn(Pn,Tn++):0,Cn++,10===An&&(Cn=1,jn++),An}function $n(){return yn(Pn,Tn)}function Ln(){return Tn}function Nn(e,t){return bn(Pn,e,t)}function _n(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Dn(e){return jn=Cn=1,En=xn(Pn=e),Tn=0,[]}function Fn(e){return Pn="",e}function Bn(e){return pn(Nn(Tn-1,Vn(91===e?e+2:40===e?e+1:e)))}function Hn(e){for(;(An=$n())&&An<33;)In();return _n(e)>2||_n(An)>3?"":" "}function Wn(e,t){for(;--t&&In()&&!(An<48||An>102||An>57&&An<65||An>70&&An<97););return Nn(e,Ln()+(t<6&&32==$n()&&32==In()))}function Vn(e){for(;In();)switch(An){case e:return Tn;case 34:case 39:34!==e&&39!==e&&Vn(An);break;case 40:41===e&&Vn(e);break;case 92:In()}return Tn}function Un(e,t){for(;In()&&e+An!==57&&(e+An!==84||47!==$n()););return"/*"+Nn(t,Tn-1)+"*"+fn(47===e?e:In())}function Yn(e){for(;!_n($n());)In();return Nn(e,Tn)}function Gn(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function qn(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case cn:return e.return=e.return||e.value;case sn:return"";case un:return e.return=e.value+"{"+Gn(e.children,r)+"}";case ln:if(!xn(e.value=e.props.join(",")))return""}return xn(n=Gn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Kn(e,t,n){switch(function(e,t){return 45^yn(e,0)?(((t<<2^yn(e,0))<<2^yn(e,1))<<2^yn(e,2))<<2^yn(e,3):0}(e,t)){case 5103:return an+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return an+e+e;case 4789:return on+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return an+e+on+e+rn+e+e;case 5936:switch(yn(e,t+11)){case 114:return an+e+rn+gn(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return an+e+rn+gn(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return an+e+rn+gn(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return an+e+rn+e+e;case 6165:return an+e+rn+"flex-"+e+e;case 5187:return an+e+gn(e,/(\w+).+(:[^]+)/,an+"box-$1$2"+rn+"flex-$1$2")+e;case 5443:return an+e+rn+"flex-item-"+gn(e,/flex-|-self/g,"")+(mn(e,/flex-|baseline/)?"":rn+"grid-row-"+gn(e,/flex-|-self/g,""))+e;case 4675:return an+e+rn+"flex-line-pack"+gn(e,/align-content|flex-|-self/g,"")+e;case 5548:return an+e+rn+gn(e,"shrink","negative")+e;case 5292:return an+e+rn+gn(e,"basis","preferred-size")+e;case 6060:return an+"box-"+gn(e,"-grow","")+an+e+rn+gn(e,"grow","positive")+e;case 4554:return an+gn(e,/([^-])(transform)/g,"$1"+an+"$2")+e;case 6187:return gn(gn(gn(e,/(zoom-|grab)/,an+"$1"),/(image-set)/,an+"$1"),e,"")+e;case 5495:case 3959:return gn(e,/(image-set\([^]*)/,an+"$1$`$1");case 4968:return gn(gn(e,/(.+:)(flex-)?(.*)/,an+"box-pack:$3"+rn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+an+e+e;case 4200:if(!mn(e,/flex-|baseline/))return rn+"grid-column-align"+bn(e,t)+e;break;case 2592:case 3360:return rn+gn(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,mn(e.props,/grid-\w+-end/)}))?~vn(e+(n=n[t].value),"span",0)?e:rn+gn(e,"-start","")+e+rn+"grid-row-span:"+(~vn(n,"span",0)?mn(n,/\d+/):+mn(n,/\d+/)-+mn(e,/\d+/))+";":rn+gn(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return mn(e.props,/grid-\w+-start/)}))?e:rn+gn(gn(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return gn(e,/(.+)-inline(.+)/,an+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xn(e)-1-t>6)switch(yn(e,t+1)){case 109:if(45!==yn(e,t+4))break;case 102:return gn(e,/(.+:)(.+)-([^]+)/,"$1"+an+"$2-$3$1"+on+(108==yn(e,t+3)?"$3":"$2-$3"))+e;case 115:return~vn(e,"stretch",0)?Kn(gn(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return gn(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,i,a,s){return rn+n+":"+r+s+(o?rn+n+"-span:"+(i?a:+a-+r)+s:"")+e}));case 4949:if(121===yn(e,t+6))return gn(e,":",":"+an)+e;break;case 6444:switch(yn(e,45===yn(e,14)?18:11)){case 120:return gn(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+an+(45===yn(e,14)?"inline-":"")+"box$3$1"+an+"$2$3$1"+rn+"$2box$3")+e;case 100:return gn(e,":",":"+rn)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return gn(e,"scroll-","scroll-snap-")+e}return e}function Xn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case cn:return void(e.return=Kn(e.value,e.length,n));case un:return Gn([On(e,{value:gn(e.value,"@","@"+an)})],r);case ln:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(mn(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mn(On(e,{props:[gn(t,/:(read-\w+)/,":-moz-$1")]})),Mn(On(e,{props:[t]})),hn(e,{props:Sn(n,r)});break;case"::placeholder":Mn(On(e,{props:[gn(t,/:(plac\w+)/,":"+an+"input-$1")]})),Mn(On(e,{props:[gn(t,/:(plac\w+)/,":-moz-$1")]})),Mn(On(e,{props:[gn(t,/:(plac\w+)/,rn+"input-$1")]})),Mn(On(e,{props:[t]})),hn(e,{props:Sn(n,r)})}return""}))}}function Qn(e){return Fn(Zn("",null,null,null,[""],e=Dn(e),0,[0],e))}function Zn(e,t,n,r,o,i,a,s,l){for(var c=0,u=0,d=a,f=0,h=0,p=0,m=1,g=1,v=1,y=0,b="",x=o,w=i,k=r,S=b;g;)switch(p=y,y=In()){case 40:if(108!=p&&58==yn(S,d-1)){-1!=vn(S+=gn(Bn(y),"&","&\f"),"&\f",dn(c?s[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:S+=Bn(y);break;case 9:case 10:case 13:case 32:S+=Hn(p);break;case 92:S+=Wn(Ln()-1,7);continue;case 47:switch($n()){case 42:case 47:kn(er(Un(In(),Ln()),t,n,l),l);break;default:S+="/"}break;case 123*m:s[c++]=xn(S)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==v&&(S=gn(S,/\f/g,"")),h>0&&xn(S)-d&&kn(h>32?tr(S+";",r,n,d-1,l):tr(gn(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(kn(k=Jn(S,t,n,c,u,o,s,b,x=[],w=[],d,i),i),123===y)if(0===u)Zn(S,t,k,k,x,i,d,s,w);else switch(99===f&&110===yn(S,3)?100:f){case 100:case 108:case 109:case 115:Zn(e,k,k,r&&kn(Jn(e,k,k,0,0,o,s,b,o,x=[],d,w),w),o,w,d,s,r?x:w);break;default:Zn(S,k,k,k,[""],w,0,s,w)}}c=u=h=0,m=v=1,b=S="",d=a;break;case 58:d=1+xn(S),h=p;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==Rn())continue;switch(S+=fn(y),y*m){case 38:v=u>0?1:(S+="\f",-1);break;case 44:s[c++]=(xn(S)-1)*v,v=1;break;case 64:45===$n()&&(S+=Bn(In())),f=$n(),u=d=xn(b=S+=Yn(Ln())),y++;break;case 45:45===p&&2==xn(S)&&(m=0)}}return i}function Jn(e,t,n,r,o,i,a,s,l,c,u,d){for(var f=o-1,h=0===o?i:[""],p=wn(h),m=0,g=0,v=0;m<r;++m)for(var y=0,b=bn(e,f+1,f=dn(g=a[m])),x=e;y<p;++y)(x=pn(g>0?h[y]+" "+b:gn(b,/&\f/g,h[y])))&&(l[v++]=x);return zn(e,t,n,0===o?ln:s,l,c,u,d)}function er(e,t,n,r){return zn(e,t,n,sn,fn(An),bn(e,2,-2),0,r)}function tr(e,t,n,r,o){return zn(e,t,n,cn,bn(e,0,r),bn(e,r+1,-1),r,o)}var nr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},rr="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",or="active",ir="data-styled-version",ar="6.1.15",sr="/*!sc*/\n",lr="undefined"!=typeof window&&"HTMLElement"in window,cr=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),ur=(new Set,Object.freeze([])),dr=Object.freeze({});function fr(e,t,n){return void 0===n&&(n=dr),e.theme!==n.theme&&e.theme||t||n.theme}var hr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),pr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,mr=/(^-|-$)/g;function gr(e){return e.replace(pr,"-").replace(mr,"")}var vr=/(a)(d)/gi,yr=function(e){return String.fromCharCode(e+(e>25?39:97))};function br(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=yr(t%52)+n;return(yr(t%52)+n).replace(vr,"$1-$2")}var xr,wr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},kr=function(e){return wr(5381,e)};function Sr(e){return br(kr(e)>>>0)}function jr(e){return e.displayName||e.name||"Component"}function Cr(e){return"string"==typeof e&&!0}var Er="function"==typeof Symbol&&Symbol.for,Tr=Er?Symbol.for("react.memo"):60115,Ar=Er?Symbol.for("react.forward_ref"):60112,Pr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Or={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mr=((xr={})[Ar]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xr[Tr]=Or,xr);function Rr(e){return("type"in(t=e)&&t.type.$$typeof)===Tr?Or:"$$typeof"in e?Mr[e.$$typeof]:Pr;var t}var Ir=Object.defineProperty,$r=Object.getOwnPropertyNames,Lr=Object.getOwnPropertySymbols,Nr=Object.getOwnPropertyDescriptor,_r=Object.getPrototypeOf,Dr=Object.prototype;function Fr(e,t,n){if("string"!=typeof t){if(Dr){var r=_r(t);r&&r!==Dr&&Fr(e,r,n)}var o=$r(t);Lr&&(o=o.concat(Lr(t)));for(var i=Rr(e),a=Rr(t),s=0;s<o.length;++s){var l=o[s];if(!(l in zr||n&&n[l]||a&&l in a||i&&l in i)){var c=Nr(t,l);try{Ir(e,l,c)}catch(e){}}}}return e}function Br(e){return"function"==typeof e}function Hr(e){return"object"==typeof e&&"styledComponentId"in e}function Wr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Vr(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ur(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Yr(e,t,n){if(void 0===n&&(n=!1),!n&&!Ur(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Yr(e[r],t[r]);else if(Ur(t))for(var r in t)e[r]=Yr(e[r],t[r]);return e}function Gr(e,t){Object.defineProperty(e,"toString",{value:t})}function qr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Kr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw qr(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(sr);return t},e}(),Xr=new Map,Qr=new Map,Zr=1,Jr=function(e){if(Xr.has(e))return Xr.get(e);for(;Qr.has(Zr);)Zr++;var t=Zr++;return Xr.set(e,t),Qr.set(t,e),t},eo=function(e,t){Zr=t+1,Xr.set(e,t),Qr.set(t,e)},to="style[".concat(rr,"][").concat(ir,'="').concat(ar,'"]'),no=new RegExp("^".concat(rr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ro=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},oo=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(sr),o=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var l=s.match(no);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(eo(u,c),ro(e,u,l[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}},io=function(e){for(var t=document.querySelectorAll(to),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(rr)!==or&&(oo(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function ao(){return n.nc}var so=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(rr,"]")));return t[t.length-1]}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(rr,or),r.setAttribute(ir,ar);var a=ao();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},lo=function(){function e(e){this.element=so(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw qr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),co=function(){function e(e){this.element=so(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),uo=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),fo=lr,ho={isServer:!lr,useCSSOMInjection:!cr},po=function(){function e(e,t,n){void 0===e&&(e=dr),void 0===t&&(t={});var r=this;this.options=tn(tn({},ho),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&lr&&fo&&(fo=!1,io(this)),Gr(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return Qr.get(e)}(n);if(void 0===o)return"continue";var i=e.names.get(o),a=t.getGroup(n);if(void 0===i||!i.size||0===a.length)return"continue";var s="".concat(rr,".g").concat(n,'[id="').concat(o,'"]'),l="";void 0!==i&&i.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(sr)},i=0;i<n;i++)o(i);return r}(r)}))}return e.registerId=function(e){return Jr(e)},e.prototype.rehydrate=function(){!this.server&&lr&&io(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(tn(tn({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new uo(n):t?new lo(n):new co(n)}(this.options),new Kr(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Jr(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Jr(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Jr(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),mo=/&/g,go=/^\s*\/\/.*$/gm;function vo(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=vo(e.children,t)),e}))}function yo(e){var t,n,r,o=void 0===e?dr:e,i=o.options,a=void 0===i?dr:i,s=o.plugins,l=void 0===s?ur:s,c=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===ln&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(mo,n).replace(r,c))})),a.prefix&&u.push(Xn),u.push(qn);var d=function(e,o,i,s){void 0===o&&(o=""),void 0===i&&(i=""),void 0===s&&(s="&"),t=s,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(go,""),c=Qn(i||o?"".concat(i," ").concat(o," { ").concat(l," }"):l);a.namespace&&(c=vo(c,a.namespace));var d,f=[];return Gn(c,function(e){var t=wn(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}(u.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=l.length?l.reduce((function(e,t){return t.name||qr(15),wr(e,t.name)}),5381).toString():"",d}var bo=new po,xo=yo(),wo=e.createContext({shouldForwardProp:void 0,styleSheet:bo,stylis:xo}),ko=(wo.Consumer,e.createContext(void 0));function So(){return(0,e.useContext)(wo)}function jo(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],o=n[1],i=So().styleSheet,a=(0,e.useMemo)((function(){var e=i;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,i]),s=(0,e.useMemo)((function(){return yo({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){dt()(r,t.stylisPlugins)||o(t.stylisPlugins)}),[t.stylisPlugins]);var l=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:a,stylis:s}}),[t.shouldForwardProp,a,s]);return e.createElement(wo.Provider,{value:l},e.createElement(ko.Provider,{value:s},t.children))}var Co=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=xo);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Gr(this,(function(){throw qr(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=xo),this.name+e.hash},e}(),Eo=function(e){return e>="A"&&e<="Z"};function To(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Eo(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ao=function(e){return null==e||!1===e||""===e},Po=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Ao(i)&&(Array.isArray(i)&&i.isCss||Br(i)?r.push("".concat(To(o),":"),i,";"):Ur(i)?r.push.apply(r,nn(nn(["".concat(o," {")],Po(i),!1),["}"],!1)):r.push("".concat(To(o),": ").concat((t=o,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in nr||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function zo(e,t,n,r){return Ao(e)?[]:Hr(e)?[".".concat(e.styledComponentId)]:Br(e)?!Br(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:zo(e(t),t,n,r):e instanceof Co?n?(e.inject(n,r),[e.getName(r)]):[e]:Ur(e)?Po(e):Array.isArray(e)?Array.prototype.concat.apply(ur,e.map((function(e){return zo(e,t,n,r)}))):[e.toString()];var o}function Oo(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Br(n)&&!Hr(n))return!1}return!0}var Mo=kr(ar),Ro=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Oo(e),this.componentId=t,this.baseHash=wr(Mo,t),this.baseStyle=n,po.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Wr(r,this.staticRulesId);else{var o=Vr(zo(this.rules,e,t,n)),i=br(wr(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}r=Wr(r,i),this.staticRulesId=i}else{for(var s=wr(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=Vr(zo(u,e,t,n));s=wr(s,d+c),l+=d}}if(l){var f=br(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(l,".".concat(f),void 0,this.componentId)),r=Wr(r,f)}}return r},e}(),Io=e.createContext(void 0);Io.Consumer;var $o={};new Set;function Lo(t,n,r){var o=Hr(t),i=t,a=!Cr(t),s=n.attrs,l=void 0===s?ur:s,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":gr(e);$o[n]=($o[n]||0)+1;var r="".concat(n,"-").concat(Sr(ar+n+$o[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,f=void 0===d?function(e){return Cr(e)?"styled.".concat(e):"Styled(".concat(jr(e),")")}(t):d,h=n.displayName&&n.componentId?"".concat(gr(n.displayName),"-").concat(n.componentId):n.componentId||u,p=o&&i.attrs?i.attrs.concat(l).filter(Boolean):l,m=n.shouldForwardProp;if(o&&i.shouldForwardProp){var g=i.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new Ro(r,h,o?i.componentStyle:void 0);function b(t,n){return function(t,n,r){var o=t.attrs,i=t.componentStyle,a=t.defaultProps,s=t.foldedComponentIds,l=t.styledComponentId,c=t.target,u=e.useContext(Io),d=So(),f=t.shouldForwardProp||d.shouldForwardProp,h=fr(n,u,a)||dr,p=function(e,t,n){for(var r,o=tn(tn({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var a=Br(r=e[i])?r(o):r;for(var s in a)o[s]="className"===s?Wr(o[s],a[s]):"style"===s?tn(tn({},o[s]),a[s]):a[s]}return t.className&&(o.className=Wr(o.className,t.className)),o}(o,n,h),m=p.as||c,g={};for(var v in p)void 0===p[v]||"$"===v[0]||"as"===v||"theme"===v&&p.theme===h||("forwardedAs"===v?g.as=p.forwardedAs:f&&!f(v,m)||(g[v]=p[v]));var y=function(e,t){var n=So();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,p),b=Wr(s,l);return y&&(b+=" "+y),p.className&&(b+=" "+p.className),g[Cr(m)&&!hr.has(m)?"class":"className"]=b,r&&(g.ref=r),(0,e.createElement)(m,g)}(x,t,n)}b.displayName=f;var x=e.forwardRef(b);return x.attrs=p,x.componentStyle=y,x.displayName=f,x.shouldForwardProp=m,x.foldedComponentIds=o?Wr(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=h,x.target=o?i.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)Yr(e,o[r],!0);return e}({},i.defaultProps,e):e}}),Gr(x,(function(){return".".concat(x.styledComponentId)})),a&&Fr(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function No(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var _o=function(e){return Object.assign(e,{isCss:!0})};function Do(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Br(e)||Ur(e))return _o(zo(No(ur,nn([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?zo(r):_o(zo(No(r,t)))}function Fo(e,t,n){if(void 0===n&&(n=dr),!t)throw qr(1,t);var r=function(r){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,Do.apply(void 0,nn([r],o,!1)))};return r.attrs=function(r){return Fo(e,t,tn(tn({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Fo(e,t,tn(tn({},n),r))},r}var Bo=function(e){return Fo(Lo,e)},Ho=Bo;hr.forEach((function(e){Ho[e]=Bo(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Oo(e),po.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,n,r){var o=r(Vr(zo(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&po.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)}}();function Wo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Vr(Do.apply(void 0,nn([e],t,!1))),o=Sr(r);return new Co(o,r)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=ao(),r=Vr([n&&'nonce="'.concat(n,'"'),"".concat(rr,'="true"'),"".concat(ir,'="').concat(ar,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw qr(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw qr(2);var r=t.instance.toString();if(!r)return[];var o=((n={})[rr]="",n[ir]=ar,n.dangerouslySetInnerHTML={__html:r},n),i=ao();return i&&(o.nonce=i),[e.createElement("style",tn({},o,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new po({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw qr(2);return e.createElement(jo,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw qr(3)}})(),"__sc-".concat(rr,"__");const Vo=Ho.div`
  height: 72px;
  display: flex;
  left: 0;
  width: 100%;
  z-index: 999;
  background: linear-gradient(rgba(246, 246, 255, 0.3), transparent);
  animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
  padding-top: 0px;
  padding-bottom: 0px;
  backdrop-filter: blur(17px);
  position: fixed;
  top: ${e=>e.isScrolled?"0px":"50px"};  /* Adjusted top value */
  transition: top 0.3s ease-in-out;

`;Ho.div`
  display: flex;
  justify-content: center;
  width: 100%;
`,Ho.div`
  margin: 24px;
  background: var(--surface-medium, #EBF4FF);
  width: 100%;
`;function Uo(){return Uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Uo.apply(null,arguments)}const Yo={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"};function Go(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function qo(e,t){if(e){if("string"==typeof e)return Go(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Go(e,t):void 0}}function Ko(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,s=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return s}}(e,t)||qo(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Xo(e){return Xo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xo(e)}function Qo(e){var t=function(e,t){if("object"!=Xo(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=Xo(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==Xo(t)?t:t+""}function Zo(e,t,n){return(t=Qo(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Jo(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ei=n(139),ti=n.n(ei);const ni=Math.round;function ri(e,t){const n=e.replace(/^[^(]*\((.*)/,"$1").replace(/\).*/,"").match(/\d*\.?\d+%?/g)||[],r=n.map((e=>parseFloat(e)));for(let o=0;o<3;o+=1)r[o]=t(r[o]||0,n[o]||"",o);return n[3]?r[3]=n[3].includes("%")?r[3]/100:r[3]:r[3]=1,r}const oi=(e,t,n)=>0===n?e:e/100;function ii(e,t){const n=t||255;return e>n?n:e<0?0:e}class ai{constructor(e){function t(t){return t[0]in e&&t[1]in e&&t[2]in e}if(Zo(this,"isValid",!0),Zo(this,"r",0),Zo(this,"g",0),Zo(this,"b",0),Zo(this,"a",1),Zo(this,"_h",void 0),Zo(this,"_s",void 0),Zo(this,"_l",void 0),Zo(this,"_v",void 0),Zo(this,"_max",void 0),Zo(this,"_min",void 0),Zo(this,"_brightness",void 0),e)if("string"===typeof e){const n=e.trim();function r(e){return n.startsWith(e)}/^#?[A-F\d]{3,8}$/i.test(n)?this.fromHexString(n):r("rgb")?this.fromRgbString(n):r("hsl")?this.fromHslString(n):(r("hsv")||r("hsb"))&&this.fromHsvString(n)}else if(e instanceof ai)this.r=e.r,this.g=e.g,this.b=e.b,this.a=e.a,this._h=e._h,this._s=e._s,this._l=e._l,this._v=e._v;else if(t("rgb"))this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this.a="number"===typeof e.a?ii(e.a,1):1;else if(t("hsl"))this.fromHsl(e);else{if(!t("hsv"))throw new Error("@ant-design/fast-color: unsupported input "+JSON.stringify(e));this.fromHsv(e)}else;}setR(e){return this._sc("r",e)}setG(e){return this._sc("g",e)}setB(e){return this._sc("b",e)}setA(e){return this._sc("a",e,1)}setHue(e){const t=this.toHsv();return t.h=e,this._c(t)}getLuminance(){function e(e){const t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return.2126*e(this.r)+.7152*e(this.g)+.0722*e(this.b)}getHue(){if("undefined"===typeof this._h){const e=this.getMax()-this.getMin();this._h=0===e?0:ni(60*(this.r===this.getMax()?(this.g-this.b)/e+(this.g<this.b?6:0):this.g===this.getMax()?(this.b-this.r)/e+2:(this.r-this.g)/e+4))}return this._h}getSaturation(){if("undefined"===typeof this._s){const e=this.getMax()-this.getMin();this._s=0===e?0:e/this.getMax()}return this._s}getLightness(){return"undefined"===typeof this._l&&(this._l=(this.getMax()+this.getMin())/510),this._l}getValue(){return"undefined"===typeof this._v&&(this._v=this.getMax()/255),this._v}getBrightness(){return"undefined"===typeof this._brightness&&(this._brightness=(299*this.r+587*this.g+114*this.b)/1e3),this._brightness}darken(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;const t=this.getHue(),n=this.getSaturation();let r=this.getLightness()-e/100;return r<0&&(r=0),this._c({h:t,s:n,l:r,a:this.a})}lighten(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;const t=this.getHue(),n=this.getSaturation();let r=this.getLightness()+e/100;return r>1&&(r=1),this._c({h:t,s:n,l:r,a:this.a})}mix(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;const n=this._c(e),r=t/100,o=e=>(n[e]-this[e])*r+this[e],i={r:ni(o("r")),g:ni(o("g")),b:ni(o("b")),a:ni(100*o("a"))/100};return this._c(i)}tint(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return this.mix({r:255,g:255,b:255,a:1},e)}shade(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return this.mix({r:0,g:0,b:0,a:1},e)}onBackground(e){const t=this._c(e),n=this.a+t.a*(1-this.a),r=e=>ni((this[e]*this.a+t[e]*t.a*(1-this.a))/n);return this._c({r:r("r"),g:r("g"),b:r("b"),a:n})}isDark(){return this.getBrightness()<128}isLight(){return this.getBrightness()>=128}equals(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}clone(){return this._c(this)}toHexString(){let e="#";const t=(this.r||0).toString(16);e+=2===t.length?t:"0"+t;const n=(this.g||0).toString(16);e+=2===n.length?n:"0"+n;const r=(this.b||0).toString(16);if(e+=2===r.length?r:"0"+r,"number"===typeof this.a&&this.a>=0&&this.a<1){const t=ni(255*this.a).toString(16);e+=2===t.length?t:"0"+t}return e}toHsl(){return{h:this.getHue(),s:this.getSaturation(),l:this.getLightness(),a:this.a}}toHslString(){const e=this.getHue(),t=ni(100*this.getSaturation()),n=ni(100*this.getLightness());return 1!==this.a?`hsla(${e},${t}%,${n}%,${this.a})`:`hsl(${e},${t}%,${n}%)`}toHsv(){return{h:this.getHue(),s:this.getSaturation(),v:this.getValue(),a:this.a}}toRgb(){return{r:this.r,g:this.g,b:this.b,a:this.a}}toRgbString(){return 1!==this.a?`rgba(${this.r},${this.g},${this.b},${this.a})`:`rgb(${this.r},${this.g},${this.b})`}toString(){return this.toRgbString()}_sc(e,t,n){const r=this.clone();return r[e]=ii(t,n),r}_c(e){return new this.constructor(e)}getMax(){return"undefined"===typeof this._max&&(this._max=Math.max(this.r,this.g,this.b)),this._max}getMin(){return"undefined"===typeof this._min&&(this._min=Math.min(this.r,this.g,this.b)),this._min}fromHexString(e){const t=e.replace("#","");function n(e,n){return parseInt(t[e]+t[n||e],16)}t.length<6?(this.r=n(0),this.g=n(1),this.b=n(2),this.a=t[3]?n(3)/255:1):(this.r=n(0,1),this.g=n(2,3),this.b=n(4,5),this.a=t[6]?n(6,7)/255:1)}fromHsl(e){let{h:t,s:n,l:r,a:o}=e;if(this._h=t%360,this._s=n,this._l=r,this.a="number"===typeof o?o:1,n<=0){const e=ni(255*r);this.r=e,this.g=e,this.b=e}let i=0,a=0,s=0;const l=t/60,c=(1-Math.abs(2*r-1))*n,u=c*(1-Math.abs(l%2-1));l>=0&&l<1?(i=c,a=u):l>=1&&l<2?(i=u,a=c):l>=2&&l<3?(a=c,s=u):l>=3&&l<4?(a=u,s=c):l>=4&&l<5?(i=u,s=c):l>=5&&l<6&&(i=c,s=u);const d=r-c/2;this.r=ni(255*(i+d)),this.g=ni(255*(a+d)),this.b=ni(255*(s+d))}fromHsv(e){let{h:t,s:n,v:r,a:o}=e;this._h=t%360,this._s=n,this._v=r,this.a="number"===typeof o?o:1;const i=ni(255*r);if(this.r=i,this.g=i,this.b=i,n<=0)return;const a=t/60,s=Math.floor(a),l=a-s,c=ni(r*(1-n)*255),u=ni(r*(1-n*l)*255),d=ni(r*(1-n*(1-l))*255);switch(s){case 0:this.g=d,this.b=c;break;case 1:this.r=u,this.b=c;break;case 2:this.r=c,this.b=d;break;case 3:this.r=c,this.g=u;break;case 4:this.r=d,this.g=c;break;default:this.g=c,this.b=u}}fromHsvString(e){const t=ri(e,oi);this.fromHsv({h:t[0],s:t[1],v:t[2],a:t[3]})}fromHslString(e){const t=ri(e,oi);this.fromHsl({h:t[0],s:t[1],l:t[2],a:t[3]})}fromRgbString(e){const t=ri(e,((e,t)=>t.includes("%")?ni(e/100*255):e));this.r=t[0],this.g=t[1],this.b=t[2],this.a=t[3]}}var si=[{index:7,amount:15},{index:6,amount:25},{index:5,amount:30},{index:5,amount:45},{index:5,amount:65},{index:5,amount:85},{index:4,amount:90},{index:3,amount:95},{index:2,amount:97},{index:1,amount:98}];function li(e,t,n){var r;return(r=Math.round(e.h)>=60&&Math.round(e.h)<=240?n?Math.round(e.h)-2*t:Math.round(e.h)+2*t:n?Math.round(e.h)+2*t:Math.round(e.h)-2*t)<0?r+=360:r>=360&&(r-=360),r}function ci(e,t,n){return 0===e.h&&0===e.s?e.s:((r=n?e.s-.16*t:4===t?e.s+.16:e.s+.05*t)>1&&(r=1),n&&5===t&&r>.1&&(r=.1),r<.06&&(r=.06),Math.round(100*r)/100);var r}function ui(e,t,n){var r;return r=n?e.v+.05*t:e.v-.15*t,r=Math.max(0,Math.min(1,r)),Math.round(100*r)/100}function di(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[],r=new ai(e),o=r.toHsv(),i=5;i>0;i-=1){var a=new ai({h:li(o,i,!0),s:ci(o,i,!0),v:ui(o,i,!0)});n.push(a)}n.push(r);for(var s=1;s<=4;s+=1){var l=new ai({h:li(o,s),s:ci(o,s),v:ui(o,s)});n.push(l)}return"dark"===t.theme?si.map((function(e){var r=e.index,o=e.amount;return new ai(t.backgroundColor||"#141414").mix(n[r],o).toHexString()})):n.map((function(e){return e.toHexString()}))}var fi={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},hi=["#fff1f0","#ffccc7","#ffa39e","#ff7875","#ff4d4f","#f5222d","#cf1322","#a8071a","#820014","#5c0011"];hi.primary=hi[5];var pi=["#fff2e8","#ffd8bf","#ffbb96","#ff9c6e","#ff7a45","#fa541c","#d4380d","#ad2102","#871400","#610b00"];pi.primary=pi[5];var mi=["#fff7e6","#ffe7ba","#ffd591","#ffc069","#ffa940","#fa8c16","#d46b08","#ad4e00","#873800","#612500"];mi.primary=mi[5];var gi=["#fffbe6","#fff1b8","#ffe58f","#ffd666","#ffc53d","#faad14","#d48806","#ad6800","#874d00","#613400"];gi.primary=gi[5];var vi=["#feffe6","#ffffb8","#fffb8f","#fff566","#ffec3d","#fadb14","#d4b106","#ad8b00","#876800","#614700"];vi.primary=vi[5];var yi=["#fcffe6","#f4ffb8","#eaff8f","#d3f261","#bae637","#a0d911","#7cb305","#5b8c00","#3f6600","#254000"];yi.primary=yi[5];var bi=["#f6ffed","#d9f7be","#b7eb8f","#95de64","#73d13d","#52c41a","#389e0d","#237804","#135200","#092b00"];bi.primary=bi[5];var xi=["#e6fffb","#b5f5ec","#87e8de","#5cdbd3","#36cfc9","#13c2c2","#08979c","#006d75","#00474f","#002329"];xi.primary=xi[5];var wi=["#e6f4ff","#bae0ff","#91caff","#69b1ff","#4096ff","#1677ff","#0958d9","#003eb3","#002c8c","#001d66"];wi.primary=wi[5];var ki=["#f0f5ff","#d6e4ff","#adc6ff","#85a5ff","#597ef7","#2f54eb","#1d39c4","#10239e","#061178","#030852"];ki.primary=ki[5];var Si=["#f9f0ff","#efdbff","#d3adf7","#b37feb","#9254de","#722ed1","#531dab","#391085","#22075e","#120338"];Si.primary=Si[5];var ji=["#fff0f6","#ffd6e7","#ffadd2","#ff85c0","#f759ab","#eb2f96","#c41d7f","#9e1068","#780650","#520339"];ji.primary=ji[5];var Ci=["#a6a6a6","#999999","#8c8c8c","#808080","#737373","#666666","#404040","#1a1a1a","#000000","#000000"];Ci.primary=Ci[5];var Ei={red:hi,volcano:pi,orange:mi,gold:gi,yellow:vi,lime:yi,green:bi,cyan:xi,blue:wi,geekblue:ki,purple:Si,magenta:ji,grey:Ci},Ti=["#2a1215","#431418","#58181c","#791a1f","#a61d24","#d32029","#e84749","#f37370","#f89f9a","#fac8c3"];Ti.primary=Ti[5];var Ai=["#2b1611","#441d12","#592716","#7c3118","#aa3e19","#d84a1b","#e87040","#f3956a","#f8b692","#fad4bc"];Ai.primary=Ai[5];var Pi=["#2b1d11","#442a11","#593815","#7c4a15","#aa6215","#d87a16","#e89a3c","#f3b765","#f8cf8d","#fae3b7"];Pi.primary=Pi[5];var zi=["#2b2111","#443111","#594214","#7c5914","#aa7714","#d89614","#e8b339","#f3cc62","#f8df8b","#faedb5"];zi.primary=zi[5];var Oi=["#2b2611","#443b11","#595014","#7c6e14","#aa9514","#d8bd14","#e8d639","#f3ea62","#f8f48b","#fafab5"];Oi.primary=Oi[5];var Mi=["#1f2611","#2e3c10","#3e4f13","#536d13","#6f9412","#8bbb11","#a9d134","#c9e75d","#e4f88b","#f0fab5"];Mi.primary=Mi[5];var Ri=["#162312","#1d3712","#274916","#306317","#3c8618","#49aa19","#6abe39","#8fd460","#b2e58b","#d5f2bb"];Ri.primary=Ri[5];var Ii=["#112123","#113536","#144848","#146262","#138585","#13a8a8","#33bcb7","#58d1c9","#84e2d8","#b2f1e8"];Ii.primary=Ii[5];var $i=["#111a2c","#112545","#15325b","#15417e","#1554ad","#1668dc","#3c89e8","#65a9f3","#8dc5f8","#b7dcfa"];$i.primary=$i[5];var Li=["#131629","#161d40","#1c2755","#203175","#263ea0","#2b4acb","#5273e0","#7f9ef3","#a8c1f8","#d2e0fa"];Li.primary=Li[5];var Ni=["#1a1325","#24163a","#301c4d","#3e2069","#51258f","#642ab5","#854eca","#ab7ae0","#cda8f0","#ebd7fa"];Ni.primary=Ni[5];var _i=["#291321","#40162f","#551c3b","#75204f","#a02669","#cb2b83","#e0529c","#f37fb7","#f8a8cc","#fad2e3"];_i.primary=_i[5];var Di=["#151515","#1f1f1f","#2d2d2d","#393939","#494949","#5a5a5a","#6a6a6a","#7b7b7b","#888888","#969696"];Di.primary=Di[5];const Fi=(0,e.createContext)({});function Bi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Hi(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Bi(Object(n),!0).forEach((function(t){Zo(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bi(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Wi(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}function Vi(e,t){if(!e)return!1;if(e.contains)return e.contains(t);for(var n=t;n;){if(n===e)return!0;n=n.parentNode}return!1}var Ui="data-rc-order",Yi="data-rc-priority",Gi=new Map;function qi(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).mark;return e?e.startsWith("data-")?e:"data-".concat(e):"rc-util-key"}function Ki(e){return e.attachTo?e.attachTo:document.querySelector("head")||document.body}function Xi(e){return Array.from((Gi.get(e)||e).children).filter((function(e){return"STYLE"===e.tagName}))}function Qi(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!Wi())return null;var n=t.csp,r=t.prepend,o=t.priority,i=void 0===o?0:o,a=function(e){return"queue"===e?"prependQueue":e?"prepend":"append"}(r),s="prependQueue"===a,l=document.createElement("style");l.setAttribute(Ui,a),s&&i&&l.setAttribute(Yi,"".concat(i)),null!==n&&void 0!==n&&n.nonce&&(l.nonce=null===n||void 0===n?void 0:n.nonce),l.innerHTML=e;var c=Ki(t),u=c.firstChild;if(r){if(s){var d=(t.styles||Xi(c)).filter((function(e){if(!["prepend","prependQueue"].includes(e.getAttribute(Ui)))return!1;var t=Number(e.getAttribute(Yi)||0);return i>=t}));if(d.length)return c.insertBefore(l,d[d.length-1].nextSibling),l}c.insertBefore(l,u)}else c.appendChild(l);return l}function Zi(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Ki(t);return(t.styles||Xi(n)).find((function(n){return n.getAttribute(qi(t))===e}))}function Ji(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Zi(e,t);n&&Ki(t).removeChild(n)}function ea(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Ki(n),o=Xi(r),i=Hi(Hi({},n),{},{styles:o});!function(e,t){var n=Gi.get(e);if(!n||!Vi(document,n)){var r=Qi("",t),o=r.parentNode;Gi.set(e,o),e.removeChild(r)}}(r,i);var a=Zi(t,i);if(a){var s,l,c;if(null!==(s=i.csp)&&void 0!==s&&s.nonce&&a.nonce!==(null===(l=i.csp)||void 0===l?void 0:l.nonce))a.nonce=null===(c=i.csp)||void 0===c?void 0:c.nonce;return a.innerHTML!==e&&(a.innerHTML=e),a}var u=Qi(e,i);return u.setAttribute(qi(i),t),u}function ta(e){var t;return null===e||void 0===e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}function na(e){return function(e){return ta(e)instanceof ShadowRoot}(e)?ta(e):null}var ra={},oa=[];function ia(e,t){}function aa(e,t){}function sa(e,t,n){t||ra[n]||(e(!1,n),ra[n]=!0)}function la(e,t){sa(ia,e,t)}la.preMessage=function(e){oa.push(e)},la.resetWarned=function(){ra={}},la.noteOnce=function(e,t){sa(aa,e,t)};const ca=la;function ua(e){return"object"===Xo(e)&&"string"===typeof e.name&&"string"===typeof e.theme&&("object"===Xo(e.icon)||"function"===typeof e.icon)}function da(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(t,n){var r,o=e[n];if("class"===n)t.className=o,delete t.class;else delete t[n],t[(r=n,r.replace(/-(.)/g,(function(e,t){return t.toUpperCase()})))]=o;return t}),{})}function fa(t,n,r){return r?e.createElement(t.tag,Hi(Hi({key:n},da(t.attrs)),r),(t.children||[]).map((function(e,r){return fa(e,"".concat(n,"-").concat(t.tag,"-").concat(r))}))):e.createElement(t.tag,Hi({key:n},da(t.attrs)),(t.children||[]).map((function(e,r){return fa(e,"".concat(n,"-").concat(t.tag,"-").concat(r))})))}function ha(e){return di(e)[0]}function pa(e){return e?Array.isArray(e)?e:[e]:[]}var ma=["icon","className","onClick","style","primaryColor","secondaryColor"],ga={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var va=function(t){var n,r,o=t.icon,i=t.className,a=t.onClick,s=t.style,l=t.primaryColor,c=t.secondaryColor,u=Jo(t,ma),d=e.useRef(),f=ga;if(l&&(f={primaryColor:l,secondaryColor:c||ha(l)}),function(t){var n=(0,e.useContext)(Fi),r=n.csp,o=n.prefixCls,i=n.layer,a="\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";o&&(a=a.replace(/anticon/g,o)),i&&(a="@layer ".concat(i," {\n").concat(a,"\n}")),(0,e.useEffect)((function(){var e=na(t.current);ea(a,"@ant-design-icons",{prepend:!i,csp:r,attachTo:e})}),[])}(d),n=ua(o),r="icon should be icon definiton, but got ".concat(o),ca(n,"[@ant-design/icons] ".concat(r)),!ua(o))return null;var h=o;return h&&"function"===typeof h.icon&&(h=Hi(Hi({},h),{},{icon:h.icon(f.primaryColor,f.secondaryColor)})),fa(h.icon,"svg-".concat(h.name),Hi(Hi({className:i,onClick:a,style:s,"data-icon":h.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},u),{},{ref:d}))};va.displayName="IconReact",va.getTwoToneColors=function(){return Hi({},ga)},va.setTwoToneColors=function(e){var t=e.primaryColor,n=e.secondaryColor;ga.primaryColor=t,ga.secondaryColor=n||ha(t),ga.calculated=!!n};const ya=va;function ba(e){var t=Ko(pa(e),2),n=t[0],r=t[1];return ya.setTwoToneColors({primaryColor:n,secondaryColor:r})}var xa=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];ba(wi.primary);var wa=e.forwardRef((function(t,n){var r=t.className,o=t.icon,i=t.spin,a=t.rotate,s=t.tabIndex,l=t.onClick,c=t.twoToneColor,u=Jo(t,xa),d=e.useContext(Fi),f=d.prefixCls,h=void 0===f?"anticon":f,p=d.rootClassName,m=ti()(p,h,Zo(Zo({},"".concat(h,"-").concat(o.name),!!o.name),"".concat(h,"-spin"),!!i||"loading"===o.name),r),g=s;void 0===g&&l&&(g=-1);var v=a?{msTransform:"rotate(".concat(a,"deg)"),transform:"rotate(".concat(a,"deg)")}:void 0,y=Ko(pa(c),2),b=y[0],x=y[1];return e.createElement("span",Uo({role:"img","aria-label":o.name},u,{ref:n,tabIndex:g,onClick:l,className:m}),e.createElement(ya,{icon:o,primaryColor:b,secondaryColor:x,style:v}))}));wa.displayName="AntdIcon",wa.getTwoToneColor=function(){var e=ya.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor},wa.setTwoToneColor=ba;const ka=wa;var Sa=function(t,n){return e.createElement(ka,Uo({},t,{ref:n,icon:Yo}))};const ja=e.forwardRef(Sa);function Ca(){return{width:document.documentElement.clientWidth,height:window.innerHeight||document.documentElement.clientHeight}}function Ea(t){var n=e.useRef();n.current=t;var r=e.useCallback((function(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat(r))}),[]);return r}var Ta=Wi()?e.useLayoutEffect:e.useEffect,Aa=function(t,n){var r=e.useRef(!0);Ta((function(){return t(r.current)}),n),Ta((function(){return r.current=!1,function(){r.current=!0}}),[])},Pa=function(e,t){Aa((function(t){if(!t)return e()}),t)};const za=Aa;function Oa(t){var n=e.useRef(!1),r=Ko(e.useState(t),2),o=r[0],i=r[1];return e.useEffect((function(){return n.current=!1,function(){n.current=!0}}),[]),[o,function(e,t){t&&n.current||i(e)}]}function Ma(e){return void 0!==e}function Ra(e,t){var n=t||{},r=n.defaultValue,o=n.value,i=n.onChange,a=n.postState,s=Ko(Oa((function(){return Ma(o)?o:Ma(r)?"function"===typeof r?r():r:"function"===typeof e?e():e})),2),l=s[0],c=s[1],u=void 0!==o?o:l,d=a?a(u):u,f=Ea(i),h=Ko(Oa([u]),2),p=h[0],m=h[1];return Pa((function(){var e=p[0];l!==e&&f(l,e)}),[p]),Pa((function(){Ma(o)||c(o)}),[o]),[d,Ea((function(e,t){c(e,t),m([u],t)}))]}var Ia=n(950),$a=n.t(Ia,2),La=n(816);var Na=Symbol.for("react.element"),_a=Symbol.for("react.transitional.element"),Da=Symbol.for("react.fragment");var Fa=Number(e.version.split(".")[0]),Ba=function(e,t){"function"===typeof e?e(t):"object"===Xo(e)&&e&&"current"in e&&(e.current=t)},Ha=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.filter(Boolean);return r.length<=1?r[0]:function(e){t.forEach((function(t){Ba(t,e)}))}},Wa=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(t,n,r){var o=e.useRef({});return"value"in o.current&&!r(o.current.condition,n)||(o.current.value=t(),o.current.condition=n),o.current.value}((function(){return Ha.apply(void 0,n)}),n,(function(e,t){return e.length!==t.length||e.every((function(e,n){return e!==t[n]}))}))},Va=function(e){var t,n;if(!e)return!1;if(Ua(e)&&Fa>=19)return!0;var r=(0,La.isMemo)(e)?e.type.type:e.type;return!!("function"!==typeof r||null!==(t=r.prototype)&&void 0!==t&&t.render||r.$$typeof===La.ForwardRef)&&!!("function"!==typeof e||null!==(n=e.prototype)&&void 0!==n&&n.render||e.$$typeof===La.ForwardRef)};function Ua(t){return(0,e.isValidElement)(t)&&!((n=t)&&"object"===Xo(n)&&(n.$$typeof===Na||n.$$typeof===_a)&&n.type===Da);var n}var Ya=function(e){if(e&&Ua(e)){var t=e;return t.props.propertyIsEnumerable("ref")?t.props.ref:t.ref}return null};const Ga=e.createContext(null);function qa(e){return function(e){if(Array.isArray(e))return Go(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||qo(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Ka=[];function Xa(e){var t="rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)),n=document.createElement("div");n.id=t;var r,o,i=n.style;if(i.position="absolute",i.left="0",i.top="0",i.width="100px",i.height="100px",i.overflow="scroll",e){var a=getComputedStyle(e);i.scrollbarColor=a.scrollbarColor,i.scrollbarWidth=a.scrollbarWidth;var s=getComputedStyle(e,"::-webkit-scrollbar"),l=parseInt(s.width,10),c=parseInt(s.height,10);try{var u=l?"width: ".concat(s.width,";"):"",d=c?"height: ".concat(s.height,";"):"";ea("\n#".concat(t,"::-webkit-scrollbar {\n").concat(u,"\n").concat(d,"\n}"),t)}catch(RA){console.error(RA),r=l,o=c}}document.body.appendChild(n);var f=e&&r&&!isNaN(r)?r:n.offsetWidth-n.clientWidth,h=e&&o&&!isNaN(o)?o:n.offsetHeight-n.clientHeight;return document.body.removeChild(n),Ji(t),{width:f,height:h}}var Qa="rc-util-locker-".concat(Date.now()),Za=0;function Ja(t){var n=!!t,r=Ko(e.useState((function(){return Za+=1,"".concat(Qa,"_").concat(Za)})),1)[0];za((function(){if(n){var e=(o=document.body,"undefined"!==typeof document&&o&&o instanceof Element?Xa(o):{width:0,height:0}).width,t=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth;ea("\nhtml body {\n  overflow-y: hidden;\n  ".concat(t?"width: calc(100% - ".concat(e,"px);"):"","\n}"),r)}else Ji(r);var o;return function(){Ji(r)}}),[n,r])}var es=!1;var ts=function(e){return!1!==e&&(Wi()&&e?"string"===typeof e?document.querySelector(e):"function"===typeof e?e():e:null)},ns=e.forwardRef((function(t,n){var r=t.open,o=t.autoLock,i=t.getContainer,a=(t.debug,t.autoDestroy),s=void 0===a||a,l=t.children,c=Ko(e.useState(r),2),u=c[0],d=c[1],f=u||r;e.useEffect((function(){(s||r)&&d(r)}),[r,s]);var h=Ko(e.useState((function(){return ts(i)})),2),p=h[0],m=h[1];e.useEffect((function(){var e=ts(i);m(null!==e&&void 0!==e?e:null)}));var g=function(t){var n=Ko(e.useState((function(){return Wi()?document.createElement("div"):null})),1)[0],r=e.useRef(!1),o=e.useContext(Ga),i=Ko(e.useState(Ka),2),a=i[0],s=i[1],l=o||(r.current?void 0:function(e){s((function(t){return[e].concat(qa(t))}))});function c(){n.parentElement||document.body.appendChild(n),r.current=!0}function u(){var e;null===(e=n.parentElement)||void 0===e||e.removeChild(n),r.current=!1}return za((function(){return t?o?o(c):c():u(),u}),[t]),za((function(){a.length&&(a.forEach((function(e){return e()})),s(Ka))}),[a]),[n,l]}(f&&!p),v=Ko(g,2),y=v[0],b=v[1],x=null!==p&&void 0!==p?p:y;Ja(o&&r&&Wi()&&(x===y||x===document.body));var w=null;l&&Va(l)&&n&&(w=l.ref);var k=Wa(w,n);if(!f||!Wi()||void 0===p)return null;var S,j=!1===x||("boolean"===typeof S&&(es=S),es),C=l;return n&&(C=e.cloneElement(l,{ref:k})),e.createElement(Ga.Provider,{value:b},j?C:(0,Ia.createPortal)(C,x))}));const rs=ns;var os=e.createContext({});var is=0;var as=Hi({},t).useId;const ss=as?function(e){var t=as();return e||t}:function(t){var n=Ko(e.useState("ssr-id"),2),r=n[0],o=n[1];return e.useEffect((function(){var e=is;is+=1,o("rc_unique_".concat(e))}),[]),t||r};var ls={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=ls.F1&&t<=ls.F12)return!1;switch(t){case ls.ALT:case ls.CAPS_LOCK:case ls.CONTEXT_MENU:case ls.CTRL:case ls.DOWN:case ls.END:case ls.ESC:case ls.HOME:case ls.INSERT:case ls.LEFT:case ls.MAC_FF_META:case ls.META:case ls.NUMLOCK:case ls.NUM_CENTER:case ls.PAGE_DOWN:case ls.PAGE_UP:case ls.PAUSE:case ls.PRINT_SCREEN:case ls.RIGHT:case ls.SHIFT:case ls.UP:case ls.WIN_KEY:case ls.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=ls.ZERO&&e<=ls.NINE)return!0;if(e>=ls.NUM_ZERO&&e<=ls.NUM_MULTIPLY)return!0;if(e>=ls.A&&e<=ls.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case ls.SPACE:case ls.QUESTION_MARK:case ls.NUM_PLUS:case ls.NUM_MINUS:case ls.NUM_PERIOD:case ls.NUM_DIVISION:case ls.SEMICOLON:case ls.DASH:case ls.EQUALS:case ls.COMMA:case ls.PERIOD:case ls.SLASH:case ls.APOSTROPHE:case ls.SINGLE_QUOTE:case ls.OPEN_SQUARE_BRACKET:case ls.BACKSLASH:case ls.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const cs=ls;var us="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/);function ds(e,t){return 0===e.indexOf(t)}function fs(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=!1===n?{aria:!0,data:!0,attr:!0}:!0===n?{aria:!0}:Hi({},n);var r={};return Object.keys(e).forEach((function(n){(t.aria&&("role"===n||ds(n,"aria-"))||t.data&&ds(n,"data-")||t.attr&&us.includes(n))&&(r[n]=e[n])})),r}function hs(e,t,n){var r=t;return!r&&n&&(r="".concat(e,"-").concat(n)),r}function ps(e,t){var n=e["page".concat(t?"Y":"X","Offset")],r="scroll".concat(t?"Top":"Left");if("number"!==typeof n){var o=e.document;"number"!==typeof(n=o.documentElement[r])&&(n=o.body[r])}return n}function ms(e){return e instanceof HTMLElement||e instanceof SVGElement}function gs(t){var n,r=function(e){return e&&"object"===Xo(e)&&ms(e.nativeElement)?e.nativeElement:ms(e)?e:null}(t);return r||(t instanceof e.Component?null===(n=Ia.findDOMNode)||void 0===n?void 0:n.call(Ia,t):null)}var vs=e.createContext({});function ys(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bs(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Qo(r.key),r)}}function xs(e,t,n){return t&&bs(e.prototype,t),n&&bs(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ws(e,t){return ws=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ws(e,t)}function ks(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ws(e,t)}function Ss(e){return Ss=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Ss(e)}function js(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(js=function(){return!!e})()}function Cs(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Es(e){var t=js();return function(){var n,r=Ss(e);if(t){var o=Ss(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"==Xo(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Cs(e)}(this,n)}}const Ts=function(e){ks(n,e);var t=Es(n);function n(){return ys(this,n),t.apply(this,arguments)}return xs(n,[{key:"render",value:function(){return this.props.children}}]),n}(e.Component);"undefined"===typeof Reflect?Object.keys:Reflect.ownKeys;var As="none",Ps="appear",zs="enter",Os="leave",Ms="none",Rs="prepare",Is="start",$s="active",Ls="end",Ns="prepared";function _s(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit".concat(e)]="webkit".concat(t),n["Moz".concat(e)]="moz".concat(t),n["ms".concat(e)]="MS".concat(t),n["O".concat(e)]="o".concat(t.toLowerCase()),n}var Ds=function(e,t){var n={animationend:_s("Animation","AnimationEnd"),transitionend:_s("Transition","TransitionEnd")};return e&&("AnimationEvent"in t||delete n.animationend.animation,"TransitionEvent"in t||delete n.transitionend.transition),n}(Wi(),"undefined"!==typeof window?window:{}),Fs={};if(Wi()){var Bs=document.createElement("div");Fs=Bs.style}var Hs={};function Ws(e){if(Hs[e])return Hs[e];var t=Ds[e];if(t)for(var n=Object.keys(t),r=n.length,o=0;o<r;o+=1){var i=n[o];if(Object.prototype.hasOwnProperty.call(t,i)&&i in Fs)return Hs[e]=t[i],Hs[e]}return""}var Vs=Ws("animationend"),Us=Ws("transitionend"),Ys=!(!Vs||!Us),Gs=Vs||"animationend",qs=Us||"transitionend";function Ks(e,t){if(!e)return null;if("object"===Xo(e)){var n=t.replace(/-\w/g,(function(e){return e[1].toUpperCase()}));return e[n]}return"".concat(e,"-").concat(t)}const Xs=Wi()?e.useLayoutEffect:e.useEffect;var Qs=function(e){return+setTimeout(e,16)},Zs=function(e){return clearTimeout(e)};"undefined"!==typeof window&&"requestAnimationFrame"in window&&(Qs=function(e){return window.requestAnimationFrame(e)},Zs=function(e){return window.cancelAnimationFrame(e)});var Js=0,el=new Map;function tl(e){el.delete(e)}var nl=function(e){var t=Js+=1;return function n(r){if(0===r)tl(t),e();else{var o=Qs((function(){n(r-1)}));el.set(t,o)}}(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1),t};nl.cancel=function(e){var t=el.get(e);return tl(e),Zs(t)};const rl=nl;var ol=[Rs,Is,$s,Ls],il=[Rs,Ns],al=!1;function sl(e){return e===$s||e===Ls}const ll=function(t,n,r){var o=Ko(Oa(Ms),2),i=o[0],a=o[1],s=function(){var t=e.useRef(null);function n(){rl.cancel(t.current)}return e.useEffect((function(){return function(){n()}}),[]),[function e(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;n();var i=rl((function(){o<=1?r({isCanceled:function(){return i!==t.current}}):e(r,o-1)}));t.current=i},n]}(),l=Ko(s,2),c=l[0],u=l[1];var d=n?il:ol;return Xs((function(){if(i!==Ms&&i!==Ls){var e=d.indexOf(i),t=d[e+1],n=r(i);n===al?a(t,!0):t&&c((function(e){function r(){e.isCanceled()||a(t,!0)}!0===n?r():Promise.resolve(n).then(r)}))}}),[t,i]),e.useEffect((function(){return function(){u()}}),[]),[function(){a(Rs,!0)},i]};function cl(t,n,r,o){var i=o.motionEnter,a=void 0===i||i,s=o.motionAppear,l=void 0===s||s,c=o.motionLeave,u=void 0===c||c,d=o.motionDeadline,f=o.motionLeaveImmediately,h=o.onAppearPrepare,p=o.onEnterPrepare,m=o.onLeavePrepare,g=o.onAppearStart,v=o.onEnterStart,y=o.onLeaveStart,b=o.onAppearActive,x=o.onEnterActive,w=o.onLeaveActive,k=o.onAppearEnd,S=o.onEnterEnd,j=o.onLeaveEnd,C=o.onVisibleChanged,E=Ko(Oa(),2),T=E[0],A=E[1],P=function(t){var n=e.useReducer((function(e){return e+1}),0),r=Ko(n,2)[1],o=e.useRef(t);return[Ea((function(){return o.current})),Ea((function(e){o.current="function"===typeof e?e(o.current):e,r()}))]}(As),z=Ko(P,2),O=z[0],M=z[1],R=Ko(Oa(null),2),I=R[0],$=R[1],L=O(),N=(0,e.useRef)(!1),_=(0,e.useRef)(null);function D(){return r()}var F=(0,e.useRef)(!1);function B(){M(As),$(null,!0)}var H=Ea((function(e){var t=O();if(t!==As){var n=D();if(!e||e.deadline||e.target===n){var r,o=F.current;t===Ps&&o?r=null===k||void 0===k?void 0:k(n,e):t===zs&&o?r=null===S||void 0===S?void 0:S(n,e):t===Os&&o&&(r=null===j||void 0===j?void 0:j(n,e)),o&&!1!==r&&B()}}})),W=function(t){var n=(0,e.useRef)();function r(e){e&&(e.removeEventListener(qs,t),e.removeEventListener(Gs,t))}return e.useEffect((function(){return function(){r(n.current)}}),[]),[function(e){n.current&&n.current!==e&&r(n.current),e&&e!==n.current&&(e.addEventListener(qs,t),e.addEventListener(Gs,t),n.current=e)},r]}(H),V=Ko(W,1)[0],U=function(e){switch(e){case Ps:return Zo(Zo(Zo({},Rs,h),Is,g),$s,b);case zs:return Zo(Zo(Zo({},Rs,p),Is,v),$s,x);case Os:return Zo(Zo(Zo({},Rs,m),Is,y),$s,w);default:return{}}},Y=e.useMemo((function(){return U(L)}),[L]),G=Ko(ll(L,!t,(function(e){if(e===Rs){var t=Y[Rs];return t?t(D()):al}var n;K in Y&&$((null===(n=Y[K])||void 0===n?void 0:n.call(Y,D(),null))||null);return K===$s&&L!==As&&(V(D()),d>0&&(clearTimeout(_.current),_.current=setTimeout((function(){H({deadline:!0})}),d))),K===Ns&&B(),true})),2),q=G[0],K=G[1],X=sl(K);F.current=X;var Q=(0,e.useRef)(null);Xs((function(){if(!N.current||Q.current!==n){A(n);var e,r=N.current;N.current=!0,!r&&n&&l&&(e=Ps),r&&n&&a&&(e=zs),(r&&!n&&u||!r&&f&&!n&&u)&&(e=Os);var o=U(e);e&&(t||o[Rs])?(M(e),q()):M(As),Q.current=n}}),[n]),(0,e.useEffect)((function(){(L===Ps&&!l||L===zs&&!a||L===Os&&!u)&&M(As)}),[l,a,u]),(0,e.useEffect)((function(){return function(){N.current=!1,clearTimeout(_.current)}}),[]);var Z=e.useRef(!1);(0,e.useEffect)((function(){T&&(Z.current=!0),void 0!==T&&L===As&&((Z.current||T)&&(null===C||void 0===C||C(T)),Z.current=!0)}),[T,L]);var J=I;return Y[Rs]&&K===Is&&(J=Hi({transition:"none"},J)),[L,K,J,null!==T&&void 0!==T?T:n]}const ul=function(t){var n=t;"object"===Xo(t)&&(n=t.transitionSupport);var r=e.forwardRef((function(t,r){var o=t.visible,i=void 0===o||o,a=t.removeOnLeave,s=void 0===a||a,l=t.forceRender,c=t.children,u=t.motionName,d=t.leavedClassName,f=t.eventProps,h=function(e,t){return!(!e.motionName||!n||!1===t)}(t,e.useContext(vs).motion),p=(0,e.useRef)(),m=(0,e.useRef)();var g=Ko(cl(h,i,(function(){try{return p.current instanceof HTMLElement?p.current:gs(m.current)}catch(RA){return null}}),t),4),v=g[0],y=g[1],b=g[2],x=g[3],w=e.useRef(x);x&&(w.current=!0);var k,S=e.useCallback((function(e){p.current=e,Ba(r,e)}),[r]),j=Hi(Hi({},f),{},{visible:i});if(c)if(v===As)k=x?c(Hi({},j),S):!s&&w.current&&d?c(Hi(Hi({},j),{},{className:d}),S):l||!s&&!d?c(Hi(Hi({},j),{},{style:{display:"none"}}),S):null;else{var C;y===Rs?C="prepare":sl(y)?C="active":y===Is&&(C="start");var E=Ks(u,"".concat(v,"-").concat(C));k=c(Hi(Hi({},j),{},{className:ti()(Ks(u,v),Zo(Zo({},E,E&&C),u,"string"===typeof u)),style:b}),S)}else k=null;e.isValidElement(k)&&Va(k)&&(Ya(k)||(k=e.cloneElement(k,{ref:S})));return e.createElement(Ts,{ref:m},k)}));return r.displayName="CSSMotion",r}(Ys);var dl="add",fl="keep",hl="remove",pl="removed";function ml(e){var t;return Hi(Hi({},t=e&&"object"===Xo(e)&&"key"in e?e:{key:e}),{},{key:String(t.key)})}function gl(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(ml)}var vl=["component","children","onVisibleChanged","onAllRemoved"],yl=["status"],bl=["eventProps","visible","children","motionName","motionAppear","motionEnter","motionLeave","motionLeaveImmediately","motionDeadline","removeOnLeave","leavedClassName","onAppearPrepare","onAppearStart","onAppearActive","onAppearEnd","onEnterStart","onEnterActive","onEnterEnd","onLeaveStart","onLeaveActive","onLeaveEnd"];!function(){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ul,n=function(n){ks(o,n);var r=Es(o);function o(){var e;ys(this,o);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return Zo(Cs(e=r.call.apply(r,[this].concat(n))),"state",{keyEntities:[]}),Zo(Cs(e),"removeKey",(function(t){e.setState((function(e){return{keyEntities:e.keyEntities.map((function(e){return e.key!==t?e:Hi(Hi({},e),{},{status:pl})}))}}),(function(){0===e.state.keyEntities.filter((function(e){return e.status!==pl})).length&&e.props.onAllRemoved&&e.props.onAllRemoved()}))})),e}return xs(o,[{key:"render",value:function(){var n=this,r=this.state.keyEntities,o=this.props,i=o.component,a=o.children,s=o.onVisibleChanged,l=(o.onAllRemoved,Jo(o,vl)),c=i||e.Fragment,u={};return bl.forEach((function(e){u[e]=l[e],delete l[e]})),delete l.keys,e.createElement(c,l,r.map((function(r,o){var i=r.status,l=Jo(r,yl),c=i===dl||i===fl;return e.createElement(t,Uo({},u,{key:l.key,visible:c,eventProps:l,onVisibleChanged:function(e){null===s||void 0===s||s(e,{key:l.key}),e||n.removeKey(l.key)}}),(function(e,t){return a(Hi(Hi({},e),{},{index:o}),t)}))})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.keys,r=t.keyEntities,o=gl(n),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[],r=0,o=t.length,i=gl(e),a=gl(t);i.forEach((function(e){for(var t=!1,i=r;i<o;i+=1){var s=a[i];if(s.key===e.key){r<i&&(n=n.concat(a.slice(r,i).map((function(e){return Hi(Hi({},e),{},{status:dl})}))),r=i),n.push(Hi(Hi({},s),{},{status:fl})),r+=1,t=!0;break}}t||n.push(Hi(Hi({},e),{},{status:hl}))})),r<o&&(n=n.concat(a.slice(r).map((function(e){return Hi(Hi({},e),{},{status:dl})}))));var s={};return n.forEach((function(e){var t=e.key;s[t]=(s[t]||0)+1})),Object.keys(s).filter((function(e){return s[e]>1})).forEach((function(e){(n=n.filter((function(t){var n=t.key,r=t.status;return n!==e||r!==hl}))).forEach((function(t){t.key===e&&(t.status=fl)}))})),n}(r,o);return{keyEntities:i.filter((function(e){var t=r.find((function(t){var n=t.key;return e.key===n}));return!t||t.status!==pl||e.status!==hl}))}}}]),o}(e.Component);Zo(n,"defaultProps",{component:"div"})}(Ys);const xl=ul,wl=e.memo((function(e){return e.children}),(function(e,t){return!t.shouldUpdate}));var kl={width:0,height:0,overflow:"hidden",outline:"none"},Sl={outline:"none"},jl=e.forwardRef((function(t,n){var r=t.prefixCls,o=t.className,i=t.style,a=t.title,s=t.ariaId,l=t.footer,c=t.closable,u=t.closeIcon,d=t.onClose,f=t.children,h=t.bodyStyle,p=t.bodyProps,m=t.modalRender,g=t.onMouseDown,v=t.onMouseUp,y=t.holderRef,b=t.visible,x=t.forceRender,w=t.width,k=t.height,S=t.classNames,j=t.styles,C=e.useContext(os).panel,E=Wa(y,C),T=(0,e.useRef)(),A=(0,e.useRef)();e.useImperativeHandle(n,(function(){return{focus:function(){var e;null===(e=T.current)||void 0===e||e.focus({preventScroll:!0})},changeActive:function(e){var t=document.activeElement;e&&t===A.current?T.current.focus({preventScroll:!0}):e||t!==T.current||A.current.focus({preventScroll:!0})}}}));var P={};void 0!==w&&(P.width=w),void 0!==k&&(P.height=k);var z=l?e.createElement("div",{className:ti()("".concat(r,"-footer"),null===S||void 0===S?void 0:S.footer),style:Hi({},null===j||void 0===j?void 0:j.footer)},l):null,O=a?e.createElement("div",{className:ti()("".concat(r,"-header"),null===S||void 0===S?void 0:S.header),style:Hi({},null===j||void 0===j?void 0:j.header)},e.createElement("div",{className:"".concat(r,"-title"),id:s},a)):null,M=(0,e.useMemo)((function(){return"object"===Xo(c)&&null!==c?c:c?{closeIcon:null!==u&&void 0!==u?u:e.createElement("span",{className:"".concat(r,"-close-x")})}:{}}),[c,u,r]),R=fs(M,!0),I="object"===Xo(c)&&c.disabled,$=c?e.createElement("button",Uo({type:"button",onClick:d,"aria-label":"Close"},R,{className:"".concat(r,"-close"),disabled:I}),M.closeIcon):null,L=e.createElement("div",{className:ti()("".concat(r,"-content"),null===S||void 0===S?void 0:S.content),style:null===j||void 0===j?void 0:j.content},$,O,e.createElement("div",Uo({className:ti()("".concat(r,"-body"),null===S||void 0===S?void 0:S.body),style:Hi(Hi({},h),null===j||void 0===j?void 0:j.body)},p),f),z);return e.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":a?s:null,"aria-modal":"true",ref:E,style:Hi(Hi({},i),P),className:ti()(r,o),onMouseDown:g,onMouseUp:v},e.createElement("div",{ref:T,tabIndex:0,style:Sl},e.createElement(wl,{shouldUpdate:b||x},m?m(L):L)),e.createElement("div",{tabIndex:0,ref:A,style:kl}))}));const Cl=jl;var El=e.forwardRef((function(t,n){var r=t.prefixCls,o=t.title,i=t.style,a=t.className,s=t.visible,l=t.forceRender,c=t.destroyOnClose,u=t.motionName,d=t.ariaId,f=t.onVisibleChanged,h=t.mousePosition,p=(0,e.useRef)(),m=Ko(e.useState(),2),g=m[0],v=m[1],y={};function b(){var e=function(e){var t=e.getBoundingClientRect(),n={left:t.left,top:t.top},r=e.ownerDocument,o=r.defaultView||r.parentWindow;return n.left+=ps(o),n.top+=ps(o,!0),n}(p.current);v(h&&(h.x||h.y)?"".concat(h.x-e.left,"px ").concat(h.y-e.top,"px"):"")}return g&&(y.transformOrigin=g),e.createElement(xl,{visible:s,onVisibleChanged:f,onAppearPrepare:b,onEnterPrepare:b,forceRender:l,motionName:u,removeOnLeave:c,ref:p},(function(s,l){var c=s.className,u=s.style;return e.createElement(Cl,Uo({},t,{ref:n,title:o,ariaId:d,prefixCls:r,holderRef:l,style:Hi(Hi(Hi({},u),i),y),className:ti()(a,c)}))}))}));El.displayName="Content";const Tl=El;const Al=function(t){var n=t.prefixCls,r=t.style,o=t.visible,i=t.maskProps,a=t.motionName,s=t.className;return e.createElement(xl,{key:"mask",visible:o,motionName:a,leavedClassName:"".concat(n,"-mask-hidden")},(function(t,o){var a=t.className,l=t.style;return e.createElement("div",Uo({ref:o,style:Hi(Hi({},l),r),className:ti()("".concat(n,"-mask"),a,s)},i))}))};const Pl=function(t){var n=t.prefixCls,r=void 0===n?"rc-dialog":n,o=t.zIndex,i=t.visible,a=void 0!==i&&i,s=t.keyboard,l=void 0===s||s,c=t.focusTriggerAfterClose,u=void 0===c||c,d=t.wrapStyle,f=t.wrapClassName,h=t.wrapProps,p=t.onClose,m=t.afterOpenChange,g=t.afterClose,v=t.transitionName,y=t.animation,b=t.closable,x=void 0===b||b,w=t.mask,k=void 0===w||w,S=t.maskTransitionName,j=t.maskAnimation,C=t.maskClosable,E=void 0===C||C,T=t.maskStyle,A=t.maskProps,P=t.rootClassName,z=t.classNames,O=t.styles;var M=(0,e.useRef)(),R=(0,e.useRef)(),I=(0,e.useRef)(),$=Ko(e.useState(a),2),L=$[0],N=$[1],_=ss();function D(e){null===p||void 0===p||p(e)}var F=(0,e.useRef)(!1),B=(0,e.useRef)(),H=null;E&&(H=function(e){F.current?F.current=!1:R.current===e.target&&D(e)}),(0,e.useEffect)((function(){a&&(N(!0),Vi(R.current,document.activeElement)||(M.current=document.activeElement))}),[a]),(0,e.useEffect)((function(){return function(){clearTimeout(B.current)}}),[]);var W=Hi(Hi(Hi({zIndex:o},d),null===O||void 0===O?void 0:O.wrapper),{},{display:L?null:"none"});return e.createElement("div",Uo({className:ti()("".concat(r,"-root"),P)},fs(t,{data:!0})),e.createElement(Al,{prefixCls:r,visible:k&&a,motionName:hs(r,S,j),style:Hi(Hi({zIndex:o},T),null===O||void 0===O?void 0:O.mask),maskProps:A,className:null===z||void 0===z?void 0:z.mask}),e.createElement("div",Uo({tabIndex:-1,onKeyDown:function(e){if(l&&e.keyCode===cs.ESC)return e.stopPropagation(),void D(e);a&&e.keyCode===cs.TAB&&I.current.changeActive(!e.shiftKey)},className:ti()("".concat(r,"-wrap"),f,null===z||void 0===z?void 0:z.wrapper),ref:R,onClick:H,style:W},h),e.createElement(Tl,Uo({},t,{onMouseDown:function(){clearTimeout(B.current),F.current=!0},onMouseUp:function(){B.current=setTimeout((function(){F.current=!1}))},ref:I,closable:x,ariaId:_,prefixCls:r,visible:a&&L,onClose:D,onVisibleChanged:function(e){if(e)!function(){var e;Vi(R.current,document.activeElement)||null===(e=I.current)||void 0===e||e.focus()}();else{if(N(!1),k&&M.current&&u){try{M.current.focus({preventScroll:!0})}catch(RA){}M.current=null}L&&(null===g||void 0===g||g())}null===m||void 0===m||m(e)},motionName:hs(r,v,y)}))))};var zl=function(t){var n=t.visible,r=t.getContainer,o=t.forceRender,i=t.destroyOnClose,a=void 0!==i&&i,s=t.afterClose,l=t.panelRef,c=Ko(e.useState(n),2),u=c[0],d=c[1],f=e.useMemo((function(){return{panel:l}}),[l]);return e.useEffect((function(){n&&d(!0)}),[n]),o||!a||u?e.createElement(os.Provider,{value:f},e.createElement(rs,{open:n||o||u,autoDestroy:!1,getContainer:r,autoLock:n||u},e.createElement(Pl,Uo({},t,{destroyOnClose:a,afterClose:function(){null===s||void 0===s||s(),d(!1)}})))):null};zl.displayName="Dialog";const Ol=zl;function Ml(e,t,n,r){var o=Ia.unstable_batchedUpdates?function(e){Ia.unstable_batchedUpdates(n,e)}:n;return null!==e&&void 0!==e&&e.addEventListener&&e.addEventListener(t,o,r),{remove:function(){null!==e&&void 0!==e&&e.removeEventListener&&e.removeEventListener(t,o,r)}}}var Rl=e.createContext(null);const Il=function(t){var n=t.visible,r=t.maskTransitionName,o=t.getContainer,i=t.prefixCls,a=t.rootClassName,s=t.icons,l=t.countRender,c=t.showSwitch,u=t.showProgress,d=t.current,f=t.transform,h=t.count,p=t.scale,m=t.minScale,g=t.maxScale,v=t.closeIcon,y=t.onActive,b=t.onClose,x=t.onZoomIn,w=t.onZoomOut,k=t.onRotateRight,S=t.onRotateLeft,j=t.onFlipX,C=t.onFlipY,E=t.onReset,T=t.toolbarRender,A=t.zIndex,P=t.image,z=(0,e.useContext)(Rl),O=s.rotateLeft,M=s.rotateRight,R=s.zoomIn,I=s.zoomOut,$=s.close,L=s.left,N=s.right,_=s.flipX,D=s.flipY,F="".concat(i,"-operations-operation");e.useEffect((function(){var e=function(e){e.keyCode===cs.ESC&&b()};return n&&window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);var B=function(e,t){e.preventDefault(),e.stopPropagation(),y(t)},H=e.useCallback((function(t){var n=t.type,r=t.disabled,o=t.onClick,a=t.icon;return e.createElement("div",{key:n,className:ti()(F,"".concat(i,"-operations-operation-").concat(n),Zo({},"".concat(i,"-operations-operation-disabled"),!!r)),onClick:o},a)}),[F,i]),W=c?H({icon:L,onClick:function(e){return B(e,-1)},type:"prev",disabled:0===d}):void 0,V=c?H({icon:N,onClick:function(e){return B(e,1)},type:"next",disabled:d===h-1}):void 0,U=H({icon:D,onClick:C,type:"flipY"}),Y=H({icon:_,onClick:j,type:"flipX"}),G=H({icon:O,onClick:S,type:"rotateLeft"}),q=H({icon:M,onClick:k,type:"rotateRight"}),K=H({icon:I,onClick:w,type:"zoomOut",disabled:p<=m}),X=H({icon:R,onClick:x,type:"zoomIn",disabled:p===g}),Q=e.createElement("div",{className:"".concat(i,"-operations")},U,Y,G,q,K,X);return e.createElement(xl,{visible:n,motionName:r},(function(t){var n=t.className,r=t.style;return e.createElement(rs,{open:!0,getContainer:null!==o&&void 0!==o?o:document.body},e.createElement("div",{className:ti()("".concat(i,"-operations-wrapper"),n,a),style:Hi(Hi({},r),{},{zIndex:A})},null===v?null:e.createElement("button",{className:"".concat(i,"-close"),onClick:b},v||$),c&&e.createElement(e.Fragment,null,e.createElement("div",{className:ti()("".concat(i,"-switch-left"),Zo({},"".concat(i,"-switch-left-disabled"),0===d)),onClick:function(e){return B(e,-1)}},L),e.createElement("div",{className:ti()("".concat(i,"-switch-right"),Zo({},"".concat(i,"-switch-right-disabled"),d===h-1)),onClick:function(e){return B(e,1)}},N)),e.createElement("div",{className:"".concat(i,"-footer")},u&&e.createElement("div",{className:"".concat(i,"-progress")},l?l(d+1,h):"".concat(d+1," / ").concat(h)),T?T(Q,Hi(Hi({icons:{prevIcon:W,nextIcon:V,flipYIcon:U,flipXIcon:Y,rotateLeftIcon:G,rotateRightIcon:q,zoomOutIcon:K,zoomInIcon:X},actions:{onActive:y,onFlipY:C,onFlipX:j,onRotateLeft:S,onRotateRight:k,onZoomOut:w,onZoomIn:x,onReset:E,onClose:b},transform:f},z?{current:d,total:h}:{}),{},{image:P})):Q)))}))};const $l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=new Set;return function e(t,o){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=r.has(t);if(ca(!a,"Warning: There may be circular references"),a)return!1;if(t===o)return!0;if(n&&i>1)return!1;r.add(t);var s=i+1;if(Array.isArray(t)){if(!Array.isArray(o)||t.length!==o.length)return!1;for(var l=0;l<t.length;l++)if(!e(t[l],o[l],s))return!1;return!0}if(t&&o&&"object"===Xo(t)&&"object"===Xo(o)){var c=Object.keys(t);return c.length===Object.keys(o).length&&c.every((function(n){return e(t[n],o[n],s)}))}return!1}(e,t)};var Ll={x:0,y:0,rotate:0,scale:1,flipX:!1,flipY:!1};function Nl(e,t,n,r){var o=t+n,i=(n-r)/2;if(n>r){if(t>0)return Zo({},e,i);if(t<0&&o<r)return Zo({},e,-i)}else if(t<0||o>r)return Zo({},e,t<0?i:-i);return{}}function _l(e,t,n,r){var o=Ca(),i=o.width,a=o.height,s=null;return e<=i&&t<=a?s={x:0,y:0}:(e>i||t>a)&&(s=Hi(Hi({},Nl("x",n,e,i)),Nl("y",r,t,a))),s}function Dl(t){var n=t.src,r=t.isCustomPlaceholder,o=t.fallback,i=Ko((0,e.useState)(r?"loading":"normal"),2),a=i[0],s=i[1],l=(0,e.useRef)(!1),c="error"===a;(0,e.useEffect)((function(){var e=!0;return function(e){return new Promise((function(t){var n=document.createElement("img");n.onerror=function(){return t(!1)},n.onload=function(){return t(!0)},n.src=e}))}(n).then((function(t){!t&&e&&s("error")})),function(){e=!1}}),[n]),(0,e.useEffect)((function(){r&&!l.current?s("loading"):c&&s("normal")}),[n]);var u=function(){s("normal")};return[function(e){l.current=!1,"loading"===a&&null!==e&&void 0!==e&&e.complete&&(e.naturalWidth||e.naturalHeight)&&(l.current=!0,u())},c&&o?{src:o}:{onLoad:u,src:n},a]}function Fl(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.hypot(n,r)}function Bl(t,n,r,o,i,a,s){var l=i.rotate,c=i.scale,u=i.x,d=i.y,f=Ko((0,e.useState)(!1),2),h=f[0],p=f[1],m=(0,e.useRef)({point1:{x:0,y:0},point2:{x:0,y:0},eventType:"none"}),g=function(e){m.current=Hi(Hi({},m.current),e)};return(0,e.useEffect)((function(){var e;return r&&n&&(e=Ml(window,"touchmove",(function(e){return e.preventDefault()}),{passive:!1})),function(){var t;null===(t=e)||void 0===t||t.remove()}}),[r,n]),{isTouching:h,onTouchStart:function(e){if(n){e.stopPropagation(),p(!0);var t=e.touches,r=void 0===t?[]:t;r.length>1?g({point1:{x:r[0].clientX,y:r[0].clientY},point2:{x:r[1].clientX,y:r[1].clientY},eventType:"touchZoom"}):g({point1:{x:r[0].clientX-u,y:r[0].clientY-d},eventType:"move"})}},onTouchMove:function(e){var t=e.touches,n=void 0===t?[]:t,r=m.current,o=r.point1,i=r.point2,l=r.eventType;if(n.length>1&&"touchZoom"===l){var c={x:n[0].clientX,y:n[0].clientY},u={x:n[1].clientX,y:n[1].clientY},d=function(e,t,n,r){var o=Fl(e,n),i=Fl(t,r);if(0===o&&0===i)return[e.x,e.y];var a=o/(o+i);return[e.x+a*(t.x-e.x),e.y+a*(t.y-e.y)]}(o,i,c,u),f=Ko(d,2),h=f[0],p=f[1],v=Fl(c,u)/Fl(o,i);s(v,"touchZoom",h,p,!0),g({point1:c,point2:u,eventType:"touchZoom"})}else"move"===l&&(a({x:n[0].clientX-o.x,y:n[0].clientY-o.y},"move"),g({eventType:"move"}))},onTouchEnd:function(){if(r){if(h&&p(!1),g({eventType:"none"}),o>c)return a({x:0,y:0,scale:o},"touchZoom");var e=t.current.offsetWidth*c,n=t.current.offsetHeight*c,i=t.current.getBoundingClientRect(),s=i.left,u=i.top,d=l%180!==0,f=_l(d?n:e,d?e:n,s,u);f&&a(Hi({},f),"dragRebound")}}}}var Hl=["fallback","src","imgRef"],Wl=["prefixCls","src","alt","imageInfo","fallback","movable","onClose","visible","icons","rootClassName","closeIcon","getContainer","current","count","countRender","scaleStep","minScale","maxScale","transitionName","maskTransitionName","imageRender","imgCommonProps","toolbarRender","onTransform","onChange"],Vl=function(t){var n=t.fallback,r=t.src,o=t.imgRef,i=Jo(t,Hl),a=Ko(Dl({src:r,fallback:n}),2),s=a[0],l=a[1];return e.createElement("img",Uo({ref:function(e){o.current=e,s(e)}},i,l))};const Ul=function(t){var n=t.prefixCls,r=t.src,o=t.alt,i=t.imageInfo,a=t.fallback,s=t.movable,l=void 0===s||s,c=t.onClose,u=t.visible,d=t.icons,f=void 0===d?{}:d,h=t.rootClassName,p=t.closeIcon,m=t.getContainer,g=t.current,v=void 0===g?0:g,y=t.count,b=void 0===y?1:y,x=t.countRender,w=t.scaleStep,k=void 0===w?.5:w,S=t.minScale,j=void 0===S?1:S,C=t.maxScale,E=void 0===C?50:C,T=t.transitionName,A=void 0===T?"zoom":T,P=t.maskTransitionName,z=void 0===P?"fade":P,O=t.imageRender,M=t.imgCommonProps,R=t.toolbarRender,I=t.onTransform,$=t.onChange,L=Jo(t,Wl),N=(0,e.useRef)(),_=(0,e.useContext)(Rl),D=_&&b>1,F=_&&b>=1,B=Ko((0,e.useState)(!0),2),H=B[0],W=B[1],V=function(t,n,r,o){var i=(0,e.useRef)(null),a=(0,e.useRef)([]),s=Ko((0,e.useState)(Ll),2),l=s[0],c=s[1],u=function(e,t){null===i.current&&(a.current=[],i.current=rl((function(){c((function(e){var n=e;return a.current.forEach((function(e){n=Hi(Hi({},n),e)})),i.current=null,null===o||void 0===o||o({transform:n,action:t}),n}))}))),a.current.push(Hi(Hi({},l),e))};return{transform:l,resetTransform:function(e){c(Ll),$l(Ll,l)||null===o||void 0===o||o({transform:Ll,action:e})},updateTransform:u,dispatchZoomChange:function(e,o,i,a,s){var c=t.current,d=c.width,f=c.height,h=c.offsetWidth,p=c.offsetHeight,m=c.offsetLeft,g=c.offsetTop,v=e,y=l.scale*e;y>r?(y=r,v=r/l.scale):y<n&&(v=(y=s?y:n)/l.scale);var b=null!==i&&void 0!==i?i:innerWidth/2,x=null!==a&&void 0!==a?a:innerHeight/2,w=v-1,k=w*d*.5,S=w*f*.5,j=w*(b-l.x-m),C=w*(x-l.y-g),E=l.x-(j-k),T=l.y-(C-S);if(e<1&&1===y){var A=h*y,P=p*y,z=Ca(),O=z.width,M=z.height;A<=O&&P<=M&&(E=0,T=0)}u({x:E,y:T,scale:y},o)}}}(N,j,E,I),U=V.transform,Y=V.resetTransform,G=V.updateTransform,q=V.dispatchZoomChange,K=function(t,n,r,o,i,a,s){var l=i.rotate,c=i.scale,u=i.x,d=i.y,f=Ko((0,e.useState)(!1),2),h=f[0],p=f[1],m=(0,e.useRef)({diffX:0,diffY:0,transformX:0,transformY:0}),g=function(e){r&&h&&a({x:e.pageX-m.current.diffX,y:e.pageY-m.current.diffY},"move")},v=function(){if(r&&h){p(!1);var e=m.current,n=e.transformX,o=e.transformY;if(u===n||d===o)return;var i=t.current.offsetWidth*c,s=t.current.offsetHeight*c,f=t.current.getBoundingClientRect(),g=f.left,v=f.top,y=l%180!==0,b=_l(y?s:i,y?i:s,g,v);b&&a(Hi({},b),"dragRebound")}};return(0,e.useEffect)((function(){var e,t,r,o;if(n){r=Ml(window,"mouseup",v,!1),o=Ml(window,"mousemove",g,!1);try{window.top!==window.self&&(e=Ml(window.top,"mouseup",v,!1),t=Ml(window.top,"mousemove",g,!1))}catch(i){"[rc-image] ".concat(i)}}return function(){var n,i,a,s;null===(n=r)||void 0===n||n.remove(),null===(i=o)||void 0===i||i.remove(),null===(a=e)||void 0===a||a.remove(),null===(s=t)||void 0===s||s.remove()}}),[r,h,u,d,l,n]),{isMoving:h,onMouseDown:function(e){n&&0===e.button&&(e.preventDefault(),e.stopPropagation(),m.current={diffX:e.pageX-u,diffY:e.pageY-d,transformX:u,transformY:d},p(!0))},onMouseMove:g,onMouseUp:v,onWheel:function(e){if(r&&0!=e.deltaY){var t=Math.abs(e.deltaY/100),n=1+Math.min(t,1)*o;e.deltaY>0&&(n=1/n),s(n,"wheel",e.clientX,e.clientY)}}}}(N,l,u,k,U,G,q),X=K.isMoving,Q=K.onMouseDown,Z=K.onWheel,J=Bl(N,l,u,j,U,G,q),ee=J.isTouching,te=J.onTouchStart,ne=J.onTouchMove,re=J.onTouchEnd,oe=U.rotate,ie=U.scale,ae=ti()(Zo({},"".concat(n,"-moving"),X));(0,e.useEffect)((function(){H||W(!0)}),[H]);var se=function(e){var t=v+e;!Number.isInteger(t)||t<0||t>b-1||(W(!1),Y(e<0?"prev":"next"),null===$||void 0===$||$(t,v))},le=function(e){u&&D&&(e.keyCode===cs.LEFT?se(-1):e.keyCode===cs.RIGHT&&se(1))};(0,e.useEffect)((function(){var e=Ml(window,"keydown",le,!1);return function(){e.remove()}}),[u,D,v]);var ce=e.createElement(Vl,Uo({},M,{width:t.width,height:t.height,imgRef:N,className:"".concat(n,"-img"),alt:o,style:{transform:"translate3d(".concat(U.x,"px, ").concat(U.y,"px, 0) scale3d(").concat(U.flipX?"-":"").concat(ie,", ").concat(U.flipY?"-":"").concat(ie,", 1) rotate(").concat(oe,"deg)"),transitionDuration:(!H||ee)&&"0s"},fallback:a,src:r,onWheel:Z,onMouseDown:Q,onDoubleClick:function(e){u&&(1!==ie?G({x:0,y:0,scale:1},"doubleClick"):q(1+k,"doubleClick",e.clientX,e.clientY))},onTouchStart:te,onTouchMove:ne,onTouchEnd:re,onTouchCancel:re})),ue=Hi({url:r,alt:o},i);return e.createElement(e.Fragment,null,e.createElement(Ol,Uo({transitionName:A,maskTransitionName:z,closable:!1,keyboard:!0,prefixCls:n,onClose:c,visible:u,classNames:{wrapper:ae},rootClassName:h,getContainer:m},L,{afterClose:function(){Y("close")}}),e.createElement("div",{className:"".concat(n,"-img-wrapper")},O?O(ce,Hi({transform:U,image:ue},_?{current:v}:{})):ce)),e.createElement(Il,{visible:u,transform:U,maskTransitionName:z,closeIcon:p,getContainer:m,prefixCls:n,rootClassName:h,icons:f,countRender:x,showSwitch:D,showProgress:F,current:v,count:b,scale:ie,minScale:j,maxScale:E,toolbarRender:R,onActive:se,onZoomIn:function(){q(1+k,"zoomIn")},onZoomOut:function(){q(1/(1+k),"zoomOut")},onRotateRight:function(){G({rotate:oe+90},"rotateRight")},onRotateLeft:function(){G({rotate:oe-90},"rotateLeft")},onFlipX:function(){G({flipX:!U.flipX},"flipX")},onFlipY:function(){G({flipY:!U.flipY},"flipY")},onClose:c,onReset:function(){Y("reset")},zIndex:void 0!==L.zIndex?L.zIndex+1:void 0,image:ue}))};var Yl=["crossOrigin","decoding","draggable","loading","referrerPolicy","sizes","srcSet","useMap","alt"];var Gl=["visible","onVisibleChange","getContainer","current","movable","minScale","maxScale","countRender","closeIcon","onChange","onTransform","toolbarRender","imageRender"],ql=["src"];const Kl=function(t){var n,r=t.previewPrefixCls,o=void 0===r?"rc-image-preview":r,i=t.children,a=t.icons,s=void 0===a?{}:a,l=t.items,c=t.preview,u=t.fallback,d="object"===Xo(c)?c:{},f=d.visible,h=d.onVisibleChange,p=d.getContainer,m=d.current,g=d.movable,v=d.minScale,y=d.maxScale,b=d.countRender,x=d.closeIcon,w=d.onChange,k=d.onTransform,S=d.toolbarRender,j=d.imageRender,C=Jo(d,Gl),E=function(t){var n=Ko(e.useState({}),2),r=n[0],o=n[1],i=e.useCallback((function(e,t){return o((function(n){return Hi(Hi({},n),{},Zo({},e,t))})),function(){o((function(t){var n=Hi({},t);return delete n[e],n}))}}),[]),a=e.useMemo((function(){return t?t.map((function(e){if("string"===typeof e)return{data:{src:e}};var t={};return Object.keys(e).forEach((function(n){["src"].concat(qa(Yl)).includes(n)&&(t[n]=e[n])})),{data:t}})):Object.keys(r).reduce((function(e,t){var n=r[t],o=n.canPreview,i=n.data;return o&&e.push({data:i,id:t}),e}),[])}),[t,r]);return[a,i,!!t]}(l),T=Ko(E,3),A=T[0],P=T[1],z=T[2],O=Ko(Ra(0,{value:m}),2),M=O[0],R=O[1],I=Ko((0,e.useState)(!1),2),$=I[0],L=I[1],N=(null===(n=A[M])||void 0===n?void 0:n.data)||{},_=N.src,D=Jo(N,ql),F=Ko(Ra(!!f,{value:f,onChange:function(e,t){null===h||void 0===h||h(e,t,M)}}),2),B=F[0],H=F[1],W=Ko((0,e.useState)(null),2),V=W[0],U=W[1],Y=e.useCallback((function(e,t,n,r){var o=z?A.findIndex((function(e){return e.data.src===t})):A.findIndex((function(t){return t.id===e}));R(o<0?0:o),H(!0),U({x:n,y:r}),L(!0)}),[A,z]);e.useEffect((function(){B?$||R(0):L(!1)}),[B]);var G=e.useMemo((function(){return{register:P,onPreview:Y}}),[P,Y]);return e.createElement(Rl.Provider,{value:G},i,e.createElement(Ul,Uo({"aria-hidden":!B,movable:g,visible:B,prefixCls:o,closeIcon:x,onClose:function(){H(!1),U(null)},mousePosition:V,imgCommonProps:D,src:_,fallback:u,icons:s,minScale:v,maxScale:y,getContainer:p,current:M,count:A.length,countRender:b,onTransform:k,toolbarRender:S,imageRender:j,onChange:function(e,t){R(e),null===w||void 0===w||w(e,t)}},C)))};var Xl=0;var Ql=["src","alt","onPreviewClose","prefixCls","previewPrefixCls","placeholder","fallback","width","height","style","preview","className","onClick","onError","wrapperClassName","wrapperStyle","rootClassName"],Zl=["src","visible","onVisibleChange","getContainer","mask","maskClassName","movable","icons","scaleStep","minScale","maxScale","imageRender","toolbarRender"],Jl=function(t){var n=t.src,r=t.alt,o=t.onPreviewClose,i=t.prefixCls,a=void 0===i?"rc-image":i,s=t.previewPrefixCls,l=void 0===s?"".concat(a,"-preview"):s,c=t.placeholder,u=t.fallback,d=t.width,f=t.height,h=t.style,p=t.preview,m=void 0===p||p,g=t.className,v=t.onClick,y=t.onError,b=t.wrapperClassName,x=t.wrapperStyle,w=t.rootClassName,k=Jo(t,Ql),S=c&&!0!==c,j="object"===Xo(m)?m:{},C=j.src,E=j.visible,T=void 0===E?void 0:E,A=j.onVisibleChange,P=void 0===A?o:A,z=j.getContainer,O=void 0===z?void 0:z,M=j.mask,R=j.maskClassName,I=j.movable,$=j.icons,L=j.scaleStep,N=j.minScale,_=j.maxScale,D=j.imageRender,F=j.toolbarRender,B=Jo(j,Zl),H=null!==C&&void 0!==C?C:n,W=Ko(Ra(!!T,{value:T,onChange:P}),2),V=W[0],U=W[1],Y=Ko(Dl({src:n,isCustomPlaceholder:S,fallback:u}),3),G=Y[0],q=Y[1],K=Y[2],X=Ko((0,e.useState)(null),2),Q=X[0],Z=X[1],J=(0,e.useContext)(Rl),ee=!!m,te=ti()(a,b,w,Zo({},"".concat(a,"-error"),"error"===K)),ne=(0,e.useMemo)((function(){var e={};return Yl.forEach((function(n){void 0!==t[n]&&(e[n]=t[n])})),e}),Yl.map((function(e){return t[e]}))),re=function(t,n){var r=Ko(e.useState((function(){return String(Xl+=1)})),1)[0],o=e.useContext(Rl),i={data:n,canPreview:t};return e.useEffect((function(){if(o)return o.register(r,i)}),[]),e.useEffect((function(){o&&o.register(r,i)}),[t,n]),r}(ee,(0,e.useMemo)((function(){return Hi(Hi({},ne),{},{src:H})}),[H,ne]));return e.createElement(e.Fragment,null,e.createElement("div",Uo({},k,{className:te,onClick:ee?function(e){var t=function(e){var t=e.getBoundingClientRect(),n=document.documentElement;return{left:t.left+(window.pageXOffset||n.scrollLeft)-(n.clientLeft||document.body.clientLeft||0),top:t.top+(window.pageYOffset||n.scrollTop)-(n.clientTop||document.body.clientTop||0)}}(e.target),n=t.left,r=t.top;J?J.onPreview(re,H,n,r):(Z({x:n,y:r}),U(!0)),null===v||void 0===v||v(e)}:v,style:Hi({width:d,height:f},x)}),e.createElement("img",Uo({},ne,{className:ti()("".concat(a,"-img"),Zo({},"".concat(a,"-img-placeholder"),!0===c),g),style:Hi({height:f},h),ref:G},q,{width:d,height:f,onError:y})),"loading"===K&&e.createElement("div",{"aria-hidden":"true",className:"".concat(a,"-placeholder")},c),M&&ee&&e.createElement("div",{className:ti()("".concat(a,"-mask"),R),style:{display:"none"===(null===h||void 0===h?void 0:h.display)?"none":void 0}},M)),!J&&ee&&e.createElement(Ul,Uo({"aria-hidden":!V,visible:V,prefixCls:l,onClose:function(){U(!1),Z(null)},mousePosition:Q,src:H,alt:r,imageInfo:{width:d,height:f},fallback:u,getContainer:O,icons:$,movable:I,scaleStep:L,minScale:N,maxScale:_,rootClassName:w,imageRender:D,imgCommonProps:ne,toolbarRender:F},B)))};Jl.PreviewGroup=Kl;const ec=Jl;const tc=function(e){for(var t,n=0,r=0,o=e.length;o>=4;++r,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(o){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)};function nc(e){return e.join("%")}var rc=function(){function e(t){ys(this,e),Zo(this,"instanceId",void 0),Zo(this,"cache",new Map),this.instanceId=t}return xs(e,[{key:"get",value:function(e){return this.opGet(nc(e))}},{key:"opGet",value:function(e){return this.cache.get(e)||null}},{key:"update",value:function(e,t){return this.opUpdate(nc(e),t)}},{key:"opUpdate",value:function(e,t){var n=t(this.cache.get(e));null===n?this.cache.delete(e):this.cache.set(e,n)}}]),e}();const oc=rc;var ic="data-token-hash",ac="data-css-hash",sc="__cssinjs_instance__";function lc(){var e=Math.random().toString(12).slice(2);if("undefined"!==typeof document&&document.head&&document.body){var t=document.body.querySelectorAll("style[".concat(ac,"]"))||[],n=document.head.firstChild;Array.from(t).forEach((function(t){t[sc]=t[sc]||e,t[sc]===e&&document.head.insertBefore(t,n)}));var r={};Array.from(document.querySelectorAll("style[".concat(ac,"]"))).forEach((function(t){var n,o=t.getAttribute(ac);r[o]?t[sc]===e&&(null===(n=t.parentNode)||void 0===n||n.removeChild(t)):r[o]=!0}))}return new oc(e)}var cc=e.createContext({hashPriority:"low",cache:lc(),defaultCache:!0});const uc=cc;var dc="CALC_UNIT";new RegExp(dc,"g");var fc=function(){function e(){ys(this,e),Zo(this,"cache",void 0),Zo(this,"keys",void 0),Zo(this,"cacheCallTimes",void 0),this.cache=new Map,this.keys=[],this.cacheCallTimes=0}return xs(e,[{key:"size",value:function(){return this.keys.length}},{key:"internalGet",value:function(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o={map:this.cache};return e.forEach((function(e){var t;o?o=null===(t=o)||void 0===t||null===(t=t.map)||void 0===t?void 0:t.get(e):o=void 0})),null!==(t=o)&&void 0!==t&&t.value&&r&&(o.value[1]=this.cacheCallTimes++),null===(n=o)||void 0===n?void 0:n.value}},{key:"get",value:function(e){var t;return null===(t=this.internalGet(e,!0))||void 0===t?void 0:t[0]}},{key:"has",value:function(e){return!!this.internalGet(e)}},{key:"set",value:function(t,n){var r=this;if(!this.has(t)){if(this.size()+1>e.MAX_CACHE_SIZE+e.MAX_CACHE_OFFSET){var o=this.keys.reduce((function(e,t){var n=Ko(e,2)[1];return r.internalGet(t)[1]<n?[t,r.internalGet(t)[1]]:e}),[this.keys[0],this.cacheCallTimes]),i=Ko(o,1)[0];this.delete(i)}this.keys.push(t)}var a=this.cache;t.forEach((function(e,o){if(o===t.length-1)a.set(e,{value:[n,r.cacheCallTimes++]});else{var i=a.get(e);i?i.map||(i.map=new Map):a.set(e,{map:new Map}),a=a.get(e).map}}))}},{key:"deleteByPath",value:function(e,t){var n,r=e.get(t[0]);if(1===t.length)return r.map?e.set(t[0],{map:r.map}):e.delete(t[0]),null===(n=r.value)||void 0===n?void 0:n[0];var o=this.deleteByPath(r.map,t.slice(1));return r.map&&0!==r.map.size||r.value||e.delete(t[0]),o}},{key:"delete",value:function(e){if(this.has(e))return this.keys=this.keys.filter((function(t){return!function(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,e)})),this.deleteByPath(this.cache,e)}}]),e}();Zo(fc,"MAX_CACHE_SIZE",20),Zo(fc,"MAX_CACHE_OFFSET",5);var hc=0,pc=function(){function e(t){ys(this,e),Zo(this,"derivatives",void 0),Zo(this,"id",void 0),this.derivatives=Array.isArray(t)?t:[t],this.id=hc,0===t.length&&t.length,hc+=1}return xs(e,[{key:"getDerivativeToken",value:function(e){return this.derivatives.reduce((function(t,n){return n(e,t)}),void 0)}}]),e}(),mc=new fc;var gc=new WeakMap,vc={};var yc=new WeakMap;function bc(e){var t=yc.get(e)||"";return t||(Object.keys(e).forEach((function(n){var r=e[n];t+=n,r instanceof pc?t+=r.id:r&&"object"===Xo(r)?t+=bc(r):t+=r})),t=tc(t),yc.set(e,t)),t}function xc(e,t){return tc("".concat(t,"_").concat(bc(e)))}"random-".concat(Date.now(),"-").concat(Math.random()).replace(/\./g,"");var wc=Wi();function kc(e){return"number"===typeof e?"".concat(e,"px"):e}function Sc(e,t,n){var r;if(arguments.length>4&&void 0!==arguments[4]&&arguments[4])return e;var o=Hi(Hi({},arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}),{},(Zo(r={},ic,t),Zo(r,ac,n),r)),i=Object.keys(o).map((function(e){var t=o[e];return t?"".concat(e,'="').concat(t,'"'):null})).filter((function(e){return e})).join(" ");return"<style ".concat(i,">").concat(e,"</style>")}var jc=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"--".concat(t?"".concat(t,"-"):"").concat(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g,"$1-$2").replace(/([a-z])([A-Z0-9])/g,"$1-$2").toLowerCase()},Cc=function(e,t,n){return Object.keys(e).length?".".concat(t).concat(null!==n&&void 0!==n&&n.scope?".".concat(n.scope):"","{").concat(Object.entries(e).map((function(e){var t=Ko(e,2),n=t[0],r=t[1];return"".concat(n,":").concat(r,";")})).join(""),"}"):""},Ec=function(e,t,n){var r={},o={};return Object.entries(e).forEach((function(e){var t,i,a=Ko(e,2),s=a[0],l=a[1];if(null!==n&&void 0!==n&&null!==(t=n.preserve)&&void 0!==t&&t[s])o[s]=l;else if(("string"===typeof l||"number"===typeof l)&&(null===n||void 0===n||null===(i=n.ignore)||void 0===i||!i[s])){var c,u=jc(s,null===n||void 0===n?void 0:n.prefix);r[u]="number"!==typeof l||null!==n&&void 0!==n&&null!==(c=n.unitless)&&void 0!==c&&c[s]?String(l):"".concat(l,"px"),o[s]="var(".concat(u,")")}})),[o,Cc(r,t,{scope:null===n||void 0===n?void 0:n.scope})]},Tc=Hi({},t).useInsertionEffect;const Ac=Tc?function(e,t,n){return Tc((function(){return e(),t()}),n)}:function(t,n,r){e.useMemo(t,r),za((function(){return n(!0)}),r)};const Pc="undefined"!==typeof Hi({},t).useInsertionEffect?function(t){var n=[],r=!1;return e.useEffect((function(){return r=!1,function(){r=!0,n.length&&n.forEach((function(e){return e()}))}}),t),function(e){r||n.push(e)}}:function(){return function(e){e()}};const zc=function(){return!1};function Oc(t,n,r,o,i){var a=e.useContext(uc).cache,s=nc([t].concat(qa(n))),l=Pc([s]),c=(zc(),function(e){a.opUpdate(s,(function(t){var n=Ko(t||[void 0,void 0],2),o=n[0];var i=[void 0===o?0:o,n[1]||r()];return e?e(i):i}))});e.useMemo((function(){c()}),[s]);var u=a.opGet(s)[1];return Ac((function(){null===i||void 0===i||i(u)}),(function(e){return c((function(t){var n=Ko(t,2),r=n[0],o=n[1];return e&&0===r&&(null===i||void 0===i||i(u)),[r+1,o]})),function(){a.opUpdate(s,(function(t){var n=Ko(t||[],2),r=n[0],i=void 0===r?0:r,c=n[1];return 0===i-1?(l((function(){!e&&a.opGet(s)||null===o||void 0===o||o(c,!1)})),null):[i-1,c]}))}}),[s]),u}var Mc={},Rc=new Map;function Ic(e,t){Rc.set(e,(Rc.get(e)||0)-1);var n=Array.from(Rc.keys()),r=n.filter((function(e){return(Rc.get(e)||0)<=0}));n.length-r.length>0&&r.forEach((function(e){!function(e,t){"undefined"!==typeof document&&document.querySelectorAll("style[".concat(ic,'="').concat(e,'"]')).forEach((function(e){var n;e[sc]===t&&(null===(n=e.parentNode)||void 0===n||n.removeChild(e))}))}(e,t),Rc.delete(e)}))}var $c="token";function Lc(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=(0,e.useContext)(uc),i=o.cache.instanceId,a=o.container,s=r.salt,l=void 0===s?"":s,c=r.override,u=void 0===c?Mc:c,d=r.formatToken,f=r.getComputedToken,h=r.cssVar,p=function(e,t){for(var n=gc,r=0;r<t.length;r+=1){var o=t[r];n.has(o)||n.set(o,new WeakMap),n=n.get(o)}return n.has(vc)||n.set(vc,e()),n.get(vc)}((function(){return Object.assign.apply(Object,[{}].concat(qa(n)))}),n),m=bc(p),g=bc(u),v=h?bc(h):"",y=Oc($c,[l,t.id,m,g,v],(function(){var e,n=f?f(p,u,t):function(e,t,n,r){var o=Hi(Hi({},n.getDerivativeToken(e)),t);return r&&(o=r(o)),o}(p,u,t,d),r=Hi({},n),o="";if(h){var i=Ko(Ec(n,h.key,{prefix:h.prefix,ignore:h.ignore,unitless:h.unitless,preserve:h.preserve}),2);n=i[0],o=i[1]}var a=xc(n,l);n._tokenKey=a,r._tokenKey=xc(r,l);var s=null!==(e=null===h||void 0===h?void 0:h.key)&&void 0!==e?e:a;n._themeKey=s,function(e){Rc.set(e,(Rc.get(e)||0)+1)}(s);var c="".concat("css","-").concat(tc(a));return n._hashId=c,[n,c,r,o,(null===h||void 0===h?void 0:h.key)||""]}),(function(e){Ic(e[0]._themeKey,i)}),(function(e){var t=Ko(e,4),n=t[0],r=t[3];if(h&&r){var o=ea(r,tc("css-variables-".concat(n._themeKey)),{mark:ac,prepend:"queue",attachTo:a,priority:-999});o[sc]=i,o.setAttribute(ic,n._themeKey)}}));return y}const Nc={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var _c="comm",Dc="rule",Fc="decl",Bc=Math.abs,Hc=String.fromCharCode;Object.assign;function Wc(e){return e.trim()}function Vc(e,t,n){return e.replace(t,n)}function Uc(e,t,n){return e.indexOf(t,n)}function Yc(e,t){return 0|e.charCodeAt(t)}function Gc(e,t,n){return e.slice(t,n)}function qc(e){return e.length}function Kc(e,t){return t.push(e),e}function Xc(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Qc(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case Fc:return e.return=e.return||e.value;case _c:return"";case"@keyframes":return e.return=e.value+"{"+Xc(e.children,r)+"}";case Dc:if(!qc(e.value=e.props.join(",")))return""}return qc(n=Xc(e.children,r))?e.return=e.value+"{"+n+"}":""}var Zc=1,Jc=1,eu=0,tu=0,nu=0,ru="";function ou(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Zc,column:Jc,length:a,return:"",siblings:s}}function iu(){return nu=tu<eu?Yc(ru,tu++):0,Jc++,10===nu&&(Jc=1,Zc++),nu}function au(){return Yc(ru,tu)}function su(){return tu}function lu(e,t){return Gc(ru,e,t)}function cu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function uu(e){return Zc=Jc=1,eu=qc(ru=e),tu=0,[]}function du(e){return ru="",e}function fu(e){return Wc(lu(tu-1,mu(91===e?e+2:40===e?e+1:e)))}function hu(e){for(;(nu=au())&&nu<33;)iu();return cu(e)>2||cu(nu)>3?"":" "}function pu(e,t){for(;--t&&iu()&&!(nu<48||nu>102||nu>57&&nu<65||nu>70&&nu<97););return lu(e,su()+(t<6&&32==au()&&32==iu()))}function mu(e){for(;iu();)switch(nu){case e:return tu;case 34:case 39:34!==e&&39!==e&&mu(nu);break;case 40:41===e&&mu(e);break;case 92:iu()}return tu}function gu(e,t){for(;iu()&&e+nu!==57&&(e+nu!==84||47!==au()););return"/*"+lu(t,tu-1)+"*"+Hc(47===e?e:iu())}function vu(e){for(;!cu(au());)iu();return lu(e,tu)}function yu(e){return du(bu("",null,null,null,[""],e=uu(e),0,[0],e))}function bu(e,t,n,r,o,i,a,s,l){for(var c=0,u=0,d=a,f=0,h=0,p=0,m=1,g=1,v=1,y=0,b="",x=o,w=i,k=r,S=b;g;)switch(p=y,y=iu()){case 40:if(108!=p&&58==Yc(S,d-1)){-1!=Uc(S+=Vc(fu(y),"&","&\f"),"&\f",Bc(c?s[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:S+=fu(y);break;case 9:case 10:case 13:case 32:S+=hu(p);break;case 92:S+=pu(su()-1,7);continue;case 47:switch(au()){case 42:case 47:Kc(wu(gu(iu(),su()),t,n,l),l),5!=cu(p||1)&&5!=cu(au()||1)||!qc(S)||" "===Gc(S,-1,void 0)||(S+=" ");break;default:S+="/"}break;case 123*m:s[c++]=qc(S)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==v&&(S=Vc(S,/\f/g,"")),h>0&&(qc(S)-d||0===m&&47===p)&&Kc(h>32?ku(S+";",r,n,d-1,l):ku(Vc(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(Kc(k=xu(S,t,n,c,u,o,s,b,x=[],w=[],d,i),i),123===y)if(0===u)bu(S,t,k,k,x,i,d,s,w);else{switch(f){case 99:if(110===Yc(S,3))break;case 108:if(97===Yc(S,2))break;default:u=0;case 100:case 109:case 115:}u?bu(e,k,k,r&&Kc(xu(e,k,k,0,0,o,s,b,o,x=[],d,w),w),o,w,d,s,r?x:w):bu(S,k,k,k,[""],w,0,s,w)}}c=u=h=0,m=v=1,b=S="",d=a;break;case 58:d=1+qc(S),h=p;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==(nu=tu>0?Yc(ru,--tu):0,Jc--,10===nu&&(Jc=1,Zc--),nu))continue;switch(S+=Hc(y),y*m){case 38:v=u>0?1:(S+="\f",-1);break;case 44:s[c++]=(qc(S)-1)*v,v=1;break;case 64:45===au()&&(S+=fu(iu())),f=au(),u=d=qc(b=S+=vu(su())),y++;break;case 45:45===p&&2==qc(S)&&(m=0)}}return i}function xu(e,t,n,r,o,i,a,s,l,c,u,d){for(var f=o-1,h=0===o?i:[""],p=function(e){return e.length}(h),m=0,g=0,v=0;m<r;++m)for(var y=0,b=Gc(e,f+1,f=Bc(g=a[m])),x=e;y<p;++y)(x=Wc(g>0?h[y]+" "+b:Vc(b,/&\f/g,h[y])))&&(l[v++]=x);return ou(e,t,n,0===o?Dc:s,l,c,u,d)}function wu(e,t,n,r){return ou(e,t,n,_c,Hc(nu),Gc(e,2,-2),0,r)}function ku(e,t,n,r,o){return ou(e,t,n,Fc,Gc(e,0,r),Gc(e,r+1,-1),r,o)}var Su,ju="data-ant-cssinjs-cache-path",Cu="_FILE_STYLE__";var Eu=!0;function Tu(e){return function(){if(!Su&&(Su={},Wi())){var e=document.createElement("div");e.className=ju,e.style.position="fixed",e.style.visibility="hidden",e.style.top="-9999px",document.body.appendChild(e);var t=getComputedStyle(e).content||"";(t=t.replace(/^"/,"").replace(/"$/,"")).split(";").forEach((function(e){var t=Ko(e.split(":"),2),n=t[0],r=t[1];Su[n]=r}));var n,r=document.querySelector("style[".concat(ju,"]"));r&&(Eu=!1,null===(n=r.parentNode)||void 0===n||n.removeChild(r)),document.body.removeChild(e)}}(),!!Su[e]}var Au="_multi_value_";function Pu(e){return Xc(yu(e),Qc).replace(/\{%%%\:[^;];}/g,";")}function zu(e,t,n){if(!t)return e;var r=".".concat(t),o="low"===n?":where(".concat(r,")"):r,i=e.split(",").map((function(e){var t,n=e.trim().split(/\s+/),r=n[0]||"",i=(null===(t=r.match(/^\w+/))||void 0===t?void 0:t[0])||"";return[r="".concat(i).concat(o).concat(r.slice(i.length))].concat(qa(n.slice(1))).join(" ")}));return i.join(",")}var Ou=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{root:!0,parentSelectors:[]},o=r.root,i=r.injectHash,a=r.parentSelectors,s=n.hashId,l=n.layer,c=(n.path,n.hashPriority),u=n.transformers,d=void 0===u?[]:u,f=(n.linters,""),h={};function p(t){var r=t.getName(s);if(!h[r]){var o=Ko(e(t.style,n,{root:!1,parentSelectors:a}),1)[0];h[r]="@keyframes ".concat(t.getName(s)).concat(o)}}var m=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.forEach((function(t){Array.isArray(t)?e(t,n):t&&n.push(t)})),n}(Array.isArray(t)?t:[t]);return m.forEach((function(t){var r="string"!==typeof t||o?t:{};if("string"===typeof r)f+="".concat(r,"\n");else if(r._keyframe)p(r);else{var l=d.reduce((function(e,t){var n;return(null===t||void 0===t||null===(n=t.visit)||void 0===n?void 0:n.call(t,e))||e}),r);Object.keys(l).forEach((function(t){var r=l[t];if("object"!==Xo(r)||!r||"animationName"===t&&r._keyframe||function(e){return"object"===Xo(e)&&e&&("_skip_check_"in e||Au in e)}(r)){var u;function w(e,t){var n=e.replace(/[A-Z]/g,(function(e){return"-".concat(e.toLowerCase())})),r=t;Nc[e]||"number"!==typeof r||0===r||(r="".concat(r,"px")),"animationName"===e&&null!==t&&void 0!==t&&t._keyframe&&(p(t),r=t.getName(s)),f+="".concat(n,":").concat(r,";")}var d=null!==(u=null===r||void 0===r?void 0:r.value)&&void 0!==u?u:r;"object"===Xo(r)&&null!==r&&void 0!==r&&r[Au]&&Array.isArray(d)?d.forEach((function(e){w(t,e)})):w(t,d)}else{var m=!1,g=t.trim(),v=!1;(o||i)&&s?g.startsWith("@")?m=!0:g=zu("&"===g?"":t,s,c):!o||s||"&"!==g&&""!==g||(g="",v=!0);var y=Ko(e(r,n,{root:v,injectHash:m,parentSelectors:[].concat(qa(a),[g])}),2),b=y[0],x=y[1];h=Hi(Hi({},h),x),f+="".concat(g).concat(b)}}))}})),o?l&&(f&&(f="@layer ".concat(l.name," {").concat(f,"}")),l.dependencies&&(h["@layer ".concat(l.name)]=l.dependencies.map((function(e){return"@layer ".concat(e,", ").concat(l.name,";")})).join("\n"))):f="{".concat(f,"}"),[f,h]};function Mu(e,t){return tc("".concat(e.join("%")).concat(t))}function Ru(){return null}var Iu="style";function $u(t,n){var r=t.token,o=t.path,i=t.hashId,a=t.layer,s=t.nonce,l=t.clientOnly,c=t.order,u=void 0===c?0:c,d=e.useContext(uc),f=d.autoClear,h=(d.mock,d.defaultCache),p=d.hashPriority,m=d.container,g=d.ssrInline,v=d.transformers,y=d.linters,b=d.cache,x=d.layer,w=r._tokenKey,k=[w];x&&k.push("layer"),k.push.apply(k,qa(o));var S=wc;var j=Oc(Iu,k,(function(){var e=k.join("|");if(Tu(e)){var t=function(e){var t=Su[e],n=null;if(t&&Wi())if(Eu)n=Cu;else{var r=document.querySelector("style[".concat(ac,'="').concat(Su[e],'"]'));r?n=r.innerHTML:delete Su[e]}return[n,t]}(e),r=Ko(t,2),s=r[0],c=r[1];if(s)return[s,w,c,{},l,u]}var d=n(),f=Ko(Ou(d,{hashId:i,hashPriority:p,layer:x?a:void 0,path:o.join("-"),transformers:v,linters:y}),2),h=f[0],m=f[1],g=Pu(h),b=Mu(k,g);return[g,w,b,m,l,u]}),(function(e,t){var n=Ko(e,3)[2];(t||f)&&wc&&Ji(n,{mark:ac})}),(function(e){var t=Ko(e,4),n=t[0],r=(t[1],t[2]),o=t[3];if(S&&n!==Cu){var i={mark:ac,prepend:!x&&"queue",attachTo:m,priority:u},a="function"===typeof s?s():s;a&&(i.csp={nonce:a});var l=[],c=[];Object.keys(o).forEach((function(e){e.startsWith("@layer")?l.push(e):c.push(e)})),l.forEach((function(e){ea(Pu(o[e]),"_layer-".concat(e),Hi(Hi({},i),{},{prepend:!0}))}));var d=ea(n,r,i);d[sc]=b.instanceId,d.setAttribute(ic,w),c.forEach((function(e){ea(Pu(o[e]),"_effect-".concat(e),i)}))}})),C=Ko(j,3),E=C[0],T=C[1],A=C[2];return function(t){var n,r;g&&!S&&h?n=e.createElement("style",Uo({},(Zo(r={},ic,T),Zo(r,ac,A),r),{dangerouslySetInnerHTML:{__html:E}})):n=e.createElement(Ru,null);return e.createElement(e.Fragment,null,n,t)}}var Lu="cssVar";const Nu=function(t,n){var r=t.key,o=t.prefix,i=t.unitless,a=t.ignore,s=t.token,l=t.scope,c=void 0===l?"":l,u=(0,e.useContext)(uc),d=u.cache.instanceId,f=u.container,h=s._tokenKey,p=[].concat(qa(t.path),[r,c,h]),m=Oc(Lu,p,(function(){var e=n(),t=Ko(Ec(e,r,{prefix:o,unitless:i,ignore:a,scope:c}),2),s=t[0],l=t[1];return[s,l,Mu(p,l),r]}),(function(e){var t=Ko(e,3)[2];wc&&Ji(t,{mark:ac})}),(function(e){var t=Ko(e,3),n=t[1],o=t[2];if(n){var i=ea(n,o,{mark:ac,prepend:"queue",attachTo:f,priority:-999});i[sc]=d,i.setAttribute(ic,r)}}));return m};var _u;Zo(_u={},Iu,(function(e,t,n){var r=Ko(e,6),o=r[0],i=r[1],a=r[2],s=r[3],l=r[4],c=r[5],u=(n||{}).plain;if(l)return null;var d=o,f={"data-rc-order":"prependQueue","data-rc-priority":"".concat(c)};return d=Sc(o,i,a,f,u),s&&Object.keys(s).forEach((function(e){if(!t[e]){t[e]=!0;var n=Sc(Pu(s[e]),i,"_effect-".concat(e),f,u);e.startsWith("@layer")?d=n+d:d+=n}})),[c,a,d]})),Zo(_u,$c,(function(e,t,n){var r=Ko(e,5),o=r[2],i=r[3],a=r[4],s=(n||{}).plain;if(!i)return null;var l=o._tokenKey;return[-999,l,Sc(i,a,l,{"data-rc-order":"prependQueue","data-rc-priority":"".concat(-999)},s)]})),Zo(_u,Lu,(function(e,t,n){var r=Ko(e,4),o=r[1],i=r[2],a=r[3],s=(n||{}).plain;if(!o)return null;return[-999,i,Sc(o,a,i,{"data-rc-order":"prependQueue","data-rc-priority":"".concat(-999)},s)]}));var Du=function(){function e(t,n){ys(this,e),Zo(this,"name",void 0),Zo(this,"style",void 0),Zo(this,"_keyframe",!0),this.name=t,this.style=n}return xs(e,[{key:"getName",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e?"".concat(e,"-").concat(this.name):this.name}}]),e}();const Fu=Du;function Bu(e){return e.notSplit=!0,e}Bu(["borderTop","borderBottom"]),Bu(["borderTop"]),Bu(["borderBottom"]),Bu(["borderLeft","borderRight"]),Bu(["borderLeft"]),Bu(["borderRight"]);const Hu={blue:"#1677FF",purple:"#722ED1",cyan:"#13C2C2",green:"#52C41A",magenta:"#EB2F96",pink:"#EB2F96",red:"#F5222D",orange:"#FA8C16",yellow:"#FADB14",volcano:"#FA541C",geekblue:"#2F54EB",gold:"#FAAD14",lime:"#A0D911"},Wu=Object.assign(Object.assign({},Hu),{colorPrimary:"#1677ff",colorSuccess:"#52c41a",colorWarning:"#faad14",colorError:"#ff4d4f",colorInfo:"#1677ff",colorLink:"",colorTextBase:"",colorBgBase:"",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n'Noto Color Emoji'",fontFamilyCode:"'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",fontSize:14,lineWidth:1,lineType:"solid",motionUnit:.1,motionBase:0,motionEaseOutCirc:"cubic-bezier(0.08, 0.82, 0.17, 1)",motionEaseInOutCirc:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",motionEaseOut:"cubic-bezier(0.215, 0.61, 0.355, 1)",motionEaseInOut:"cubic-bezier(0.645, 0.045, 0.355, 1)",motionEaseOutBack:"cubic-bezier(0.12, 0.4, 0.29, 1.46)",motionEaseInBack:"cubic-bezier(0.71, -0.46, 0.88, 0.6)",motionEaseInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",motionEaseOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",borderRadius:6,sizeUnit:4,sizeStep:4,sizePopupArrow:16,controlHeight:32,zIndexBase:0,zIndexPopupBase:1e3,opacityImage:1,wireframe:!1,motion:!0}),Vu={token:Wu,override:{override:Wu},hashed:!0},Uu=e.createContext(Vu);const Yu=e=>{let t=e,n=e,r=e,o=e;return e<6&&e>=5?t=e+1:e<16&&e>=6?t=e+2:e>=16&&(t=16),e<7&&e>=5?n=4:e<8&&e>=7?n=5:e<14&&e>=8?n=6:e<16&&e>=14?n=7:e>=16&&(n=8),e<6&&e>=2?r=1:e>=6&&(r=2),e>4&&e<8?o=4:e>=8&&(o=6),{borderRadius:e,borderRadiusXS:r,borderRadiusSM:n,borderRadiusLG:t,borderRadiusOuter:o}};const Gu=e=>{const{controlHeight:t}=e;return{controlHeightSM:.75*t,controlHeightXS:.5*t,controlHeightLG:1.25*t}};function qu(e){return(e+8)/e}const Ku=e=>{const t=function(e){const t=Array.from({length:10}).map(((t,n)=>{const r=n-1,o=e*Math.pow(Math.E,r/5),i=n>1?Math.floor(o):Math.ceil(o);return 2*Math.floor(i/2)}));return t[1]=e,t.map((e=>({size:e,lineHeight:qu(e)})))}(e),n=t.map((e=>e.size)),r=t.map((e=>e.lineHeight)),o=n[1],i=n[0],a=n[2],s=r[1],l=r[0],c=r[2];return{fontSizeSM:i,fontSize:o,fontSizeLG:a,fontSizeXL:n[3],fontSizeHeading1:n[6],fontSizeHeading2:n[5],fontSizeHeading3:n[4],fontSizeHeading4:n[3],fontSizeHeading5:n[2],lineHeight:s,lineHeightLG:c,lineHeightSM:l,fontHeight:Math.round(s*o),fontHeightLG:Math.round(c*a),fontHeightSM:Math.round(l*i),lineHeightHeading1:r[6],lineHeightHeading2:r[5],lineHeightHeading3:r[4],lineHeightHeading4:r[3],lineHeightHeading5:r[2]}};const Xu=(e,t)=>new ai(e).setA(t).toRgbString(),Qu=(e,t)=>new ai(e).darken(t).toHexString(),Zu=e=>{const t=di(e);return{1:t[0],2:t[1],3:t[2],4:t[3],5:t[4],6:t[5],7:t[6],8:t[4],9:t[5],10:t[6]}},Ju=(e,t)=>{const n=e||"#fff",r=t||"#000";return{colorBgBase:n,colorTextBase:r,colorText:Xu(r,.88),colorTextSecondary:Xu(r,.65),colorTextTertiary:Xu(r,.45),colorTextQuaternary:Xu(r,.25),colorFill:Xu(r,.15),colorFillSecondary:Xu(r,.06),colorFillTertiary:Xu(r,.04),colorFillQuaternary:Xu(r,.02),colorBgSolid:Xu(r,1),colorBgSolidHover:Xu(r,.75),colorBgSolidActive:Xu(r,.95),colorBgLayout:Qu(n,4),colorBgContainer:Qu(n,0),colorBgElevated:Qu(n,0),colorBgSpotlight:Xu(r,.85),colorBgBlur:"transparent",colorBorder:Qu(n,15),colorBorderSecondary:Qu(n,6)}};const ed=function(e){var t=Array.isArray(e)?e:[e];return mc.has(t)||mc.set(t,new pc(t)),mc.get(t)}((function(e){fi.pink=fi.magenta,Ei.pink=Ei.magenta;const t=Object.keys(Hu).map((t=>{const n=e[t]===fi[t]?Ei[t]:di(e[t]);return Array.from({length:10},(()=>1)).reduce(((e,r,o)=>(e[`${t}-${o+1}`]=n[o],e[`${t}${o+1}`]=n[o],e)),{})})).reduce(((e,t)=>e=Object.assign(Object.assign({},e),t)),{});return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},e),t),function(e,t){let{generateColorPalettes:n,generateNeutralColorPalettes:r}=t;const{colorSuccess:o,colorWarning:i,colorError:a,colorInfo:s,colorPrimary:l,colorBgBase:c,colorTextBase:u}=e,d=n(l),f=n(o),h=n(i),p=n(a),m=n(s),g=r(c,u),v=n(e.colorLink||e.colorInfo),y=new ai(p[1]).mix(new ai(p[3]),50).toHexString();return Object.assign(Object.assign({},g),{colorPrimaryBg:d[1],colorPrimaryBgHover:d[2],colorPrimaryBorder:d[3],colorPrimaryBorderHover:d[4],colorPrimaryHover:d[5],colorPrimary:d[6],colorPrimaryActive:d[7],colorPrimaryTextHover:d[8],colorPrimaryText:d[9],colorPrimaryTextActive:d[10],colorSuccessBg:f[1],colorSuccessBgHover:f[2],colorSuccessBorder:f[3],colorSuccessBorderHover:f[4],colorSuccessHover:f[4],colorSuccess:f[6],colorSuccessActive:f[7],colorSuccessTextHover:f[8],colorSuccessText:f[9],colorSuccessTextActive:f[10],colorErrorBg:p[1],colorErrorBgHover:p[2],colorErrorBgFilledHover:y,colorErrorBgActive:p[3],colorErrorBorder:p[3],colorErrorBorderHover:p[4],colorErrorHover:p[5],colorError:p[6],colorErrorActive:p[7],colorErrorTextHover:p[8],colorErrorText:p[9],colorErrorTextActive:p[10],colorWarningBg:h[1],colorWarningBgHover:h[2],colorWarningBorder:h[3],colorWarningBorderHover:h[4],colorWarningHover:h[4],colorWarning:h[6],colorWarningActive:h[7],colorWarningTextHover:h[8],colorWarningText:h[9],colorWarningTextActive:h[10],colorInfoBg:m[1],colorInfoBgHover:m[2],colorInfoBorder:m[3],colorInfoBorderHover:m[4],colorInfoHover:m[4],colorInfo:m[6],colorInfoActive:m[7],colorInfoTextHover:m[8],colorInfoText:m[9],colorInfoTextActive:m[10],colorLinkHover:v[4],colorLink:v[6],colorLinkActive:v[7],colorBgMask:new ai("#000").setA(.45).toRgbString(),colorWhite:"#fff"})}(e,{generateColorPalettes:Zu,generateNeutralColorPalettes:Ju})),Ku(e.fontSize)),function(e){const{sizeUnit:t,sizeStep:n}=e;return{sizeXXL:t*(n+8),sizeXL:t*(n+4),sizeLG:t*(n+2),sizeMD:t*(n+1),sizeMS:t*n,size:t*n,sizeSM:t*(n-1),sizeXS:t*(n-2),sizeXXS:t*(n-3)}}(e)),Gu(e)),function(e){const{motionUnit:t,motionBase:n,borderRadius:r,lineWidth:o}=e;return Object.assign({motionDurationFast:`${(n+t).toFixed(1)}s`,motionDurationMid:`${(n+2*t).toFixed(1)}s`,motionDurationSlow:`${(n+3*t).toFixed(1)}s`,lineWidthBold:o+1},Yu(r))}(e))})),td=ed;function nd(e){return e>=0&&e<=255}const rd=function(e,t){const{r:n,g:r,b:o,a:i}=new ai(e).toRgb();if(i<1)return e;const{r:a,g:s,b:l}=new ai(t).toRgb();for(let c=.01;c<=1;c+=.01){const e=Math.round((n-a*(1-c))/c),t=Math.round((r-s*(1-c))/c),i=Math.round((o-l*(1-c))/c);if(nd(e)&&nd(t)&&nd(i))return new ai({r:e,g:t,b:i,a:Math.round(100*c)/100}).toRgbString()}return new ai({r:n,g:r,b:o,a:1}).toRgbString()};var od=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function id(e){const{override:t}=e,n=od(e,["override"]),r=Object.assign({},t);Object.keys(Wu).forEach((e=>{delete r[e]}));const o=Object.assign(Object.assign({},n),r),i=1200,a=1600;if(!1===o.motion){const e="0s";o.motionDurationFast=e,o.motionDurationMid=e,o.motionDurationSlow=e}return Object.assign(Object.assign(Object.assign({},o),{colorFillContent:o.colorFillSecondary,colorFillContentHover:o.colorFill,colorFillAlter:o.colorFillQuaternary,colorBgContainerDisabled:o.colorFillTertiary,colorBorderBg:o.colorBgContainer,colorSplit:rd(o.colorBorderSecondary,o.colorBgContainer),colorTextPlaceholder:o.colorTextQuaternary,colorTextDisabled:o.colorTextQuaternary,colorTextHeading:o.colorText,colorTextLabel:o.colorTextSecondary,colorTextDescription:o.colorTextTertiary,colorTextLightSolid:o.colorWhite,colorHighlight:o.colorError,colorBgTextHover:o.colorFillSecondary,colorBgTextActive:o.colorFill,colorIcon:o.colorTextTertiary,colorIconHover:o.colorText,colorErrorOutline:rd(o.colorErrorBg,o.colorBgContainer),colorWarningOutline:rd(o.colorWarningBg,o.colorBgContainer),fontSizeIcon:o.fontSizeSM,lineWidthFocus:3*o.lineWidth,lineWidth:o.lineWidth,controlOutlineWidth:2*o.lineWidth,controlInteractiveSize:o.controlHeight/2,controlItemBgHover:o.colorFillTertiary,controlItemBgActive:o.colorPrimaryBg,controlItemBgActiveHover:o.colorPrimaryBgHover,controlItemBgActiveDisabled:o.colorFill,controlTmpOutline:o.colorFillQuaternary,controlOutline:rd(o.colorPrimaryBg,o.colorBgContainer),lineType:o.lineType,borderRadius:o.borderRadius,borderRadiusXS:o.borderRadiusXS,borderRadiusSM:o.borderRadiusSM,borderRadiusLG:o.borderRadiusLG,fontWeightStrong:600,opacityLoading:.65,linkDecoration:"none",linkHoverDecoration:"none",linkFocusDecoration:"none",controlPaddingHorizontal:12,controlPaddingHorizontalSM:8,paddingXXS:o.sizeXXS,paddingXS:o.sizeXS,paddingSM:o.sizeSM,padding:o.size,paddingMD:o.sizeMD,paddingLG:o.sizeLG,paddingXL:o.sizeXL,paddingContentHorizontalLG:o.sizeLG,paddingContentVerticalLG:o.sizeMS,paddingContentHorizontal:o.sizeMS,paddingContentVertical:o.sizeSM,paddingContentHorizontalSM:o.size,paddingContentVerticalSM:o.sizeXS,marginXXS:o.sizeXXS,marginXS:o.sizeXS,marginSM:o.sizeSM,margin:o.size,marginMD:o.sizeMD,marginLG:o.sizeLG,marginXL:o.sizeXL,marginXXL:o.sizeXXL,boxShadow:"\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",boxShadowSecondary:"\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",boxShadowTertiary:"\n      0 1px 2px 0 rgba(0, 0, 0, 0.03),\n      0 1px 6px -1px rgba(0, 0, 0, 0.02),\n      0 2px 4px 0 rgba(0, 0, 0, 0.02)\n    ",screenXS:480,screenXSMin:480,screenXSMax:575,screenSM:576,screenSMMin:576,screenSMMax:767,screenMD:768,screenMDMin:768,screenMDMax:991,screenLG:992,screenLGMin:992,screenLGMax:1199,screenXL:i,screenXLMin:i,screenXLMax:1599,screenXXL:a,screenXXLMin:a,boxShadowPopoverArrow:"2px 2px 5px rgba(0, 0, 0, 0.05)",boxShadowCard:`\n      0 1px 2px -2px ${new ai("rgba(0, 0, 0, 0.16)").toRgbString()},\n      0 3px 6px 0 ${new ai("rgba(0, 0, 0, 0.12)").toRgbString()},\n      0 5px 12px 4px ${new ai("rgba(0, 0, 0, 0.09)").toRgbString()}\n    `,boxShadowDrawerRight:"\n      -6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      -3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      -9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",boxShadowDrawerLeft:"\n      6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",boxShadowDrawerUp:"\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",boxShadowDrawerDown:"\n      0 -6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 -3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 -9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",boxShadowTabsOverflowLeft:"inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowRight:"inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowTop:"inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",boxShadowTabsOverflowBottom:"inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"}),r)}var ad=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const sd={lineHeight:!0,lineHeightSM:!0,lineHeightLG:!0,lineHeightHeading1:!0,lineHeightHeading2:!0,lineHeightHeading3:!0,lineHeightHeading4:!0,lineHeightHeading5:!0,opacityLoading:!0,fontWeightStrong:!0,zIndexPopupBase:!0,zIndexBase:!0,opacityImage:!0},ld={size:!0,sizeSM:!0,sizeLG:!0,sizeMD:!0,sizeXS:!0,sizeXXS:!0,sizeMS:!0,sizeXL:!0,sizeXXL:!0,sizeUnit:!0,sizeStep:!0,motionBase:!0,motionUnit:!0},cd={screenXS:!0,screenXSMin:!0,screenXSMax:!0,screenSM:!0,screenSMMin:!0,screenSMMax:!0,screenMD:!0,screenMDMin:!0,screenMDMax:!0,screenLG:!0,screenLGMin:!0,screenLGMax:!0,screenXL:!0,screenXLMin:!0,screenXLMax:!0,screenXXL:!0,screenXXLMin:!0},ud=(e,t,n)=>{const r=n.getDerivativeToken(e),{override:o}=t,i=ad(t,["override"]);let a=Object.assign(Object.assign({},r),{override:o});return a=id(a),i&&Object.entries(i).forEach((e=>{let[t,n]=e;const{theme:r}=n,o=ad(n,["theme"]);let i=o;r&&(i=ud(Object.assign(Object.assign({},a),o),{override:o},r)),a[t]=i})),a};function dd(){const{token:t,hashed:n,theme:r,override:o,cssVar:i}=e.useContext(Uu),a=`5.24.3-${n||""}`,s=r||td,[l,c,u]=Lc(s,[Wu,t],{salt:a,override:o,getComputedToken:ud,formatToken:id,cssVar:i&&{prefix:i.prefix,key:i.key,unitless:sd,ignore:ld,preserve:cd}});return[s,u,n?c:"",l,i]}const fd=e.createContext(void 0),hd=100,pd={Modal:hd,Drawer:hd,Popover:hd,Popconfirm:hd,Tooltip:hd,Tour:hd,FloatButton:hd},md={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};const gd=(t,n)=>{const[,r]=dd(),o=e.useContext(fd),i=t in pd;let a;if(void 0!==n)a=[n,n];else{let e=null!==o&&void 0!==o?o:0;e+=i?(o?0:r.zIndexPopupBase)+pd[t]:md[t],a=[void 0===o?n:e,e]}return a},vd=(e,t,n)=>void 0!==n?n:`${e}-${t}`,yd="ant",bd="anticon",xd=e.createContext({getPrefixCls:(e,t)=>t||(e?`${yd}-${e}`:yd),iconPrefixCls:bd}),{Consumer:wd}=xd,kd={};function Sd(t){const n=e.useContext(xd),{getPrefixCls:r,direction:o,getPopupContainer:i}=n,a=n[t];return Object.assign(Object.assign({classNames:kd,styles:kd},a),{getPrefixCls:r,direction:o,getPopupContainer:i})}const jd=e=>{const[,,,,t]=dd();return t?`${e}-css-var`:""},Cd=(0,e.createContext)(void 0);const Ed={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"};const Td=Hi(Hi({},{yearFormat:"YYYY",dayFormat:"D",cellMeridiemFormat:"A",monthBeforeYear:!0}),{},{locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",week:"Week",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",dateFormat:"M/D/YYYY",dateTimeFormat:"M/D/YYYY HH:mm:ss",previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"}),Ad={placeholder:"Select time",rangePlaceholder:["Start time","End time"]},Pd={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},Td),timePickerLocale:Object.assign({},Ad)},zd="${label} is not a valid ${type}",Od={locale:"en",Pagination:Ed,DatePicker:Pd,TimePicker:Ad,Calendar:Pd,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckAll:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",deselectAll:"Deselect all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand",collapse:"Collapse"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:zd,method:zd,array:zd,object:zd,number:zd,date:zd,boolean:zd,integer:zd,float:zd,regexp:zd,email:zd,url:zd,hex:zd},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh",scanned:"Scanned"},ColorPicker:{presetEmpty:"Empty",transparent:"Transparent",singleColor:"Single",gradientColor:"Gradient"}},Md=(t,n)=>{const r=e.useContext(Cd),o=e.useMemo((()=>{var e;const o=n||Od[t],i=null!==(e=null===r||void 0===r?void 0:r[t])&&void 0!==e?e:{};return Object.assign(Object.assign({},"function"===typeof o?o():o),i||{})}),[t,n,r]);return[o,e.useMemo((()=>{const e=null===r||void 0===r?void 0:r.locale;return(null===r||void 0===r?void 0:r.exist)&&!e?Od.locale:e}),[r])]};const Rd={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"};var Id=function(t,n){return e.createElement(ka,Uo({},t,{ref:n,icon:Rd}))};const $d=e.forwardRef(Id);const Ld={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"};var Nd=function(t,n){return e.createElement(ka,Uo({},t,{ref:n,icon:Ld}))};const _d=e.forwardRef(Nd);const Dd={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"};var Fd=function(t,n){return e.createElement(ka,Uo({},t,{ref:n,icon:Dd}))};const Bd=e.forwardRef(Fd);const Hd={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"};var Wd=function(t,n){return e.createElement(ka,Uo({},t,{ref:n,icon:Hd}))};const Vd=e.forwardRef(Wd);const Ud={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"};var Yd=function(t,n){return e.createElement(ka,Uo({},t,{ref:n,icon:Ud}))};const Gd=e.forwardRef(Yd);const qd={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"};var Kd=function(t,n){return e.createElement(ka,Uo({},t,{ref:n,icon:qd}))};const Xd=e.forwardRef(Kd);const Qd={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"};var Zd=function(t,n){return e.createElement(ka,Uo({},t,{ref:n,icon:Qd}))};const Jd=e.forwardRef(Zd);const ef={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"};var tf=function(t,n){return e.createElement(ka,Uo({},t,{ref:n,icon:ef}))};const nf=e.forwardRef(tf);const rf=xs((function e(){ys(this,e)}));var of="CALC_UNIT",af=new RegExp(of,"g");function sf(e){return"number"===typeof e?"".concat(e).concat(of):e}var lf=function(e){ks(n,e);var t=Es(n);function n(e,r){var o;ys(this,n),Zo(Cs(o=t.call(this)),"result",""),Zo(Cs(o),"unitlessCssVar",void 0),Zo(Cs(o),"lowPriority",void 0);var i=Xo(e);return o.unitlessCssVar=r,e instanceof n?o.result="(".concat(e.result,")"):"number"===i?o.result=sf(e):"string"===i&&(o.result=e),o}return xs(n,[{key:"add",value:function(e){return e instanceof n?this.result="".concat(this.result," + ").concat(e.getResult()):"number"!==typeof e&&"string"!==typeof e||(this.result="".concat(this.result," + ").concat(sf(e))),this.lowPriority=!0,this}},{key:"sub",value:function(e){return e instanceof n?this.result="".concat(this.result," - ").concat(e.getResult()):"number"!==typeof e&&"string"!==typeof e||(this.result="".concat(this.result," - ").concat(sf(e))),this.lowPriority=!0,this}},{key:"mul",value:function(e){return this.lowPriority&&(this.result="(".concat(this.result,")")),e instanceof n?this.result="".concat(this.result," * ").concat(e.getResult(!0)):"number"!==typeof e&&"string"!==typeof e||(this.result="".concat(this.result," * ").concat(e)),this.lowPriority=!1,this}},{key:"div",value:function(e){return this.lowPriority&&(this.result="(".concat(this.result,")")),e instanceof n?this.result="".concat(this.result," / ").concat(e.getResult(!0)):"number"!==typeof e&&"string"!==typeof e||(this.result="".concat(this.result," / ").concat(e)),this.lowPriority=!1,this}},{key:"getResult",value:function(e){return this.lowPriority||e?"(".concat(this.result,")"):this.result}},{key:"equal",value:function(e){var t=this,n=(e||{}).unit,r=!0;return"boolean"===typeof n?r=n:Array.from(this.unitlessCssVar).some((function(e){return t.result.includes(e)}))&&(r=!1),this.result=this.result.replace(af,r?"px":""),"undefined"!==typeof this.lowPriority?"calc(".concat(this.result,")"):this.result}}]),n}(rf);const cf=function(e){ks(n,e);var t=Es(n);function n(e){var r;return ys(this,n),Zo(Cs(r=t.call(this)),"result",0),e instanceof n?r.result=e.result:"number"===typeof e&&(r.result=e),r}return xs(n,[{key:"add",value:function(e){return e instanceof n?this.result+=e.result:"number"===typeof e&&(this.result+=e),this}},{key:"sub",value:function(e){return e instanceof n?this.result-=e.result:"number"===typeof e&&(this.result-=e),this}},{key:"mul",value:function(e){return e instanceof n?this.result*=e.result:"number"===typeof e&&(this.result*=e),this}},{key:"div",value:function(e){return e instanceof n?this.result/=e.result:"number"===typeof e&&(this.result/=e),this}},{key:"equal",value:function(){return this.result}}]),n}(rf);const uf=function(e,t){var n="css"===e?lf:cf;return function(e){return new n(e,t)}};const df=function(e,t){return"".concat([t,e.replace(/([A-Z]+)([A-Z][a-z]+)/g,"$1-$2").replace(/([a-z])([A-Z])/g,"$1-$2")].filter(Boolean).join("-"))};const ff=function(e,t,n,r){var o=Hi({},t[e]);null!==r&&void 0!==r&&r.deprecatedTokens&&r.deprecatedTokens.forEach((function(e){var t,n=Ko(e,2),r=n[0],i=n[1];(null!==o&&void 0!==o&&o[r]||null!==o&&void 0!==o&&o[i])&&(null!==(t=o[i])&&void 0!==t||(o[i]=null===o||void 0===o?void 0:o[r]))}));var i=Hi(Hi({},n),o);return Object.keys(i).forEach((function(e){i[e]===t[e]&&delete i[e]})),i};var hf="undefined"!==typeof CSSINJS_STATISTIC,pf=!0;function mf(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!hf)return Object.assign.apply(Object,[{}].concat(t));pf=!1;var r={};return t.forEach((function(e){"object"===Xo(e)&&Object.keys(e).forEach((function(t){Object.defineProperty(r,t,{configurable:!0,enumerable:!0,get:function(){return e[t]}})}))})),pf=!0,r}var gf={};function vf(){}const yf=function(e){var t,n=e,r=vf;return hf&&"undefined"!==typeof Proxy&&(t=new Set,n=new Proxy(e,{get:function(e,n){var r;pf&&(null===(r=t)||void 0===r||r.add(n));return e[n]}}),r=function(e,n){var r;gf[e]={global:Array.from(t),component:Hi(Hi({},null===(r=gf[e])||void 0===r?void 0:r.component),n)}}),{token:n,keys:t,flush:r}};const bf=function(e,t,n){var r;return"function"===typeof n?n(mf(t,null!==(r=t[e])&&void 0!==r?r:{})):null!==n&&void 0!==n?n:{}};const xf=function(e){return"js"===e?{max:Math.max,min:Math.min}:{max:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return"max(".concat(t.map((function(e){return kc(e)})).join(","),")")},min:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return"min(".concat(t.map((function(e){return kc(e)})).join(","),")")}}};var wf=function(){function e(){ys(this,e),Zo(this,"map",new Map),Zo(this,"objectIDMap",new WeakMap),Zo(this,"nextID",0),Zo(this,"lastAccessBeat",new Map),Zo(this,"accessBeat",0)}return xs(e,[{key:"set",value:function(e,t){this.clear();var n=this.getCompositeKey(e);this.map.set(n,t),this.lastAccessBeat.set(n,Date.now())}},{key:"get",value:function(e){var t=this.getCompositeKey(e),n=this.map.get(t);return this.lastAccessBeat.set(t,Date.now()),this.accessBeat+=1,n}},{key:"getCompositeKey",value:function(e){var t=this;return e.map((function(e){return e&&"object"===Xo(e)?"obj_".concat(t.getObjectID(e)):"".concat(Xo(e),"_").concat(e)})).join("|")}},{key:"getObjectID",value:function(e){if(this.objectIDMap.has(e))return this.objectIDMap.get(e);var t=this.nextID;return this.objectIDMap.set(e,t),this.nextID+=1,t}},{key:"clear",value:function(){var e=this;if(this.accessBeat>1e4){var t=Date.now();this.lastAccessBeat.forEach((function(n,r){t-n>6e5&&(e.map.delete(r),e.lastAccessBeat.delete(r))})),this.accessBeat=0}}}]),e}(),kf=new wf;const Sf=function(t,n){return e.useMemo((function(){var e=kf.get(n);if(e)return e;var r=t();return kf.set(n,r),r}),n)};const jf=function(){return{}};const Cf=function(t){var n=t.useCSP,r=void 0===n?jf:n,o=t.useToken,i=t.usePrefix,a=t.getResetStyles,s=t.getCommonStyle,l=t.getCompUnitless;function c(e,n,l){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=Array.isArray(e)?e:[e,e],d=Ko(u,1)[0],f=u.join("-"),h=t.layer||{name:"antd"};return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,u=o(),p=u.theme,m=u.realToken,g=u.hashId,v=u.token,y=u.cssVar,b=i(),x=b.rootPrefixCls,w=b.iconPrefixCls,k=r(),S=y?"css":"js",j=Sf((function(){var e=new Set;return y&&Object.keys(c.unitless||{}).forEach((function(t){e.add(jc(t,y.prefix)),e.add(jc(t,df(d,y.prefix)))})),uf(S,e)}),[S,d,null===y||void 0===y?void 0:y.prefix]),C=xf(S),E=C.max,T=C.min,A={theme:p,token:v,hashId:g,nonce:function(){return k.nonce},clientOnly:c.clientOnly,layer:h,order:c.order||-999};return"function"===typeof a&&$u(Hi(Hi({},A),{},{clientOnly:!1,path:["Shared",x]}),(function(){return a(v,{prefix:{rootPrefixCls:x,iconPrefixCls:w},csp:k})})),[$u(Hi(Hi({},A),{},{path:[f,e,w]}),(function(){if(!1===c.injectStyle)return[];var r=yf(v),o=r.token,i=r.flush,a=bf(d,m,l),u=".".concat(e),f=ff(d,m,a,{deprecatedTokens:c.deprecatedTokens});y&&a&&"object"===Xo(a)&&Object.keys(a).forEach((function(e){a[e]="var(".concat(jc(e,df(d,y.prefix)),")")}));var h=mf(o,{componentCls:u,prefixCls:e,iconCls:".".concat(w),antCls:".".concat(x),calc:j,max:E,min:T},y?a:f),p=n(h,{hashId:g,prefixCls:e,rootPrefixCls:x,iconPrefixCls:w});i(d,f);var b="function"===typeof s?s(h,e,t,c.resetFont):null;return[!1===c.resetStyle?null:b,p]})),g]}}return{genStyleHooks:function(t,n,r,i){var a=Array.isArray(t)?t[0]:t;function s(e){return"".concat(String(a)).concat(e.slice(0,1).toUpperCase()).concat(e.slice(1))}var u=(null===i||void 0===i?void 0:i.unitless)||{},d=Hi(Hi({},"function"===typeof l?l(t):{}),{},Zo({},s("zIndexPopup"),!0));Object.keys(u).forEach((function(e){d[s(e)]=u[e]}));var f=Hi(Hi({},i),{},{unitless:d,prefixToken:s}),h=c(t,n,r,f),p=function(t,n,r){var i=r.unitless,a=r.injectStyle,s=void 0===a||a,l=r.prefixToken,c=r.ignore,u=function(e){var a=e.rootCls,s=e.cssVar,u=void 0===s?{}:s,d=o().realToken;return Nu({path:[t],prefix:u.prefix,key:u.key,unitless:i,ignore:c,token:d,scope:a},(function(){var e=bf(t,d,n),o=ff(t,d,e,{deprecatedTokens:null===r||void 0===r?void 0:r.deprecatedTokens});return Object.keys(e).forEach((function(e){o[l(e)]=o[e],delete o[e]})),o})),null},d=function(n){var r=o().cssVar;return[function(o){return s&&r?e.createElement(e.Fragment,null,e.createElement(u,{rootCls:n,cssVar:r,component:t}),o):o},null===r||void 0===r?void 0:r.key]};return d}(a,r,f);return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=Ko(h(e,t),2)[1],r=Ko(p(t),2);return[r[0],n,r[1]]}},genSubStyleComponent:function(e,t,n){var r=c(e,t,n,Hi({resetStyle:!1,order:-998},arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}));return function(e){var t=e.prefixCls,n=e.rootCls;return r(t,void 0===n?t:n),null}},genComponentStyleHook:c}},Ef={overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},Tf=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{boxSizing:"border-box",margin:0,padding:0,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,listStyle:"none",fontFamily:t?"inherit":e.fontFamily}},Af=(e,t)=>({outline:`${kc(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,outlineOffset:null!==t&&void 0!==t?t:1,transition:"outline-offset 0s, outline 0s"}),Pf=(e,t)=>({"&:focus-visible":Object.assign({},Af(e,t))}),{genStyleHooks:zf,genComponentStyleHook:Of,genSubStyleComponent:Mf}=Cf({usePrefix:()=>{const{getPrefixCls:t,iconPrefixCls:n}=(0,e.useContext)(xd);return{rootPrefixCls:t(),iconPrefixCls:n}},useToken:()=>{const[e,t,n,r,o]=dd();return{theme:e,realToken:t,hashId:n,token:r,cssVar:o}},useCSP:()=>{const{csp:t}=(0,e.useContext)(xd);return null!==t&&void 0!==t?t:{}},getResetStyles:(e,t)=>{var n;const r=(e=>({a:{color:e.colorLink,textDecoration:e.linkDecoration,backgroundColor:"transparent",outline:"none",cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"-webkit-text-decoration-skip":"objects","&:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive},"&:active, &:hover":{textDecoration:e.linkHoverDecoration,outline:0},"&:focus":{textDecoration:e.linkFocusDecoration,outline:0},"&[disabled]":{color:e.colorTextDisabled,cursor:"not-allowed"}}}))(e);return[r,{"&":r},(o=null!==(n=null===t||void 0===t?void 0:t.prefix.iconPrefixCls)&&void 0!==n?n:bd,{[`.${o}`]:Object.assign(Object.assign({},{display:"inline-flex",alignItems:"center",color:"inherit",fontStyle:"normal",lineHeight:0,textAlign:"center",textTransform:"none",verticalAlign:"-0.125em",textRendering:"optimizeLegibility","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale","> *":{lineHeight:1},svg:{display:"inline-block"}}),{[`.${o} .${o}-icon`]:{display:"block"}})})];var o},getCommonStyle:(e,t,n,r)=>{const o=`[class^="${t}"], [class*=" ${t}"]`,i=n?`.${n}`:o,a={boxSizing:"border-box","&::before, &::after":{boxSizing:"border-box"}};let s={};return!1!==r&&(s={fontFamily:e.fontFamily,fontSize:e.fontSize}),{[i]:Object.assign(Object.assign(Object.assign({},s),a),{[o]:a})}},getCompUnitless:()=>sd}),Rf=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},If=(e,t)=>((e,t)=>{const{prefixCls:n,componentCls:r,gridColumns:o}=e,i={};for(let a=o;a>=0;a--)0===a?(i[`${r}${t}-${a}`]={display:"none"},i[`${r}-push-${a}`]={insetInlineStart:"auto"},i[`${r}-pull-${a}`]={insetInlineEnd:"auto"},i[`${r}${t}-push-${a}`]={insetInlineStart:"auto"},i[`${r}${t}-pull-${a}`]={insetInlineEnd:"auto"},i[`${r}${t}-offset-${a}`]={marginInlineStart:0},i[`${r}${t}-order-${a}`]={order:0}):(i[`${r}${t}-${a}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${a/o*100}%`,maxWidth:a/o*100+"%"}],i[`${r}${t}-push-${a}`]={insetInlineStart:a/o*100+"%"},i[`${r}${t}-pull-${a}`]={insetInlineEnd:a/o*100+"%"},i[`${r}${t}-offset-${a}`]={marginInlineStart:a/o*100+"%"},i[`${r}${t}-order-${a}`]={order:a});return i[`${r}${t}-flex`]={flex:`var(--${n}${t}-flex)`},i})(e,t),$f=(zf("Grid",(e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}}),(()=>({}))),e=>({xs:e.screenXSMin,sm:e.screenSMMin,md:e.screenMDMin,lg:e.screenLGMin,xl:e.screenXLMin,xxl:e.screenXXLMin})),Lf=(zf("Grid",(e=>{const t=mf(e,{gridColumns:24}),n=$f(t);return delete n.xs,[Rf(t),If(t,""),If(t,"-xs"),Object.keys(n).map((e=>((e,t,n)=>({[`@media (min-width: ${kc(t)})`]:Object.assign({},If(e,n))}))(t,n[e],`-${e}`))).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{})]}),(()=>({}))),e=>({animationDuration:e,animationFillMode:"both"})),Nf=e=>({animationDuration:e,animationFillMode:"both"}),_f=function(e,t,n,r){const o=arguments.length>4&&void 0!==arguments[4]&&arguments[4]?"&":"";return{[`\n      ${o}${e}-enter,\n      ${o}${e}-appear\n    `]:Object.assign(Object.assign({},Lf(r)),{animationPlayState:"paused"}),[`${o}${e}-leave`]:Object.assign(Object.assign({},Nf(r)),{animationPlayState:"paused"}),[`\n      ${o}${e}-enter${e}-enter-active,\n      ${o}${e}-appear${e}-appear-active\n    `]:{animationName:t,animationPlayState:"running"},[`${o}${e}-leave${e}-leave-active`]:{animationName:n,animationPlayState:"running",pointerEvents:"none"}}},Df=new Fu("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),Ff=new Fu("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),Bf=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{antCls:n}=e,r=`${n}-fade`,o=t?"&":"";return[_f(r,Df,Ff,e.motionDurationMid,t),{[`\n        ${o}${r}-enter,\n        ${o}${r}-appear\n      `]:{opacity:0,animationTimingFunction:"linear"},[`${o}${r}-leave`]:{animationTimingFunction:"linear"}}]},Hf=new Fu("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),Wf=new Fu("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),Vf=new Fu("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),Uf=new Fu("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),Yf=new Fu("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),Gf=new Fu("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),qf={zoom:{inKeyframes:Hf,outKeyframes:Wf},"zoom-big":{inKeyframes:Vf,outKeyframes:Uf},"zoom-big-fast":{inKeyframes:Vf,outKeyframes:Uf},"zoom-left":{inKeyframes:new Fu("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),outKeyframes:new Fu("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}})},"zoom-right":{inKeyframes:new Fu("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),outKeyframes:new Fu("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}})},"zoom-up":{inKeyframes:Yf,outKeyframes:Gf},"zoom-down":{inKeyframes:new Fu("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),outKeyframes:new Fu("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}})}},Kf=(e,t)=>{const{antCls:n}=e,r=`${n}-${t}`,{inKeyframes:o,outKeyframes:i}=qf[t];return[_f(r,o,i,"zoom-big-fast"===t?e.motionDurationFast:e.motionDurationMid),{[`\n        ${r}-enter,\n        ${r}-appear\n      `]:{transform:"scale(0)",opacity:0,animationTimingFunction:e.motionEaseOutCirc,"&-prepare":{transform:"none"}},[`${r}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]};function Xf(e){return{position:e,inset:0}}const Qf=e=>{const{componentCls:t,antCls:n}=e;return[{[`${t}-root`]:{[`${t}${n}-zoom-enter, ${t}${n}-zoom-appear`]:{transform:"none",opacity:0,animationDuration:e.motionDurationSlow,userSelect:"none"},[`${t}${n}-zoom-leave ${t}-content`]:{pointerEvents:"none"},[`${t}-mask`]:Object.assign(Object.assign({},Xf("fixed")),{zIndex:e.zIndexPopupBase,height:"100%",backgroundColor:e.colorBgMask,pointerEvents:"none",[`${t}-hidden`]:{display:"none"}}),[`${t}-wrap`]:Object.assign(Object.assign({},Xf("fixed")),{zIndex:e.zIndexPopupBase,overflow:"auto",outline:0,WebkitOverflowScrolling:"touch"})}},{[`${t}-root`]:Bf(e)}]},Zf=e=>{const{componentCls:t}=e;return[{[`${t}-root`]:{[`${t}-wrap-rtl`]:{direction:"rtl"},[`${t}-centered`]:{textAlign:"center","&::before":{display:"inline-block",width:0,height:"100%",verticalAlign:"middle",content:'""'},[t]:{top:0,display:"inline-block",paddingBottom:0,textAlign:"start",verticalAlign:"middle"}},[`@media (max-width: ${e.screenSMMax}px)`]:{[t]:{maxWidth:"calc(100vw - 16px)",margin:`${kc(e.marginXS)} auto`},[`${t}-centered`]:{[t]:{flex:1}}}}},{[t]:Object.assign(Object.assign({},Tf(e)),{pointerEvents:"none",position:"relative",top:100,width:"auto",maxWidth:`calc(100vw - ${kc(e.calc(e.margin).mul(2).equal())})`,margin:"0 auto",paddingBottom:e.paddingLG,[`${t}-title`]:{margin:0,color:e.titleColor,fontWeight:e.fontWeightStrong,fontSize:e.titleFontSize,lineHeight:e.titleLineHeight,wordWrap:"break-word"},[`${t}-content`]:{position:"relative",backgroundColor:e.contentBg,backgroundClip:"padding-box",border:0,borderRadius:e.borderRadiusLG,boxShadow:e.boxShadow,pointerEvents:"auto",padding:e.contentPadding},[`${t}-close`]:Object.assign({position:"absolute",top:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),insetInlineEnd:e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),zIndex:e.calc(e.zIndexPopupBase).add(10).equal(),padding:0,color:e.modalCloseIconColor,fontWeight:e.fontWeightStrong,lineHeight:1,textDecoration:"none",background:"transparent",borderRadius:e.borderRadiusSM,width:e.modalCloseBtnSize,height:e.modalCloseBtnSize,border:0,outline:0,cursor:"pointer",transition:`color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,"&-x":{display:"flex",fontSize:e.fontSizeLG,fontStyle:"normal",lineHeight:kc(e.modalCloseBtnSize),justifyContent:"center",textTransform:"none",textRendering:"auto"},"&:disabled":{pointerEvents:"none"},"&:hover":{color:e.modalCloseIconHoverColor,backgroundColor:e.colorBgTextHover,textDecoration:"none"},"&:active":{backgroundColor:e.colorBgTextActive}},Pf(e)),[`${t}-header`]:{color:e.colorText,background:e.headerBg,borderRadius:`${kc(e.borderRadiusLG)} ${kc(e.borderRadiusLG)} 0 0`,marginBottom:e.headerMarginBottom,padding:e.headerPadding,borderBottom:e.headerBorderBottom},[`${t}-body`]:{fontSize:e.fontSize,lineHeight:e.lineHeight,wordWrap:"break-word",padding:e.bodyPadding,[`${t}-body-skeleton`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",margin:`${kc(e.margin)} auto`}},[`${t}-footer`]:{textAlign:"end",background:e.footerBg,marginTop:e.footerMarginTop,padding:e.footerPadding,borderTop:e.footerBorderTop,borderRadius:e.footerBorderRadius,[`> ${e.antCls}-btn + ${e.antCls}-btn`]:{marginInlineStart:e.marginXS}},[`${t}-open`]:{overflow:"hidden"}})},{[`${t}-pure-panel`]:{top:"auto",padding:0,display:"flex",flexDirection:"column",[`${t}-content,\n          ${t}-body,\n          ${t}-confirm-body-wrapper`]:{display:"flex",flexDirection:"column",flex:"auto"},[`${t}-confirm-body`]:{marginBottom:"auto"}}}]},Jf=e=>{const{componentCls:t}=e;return{[`${t}-root`]:{[`${t}-wrap-rtl`]:{direction:"rtl",[`${t}-confirm-body`]:{direction:"rtl"}}}}},eh=e=>{const{componentCls:t}=e,n=$f(e);delete n.xs;const r=Object.keys(n).map((e=>({[`@media (min-width: ${kc(n[e])})`]:{width:`var(--${t.replace(".","")}-${e}-width)`}})));return{[`${t}-root`]:{[t]:[{width:`var(--${t.replace(".","")}-xs-width)`}].concat(qa(r))}}},th=(zf("Modal",(e=>{const t=(e=>{const t=e.padding,n=e.fontSizeHeading5,r=e.lineHeightHeading5;return mf(e,{modalHeaderHeight:e.calc(e.calc(r).mul(n).equal()).add(e.calc(t).mul(2).equal()).equal(),modalFooterBorderColorSplit:e.colorSplit,modalFooterBorderStyle:e.lineType,modalFooterBorderWidth:e.lineWidth,modalCloseIconColor:e.colorIcon,modalCloseIconHoverColor:e.colorIconHover,modalCloseBtnSize:e.controlHeight,modalConfirmIconSize:e.fontHeight,modalTitleHeight:e.calc(e.titleFontSize).mul(e.titleLineHeight).equal()})})(e);return[Zf(t),Jf(t),Qf(t),Kf(t,"zoom"),eh(t)]}),(e=>({footerBg:"transparent",headerBg:e.colorBgElevated,titleLineHeight:e.lineHeightHeading5,titleFontSize:e.fontSizeHeading5,contentBg:e.colorBgElevated,titleColor:e.colorTextHeading,contentPadding:e.wireframe?0:`${kc(e.paddingMD)} ${kc(e.paddingContentHorizontalLG)}`,headerPadding:e.wireframe?`${kc(e.padding)} ${kc(e.paddingLG)}`:0,headerBorderBottom:e.wireframe?`${kc(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",headerMarginBottom:e.wireframe?0:e.marginXS,bodyPadding:e.wireframe?e.paddingLG:0,footerPadding:e.wireframe?`${kc(e.paddingXS)} ${kc(e.padding)}`:0,footerBorderTop:e.wireframe?`${kc(e.lineWidth)} ${e.lineType} ${e.colorSplit}`:"none",footerBorderRadius:e.wireframe?`0 0 ${kc(e.borderRadiusLG)} ${kc(e.borderRadiusLG)}`:0,footerMarginTop:e.wireframe?0:e.marginSM,confirmBodyPadding:e.wireframe?`${kc(2*e.padding)} ${kc(2*e.padding)} ${kc(e.paddingLG)}`:0,confirmIconMarginInlineEnd:e.wireframe?e.margin:e.marginSM,confirmBtnsMarginTop:e.wireframe?e.marginLG:e.marginSM})),{unitless:{titleLineHeight:!0}}),e=>({position:e||"absolute",inset:0})),nh=e=>{const{iconCls:t,motionDurationSlow:n,paddingXXS:r,marginXXS:o,prefixCls:i,colorTextLightSolid:a}=e;return{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:a,background:new ai("#000").setA(.5).toRgbString(),cursor:"pointer",opacity:0,transition:`opacity ${n}`,[`.${i}-mask-info`]:Object.assign(Object.assign({},Ef),{padding:`0 ${kc(r)}`,[t]:{marginInlineEnd:o,svg:{verticalAlign:"baseline"}}})}},rh=e=>{const{previewCls:t,modalMaskBg:n,paddingSM:r,marginXL:o,margin:i,paddingLG:a,previewOperationColorDisabled:s,previewOperationHoverColor:l,motionDurationSlow:c,iconCls:u,colorTextLightSolid:d}=e,f=new ai(n).setA(.1),h=f.clone().setA(.2);return{[`${t}-footer`]:{position:"fixed",bottom:o,left:{_skip_check_:!0,value:"50%"},display:"flex",flexDirection:"column",alignItems:"center",color:e.previewOperationColor,transform:"translateX(-50%)"},[`${t}-progress`]:{marginBottom:i},[`${t}-close`]:{position:"fixed",top:o,right:{_skip_check_:!0,value:o},display:"flex",color:d,backgroundColor:f.toRgbString(),borderRadius:"50%",padding:r,outline:0,border:0,cursor:"pointer",transition:`all ${c}`,"&:hover":{backgroundColor:h.toRgbString()},[`& > ${u}`]:{fontSize:e.previewOperationSize}},[`${t}-operations`]:{display:"flex",alignItems:"center",padding:`0 ${kc(a)}`,backgroundColor:f.toRgbString(),borderRadius:100,"&-operation":{marginInlineStart:r,padding:r,cursor:"pointer",transition:`all ${c}`,userSelect:"none",[`&:not(${t}-operations-operation-disabled):hover > ${u}`]:{color:l},"&-disabled":{color:s,cursor:"not-allowed"},"&:first-of-type":{marginInlineStart:0},[`& > ${u}`]:{fontSize:e.previewOperationSize}}}}},oh=e=>{const{modalMaskBg:t,iconCls:n,previewOperationColorDisabled:r,previewCls:o,zIndexPopup:i,motionDurationSlow:a}=e,s=new ai(t).setA(.1),l=s.clone().setA(.2);return{[`${o}-switch-left, ${o}-switch-right`]:{position:"fixed",insetBlockStart:"50%",zIndex:e.calc(i).add(1).equal(),display:"flex",alignItems:"center",justifyContent:"center",width:e.imagePreviewSwitchSize,height:e.imagePreviewSwitchSize,marginTop:e.calc(e.imagePreviewSwitchSize).mul(-1).div(2).equal(),color:e.previewOperationColor,background:s.toRgbString(),borderRadius:"50%",transform:"translateY(-50%)",cursor:"pointer",transition:`all ${a}`,userSelect:"none","&:hover":{background:l.toRgbString()},"&-disabled":{"&, &:hover":{color:r,background:"transparent",cursor:"not-allowed",[`> ${n}`]:{cursor:"not-allowed"}}},[`> ${n}`]:{fontSize:e.previewOperationSize}},[`${o}-switch-left`]:{insetInlineStart:e.marginSM},[`${o}-switch-right`]:{insetInlineEnd:e.marginSM}}},ih=e=>{const{motionEaseOut:t,previewCls:n,motionDurationSlow:r,componentCls:o}=e;return[{[`${o}-preview-root`]:{[n]:{height:"100%",textAlign:"center",pointerEvents:"none"},[`${n}-body`]:Object.assign(Object.assign({},th()),{overflow:"hidden"}),[`${n}-img`]:{maxWidth:"100%",maxHeight:"70%",verticalAlign:"middle",transform:"scale3d(1, 1, 1)",cursor:"grab",transition:`transform ${r} ${t} 0s`,userSelect:"none","&-wrapper":Object.assign(Object.assign({},th()),{transition:`transform ${r} ${t} 0s`,display:"flex",justifyContent:"center",alignItems:"center","& > *":{pointerEvents:"auto"},"&::before":{display:"inline-block",width:1,height:"50%",marginInlineEnd:-1,content:'""'}})},[`${n}-moving`]:{[`${n}-preview-img`]:{cursor:"grabbing","&-wrapper":{transitionDuration:"0s"}}}}},{[`${o}-preview-root`]:{[`${n}-wrap`]:{zIndex:e.zIndexPopup}}},{[`${o}-preview-operations-wrapper`]:{position:"fixed",zIndex:e.calc(e.zIndexPopup).add(1).equal()},"&":[rh(e),oh(e)]}]},ah=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",display:"inline-block",[`${t}-img`]:{width:"100%",height:"auto",verticalAlign:"middle"},[`${t}-img-placeholder`]:{backgroundColor:e.colorBgContainerDisabled,backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"30%"},[`${t}-mask`]:Object.assign({},nh(e)),[`${t}-mask:hover`]:{opacity:1},[`${t}-placeholder`]:Object.assign({},th())}}},sh=e=>{const{previewCls:t}=e;return{[`${t}-root`]:Kf(e,"zoom"),"&":Bf(e,!0)}},lh=zf("Image",(e=>{const t=`${e.componentCls}-preview`,n=mf(e,{previewCls:t,modalMaskBg:new ai("#000").setA(.45).toRgbString(),imagePreviewSwitchSize:e.controlHeightLG});return[ah(n),ih(n),Qf(mf(n,{componentCls:t})),sh(n)]}),(e=>({zIndexPopup:e.zIndexPopupBase+80,previewOperationColor:new ai(e.colorTextLightSolid).setA(.65).toRgbString(),previewOperationHoverColor:new ai(e.colorTextLightSolid).setA(.85).toRgbString(),previewOperationColorDisabled:new ai(e.colorTextLightSolid).setA(.25).toRgbString(),previewOperationSize:1.5*e.fontSizeIcon})));var ch=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const uh={rotateLeft:e.createElement(Vd,null),rotateRight:e.createElement(Gd,null),zoomIn:e.createElement(Jd,null),zoomOut:e.createElement(nf,null),close:e.createElement($d,null),left:e.createElement(_d,null),right:e.createElement(Bd,null),flipX:e.createElement(Xd,null),flipY:e.createElement(Xd,{rotate:90})};var dh=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const fh=t=>{const{prefixCls:n,preview:r,className:o,rootClassName:i,style:a}=t,s=dh(t,["prefixCls","preview","className","rootClassName","style"]),{getPrefixCls:l,getPopupContainer:c,className:u,style:d,preview:f}=Sd("image"),[h]=Md("Image"),p=l("image",n),m=l(),g=jd(p),[v,y,b]=lh(p,g),x=ti()(i,y,b,g),w=ti()(o,y,u),[k]=gd("ImagePreview","object"===typeof r?r.zIndex:void 0),S=e.useMemo((()=>{if(!1===r)return r;const t="object"===typeof r?r:{},{getContainer:n,closeIcon:o,rootClassName:i}=t,a=dh(t,["getContainer","closeIcon","rootClassName"]);return Object.assign(Object.assign({mask:e.createElement("div",{className:`${p}-mask-info`},e.createElement(ja,null),null===h||void 0===h?void 0:h.preview),icons:uh},a),{rootClassName:ti()(x,i),getContainer:null!==n&&void 0!==n?n:c,transitionName:vd(m,"zoom",t.transitionName),maskTransitionName:vd(m,"fade",t.maskTransitionName),zIndex:k,closeIcon:null!==o&&void 0!==o?o:null===f||void 0===f?void 0:f.closeIcon})}),[r,h,null===f||void 0===f?void 0:f.closeIcon]),j=Object.assign(Object.assign({},d),a);return v(e.createElement(ec,Object.assign({prefixCls:p,preview:S,rootClassName:x,className:w,style:j},s)))};fh.PreviewGroup=t=>{var{previewPrefixCls:n,preview:r}=t,o=ch(t,["previewPrefixCls","preview"]);const{getPrefixCls:i}=e.useContext(xd),a=i("image",n),s=`${a}-preview`,l=i(),c=jd(a),[u,d,f]=lh(a,c),[h]=gd("ImagePreview","object"===typeof r?r.zIndex:void 0),p=e.useMemo((()=>{var e;if(!1===r)return r;const t="object"===typeof r?r:{},n=ti()(d,f,c,null!==(e=t.rootClassName)&&void 0!==e?e:"");return Object.assign(Object.assign({},t),{transitionName:vd(l,"zoom",t.transitionName),maskTransitionName:vd(l,"fade",t.maskTransitionName),rootClassName:n,zIndex:h})}),[r]);return u(e.createElement(ec.PreviewGroup,Object.assign({preview:p,previewPrefixCls:s,icons:uh},o)))};const hh=fh;function ph(t,n){return((t,n,r)=>e.isValidElement(t)?e.cloneElement(t,"function"===typeof r?r(t.props||{}):r):n)(t,t,n)}const mh=e=>{const{componentCls:t,colorPrimary:n}=e;return{[t]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${n})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${e.motionEaseOutCirc}`,`opacity 2s ${e.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0},"&.wave-quick":{transition:[`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`,`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")}}}}},gh=Of("Wave",(e=>[mh(e)])),vh=`${yd}-wave-target`;function yh(){yh=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,a=Object.create(i.prototype),s=new z(r||[]);return o(a,"_invoke",{value:E(e,n,s)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",m="completed",g={};function v(){}function y(){}function b(){}var x={};c(x,a,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(O([])));k&&k!==n&&r.call(k,a)&&(x=k);var S=b.prototype=v.prototype=Object.create(x);function j(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function n(o,i,a,s){var l=d(e[o],e,i);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"==Xo(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(u).then((function(e){c.value=e,a(c)}),(function(e){return n("throw",e,a,s)}))}s(l.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function E(t,n,r){var o=f;return function(i,a){if(o===p)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var l=T(s,r);if(l){if(l===g)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=p;var c=d(t,n,r);if("normal"===c.type){if(o=r.done?m:h,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=m,r.method="throw",r.arg=c.arg)}}}function T(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,T(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=d(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function z(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function O(t){if(t||""===t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(Xo(t)+" is not iterable")}return y.prototype=b,o(S,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:y,configurable:!0}),y.displayName=c(b,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c(e,l,"GeneratorFunction")),e.prototype=Object.create(S),e},t.awrap=function(e){return{__await:e}},j(C.prototype),c(C.prototype,s,(function(){return this})),t.AsyncIterator=C,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new C(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},j(S),c(S,l,"Generator"),c(S,a,(function(){return this})),c(S,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=O,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}function bh(e,t,n,r,o,i,a){try{var s=e[i](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,o)}function xh(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){bh(i,r,o,a,s,"next",e)}function s(e){bh(i,r,o,a,s,"throw",e)}a(void 0)}))}}var wh,kh=Hi({},$a),Sh=kh.version,jh=kh.render,Ch=kh.unmountComponentAtNode;try{Number((Sh||"").split(".")[0])>=18&&(wh=kh.createRoot)}catch(RA){}function Eh(e){var t=kh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;t&&"object"===Xo(t)&&(t.usingClientEntryPoint=e)}var Th="__rc_react_root__";function Ah(e,t){wh?function(e,t){Eh(!0);var n=t[Th]||wh(t);Eh(!1),n.render(e),t[Th]=n}(e,t):function(e,t){null===jh||void 0===jh||jh(e,t)}(e,t)}function Ph(e){return zh.apply(this,arguments)}function zh(){return(zh=xh(yh().mark((function e(t){return yh().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve().then((function(){var e;null===(e=t[Th])||void 0===e||e.unmount(),delete t[Th]})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oh(e){Ch(e)}function Mh(){return(Mh=xh(yh().mark((function e(t){return yh().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===wh){e.next=2;break}return e.abrupt("return",Ph(t));case 2:Oh(t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}let Rh=(e,t)=>(Ah(e,t),()=>function(e){return Mh.apply(this,arguments)}(t));function Ih(e){return e&&"#fff"!==e&&"#ffffff"!==e&&"rgb(255, 255, 255)"!==e&&"rgba(255, 255, 255, 1)"!==e&&!/rgba\((?:\d*, ){3}0\)/.test(e)&&"transparent"!==e}function $h(e){return Number.isNaN(e)?0:e}const Lh=t=>{const{className:n,target:r,component:o,registerUnmount:i}=t,a=e.useRef(null),s=e.useRef(null);e.useEffect((()=>{s.current=i()}),[]);const[l,c]=e.useState(null),[u,d]=e.useState([]),[f,h]=e.useState(0),[p,m]=e.useState(0),[g,v]=e.useState(0),[y,b]=e.useState(0),[x,w]=e.useState(!1),k={left:f,top:p,width:g,height:y,borderRadius:u.map((e=>`${e}px`)).join(" ")};function S(){const e=getComputedStyle(r);c(function(e){const{borderTopColor:t,borderColor:n,backgroundColor:r}=getComputedStyle(e);return Ih(t)?t:Ih(n)?n:Ih(r)?r:null}(r));const t="static"===e.position,{borderLeftWidth:n,borderTopWidth:o}=e;h(t?r.offsetLeft:$h(-parseFloat(n))),m(t?r.offsetTop:$h(-parseFloat(o))),v(r.offsetWidth),b(r.offsetHeight);const{borderTopLeftRadius:i,borderTopRightRadius:a,borderBottomLeftRadius:s,borderBottomRightRadius:l}=e;d([i,a,l,s].map((e=>$h(parseFloat(e)))))}if(l&&(k["--wave-color"]=l),e.useEffect((()=>{if(r){const e=rl((()=>{S(),w(!0)}));let t;return"undefined"!==typeof ResizeObserver&&(t=new ResizeObserver(S),t.observe(r)),()=>{rl.cancel(e),null===t||void 0===t||t.disconnect()}}}),[]),!x)return null;const j=("Checkbox"===o||"Radio"===o)&&(null===r||void 0===r?void 0:r.classList.contains(vh));return e.createElement(xl,{visible:!0,motionAppear:!0,motionName:"wave-motion",motionDeadline:5e3,onAppearEnd:(e,t)=>{var n,r;if(t.deadline||"opacity"===t.propertyName){const e=null===(n=a.current)||void 0===n?void 0:n.parentElement;null===(r=s.current)||void 0===r||r.call(s).then((()=>{null===e||void 0===e||e.remove()}))}return!1}},((t,r)=>{let{className:o}=t;return e.createElement("div",{ref:Ha(a,r),className:ti()(n,o,{"wave-quick":j}),style:k})}))},Nh=(t,n)=>{var r;const{component:o}=n;if("Checkbox"===o&&!(null===(r=t.querySelector("input"))||void 0===r?void 0:r.checked))return;const i=document.createElement("div");i.style.position="absolute",i.style.left="0px",i.style.top="0px",null===t||void 0===t||t.insertBefore(i,null===t||void 0===t?void 0:t.firstChild);let a=null;a=Rh(e.createElement(Lh,Object.assign({},n,{target:t,registerUnmount:function(){return a}})),i)},_h=(t,n,r)=>{const{wave:o}=e.useContext(xd),[,i,a]=dd(),s=Ea((e=>{const s=t.current;if((null===o||void 0===o?void 0:o.disabled)||!s)return;const l=s.querySelector(`.${vh}`)||s,{showEffect:c}=o||{};(c||Nh)(l,{className:n,token:i,component:r,event:e,hashId:a})})),l=e.useRef(null);return e=>{rl.cancel(l.current),l.current=rl((()=>{s(e)}))}};const Dh=t=>{const{children:n,disabled:r,component:o}=t,{getPrefixCls:i}=(0,e.useContext)(xd),a=(0,e.useRef)(null),s=i("wave"),[,l]=gh(s),c=_h(a,ti()(s,l),o);if(e.useEffect((()=>{const e=a.current;if(!e||1!==e.nodeType||r)return;const t=t=>{!function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var t=e.getBBox(),n=t.width,r=t.height;if(n||r)return!0}if(e.getBoundingClientRect){var o=e.getBoundingClientRect(),i=o.width,a=o.height;if(i||a)return!0}}return!1}(t.target)||!e.getAttribute||e.getAttribute("disabled")||e.disabled||e.className.includes("disabled")||e.className.includes("-leave")||c(t)};return e.addEventListener("click",t,!0),()=>{e.removeEventListener("click",t,!0)}}),[r]),!e.isValidElement(n))return null!==n&&void 0!==n?n:null;return ph(n,{ref:Va(n)?Ha(Ya(n),a):a})},Fh=e.createContext(!1),Bh=Fh,Hh=e.createContext(void 0),Wh=Hh,Vh=t=>{const n=e.useContext(Wh);return e.useMemo((()=>t?"string"===typeof t?null!==t&&void 0!==t?t:n:t instanceof Function?t(n):n:n),[t,n])};const Uh=e.createContext(null);var Yh=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const Gh=e.createContext(void 0),qh=t=>{const{getPrefixCls:n,direction:r}=e.useContext(xd),{prefixCls:o,size:i,className:a}=t,s=Yh(t,["prefixCls","size","className"]),l=n("btn-group",o),[,,c]=dd(),u=e.useMemo((()=>{switch(i){case"large":return"lg";case"small":return"sm";default:return""}}),[i]);const d=ti()(l,{[`${l}-${u}`]:u,[`${l}-rtl`]:"rtl"===r},a,c);return e.createElement(Gh.Provider,{value:i},e.createElement("div",Object.assign({},s,{className:d})))},Kh=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"],Xh=/^[\u4E00-\u9FA5]{2}$/,Qh=Xh.test.bind(Xh);function Zh(e){return"string"===typeof e}function Jh(e){return"text"===e||"link"===e}function ep(t,n){if(null===t||void 0===t)return;const r=n?" ":"";return"string"!==typeof t&&"number"!==typeof t&&Zh(t.type)&&Qh(t.props.children)?ph(t,{children:t.props.children.split("").join(r)}):Zh(t)?Qh(t)?e.createElement("span",null,t.split("").join(r)):e.createElement("span",null,t):function(t){return t&&e.isValidElement(t)&&t.type===e.Fragment}(t)?e.createElement("span",null,t):t}["default","primary","danger"].concat(qa(Kh));const tp={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"};var np=function(t,n){return e.createElement(ka,Uo({},t,{ref:n,icon:tp}))};const rp=e.forwardRef(np),op=(0,e.forwardRef)(((t,n)=>{const{className:r,style:o,children:i,prefixCls:a}=t,s=ti()(`${a}-icon`,r);return e.createElement("span",{ref:n,className:s,style:o},i)})),ip=op,ap=(0,e.forwardRef)(((t,n)=>{const{prefixCls:r,className:o,style:i,iconClassName:a}=t,s=ti()(`${r}-loading-icon`,o);return e.createElement(ip,{prefixCls:r,className:s,style:i,ref:n},e.createElement(rp,{className:a}))})),sp=()=>({width:0,opacity:0,transform:"scale(0)"}),lp=e=>({width:e.scrollWidth,opacity:1,transform:"scale(1)"}),cp=t=>{const{prefixCls:n,loading:r,existIcon:o,className:i,style:a,mount:s}=t,l=!!r;return o?e.createElement(ap,{prefixCls:n,className:i,style:a}):e.createElement(xl,{visible:l,motionName:`${n}-loading-icon-motion`,motionAppear:!s,motionEnter:!s,motionLeave:!s,removeOnLeave:!0,onAppearStart:sp,onAppearActive:lp,onEnterStart:sp,onEnterActive:lp,onLeaveStart:lp,onLeaveActive:sp},((t,r)=>{let{className:o,style:s}=t;const l=Object.assign(Object.assign({},a),s);return e.createElement(ap,{prefixCls:n,className:ti()(i,o),style:l,ref:r})}))},up=(e,t)=>({[`> span, > ${e}`]:{"&:not(:last-child)":{[`&, & > ${e}`]:{"&:not(:disabled)":{borderInlineEndColor:t}}},"&:not(:first-child)":{[`&, & > ${e}`]:{"&:not(:disabled)":{borderInlineStartColor:t}}}}}),dp=e=>{const{componentCls:t,fontSize:n,lineWidth:r,groupBorderColor:o,colorErrorHover:i}=e;return{[`${t}-group`]:[{position:"relative",display:"inline-flex",[`> span, > ${t}`]:{"&:not(:last-child)":{[`&, & > ${t}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},"&:not(:first-child)":{marginInlineStart:e.calc(r).mul(-1).equal(),[`&, & > ${t}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}},[t]:{position:"relative",zIndex:1,"&:hover, &:focus, &:active":{zIndex:2},"&[disabled]":{zIndex:0}},[`${t}-icon-only`]:{fontSize:n}},up(`${t}-primary`,o),up(`${t}-danger`,i)]}};var fp=["b"],hp=["v"],pp=function(e){return Math.round(Number(e||0))},mp=function(e){ks(n,e);var t=Es(n);function n(e){return ys(this,n),t.call(this,function(e){if(e instanceof ai)return e;if(e&&"object"===Xo(e)&&"h"in e&&"b"in e){var t=e,n=t.b;return Hi(Hi({},Jo(t,fp)),{},{v:n})}return"string"===typeof e&&/hsb/.test(e)?e.replace(/hsb/,"hsv"):e}(e))}return xs(n,[{key:"toHsbString",value:function(){var e=this.toHsb(),t=pp(100*e.s),n=pp(100*e.b),r=pp(e.h),o=e.a,i="hsb(".concat(r,", ").concat(t,"%, ").concat(n,"%)"),a="hsba(".concat(r,", ").concat(t,"%, ").concat(n,"%, ").concat(o.toFixed(0===o?0:2),")");return 1===o?i:a}},{key:"toHsb",value:function(){var e=this.toHsv(),t=e.v;return Hi(Hi({},Jo(e,hp)),{},{b:t,a:this.a})}}]),n}(ai),gp=function(e){return e instanceof mp?e:new mp(e)};gp("#1677ff");let vp=function(){return xs((function e(t){var n;if(ys(this,e),this.cleared=!1,t instanceof e)return this.metaColor=t.metaColor.clone(),this.colors=null===(n=t.colors)||void 0===n?void 0:n.map((t=>({color:new e(t.color),percent:t.percent}))),void(this.cleared=t.cleared);const r=Array.isArray(t);r&&t.length?(this.colors=t.map((t=>{let{color:n,percent:r}=t;return{color:new e(n),percent:r}})),this.metaColor=new mp(this.colors[0].color.metaColor)):this.metaColor=new mp(r?"":t),(!t||r&&!this.colors)&&(this.metaColor=this.metaColor.setA(0),this.cleared=!0)}),[{key:"toHsb",value:function(){return this.metaColor.toHsb()}},{key:"toHsbString",value:function(){return this.metaColor.toHsbString()}},{key:"toHex",value:function(){return((e,t)=>e?((e,t)=>(null===e||void 0===e?void 0:e.replace(/[^\w/]/g,"").slice(0,t?8:6))||"")(e,t):"")(this.toHexString(),this.metaColor.a<1)}},{key:"toHexString",value:function(){return this.metaColor.toHexString()}},{key:"toRgb",value:function(){return this.metaColor.toRgb()}},{key:"toRgbString",value:function(){return this.metaColor.toRgbString()}},{key:"isGradient",value:function(){return!!this.colors&&!this.cleared}},{key:"getColors",value:function(){return this.colors||[{color:this,percent:0}]}},{key:"toCssString",value:function(){const{colors:e}=this;if(e){return`linear-gradient(90deg, ${e.map((e=>`${e.color.toRgbString()} ${e.percent}%`)).join(", ")})`}return this.metaColor.toRgbString()}},{key:"equals",value:function(e){return!(!e||this.isGradient()!==e.isGradient())&&(this.isGradient()?this.colors.length===e.colors.length&&this.colors.every(((t,n)=>{const r=e.colors[n];return t.percent===r.percent&&t.color.equals(r.color)})):this.toHexString()===e.toHexString())}}])}();const yp=(e,t)=>{const{r:n,g:r,b:o,a:i}=e.toRgb(),a=new mp(e.toRgbString()).onBackground(t).toHsv();return i<=.5?a.v>.5:.299*n+.587*r+.114*o>192},bp=e=>{const{paddingInline:t,onlyIconSize:n}=e;return mf(e,{buttonPaddingHorizontal:t,buttonPaddingVertical:0,buttonIconOnlyFontSize:n})},xp=e=>{var t,n,r,o,i,a;const s=null!==(t=e.contentFontSize)&&void 0!==t?t:e.fontSize,l=null!==(n=e.contentFontSizeSM)&&void 0!==n?n:e.fontSize,c=null!==(r=e.contentFontSizeLG)&&void 0!==r?r:e.fontSizeLG,u=null!==(o=e.contentLineHeight)&&void 0!==o?o:qu(s),d=null!==(i=e.contentLineHeightSM)&&void 0!==i?i:qu(l),f=null!==(a=e.contentLineHeightLG)&&void 0!==a?a:qu(c),h=yp(new vp(e.colorBgSolid),"#fff")?"#000":"#fff",p=Kh.reduce(((t,n)=>Object.assign(Object.assign({},t),{[`${n}ShadowColor`]:`0 ${kc(e.controlOutlineWidth)} 0 ${rd(e[`${n}1`],e.colorBgContainer)}`})),{});return Object.assign(Object.assign({},p),{fontWeight:400,defaultShadow:`0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,primaryShadow:`0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,dangerShadow:`0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,primaryColor:e.colorTextLightSolid,dangerColor:e.colorTextLightSolid,borderColorDisabled:e.colorBorder,defaultGhostColor:e.colorBgContainer,ghostBg:"transparent",defaultGhostBorderColor:e.colorBgContainer,paddingInline:e.paddingContentHorizontal-e.lineWidth,paddingInlineLG:e.paddingContentHorizontal-e.lineWidth,paddingInlineSM:8-e.lineWidth,onlyIconSize:"inherit",onlyIconSizeSM:"inherit",onlyIconSizeLG:"inherit",groupBorderColor:e.colorPrimaryHover,linkHoverBg:"transparent",textTextColor:e.colorText,textTextHoverColor:e.colorText,textTextActiveColor:e.colorText,textHoverBg:e.colorFillTertiary,defaultColor:e.colorText,defaultBg:e.colorBgContainer,defaultBorderColor:e.colorBorder,defaultBorderColorDisabled:e.colorBorder,defaultHoverBg:e.colorBgContainer,defaultHoverColor:e.colorPrimaryHover,defaultHoverBorderColor:e.colorPrimaryHover,defaultActiveBg:e.colorBgContainer,defaultActiveColor:e.colorPrimaryActive,defaultActiveBorderColor:e.colorPrimaryActive,solidTextColor:h,contentFontSize:s,contentFontSizeSM:l,contentFontSizeLG:c,contentLineHeight:u,contentLineHeightSM:d,contentLineHeightLG:f,paddingBlock:Math.max((e.controlHeight-s*u)/2-e.lineWidth,0),paddingBlockSM:Math.max((e.controlHeightSM-l*d)/2-e.lineWidth,0),paddingBlockLG:Math.max((e.controlHeightLG-c*f)/2-e.lineWidth,0)})},wp=e=>{const{componentCls:t,iconCls:n,fontWeight:r,opacityLoading:o,motionDurationSlow:i,motionEaseInOut:a,marginXS:s,calc:l}=e;return{[t]:{outline:"none",position:"relative",display:"inline-flex",gap:e.marginXS,alignItems:"center",justifyContent:"center",fontWeight:r,whiteSpace:"nowrap",textAlign:"center",backgroundImage:"none",background:"transparent",border:`${kc(e.lineWidth)} ${e.lineType} transparent`,cursor:"pointer",transition:`all ${e.motionDurationMid} ${e.motionEaseInOut}`,userSelect:"none",touchAction:"manipulation",color:e.colorText,"&:disabled > *":{pointerEvents:"none"},[`${t}-icon > svg`]:{display:"inline-flex",alignItems:"center",color:"inherit",fontStyle:"normal",lineHeight:0,textAlign:"center",textTransform:"none",verticalAlign:"-0.125em",textRendering:"optimizeLegibility","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale","> *":{lineHeight:1},svg:{display:"inline-block"}},"> a":{color:"currentColor"},"&:not(:disabled)":Pf(e),[`&${t}-two-chinese-chars::first-letter`]:{letterSpacing:"0.34em"},[`&${t}-two-chinese-chars > *:not(${n})`]:{marginInlineEnd:"-0.34em",letterSpacing:"0.34em"},[`&${t}-icon-only`]:{paddingInline:0,[`&${t}-compact-item`]:{flex:"none"},[`&${t}-round`]:{width:"auto"}},[`&${t}-loading`]:{opacity:o,cursor:"default"},[`${t}-loading-icon`]:{transition:["width","opacity","margin"].map((e=>`${e} ${i} ${a}`)).join(",")},[`&:not(${t}-icon-end)`]:{[`${t}-loading-icon-motion`]:{"&-appear-start, &-enter-start":{marginInlineEnd:l(s).mul(-1).equal()},"&-appear-active, &-enter-active":{marginInlineEnd:0},"&-leave-start":{marginInlineEnd:0},"&-leave-active":{marginInlineEnd:l(s).mul(-1).equal()}}},"&-icon-end":{flexDirection:"row-reverse",[`${t}-loading-icon-motion`]:{"&-appear-start, &-enter-start":{marginInlineStart:l(s).mul(-1).equal()},"&-appear-active, &-enter-active":{marginInlineStart:0},"&-leave-start":{marginInlineStart:0},"&-leave-active":{marginInlineStart:l(s).mul(-1).equal()}}}}}},kp=(e,t,n)=>({[`&:not(:disabled):not(${e}-disabled)`]:{"&:hover":t,"&:active":n}}),Sp=e=>({minWidth:e.controlHeight,paddingInlineStart:0,paddingInlineEnd:0,borderRadius:"50%"}),jp=e=>({borderRadius:e.controlHeight,paddingInlineStart:e.calc(e.controlHeight).div(2).equal(),paddingInlineEnd:e.calc(e.controlHeight).div(2).equal()}),Cp=e=>({cursor:"not-allowed",borderColor:e.borderColorDisabled,color:e.colorTextDisabled,background:e.colorBgContainerDisabled,boxShadow:"none"}),Ep=(e,t,n,r,o,i,a,s)=>({[`&${e}-background-ghost`]:Object.assign(Object.assign({color:n||void 0,background:t,borderColor:r||void 0,boxShadow:"none"},kp(e,Object.assign({background:t},a),Object.assign({background:t},s))),{"&:disabled":{cursor:"not-allowed",color:o||void 0,borderColor:i||void 0}})}),Tp=e=>({[`&:disabled, &${e.componentCls}-disabled`]:Object.assign({},Cp(e))}),Ap=e=>({[`&:disabled, &${e.componentCls}-disabled`]:{cursor:"not-allowed",color:e.colorTextDisabled}}),Pp=(e,t,n,r)=>{const o=r&&["link","text"].includes(r)?Ap:Tp;return Object.assign(Object.assign({},o(e)),kp(e.componentCls,t,n))},zp=(e,t,n,r,o)=>({[`&${e.componentCls}-variant-solid`]:Object.assign({color:t,background:n},Pp(e,r,o))}),Op=(e,t,n,r,o)=>({[`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]:Object.assign({borderColor:t,background:n},Pp(e,r,o))}),Mp=e=>({[`&${e.componentCls}-variant-dashed`]:{borderStyle:"dashed"}}),Rp=(e,t,n,r)=>({[`&${e.componentCls}-variant-filled`]:Object.assign({boxShadow:"none",background:t},Pp(e,n,r))}),Ip=(e,t,n,r,o)=>({[`&${e.componentCls}-variant-${n}`]:Object.assign({color:t,boxShadow:"none"},Pp(e,r,o,n))}),$p=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.defaultColor,boxShadow:e.defaultShadow},zp(e,e.solidTextColor,e.colorBgSolid,{color:e.solidTextColor,background:e.colorBgSolidHover},{color:e.solidTextColor,background:e.colorBgSolidActive})),Mp(e)),Rp(e,e.colorFillTertiary,{background:e.colorFillSecondary},{background:e.colorFill})),Ep(e.componentCls,e.ghostBg,e.defaultGhostColor,e.defaultGhostBorderColor,e.colorTextDisabled,e.colorBorder)),Ip(e,e.textTextColor,"link",{color:e.colorLinkHover,background:e.linkHoverBg},{color:e.colorLinkActive})),Lp=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorPrimary,boxShadow:e.primaryShadow},Op(e,e.colorPrimary,e.colorBgContainer,{color:e.colorPrimaryTextHover,borderColor:e.colorPrimaryHover,background:e.colorBgContainer},{color:e.colorPrimaryTextActive,borderColor:e.colorPrimaryActive,background:e.colorBgContainer})),Mp(e)),Rp(e,e.colorPrimaryBg,{background:e.colorPrimaryBgHover},{background:e.colorPrimaryBorder})),Ip(e,e.colorPrimaryText,"text",{color:e.colorPrimaryTextHover,background:e.colorPrimaryBg},{color:e.colorPrimaryTextActive,background:e.colorPrimaryBorder})),Ip(e,e.colorPrimaryText,"link",{color:e.colorPrimaryTextHover,background:e.linkHoverBg},{color:e.colorPrimaryTextActive})),Ep(e.componentCls,e.ghostBg,e.colorPrimary,e.colorPrimary,e.colorTextDisabled,e.colorBorder,{color:e.colorPrimaryHover,borderColor:e.colorPrimaryHover},{color:e.colorPrimaryActive,borderColor:e.colorPrimaryActive})),Np=e=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorError,boxShadow:e.dangerShadow},zp(e,e.dangerColor,e.colorError,{background:e.colorErrorHover},{background:e.colorErrorActive})),Op(e,e.colorError,e.colorBgContainer,{color:e.colorErrorHover,borderColor:e.colorErrorBorderHover},{color:e.colorErrorActive,borderColor:e.colorErrorActive})),Mp(e)),Rp(e,e.colorErrorBg,{background:e.colorErrorBgFilledHover},{background:e.colorErrorBgActive})),Ip(e,e.colorError,"text",{color:e.colorErrorHover,background:e.colorErrorBg},{color:e.colorErrorHover,background:e.colorErrorBgActive})),Ip(e,e.colorError,"link",{color:e.colorErrorHover},{color:e.colorErrorActive})),Ep(e.componentCls,e.ghostBg,e.colorError,e.colorError,e.colorTextDisabled,e.colorBorder,{color:e.colorErrorHover,borderColor:e.colorErrorHover},{color:e.colorErrorActive,borderColor:e.colorErrorActive})),_p=e=>Object.assign(Object.assign({},Ip(e,e.colorLink,"link",{color:e.colorLinkHover},{color:e.colorLinkActive})),Ep(e.componentCls,e.ghostBg,e.colorInfo,e.colorInfo,e.colorTextDisabled,e.colorBorder,{color:e.colorInfoHover,borderColor:e.colorInfoHover},{color:e.colorInfoActive,borderColor:e.colorInfoActive})),Dp=e=>{const{componentCls:t}=e;return Object.assign({[`${t}-color-default`]:$p(e),[`${t}-color-primary`]:Lp(e),[`${t}-color-dangerous`]:Np(e),[`${t}-color-link`]:_p(e)},(e=>{const{componentCls:t}=e;return Kh.reduce(((n,r)=>{const o=e[`${r}6`],i=e[`${r}1`],a=e[`${r}5`],s=e[`${r}2`],l=e[`${r}3`],c=e[`${r}7`];return Object.assign(Object.assign({},n),{[`&${t}-color-${r}`]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:o,boxShadow:e[`${r}ShadowColor`]},zp(e,e.colorTextLightSolid,o,{background:a},{background:c})),Op(e,o,e.colorBgContainer,{color:a,borderColor:a,background:e.colorBgContainer},{color:c,borderColor:c,background:e.colorBgContainer})),Mp(e)),Rp(e,i,{background:s},{background:l})),Ip(e,o,"link",{color:a},{color:c})),Ip(e,o,"text",{color:a,background:i},{color:c,background:l}))})}),{})})(e))},Fp=e=>Object.assign(Object.assign(Object.assign(Object.assign({},Op(e,e.defaultBorderColor,e.defaultBg,{color:e.defaultHoverColor,borderColor:e.defaultHoverBorderColor,background:e.defaultHoverBg},{color:e.defaultActiveColor,borderColor:e.defaultActiveBorderColor,background:e.defaultActiveBg})),Ip(e,e.textTextColor,"text",{color:e.textTextHoverColor,background:e.textHoverBg},{color:e.textTextActiveColor,background:e.colorBgTextActive})),zp(e,e.primaryColor,e.colorPrimary,{background:e.colorPrimaryHover,color:e.primaryColor},{background:e.colorPrimaryActive,color:e.primaryColor})),Ip(e,e.colorLink,"link",{color:e.colorLinkHover,background:e.linkHoverBg},{color:e.colorLinkActive})),Bp=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const{componentCls:n,controlHeight:r,fontSize:o,borderRadius:i,buttonPaddingHorizontal:a,iconCls:s,buttonPaddingVertical:l,buttonIconOnlyFontSize:c}=e;return[{[t]:{fontSize:o,height:r,padding:`${kc(l)} ${kc(a)}`,borderRadius:i,[`&${n}-icon-only`]:{width:r,[s]:{fontSize:c}}}},{[`${n}${n}-circle${t}`]:Sp(e)},{[`${n}${n}-round${t}`]:jp(e)}]},Hp=e=>{const t=mf(e,{fontSize:e.contentFontSize});return Bp(t,e.componentCls)},Wp=e=>{const t=mf(e,{controlHeight:e.controlHeightSM,fontSize:e.contentFontSizeSM,padding:e.paddingXS,buttonPaddingHorizontal:e.paddingInlineSM,buttonPaddingVertical:0,borderRadius:e.borderRadiusSM,buttonIconOnlyFontSize:e.onlyIconSizeSM});return Bp(t,`${e.componentCls}-sm`)},Vp=e=>{const t=mf(e,{controlHeight:e.controlHeightLG,fontSize:e.contentFontSizeLG,buttonPaddingHorizontal:e.paddingInlineLG,buttonPaddingVertical:0,borderRadius:e.borderRadiusLG,buttonIconOnlyFontSize:e.onlyIconSizeLG});return Bp(t,`${e.componentCls}-lg`)},Up=e=>{const{componentCls:t}=e;return{[t]:{[`&${t}-block`]:{width:"100%"}}}},Yp=zf("Button",(e=>{const t=bp(e);return[wp(t),Hp(t),Wp(t),Vp(t),Up(t),Dp(t),Fp(t),dp(t)]}),xp,{unitless:{fontWeight:!0,contentLineHeight:!0,contentLineHeightSM:!0,contentLineHeightLG:!0}});function Gp(e,t,n){const{focusElCls:r,focus:o,borderElCls:i}=n,a=i?"> *":"",s=["hover",o?"focus":null,"active"].filter(Boolean).map((e=>`&:${e} ${a}`)).join(",");return{[`&-item:not(${t}-last-item)`]:{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal()},"&-item":Object.assign(Object.assign({[s]:{zIndex:2}},r?{[`&${r}`]:{zIndex:2}}:{}),{[`&[disabled] ${a}`]:{zIndex:0}})}}function qp(e,t,n){const{borderElCls:r}=n,o=r?`> ${r}`:"";return{[`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]:{borderRadius:0},[`&-item:not(${t}-last-item)${t}-first-item`]:{[`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${t}-first-item)${t}-last-item`]:{[`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function Kp(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{focus:!0};const{componentCls:n}=e,r=`${n}-compact`;return{[r]:Object.assign(Object.assign({},Gp(e,r,t)),qp(n,r,t))}}function Xp(e,t){return{[`&-item:not(${t}-last-item)`]:{marginBottom:e.calc(e.lineWidth).mul(-1).equal()},"&-item":{"&:hover,&:focus,&:active":{zIndex:2},"&[disabled]":{zIndex:0}}}}function Qp(e){const t=`${e.componentCls}-compact-vertical`;return{[t]:Object.assign(Object.assign({},Xp(e,t)),(n=e.componentCls,r=t,{[`&-item:not(${r}-first-item):not(${r}-last-item)`]:{borderRadius:0},[`&-item${r}-first-item:not(${r}-last-item)`]:{[`&, &${n}-sm, &${n}-lg`]:{borderEndEndRadius:0,borderEndStartRadius:0}},[`&-item${r}-last-item:not(${r}-first-item)`]:{[`&, &${n}-sm, &${n}-lg`]:{borderStartStartRadius:0,borderStartEndRadius:0}}}))};var n,r}const Zp=e=>{const{componentCls:t,colorPrimaryHover:n,lineWidth:r,calc:o}=e,i=o(r).mul(-1).equal(),a=e=>{const o=`${t}-compact${e?"-vertical":""}-item${t}-primary:not([disabled])`;return{[`${o} + ${o}::before`]:{position:"absolute",top:e?i:0,insetInlineStart:e?0:i,backgroundColor:n,content:'""',width:e?"100%":r,height:e?r:"100%"}}};return Object.assign(Object.assign({},a()),a(!0))},Jp=Mf(["Button","compact"],(e=>{const t=bp(e);return[Kp(t),Qp(t),Zp(t)]}),xp);var em=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const tm={default:["default","outlined"],primary:["primary","solid"],dashed:["default","dashed"],link:["link","link"],text:["default","text"]},nm=e.forwardRef(((t,n)=>{var r,o;const{loading:i=!1,prefixCls:a,color:s,variant:l,type:c,danger:u=!1,shape:d="default",size:f,styles:h,disabled:p,className:m,rootClassName:g,children:v,icon:y,iconPosition:b="start",ghost:x=!1,block:w=!1,htmlType:k="button",classNames:S,style:j={},autoInsertSpace:C,autoFocus:E}=t,T=em(t,["loading","prefixCls","color","variant","type","danger","shape","size","styles","disabled","className","rootClassName","children","icon","iconPosition","ghost","block","htmlType","classNames","style","autoInsertSpace","autoFocus"]),A=c||"default",[P,z]=(0,e.useMemo)((()=>{if(s&&l)return[s,l];const e=tm[A]||[];return u?["danger",e[1]]:e}),[c,s,l,u]),O="danger"===P?"dangerous":P,{getPrefixCls:M,direction:R,autoInsertSpace:I,className:$,style:L,classNames:N,styles:_}=Sd("button"),D=null===(r=null!==C&&void 0!==C?C:I)||void 0===r||r,F=M("btn",a),[B,H,W]=Yp(F),V=(0,e.useContext)(Bh),U=null!==p&&void 0!==p?p:V,Y=(0,e.useContext)(Gh),G=(0,e.useMemo)((()=>function(e){if("object"===typeof e&&e){let t=null===e||void 0===e?void 0:e.delay;return t=Number.isNaN(t)||"number"!==typeof t?0:t,{loading:t<=0,delay:t}}return{loading:!!e,delay:0}}(i)),[i]),[q,K]=(0,e.useState)(G.loading),[X,Q]=(0,e.useState)(!1),Z=(0,e.useRef)(null),J=Wa(n,Z),ee=1===e.Children.count(v)&&!y&&!Jh(z),te=(0,e.useRef)(!0);e.useEffect((()=>(te.current=!1,()=>{te.current=!0})),[]),(0,e.useEffect)((()=>{let e=null;return G.delay>0?e=setTimeout((()=>{e=null,K(!0)}),G.delay):K(G.loading),function(){e&&(clearTimeout(e),e=null)}}),[G]),(0,e.useEffect)((()=>{if(!Z.current||!D)return;const e=Z.current.textContent||"";ee&&Qh(e)?X||Q(!0):X&&Q(!1)})),(0,e.useEffect)((()=>{E&&Z.current&&Z.current.focus()}),[]);const ne=e.useCallback((e=>{var n;q||U?e.preventDefault():null===(n=t.onClick)||void 0===n||n.call(t,e)}),[t.onClick,q,U]);const{compactSize:re,compactItemClassnames:oe}=((t,n)=>{const r=e.useContext(Uh),o=e.useMemo((()=>{if(!r)return"";const{compactDirection:e,isFirstItem:o,isLastItem:i}=r,a="vertical"===e?"-vertical-":"-";return ti()(`${t}-compact${a}item`,{[`${t}-compact${a}first-item`]:o,[`${t}-compact${a}last-item`]:i,[`${t}-compact${a}item-rtl`]:"rtl"===n})}),[t,n,r]);return{compactSize:null===r||void 0===r?void 0:r.compactSize,compactDirection:null===r||void 0===r?void 0:r.compactDirection,compactItemClassnames:o}})(F,R),ie={large:"lg",small:"sm",middle:void 0},ae=Vh((e=>{var t,n;return null!==(n=null!==(t=null!==f&&void 0!==f?f:re)&&void 0!==t?t:Y)&&void 0!==n?n:e})),se=ae&&null!==(o=ie[ae])&&void 0!==o?o:"",le=q?"loading":y,ce=function(e,t){var n=Object.assign({},e);return Array.isArray(t)&&t.forEach((function(e){delete n[e]})),n}(T,["navigate"]),ue=ti()(F,H,W,{[`${F}-${d}`]:"default"!==d&&d,[`${F}-${A}`]:A,[`${F}-dangerous`]:u,[`${F}-color-${O}`]:O,[`${F}-variant-${z}`]:z,[`${F}-${se}`]:se,[`${F}-icon-only`]:!v&&0!==v&&!!le,[`${F}-background-ghost`]:x&&!Jh(z),[`${F}-loading`]:q,[`${F}-two-chinese-chars`]:X&&D&&!q,[`${F}-block`]:w,[`${F}-rtl`]:"rtl"===R,[`${F}-icon-end`]:"end"===b},oe,m,g,$),de=Object.assign(Object.assign({},L),j),fe=ti()(null===S||void 0===S?void 0:S.icon,N.icon),he=Object.assign(Object.assign({},(null===h||void 0===h?void 0:h.icon)||{}),_.icon||{}),pe=y&&!q?e.createElement(ip,{prefixCls:F,className:fe,style:he},y):i&&"object"===typeof i&&i.icon?e.createElement(ip,{prefixCls:F,className:fe,style:he},i.icon):e.createElement(cp,{existIcon:!!y,prefixCls:F,loading:q,mount:te.current}),me=v||0===v?function(t,n){let r=!1;const o=[];return e.Children.forEach(t,(e=>{const t=typeof e,n="string"===t||"number"===t;if(r&&n){const t=o.length-1,n=o[t];o[t]=`${n}${e}`}else o.push(e);r=n})),e.Children.map(o,(e=>ep(e,n)))}(v,ee&&D):null;if(void 0!==ce.href)return B(e.createElement("a",Object.assign({},ce,{className:ti()(ue,{[`${F}-disabled`]:U}),href:U?void 0:ce.href,style:de,onClick:ne,ref:J,tabIndex:U?-1:0}),pe,me));let ge=e.createElement("button",Object.assign({},T,{type:k,className:ue,style:de,onClick:ne,disabled:U,ref:J}),pe,me,oe&&e.createElement(Jp,{prefixCls:F}));return Jh(z)||(ge=e.createElement(Dh,{component:"Button",disabled:q},ge)),B(ge)})),rm=nm;rm.Group=qh,rm.__ANT_BUTTON=!0;const om=rm;var im=n(579);const am=t=>{let{isMobile:n,headerStyle:r={}}=t;J();console.log("is mobile",n);const[o,i]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{const e=()=>{window.scrollY>35?i(!0):i(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),(0,im.jsx)(im.Fragment,{children:(0,im.jsx)(Vo,{isScrolled:o,style:r,children:(0,im.jsxs)("div",{style:{display:"flex",height:"100%",justifyContent:"space-between",alignItems:"center",padding:n?"0px 20px":"0px 80px",width:"100%"},children:[(0,im.jsx)("span",{style:{fontWeight:700,fontSize:"18px",lineHeight:"22px"},children:(0,im.jsx)(hh,{style:{height:n?"32px":"42px",cursor:"pointer"},preview:!1,onClick:()=>window.location.href="https://www.admirian.com",src:"https://static.admirian.com/9a312601-984e-4237-bfad-1454204ce38f_BrandLogo.svg"})}),(0,im.jsxs)("span",{children:[(0,im.jsx)(Ze,{to:"https://www.admirian.com/Sign-in",children:(0,im.jsx)(om,{style:{background:"#010043",borderRadius:"110px",fontSize:n?"14px":"16px",lineHeight:n?"normal":"19px",color:"#FFFFFF",marginRight:n?"8px":"10px",border:"0px"},children:"Sign in"})}),(0,im.jsx)(Ze,{to:"https://www.admirian.com/Sign-up",children:(0,im.jsx)(om,{style:{background:"#F86624",borderRadius:"110px",fontSize:n?"14px":"16px",lineHeight:n?"normal":"19px",color:"#FFFFFF",border:"0px"},children:"Join Now"})})]})]})})})},sm=Ho.div`
    display : flex ;
    align-items : center;
    flex-direction : column;
    background:linear-gradient(180deg, #241046 0%, #130D58 100%);
    font-size : 18px;
    line-height : 22px;
    padding : 15px ;
    color: #FFFFFF;
    text-align : center;
`,lm=Ho.div`
    height : 60px;
    display: flex;
    background:#FFFFFF;
    justify-content : space-between;
    padding: 8px 12px;
    align-items: center
`,cm=Ho.div`
    display : flex;
    align-items: center;
    color : #050360;
    font-size : 14px;
    line-height : 16px;
    cursor : pointer;
`,um=()=>{J();return(0,im.jsxs)(im.Fragment,{children:[(0,im.jsx)(sm,{children:(0,im.jsxs)("span",{children:["Still have a query? write to us at",(0,im.jsx)("a",{style:{color:"#63A1FF"},children:" sales@admirian.com"}),(0,im.jsx)("a",{children:" or reach us on +91-7710883542"})]})}),(0,im.jsxs)(lm,{children:[(0,im.jsx)("div",{children:(0,im.jsx)(hh,{preview:!1,onClick:()=>window.location.href="https://www.admirian.com",style:{cursor:"pointer"},src:"https://static.admirian.com/9a312601-984e-4237-bfad-1454204ce38f_BrandLogo.svg"})}),(0,im.jsx)(cm,{onClick:()=>window.location.href="https://www.admirian.com/privacy-policy",children:"Privacy policy"})]})]})},dm=Wo`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`,fm=Wo`
  0% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 0.4;
  }
`,hm=Ho.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  overflow: hidden;
  background: linear-gradient(135deg, #F6F6FF 0%, #ffffff 100%);
`,pm=Ho.div`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(255, 0, 118, 0.1), rgba(89, 15, 183, 0.1));
  animation: ${dm} 6s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  opacity: 0.6;
`,mm=Ho.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: linear-gradient(45deg, #ff0076, #590fb7);
  border-radius: 50%;
  animation: ${fm} 3s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
`,gm=Ho.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
`,vm=Wo`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,ym=Ho.span`
  background: linear-gradient(
    45deg,
    #ff0076,
    #590fb7,
    #00c6ff,
    #0072ff,
    #ff0076
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${vm} 8s ease infinite;
  font-weight: bold;
`,bm=Ho.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  padding-top: 72px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #ff0076, #590fb7);
    border-radius: 2px;
  }
`,xm=Ho.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  line-height: 1.2;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.02em;
  background: linear-gradient(
    45deg,
    #ff0076,
    #590fb7,
    #00c6ff
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 2px 15px rgba(255, 0, 118, 0.2);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,wm=Ho.p`
  font-size: 1.4rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  text-align: center;

  strong {
    color: #ff0076;
    font-weight: 600;
  }

  @media (prefers-color-scheme: dark) {
    color: #ccc;
    strong {
      color: #ff4d94;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`,km=Ho.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1400px;
  margin: 3rem auto;
  padding: 0 2rem;
  position: relative;
  align-items: stretch;

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(89, 15, 183, 0.2) 50%,
      transparent 100%
    );
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1199px) and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`,Sm=Ho.div`
  width: 100%;
  height: 240px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.3),
      transparent
    );
    pointer-events: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
`,jm=Ho.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);

    ${Sm} img {
      transform: scale(1.1);
    }

    &::after {
      opacity: 1;
    }
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 2px;
    background: linear-gradient(45deg, #ff0076, #590fb7);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  @media (prefers-color-scheme: dark) {
    background: rgba(26, 26, 26, 0.9);
  }
`,Cm=Ho.div`
  padding: 1.8rem;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  justify-content: space-between;
`,Em=Ho.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #666;
  white-space: nowrap;
  overflow: hidden;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;

    &:not(:last-child)::after {
      content: '•';
      margin-left: 0.5rem;
      opacity: 0.5;
    }
  }

  @media (max-width: 400px) {
    span {
      font-size: 0.75rem;
      gap: 0.3rem;
    }
  }

  @media (prefers-color-scheme: dark) {
    color: #999;
  }
`,Tm=Ho.span`
  background: ${e=>{switch(e.category){case"For Agency":default:return"linear-gradient(45deg, #ff0076, #590fb7)";case"For Brands":return"linear-gradient(45deg, #00c6ff, #0072ff)";case"Case Studies":return"linear-gradient(45deg, #590fb7, #ff4d94)"}}};
  padding: 0.4rem 1rem;
  border-radius: 20px;
  color: white;
  font-weight: 500;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(255, 0, 118, 0.2);
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 0, 118, 0.3);
  }

  @media (max-width: 400px) {
    padding: 0.3rem 0.8rem;
    font-size: 0.75rem;
  }
`,Am=Ho.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  line-height: 1.4;
  margin: 0;
  transition: color 0.3s ease;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 4.2rem;

  &:hover {
    background: linear-gradient(45deg, #ff0076, #590fb7);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  @media (prefers-color-scheme: dark) {
    color: #fff;
  }
`,Pm=Ho.p`
  color: #666;
  line-height: 1.6;
  font-size: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 4.8rem;
  margin: 0;

  @media (prefers-color-scheme: dark) {
    color: #ccc;
  }
`,zm=Ho.a`
  color: #ff0076;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  margin-top: auto;
  font-size: 0.95rem;
  padding: 0.5rem 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #ff0076, #590fb7);
    transition: width 0.3s ease;
  }

  &:hover {
    gap: 1rem;
    color: #590fb7;

    &::after {
      width: 100%;
    }
  }

  span {
    transition: transform 0.3s ease;
  }

  &:hover span {
    transform: translateX(5px);
  }

  @media (prefers-color-scheme: dark) {
    color: #ff4d94;

    &:hover {
      color: #ff80b3;
    }
  }
`,Om=Ho.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #ff0076, #590fb7);
  padding: 12px 24px;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  font-size: ${e=>e.isMobile?"12px":"18px"}; /* Reduced from 14px to 12px for mobile */
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
  text-align: center;
  gap: 12px;
  flex-wrap: wrap;

  &:hover {
    background: linear-gradient(90deg, #f40076, #342711);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 8px 16px;
    gap: 8px;
  }
`,Mm=Wo`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`,Rm=Ho.span`
  display: inline-block;
  margin: 0 5px; /* Space around emoticons */
  animation: ${Mm} 1s infinite; /* Apply bounce animation, repeat infinitely */
`,Im=Ho.div`
  margin: 2rem auto;
  max-width: 800px;
  width: 100%;
  position: relative;
  padding: 0 1.5rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin: 1.5rem auto;
    padding: 0 1rem;
    width: calc(100% - 2rem);
  }

  @media (max-width: 480px) {
    margin: 1rem auto;
    padding: 0 0.75rem;
    width: calc(100% - 1.5rem);
  }
`,$m=Ho.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  @media (max-width: 768px) {
    padding: 0.875rem 1.25rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }

  @media (prefers-color-scheme: dark) {
    background: #2a2a2a;
    border-color: #404040;
    color: white;
  }
`,Lm=Ho.div`
  display: flex;
  gap: 1.5rem;
  margin: 2rem auto;
  max-width: 800px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 1rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`,Nm=Ho.button`
  padding: 0.6rem 1.8rem;
  border: none;
  border-radius: 20px;
  background: ${e=>{if(!e.active)return"dark"===e.theme.mode?"#333":"#f0f0f0";switch(e.category){case"For Agency":default:return"linear-gradient(45deg, #ff0076, #590fb7)";case"For Brands":return"linear-gradient(45deg, #00c6ff, #0072ff)";case"Case Studies":return"linear-gradient(45deg, #590fb7, #ff4d94)"}}};
  color: ${e=>e.active?"white":"#333"};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.02em;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    color: ${e=>e.active?"white":"#ccc"};
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem;
    font-size: 0.9rem;
  }
`,_m=Wo`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Dm=Ho(jm)`
  animation: ${_m} 0.5s ease forwards;
  animation-delay: ${e=>e.delay}s;
  opacity: 0;
`,Fm=window.innerWidth<=768,Bm=[{id:1,title:"AI in Influencer Marketing: The Future of Creator Economy 2025",excerpt:"Discover how AI is revolutionizing influencer marketing in 2025. Learn about AI-powered creator discovery, content optimization, and ROI prediction tools that are transforming the industry.",date:"March 20, 2025",readTime:"10 min read",category:"For Agency",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",link:"#/blogs/ai-influencer-marketing-2025"},{id:2,title:"Creator Economy Monetization: New Revenue Streams in 2025",excerpt:"Explore the latest monetization strategies in the creator economy for 2025. Learn about emerging revenue streams, platform innovations, and how creators are maximizing their earning potential.",date:"March 21, 2025",readTime:"12 min read",category:"For Brands",image:"https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60",link:"#/blogs/creator-economy-monetization-2025"},{id:3,title:"Top 10 Influencer Marketing CRMs to Watch in 2025",excerpt:"An in-depth comparison of leading influencer marketing platforms, featuring Admirian's innovative approach to automation and ROI tracking. Discover which CRM fits your needs in 2025.",date:"March 6, 2025",readTime:"15 min read",category:"For Agency",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",link:"#/blogs/top-10-crms-2025"},{id:4,title:"Nano-Influencers: 2025's Tiny Titans of Influence",excerpt:"Nano-influencers might sound small\u2014think 1,000 to 10,000 followers\u2014but in 2025, they're proving size isn't everything. These tiny titans of influence are flipping the script on influencer marketing, delivering sky-high engagement, authentic vibes, and ROI that leaves bigger names in the dust.",date:"March 5, 2025",readTime:"12 min read",category:"For Brands",image:"https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60",link:"#/blogs/nano-influencers-2025"},{id:5,title:"Micro vs. Macro Influencers: Who Wins the ROI Game in 2025?",excerpt:"A data-driven analysis of influencer tiers and their impact on campaign performance, backed by real campaign metrics.",date:"March 1, 2025",readTime:"12 min read",category:"Case Studies",image:"https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=60",link:"#/blogs/micro-vs-macro-influencers"},{id:6,title:"How to Negotiate with Influencers: Scripts and Strategies That Work",excerpt:"Expert negotiation templates and proven approaches to secure win-win partnerships with influencers at any level.",date:"March 3, 2025",readTime:"15 min read",category:"For Agency",image:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60",link:"#/blogs/how-to-negotiate-with-influencers"},{id:7,title:"Agency Success: Managing 1000+ Influencers with Admirian",excerpt:"How a leading marketing agency scaled their influencer operations while reducing management time by 70%.",date:"March 2, 2025",readTime:"8 min read",category:"Case Studies",image:"https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60",link:"#/blogs/agency-success-1000-influencers"},{id:8,title:"The Brand's Playbook to Influencer Content Rights",excerpt:"A comprehensive guide to content licensing, usage rights, and creating influencer contracts that protect your brand.",date:"March 1, 2025",readTime:"9 min read",category:"For Brands",image:"https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=60",link:"#/blogs/influencer-content-rights"},{id:9,title:"How to Use CRM Tools Like Admirian to Streamline Influencer Campaigns",excerpt:"A comprehensive guide on leveraging CRM tools like Admirian to manage influencer campaigns efficiently, track performance, and maximize ROI.",date:"March 31, 2025",readTime:"10 min read",category:"For Brands",image:"https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&auto=format&fit=crop&q=60",link:"#/blogs/how-to-use-crm-tools"}],Hm=["All","For Agency","For Brands","Case Studies"],Wm=()=>{const[t,n]=(0,e.useState)(""),[r,o]=(0,e.useState)("All"),[i,a]=(0,e.useState)(Bm);return(0,e.useEffect)((()=>{let e=[...Bm];t&&(e=e.filter((e=>e.title.toLowerCase().includes(t.toLowerCase())||e.excerpt.toLowerCase().includes(t.toLowerCase())||e.category.toLowerCase().includes(t.toLowerCase())))),"All"!==r&&(e=e.filter((e=>e.category===r))),a(e)}),[t,r]),(0,im.jsxs)(gm,{children:[(0,im.jsxs)(en,{children:[(0,im.jsx)("title",{children:"Influencer Marketing Blog | CRM Tips & Strategies | Admirian"}),(0,im.jsx)("meta",{name:"description",content:"Expert insights on influencer marketing, CRM strategies, and campaign optimization. Learn how to maximize ROI with Admirian's influencer marketing platform."}),(0,im.jsx)("meta",{name:"keywords",content:"influencer marketing, CRM, influencer campaigns, ROI optimization, social media marketing, brand partnerships"}),(0,im.jsx)("meta",{property:"og:title",content:"Influencer Marketing Blog | CRM Tips & Strategies | Admirian"}),(0,im.jsx)("meta",{property:"og:description",content:"Expert insights on influencer marketing, CRM strategies, and campaign optimization. Learn how to maximize ROI with Admirian's influencer marketing platform."}),(0,im.jsx)("meta",{property:"og:type",content:"website"}),(0,im.jsx)("meta",{property:"og:url",content:"https://blogs.admirian.com"}),(0,im.jsx)("meta",{property:"og:image",content:"https://static.admirian.com/blog-header-image.jpg"}),(0,im.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,im.jsx)("meta",{name:"twitter:title",content:"Influencer Marketing Blog | Admirian"}),(0,im.jsx)("meta",{name:"twitter:description",content:"Expert insights on influencer marketing and CRM strategies"}),(0,im.jsx)("meta",{name:"twitter:image",content:"https://static.admirian.com/blog-header-image.jpg"}),(0,im.jsx)("link",{rel:"canonical",href:"https://blogs.admirian.com"}),(0,im.jsx)("script",{type:"application/ld+json",children:'\n            {\n              "@context": "https://schema.org",\n              "@type": "Blog",\n              "name": "Admirian Influencer Marketing Blog",\n              "description": "Expert insights on influencer marketing, CRM strategies, and campaign optimization",\n              "url": "https://blogs.admirian.com",\n              "publisher": {\n                "@type": "Organization",\n                "name": "Admirian",\n                "logo": {\n                  "@type": "ImageObject",\n                  "url": "https://static.admirian.com/9a312601-984e-4237-bfad-1454204ce38f_BrandLogo.svg"\n                }\n              }\n            }\n          '})]}),(0,im.jsxs)(hm,{children:[(0,im.jsx)(pm,{size:200,top:10,left:5,delay:0}),(0,im.jsx)(pm,{size:200,top:60,left:80,delay:1}),(0,im.jsx)(pm,{size:150,top:30,left:40,delay:2}),(0,im.jsx)(pm,{size:250,top:70,left:20,delay:3}),(0,im.jsx)(mm,{top:20,left:30,delay:0}),(0,im.jsx)(mm,{top:40,left:70,delay:1}),(0,im.jsx)(mm,{top:60,left:50,delay:2}),(0,im.jsx)(mm,{top:80,left:20,delay:3})]}),(0,im.jsx)(am,{isMobile:Fm}),(0,im.jsx)("a",{href:"https://admirian.com/request-demo",style:{textDecoration:"none"},children:(0,im.jsx)(Om,{isMobile:Fm,children:(0,im.jsxs)("span",{children:[(0,im.jsx)(Rm,{children:"\ud83c\udf89"})," Admirian is now live"," ",(0,im.jsx)(Rm,{children:"\ud83c\udf89"})," First 3 Months Free for Brands & Agencies!"," ",(0,im.jsx)(Rm,{children:"\ud83d\ude80"})," Click to Join"," ",(0,im.jsx)(Rm,{children:"\ud83d\udc48"})]})})}),(0,im.jsxs)(bm,{children:[(0,im.jsxs)(xm,{children:["Influencer Marketing ",(0,im.jsx)(ym,{children:"Insights"})]}),(0,im.jsxs)(wm,{children:["Expert strategies, success stories, and actionable tips to help ",(0,im.jsx)("strong",{children:"agencies and brands"})," master influencer marketing and maximize ROI"]})]}),(0,im.jsx)(Im,{children:(0,im.jsx)($m,{type:"text",placeholder:"Search for tips, strategies, and case studies...",value:t,onChange:e=>n(e.target.value)})}),(0,im.jsx)(Lm,{children:Hm.map((e=>(0,im.jsx)(Nm,{active:r===e,category:e,onClick:()=>o(e),children:e},e)))}),(0,im.jsx)(km,{children:i.map(((e,t)=>(0,im.jsxs)(Dm,{delay:.1*t,children:[(0,im.jsx)(Sm,{children:(0,im.jsx)("img",{src:e.image,alt:e.title})}),(0,im.jsxs)(Cm,{children:[(0,im.jsxs)(Em,{children:[(0,im.jsx)(Tm,{category:e.category,onClick:()=>o(e.category),children:e.category}),(0,im.jsx)("span",{children:e.date}),(0,im.jsx)("span",{children:e.readTime})]}),(0,im.jsx)(Am,{children:e.title}),(0,im.jsx)(Pm,{children:e.excerpt}),(0,im.jsxs)(zm,{href:e.link,children:["Read More",(0,im.jsx)("span",{children:"\u2192"})]})]})]},e.id)))}),(0,im.jsx)(um,{})]})},Vm=Ho.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #ff0076, #590fb7);
  padding: 12px 24px;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
  font-size: ${e=>e.isMobile?"12px":"18px"}; /* Reduced from 14px to 12px for mobile */
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
  text-align: center;
  gap: 12px;
  flex-wrap: wrap;

  &:hover {
    background: linear-gradient(90deg, #f40076, #342711);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 8px 16px;
    gap: 8px;
  }
`,Um=Wo`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`,Ym=Ho.span`
  display: inline-block;
  margin: 0 5px; /* Space around emoticons */
  animation: ${Um} 1s infinite; /* Apply bounce animation, repeat infinitely */
`,Gm=()=>(0,im.jsx)("a",{href:"https://admirian.com/request-demo",style:{textDecoration:"none"},children:(0,im.jsx)(Vm,{isMobile:Fm,children:(0,im.jsxs)("span",{children:[(0,im.jsx)(Ym,{children:"\ud83c\udf89"})," Admirian is now live"," ",(0,im.jsx)(Ym,{children:"\ud83c\udf89"})," First 3 Months Free for Brands & Agencies!"," ",(0,im.jsx)(Ym,{children:"\ud83d\ude80"})," Click to Join"," ",(0,im.jsx)(Ym,{children:"\ud83d\udc48"})]})})}),qm=Wo`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`,Km=Wo`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.5; }
`,Xm=Wo`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Qm=Ho.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #0f172a, #1e293b);
  }
`,Zm=Ho.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`,Jm=Ho.div`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  background: linear-gradient(135deg, #3b82f620, #6366f120);
  border-radius: 50%;
  animation: ${qm} 6s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
  opacity: 0.5;
`,eg=Ho.div`
  position: absolute;
  width: 10px;
  height: 10px;
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  background: linear-gradient(135deg, #3b82f640, #6366f140);
  border-radius: 50%;
  animation: ${Km} 4s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
`,tg=Ho.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  padding-top: 60px;
`,ng=Ho.header`
  text-align: center;
  margin: 4rem 0;
`,rg=Ho.h1`
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(
    -45deg,
    #3b82f6,
    #6366f1,
    #8b5cf6,
    #3b82f6
  );
  background-size: 300% 300%;
  animation: ${Xm} 15s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 2rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`,og=Ho.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: #64748b;
  font-size: 1.25rem;
  font-weight: 500;
  
  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
  }
`,ig=Ho.span`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: linear-gradient(135deg, #3b82f620, #6366f120);
  border-radius: 20px;
  color: #3b82f6;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #3b82f640, #6366f140);
    color: #60a5fa;
  }
`,ag=Ho.div`
  margin: 4rem 0;
  font-size: 1.25rem;
  line-height: 1.8;
  color: #334155;
  
  p {
    margin: 1.5rem 0;
    font-size: 1.25rem;
    line-height: 1.8;
    
    strong {
      color: #1e293b;
      font-weight: 700;
    }
  }
  
  @media (prefers-color-scheme: dark) {
    color: #e2e8f0;
    
    p strong {
      color: #f1f5f9;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    
    p {
      font-size: 1.125rem;
    }
  }
`,sg=Ho.section`
  margin: 4rem 0;
  
  p {
    margin: 1.5rem 0;
  }
  
  p:first-of-type {
    font-size: 1.35rem;
    line-height: 1.7;
    color: #1e293b;
    font-weight: 500;
    
    @media (prefers-color-scheme: dark) {
      color: #f1f5f9;
    }
    
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
`,lg=Ho.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #1e293b;
  margin: 3rem 0 2rem;
  line-height: 1.2;
  letter-spacing: -0.01em;
  
  @media (prefers-color-scheme: dark) {
    color: #f1f5f9;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,cg=Ho.nav`
  background: rgba(255, 255, 255, 0.8);
  padding: 2.5rem;
  border-radius: 16px;
  margin: 3rem 0;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  h3 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    color: #1e293b;
    font-weight: 800;
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.8);
    
    h3 {
      color: #f1f5f9;
    }
  }
`,ug=Ho.a`
  display: block;
  color: #64748b;
  text-decoration: none;
  padding: 0.75rem 0;
  transition: all 0.2s ease;
  border-radius: 6px;
  padding-left: 0.75rem;
  font-size: 1.15rem;
  font-weight: 500;
  
  &:hover {
    color: #3b82f6;
    background: rgba(59, 130, 246, 0.1);
    padding-left: 1.25rem;
  }
  
  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
    
    &:hover {
      color: #60a5fa;
      background: rgba(96, 165, 250, 0.1);
    }
  }
`,dg=Ho.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,fg=Ho.li`
  display: flex;
  align-items: center;
  padding: 1.75rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  margin: 0;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(59, 130, 246, 0.1);
    border-color: rgba(59, 130, 246, 0.2);
  }
  
  &::before {
    content: "💡";
    margin-right: 1.25rem;
    color: #3b82f6;
    font-weight: bold;
    background: #dbeafe;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
    transition: all 0.3s ease;
    font-size: 1.5rem;
  }
  
  &:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 12px rgba(59, 130, 246, 0.3);
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.8);
    color: #e2e8f0;
    
    &::before {
      background: #1e40af;
      color: #bfdbfe;
    }
    
    &:hover {
      box-shadow: 0 8px 16px rgba(96, 165, 250, 0.1);
      border-color: rgba(96, 165, 250, 0.2);
    }
  }
`,hg=Ho.section`
  background: linear-gradient(135deg, #dbeafe, #e0e7ff);
  padding: 4rem 3rem;
  border-radius: 16px;
  margin: 4rem 0;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  h3 {
    font-size: 2.5rem;
    color: #1e293b;
    margin-bottom: 2rem;
    font-weight: 800;
    line-height: 1.2;
  }
  
  p {
    font-size: 1.35rem;
    margin: 1.5rem 0;
    color: #1e293b;
    font-weight: 500;
    line-height: 1.6;
  }
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #1e40af, #4338ca);
    
    h3, p {
      color: #e2e8f0;
    }
  }
  
  @media (max-width: 768px) {
    padding: 3rem 2rem;
    
    h3 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1.25rem;
    }
  }
`,pg=Ho.a`
  display: inline-block;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: white;
  padding: 1.25rem 2.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.25rem;
  margin-top: 2rem;
  transition: all 0.3s ease;
  border: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    background: linear-gradient(135deg, #2563eb, #4f46e5);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.15rem;
  }
`,mg=Ho.article`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.9);
  }
`,gg=Ho.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  
  @media (prefers-color-scheme: dark) {
    color: #f8fafc;
  }
`,vg=Ho.div`
  color: #475569;
  
  @media (prefers-color-scheme: dark) {
    color: #cbd5e1;
  }
`,yg=Ho.div`
  background: #f1f5f9;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-size: 0.9rem;
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
  }
`,bg=Ho.section`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 3rem 0;
`,xg=Ho.div`
  background: linear-gradient(135deg, #1e293b, #0f172a);
  padding: 3rem 2rem;
  border-radius: 16px;
  margin: 3rem 0;
  text-align: center;
  color: white;

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #e2e8f0;
  }

  ${pg} {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    font-size: 1.1rem;
    padding: 1.2rem 2.5rem;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(37, 99, 235, 0.4);
    }
  }
`,wg=Ho.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,kg=Ho.button`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  ${e=>{let{platform:t}=e;switch(t){case"twitter":return"\n          background: #1DA1F2;\n          color: white;\n        ";case"linkedin":return"\n          background: #0077B5;\n          color: white;\n        ";case"facebook":return"\n          background: #4267B2;\n          color: white;\n        ";default:return"\n          background: #e2e8f0;\n          color: #0f172a;\n        "}}}
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`,Sg=(Ho.input`
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid #e2e8f0;
  margin: 1rem 0;
  font-size: 1rem;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #2563eb;
  }
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    border-color: #334155;
    color: #f8fafc;
    
    &:focus {
      border-color: #60a5fa;
    }
  }
`,Ho.button`
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  }
`,Ho.a`
  display: block;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1rem 0;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  h4 {
    color: #0f172a;
    margin: 0.5rem 0;
    font-size: 1.25rem;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    
    h4 {
      color: #f8fafc;
    }
  }
`),jg=Ho.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Cg=Ho.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  h4 {
    color: #3b82f6;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  p {
    color: #334155;
    font-size: 1.1rem;
    line-height: 1.6;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(59, 130, 246, 0.1);
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.8);
    
    h4 {
      color: #60a5fa;
    }
    
    p {
      color: #e2e8f0;
    }
    
    &:hover {
      box-shadow: 0 8px 16px rgba(96, 165, 250, 0.1);
    }
  }
`,Eg=[{id:"intro",title:"Introduction"},{id:"why-crm",title:"Why Influencer CRM Matters"},{id:"top-10",title:"Top 10 CRMs of 2025"},{id:"admirian",title:"Why Admirian Leads"},{id:"features",title:"Must-Have Features"},{id:"trends",title:"2025 Industry Trends"},{id:"conclusion",title:"Conclusion"}],Tg=[{title:"AI-Powered Matching",description:"Advanced algorithms for perfect influencer-brand matches"},{title:"Automated Negotiations",description:"Streamlined contract processes with AI assistance"},{title:"Real-time Analytics",description:"Live campaign performance tracking and optimization"},{title:"Integrated Payments",description:"Seamless global payments and smart contracts"}],Ag=()=>(0,im.jsxs)(Qm,{children:[(0,im.jsxs)(en,{children:[(0,im.jsx)("title",{children:"Top 10 Influencer Marketing CRMs for 2025 | Admirian Blog"}),(0,im.jsx)("meta",{name:"description",content:"Discover the best influencer marketing CRM platforms for 2025. Compare features, pricing, and benefits of top tools including Admirian, Grin, Upfluence, and more."}),(0,im.jsx)("meta",{name:"keywords",content:"influencer marketing CRM, Admirian CRM, influencer management platform, influencer marketing tools 2025"}),(0,im.jsx)("meta",{property:"og:title",content:"Top 10 Influencer Marketing CRMs for 2025 | Admirian Blog"}),(0,im.jsx)("meta",{property:"og:description",content:"Discover the best influencer marketing CRM platforms for 2025. Compare features, pricing, and benefits of top tools including Admirian, Grin, Upfluence, and more."}),(0,im.jsx)("meta",{property:"og:type",content:"article"}),(0,im.jsx)("meta",{property:"og:url",content:"https://blogs.admirian.com/blogs/top-10-crms-2025"}),(0,im.jsx)("meta",{property:"og:image",content:"https://static.admirian.com/blog-crm-comparison.jpg"}),(0,im.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,im.jsx)("meta",{name:"twitter:title",content:"Top 10 Influencer Marketing CRMs for 2025"}),(0,im.jsx)("meta",{name:"twitter:description",content:"Compare the best influencer marketing CRM platforms for 2025"}),(0,im.jsx)("meta",{name:"twitter:image",content:"https://static.admirian.com/blog-crm-comparison.jpg"}),(0,im.jsx)("link",{rel:"canonical",href:"https://blogs.admirian.com/blogs/top-10-crms-2025"}),(0,im.jsx)("script",{type:"application/ld+json",children:'\n            {\n              "@context": "https://schema.org",\n              "@type": "BlogPosting",\n              "headline": "Top 10 Influencer Marketing CRMs to Watch in 2025",\n              "description": "Comprehensive comparison of the best influencer marketing CRM platforms for 2025",\n              "image": "https://static.admirian.com/blog-crm-comparison.jpg",\n              "author": {\n                "@type": "Organization",\n                "name": "Admirian Team"\n              },\n              "publisher": {\n                "@type": "Organization",\n                "name": "Admirian",\n                "logo": {\n                  "@type": "ImageObject",\n                  "url": "https://static.admirian.com/9a312601-984e-4237-bfad-1454204ce38f_BrandLogo.svg"\n                }\n              },\n              "datePublished": "2024-03-06",\n              "dateModified": "2024-03-06",\n              "mainEntityOfPage": {\n                "@type": "WebPage",\n                "@id": "https://blogs.admirian.com/blogs/top-10-crms-2025"\n              }\n            }\n          '})]}),(0,im.jsxs)(Zm,{children:[(0,im.jsx)(Jm,{size:300,top:5,left:-10,delay:0}),(0,im.jsx)(Jm,{size:200,top:30,left:80,delay:1}),(0,im.jsx)(Jm,{size:250,top:60,left:20,delay:2}),(0,im.jsx)(Jm,{size:180,top:80,left:70,delay:3}),(0,im.jsx)(eg,{size:12,top:20,left:30,delay:0}),(0,im.jsx)(eg,{size:8,top:40,left:70,delay:1}),(0,im.jsx)(eg,{size:15,top:60,left:40,delay:2}),(0,im.jsx)(eg,{size:10,top:80,left:90,delay:3})]}),(0,im.jsx)(am,{isMobile:Fm}),(0,im.jsx)(Gm,{}),(0,im.jsxs)(tg,{children:[(0,im.jsxs)(ng,{children:[(0,im.jsx)(ig,{children:"For Agency"}),(0,im.jsx)(rg,{children:"Top 10 Influencer Marketing CRMs to Watch in 2025"}),(0,im.jsxs)(og,{children:[(0,im.jsx)("span",{children:"March 6, 2025"}),(0,im.jsx)("span",{children:"15 min read"}),(0,im.jsx)("span",{children:"By Admirian Team"})]})]}),(0,im.jsxs)(cg,{children:[(0,im.jsx)("h3",{children:"Quick Navigation"}),Eg.map((e=>(0,im.jsx)(ug,{href:`#${e.id}`,children:e.title},e.id)))]}),(0,im.jsxs)(ag,{children:[(0,im.jsxs)(sg,{id:"intro",children:[(0,im.jsx)(lg,{children:"Introduction"}),(0,im.jsx)("p",{children:"As we approach 2025, the influencer marketing landscape is evolving rapidly. Managing influencer relationships has become more complex than ever, making a robust CRM system essential for success. In this comprehensive guide, we'll explore the top 10 influencer marketing CRMs that are shaping the industry's future."})]}),(0,im.jsxs)(sg,{id:"why-crm",children:[(0,im.jsx)(lg,{children:"Why Influencer CRM Matters"}),(0,im.jsxs)(dg,{children:[(0,im.jsx)(fg,{children:"Streamlined campaign management"}),(0,im.jsx)(fg,{children:"Automated influencer discovery"}),(0,im.jsx)(fg,{children:"Performance tracking and analytics"}),(0,im.jsx)(fg,{children:"Contract and payment management"}),(0,im.jsx)(fg,{children:"Relationship nurturing tools"})]})]}),(0,im.jsxs)(sg,{id:"top-10",children:[(0,im.jsx)(lg,{children:"Top 10 CRMs of 2025"}),[{name:"Admirian",tagline:"The All-in-One Influencer Powerhouse",description:"Admirian isn't just a CRM\u2014it's your influencer marketing co-pilot. From discovery to real-time ROI tracking, it's built for brands who want results, not guesswork.",features:["Smart influencer vetting","Campaign dashboards","Payment automation"],target:"SMBs to enterprises who crave control and insights",edge:"Focus on nano and micro-influencers\u20142025's ROI darlings",cta:"admirian.com/request-demo"},{name:"Grin",tagline:"The Creator Management Beast",description:"Grin's all about streamlining complex campaigns with a slick interface.",features:["Creator Lookalike tool","Social listening","Content performance analytics"],target:"Brands juggling big influencer rosters",edge:"Its ecommerce integrations (Shopify, Amazon) align with social commerce trends"},{name:"Upfluence",tagline:"The Data-Driven Matchmaker",description:"Upfluence uses AI to pair you with influencers who'll move the needle.",features:["Detailed audience analytics","Email/CRM integrations","Affiliate tracking"],target:"Ecommerce brands and agencies",edge:"Clickless affiliate tracking\u2014perfect for privacy-conscious buyers"},{name:"Traackr",tagline:"The Veteran Strategist",description:"Traackr's been around forever, and it's still a heavyweight for enterprise-grade management.",features:["Robust search filters","Audience visualization","Campaign reporting"],target:"Big brands with deep pockets (starts at $30k)",edge:"Its focus on B2B influencer trends\u2014like LinkedIn campaigns"},{name:"Aspire",tagline:"The Collaboration King",description:"Aspire makes outreach and partnerships a breeze with automation galore.",features:["Creator marketplace","Preset contract templates","Product seeding"],target:"Brands scaling existing campaigns",edge:"Long-term partnership tools\u2014think ambassador programs"},{name:"Klear",tagline:"The Outreach Specialist",description:"Klear's discovery portal is unmatched for finding niche influencers fast.",features:["Smart filters","Competitor audits","Demographics targeting"],target:"Marketers obsessed with precision targeting",edge:"Video-first focus\u2014huge for TikTok and YouTube in 2025"},{name:"Influencity",tagline:"The AI-Powered Newcomer",description:"Influencity's AI digs deep to match influencers to your brand's soul.",features:["Influencer scoring","Campaign forecasting","Engagement analytics"],target:"Data nerds who love predictive insights",edge:"AI-driven campaign planning\u2014less guesswork, more wins"},{name:"Later",tagline:"The Full-Service Creative",description:"Later blends influencer marketing with social media management\u2014perfect for multitaskers.",features:["10M+ influencer network","Campaign execution","Agency services"],target:"Brands wanting a one-stop shop",edge:"Its human-backed creator matching\u2014bots can't beat that yet"},{name:"TapInfluence",tagline:"The Opt-In Innovator",description:"With 50k+ opt-in influencers, TapInfluence ensures genuine partnerships.",features:["Discovery based on past picks","Trending topic alerts","Opt-in network"],target:"Brands prioritizing authenticity",edge:"UGC and EGC focus\u2014big for organic vibes in 2025"},{name:"IZEA",tagline:"The Pioneer with Punch",description:"IZEA's been shaping influencer tech for years\u2014experience pays off.",features:["Marketplace discovery","Detailed ROI metrics","Campaign suite"],target:"Agencies and enterprise brands",edge:"Predictive performance\u2014know your wins before you start"}].map(((e,t)=>(0,im.jsxs)(mg,{children:[(0,im.jsx)(gg,{children:`${t+1}. ${e.name}: ${e.tagline}`}),(0,im.jsxs)(vg,{children:[(0,im.jsx)("strong",{children:"Why It's Hot:"})," ",e.description,(0,im.jsxs)(yg,{children:["Standout Features: ",e.features.join(", ")]}),(0,im.jsxs)("p",{children:[(0,im.jsx)("strong",{children:"Who's It For:"})," ",e.target]}),(0,im.jsxs)("p",{children:[(0,im.jsx)("strong",{children:"2025 Edge:"})," ",e.edge]}),"Admirian"===e.name&&(0,im.jsx)(pg,{href:"https://admirian.com/request-demo",children:"Try it free"})]})]},t)))]}),(0,im.jsxs)(sg,{id:"admirian",children:[(0,im.jsx)(lg,{children:"Why Admirian Leads"}),(0,im.jsx)("p",{children:"We're biased (it's ours!), but hear us out: Admirian's built for 2025's realities\u2014tight budgets, niche audiences, and ROI pressure. It's not just a CRM; it's your campaign MVP."}),(0,im.jsx)(pg,{href:"https://admirian.com/request-demo",children:"Request a Demo"})]}),(0,im.jsxs)(sg,{id:"features",children:[(0,im.jsx)(lg,{children:"Must-Have Features"}),(0,im.jsxs)(dg,{children:[(0,im.jsx)(fg,{children:"Smart influencer vetting"}),(0,im.jsx)(fg,{children:"Campaign dashboards"}),(0,im.jsx)(fg,{children:"Payment automation"}),(0,im.jsx)(fg,{children:"Creator marketplace"}),(0,im.jsx)(fg,{children:"Preset contract templates"}),(0,im.jsx)(fg,{children:"Product seeding"}),(0,im.jsx)(fg,{children:"Detailed audience analytics"}),(0,im.jsx)(fg,{children:"Email/CRM integrations"}),(0,im.jsx)(fg,{children:"Affiliate tracking"}),(0,im.jsx)(fg,{children:"Robust search filters"}),(0,im.jsx)(fg,{children:"Audience visualization"}),(0,im.jsx)(fg,{children:"Campaign reporting"}),(0,im.jsx)(fg,{children:"Campaign execution"}),(0,im.jsx)(fg,{children:"Agency services"}),(0,im.jsx)(fg,{children:"10M+ influencer network"}),(0,im.jsx)(fg,{children:"Campaign forecasting"}),(0,im.jsx)(fg,{children:"Engagement analytics"}),(0,im.jsx)(fg,{children:"Creator Lookalike tool"}),(0,im.jsx)(fg,{children:"Social listening"}),(0,im.jsx)(fg,{children:"Content performance analytics"}),(0,im.jsx)(fg,{children:"Social commerce integrations"}),(0,im.jsx)(fg,{children:"Automated negotiations"}),(0,im.jsx)(fg,{children:"Real-time analytics"}),(0,im.jsx)(fg,{children:"Integrated payments"}),(0,im.jsx)(fg,{children:"Smart contracts"}),(0,im.jsx)(fg,{children:"Relationship nurturing tools"})]})]}),(0,im.jsxs)(sg,{id:"trends",children:[(0,im.jsx)(lg,{children:"2025 Industry Trends"}),(0,im.jsx)(jg,{children:Tg.map(((e,t)=>(0,im.jsxs)(Cg,{children:[(0,im.jsx)("h4",{children:e.title}),(0,im.jsx)("p",{children:e.description})]},t)))})]}),(0,im.jsxs)(hg,{children:[(0,im.jsx)(lg,{children:"Ready to Transform Your Influencer Marketing?"}),(0,im.jsx)("p",{children:"Experience the future of influencer marketing with Admirian's comprehensive CRM solution."}),(0,im.jsx)(pg,{href:"https://admirian.com/request-demo",children:"Request Demo"})]}),(0,im.jsxs)(bg,{children:[(0,im.jsx)(kg,{platform:"twitter",children:"Share on Twitter"}),(0,im.jsx)(kg,{platform:"linkedin",children:"Share on LinkedIn"}),(0,im.jsx)(kg,{platform:"facebook",children:"Share on Facebook"})]}),(0,im.jsxs)(xg,{as:"div",children:[(0,im.jsx)("h3",{children:"Want to Learn More?"}),(0,im.jsx)("p",{children:"Discover how Admirian can revolutionize your influencer marketing strategy."}),(0,im.jsx)(pg,{href:"https://admirian.com/request-demo",children:"Schedule a Demo"})]}),(0,im.jsxs)(wg,{children:[(0,im.jsx)(lg,{children:"Related Articles"}),(0,im.jsx)(Sg,{href:"/blogs/nano-influencers-2025",children:(0,im.jsx)("h4",{children:"Nano-Influencers: 2025's Tiny Titans of Influence"})}),(0,im.jsx)(Sg,{href:"/blogs/micro-vs-macro-2025",children:(0,im.jsx)("h4",{children:"Micro vs. Macro Influencers: Who Wins the ROI Game in 2025?"})})]})]})]}),(0,im.jsx)(um,{})]}),Pg=Wo`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`,zg=Wo`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.5; }
`,Og=Wo`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Mg=Ho.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #0f172a, #1e293b);
  }
`,Rg=Ho.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`,Ig=Ho.div`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  background: linear-gradient(135deg, #f43f5e20, #ec489920);
  border-radius: 50%;
  animation: ${Pg} 6s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
  opacity: 0.5;
`,$g=Ho.div`
  position: absolute;
  width: 10px;
  height: 10px;
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  background: linear-gradient(135deg, #f43f5e40, #ec489940);
  border-radius: 50%;
  animation: ${zg} 4s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
`,Lg=Ho.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  padding-top: 60px;
`,Ng=Ho.header`
  text-align: center;
  margin: 4rem 0;
`,_g=Ho.h1`
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(
    -45deg,
    #f43f5e,
    #ec4899,
    #db2777,
    #f43f5e
  );
  background-size: 300% 300%;
  animation: ${Og} 15s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 2rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`,Dg=Ho.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: #64748b;
  font-size: 1.25rem;
  font-weight: 500;
  
  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
  }
`,Fg=Ho.span`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: linear-gradient(135deg, #f43f5e20, #ec489920);
  border-radius: 20px;
  color: #f43f5e;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #f43f5e40, #ec489940);
    color: #fda4af;
  }
`,Bg=Ho.div`
  margin: 4rem 0;
  font-size: 1.25rem;
  line-height: 1.8;
  color: #334155;
  
  p {
    margin: 1.5rem 0;
    font-size: 1.25rem;
    line-height: 1.8;
    
    strong {
      color: #1e293b;
      font-weight: 700;
    }
  }
  
  @media (prefers-color-scheme: dark) {
    color: #e2e8f0;
    
    p strong {
      color: #f1f5f9;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    
    p {
      font-size: 1.125rem;
    }
  }
`,Hg=Ho.section`
  margin: 4rem 0;
  
  p {
    margin: 1.5rem 0;
  }
  
  p:first-of-type {
    font-size: 1.35rem;
    line-height: 1.7;
    color: #1e293b;
    font-weight: 500;
    
    @media (prefers-color-scheme: dark) {
      color: #f1f5f9;
    }
    
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
`,Wg=Ho.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #1e293b;
  margin: 3rem 0 2rem;
  line-height: 1.2;
  letter-spacing: -0.01em;
  
  @media (prefers-color-scheme: dark) {
    color: #f1f5f9;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Vg=Ho.nav`
  background: rgba(255, 255, 255, 0.8);
  padding: 2.5rem;
  border-radius: 16px;
  margin: 3rem 0;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  h3 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    color: #1e293b;
    font-weight: 800;
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.8);
    
    h3 {
      color: #f1f5f9;
    }
  }
`,Ug=Ho.a`
  display: block;
  color: #64748b;
  text-decoration: none;
  padding: 0.75rem 0;
  transition: all 0.2s ease;
  border-radius: 6px;
  padding-left: 0.75rem;
  font-size: 1.15rem;
  font-weight: 500;
  
  &:hover {
    color: #f43f5e;
    background: rgba(244, 63, 94, 0.1);
    padding-left: 1.25rem;
  }
  
  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
    
    &:hover {
      color: #fda4af;
      background: rgba(253, 164, 175, 0.1);
    }
  }
`,Yg=Ho.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Gg=Ho.li`
  display: flex;
  align-items: center;
  padding: 1.75rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  margin: 0;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(244, 63, 94, 0.1);
    border-color: rgba(244, 63, 94, 0.2);
  }
  
  &::before {
    content: "✨";
    margin-right: 1.25rem;
    color: #f43f5e;
    font-weight: bold;
    background: #ffe4e6;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
    transition: all 0.3s ease;
    font-size: 1.5rem;
  }
  
  &:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 12px rgba(244, 63, 94, 0.3);
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.8);
    color: #e2e8f0;
    
    &::before {
      background: #881337;
      color: #fda4af;
    }
    
    &:hover {
      box-shadow: 0 8px 16px rgba(253, 164, 175, 0.1);
      border-color: rgba(253, 164, 175, 0.2);
    }
  }
`,qg=(Ho.section`
  background: linear-gradient(135deg, #ffe4e6, #fce7f3);
  padding: 4rem 3rem;
  border-radius: 16px;
  margin: 4rem 0;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  h3 {
    font-size: 2.5rem;
    color: #1e293b;
    margin-bottom: 2rem;
    font-weight: 800;
    line-height: 1.2;
  }
  
  p {
    font-size: 1.35rem;
    margin: 1.5rem 0;
    color: #1e293b;
    font-weight: 500;
    line-height: 1.6;
  }
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #881337, #9d174d);
    
    h3, p {
      color: #e2e8f0;
    }
  }
  
  @media (max-width: 768px) {
    padding: 3rem 2rem;
    
    h3 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1.25rem;
    }
  }
`,Ho.a`
  display: inline-block;
  background: linear-gradient(135deg, #f43f5e, #ec4899);
  color: white;
  padding: 1.25rem 2.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.25rem;
  margin-top: 2rem;
  transition: all 0.3s ease;
  border: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(244, 63, 94, 0.3);
    background: linear-gradient(135deg, #e11d48, #db2777);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(244, 63, 94, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.15rem;
  }
`),Kg=(Ho.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Ho.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  h4 {
    color: #ec4899;
    margin-bottom: 0.5rem;
  }
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    
    h4 {
      color: #f472b6;
    }
  }
`,Ho.section`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 3rem 0;
`),Xg=Ho.button`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  ${e=>{let{platform:t}=e;switch(t){case"twitter":return"\n          background: #1DA1F2;\n          color: white;\n        ";case"linkedin":return"\n          background: #0077B5;\n          color: white;\n        ";case"facebook":return"\n          background: #4267B2;\n          color: white;\n        ";default:return"\n          background: #e2e8f0;\n          color: #0f172a;\n        "}}}
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`,Qg=Ho.div`
  background: linear-gradient(135deg, #831843, #4c1d95);
  padding: 3rem 2rem;
  border-radius: 16px;
  margin: 3rem 0;
  text-align: center;
  color: white;

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #fce7f3;
  }

  ${qg} {
    background: linear-gradient(135deg, #ec4899, #a855f7);
    font-size: 1.1rem;
    padding: 1.2rem 2.5rem;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(236, 72, 153, 0.4);
    }
  }
`,Zg=Ho.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Jg=Ho.a`
  display: block;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1rem 0;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  h4 {
    color: #0f172a;
    margin: 0.5rem 0;
    font-size: 1.25rem;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  @media (prefers-color-scheme: dark) {
    background: #1e293b;
    
    h4 {
      color: #f8fafc;
    }
  }
`,ev=[{id:"intro",title:"Introduction"},{id:"who-are-nanos",title:"Who Are Nano-Influencers?"},{id:"engagement-edge",title:"The Engagement Edge"},{id:"success-stories",title:"Success Stories"},{id:"how-to-find",title:"How to Find Nano-Influencers"},{id:"trend",title:"2025 Nano Trend"},{id:"get-started",title:"Getting Started"},{id:"conclusion",title:"Wrap-Up"}],tv=()=>(0,im.jsxs)(Mg,{children:[(0,im.jsxs)(en,{children:[(0,im.jsx)("title",{children:"Nano-Influencers: The Rising Stars of 2025 | Admirian Blog"}),(0,im.jsx)("meta",{name:"description",content:"Discover why nano-influencers are becoming the most valuable assets in influencer marketing. Learn how to leverage their authentic engagement and high ROI for your brand in 2025."}),(0,im.jsx)("meta",{name:"keywords",content:"nano influencers, micro influencers, influencer marketing 2025, authentic engagement, ROI optimization, influencer strategy"}),(0,im.jsx)("meta",{property:"og:title",content:"Nano-Influencers: The Rising Stars of 2025 | Admirian Blog"}),(0,im.jsx)("meta",{property:"og:description",content:"Discover why nano-influencers are becoming the most valuable assets in influencer marketing. Learn how to leverage their authentic engagement and high ROI for your brand in 2025."}),(0,im.jsx)("meta",{property:"og:type",content:"article"}),(0,im.jsx)("meta",{property:"og:url",content:"https://blogs.admirian.com/blogs/nano-influencers-2025"}),(0,im.jsx)("meta",{property:"og:image",content:"https://static.admirian.com/blog-nano-influencers.jpg"}),(0,im.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,im.jsx)("meta",{name:"twitter:title",content:"Nano-Influencers: The Rising Stars of 2025"}),(0,im.jsx)("meta",{name:"twitter:description",content:"Why nano-influencers are the future of authentic brand partnerships"}),(0,im.jsx)("meta",{name:"twitter:image",content:"https://static.admirian.com/blog-nano-influencers.jpg"}),(0,im.jsx)("link",{rel:"canonical",href:"https://blogs.admirian.com/blogs/nano-influencers-2025"}),(0,im.jsx)("script",{type:"application/ld+json",children:'\n            {\n              "@context": "https://schema.org",\n              "@type": "BlogPosting",\n              "headline": "Nano-Influencers: 2025\'s Tiny Titans of Influence",\n              "description": "An in-depth look at why nano-influencers are becoming the most valuable assets in influencer marketing",\n              "image": "https://static.admirian.com/blog-nano-influencers.jpg",\n              "author": {\n                "@type": "Organization",\n                "name": "Admirian Team"\n              },\n              "publisher": {\n                "@type": "Organization",\n                "name": "Admirian",\n                "logo": {\n                  "@type": "ImageObject",\n                  "url": "https://static.admirian.com/9a312601-984e-4237-bfad-1454204ce38f_BrandLogo.svg"\n                }\n              },\n              "datePublished": "2024-03-05",\n              "dateModified": "2024-03-05",\n              "mainEntityOfPage": {\n                "@type": "WebPage",\n                "@id": "https://blogs.admirian.com/blogs/nano-influencers-2025"\n              }\n            }\n          '})]}),(0,im.jsxs)(Rg,{children:[(0,im.jsx)(Ig,{size:300,top:5,left:-10,delay:0}),(0,im.jsx)(Ig,{size:200,top:30,left:80,delay:1}),(0,im.jsx)(Ig,{size:250,top:60,left:20,delay:2}),(0,im.jsx)(Ig,{size:180,top:80,left:70,delay:3}),(0,im.jsx)($g,{size:12,top:20,left:30,delay:0}),(0,im.jsx)($g,{size:8,top:40,left:70,delay:1}),(0,im.jsx)($g,{size:15,top:60,left:40,delay:2}),(0,im.jsx)($g,{size:10,top:80,left:90,delay:3})]}),(0,im.jsx)(am,{isMobile:Fm}),(0,im.jsx)(Gm,{}),(0,im.jsxs)(Lg,{children:[(0,im.jsxs)(Ng,{children:[(0,im.jsx)(Fg,{children:"For Brands"}),(0,im.jsx)(_g,{children:"Nano-Influencers: 2025's Tiny Titans of Influence"}),(0,im.jsxs)(Dg,{children:[(0,im.jsx)("span",{children:"March 5, 2025"}),(0,im.jsx)("span",{children:"12 min read"}),(0,im.jsx)("span",{children:"By Admirian Team"})]})]}),(0,im.jsxs)(Vg,{children:[(0,im.jsx)("h3",{children:"Quick Navigation"}),ev.map((e=>(0,im.jsx)(Ug,{href:`#${e.id}`,children:e.title},e.id)))]}),(0,im.jsxs)(Bg,{children:[(0,im.jsx)(Hg,{id:"intro",children:(0,im.jsx)("p",{children:"Nano-influencers might sound small\u2014think 1,000 to 10,000 followers\u2014but in 2025, they're proving size isn't everything. These tiny titans of influence are flipping the script on influencer marketing, delivering sky-high engagement, authentic vibes, and ROI that leaves bigger names in the dust. Wondering why brands are buzzing about them? Let's unpack the nano revolution, why it's your 2025 secret weapon, and how to tap into their power."})}),(0,im.jsxs)(Hg,{id:"who-are-nanos",children:[(0,im.jsx)(Wg,{children:"Who Are Nano-Influencers and Why Care?"}),(0,im.jsx)("p",{children:"Nano-influencers are everyday folks with modest followings\u2014your local foodie, fitness buff, or craft guru. Unlike macros with millions, nanos have tight-knit communities that trust them like friends. In 2025, that trust is gold. Studies show nanos average 8-10% engagement rates\u2014triple the 1-3% of mega-influencers. Why care? Because brands (maybe yours!) need real connections, not just reach, to cut through the noise."})]}),(0,im.jsxs)(Hg,{id:"engagement-edge",children:[(0,im.jsx)(Wg,{children:"Nano vs. Bigger Influencers: The Engagement Edge"}),(0,im.jsx)("p",{children:"Let's talk numbers. A macro-influencer with 500k followers might snag 5k likes\u2014decent, right? Now, a nano with 5k followers can pull 400+ likes, comments, and shares. That's a tighter bond, more conversations, and a higher chance those followers hit \"Buy Now.\" In 2025, algorithms favor engagement over raw reach\u2014 nanos are built for this shift. Plus, they cost less\u2014think $50-$200 per post vs. thousands for macros. Small budget, big impact."})]}),(0,im.jsxs)(Hg,{id:"success-stories",children:[(0,im.jsx)(Wg,{children:"Success Stories You'll Want to Steal"}),(0,im.jsxs)(Yg,{children:[(0,im.jsx)(Gg,{children:"Coffee Co.'s Local Boost: 300% sales spike with 10 nano-influencers"}),(0,im.jsx)(Gg,{children:"Skincare Startup: 1,200 site visits, 20% conversion rate"}),(0,im.jsx)(Gg,{children:"Fitness App: 90% engagement rate, doubled downloads"})]})]}),(0,im.jsxs)(Hg,{id:"how-to-find",children:[(0,im.jsx)(Wg,{children:"How to Hunt Down Nano Gold"}),(0,im.jsxs)(Yg,{children:[(0,im.jsx)(Gg,{children:"Niche Down: Search specific hashtags on Instagram or TikTok"}),(0,im.jsx)(Gg,{children:"Check Engagement: Look for 8%+ engagement rates"}),(0,im.jsx)(Gg,{children:"Go Local: Target your city or region for community ties"}),(0,im.jsx)(Gg,{children:"Use Admirian's CRM to automate discovery and vetting"})]})]}),(0,im.jsxs)(Hg,{id:"trend",children:[(0,im.jsx)(Wg,{children:"The Nano Trend You Can't Ignore"}),(0,im.jsx)("p",{children:"Why 2025? It's the year of authenticity. Consumers\u2014especially Gen Z and Millennials\u2014crave real over polished. Nanos fit that vibe: unscripted, relatable, trusted. Brands like Nike and Glossier are already shifting budgets to nano campaigns\u201420% of their influencer spend in 2024, projected to hit 35% by 2025 (eMarketer)."})]}),(0,im.jsxs)(Hg,{id:"get-started",children:[(0,im.jsx)(Wg,{children:"Get Started with Nano-Influencers Today"}),(0,im.jsx)("p",{children:"Ready to ride the nano wave? Start small\u2014pick 3-5 nanos, test a campaign, watch the magic. Admirian makes it stupid-easy: discover nanos with real pull, manage collabs in one dashboard, and track ROI down to the penny. No more guessing if that $100 post worked\u2014it's all there."}),(0,im.jsx)(qg,{href:"https://admirian.com/request-demo",children:"See How Admirian Finds Your Nano Stars"})]}),(0,im.jsxs)(Hg,{id:"conclusion",children:[(0,im.jsx)(Wg,{children:"Wrap-Up: Small Followings, Big Wins"}),(0,im.jsx)("p",{children:"Nano-influencers aren't just a trend\u2014they're 2025's tiny titans, rewriting influencer marketing with engagement that punches way above their weight. In a world drowning in noise, their authenticity cuts through. Want to scale smarter this year? Nanos are your edge\u2014and Admirian's your tool to unlock them."})]}),(0,im.jsxs)(Kg,{children:[(0,im.jsx)(Xg,{platform:"twitter",children:"Share on Twitter"}),(0,im.jsx)(Xg,{platform:"linkedin",children:"Share on LinkedIn"}),(0,im.jsx)(Xg,{platform:"facebook",children:"Share on Facebook"})]}),(0,im.jsxs)(Qg,{as:"div",children:[(0,im.jsx)("h3",{children:"Want to Learn More About Nano-Influencers?"}),(0,im.jsx)("p",{children:"Discover how Admirian can help you find and manage the perfect nano-influencers for your brand."}),(0,im.jsx)(qg,{href:"https://admirian.com/request-demo",children:"Schedule a Demo"})]}),(0,im.jsxs)(Zg,{children:[(0,im.jsx)(Wg,{children:"Related Articles"}),(0,im.jsx)(Jg,{href:"/blogs/top-10-crms-2025",children:(0,im.jsx)("h4",{children:"Top 10 Influencer Marketing CRMs to Watch in 2025"})}),(0,im.jsx)(Jg,{href:"/blogs/micro-vs-macro-2025",children:(0,im.jsx)("h4",{children:"Micro vs. Macro Influencers: Who Wins the ROI Game in 2025?"})})]})]})]}),(0,im.jsx)(um,{})]}),nv=Wo`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,rv=Wo`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`,ov=Wo`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.5; }
`,iv=Ho.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #0f172a, #1e293b);
  }
`,av=Ho.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`,sv=Ho.div`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  background: linear-gradient(135deg, #8b5cf620, #6366f120);
  border-radius: 50%;
  animation: ${rv} 6s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
  opacity: 0.5;
`,lv=Ho.div`
  position: absolute;
  width: 10px;
  height: 10px;
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  background: linear-gradient(135deg, #8b5cf640, #6366f140);
  border-radius: 50%;
  animation: ${ov} 4s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
`,cv=Ho.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  padding-top: 60px;
`,uv=Ho.header`
  text-align: center;
  margin: 4rem 0;
`,dv=Ho.h1`
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(
    -45deg,
    #8b5cf6,
    #6366f1,
    #4f46e5,
    #8b5cf6
  );
  background-size: 300% 300%;
  animation: ${nv} 15s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 2rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`,fv=Ho.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: #64748b;
  font-size: 1.25rem;
  font-weight: 500;
  
  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
  }
`,hv=Ho.span`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: linear-gradient(135deg, #8b5cf620, #6366f120);
  border-radius: 20px;
  color: #8b5cf6;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #8b5cf640, #6366f140);
    color: #a78bfa;
  }
`,pv=Ho.div`
  margin: 4rem 0;
  font-size: 1.25rem;
  line-height: 1.8;
  color: #334155;
  
  p {
    margin: 1.5rem 0;
    font-size: 1.25rem;
    line-height: 1.8;
    
    strong {
      color: #1e293b;
      font-weight: 700;
    }
  }
  
  @media (prefers-color-scheme: dark) {
    color: #e2e8f0;
    
    p strong {
      color: #f1f5f9;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    
    p {
      font-size: 1.125rem;
    }
  }
`,mv=Ho.section`
  margin: 4rem 0;
  
  p {
    margin: 1.5rem 0;
  }
  
  p:first-of-type {
    font-size: 1.35rem;
    line-height: 1.7;
    color: #1e293b;
    font-weight: 500;
    
    @media (prefers-color-scheme: dark) {
      color: #f1f5f9;
    }
    
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
`,gv=Ho.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #1e293b;
  margin: 3rem 0 2rem;
  line-height: 1.2;
  letter-spacing: -0.01em;
  
  @media (prefers-color-scheme: dark) {
    color: #f1f5f9;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,vv=Ho.nav`
  background: rgba(255, 255, 255, 0.8);
  padding: 2.5rem;
  border-radius: 16px;
  margin: 3rem 0;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  h3 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    color: #1e293b;
    font-weight: 800;
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.8);
    
    h3 {
      color: #f1f5f9;
    }
  }
`,yv=Ho.a`
  display: block;
  color: #64748b;
  text-decoration: none;
  padding: 0.75rem 0;
  transition: all 0.2s ease;
  border-radius: 6px;
  padding-left: 0.75rem;
  font-size: 1.15rem;
  font-weight: 500;
  
  &:hover {
    color: #8b5cf6;
    background: rgba(139, 92, 246, 0.1);
    padding-left: 1.25rem;
  }
  
  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
    
    &:hover {
      color: #a78bfa;
      background: rgba(167, 139, 250, 0.1);
    }
  }
`,bv=Ho.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,xv=Ho.li`
  display: flex;
  align-items: center;
  padding: 1.75rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  margin: 0;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(139, 92, 246, 0.1);
    border-color: rgba(139, 92, 246, 0.2);
  }
  
  &::before {
    content: "⚡";
    margin-right: 1.25rem;
    color: #8b5cf6;
    font-weight: bold;
    background: #ede9fe;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
    transition: all 0.3s ease;
    font-size: 1.5rem;
  }
  
  &:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 12px rgba(139, 92, 246, 0.3);
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.8);
    color: #e2e8f0;
    
    &::before {
      background: #4c1d95;
      color: #a78bfa;
    }
    
    &:hover {
      box-shadow: 0 8px 16px rgba(167, 139, 250, 0.1);
      border-color: rgba(167, 139, 250, 0.2);
    }
  }
`,wv=Ho.section`
  background: linear-gradient(135deg, #ede9fe, #e0e7ff);
  padding: 4rem 3rem;
  border-radius: 16px;
  margin: 4rem 0;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  h3 {
    font-size: 2.5rem;
    color: #1e293b;
    margin-bottom: 2rem;
    font-weight: 800;
    line-height: 1.2;
  }
  
  p {
    font-size: 1.35rem;
    margin: 1.5rem 0;
    color: #1e293b;
    font-weight: 500;
    line-height: 1.6;
  }
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #4c1d95, #312e81);
    
    h3, p {
      color: #e2e8f0;
    }
  }
  
  @media (max-width: 768px) {
    padding: 3rem 2rem;
    
    h3 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1.25rem;
    }
  }
`,kv=Ho.a`
  display: inline-block;
  background: linear-gradient(135deg, #8b5cf6, #6366f1);
  color: white;
  padding: 1.25rem 2.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.25rem;
  margin-top: 2rem;
  transition: all 0.3s ease;
  border: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(139, 92, 246, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.15rem;
  }
`,Sv=()=>(0,im.jsxs)(iv,{children:[(0,im.jsxs)(en,{children:[(0,im.jsx)("title",{children:"Micro vs Macro Influencers: ROI Comparison 2025 | Admirian Blog"}),(0,im.jsx)("meta",{name:"description",content:"Data-driven comparison of micro and macro influencers in 2025. Discover which influencer tier delivers the best ROI for your brand with real campaign metrics and insights."}),(0,im.jsx)("meta",{name:"keywords",content:"micro influencers, macro influencers, influencer ROI, campaign metrics, influencer marketing comparison, influencer tiers"}),(0,im.jsx)("meta",{property:"og:title",content:"Micro vs Macro Influencers: ROI Comparison 2025 | Admirian Blog"}),(0,im.jsx)("meta",{property:"og:description",content:"Data-driven comparison of micro and macro influencers in 2025. Discover which influencer tier delivers the best ROI for your brand with real campaign metrics and insights."}),(0,im.jsx)("meta",{property:"og:type",content:"article"}),(0,im.jsx)("meta",{property:"og:url",content:"https://blogs.admirian.com/blogs/micro-vs-macro-influencers"}),(0,im.jsx)("meta",{property:"og:image",content:"https://static.admirian.com/blog-influencer-comparison.jpg"}),(0,im.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,im.jsx)("meta",{name:"twitter:title",content:"Micro vs Macro Influencers: Who Wins in 2025?"}),(0,im.jsx)("meta",{name:"twitter:description",content:"Compare ROI and performance metrics between micro and macro influencers"}),(0,im.jsx)("meta",{name:"twitter:image",content:"https://static.admirian.com/blog-influencer-comparison.jpg"}),(0,im.jsx)("link",{rel:"canonical",href:"https://blogs.admirian.com/blogs/micro-vs-macro-influencers"}),(0,im.jsx)("script",{type:"application/ld+json",children:'\n            {\n              "@context": "https://schema.org",\n              "@type": "BlogPosting",\n              "headline": "Micro vs. Macro Influencers: Who Wins the ROI Game in 2025?",\n              "description": "A comprehensive data-driven analysis comparing the ROI and performance of micro and macro influencers",\n              "image": "https://static.admirian.com/blog-influencer-comparison.jpg",\n              "author": {\n                "@type": "Organization",\n                "name": "Admirian Team"\n              },\n              "publisher": {\n                "@type": "Organization",\n                "name": "Admirian",\n                "logo": {\n                  "@type": "ImageObject",\n                  "url": "https://static.admirian.com/9a312601-984e-4237-bfad-1454204ce38f_BrandLogo.svg"\n                }\n              },\n              "datePublished": "2024-03-04",\n              "dateModified": "2024-03-04",\n              "mainEntityOfPage": {\n                "@type": "WebPage",\n                "@id": "https://blogs.admirian.com/blogs/micro-vs-macro-influencers"\n              }\n            }\n          '})]}),(0,im.jsxs)(av,{children:[(0,im.jsx)(sv,{size:200,top:10,left:5,delay:0}),(0,im.jsx)(sv,{size:200,top:60,left:80,delay:1}),(0,im.jsx)(sv,{size:150,top:30,left:40,delay:2}),(0,im.jsx)(sv,{size:250,top:70,left:20,delay:3}),(0,im.jsx)(lv,{top:20,left:30,delay:0}),(0,im.jsx)(lv,{top:40,left:70,delay:1}),(0,im.jsx)(lv,{top:60,left:50,delay:2}),(0,im.jsx)(lv,{top:80,left:20,delay:3})]}),(0,im.jsx)(am,{isMobile:Fm}),(0,im.jsx)(Gm,{}),(0,im.jsxs)(cv,{children:[(0,im.jsxs)(uv,{children:[(0,im.jsx)(hv,{children:"Case Studies"}),(0,im.jsx)(dv,{children:"Micro vs. Macro Influencers: Who Wins the ROI Game in 2025?"}),(0,im.jsxs)(fv,{children:[(0,im.jsx)("span",{children:"March 4, 2025"}),(0,im.jsx)("span",{children:"12 min read"})]})]}),(0,im.jsxs)(vv,{children:[(0,im.jsx)("h3",{children:"Table of Contents"}),(0,im.jsx)(yv,{href:"#intro",children:"Introduction"}),(0,im.jsx)(yv,{href:"#micro",children:"Micro Influencers: The Engagement Powerhouses"}),(0,im.jsx)(yv,{href:"#macro",children:"Macro Influencers: The Reach Titans"}),(0,im.jsx)(yv,{href:"#roi",children:"The ROI Showdown: Numbers Don't Lie"}),(0,im.jsx)(yv,{href:"#playbook",children:"Micro vs. Macro: Your 2025 Playbook"}),(0,im.jsx)(yv,{href:"#interactive",children:"Interactive: Which Influencer Fits You?"}),(0,im.jsx)(yv,{href:"#wrap-up",children:"Wrap-Up: The 2025 ROI Crown"})]}),(0,im.jsxs)(pv,{children:[(0,im.jsx)(mv,{id:"intro",children:(0,im.jsx)("p",{children:"Influencer marketing is a $35 billion juggernaut in 2025, and brands are locked in a high-stakes debate: micro or macro influencers\u2014which delivers the best return on investment (ROI)? Micros (1k-100k followers) bring niche engagement and authenticity, while macros (100k+) offer mass reach and prestige. But when the budget's on the line, who wins? Let's break it down\u2014data, trends, and all\u2014to crown 2025's ROI champ. Hint: Admirian's got the tools to tip the scales either way."})}),(0,im.jsxs)(mv,{id:"micro",children:[(0,im.jsx)(gv,{children:"Micro Influencers: The Engagement Powerhouses"}),(0,im.jsx)("p",{children:"Micro-influencers are the unsung heroes of 2025. With followings between 1,000 and 100,000, they're not flashing mega-reach, but their engagement rates\u2014averaging 7-10%\u2014crush macros' 1-3% (Influencer Marketing Hub, 2024). Why? Their audiences are tight-knit, loyal, and trust their word like a friend's. In 2025, where authenticity rules, that's a goldmine."}),(0,im.jsxs)(bv,{children:[(0,im.jsx)(xv,{children:"Cost vs. Impact: A micro might charge $100-$500 per post\u2014pennies compared to macros' thousands"}),(0,im.jsx)(xv,{children:"Niche Wins: Micros dominate specific niches\u2014vegan foodies, fitness buffs, indie fashion"}),(0,im.jsx)(xv,{children:"2025 Edge: TikTok's algorithm prioritizes engagement over reach, making micros algorithm darlings"})]})]}),(0,im.jsxs)(mv,{id:"macro",children:[(0,im.jsx)(gv,{children:"Macro Influencers: The Reach Titans"}),(0,im.jsx)("p",{children:"Macro-influencers\u2014100k to millions of followers\u2014are the big guns. They're your celebs, thought leaders, or social media stars with clout to match. In 2025, their ROI shines when brand awareness is the goal, not just clicks."}),(0,im.jsxs)(bv,{children:[(0,im.jsx)(xv,{children:"Mass Exposure: One macro post can hit millions, ideal for launches or luxury campaigns"}),(0,im.jsx)(xv,{children:"Credibility Boost: 49% of consumers trust macro recommendations (Digital Marketing Institute, 2024)"}),(0,im.jsx)(xv,{children:"2025 Edge: Macros rule social commerce with shoppable posts driving direct sales"})]})]}),(0,im.jsxs)(mv,{id:"roi",children:[(0,im.jsx)(gv,{children:"The ROI Showdown: Numbers Don't Lie"}),(0,im.jsx)("p",{children:"Let's crunch it. A 2024 study by Markerly showed micros with 10k followers hit 8% engagement\u2014800 interactions\u2014while macros with 1M averaged 1.66%\u201416,600 interactions. But here's the kicker: per dollar spent, micros deliver. At $200/post, that's $0.25 per engagement; a $5,000 macro post? $0.30."}),(0,im.jsxs)(bv,{children:[(0,im.jsx)(xv,{children:"Conversions: Micros excel with 60% higher conversions per dollar spent (MIT Sloan, 2024)"}),(0,im.jsx)(xv,{children:"2025 Twist: Nano-influencers are emerging with 10%+ engagement rates"}),(0,im.jsx)(xv,{children:"Real Results: A coffee brand saw 300% sales spike with 10 micros for just $500"})]})]}),(0,im.jsxs)(mv,{id:"playbook",children:[(0,im.jsx)(gv,{children:"Micro vs. Macro: Your 2025 Playbook"}),(0,im.jsx)("p",{children:"So, who's your winner? Depends on your game plan:"}),(0,im.jsxs)(bv,{children:[(0,im.jsx)(xv,{children:"Go Micro: Perfect for budget-tight, niche-targeting, or engagement-driven campaigns"}),(0,im.jsx)(xv,{children:"Go Macro: Ideal for mass awareness, prestige, or social commerce scale"}),(0,im.jsx)(xv,{children:"Hybrid Hack: Mix both\u201420% of brands now blend them for maximum ROI (eMarketer)"})]})]}),(0,im.jsxs)(mv,{id:"interactive",children:[(0,im.jsx)(gv,{children:"Interactive: Which Influencer Fits You?"}),(0,im.jsxs)(wv,{children:[(0,im.jsx)("h3",{children:"Ready to find your perfect influencer match?"}),(0,im.jsx)("p",{children:"Let Admirian's smart algorithms find the right influencers for your campaign goals and budget."}),(0,im.jsx)(kv,{href:"https://admirian.com/request-demo",children:"Request Demo"})]})]}),(0,im.jsxs)(mv,{id:"wrap-up",children:[(0,im.jsx)(gv,{children:"Wrap-Up: The 2025 ROI Crown"}),(0,im.jsx)("p",{children:"Micros take the ROI crown in 2025 for efficiency\u2014higher engagement, lower costs, and niche precision. Macros fight back with reach and prestige, winning when scale's the goal. The real champ? Your strategy. With Admirian, you don't guess\u2014you pick winners, micro or macro, and track every dollar."}),(0,im.jsx)("p",{children:"More hacks at blogs.admirian.com\u2014stay ahead!"})]})]})]}),(0,im.jsx)(um,{})]}),jv=Wo`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Cv=Wo`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`,Ev=Wo`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.5; }
`,Tv=Ho.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #0f172a, #1e293b);
  }
`,Av=Ho.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`,Pv=Ho.div`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  background: linear-gradient(135deg, #10b98120, #0d948120);
  border-radius: 50%;
  animation: ${Cv} 6s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
  opacity: 0.5;
`,zv=Ho.div`
  position: absolute;
  width: 10px;
  height: 10px;
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  background: linear-gradient(135deg, #10b98140, #0d948140);
  border-radius: 50%;
  animation: ${Ev} 4s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
`,Ov=Ho.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;  
  padding-top: 60px;
`,Mv=Ho.header`
  text-align: center;
  margin: 4rem 0;
`,Rv=Ho.h1`
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(
    -45deg,
    #10b981,
    #059669,
    #047857,
    #10b981
  );
  background-size: 300% 300%;
  animation: ${jv} 15s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 2rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`,Iv=Ho.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: #64748b;
  font-size: 1.25rem;
  font-weight: 500;
  
  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
  }
`,$v=Ho.span`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: linear-gradient(135deg, #10b98120, #0d948120);
  border-radius: 20px;
  color: #10b981;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #10b98140, #0d948140);
    color: #34d399;
  }
`,Lv=Ho.div`
  margin: 4rem 0;
  font-size: 1.25rem;
  line-height: 1.8;
  color: #334155;
  
  p {
    margin: 1.5rem 0;
    font-size: 1.25rem;
    line-height: 1.8;
    
    strong {
      color: #1e293b;
      font-weight: 700;
    }
  }
  
  @media (prefers-color-scheme: dark) {
    color: #e2e8f0;
    
    p strong {
      color: #f1f5f9;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    
    p {
      font-size: 1.125rem;
    }
  }
`,Nv=Ho.section`
  margin: 4rem 0;
  
  p {
    margin: 1.5rem 0;
  }
  
  p:first-of-type {
    font-size: 1.35rem;
    line-height: 1.7;
    color: #1e293b;
    font-weight: 500;
    
    @media (prefers-color-scheme: dark) {
      color: #f1f5f9;
    }
    
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
`,_v=Ho.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #1e293b;
  margin: 3rem 0 2rem;
  line-height: 1.2;
  letter-spacing: -0.01em;
  
  @media (prefers-color-scheme: dark) {
    color: #f1f5f9;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Dv=Ho.nav`
  background: rgba(255, 255, 255, 0.8);
  padding: 2.5rem;
  border-radius: 16px;
  margin: 3rem 0;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  h3 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    color: #1e293b;
    font-weight: 800;
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.8);
    
    h3 {
      color: #f1f5f9;
    }
  }
`,Fv=Ho.a`
  display: block;
  color: #64748b;
  text-decoration: none;
  padding: 0.75rem 0;
  transition: all 0.2s ease;
  border-radius: 6px;
  padding-left: 0.75rem;
  font-size: 1.15rem;
  font-weight: 500;
  
  &:hover {
    color: #10b981;
    background: rgba(16, 185, 129, 0.1);
    padding-left: 1.25rem;
  }
  
  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
    
    &:hover {
      color: #34d399;
      background: rgba(52, 211, 153, 0.1);
    }
  }
`,Bv=Ho.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Hv=Ho.li`
  display: flex;
  align-items: center;
  padding: 1.75rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  margin: 0;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(16, 185, 129, 0.1);
    border-color: rgba(16, 185, 129, 0.2);
  }
  
  &::before {
    content: "💬";
    margin-right: 1.25rem;
    color: #10b981;
    font-weight: bold;
    background: #d1fae5;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
    transition: all 0.3s ease;
    font-size: 1.5rem;
  }
  
  &:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 12px rgba(16, 185, 129, 0.3);
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.8);
    color: #e2e8f0;
    
    &::before {
      background: #065f46;
      color: #34d399;
    }
    
    &:hover {
      box-shadow: 0 8px 16px rgba(52, 211, 153, 0.1);
      border-color: rgba(52, 211, 153, 0.2);
    }
  }
`,Wv=Ho.section`
  background: linear-gradient(135deg, #d1fae5, #ecfdf5);
  padding: 4rem 3rem;
  border-radius: 16px;
  margin: 4rem 0;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  h3 {
    font-size: 2.5rem;
    color: #1e293b;
    margin-bottom: 2rem;
    font-weight: 800;
    line-height: 1.2;
  }
  
  p {
    font-size: 1.35rem;
    margin: 1.5rem 0;
    color: #1e293b;
    font-weight: 500;
    line-height: 1.6;
  }
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #065f46, #064e3b);
    
    h3, p {
      color: #e2e8f0;
    }
  }
  
  @media (max-width: 768px) {
    padding: 3rem 2rem;
    
    h3 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1.25rem;
    }
  }
`,Vv=Ho.a`
  display: inline-block;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 1.25rem 2.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.25rem;
  margin-top: 2rem;
  transition: all 0.3s ease;
  border: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
    background: linear-gradient(135deg, #059669, #047857);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.15rem;
  }
`,Uv=()=>(0,im.jsxs)(Tv,{children:[(0,im.jsxs)(en,{children:[(0,im.jsx)("title",{children:"How to Negotiate with Influencers: Expert Guide 2025 | Admirian Blog"}),(0,im.jsx)("meta",{name:"description",content:"Master the art of influencer negotiations with proven scripts and strategies. Learn how to secure win-win partnerships and maximize campaign value in 2025."}),(0,im.jsx)("meta",{name:"keywords",content:"influencer negotiation, partnership agreements, influencer contracts, campaign rates, influencer collaboration, negotiation strategies"}),(0,im.jsx)("meta",{property:"og:title",content:"How to Negotiate with Influencers: Expert Guide 2025 | Admirian Blog"}),(0,im.jsx)("meta",{property:"og:description",content:"Master the art of influencer negotiations with proven scripts and strategies. Learn how to secure win-win partnerships and maximize campaign value in 2025."}),(0,im.jsx)("meta",{property:"og:type",content:"article"}),(0,im.jsx)("meta",{property:"og:url",content:"https://blogs.admirian.com/blogs/how-to-negotiate-with-influencers"}),(0,im.jsx)("meta",{property:"og:image",content:"https://static.admirian.com/blog-negotiation.jpg"}),(0,im.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,im.jsx)("meta",{name:"twitter:title",content:"Expert Guide to Influencer Negotiations"}),(0,im.jsx)("meta",{name:"twitter:description",content:"Scripts and strategies for successful influencer partnerships"}),(0,im.jsx)("meta",{name:"twitter:image",content:"https://static.admirian.com/blog-negotiation.jpg"}),(0,im.jsx)("link",{rel:"canonical",href:"https://blogs.admirian.com/blogs/how-to-negotiate-with-influencers"}),(0,im.jsx)("script",{type:"application/ld+json",children:'\n            {\n              "@context": "https://schema.org",\n              "@type": "BlogPosting",\n              "headline": "How to Negotiate with Influencers: Scripts and Strategies That Work",\n              "description": "Expert guide to mastering influencer negotiations with proven scripts, strategies, and tips for securing successful partnerships",\n              "image": "https://static.admirian.com/blog-negotiation.jpg",\n              "author": {\n                "@type": "Organization",\n                "name": "Admirian Team"\n              },\n              "publisher": {\n                "@type": "Organization",\n                "name": "Admirian",\n                "logo": {\n                  "@type": "ImageObject",\n                  "url": "https://static.admirian.com/9a312601-984e-4237-bfad-1454204ce38f_BrandLogo.svg"\n                }\n              },\n              "datePublished": "2024-03-03",\n              "dateModified": "2024-03-03",\n              "mainEntityOfPage": {\n                "@type": "WebPage",\n                "@id": "https://blogs.admirian.com/blogs/how-to-negotiate-with-influencers"\n              }\n            }\n          '})]}),(0,im.jsxs)(Av,{children:[(0,im.jsx)(Pv,{size:200,top:10,left:5,delay:0}),(0,im.jsx)(Pv,{size:200,top:60,left:80,delay:1}),(0,im.jsx)(Pv,{size:150,top:30,left:40,delay:2}),(0,im.jsx)(Pv,{size:250,top:70,left:20,delay:3}),(0,im.jsx)(zv,{top:20,left:30,delay:0}),(0,im.jsx)(zv,{top:40,left:70,delay:1}),(0,im.jsx)(zv,{top:60,left:50,delay:2}),(0,im.jsx)(zv,{top:80,left:20,delay:3})]}),(0,im.jsx)(am,{isMobile:Fm}),(0,im.jsx)(Gm,{}),(0,im.jsxs)(Ov,{children:[(0,im.jsxs)(Mv,{children:[(0,im.jsx)($v,{children:"For Agency"}),(0,im.jsx)(Rv,{children:"How to Negotiate with Influencers: Scripts and Strategies That Work"}),(0,im.jsxs)(Iv,{children:[(0,im.jsx)("span",{children:"March 3, 2025"}),(0,im.jsx)("span",{children:"15 min read"})]})]}),(0,im.jsxs)(Dv,{children:[(0,im.jsx)("h3",{children:"Table of Contents"}),(0,im.jsx)(Fv,{href:"#intro",children:"Introduction"}),(0,im.jsx)(Fv,{href:"#why",children:"Why Negotiation Skills Save Your Influencer Budget"}),(0,im.jsx)(Fv,{href:"#script1",children:"Script #1: The Product-for-Post Pitch That Works"}),(0,im.jsx)(Fv,{href:"#script2",children:"Script #2: Rate Talks, No Sweat"}),(0,im.jsx)(Fv,{href:"#strategies",children:"Top Strategies to Lock In the Best Deals"}),(0,im.jsx)(Fv,{href:"#interactive",children:"Interactive: Test Your Negotiation Style"}),(0,im.jsx)(Fv,{href:"#wins",children:"Real Wins: Negotiation in Action"}),(0,im.jsx)(Fv,{href:"#wrap-up",children:"Wrap-Up: Negotiate Like a 2025 Pro"})]}),(0,im.jsxs)(Lv,{children:[(0,im.jsx)(Nv,{id:"intro",children:(0,im.jsx)("p",{children:"Negotiating with influencers in 2025 isn't just about haggling\u2014it's an art that can save your budget and spark killer campaigns. Whether you're pitching a nano-influencer with 5k followers or a macro with a million, the right words and moves can seal the deal without drama. Want to master influencer negotiations and get more bang for your buck? Here's your 2025 guide\u2014complete with scripts, strategies, and a secret weapon (hint: Admirian's got you covered)."})}),(0,im.jsxs)(Nv,{id:"why",children:[(0,im.jsx)(_v,{children:"Why Negotiation Skills Save Your Influencer Budget"}),(0,im.jsx)("p",{children:"Influencer rates are all over the map\u2014$50 to $50,000 per post, depending on reach, niche, and clout. A shaky pitch can mean overpaying or losing a creator to a savvier brand. In 2025, with influencer marketing hitting $35 billion (eMarketer), negotiation isn't optional\u2014it's your edge. Nail it, and you'll stretch every dollar into measurable ROI."})]}),(0,im.jsxs)(Nv,{id:"script1",children:[(0,im.jsx)(_v,{children:"Script #1: The Product-for-Post Pitch That Works"}),(0,im.jsx)("p",{children:"Freebies can hook influencers\u2014especially nanos or micros\u2014if you sell it well. Here's a script to land a yes without cash upfront:"}),(0,im.jsxs)(Bv,{children:[(0,im.jsx)(Hv,{children:"Subject: Collaboration Opportunity with [Your Brand]"}),(0,im.jsx)(Hv,{children:'Body: "Hey [Influencer Name], I\'m obsessed with your [specific content]\u2014your vibe is spot-on for [Your Brand]."'}),(0,im.jsx)(Hv,{children:"Why It Works: Flattery + value (free product) + low pressure = a win"})]}),(0,im.jsxs)("p",{children:[(0,im.jsx)("strong",{children:"Admirian Tip:"})," Store this script in Admirian's outreach tool\u2014send to 10 influencers in one click."]})]}),(0,im.jsxs)(Nv,{id:"script2",children:[(0,im.jsx)(_v,{children:"Script #2: Rate Talks, No Sweat"}),(0,im.jsx)("p",{children:"Cash deals need finesse\u2014here's how to negotiate rates without awkward vibes:"}),(0,im.jsxs)(Bv,{children:[(0,im.jsx)(Hv,{children:"Subject: Let's Make [Campaign Name] Happen!"}),(0,im.jsx)(Hv,{children:"Body: Start with your offer, invite their input, sweeten with perks"}),(0,im.jsx)(Hv,{children:"Admirian Edge: Track responses and tweak your pitch on the fly"})]})]}),(0,im.jsxs)(Nv,{id:"strategies",children:[(0,im.jsx)(_v,{children:"Top Strategies to Lock In the Best Deals"}),(0,im.jsx)("p",{children:"Scripts are your opener\u2014strategies close the deal. Here's what works in 2025:"}),(0,im.jsxs)(Bv,{children:[(0,im.jsx)(Hv,{children:"Know Their Worth: Check engagement (aim for 8%+ for micros)"}),(0,im.jsx)(Hv,{children:"Offer Perks: Free products, affiliate codes, or long-term partnerships"}),(0,im.jsx)(Hv,{children:"Bundle It: Multiple posts or platforms for a 15-25% discount"})]})]}),(0,im.jsxs)(Nv,{id:"interactive",children:[(0,im.jsx)(_v,{children:"Interactive: Test Your Negotiation Style"}),(0,im.jsxs)(Wv,{children:[(0,im.jsx)("h3",{children:"Ready to master influencer negotiations?"}),(0,im.jsx)("p",{children:"Let Admirian's smart tools help you craft perfect pitches and track negotiations."}),(0,im.jsx)(Vv,{href:"https://admirian.com/request-demo",children:"Request Demo"})]})]}),(0,im.jsxs)(Nv,{id:"wins",children:[(0,im.jsx)(_v,{children:"Real Wins: Negotiation in Action"}),(0,im.jsxs)(Bv,{children:[(0,im.jsx)(Hv,{children:"Nano Nailed It: $250 total landed 20k engaged views, 15% conversion"}),(0,im.jsx)(Hv,{children:"Macro Mastered: $3k deal with affiliate link brought $10k in sales"}),(0,im.jsx)(Hv,{children:"Hybrid Hustle: 3 posts for $800 saved 20% and doubled reach"})]})]}),(0,im.jsxs)(Nv,{id:"wrap-up",children:[(0,im.jsx)(_v,{children:"Wrap-Up: Negotiate Like a 2025 Pro"}),(0,im.jsx)("p",{children:"Influencer negotiations don't have to drain you\u2014or your wallet. With sharp scripts and slick strategies, you'll land creators who deliver, from nanos to macros. In 2025, it's about value, not just cost\u2014and tools like Admirian make it effortless. Store pitches, track talks, and lock in deals\u2014all in one CRM."}),(0,im.jsx)("p",{children:"More 2025 tips at blogs.admirian.com\u2014stay sharp!"})]})]})]}),(0,im.jsx)(um,{})]}),Yv=Wo`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Gv=Wo`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`,qv=Wo`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.5; }
`,Kv=Ho.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #0f172a, #1e293b);
  }
`,Xv=Ho.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`,Qv=Ho.div`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  background: linear-gradient(135deg, #10b98120, #0d948820);
  border-radius: 50%;
  animation: ${Gv} 6s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
  opacity: 0.5;
`,Zv=Ho.div`
  position: absolute;
  width: 10px;
  height: 10px;
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  background: linear-gradient(135deg, #10b98140, #0d948840);
  border-radius: 50%;
  animation: ${qv} 4s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
`,Jv=Ho.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  padding-top: 60px;
`,ey=Ho.header`
  text-align: center;
  margin: 4rem 0;
`,ty=Ho.h1`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(
    -45deg,
    #10b981,
    #059669,
    #047857,
    #10b981
  );
  background-size: 300% 300%;
  animation: ${Yv} 15s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 1.5rem 0;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,ny=Ho.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: #64748b;
  font-size: 1.1rem;
  
  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
  }
`,ry=Ho.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #10b98120, #0d948820);
  border-radius: 20px;
  color: #10b981;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #05966940, #0d948840);
    color: #34d399;
  }
`,oy=Ho.div`
  margin: 4rem 0;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #334155;
  
  @media (prefers-color-scheme: dark) {
    color: #e2e8f0;
  }
`,iy=Ho.section`
  margin: 3rem 0;
`,ay=Ho.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 2rem 0;
  
  @media (prefers-color-scheme: dark) {
    color: #f1f5f9;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,sy=Ho.nav`
  background: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 16px;
  margin: 2rem 0;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #1e293b;
    font-weight: 700;
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.8);
    
    h3 {
      color: #f1f5f9;
    }
  }
`,ly=Ho.a`
  display: block;
  color: #64748b;
  text-decoration: none;
  padding: 0.5rem 0;
  transition: all 0.2s ease;
  border-radius: 6px;
  padding-left: 0.5rem;
  
  &:hover {
    color: #10b981;
    background: rgba(16, 185, 129, 0.1);
    padding-left: 1rem;
  }
  
  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
    
    &:hover {
      color: #34d399;
      background: rgba(52, 211, 153, 0.1);
    }
  }
`,cy=Ho.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,uy=Ho.li`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  margin: 0;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(16, 185, 129, 0.1);
    border-color: rgba(16, 185, 129, 0.2);
  }
  
  &::before {
    content: "📈";
    margin-right: 1rem;
    color: #10b981;
    font-weight: bold;
    background: #d1fae5;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }
  
  &:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 12px rgba(16, 185, 129, 0.3);
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.8);
    color: #e2e8f0;
    
    &::before {
      background: #065f46;
      color: #34d399;
    }
    
    &:hover {
      box-shadow: 0 8px 16px rgba(52, 211, 153, 0.1);
      border-color: rgba(52, 211, 153, 0.2);
    }
  }
`,dy=Ho.section`
  background: linear-gradient(135deg, #d1fae5, #ccfbf1);
  padding: 3rem 2rem;
  border-radius: 16px;
  margin: 3rem 0;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  h3 {
    font-size: 2rem;
    color: #1e293b;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }
  
  p {
    font-size: 1.2rem;
    margin: 1.5rem 0;
    color: #1e293b;
  }
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #065f46, #0d9488);
    
    h3, p {
      color: #e2e8f0;
    }
  }
`,fy=Ho.a`
  display: inline-block;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 1rem;
  transition: all 0.3s ease;
  border: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
    background: linear-gradient(135deg, #059669, #047857);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);
  }
`,hy=()=>(0,im.jsxs)(Kv,{children:[(0,im.jsxs)(en,{children:[(0,im.jsx)("title",{children:"Agency Success: Managing 1000+ Influencers with Admirian | Case Study"}),(0,im.jsx)("meta",{name:"description",content:"Discover how a leading marketing agency scaled their influencer operations and reduced management time by 70% using Admirian's CRM platform. Real results and insights."}),(0,im.jsx)("meta",{name:"keywords",content:"influencer management, agency case study, campaign scaling, ROI optimization, influencer marketing automation, Admirian CRM"}),(0,im.jsx)("meta",{property:"og:title",content:"Agency Success: Managing 1000+ Influencers with Admirian | Case Study"}),(0,im.jsx)("meta",{property:"og:description",content:"Discover how a leading marketing agency scaled their influencer operations and reduced management time by 70% using Admirian's CRM platform. Real results and insights."}),(0,im.jsx)("meta",{property:"og:type",content:"article"}),(0,im.jsx)("meta",{property:"og:url",content:"https://blogs.admirian.com/blogs/agency-success-1000-influencers"}),(0,im.jsx)("meta",{property:"og:image",content:"https://static.admirian.com/blog-agency-success.jpg"}),(0,im.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,im.jsx)("meta",{name:"twitter:title",content:"How to Manage 1000+ Influencers Efficiently"}),(0,im.jsx)("meta",{name:"twitter:description",content:"Agency success story: Scaling influencer operations with Admirian"}),(0,im.jsx)("meta",{name:"twitter:image",content:"https://static.admirian.com/blog-agency-success.jpg"}),(0,im.jsx)("link",{rel:"canonical",href:"https://blogs.admirian.com/blogs/agency-success-1000-influencers"}),(0,im.jsx)("script",{type:"application/ld+json",children:'\n            {\n              "@context": "https://schema.org",\n              "@type": "BlogPosting",\n              "headline": "Agency Success: Managing 1000+ Influencers with Admirian",\n              "description": "Case study on how a leading marketing agency scaled their influencer operations while reducing management time by 70%",\n              "image": "https://static.admirian.com/blog-agency-success.jpg",\n              "author": {\n                "@type": "Organization",\n                "name": "Admirian Team"\n              },\n              "publisher": {\n                "@type": "Organization",\n                "name": "Admirian",\n                "logo": {\n                  "@type": "ImageObject",\n                  "url": "https://static.admirian.com/9a312601-984e-4237-bfad-1454204ce38f_BrandLogo.svg"\n                }\n              },\n              "datePublished": "2024-03-02",\n              "dateModified": "2024-03-02",\n              "mainEntityOfPage": {\n                "@type": "WebPage",\n                "@id": "https://blogs.admirian.com/blogs/agency-success-1000-influencers"\n              }\n            }\n          '})]}),(0,im.jsxs)(Xv,{children:[(0,im.jsx)(Qv,{size:200,top:10,left:5,delay:0}),(0,im.jsx)(Qv,{size:200,top:60,left:80,delay:1}),(0,im.jsx)(Qv,{size:150,top:30,left:40,delay:2}),(0,im.jsx)(Qv,{size:250,top:70,left:20,delay:3}),(0,im.jsx)(Zv,{top:20,left:30,delay:0}),(0,im.jsx)(Zv,{top:40,left:70,delay:1}),(0,im.jsx)(Zv,{top:60,left:50,delay:2}),(0,im.jsx)(Zv,{top:80,left:20,delay:3})]}),(0,im.jsx)(am,{isMobile:Fm}),(0,im.jsx)(Gm,{}),(0,im.jsxs)(Jv,{children:[(0,im.jsxs)(ey,{children:[(0,im.jsx)(ry,{children:"Case Studies"}),(0,im.jsx)(ty,{children:"Agency Success: Managing 1000+ Influencers with Admirian"}),(0,im.jsxs)(ny,{children:[(0,im.jsx)("span",{children:"March 2, 2025"}),(0,im.jsx)("span",{children:"8 min read"})]})]}),(0,im.jsxs)(sy,{children:[(0,im.jsx)("h3",{children:"Table of Contents"}),(0,im.jsx)(ly,{href:"#intro",children:"Introduction"}),(0,im.jsx)(ly,{href:"#challenge",children:"The 2025 Challenge: Scaling Influencer Chaos"}),(0,im.jsx)(ly,{href:"#discovery",children:"Step 1: Discovery at Scale\u2014Finding the Right 1,000"}),(0,im.jsx)(ly,{href:"#centralize",children:"Step 2: Centralize the Madness\u2014One Dashboard"}),(0,im.jsx)(ly,{href:"#execute",children:"Step 3: Execute Like Clockwork"}),(0,im.jsx)(ly,{href:"#measure",children:"Step 4: Measure ROI Across the Board"}),(0,im.jsx)(ly,{href:"#scale",children:"Step 5: Scale Without Breaking"}),(0,im.jsx)(ly,{href:"#interactive",children:"Interactive: Your Agency Scale Score"}),(0,im.jsx)(ly,{href:"#wrap-up",children:"Wrap-Up: Admirian's Agency Superpower"})]}),(0,im.jsxs)(oy,{children:[(0,im.jsx)(iy,{id:"intro",children:(0,im.jsx)("p",{children:"Picture this: your agency's juggling 1,000+ influencers\u2014nanos, micros, macros\u2014across dozens of campaigns, platforms, and deadlines. Chaos? Not in 2025. With influencer marketing hitting a $35 billion valuation (eMarketer), agencies are under pressure to scale without cracking. Enter Admirian, the CRM that turns a logistical nightmare into a streamlined success story."})}),(0,im.jsxs)(iy,{id:"challenge",children:[(0,im.jsx)(ay,{children:"The 2025 Challenge: Scaling Influencer Chaos"}),(0,im.jsx)("p",{children:"Managing 1,000+ influencers isn't just \"more work\"\u2014it's a different beast. Spreadsheets buckle, emails pile up, and tracking ROI across TikTok, Instagram, and YouTube feels like herding cats in a storm. In 2025, 45% of agencies report scaling as their top hurdle (Influencer Marketing Hub), with campaigns spanning nanos (1k-10k followers) to macros (100k+)."}),(0,im.jsx)("p",{children:"The stakes? Clients demand results\u201465% expect measurable ROI within 90 days (HypeAuditor). Admirian's built to tame this chaos\u2014here's how."})]}),(0,im.jsxs)(iy,{id:"discovery",children:[(0,im.jsx)(ay,{children:"Step 1: Discovery at Scale\u2014Finding the Right 1,000"}),(0,im.jsx)("p",{children:"Hand-picking 1,000 influencers is a fool's errand\u2014unless you've got Admirian. Its discovery engine scans millions of creators across platforms, filtering by niche, engagement (8%+ for micros!), and audience fit."}),(0,im.jsxs)(cy,{children:[(0,im.jsx)(uy,{children:"Find 200 fitness nanos in LA in minutes"}),(0,im.jsx)(uy,{children:"Sort 50 macros for global launches instantly"}),(0,im.jsx)(uy,{children:"AI flags fake followers\u2014avoid the 30% padding stats"})]}),(0,im.jsxs)("p",{children:[(0,im.jsx)("strong",{children:"Agency Win:"})," One agency found 300 nanos for a CPG brand in a week\u2014campaign launched 50% faster."]})]}),(0,im.jsxs)(iy,{id:"centralize",children:[(0,im.jsx)(ay,{children:"Step 2: Centralize the Madness\u2014One Dashboard"}),(0,im.jsx)("p",{children:"With 1,000 influencers, scattered DMs and email threads are a death sentence. Admirian's dashboard is your war room\u2014every creator, campaign, and deliverable in one view."}),(0,im.jsxs)(cy,{children:[(0,im.jsx)(uy,{children:'Tag influencers by type ("Nano Beauty")'}),(0,im.jsx)(uy,{children:"Assign tasks with clear deadlines"}),(0,im.jsx)(uy,{children:"Send 500 personalized pitches in one click"})]}),(0,im.jsxs)("p",{children:[(0,im.jsx)("strong",{children:"Admirian Edge:"})," A 2025 agency cut management time by 40%\u2014hours back for strategy, not admin."]})]}),(0,im.jsxs)(iy,{id:"execute",children:[(0,im.jsx)(ay,{children:"Step 3: Execute Like Clockwork"}),(0,im.jsx)("p",{children:"Deadlines don't care about scale. Admirian's workflows keep 1,000 posts on schedule\u2014automated reminders ping influencers, content approvals happen in-app, and real-time updates flag delays."}),(0,im.jsxs)(cy,{children:[(0,im.jsx)(uy,{children:"Automated reminders keep creators on track"}),(0,im.jsx)(uy,{children:"In-app content approvals streamline workflow"}),(0,im.jsx)(uy,{children:"Real-time updates catch delays before they happen"})]}),(0,im.jsxs)("p",{children:[(0,im.jsx)("strong",{children:"Real Talk:"}),' "Admirian\'s like having 10 extra staff," says one agency lead.']})]}),(0,im.jsxs)(iy,{id:"measure",children:[(0,im.jsx)(ay,{children:"Step 4: Measure ROI Across the Board"}),(0,im.jsx)("p",{children:"With 1,000 influencers, \"gut feel\" won't cut it. Admirian's analytics track every metric\u2014views, clicks, conversions\u2014for each creator."}),(0,im.jsxs)(cy,{children:[(0,im.jsx)(uy,{children:"Track ROI for every creator and campaign"}),(0,im.jsx)(uy,{children:"Compare performance across influencer tiers"}),(0,im.jsx)(uy,{children:"Export detailed reports for clients"})]}),(0,im.jsxs)("p",{children:[(0,im.jsx)("strong",{children:"2025 Stat:"})," Agencies using Admirian report 25% higher client retention\u2014data wins loyalty."]})]}),(0,im.jsxs)(iy,{id:"scale",children:[(0,im.jsx)(ay,{children:"Step 5: Scale Without Breaking"}),(0,im.jsx)("p",{children:"Managing 1,000 today, 2,000 tomorrow? Admirian scales with you. Save workflows from a 500-influencer campaign, tweak for 1,500, and roll out. Payments? Automated for all 1,000\u2014no manual invoicing."}),(0,im.jsxs)(cy,{children:[(0,im.jsx)(uy,{children:"Reusable campaign workflows"}),(0,im.jsx)(uy,{children:"Automated payments for all creators"}),(0,im.jsx)(uy,{children:"Scalable infrastructure that grows with you"})]}),(0,im.jsxs)("p",{children:[(0,im.jsx)("strong",{children:"Success Story:"})," A beauty agency doubled its client base\u2014Admirian's backbone kept it smooth."]})]}),(0,im.jsx)(iy,{id:"interactive",children:(0,im.jsxs)(dy,{children:[(0,im.jsx)("h3",{children:"Your Agency Scale Score"}),(0,im.jsx)("p",{children:"Ready to manage 1000+ influencers? Let Admirian show you how."}),(0,im.jsx)(fy,{href:"https://admirian.com/request-demo",children:"Request Demo"})]})}),(0,im.jsxs)(iy,{id:"wrap-up",children:[(0,im.jsx)(ay,{children:"Wrap-Up: Admirian's Agency Superpower"}),(0,im.jsx)("p",{children:"Managing 1,000+ influencers in 2025 isn't a pipe dream\u2014it's a reality with Admirian. From discovery to ROI, it's the CRM that scales your agency without breaking it. Chaos turns to control, clients stay happy, and your team stays sane."}),(0,im.jsx)("p",{children:"More agency hacks at blogs.admirian.com\u2014scale smarter!"})]})]})]}),(0,im.jsx)(um,{})]}),py=Wo`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,my=Wo`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`,gy=Wo`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.5; }
`,vy=Ho.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #0f172a, #1e293b);
  }
`,yy=Ho.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`,by=Ho.div`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  background: linear-gradient(135deg, #6366f120, #818cf820);
  border-radius: 50%;
  animation: ${my} 6s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
  opacity: 0.5;
`,xy=Ho.div`
  position: absolute;
  width: 10px;
  height: 10px;
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  background: linear-gradient(135deg, #6366f140, #818cf840);
  border-radius: 50%;
  animation: ${gy} 4s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
`,wy=Ho.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  padding-top: 60px;
`,ky=Ho.header`
  text-align: center;
  margin: 4rem 0;
`,Sy=Ho.h1`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(
    -45deg,
    #6366f1,
    #818cf8,
    #4f46e5,
    #6366f1
  );
  background-size: 300% 300%;
  animation: ${py} 15s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 1.5rem 0;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,jy=Ho.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: #64748b;
  font-size: 1.1rem;
  
  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
  }
`,Cy=Ho.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #6366f120, #818cf820);
  border-radius: 20px;
  color: #6366f1;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #4f46e540, #6366f140);
    color: #818cf8;
  }
`,Ey=Ho.div`
  margin: 4rem 0;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #334155;
  
  @media (prefers-color-scheme: dark) {
    color: #e2e8f0;
  }
`,Ty=Ho.section`
  margin: 3rem 0;
`,Ay=Ho.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 2rem 0;
  
  @media (prefers-color-scheme: dark) {
    color: #f1f5f9;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Py=Ho.nav`
  background: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 16px;
  margin: 2rem 0;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #1e293b;
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.8);
    
    h3 {
      color: #f1f5f9;
    }
  }
`,zy=Ho.a`
  display: block;
  color: #64748b;
  text-decoration: none;
  padding: 0.5rem 0;
  transition: color 0.2s ease;
  
  &:hover {
    color: #6366f1;
  }
  
  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
    
    &:hover {
      color: #818cf8;
    }
  }
`,Oy=Ho.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,My=Ho.li`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  margin: 0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
  
  &::before {
    content: "📜";
    margin-right: 1rem;
    font-size: 1.2rem;
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.8);
    color: #e2e8f0;
  }
`,Ry=Ho.section`
  background: linear-gradient(135deg, #e0e7ff, #ede9fe);
  padding: 3rem 2rem;
  border-radius: 16px;
  margin: 3rem 0;
  text-align: center;
  
  h3 {
    font-size: 2rem;
    color: #1e293b;
    margin-bottom: 1.5rem;
  }
  
  p {
    font-size: 1.2rem;
    margin: 1.5rem 0;
    color: #1e293b;
  }
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #4f46e5, #6366f1);
    
    h3, p {
      color: #e2e8f0;
    }
  }
`,Iy=Ho.a`
  display: inline-block;
  background: linear-gradient(135deg, #6366f1, #818cf8);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
  }
`,$y=()=>(0,im.jsxs)(vy,{children:[(0,im.jsxs)(en,{children:[(0,im.jsx)("title",{children:"Influencer Content Rights Guide for Brands | Admirian Blog"}),(0,im.jsx)("meta",{name:"description",content:"Master influencer content rights and licensing. Learn how to create bulletproof contracts, manage usage rights, and protect your brand's interests in influencer partnerships."}),(0,im.jsx)("meta",{name:"keywords",content:"influencer content rights, content licensing, usage rights, influencer contracts, brand protection, legal guidelines"}),(0,im.jsx)("meta",{property:"og:title",content:"Influencer Content Rights Guide for Brands | Admirian Blog"}),(0,im.jsx)("meta",{property:"og:description",content:"Master influencer content rights and licensing. Learn how to create bulletproof contracts, manage usage rights, and protect your brand's interests in influencer partnerships."}),(0,im.jsx)("meta",{property:"og:type",content:"article"}),(0,im.jsx)("meta",{property:"og:url",content:"https://blogs.admirian.com/blogs/influencer-content-rights"}),(0,im.jsx)("meta",{property:"og:image",content:"https://static.admirian.com/blog-content-rights.jpg"}),(0,im.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,im.jsx)("meta",{name:"twitter:title",content:"The Complete Guide to Influencer Content Rights"}),(0,im.jsx)("meta",{name:"twitter:description",content:"Essential guide to content licensing and usage rights in influencer marketing"}),(0,im.jsx)("meta",{name:"twitter:image",content:"https://static.admirian.com/blog-content-rights.jpg"}),(0,im.jsx)("link",{rel:"canonical",href:"https://blogs.admirian.com/blogs/influencer-content-rights"}),(0,im.jsx)("script",{type:"application/ld+json",children:'\n            {\n              "@context": "https://schema.org",\n              "@type": "BlogPosting",\n              "headline": "The Brand\'s Playbook to Influencer Content Rights",\n              "description": "Comprehensive guide to content licensing, usage rights, and creating influencer contracts that protect your brand",\n              "image": "https://static.admirian.com/blog-content-rights.jpg",\n              "author": {\n                "@type": "Organization",\n                "name": "Admirian Team"\n              },\n              "publisher": {\n                "@type": "Organization",\n                "name": "Admirian",\n                "logo": {\n                  "@type": "ImageObject",\n                  "url": "https://static.admirian.com/9a312601-984e-4237-bfad-1454204ce38f_BrandLogo.svg"\n                }\n              },\n              "datePublished": "2024-03-01",\n              "dateModified": "2024-03-01",\n              "mainEntityOfPage": {\n                "@type": "WebPage",\n                "@id": "https://blogs.admirian.com/blogs/influencer-content-rights"\n              }\n            }\n          '})]}),(0,im.jsxs)(yy,{children:[(0,im.jsx)(by,{size:200,top:10,left:5,delay:0}),(0,im.jsx)(by,{size:200,top:60,left:80,delay:1}),(0,im.jsx)(by,{size:150,top:30,left:40,delay:2}),(0,im.jsx)(by,{size:250,top:70,left:20,delay:3}),(0,im.jsx)(xy,{top:20,left:30,delay:0}),(0,im.jsx)(xy,{top:40,left:70,delay:1}),(0,im.jsx)(xy,{top:60,left:50,delay:2}),(0,im.jsx)(xy,{top:80,left:20,delay:3})]}),(0,im.jsx)(am,{isMobile:Fm}),(0,im.jsx)(Gm,{}),(0,im.jsxs)(wy,{children:[(0,im.jsxs)(ky,{children:[(0,im.jsx)(Cy,{children:"For Brands"}),(0,im.jsx)(Sy,{children:"The Brand's Playbook to Influencer Content Rights"}),(0,im.jsxs)(jy,{children:[(0,im.jsx)("span",{children:"March 1, 2025"}),(0,im.jsx)("span",{children:"9 min read"})]})]}),(0,im.jsxs)(Py,{children:[(0,im.jsx)("h3",{children:"Table of Contents"}),(0,im.jsx)(zy,{href:"#intro",children:"Introduction"}),(0,im.jsx)(zy,{href:"#why",children:"Why Influencer Content Rights Matter in 2025"}),(0,im.jsx)(zy,{href:"#options",children:"Step 1: Know Your Rights Options"}),(0,im.jsx)(zy,{href:"#negotiation",children:"Step 2: Nail the Negotiation Upfront"}),(0,im.jsx)(zy,{href:"#contracts",children:"Step 3: Get It in Writing\u2014Every Time"}),(0,im.jsx)(zy,{href:"#maximize",children:"Step 4: Maximize Your Content's Value"}),(0,im.jsx)(zy,{href:"#checklist",children:"Interactive: Your Rights Checklist"}),(0,im.jsx)(zy,{href:"#wrap-up",children:"Wrap-Up: Own Your Influencer Content in 2025"})]}),(0,im.jsxs)(Ey,{children:[(0,im.jsx)(Ty,{id:"intro",children:(0,im.jsx)("p",{children:"Influencer marketing is booming in 2025\u2014$35 billion and counting\u2014but there's a catch: who owns that killer content your influencers create? Brands are pouring cash into campaigns, yet without clear content rights, you might be stuck admiring posts you can't reuse. Enter the brand's playbook to influencer content rights\u2014your 2025 guide to securing, managing, and maximizing creator content like a pro."})}),(0,im.jsxs)(Ty,{id:"why",children:[(0,im.jsx)(Ay,{children:"Why Influencer Content Rights Matter in 2025"}),(0,im.jsx)("p",{children:"Influencer content isn't just a post\u2014it's an asset. That Instagram reel driving 10k clicks? You'll want it for ads, emails, or your site. But here's the rub: influencers own their work by default under copyright law (U.S. Copyright Office, 2024). Without explicit rights, you're borrowing, not owning. In 2025, with 62% of brands repurposing influencer content (eMarketer), securing rights isn't optional\u2014it's your ROI lifeline."}),(0,im.jsxs)("p",{children:[(0,im.jsx)("strong",{children:"Why It's Tricky:"})," Nanos might not care, but macros often demand control\u2014or extra pay\u2014for usage beyond a post."]})]}),(0,im.jsxs)(Ty,{id:"options",children:[(0,im.jsx)(Ay,{children:"Step 1: Know Your Rights Options"}),(0,im.jsx)("p",{children:"Content rights aren't one-size-fits-all. Here's what you can negotiate in 2025:"}),(0,im.jsxs)(Oy,{children:[(0,im.jsx)(My,{children:"Usage Rights: Permission to share on your channels\u2014e.g., reposting a Story. Short-term, cheap, common with micros."}),(0,im.jsx)(My,{children:"Exclusive Rights: No one else (competitors included) uses it\u2014pricier, think macros or long campaigns."}),(0,im.jsx)(My,{children:"Full Ownership: You own the content outright\u2014rare, costly, but gold for evergreen assets like product demos."})]}),(0,im.jsxs)("p",{children:[(0,im.jsx)("strong",{children:"2025 Tip:"})," Aim for usage rights with nanos (80% agree easily) and exclusivity with macros for big launches."]})]}),(0,im.jsxs)(Ty,{id:"negotiation",children:[(0,im.jsx)(Ay,{children:"Step 2: Nail the Negotiation Upfront"}),(0,im.jsx)("p",{children:"Don't wing it\u2014spell out rights in your pitch. Here's a script to lock it in:"}),(0,im.jsxs)(Oy,{children:[(0,im.jsx)(My,{children:"Subject: [Your Brand] Collab\u2014Let's Talk Content!"}),(0,im.jsx)(My,{children:"Body: Clear, casual, and upfront pitch setting expectations"}),(0,im.jsx)(My,{children:"Admirian Hack: Store templates in our outreach tool\u2014track agreements easily"})]})]}),(0,im.jsxs)(Ty,{id:"contracts",children:[(0,im.jsx)(Ay,{children:"Step 3: Get It in Writing\u2014Every Time"}),(0,im.jsx)("p",{children:"Verbal yeses don't cut it\u2014contracts are your shield. In 2025, 45% of brands face rights disputes without paperwork (HypeAuditor). Keep it simple:"}),(0,im.jsxs)(Oy,{children:[(0,im.jsx)(My,{children:"Non-exclusive usage rights for 12 months across all platforms"}),(0,im.jsx)(My,{children:"Content remains influencer's property unless stated otherwise"}),(0,im.jsx)(My,{children:"Payment covers post + rights\u2014clear total compensation"})]})]}),(0,im.jsxs)(Ty,{id:"maximize",children:[(0,im.jsx)(Ay,{children:"Step 4: Maximize Your Content's Value"}),(0,im.jsx)("p",{children:"Got the rights? Milk it. In 2025, repurposing is king\u201470% of marketers say it's their top ROI booster (Digital Marketing Institute)."}),(0,im.jsxs)(Oy,{children:[(0,im.jsx)(My,{children:"Socials: Turn a nano's reel into a carousel\u2014cross-platform reach spikes"}),(0,im.jsx)(My,{children:"Ads: Use macro's posts in paid campaigns\u201435% higher click-through vs. stock"}),(0,im.jsx)(My,{children:"Website: Embed influencer testimonials\u2014builds trust, keeps visitors longer"})]})]}),(0,im.jsx)(Ty,{id:"checklist",children:(0,im.jsxs)(Ry,{children:[(0,im.jsx)("h3",{children:"Your Rights Checklist"}),(0,im.jsx)("p",{children:"Master content rights with Admirian's smart tools and templates."}),(0,im.jsx)(Iy,{href:"https://admirian.com/request-demo",children:"Request Demo"})]})}),(0,im.jsxs)(Ty,{id:"wrap-up",children:[(0,im.jsx)(Ay,{children:"Wrap-Up: Own Your Influencer Content in 2025"}),(0,im.jsx)("p",{children:"Influencer content rights aren't a side note\u2014they're your playbook to winning in 2025. Know your options, negotiate smart, lock it in writing, and stretch every post's value. With tools like Admirian, it's not just possible\u2014it's effortless. Manage rights, track deals, and repurpose like a boss\u2014all in one CRM."}),(0,im.jsx)("p",{children:"More 2025 plays at blogs.admirian.com\u2014stay in the game!"})]})]})]}),(0,im.jsx)(um,{})]}),Ly=Wo`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Ny=Wo`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`,_y=Wo`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.5; }
`,Dy=Ho.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background: linear-gradient(135deg, #f8fafc, #f1f5f9);

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #0f172a, #1e293b);
  }
`,Fy=Ho.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`,By=Ho.div`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  background: linear-gradient(135deg, #3b82f620, #6366f120);
  border-radius: 50%;
  animation: ${Ny} 6s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
  opacity: 0.5;
`,Hy=Ho.div`
  position: absolute;
  width: 10px;
  height: 10px;
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  background: linear-gradient(135deg, #3b82f640, #6366f140);
  border-radius: 50%;
  animation: ${_y} 4s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
`,Wy=Ho.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  padding-top: 60px;
`,Vy=Ho.header`
  text-align: center;
  margin: 4rem 0;
`,Uy=Ho.h1`
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(
    -45deg,
    #3b82f6,
    #6366f1,
    #8b5cf6,
    #3b82f6
  );
  background-size: 300% 300%;
  animation: ${Ly} 15s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 2rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`,Yy=Ho.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: #64748b;
  font-size: 1.25rem;
  font-weight: 500;
  
  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
  }
`,Gy=Ho.span`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: linear-gradient(135deg, #3b82f620, #6366f120);
  border-radius: 20px;
  color: #3b82f6;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #3b82f640, #6366f140);
    color: #60a5fa;
  }
`,qy=Ho.div`
  margin: 4rem 0;
  font-size: 1.25rem;
  line-height: 1.8;
  color: #334155;
  
  p {
    margin: 1.5rem 0;
    font-size: 1.25rem;
    line-height: 1.8;
    
    strong {
      color: #1e293b;
      font-weight: 700;
    }
  }
  
  @media (prefers-color-scheme: dark) {
    color: #e2e8f0;
    
    p strong {
      color: #f1f5f9;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    
    p {
      font-size: 1.125rem;
    }
  }
`,Ky=Ho.section`
  margin: 4rem 0;
  
  p {
    margin: 1.5rem 0;
  }
  
  p:first-of-type {
    font-size: 1.35rem;
    line-height: 1.7;
    color: #1e293b;
    font-weight: 500;
    
    @media (prefers-color-scheme: dark) {
      color: #f1f5f9;
    }
    
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
`,Xy=Ho.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #1e293b;
  margin: 3rem 0 2rem;
  line-height: 1.2;
  letter-spacing: -0.01em;
  
  @media (prefers-color-scheme: dark) {
    color: #f1f5f9;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Qy=Ho.nav`
  background: rgba(255, 255, 255, 0.8);
  padding: 2.5rem;
  border-radius: 16px;
  margin: 3rem 0;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  h3 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    color: #1e293b;
    font-weight: 800;
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.8);
    
    h3 {
      color: #f1f5f9;
    }
  }
`,Zy=Ho.a`
  display: block;
  color: #64748b;
  text-decoration: none;
  padding: 0.75rem 0;
  transition: all 0.2s ease;
  border-radius: 6px;
  padding-left: 0.75rem;
  font-size: 1.15rem;
  font-weight: 500;
  
  &:hover {
    color: #3b82f6;
    background: rgba(59, 130, 246, 0.1);
    padding-left: 1.25rem;
  }
  
  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
    
    &:hover {
      color: #60a5fa;
      background: rgba(96, 165, 250, 0.1);
    }
  }
`,Jy=(Ho.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Ho.li`
  display: flex;
  align-items: center;
  padding: 1.75rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  margin: 0;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(59, 130, 246, 0.1);
    border-color: rgba(59, 130, 246, 0.2);
  }
  
  &::before {
    content: "💡";
    margin-right: 1.25rem;
    color: #3b82f6;
    font-weight: bold;
    background: #dbeafe;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
    transition: all 0.3s ease;
    font-size: 1.5rem;
  }
  
  &:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 12px rgba(59, 130, 246, 0.3);
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.8);
    color: #e2e8f0;
    
    &::before {
      background: #1e40af;
      color: #bfdbfe;
    }

    &:hover {
      box-shadow: 0 8px 16px rgba(96, 165, 250, 0.1);
      border-color: rgba(96, 165, 250, 0.2);
    }
  }
`,Ho.section`
  background: linear-gradient(135deg, #dbeafe, #e0e7ff);
  padding: 4rem 3rem;
  border-radius: 16px;
  margin: 4rem 0;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  h3 {
    font-size: 2.5rem;
    color: #1e293b;
    margin-bottom: 2rem;
    font-weight: 800;
    line-height: 1.2;
  }
  
  p {
    font-size: 1.35rem;
    margin: 1.5rem 0;
    color: #1e293b;
    font-weight: 500;
    line-height: 1.6;
  }
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #1e40af, #4338ca);
    
    h3, p {
      color: #e2e8f0;
    }
  }
  
  @media (max-width: 768px) {
    padding: 3rem 2rem;
    
    h3 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1.25rem;
    }
  }
`),eb=Ho.a`
  display: inline-block;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: white;
  padding: 1.25rem 2.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.25rem;
  margin-top: 2rem;
  transition: all 0.3s ease;
  border: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    background: linear-gradient(135deg, #2563eb, #4f46e5);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.15rem;
  }
`,tb=()=>(0,im.jsxs)(Dy,{children:[(0,im.jsxs)(en,{children:[(0,im.jsx)("title",{children:"How to Use CRM Tools for Influencer Campaigns | Admirian Blog"}),(0,im.jsx)("meta",{name:"description",content:"Learn how to leverage CRM tools like Admirian to streamline your influencer campaigns. Discover best practices for campaign management, tracking, and ROI optimization."}),(0,im.jsx)("meta",{name:"keywords",content:"influencer CRM, campaign management, ROI tracking, influencer marketing tools, campaign optimization, Admirian CRM"}),(0,im.jsx)("meta",{property:"og:title",content:"How to Use CRM Tools for Influencer Campaigns | Admirian Blog"}),(0,im.jsx)("meta",{property:"og:description",content:"Learn how to leverage CRM tools like Admirian to streamline your influencer campaigns. Discover best practices for campaign management, tracking, and ROI optimization."}),(0,im.jsx)("meta",{property:"og:type",content:"article"}),(0,im.jsx)("meta",{property:"og:url",content:"https://blogs.admirian.com/blogs/how-to-use-crm-tools"}),(0,im.jsx)("meta",{property:"og:image",content:"https://static.admirian.com/blog-crm-tools.jpg"}),(0,im.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,im.jsx)("meta",{name:"twitter:title",content:"Master Influencer Campaign Management with CRM Tools"}),(0,im.jsx)("meta",{name:"twitter:description",content:"Step-by-step guide to streamlining influencer campaigns with CRM tools"}),(0,im.jsx)("meta",{name:"twitter:image",content:"https://static.admirian.com/blog-crm-tools.jpg"}),(0,im.jsx)("link",{rel:"canonical",href:"https://blogs.admirian.com/blogs/how-to-use-crm-tools"}),(0,im.jsx)("script",{type:"application/ld+json",children:'\n            {\n              "@context": "https://schema.org",\n              "@type": "BlogPosting",\n              "headline": "How to Use CRM Tools to Streamline Influencer Campaigns",\n              "description": "Comprehensive guide to leveraging CRM tools for efficient influencer campaign management and ROI optimization",\n              "image": "https://static.admirian.com/blog-crm-tools.jpg",\n              "author": {\n                "@type": "Organization",\n                "name": "Admirian Team"\n              },\n              "publisher": {\n                "@type": "Organization",\n                "name": "Admirian",\n                "logo": {\n                  "@type": "ImageObject",\n                  "url": "https://static.admirian.com/9a312601-984e-4237-bfad-1454204ce38f_BrandLogo.svg"\n                }\n              },\n              "datePublished": "2024-03-31",\n              "dateModified": "2024-03-31",\n              "mainEntityOfPage": {\n                "@type": "WebPage",\n                "@id": "https://blogs.admirian.com/blogs/how-to-use-crm-tools"\n              }\n            }\n          '})]}),(0,im.jsxs)(Fy,{children:[(0,im.jsx)(By,{size:200,top:10,left:5,delay:0}),(0,im.jsx)(By,{size:200,top:60,left:80,delay:1}),(0,im.jsx)(By,{size:150,top:30,left:40,delay:2}),(0,im.jsx)(By,{size:250,top:70,left:20,delay:3}),(0,im.jsx)(Hy,{top:20,left:30,delay:0}),(0,im.jsx)(Hy,{top:40,left:70,delay:1}),(0,im.jsx)(Hy,{top:60,left:50,delay:2}),(0,im.jsx)(Hy,{top:80,left:20,delay:3})]}),(0,im.jsx)(am,{isMobile:Fm}),(0,im.jsx)(Gm,{}),(0,im.jsxs)(Wy,{children:[(0,im.jsxs)(Vy,{children:[(0,im.jsx)(Gy,{children:"For Brands"}),(0,im.jsx)(Uy,{children:"How to Use CRM Tools Like Admirian to Streamline Influencer Campaigns"}),(0,im.jsxs)(Yy,{children:[(0,im.jsx)("span",{children:"March 31, 2025"}),(0,im.jsx)("span",{children:"10 min read"})]})]}),(0,im.jsxs)(Qy,{children:[(0,im.jsx)("h3",{children:"Table of Contents"}),(0,im.jsx)(Zy,{href:"#intro",children:"Introduction"}),(0,im.jsx)(Zy,{href:"#why-crm",children:"Why Influencer CRMs Are Your 2025 Must-Have"}),(0,im.jsx)(Zy,{href:"#step1",children:"Step 1: Find the Right Influencers, Fast"}),(0,im.jsx)(Zy,{href:"#step2",children:"Step 2: Organize Your Influencer Dream Team"}),(0,im.jsx)(Zy,{href:"#step3",children:"Step 3: Manage Campaigns Without the Headache"}),(0,im.jsx)(Zy,{href:"#step4",children:"Step 4: Track ROI Like a Data Boss"}),(0,im.jsx)(Zy,{href:"#step5",children:"Step 5: Scale Smarter, Not Harder"}),(0,im.jsx)(Zy,{href:"#admirian",children:"Admirian: Your CRM Shortcut to Influencer Success"}),(0,im.jsx)(Zy,{href:"#wrap-up",children:"Wrap-Up: Streamline Today, Win Tomorrow"})]}),(0,im.jsxs)(qy,{children:[(0,im.jsx)(Ky,{id:"intro",children:(0,im.jsx)("p",{children:"Influencer marketing in 2025 is a powerhouse\u2014$35 billion strong and growing\u2014but it's also a logistical beast. Finding the right creators, managing collaborations, and tracking results can eat up your time and budget fast. Enter influencer CRM tools like Admirian: your ticket to turning chaos into a well-oiled campaign machine. Want to know how to use these tools to save hours, boost ROI, and scale like a pro? This guide breaks it down step-by-step\u2014Admirian style."})}),(0,im.jsxs)(Ky,{id:"why-crm",children:[(0,im.jsx)(Xy,{children:"Why Influencer CRMs Are Your 2025 Must-Have"}),(0,im.jsx)("p",{children:"Traditional CRMs manage customers; influencer CRMs manage creators. In a world where nano-influencers can outshine macros and authenticity trumps reach, you need a system to juggle it all. Admirian and tools like it cut the clutter\u2014think influencer discovery, campaign tracking, and payment automation in one hub. Why stress over spreadsheets when you can streamline? Here's how it works."})]}),(0,im.jsxs)(Ky,{id:"step1",children:[(0,im.jsx)(Xy,{children:"Step 1: Find the Right Influencers, Fast"}),(0,im.jsx)("p",{children:"The old way: Scrolling Instagram for hours, guessing who fits. The CRM way: Precision targeting. Admirian's discovery engine scans platforms like TikTok, Instagram, and YouTube, filtering by niche, engagement, and audience fit. Say you're after nano-influencers in vegan skincare\u2014set your criteria, and boom, a shortlist appears. No more fake-follower flops\u2014Admirian's analytics flag real players with real impact."}),(0,im.jsxs)("p",{children:[(0,im.jsx)("strong",{children:"Pro Tip:"})," Look for 8%+ engagement rates\u2014nanos often crush it here."]})]}),(0,im.jsxs)(Ky,{id:"step2",children:[(0,im.jsx)(Xy,{children:"Step 2: Organize Your Influencer Dream Team"}),(0,im.jsx)("p",{children:'Once you\'ve got your picks, chaos can still creep in\u2014emails, DMs, deadlines everywhere. A CRM like Admirian centralizes it all. Create custom lists (e.g., "Nano Foodies," "Fitness Ambassadors"), store contact details, and tag past collabs. Need to onboard 10 creators? Admirian\'s workflows automate outreach\u2014personalized emails, contracts, and briefs sent in bulk. No more "Did I follow up?" panic.'}),(0,im.jsxs)("p",{children:[(0,im.jsx)("strong",{children:"Admirian Edge:"}),' Add notes like "Loves coffee" or "Prefers WhatsApp"\u2014small touches that build big relationships.']})]}),(0,im.jsxs)(Ky,{id:"step3",children:[(0,im.jsx)(Xy,{children:"Step 3: Manage Campaigns Without the Headache"}),(0,im.jsx)("p",{children:"Campaigns have moving parts\u2014content approvals, posting schedules, payment disputes. Admirian's dashboard is your command center. Assign tasks (e.g., \"Post by March 20\"), track progress in real time, and review drafts before they go live. Late deliverable? Automated pings keep influencers on track. It's like having a project manager who never sleeps."}),(0,im.jsxs)("p",{children:[(0,im.jsx)("strong",{children:"Real Win:"})," A skincare brand used Admirian to run a 15-nano campaign\u2014content live in a week, zero missed deadlines."]})]}),(0,im.jsxs)(Ky,{id:"step4",children:[(0,im.jsx)(Xy,{children:"Step 4: Track ROI Like a Data Boss"}),(0,im.jsx)("p",{children:"Here's where CRMs shine: results. Admirian doesn't just guess ROI\u2014it tracks views, clicks, conversions, and more, down to the penny. Link a nano's post to a 20% sales bump? You'll see it. Compare influencers side-by-side\u2014say, a 5k-follower nano vs. a 50k micro\u2014and optimize future picks. No more \"Did it work?\" debates\u2014just hard data."}),(0,im.jsxs)("p",{children:[(0,im.jsx)("strong",{children:"2025 Hack:"})," Focus on engagement-driven ROI\u2014Admirian's real-time insights show what's clicking now."]})]}),(0,im.jsxs)(Ky,{id:"step5",children:[(0,im.jsx)(Xy,{children:"Step 5: Scale Smarter, Not Harder"}),(0,im.jsx)("p",{children:"One-off campaigns are cute, but 2025's about scale. Admirian lets you replicate wins\u2014save winning workflows, tweak for new niches, and roll out bigger crews. Found 5 nanos who crushed it? Scale to 50 with the same system. Payments? Automated. Contracts? Pre-loaded. Admirian's built to grow with you, minus the growing pains."}),(0,im.jsxs)("p",{children:[(0,im.jsx)("strong",{children:"Case in Point:"})," A fitness app scaled from 3 to 30 nanos in a month\u2014Admirian handled the heavy lifting."]})]}),(0,im.jsxs)(Ky,{id:"admirian",children:[(0,im.jsx)(Xy,{children:"Admirian: Your CRM Shortcut to Influencer Success"}),(0,im.jsx)("p",{children:"Look, every CRM has bells and whistles, but Admirian's obsessed with influencer chaos\u2014your chaos. It's not just about management; it's about winning. Discovery that finds nano gold, dashboards that tame deadlines, analytics that prove your spend\u2014all in one place."}),(0,im.jsxs)(Jy,{children:[(0,im.jsx)("h3",{children:"Ready to streamline your influencer campaigns?"}),(0,im.jsx)("p",{children:"Experience the future of influencer marketing with Admirian's comprehensive CRM solution."}),(0,im.jsx)(eb,{href:"https://admirian.com/request-demo",children:"Request Demo"})]})]}),(0,im.jsxs)(Ky,{id:"wrap-up",children:[(0,im.jsx)(Xy,{children:"Wrap-Up: Streamline Today, Win Tomorrow"}),(0,im.jsx)("p",{children:"Influencer campaigns don't have to be a grind. With a CRM like Admirian, you're not just managing\u2014you're mastering. Find creators fast, keep them on track, and measure what matters, all while scaling like a 2025 pro. Ready to streamline? Start small, test the waters, and watch your campaigns soar."}),(0,im.jsx)("p",{children:"More hacks at blogs.admirian.com\u2014stay ahead!"})]})]})]}),(0,im.jsx)(um,{})]}),nb=Wo`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`,rb=Wo`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.5); opacity: 0.2; }
  100% { transform: scale(1); opacity: 0.5; }
`,ob=Wo`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,ib=Ho.div`
  position: relative;
  min-height: 100vh;
  background-color: #f8fafc;
  
  @media (prefers-color-scheme: dark) {
    background-color: #0f172a;
  }
`,ab=Ho.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`,sb=Ho.div`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  background: linear-gradient(135deg, #3b82f620, #6366f120);
  border-radius: 50%;
  animation: ${nb} 6s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
  opacity: 0.5;
`,lb=Ho.div`
  position: absolute;
  width: 10px;
  height: 10px;
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  background: linear-gradient(135deg, #3b82f640, #6366f140);
  border-radius: 50%;
  animation: ${rb} 4s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
`,cb=Ho.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  padding-top: 60px;
`,ub=Ho.header`
  text-align: center;
  margin: 4rem 0;
`,db=Ho.h1`
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(
    -45deg,
    #3b82f6,
    #6366f1,
    #8b5cf6,
    #3b82f6
  );
  background-size: 300% 300%;
  animation: ${ob} 15s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 2rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`,fb=Ho.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: #64748b;
  font-size: 1.25rem;
  font-weight: 500;
  
  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`,hb=Ho.div`
  display: inline-block;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 1rem;
`,pb=Ho.div`
  margin: 4rem 0;
  font-size: 1.25rem;
  line-height: 1.8;
  color: #334155;
  
  p {
    margin: 1.5rem 0;
    font-size: 1.25rem;
    line-height: 1.8;
    
    strong {
      color: #1e293b;
      font-weight: 700;
    }
  }
  
  @media (prefers-color-scheme: dark) {
    color: #e2e8f0;
    
    p strong {
      color: #f1f5f9;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    
    p {
      font-size: 1.125rem;
    }
  }
`,mb=Ho.section`
  margin: 4rem 0;
  
  p {
    margin: 1.5rem 0;
  }
  
  p:first-of-type {
    font-size: 1.35rem;
    line-height: 1.7;
    color: #1e293b;
    font-weight: 500;
    
    @media (prefers-color-scheme: dark) {
      color: #f1f5f9;
    }
    
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }
`,gb=Ho.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #1e293b;
  margin: 3rem 0 2rem;
  line-height: 1.2;
  letter-spacing: -0.01em;
  
  @media (prefers-color-scheme: dark) {
    color: #f1f5f9;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,vb=Ho.nav`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.9);
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #1e293b;
    
    @media (prefers-color-scheme: dark) {
      color: #f8fafc;
    }
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,yb=Ho.a`
  display: block;
  padding: 0.75rem 0;
  color: #475569;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: #3b82f6;
  }
  
  @media (prefers-color-scheme: dark) {
    color: #cbd5e1;
    
    &:hover {
      color: #60a5fa;
    }
  }
`,bb=Ho.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,xb=Ho.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  line-height: 1.6;
  
  &:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #3b82f6;
    font-weight: bold;
  }
`,wb=Ho(mb)`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 20px;
  padding: 40px;
  margin: 40px 0;
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
`,kb=Ho.article`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.9);
  }
`,Sb=Ho.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  
  @media (prefers-color-scheme: dark) {
    color: #f8fafc;
  }
`,jb=Ho.div`
  color: #475569;
  
  @media (prefers-color-scheme: dark) {
    color: #cbd5e1;
  }
`,Cb=Ho.div`
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
  flex-wrap: wrap;
  gap: 20px;
`,Eb=Ho.div`
  text-align: center;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  min-width: 200px;
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.9);
  }
`,Tb=Ho.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 10px;
`,Ab=Ho.div`
  color: #666;
  font-size: 1rem;
  
  @media (prefers-color-scheme: dark) {
    color: #cbd5e1;
  }
`,Pb=Ho.div`
  margin: 3rem 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  
  img {
   
    object-fit: cover;
  }
`,zb=Ho.a`
  display: inline-block;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: white;
  padding: 1.25rem 2.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.25rem;
  margin-top: 2rem;
  transition: all 0.3s ease;
  border: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    background: linear-gradient(135deg, #2563eb, #4f46e5);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.15rem;
  }
`,Ob=Ho.blockquote`
  font-size: 1.5rem;
  line-height: 1.6;
  color: #1e293b;
  border-left: 4px solid #3b82f6;
  padding: 2rem;
  margin: 3rem 0;
  background: #f8fafc;
  border-radius: 0 12px 12px 0;
  
  @media (prefers-color-scheme: dark) {
    color: #f1f5f9;
    background: #1e293b;
  }
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding: 1.5rem;
  }
`,Mb=Ho.div`
  display: flex;
  align-items: center;
  margin: 3rem 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 1.5rem;
  }
  
  h4 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #1e293b;
  }
  
  p {
    color: #64748b;
    margin: 0;
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.9);
    
    h4 {
      color: #f8fafc;
    }
    
    p {
      color: #94a3b8;
    }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    
    img {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`,Rb=Ho.div`
  margin: 3rem 0;
  text-align: center;
  
  h4 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1e293b;
    
    @media (prefers-color-scheme: dark) {
      color: #f8fafc;
    }
  }
  
  .social-share {
    display: flex;
    justify-content: center;
    gap: 1rem;
    
    a {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background: #f1f5f9;
      color: #475569;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.2s ease;
      
      &:hover {
        background: #e2e8f0;
        transform: translateY(-2px);
      }
      
      @media (prefers-color-scheme: dark) {
        background: #1e293b;
        color: #cbd5e1;
        
        &:hover {
          background: #334155;
        }
      }
    }
  }
`,Ib=Ho.section`
  margin: 4rem 0;
  
  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: #1e293b;
    
    @media (prefers-color-scheme: dark) {
      color: #f8fafc;
    }
  }
`,$b=Ho.a`
  display: block;
  text-decoration: none;
  color: inherit;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.9);
  }
`,Lb=Ho.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  ${$b}:hover & img {
    transform: scale(1.05);
  }
`,Nb=Ho.div`
  padding: 1.5rem;
`,_b=Ho.h4`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1e293b;
  
  @media (prefers-color-scheme: dark) {
    color: #f8fafc;
  }
`,Db=Ho.div`
  display: flex;
  gap: 1rem;
  color: #64748b;
  font-size: 0.9rem;
  
  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
  }
`,Fb=Ho.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
  justify-content: center;
  
  span {
    background: #f1f5f9;
    color: #475569;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 500;
    
    @media (prefers-color-scheme: dark) {
      background: #1e293b;
      color: #cbd5e1;
    }
  }
`,Bb=Ho.div`
  background: linear-gradient(135deg, #1e293b, #0f172a);
  padding: 3rem 2rem;
  border-radius: 16px;
  margin: 3rem 0;
  text-align: center;
  color: white;

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #e2e8f0;
  }

  ${zb} {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    font-size: 1.1rem;
    padding: 1.2rem 2.5rem;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(37, 99, 235, 0.4);
    }
  }
`,Hb=()=>(0,im.jsxs)(im.Fragment,{children:[(0,im.jsxs)(en,{children:[(0,im.jsx)("title",{children:"AI in Influencer Marketing: The Future of Creator Economy 2025 | Admirian Blog"}),(0,im.jsx)("meta",{name:"description",content:"Discover how AI is revolutionizing influencer marketing in 2025. Learn about AI-powered creator discovery, content optimization, and ROI prediction tools that are transforming the industry."}),(0,im.jsx)("meta",{name:"keywords",content:"AI influencer marketing, creator economy 2025, AI content optimization, influencer discovery AI, ROI prediction, automated influencer marketing, AI analytics"}),(0,im.jsx)("meta",{property:"og:type",content:"article"}),(0,im.jsx)("meta",{property:"og:url",content:"https://blogs.admirian.com/blogs/ai-influencer-marketing-2025"}),(0,im.jsx)("meta",{property:"og:title",content:"AI in Influencer Marketing: The Future of Creator Economy 2025"}),(0,im.jsx)("meta",{property:"og:description",content:"Discover how AI is revolutionizing influencer marketing in 2025. Learn about AI-powered creator discovery, content optimization, and ROI prediction tools."}),(0,im.jsx)("meta",{property:"og:image",content:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60"}),(0,im.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,im.jsx)("meta",{name:"twitter:url",content:"https://blogs.admirian.com/blogs/ai-influencer-marketing-2025"}),(0,im.jsx)("meta",{name:"twitter:title",content:"AI in Influencer Marketing: The Future of Creator Economy 2025"}),(0,im.jsx)("meta",{name:"twitter:description",content:"Discover how AI is revolutionizing influencer marketing in 2025. Learn about AI-powered creator discovery, content optimization, and ROI prediction tools."}),(0,im.jsx)("meta",{name:"twitter:image",content:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60"}),(0,im.jsx)("link",{rel:"canonical",href:"https://blogs.admirian.com/blogs/ai-influencer-marketing-2025"}),(0,im.jsx)("script",{type:"application/ld+json",children:'\n            {\n              "@context": "https://schema.org",\n              "@type": "BlogPosting",\n              "headline": "AI in Influencer Marketing: The Future of Creator Economy 2025",\n              "description": "Discover how AI is revolutionizing influencer marketing in 2025. Learn about AI-powered creator discovery, content optimization, and ROI prediction tools.",\n              "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",\n              "author": {\n                "@type": "Organization",\n                "name": "Admirian",\n                "url": "https://admirian.com"\n              },\n              "publisher": {\n                "@type": "Organization",\n                "name": "Admirian",\n                "logo": {\n                  "@type": "ImageObject",\n                  "url": "https://static.admirian.com/9a312601-984e-4237-bfad-1454204ce38f_BrandLogo.svg"\n                }\n              },\n              "datePublished": "2024-03-20",\n              "dateModified": "2024-03-20",\n              "mainEntityOfPage": {\n                "@type": "WebPage",\n                "@id": "https://blogs.admirian.com/blogs/ai-influencer-marketing-2025"\n              }\n            }\n          '})]}),(0,im.jsxs)(ib,{children:[(0,im.jsxs)(ab,{children:[(0,im.jsx)(sb,{size:300,top:10,left:5,delay:0}),(0,im.jsx)(sb,{size:200,top:70,left:80,delay:2}),(0,im.jsx)(sb,{size:150,top:40,left:40,delay:4}),(0,im.jsx)(lb,{top:20,left:30,delay:1}),(0,im.jsx)(lb,{top:60,left:70,delay:3}),(0,im.jsx)(lb,{top:80,left:20,delay:5})]}),(0,im.jsx)(am,{isMobile:Fm}),(0,im.jsx)(Gm,{}),(0,im.jsxs)(cb,{children:[(0,im.jsxs)(ub,{children:[(0,im.jsx)(hb,{children:"AI & Technology"}),(0,im.jsx)(db,{children:"AI in Influencer Marketing: The Future of Creator Economy 2025"}),(0,im.jsxs)(fb,{children:[(0,im.jsx)("span",{children:"March 20, 2025"}),(0,im.jsx)("span",{children:"\u2022"}),(0,im.jsx)("span",{children:"10 min read"})]})]}),(0,im.jsx)(Pb,{children:(0,im.jsx)("img",{src:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",alt:"AI in Influencer Marketing",width:"800",height:"450",loading:"lazy"})}),(0,im.jsxs)(pb,{children:[(0,im.jsx)(mb,{id:"intro",children:(0,im.jsx)("p",{children:"As we move through 2025, artificial intelligence is fundamentally transforming how brands and creators connect, collaborate, and create value in the influencer marketing space. From automated creator discovery to predictive analytics and content optimization, AI is reshaping every aspect of the industry. Want to know how AI is revolutionizing influencer marketing and what it means for your brand? This guide breaks it down\u2014Admirian style."})}),(0,im.jsxs)(vb,{children:[(0,im.jsx)("h3",{children:"Table of Contents"}),(0,im.jsx)(yb,{href:"#key-applications",children:"Key AI Applications in Influencer Marketing"}),(0,im.jsx)(yb,{href:"#creator-discovery",children:"AI-Powered Creator Discovery"}),(0,im.jsx)(yb,{href:"#content-optimization",children:"Content Optimization with AI"}),(0,im.jsx)(yb,{href:"#roi-prediction",children:"ROI Prediction and Analytics"}),(0,im.jsx)(yb,{href:"#automation",children:"Campaign Automation"}),(0,im.jsx)(yb,{href:"#future-trends",children:"Future Trends and Implications"}),(0,im.jsx)(yb,{href:"#implementation",children:"How to Implement AI in Your Strategy"})]}),(0,im.jsxs)(wb,{id:"key-applications",children:[(0,im.jsx)(gb,{children:"Key AI Applications in Influencer Marketing"}),(0,im.jsx)("p",{children:"Artificial intelligence is revolutionizing influencer marketing by automating time-consuming tasks, providing deeper insights, and enabling more effective targeting and optimization. Here are the key applications transforming the industry:"}),(0,im.jsxs)(kb,{children:[(0,im.jsx)(Sb,{children:"Creator Discovery and Matching"}),(0,im.jsx)(jb,{children:"AI algorithms analyze millions of social media profiles to identify influencers who match your brand's values, target audience, and campaign goals. These tools consider engagement rates, audience demographics, content themes, and even sentiment analysis to find the perfect match."})]}),(0,im.jsxs)(kb,{children:[(0,im.jsx)(Sb,{children:"Content Optimization"}),(0,im.jsx)(jb,{children:"AI-powered content analysis tools help creators and brands understand what content performs best. From optimal posting times to hashtag recommendations and content structure, AI provides actionable insights to maximize engagement and reach."})]}),(0,im.jsxs)(kb,{children:[(0,im.jsx)(Sb,{children:"ROI Prediction and Analytics"}),(0,im.jsx)(jb,{children:"Advanced AI models can predict campaign performance with remarkable accuracy. By analyzing historical data, market trends, and audience behavior, these tools help brands allocate budgets more effectively and set realistic performance expectations."})]}),(0,im.jsxs)(kb,{children:[(0,im.jsx)(Sb,{children:"Campaign Automation"}),(0,im.jsx)(jb,{children:"From contract generation to payment processing and performance tracking, AI is automating the entire influencer marketing workflow, reducing administrative overhead and allowing teams to focus on strategy and creativity."})]})]}),(0,im.jsxs)(mb,{id:"creator-discovery",children:[(0,im.jsx)(gb,{children:"AI-Powered Creator Discovery"}),(0,im.jsx)("p",{children:"Finding the right influencers for your brand has traditionally been a time-consuming process of manual research and gut feelings. AI is changing that with sophisticated creator discovery platforms that analyze millions of profiles across social networks."}),(0,im.jsx)(Pb,{children:(0,im.jsx)("img",{src:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",alt:"AI Creator Discovery",width:"600",height:"400",loading:"lazy"})}),(0,im.jsx)("p",{children:"Modern AI creator discovery tools consider hundreds of data points including:"}),(0,im.jsxs)(bb,{children:[(0,im.jsx)(xb,{children:"Audience demographics and psychographics"}),(0,im.jsx)(xb,{children:"Engagement rates and authenticity metrics"}),(0,im.jsx)(xb,{children:"Content themes and brand alignment"}),(0,im.jsx)(xb,{children:"Historical performance with similar brands"}),(0,im.jsx)(xb,{children:"Audience sentiment and brand safety indicators"}),(0,im.jsx)(xb,{children:"Growth trajectory and influence potential"})]}),(0,im.jsx)(Ob,{children:'"AI-powered creator discovery has reduced our influencer research time by 80% while improving match quality by 40%. We\'re now able to identify micro-influencers who deliver exceptional ROI that we would have missed with traditional methods."'}),(0,im.jsx)("p",{children:"For example, Admirian's AI-powered platform analyzes over 10 million creator profiles across Instagram, TikTok, YouTube, and Twitter to find the perfect match for your brand. Our algorithms consider not just follower count and engagement rates, but also content themes, audience demographics, and even the sentiment of comments to ensure brand safety."})]}),(0,im.jsxs)(mb,{id:"content-optimization",children:[(0,im.jsx)(gb,{children:"Content Optimization with AI"}),(0,im.jsx)("p",{children:"Creating content that resonates with your target audience is both an art and a science. AI tools are helping creators and brands optimize their content strategy with data-driven insights."}),(0,im.jsx)(Pb,{children:(0,im.jsx)("img",{src:"https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80",alt:"AI Content Optimization",width:"600",height:"400",loading:"lazy"})}),(0,im.jsx)("p",{children:"Key AI content optimization features include:"}),(0,im.jsxs)(bb,{children:[(0,im.jsx)(xb,{children:"Optimal posting time recommendations based on audience activity"}),(0,im.jsx)(xb,{children:"Hashtag effectiveness analysis and recommendations"}),(0,im.jsx)(xb,{children:"Content structure and format optimization"}),(0,im.jsx)(xb,{children:"Visual composition and color analysis"}),(0,im.jsx)(xb,{children:"Caption and copy optimization"}),(0,im.jsx)(xb,{children:"A/B testing automation for content variants"})]}),(0,im.jsx)("p",{children:"AI content optimization tools analyze millions of posts to identify patterns in what drives engagement. For instance, our platform found that Instagram carousel posts with 7-9 slides generate 30% more engagement than single-image posts in the fashion category, but only when posted between 6-8pm on weekdays."}),(0,im.jsxs)(Cb,{children:[(0,im.jsxs)(Eb,{children:[(0,im.jsx)(Tb,{children:"47%"}),(0,im.jsx)(Ab,{children:"Average increase in engagement with AI-optimized content"})]}),(0,im.jsxs)(Eb,{children:[(0,im.jsx)(Tb,{children:"3.2x"}),(0,im.jsx)(Ab,{children:"Higher conversion rate for AI-optimized campaigns"})]}),(0,im.jsxs)(Eb,{children:[(0,im.jsx)(Tb,{children:"68%"}),(0,im.jsx)(Ab,{children:"Reduction in content creation time with AI assistance"})]})]})]}),(0,im.jsxs)(mb,{id:"roi-prediction",children:[(0,im.jsx)(gb,{children:"ROI Prediction and Analytics"}),(0,im.jsx)("p",{children:"One of the biggest challenges in influencer marketing has been predicting and measuring ROI. AI is transforming this with sophisticated predictive analytics that help brands allocate budgets more effectively and set realistic performance expectations."}),(0,im.jsxs)(kb,{children:[(0,im.jsx)(Sb,{children:"Predictive Performance Modeling"}),(0,im.jsx)(jb,{children:"AI models analyze historical campaign data, market trends, and audience behavior to predict the likely performance of future campaigns. These predictions help brands set realistic budgets and expectations."})]}),(0,im.jsxs)(kb,{children:[(0,im.jsx)(Sb,{children:"Attribution Analysis"}),(0,im.jsx)(jb,{children:"Advanced AI attribution models track the customer journey across multiple touchpoints to accurately measure the impact of influencer content on conversions and sales."})]}),(0,im.jsxs)(kb,{children:[(0,im.jsx)(Sb,{children:"Competitive Intelligence"}),(0,im.jsx)(jb,{children:"AI tools monitor competitor influencer campaigns to identify trends, benchmark performance, and uncover opportunities in the market."})]}),(0,im.jsx)("p",{children:"For example, our AI-powered ROI prediction engine has achieved 92% accuracy in predicting campaign performance within a 10% margin of error. This allows brands to make data-driven decisions about which creators to work with and how much to invest in each partnership."})]}),(0,im.jsxs)(mb,{id:"automation",children:[(0,im.jsx)(gb,{children:"Campaign Automation"}),(0,im.jsx)("p",{children:"Managing influencer campaigns involves numerous administrative tasks that can be time-consuming and error-prone. AI is automating these processes to streamline workflows and reduce overhead."}),(0,im.jsxs)(bb,{children:[(0,im.jsx)(xb,{children:"Automated contract generation and management"}),(0,im.jsx)(xb,{children:"Content approval workflows with AI-powered brand safety checks"}),(0,im.jsx)(xb,{children:"Automated payment processing and reconciliation"}),(0,im.jsx)(xb,{children:"Performance tracking and reporting automation"}),(0,im.jsx)(xb,{children:"Campaign timeline management and reminders"}),(0,im.jsx)(xb,{children:"Automated outreach and relationship management"})]}),(0,im.jsx)("p",{children:"By automating these administrative tasks, brands can focus more resources on strategy and creativity. For instance, our platform has reduced the time spent on campaign management by 65%, allowing marketing teams to manage more campaigns with fewer resources."})]}),(0,im.jsxs)(mb,{id:"future-trends",children:[(0,im.jsx)(gb,{children:"Future Trends and Implications"}),(0,im.jsx)("p",{children:"As AI technology continues to evolve, we can expect even more transformative changes in the influencer marketing landscape. Here are some emerging trends to watch:"}),(0,im.jsxs)(kb,{children:[(0,im.jsx)(Sb,{children:"Hyper-Personalized Content"}),(0,im.jsx)(jb,{children:"AI will enable the creation of highly personalized content that adapts to individual viewer preferences in real-time, creating more engaging and relevant experiences."})]}),(0,im.jsxs)(kb,{children:[(0,im.jsx)(Sb,{children:"Virtual Influencers"}),(0,im.jsx)(jb,{children:"AI-generated virtual influencers will become more sophisticated and realistic, offering brands complete control over messaging and appearance while reducing risks associated with human creators."})]}),(0,im.jsxs)(kb,{children:[(0,im.jsx)(Sb,{children:"Predictive Creator Partnerships"}),(0,im.jsx)(jb,{children:"AI will predict which creators are likely to experience significant growth, allowing brands to form early partnerships with rising stars before they become too expensive."})]}),(0,im.jsx)(Ob,{children:"\"The future of influencer marketing isn't just about using AI to optimize current processes\u2014it's about fundamentally reimagining how brands and creators connect and create value together. We're just scratching the surface of what's possible.\""})]}),(0,im.jsxs)(mb,{id:"implementation",children:[(0,im.jsx)(gb,{children:"How to Implement AI in Your Strategy"}),(0,im.jsx)("p",{children:"Ready to leverage AI in your influencer marketing strategy? Here's a step-by-step guide to get started:"}),(0,im.jsxs)(bb,{children:[(0,im.jsx)(xb,{children:"Audit your current influencer marketing processes and identify pain points"}),(0,im.jsx)(xb,{children:"Research AI tools that address your specific needs and challenges"}),(0,im.jsx)(xb,{children:"Start with a pilot program to test AI capabilities in a controlled environment"}),(0,im.jsx)(xb,{children:"Train your team on how to interpret and act on AI-generated insights"}),(0,im.jsx)(xb,{children:"Gradually expand AI implementation across your influencer marketing program"}),(0,im.jsx)(xb,{children:"Continuously measure and optimize AI performance to maximize ROI"})]}),(0,im.jsx)("p",{children:"Remember that AI is a tool to enhance human decision-making, not replace it. The most successful implementations combine AI's analytical capabilities with human creativity and strategic thinking."})]}),(0,im.jsxs)(Bb,{children:[(0,im.jsx)("h3",{children:"Ready to Transform Your Influencer Marketing with AI?"}),(0,im.jsx)("p",{children:"Discover how Admirian's AI-powered platform can help you find the perfect creators, optimize your content, and maximize your ROI."}),(0,im.jsx)(zb,{href:"https://admirian.com/demo",children:"Request a Demo"})]})]}),(0,im.jsxs)(Mb,{children:[(0,im.jsx)("img",{src:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&auto=format&fit=crop&q=80",alt:"Author",width:"200",height:"200",loading:"lazy"}),(0,im.jsxs)("div",{children:[(0,im.jsx)("h4",{children:"Michael Rodriguez"}),(0,im.jsx)("p",{children:"Creator Economy Strategist at Admirian"})]})]}),(0,im.jsxs)(Rb,{children:[(0,im.jsx)("h4",{children:"Share this article"}),(0,im.jsxs)("div",{className:"social-share",children:[(0,im.jsx)("a",{href:"https://twitter.com/intent/tweet?url=https://blogs.admirian.com/blogs/ai-influencer-marketing-2025&text=AI in Influencer Marketing: The Future of Creator Economy 2025",target:"_blank",rel:"noopener noreferrer",children:"Twitter"}),(0,im.jsx)("a",{href:"https://www.linkedin.com/shareArticle?mini=true&url=https://blogs.admirian.com/blogs/ai-influencer-marketing-2025&title=AI in Influencer Marketing: The Future of Creator Economy 2025",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),(0,im.jsx)("a",{href:"https://www.facebook.com/sharer/sharer.php?u=https://blogs.admirian.com/blogs/ai-influencer-marketing-2025",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})]})]}),(0,im.jsxs)(Fb,{children:[(0,im.jsx)("span",{children:"#AI"}),(0,im.jsx)("span",{children:"#InfluencerMarketing"}),(0,im.jsx)("span",{children:"#CreatorEconomy"}),(0,im.jsx)("span",{children:"#DigitalMarketing"}),(0,im.jsx)("span",{children:"#MarketingTechnology"}),(0,im.jsx)("span",{children:"#FutureOfMarketing"})]}),(0,im.jsxs)(Ib,{children:[(0,im.jsx)("h3",{children:"Related Articles"}),(0,im.jsx)("div",{style:{display:"flex",flexDirection:"row",gap:"20px",flexWrap:"wrap",justifyContent:"space-between"},children:[{id:1,title:"Top 10 CRM Tools for Influencer Marketing in 2025",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",date:"March 15, 2024",readTime:"8 min read",url:"/blogs/top-10-crms-2025"},{id:2,title:"How to Use CRM Tools for Influencer Campaigns",image:"https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60",date:"March 10, 2024",readTime:"6 min read",url:"/blogs/how-to-use-crm-tools"}].map((e=>(0,im.jsxs)($b,{href:e.url,style:{flex:"1 1 calc(50% - 10px)",minWidth:"300px",marginBottom:"20px"},children:[(0,im.jsx)(Lb,{style:{height:"200px",overflow:"hidden"},children:(0,im.jsx)("img",{src:e.image.replace("w=800","w=600").replace("q=60","q=90"),alt:e.title,width:"600",height:"400",loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.3s ease",":hover":{transform:"scale(1.05)"}}})}),(0,im.jsxs)(Nb,{style:{padding:"15px"},children:[(0,im.jsx)(_b,{style:{fontSize:"18px",marginBottom:"8px"},children:e.title}),(0,im.jsxs)(Db,{style:{fontSize:"14px",color:"#666"},children:[(0,im.jsx)("span",{children:e.date}),(0,im.jsx)("span",{style:{margin:"0 8px"},children:"\u2022"}),(0,im.jsx)("span",{children:e.readTime})]})]})]},e.id)))})]})]}),(0,im.jsx)(um,{})]})]});function Wb(e){if("undefined"===typeof Proxy)return e;const t=new Map;return new Proxy((function(){return e(...arguments)}),{get:(n,r)=>"create"===r?e:(t.has(r)||t.set(r,e(r)),t.get(r))})}function Vb(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}function Ub(e){const t=[{},{}];return e?.values.forEach(((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()})),t}function Yb(e,t,n,r){if("function"===typeof t){const[o,i]=Ub(r);t=t(void 0!==n?n:e.custom,o,i)}if("string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t){const[o,i]=Ub(r);t=t(void 0!==n?n:e.custom,o,i)}return t}function Gb(e,t,n){const r=e.getProps();return Yb(r,t,void 0!==n?n:r.custom,e)}function qb(e,t){return e?.[t]??e?.default??e}const Kb=e=>e,Xb={skipAnimations:!1,useManualTiming:!1},Qb=["read","resolveKeyframes","update","preRender","render","postRender"],Zb={value:null,addProjectionMetrics:null};function Jb(e,t){let n=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},i=()=>n=!0,a=Qb.reduce(((e,n)=>(e[n]=function(e,t){let n=new Set,r=new Set,o=!1,i=!1;const a=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1},l=0;function c(t){a.has(t)&&(u.schedule(t),e()),l++,t(s)}const u={schedule:function(e){const t=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&o?n:r;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&a.add(e),t.has(e)||t.add(e),e},cancel:e=>{r.delete(e),a.delete(e)},process:e=>{s=e,o?i=!0:(o=!0,[n,r]=[r,n],n.forEach(c),t&&Zb.value&&Zb.value.frameloop[t].push(l),l=0,n.clear(),o=!1,i&&(i=!1,u.process(e)))}};return u}(i,t?n:void 0),e)),{}),{read:s,resolveKeyframes:l,update:c,preRender:u,render:d,postRender:f}=a,h=()=>{const i=Xb.useManualTiming?o.timestamp:performance.now();n=!1,Xb.useManualTiming||(o.delta=r?1e3/60:Math.max(Math.min(i-o.timestamp,40),1)),o.timestamp=i,o.isProcessing=!0,s.process(o),l.process(o),c.process(o),u.process(o),d.process(o),f.process(o),o.isProcessing=!1,n&&t&&(r=!1,e(h))},p=Qb.reduce(((t,i)=>{const s=a[i];return t[i]=function(t){let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,o.isProcessing||e(h)),s.schedule(t,i,a)},t}),{});return{schedule:p,cancel:e=>{for(let t=0;t<Qb.length;t++)a[Qb[t]].cancel(e)},state:o,steps:a}}const{schedule:ex,cancel:tx,state:nx,steps:rx}=Jb("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:Kb,!0),ox=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ix=new Set(ox),ax=new Set(["width","height","top","left","right","bottom",...ox]);function sx(e,t){-1===e.indexOf(t)&&e.push(t)}function lx(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class cx{constructor(){this.subscriptions=[]}add(e){return sx(this.subscriptions,e),()=>lx(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let o=0;o<r;o++){const r=this.subscriptions[o];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function ux(e,t){return t?e*(1e3/t):0}let dx;function fx(){dx=void 0}const hx={now:()=>(void 0===dx&&hx.set(nx.isProcessing||Xb.useManualTiming?nx.timestamp:performance.now()),dx),set:e=>{dx=e,queueMicrotask(fx)}},px={current:void 0};class mx{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.version="12.7.3",this.canTrackVelocity=null,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=hx.now();t.updatedAt!==r&&t.setPrevFrameValue(),t.prev=t.current,t.setCurrent(e),t.current!==t.prev&&t.events.change&&t.events.change.notify(t.current),n&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){var t;this.current=e,this.updatedAt=hx.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.current;this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new cx);const n=this.events[e].add(t);return"change"===e?()=>{n(),ex.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return px.current&&px.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=hx.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return ux(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function gx(e,t){return new mx(e,t)}const vx=e=>Array.isArray(e),yx=e=>vx(e)?e[e.length-1]||0:e;function bx(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,gx(n))}const xx=e=>Boolean(e&&e.getVelocity);function wx(e,t){const n=e.getValue("willChange");if(r=n,Boolean(xx(r)&&r.add))return n.add(t);if(!n&&Xb.WillChange){const n=new Xb.WillChange("auto");e.addValue("willChange",n),n.add(t)}var r}const kx=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Sx="data-"+kx("framerAppearId");function jx(e){return e.props[Sx]}function Cx(e){let t;return()=>(void 0===t&&(t=e()),t)}const Ex=Cx((()=>void 0!==window.ScrollTimeline));class Tx{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map((e=>e.finished)))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e,t){const n=this.animations.map((n=>Ex()&&n.attachTimeline?n.attachTimeline(e):"function"===typeof t?t(n):void 0));return()=>{n.forEach(((e,t)=>{e&&e(),this.animations[t].stop()}))}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach((t=>t[e]()))}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Ax extends Tx{then(e,t){return this.finished.finally(e).then((()=>{}))}}const Px=e=>1e3*e,zx=e=>e/1e3,Ox=!1;function Mx(e){return"function"===typeof e&&"applyToOptions"in e}const Rx=e=>Array.isArray(e)&&"number"===typeof e[0],Ix={};function $x(e,t){const n=Cx(e);return()=>Ix[t]??n()}const Lx=$x((()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(RA){return!1}return!0}),"linearEasing"),Nx=e=>{let[t,n,r,o]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${o})`},_x={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Nx([0,.65,.55,1]),circOut:Nx([.55,0,1,.45]),backIn:Nx([.31,.01,.66,-.59]),backOut:Nx([.33,1.53,.69,.99])};function Dx(e){return Boolean("function"===typeof e&&Lx()||!e||"string"===typeof e&&(e in _x||Lx())||Rx(e)||Array.isArray(e)&&e.every(Dx))}const Fx={layout:0,mainThread:0,waapi:0},Bx=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r="";const o=Math.max(Math.round(t/n),2);for(let i=0;i<o;i++)r+=e(i/(o-1))+", ";return`linear(${r.substring(0,r.length-2)})`};function Hx(e,t){return e?"function"===typeof e&&Lx()?Bx(e,t):Rx(e)?Nx(e):Array.isArray(e)?e.map((e=>Hx(e,t)||_x.easeOut)):_x[e]:void 0}function Wx(e,t,n){let{delay:r=0,duration:o=300,repeat:i=0,repeatType:a="loop",ease:s="easeInOut",times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;const u={[t]:n};l&&(u.offset=l);const d=Hx(s,o);Array.isArray(d)&&(u.easing=d),Zb.value&&Fx.waapi++;const f=e.animate(u,{delay:r,duration:o,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:i+1,direction:"reverse"===a?"alternate":"normal",pseudoElement:c});return Zb.value&&f.finished.finally((()=>{Fx.waapi--})),f}function Vx(e,t){e.timeline=t,e.onfinish=null}const Ux=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function Yx(e,t,n,r){if(e===t&&n===r)return Kb;const o=t=>function(e,t,n,r,o){let i,a,s=0;do{a=t+(n-t)/2,i=Ux(a,r,o)-e,i>0?n=a:t=a}while(Math.abs(i)>1e-7&&++s<12);return a}(t,0,1,e,n);return e=>0===e||1===e?e:Ux(o(e),t,r)}const Gx=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,qx=e=>t=>1-e(1-t),Kx=Yx(.33,1.53,.69,.99),Xx=qx(Kx),Qx=Gx(Xx),Zx=e=>(e*=2)<1?.5*Xx(e):.5*(2-Math.pow(2,-10*(e-1))),Jx=e=>1-Math.sin(Math.acos(e)),ew=qx(Jx),tw=Gx(Jx),nw=e=>/^0[^.\s]+$/u.test(e);const rw=(e,t,n)=>n>t?t:n<e?e:n,ow={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},iw={...ow,transform:e=>rw(0,1,e)},aw={...ow,default:1},sw=e=>Math.round(1e5*e)/1e5,lw=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;const cw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,uw=(e,t)=>n=>Boolean("string"===typeof n&&cw.test(n)&&n.startsWith(e)||t&&!function(e){return null==e}(n)&&Object.prototype.hasOwnProperty.call(n,t)),dw=(e,t,n)=>r=>{if("string"!==typeof r)return r;const[o,i,a,s]=r.match(lw);return{[e]:parseFloat(o),[t]:parseFloat(i),[n]:parseFloat(a),alpha:void 0!==s?parseFloat(s):1}},fw={...ow,transform:e=>Math.round((e=>rw(0,255,e))(e))},hw={test:uw("rgb","red"),parse:dw("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:o=1}=e;return"rgba("+fw.transform(t)+", "+fw.transform(n)+", "+fw.transform(r)+", "+sw(iw.transform(o))+")"}};const pw={test:uw("#"),parse:function(e){let t="",n="",r="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}},transform:hw.transform},mw=e=>({test:t=>"string"===typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),gw=mw("deg"),vw=mw("%"),yw=mw("px"),bw=mw("vh"),xw=mw("vw"),ww={...vw,parse:e=>vw.parse(e)/100,transform:e=>vw.transform(100*e)},kw={test:uw("hsl","hue"),parse:dw("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:o=1}=e;return"hsla("+Math.round(t)+", "+vw.transform(sw(n))+", "+vw.transform(sw(r))+", "+sw(iw.transform(o))+")"}},Sw={test:e=>hw.test(e)||pw.test(e)||kw.test(e),parse:e=>hw.test(e)?hw.parse(e):kw.test(e)?kw.parse(e):pw.parse(e),transform:e=>"string"===typeof e?e:e.hasOwnProperty("red")?hw.transform(e):kw.transform(e)},jw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;const Cw="number",Ew="color",Tw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Aw(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},o=[];let i=0;const a=t.replace(Tw,(e=>(Sw.test(e)?(r.color.push(i),o.push(Ew),n.push(Sw.parse(e))):e.startsWith("var(")?(r.var.push(i),o.push("var"),n.push(e)):(r.number.push(i),o.push(Cw),n.push(parseFloat(e))),++i,"${}"))).split("${}");return{values:n,split:a,indexes:r,types:o}}function Pw(e){return Aw(e).values}function zw(e){const{split:t,types:n}=Aw(e),r=t.length;return e=>{let o="";for(let i=0;i<r;i++)if(o+=t[i],void 0!==e[i]){const t=n[i];o+=t===Cw?sw(e[i]):t===Ew?Sw.transform(e[i]):e[i]}return o}}const Ow=e=>"number"===typeof e?0:e;const Mw={test:function(e){return isNaN(e)&&"string"===typeof e&&(e.match(lw)?.length||0)+(e.match(jw)?.length||0)>0},parse:Pw,createTransformer:zw,getAnimatableNone:function(e){const t=Pw(e);return zw(e)(t.map(Ow))}},Rw=new Set(["brightness","contrast","saturate","opacity"]);function Iw(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(lw)||[];if(!r)return e;const o=n.replace(r,"");let i=Rw.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+o+")"}const $w=/\b([a-z-]*)\(.*?\)/gu,Lw={...Mw,getAnimatableNone:e=>{const t=e.match($w);return t?t.map(Iw).join(" "):e}},Nw={borderWidth:yw,borderTopWidth:yw,borderRightWidth:yw,borderBottomWidth:yw,borderLeftWidth:yw,borderRadius:yw,radius:yw,borderTopLeftRadius:yw,borderTopRightRadius:yw,borderBottomRightRadius:yw,borderBottomLeftRadius:yw,width:yw,maxWidth:yw,height:yw,maxHeight:yw,top:yw,right:yw,bottom:yw,left:yw,padding:yw,paddingTop:yw,paddingRight:yw,paddingBottom:yw,paddingLeft:yw,margin:yw,marginTop:yw,marginRight:yw,marginBottom:yw,marginLeft:yw,backgroundPositionX:yw,backgroundPositionY:yw},_w={rotate:gw,rotateX:gw,rotateY:gw,rotateZ:gw,scale:aw,scaleX:aw,scaleY:aw,scaleZ:aw,skew:gw,skewX:gw,skewY:gw,distance:yw,translateX:yw,translateY:yw,translateZ:yw,x:yw,y:yw,z:yw,perspective:yw,transformPerspective:yw,opacity:iw,originX:ww,originY:ww,originZ:yw},Dw={...ow,transform:Math.round},Fw={...Nw,..._w,zIndex:Dw,size:yw,fillOpacity:iw,strokeOpacity:iw,numOctaves:Dw},Bw={...Fw,color:Sw,backgroundColor:Sw,outlineColor:Sw,fill:Sw,stroke:Sw,borderColor:Sw,borderTopColor:Sw,borderRightColor:Sw,borderBottomColor:Sw,borderLeftColor:Sw,filter:Lw,WebkitFilter:Lw},Hw=e=>Bw[e];function Ww(e,t){let n=Hw(e);return n!==Lw&&(n=Mw),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Vw=new Set(["auto","none","0"]);const Uw=e=>180*e/Math.PI,Yw=e=>{const t=Uw(Math.atan2(e[1],e[0]));return qw(t)},Gw={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Yw,rotateZ:Yw,skewX:e=>Uw(Math.atan(e[1])),skewY:e=>Uw(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},qw=e=>((e%=360)<0&&(e+=360),e),Kw=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Xw=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Qw={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Kw,scaleY:Xw,scale:e=>(Kw(e)+Xw(e))/2,rotateX:e=>qw(Uw(Math.atan2(e[6],e[5]))),rotateY:e=>qw(Uw(Math.atan2(-e[2],e[0]))),rotateZ:Yw,rotate:Yw,skewX:e=>Uw(Math.atan(e[4])),skewY:e=>Uw(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Zw(e){return e.includes("scale")?1:0}function Jw(e,t){if(!e||"none"===e)return Zw(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(n)r=Qw,o=n;else{const t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Gw,o=t}if(!o)return Zw(t);const i=r[t],a=o[1].split(",").map(ek);return"function"===typeof i?i(a):a[i]}function ek(e){return parseFloat(e.trim())}const tk=e=>e===ow||e===yw,nk=new Set(["x","y","z"]),rk=ox.filter((e=>!nk.has(e)));const ok={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:o="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(o)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:o="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(o)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:(e,t)=>{let{transform:n}=t;return Jw(n,"x")},y:(e,t)=>{let{transform:n}=t;return Jw(n,"y")}};ok.translateX=ok.x,ok.translateY=ok.y;const ik=new Set;let ak=!1,sk=!1;function lk(){if(sk){const e=Array.from(ik).filter((e=>e.needsMeasurement)),t=new Set(e.map((e=>e.element))),n=new Map;t.forEach((e=>{const t=function(e){const t=[];return rk.forEach((n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))})),t}(e);t.length&&(n.set(e,t),e.render())})),e.forEach((e=>e.measureInitialState())),t.forEach((e=>{e.render();const t=n.get(e);t&&t.forEach((t=>{let[n,r]=t;e.getValue(n)?.set(r)}))})),e.forEach((e=>e.measureEndState())),e.forEach((e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)}))}sk=!1,ak=!1,ik.forEach((e=>e.complete())),ik.clear()}function ck(){ik.forEach((e=>{e.readKeyframes(),e.needsMeasurement&&(sk=!0)}))}class uk{constructor(e,t,n,r,o){let i=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=o,this.isAsync=i}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ik.add(this),ak||(ak=!0,ex.read(ck),ex.resolveKeyframes(lk))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;for(let o=0;o<e.length;o++)if(null===e[o])if(0===o){const o=r?.get(),i=e[e.length-1];if(void 0!==o)e[0]=o;else if(n&&t){const r=n.readValue(t,i);void 0!==r&&null!==r&&(e[0]=r)}void 0===e[0]&&(e[0]=i),r&&void 0===o&&r.set(e[0])}else e[o]=e[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ik.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ik.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const dk=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),fk=e=>t=>"string"===typeof t&&t.startsWith(e),hk=fk("--"),pk=fk("var(--"),mk=e=>!!pk(e)&&gk.test(e.split("/*")[0].trim()),gk=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,vk=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function yk(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const[r,o]=function(e){const t=vk.exec(e);if(!t)return[,];const[,n,r,o]=t;return[`--${n??r}`,o]}(e);if(!r)return;const i=window.getComputedStyle(t).getPropertyValue(r);if(i){const e=i.trim();return dk(e)?parseFloat(e):e}return mk(o)?yk(o,t,n+1):o}const bk=e=>t=>t.test(e),xk=[ow,yw,vw,gw,xw,bw,{test:e=>"auto"===e,parse:e=>e}],wk=e=>xk.find(bk(e));class kk extends uk{constructor(e,t,n,r,o){super(e,t,n,r,o,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let s=0;s<e.length;s++){let n=e[s];if("string"===typeof n&&(n=n.trim(),mk(n))){const r=yk(n,t.current);void 0!==r&&(e[s]=r),s===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!ax.has(n)||2!==e.length)return;const[r,o]=e,i=wk(r),a=wk(o);if(i!==a)if(tk(i)&&tk(a))for(let s=0;s<e.length;s++){const t=e[s];"string"===typeof t&&(e[s]=parseFloat(t))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let o=0;o<e.length;o++)("number"===typeof(r=e[o])?0===r:null===r||"none"===r||"0"===r||nw(r))&&n.push(o);var r;n.length&&function(e,t,n){let r,o=0;for(;o<e.length&&!r;){const t=e[o];"string"===typeof t&&!Vw.has(t)&&Aw(t).values.length&&(r=e[o]),o++}if(r&&n)for(const i of t)e[i]=Ww(n,r)}(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ok[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const r=t[t.length-1];void 0!==r&&e.getValue(n,r).jump(r,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;const r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);const o=n.length-1,i=n[o];n[o]=ok[t](e.measureViewportBox(),window.getComputedStyle(e.current)),null!==i&&void 0===this.finalKeyframe&&(this.finalKeyframe=i),this.removedTransforms?.length&&this.removedTransforms.forEach((t=>{let[n,r]=t;e.getValue(n).set(r)})),this.resolveNoneKeyframes()}}const Sk=(e,t)=>"zIndex"!==t&&(!("number"!==typeof e&&!Array.isArray(e))||!("string"!==typeof e||!Mw.test(e)&&"0"!==e||e.startsWith("url(")));function jk(e,t,n,r){const o=e[0];if(null===o)return!1;if("display"===t||"visibility"===t)return!0;const i=e[e.length-1],a=Sk(o,t),s=Sk(i,t);return!(!a||!s)&&(function(e){const t=e[0];if(1===e.length)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}(e)||("spring"===n||Mx(n))&&r)}const Ck=e=>null!==e;function Ek(e,t,n){let{repeat:r,repeatType:o="loop"}=t;const i=e.filter(Ck),a=r&&"loop"!==o&&r%2===1?0:i.length-1;return a&&void 0!==n?n:i[a]}class Tk{constructor(e){let{autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:o=0,repeatDelay:i=0,repeatType:a="loop",...s}=e;this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=hx.now(),this.options={autoplay:t,delay:n,type:r,repeat:o,repeatDelay:i,repeatType:a,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt}get resolved(){return this._resolved||this.hasAttemptedResolve||(ck(),lk()),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=hx.now(),this.hasAttemptedResolve=!0;const{name:n,type:r,velocity:o,delay:i,onComplete:a,onUpdate:s,isGenerator:l}=this.options;if(!l&&!jk(e,n,r,o)){if(Ox||!i)return s&&s(Ek(e,this.options,t)),a&&a(),void this.resolveFinishedPromise();this.options.duration=0}const c=this.initPlayback(e,t);!1!==c&&(this._resolved={keyframes:e,finalKeyframe:t,...c},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise((e=>{this.resolveFinishedPromise=e}))}}const Ak=2e4;function Pk(e){let t=0;let n=e.next(t);for(;!n.done&&t<Ak;)t+=50,n=e.next(t);return t>=Ak?1/0:t}const zk=(e,t,n)=>e+(t-e)*n;function Ok(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Mk(e,t){return n=>n>0?t:e}const Rk=(e,t,n)=>{const r=e*e,o=n*(t*t-r)+r;return o<0?0:Math.sqrt(o)},Ik=[pw,hw,kw];function $k(e){const t=(e=>Ik.find((t=>t.test(e))))(e);if(Boolean(t),!Boolean(t))return!1;let n=t.parse(e);return t===kw&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:o}=e;t/=360,n/=100,r/=100;let i=0,a=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,o=2*r-e;i=Ok(o,e,t+1/3),a=Ok(o,e,t),s=Ok(o,e,t-1/3)}else i=a=s=r;return{red:Math.round(255*i),green:Math.round(255*a),blue:Math.round(255*s),alpha:o}}(n)),n}const Lk=(e,t)=>{const n=$k(e),r=$k(t);if(!n||!r)return Mk(e,t);const o={...n};return e=>(o.red=Rk(n.red,r.red,e),o.green=Rk(n.green,r.green,e),o.blue=Rk(n.blue,r.blue,e),o.alpha=zk(n.alpha,r.alpha,e),hw.transform(o))},Nk=(e,t)=>n=>t(e(n)),_k=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(Nk)},Dk=new Set(["none","hidden"]);function Fk(e,t){return n=>zk(e,t,n)}function Bk(e){return"number"===typeof e?Fk:"string"===typeof e?mk(e)?Mk:Sw.test(e)?Lk:Vk:Array.isArray(e)?Hk:"object"===typeof e?Sw.test(e)?Lk:Wk:Mk}function Hk(e,t){const n=[...e],r=n.length,o=e.map(((e,n)=>Bk(e)(e,t[n])));return e=>{for(let t=0;t<r;t++)n[t]=o[t](e);return n}}function Wk(e,t){const n={...e,...t},r={};for(const o in n)void 0!==e[o]&&void 0!==t[o]&&(r[o]=Bk(e[o])(e[o],t[o]));return e=>{for(const t in r)n[t]=r[t](e);return n}}const Vk=(e,t)=>{const n=Mw.createTransformer(t),r=Aw(e),o=Aw(t);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Dk.has(e)&&!o.values.length||Dk.has(t)&&!r.values.length?function(e,t){return Dk.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}(e,t):_k(Hk(function(e,t){const n=[],r={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const i=t.types[o],a=e.indexes[i][r[i]],s=e.values[a]??0;n[o]=s,r[i]++}return n}(r,o),o.values),n):Mk(e,t)};function Uk(e,t,n){if("number"===typeof e&&"number"===typeof t&&"number"===typeof n)return zk(e,t,n);return Bk(e)(e,t)}function Yk(e,t,n){const r=Math.max(t-5,0);return ux(n-e(r),t-r)}const Gk={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},qk=.001;function Kk(e){let t,n,{duration:r=Gk.duration,bounce:o=Gk.bounce,velocity:i=Gk.velocity,mass:a=Gk.mass}=e;Px(Gk.maxDuration);let s=1-o;s=rw(Gk.minDamping,Gk.maxDamping,s),r=rw(Gk.minDuration,Gk.maxDuration,zx(r)),s<1?(t=e=>{const t=e*s,n=t*r,o=t-i,a=Qk(e,s),l=Math.exp(-n);return qk-o/a*l},n=e=>{const n=e*s*r,o=n*i+i,a=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),c=Qk(Math.pow(e,2),s);return(-t(e)+qk>0?-1:1)*((o-a)*l)/c}):(t=e=>Math.exp(-e*r)*((e-i)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(i-e)));const l=function(e,t,n){let r=n;for(let o=1;o<Xk;o++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=Px(r),isNaN(l))return{stiffness:Gk.stiffness,damping:Gk.damping,duration:r};{const e=Math.pow(l,2)*a;return{stiffness:e,damping:2*s*Math.sqrt(a*e),duration:r}}}const Xk=12;function Qk(e,t){return e*Math.sqrt(1-t*t)}const Zk=["duration","bounce"],Jk=["stiffness","damping","mass"];function eS(e,t){return t.some((t=>void 0!==e[t]))}function tS(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gk.visualDuration,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Gk.bounce;const n="object"!==typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:o}=n;const i=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],s={done:!1,value:i},{stiffness:l,damping:c,mass:u,duration:d,velocity:f,isResolvedFromDuration:h}=function(e){let t={velocity:Gk.velocity,stiffness:Gk.stiffness,damping:Gk.damping,mass:Gk.mass,isResolvedFromDuration:!1,...e};if(!eS(e,Jk)&&eS(e,Zk))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(1.2*n),o=r*r,i=2*rw(.05,1,1-(e.bounce||0))*Math.sqrt(o);t={...t,mass:Gk.mass,stiffness:o,damping:i}}else{const n=Kk(e);t={...t,...n,mass:Gk.mass},t.isResolvedFromDuration=!0}return t}({...n,velocity:-zx(n.velocity||0)}),p=f||0,m=c/(2*Math.sqrt(l*u)),g=a-i,v=zx(Math.sqrt(l/u)),y=Math.abs(g)<5;let b;if(r||(r=y?Gk.restSpeed.granular:Gk.restSpeed.default),o||(o=y?Gk.restDelta.granular:Gk.restDelta.default),m<1){const e=Qk(v,m);b=t=>{const n=Math.exp(-m*v*t);return a-n*((p+m*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)b=e=>a-Math.exp(-v*e)*(g+(p+v*g)*e);else{const e=v*Math.sqrt(m*m-1);b=t=>{const n=Math.exp(-m*v*t),r=Math.min(e*t,300);return a-n*((p+m*v*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}const x={calculatedDuration:h&&d||null,next:e=>{const t=b(e);if(h)s.done=e>=d;else{let n=0;m<1&&(n=0===e?Px(p):Yk(b,e,t));const i=Math.abs(n)<=r,l=Math.abs(a-t)<=o;s.done=i&&l}return s.value=s.done?a:t,s},toString:()=>{const e=Math.min(Pk(x),Ak),t=Bx((t=>x.next(e*t).value),e,30);return e+"ms "+t},toTransition:()=>{}};return x}function nS(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:o=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}=e;const f=t[0],h={done:!1,value:f},p=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let m=r*n;const g=f+m,v=void 0===s?g:s(g);v!==g&&(m=v-f);const y=e=>-m*Math.exp(-e/o),b=e=>v+y(e),x=e=>{const t=y(e),n=b(e);h.done=Math.abs(t)<=u,h.value=h.done?v:n};let w,k;const S=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(h.value)&&(w=e,k=tS({keyframes:[h.value,p(h.value)],velocity:Yk(b,e,h.value),damping:i,stiffness:a,restDelta:u,restSpeed:d}))};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return k||void 0!==w||(t=!0,x(e),S(e)),void 0!==w&&e>=w?k.next(e-w):(!t&&x(e),h)}}}tS.applyToOptions=e=>{const t=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const n=(arguments.length>2?arguments[2]:void 0)({...e,keyframes:[0,t]}),r=Math.min(Pk(n),Ak);return{type:"keyframes",ease:e=>n.next(r*e).value/t,duration:zx(r)}}(e,100,tS);return e.ease=Lx()?t.ease:"easeOut",e.duration=Px(t.duration),e.type="keyframes",e};const rS=Yx(.42,0,1,1),oS=Yx(0,0,.58,1),iS=Yx(.42,0,.58,1),aS={linear:Kb,easeIn:rS,easeInOut:iS,easeOut:oS,circIn:Jx,circInOut:tw,circOut:ew,backIn:Xx,backInOut:Qx,backOut:Kx,anticipate:Zx},sS=e=>{if(Rx(e)){e.length;const[t,n,r,o]=e;return Yx(t,n,r,o)}return"string"===typeof e?aS[e]:e},lS=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r};function cS(e,t){let{clamp:n=!0,ease:r,mixer:o}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=e.length;if(t.length,1===i)return()=>t[0];if(2===i&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=function(e,t,n){const r=[],o=n||Uk,i=e.length-1;for(let a=0;a<i;a++){let n=o(e[a],e[a+1]);if(t){const e=Array.isArray(t)?t[a]||Kb:t;n=_k(e,n)}r.push(n)}return r}(t,r,o),l=s.length,c=n=>{if(a&&n<e[0])return t[0];let r=0;if(l>1)for(;r<e.length-2&&!(n<e[r+1]);r++);const o=lS(e[r],e[r+1],n);return s[r](o)};return n?t=>c(rw(e[0],e[i-1],t)):c}function uS(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const o=lS(0,t,r);e.push(zk(n,1,o))}}(t,e.length-1),t}function dS(e){let{duration:t=300,keyframes:n,times:r,ease:o="easeInOut"}=e;const i=(e=>Array.isArray(e)&&"number"!==typeof e[0])(o)?o.map(sS):sS(o),a={done:!1,value:n[0]},s=function(e,t){return e.map((e=>e*t))}(r&&r.length===n.length?r:uS(n),t),l=cS(s,n,{ease:Array.isArray(i)?i:(c=n,u=i,c.map((()=>u||iS)).splice(0,c.length-1))});var c,u;return{calculatedDuration:t,next:e=>(a.value=l(e),a.done=e>=t,a)}}const fS=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:()=>ex.update(t,!0),stop:()=>tx(t),now:()=>nx.isProcessing?nx.timestamp:hx.now()}},hS={decay:nS,inertia:nS,tween:dS,keyframes:dS,spring:tS},pS=e=>e/100;class mS extends Tk{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.teardown();const{onStop:e}=this.options;e&&e()};const{name:t,motionValue:n,element:r,keyframes:o}=this.options,i=r?.KeyframeResolver||uk;this.resolver=new i(o,((e,t)=>this.onKeyframesResolved(e,t)),t,n,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:n=0,repeatDelay:r=0,repeatType:o,velocity:i=0}=this.options,a=Mx(t)?t:hS[t]||dS;let s,l;a!==dS&&"number"!==typeof e[0]&&(s=_k(pS,Uk(e[0],e[1])),e=[0,100]);const c=a({...this.options,keyframes:e});"mirror"===o&&(l=a({...this.options,keyframes:[...e].reverse(),velocity:-i})),null===c.calculatedDuration&&(c.calculatedDuration=Pk(c));const{calculatedDuration:u}=c,d=u+r;return{generator:c,mirroredGenerator:l,mapPercentToKeyframes:s,calculatedDuration:u,resolvedDuration:d,totalDuration:d*(n+1)-r}}onPostResolved(){const{autoplay:e=!0}=this.options;Fx.mainThread++,this.play(),"paused"!==this.pendingPlayState&&e?this.state=this.pendingPlayState:this.pause()}tick(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{resolved:n}=this;if(!n){const{keyframes:e}=this.options;return{done:!0,value:e[e.length-1]}}const{finalKeyframe:r,generator:o,mirroredGenerator:i,mapPercentToKeyframes:a,keyframes:s,calculatedDuration:l,totalDuration:c,resolvedDuration:u}=n;if(null===this.startTime)return o.next(0);const{delay:d,repeat:f,repeatType:h,repeatDelay:p,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-c/this.speed,this.startTime)),t?this.currentTime=e:null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const g=this.currentTime-d*(this.speed>=0?1:-1),v=this.speed>=0?g<0:g>c;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=c);let y=this.currentTime,b=o;if(f){const e=Math.min(this.currentTime,c)/u;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,f+1);Boolean(t%2)&&("reverse"===h?(n=1-n,p&&(n-=p/u)):"mirror"===h&&(b=i)),y=rw(0,1,n)*u}const x=v?{done:!1,value:s[0]}:b.next(y);a&&(x.value=a(x.value));let{done:w}=x;v||null===l||(w=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const k=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return k&&void 0!==r&&(x.value=Ek(s,this.options,r)),m&&m(x.value),k&&this.finish(),x}get duration(){const{resolved:e}=this;return e?zx(e.calculatedDuration):0}get time(){return zx(this.currentTime)}set time(e){e=Px(e),this.currentTime=e,null!==this.holdTime||0===this.speed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=zx(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved)return void(this.pendingPlayState="running");if(this.isStopped)return;const{driver:e=fS,onPlay:t,startTime:n}=this.options;this.driver||(this.driver=e((e=>this.tick(e)))),t&&t();const r=this.driver.now();null!==this.holdTime?this.startTime=r-this.holdTime:this.startTime?"finished"===this.state&&(this.startTime=r):this.startTime=n??this.calcStartTime(),"finished"===this.state&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){this._resolved?(this.state="paused",this.holdTime=this.currentTime??0):this.pendingPlayState="paused"}complete(){"running"!==this.state&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){null!==this.cancelTime&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel(),Fx.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}get finished(){return this.currentFinishedPromise}}const gS=new Set(["opacity","clipPath","filter","transform"]),vS=Cx((()=>Object.hasOwnProperty.call(Element.prototype,"animate")));const yS={anticipate:Zx,backInOut:Qx,circInOut:tw};class bS extends Tk{constructor(e){super(e);const{name:t,motionValue:n,element:r,keyframes:o}=this.options;this.resolver=new kk(o,((e,t)=>this.onKeyframesResolved(e,t)),t,n,r),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:n=300,times:r,ease:o,type:i,motionValue:a,name:s,startTime:l}=this.options;if(!a.owner||!a.owner.current)return!1;var c;if("string"===typeof o&&Lx()&&o in yS&&(o=yS[o]),Mx((c=this.options).type)||"spring"===c.type||!Dx(c.ease)){const{onComplete:t,onUpdate:a,motionValue:s,element:l,...c}=this.options,u=function(e,t){const n=new mS({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const o=[];let i=0;for(;!r.done&&i<2e4;)r=n.sample(i),o.push(r.value),i+=10;return{times:void 0,keyframes:o,duration:i-10,ease:"linear"}}(e,c);1===(e=u.keyframes).length&&(e[1]=e[0]),n=u.duration,r=u.times,o=u.ease,i="keyframes"}const u=Wx(a.owner.current,s,e,{...this.options,duration:n,times:r,ease:o});return u.startTime=l??this.calcStartTime(),this.pendingTimeline?(Vx(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:n}=this.options;a.set(Ek(e,this.options,t)),n&&n(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:n,times:r,type:i,ease:o,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return zx(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return zx(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.currentTime=Px(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}get finished(){return this.resolved.animation.finished}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(this._resolved){const{resolved:t}=this;if(!t)return Kb;const{animation:n}=t;Vx(n,e)}else this.pendingTimeline=e;return Kb}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;"finished"===t.playState&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:n,duration:r,type:o,ease:i,times:a}=e;if("idle"===t.playState||"finished"===t.playState)return;if(this.time){const{motionValue:e,onUpdate:t,onComplete:s,element:l,...c}=this.options,u=new mS({...c,keyframes:n,duration:r,type:o,ease:i,times:a,isGenerator:!0}),d=Px(this.time);e.setWithVelocity(u.sample(d-10).value,u.sample(d).value,10)}const{onStop:s}=this.options;s&&s(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:n,repeatDelay:r,repeatType:o,damping:i,type:a}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:s,transformTemplate:l}=t.owner.getProps();return vS()&&n&&gS.has(n)&&("transform"!==n||!l)&&!s&&!r&&"mirror"!==o&&0!==i&&"inertia"!==a}}const xS={type:"spring",stiffness:500,damping:25,restSpeed:10},wS={type:"keyframes",duration:.8},kS={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},SS=(e,t)=>{let{keyframes:n}=t;return n.length>2?wS:ix.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:xS:kS};const jS=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0;return a=>{const s=qb(r,e)||{},l=s.delay||r.delay||0;let{elapsed:c=0}=r;c-=Px(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-c,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{a(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:i?void 0:o};(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:o,staggerDirection:i,repeat:a,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}=e;return!!Object.keys(d).length})(s)||(u={...u,...SS(e,u)}),u.duration&&(u.duration=Px(u.duration)),u.repeatDelay&&(u.repeatDelay=Px(u.repeatDelay)),void 0!==u.from&&(u.keyframes[0]=u.from);let d=!1;if((!1===u.type||0===u.duration&&!u.repeatDelay)&&(u.duration=0,0===u.delay&&(d=!0)),(Ox||Xb.skipAnimations)&&(d=!0,u.duration=0,u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!i&&void 0!==t.get()){const e=Ek(u.keyframes,s);if(void 0!==e)return ex.update((()=>{u.onUpdate(e),u.onComplete()})),new Ax([])}return!i&&bS.supports(u)?new bS(u):new mS(u)}};function CS(e,t){let{protectedKeys:n,needsAnimating:r}=e;const o=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,o}function ES(e,t){let{delay:n=0,transitionOverride:r,type:o}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:i=e.getDefaultTransition(),transitionEnd:a,...s}=t;r&&(i=r);const l=[],c=o&&e.animationState&&e.animationState.getState()[o];for(const u in s){const t=e.getValue(u,e.latestValues[u]??null),r=s[u];if(void 0===r||c&&CS(c,u))continue;const o={delay:n,...qb(i||{},u)};let a=!1;if(window.MotionHandoffAnimation){const t=jx(e);if(t){const e=window.MotionHandoffAnimation(t,u,ex);null!==e&&(o.startTime=e,a=!0)}}wx(e,u),t.start(jS(u,t,r,e.shouldReduceMotion&&ax.has(u)?{type:!1}:o,e,a));const d=t.animation;d&&l.push(d)}return a&&Promise.all(l).then((()=>{ex.update((()=>{a&&function(e,t){const n=Gb(e,t);let{transitionEnd:r={},transition:o={},...i}=n||{};i={...i,...r};for(const a in i)bx(e,a,yx(i[a]))}(e,a)}))})),l}function TS(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=Gb(e,t,"exit"===n.type?e.presenceContext?.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(o=n.transitionOverride);const i=r?()=>Promise.all(ES(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:i=0,staggerChildren:a,staggerDirection:s}=o;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=arguments.length>5?arguments[5]:void 0;const a=[],s=(e.variantChildren.size-1)*r,l=1===o?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r};return Array.from(e.variantChildren).sort(AS).forEach(((e,r)=>{e.notify("AnimationStart",t),a.push(TS(e,t,{...i,delay:n+l(r)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(a)}(e,t,i+r,a,s,n)}:()=>Promise.resolve(),{when:s}=o;if(s){const[e,t]="beforeChildren"===s?[i,a]:[a,i];return e().then((()=>t()))}return Promise.all([i(),a(n.delay)])}function AS(e,t){return e.sortNodePosition(t)}function PS(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function zS(e){return"string"===typeof e||Array.isArray(e)}const OS=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],MS=["initial",...OS],RS=MS.length;function IS(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent&&IS(e.parent)||{};return void 0!==e.props.initial&&(t.initial=e.props.initial),t}const t={};for(let n=0;n<RS;n++){const r=MS[n],o=e.props[r];(zS(o)||!1===o)&&(t[r]=o)}return t}const $S=[...OS].reverse(),LS=OS.length;function NS(e){return t=>Promise.all(t.map((t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const o=t.map((t=>TS(e,t,r)));n=Promise.all(o)}else if("string"===typeof t)n=TS(e,t,r);else{const o="function"===typeof t?Gb(e,t,r.custom):t;n=Promise.all(ES(e,o,r))}return n.then((()=>{e.notify("AnimationComplete",t)}))}(e,n,r)})))}function _S(e){let t=NS(e),n=BS(),r=!0;const o=t=>(n,r)=>{const o=Gb(e,r,"exit"===t?e.presenceContext?.custom:void 0);if(o){const{transition:e,transitionEnd:t,...r}=o;n={...n,...r,...t}}return n};function i(i){const{props:a}=e,s=IS(e.parent)||{},l=[],c=new Set;let u={},d=1/0;for(let t=0;t<LS;t++){const f=$S[t],h=n[f],p=void 0!==a[f]?a[f]:s[f],m=zS(p),g=f===i?h.isActive:null;!1===g&&(d=t);let v=p===s[f]&&p!==a[f]&&m;if(v&&r&&e.manuallyAnimateOnMount&&(v=!1),h.protectedKeys={...u},!h.isActive&&null===g||!p&&!h.prevProp||Vb(p)||"boolean"===typeof p)continue;const y=DS(h.prevProp,p);let b=y||f===i&&h.isActive&&!v&&m||t>d&&m,x=!1;const w=Array.isArray(p)?p:[p];let k=w.reduce(o(f),{});!1===g&&(k={});const{prevResolvedValues:S={}}=h,j={...S,...k},C=t=>{b=!0,c.has(t)&&(x=!0,c.delete(t)),h.needsAnimating[t]=!0;const n=e.getValue(t);n&&(n.liveStyle=!1)};for(const e in j){const t=k[e],n=S[e];if(u.hasOwnProperty(e))continue;let r=!1;r=vx(t)&&vx(n)?!PS(t,n):t!==n,r?void 0!==t&&null!==t?C(e):c.add(e):void 0!==t&&c.has(e)?C(e):h.protectedKeys[e]=!0}h.prevProp=p,h.prevResolvedValues=k,h.isActive&&(u={...u,...k}),r&&e.blockInitialAnimation&&(b=!1);b&&(!(v&&y)||x)&&l.push(...w.map((e=>({animation:e,options:{type:f}}))))}if(c.size){const t={};if("boolean"!==typeof a.initial){const n=Gb(e,Array.isArray(a.initial)?a.initial[0]:a.initial);n&&n.transition&&(t.transition=n.transition)}c.forEach((n=>{const r=e.getBaseTarget(n),o=e.getValue(n);o&&(o.liveStyle=!0),t[n]=r??null})),l.push({animation:t})}let f=Boolean(l.length);return!r||!1!==a.initial&&a.initial!==a.animate||e.manuallyAnimateOnMount||(f=!1),r=!1,f?t(l):Promise.resolve()}return{animateChanges:i,setActive:function(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach((e=>e.animationState?.setActive(t,r))),n[t].isActive=r;const o=i(t);for(const e in n)n[e].protectedKeys={};return o},setAnimateFunction:function(n){t=n(e)},getState:()=>n,reset:()=>{n=BS(),r=!0}}}function DS(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!PS(t,e)}function FS(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function BS(){return{animate:FS(!0),whileInView:FS(),whileHover:FS(),whileTap:FS(),whileDrag:FS(),whileFocus:FS(),exit:FS()}}class HS{constructor(e){this.isMounted=!1,this.node=e}update(){}}let WS=0;const VS={animation:{Feature:class extends HS{constructor(e){super(e),e.animationState||(e.animationState=_S(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Vb(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends HS{constructor(){super(...arguments),this.id=WS++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const r=this.node.animationState.setActive("exit",!e);t&&!e&&r.then((()=>{t(this.id)}))}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}},US={x:!1,y:!1};function YS(){return US.x||US.y}function GS(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const qS=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function KS(e){return{point:{x:e.pageX,y:e.pageY}}}function XS(e,t,n,r){return GS(e,t,(e=>t=>qS(t)&&e(t,KS(t)))(n),r)}function QS(e){let{top:t,left:n,right:r,bottom:o}=e;return{x:{min:n,max:r},y:{min:t,max:o}}}function ZS(e){return e.max-e.min}function JS(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=zk(t.min,t.max,e.origin),e.scale=ZS(n)/ZS(t),e.translate=zk(n.min,n.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function ej(e,t,n,r){JS(e.x,t.x,n.x,r?r.originX:void 0),JS(e.y,t.y,n.y,r?r.originY:void 0)}function tj(e,t,n){e.min=n.min+t.min,e.max=e.min+ZS(t)}function nj(e,t,n){e.min=t.min-n.min,e.max=e.min+ZS(t)}function rj(e,t,n){nj(e.x,t.x,n.x),nj(e.y,t.y,n.y)}const oj=()=>({x:{min:0,max:0},y:{min:0,max:0}});function ij(e){return[e("x"),e("y")]}function aj(e){return void 0===e||1===e}function sj(e){let{scale:t,scaleX:n,scaleY:r}=e;return!aj(t)||!aj(n)||!aj(r)}function lj(e){return sj(e)||cj(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function cj(e){return uj(e.x)||uj(e.y)}function uj(e){return e&&"0%"!==e}function dj(e,t,n){return n+t*(e-n)}function fj(e,t,n,r,o){return void 0!==o&&(e=dj(e,o,r)),dj(e,n,r)+t}function hj(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;e.min=fj(e.min,t,n,r,o),e.max=fj(e.max,t,n,r,o)}function pj(e,t){let{x:n,y:r}=t;hj(e.x,n.translate,n.scale,n.originPoint),hj(e.y,r.translate,r.scale,r.originPoint)}const mj=.999999999999,gj=1.0000000000001;function vj(e,t){e.min=e.min+t,e.max=e.max+t}function yj(e,t,n,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5;hj(e,t,n,zk(e.min,e.max,o),r)}function bj(e,t){yj(e.x,t.x,t.scaleX,t.scale,t.originX),yj(e.y,t.y,t.scaleY,t.scale,t.originY)}function xj(e,t){return QS(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const wj=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null};function kj(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}const Sj=(e,t)=>Math.abs(e-t);class jj{constructor(e,t){let{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:o=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=Tj(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=Sj(e.x,t.x),r=Sj(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:r}=e,{timestamp:o}=nx;this.history.push({...r,timestamp:o});const{onStart:i,onMove:a}=this.handlers;t||(i&&i(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Cj(t,this.transformPagePoint),ex.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:o}=this.handlers;if(this.dragSnapToOrigin&&o&&o(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const i=Tj("pointercancel"===e.type?this.lastMoveEventInfo:Cj(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,i),r&&r(e,i)},!qS(e))return;this.dragSnapToOrigin=o,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;const i=Cj(KS(e),this.transformPagePoint),{point:a}=i,{timestamp:s}=nx;this.history=[{...a,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,Tj(i,this.history)),this.removeListeners=_k(XS(this.contextWindow,"pointermove",this.handlePointerMove),XS(this.contextWindow,"pointerup",this.handlePointerUp),XS(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),tx(this.updatePoint)}}function Cj(e,t){return t?{point:t(e.point)}:e}function Ej(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Tj(e,t){let{point:n}=e;return{point:n,delta:Ej(n,Pj(t)),offset:Ej(n,Aj(t)),velocity:zj(t,.1)}}function Aj(e){return e[0]}function Pj(e){return e[e.length-1]}function zj(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=Pj(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>Px(t)));)n--;if(!r)return{x:0,y:0};const i=zx(o.timestamp-r.timestamp);if(0===i)return{x:0,y:0};const a={x:(o.x-r.x)/i,y:(o.y-r.y)/i};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function Oj(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function Mj(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const Rj=.35;function Ij(e,t,n){return{min:$j(e,t),max:$j(e,n)}}function $j(e,t){return"number"===typeof e?e:e[t]||0}const Lj=new WeakMap;class Nj{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:r}=this.getProps();this.panSession=new jj(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(KS(e).point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:o}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock="x"===(i=n)||"y"===i?US[i]?null:(US[i]=!0,()=>{US[i]=!1}):US.x||US.y?null:(US.x=US.y=!0,()=>{US.x=US.y=!1}),!this.openDragLock))return;var i;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ij((e=>{let t=this.getAxisMotionValue(e).get()||0;if(vw.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=ZS(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),o&&ex.postRender((()=>o(e,t))),wx(this.visualElement,"transform");const{animationState:a}=this.visualElement;a&&a.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:o,onDrag:i}=this.getProps();if(!n&&!this.openDragLock)return;const{offset:a}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(a),void(null!==this.currentDirection&&o&&o(this.currentDirection));this.updateAxis("x",t.point,a),this.updateAxis("y",t.point,a),this.visualElement.render(),i&&i(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>ij((e=>"paused"===this.getAnimationState(e)&&this.getAxisMotionValue(e).animation?.play()))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r,contextWindow:wj(this.visualElement)})}stop(e,t){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:o}=this.getProps();o&&ex.postRender((()=>o(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!_j(e,r,this.currentDirection))return;const o=this.getAxisMotionValue(e);let i=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(i=function(e,t,n){let{min:r,max:o}=t;return void 0!==r&&e<r?e=n?zk(r,e,n.min):Math.max(e,r):void 0!==o&&e>o&&(e=n?zk(o,e,n.max):Math.min(e,o)),e}(i,this.constraints[e],this.elastic[e])),o.set(i)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&kj(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!e||!n)&&function(e,t){let{top:n,left:r,bottom:o,right:i}=t;return{x:Oj(e.x,r,i),y:Oj(e.y,n,o)}}(n.layoutBox,e),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rj;return!1===e?e=0:!0===e&&(e=Rj),{x:Ij(e,"left","right"),y:Ij(e,"top","bottom")}}(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&ij((e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(n.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!kj(e))return!1;const n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const o=function(e,t,n){const r=xj(e,n),{scroll:o}=t;return o&&(vj(r.x,o.offset.x),vj(r.y,o.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let i=function(e,t){return{x:Mj(e.x,t.x),y:Mj(e.y,t.y)}}(r.layout.layoutBox,o);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(i));this.hasMutatedConstraints=!!e,e&&(i=QS(e))}return i}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:o,dragSnapToOrigin:i,onDragTransitionEnd:a}=this.getProps(),s=this.constraints||{},l=ij((a=>{if(!_j(a,t,this.currentDirection))return;let l=s&&s[a]||{};i&&(l={min:0,max:0});const c=r?200:1e6,u=r?40:1e7,d={type:"inertia",velocity:n?e[a]:0,bounceStiffness:c,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...o,...l};return this.startAxisValueAnimation(a,d)}));return Promise.all(l).then(a)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return wx(this.visualElement,e),n.start(jS(e,n,0,t,this.visualElement,!1))}stopAnimation(){ij((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){ij((e=>this.getAxisMotionValue(e).animation?.pause()))}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){ij((t=>{const{drag:n}=this.getProps();if(!_j(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,o=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:i}=r.layout.layoutBox[t];o.set(e[t]-zk(n,i,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!kj(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};ij((e=>{const t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){const n=t.get();r[e]=function(e,t){let n=.5;const r=ZS(e),o=ZS(t);return o>r?n=lS(t.min,t.max-r,e.min):r>o&&(n=lS(e.min,e.max-o,t.min)),rw(0,1,n)}({min:n,max:n},this.constraints[e])}}));const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),ij((t=>{if(!_j(t,e,null))return;const n=this.getAxisMotionValue(t),{min:o,max:i}=this.constraints[t];n.set(zk(o,i,r[t]))}))}addListeners(){if(!this.visualElement.current)return;Lj.set(this.visualElement,this);const e=XS(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();kj(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),ex.read(t);const o=GS(window,"resize",(()=>this.scalePositionWithinConstraints())),i=n.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(ij((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{o(),e(),r(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:o=!1,dragElastic:i=Rj,dragMomentum:a=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:o,dragElastic:i,dragMomentum:a}}}function _j(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const Dj=e=>(t,n)=>{e&&ex.postRender((()=>e(t,n)))};const{schedule:Fj,cancel:Bj}=Jb(queueMicrotask,!1),Hj=(0,e.createContext)(null);const Wj=(0,e.createContext)({}),Vj=(0,e.createContext)({}),Uj={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Yj(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Gj={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!yw.test(e))return e;e=parseFloat(e)}return`${Yj(e,t.target.x)}% ${Yj(e,t.target.y)}%`}},qj={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const o=e,i=Mw.parse(e);if(i.length>5)return o;const a=Mw.createTransformer(e),s="number"!==typeof i[0]?1:0,l=r.x.scale*n.x,c=r.y.scale*n.y;i[0+s]/=l,i[1+s]/=c;const u=zk(l,c,.5);return"number"===typeof i[2+s]&&(i[2+s]/=u),"number"===typeof i[3+s]&&(i[3+s]/=u),a(i)}},Kj={};class Xj extends e.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:o}=e;!function(e){for(const t in e)Kj[t]=e[t],hk(t)&&(Kj[t].isCSSVariable=!0)}(Zj),o&&(t.group&&t.group.add(o),n&&n.register&&r&&n.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",(()=>{this.safeToRemove()})),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Uj.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:o}=this.props,i=n.projection;return i?(i.isPresent=o,r||e.layoutDependency!==t||void 0===t||e.isPresent!==o?i.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?i.promote():i.relegate()||ex.postRender((()=>{const e=i.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Fj.postRender((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Qj(t){const[n,r]=function(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const n=(0,e.useContext)(Hj);if(null===n)return[!0,null];const{isPresent:r,onExitComplete:o,register:i}=n,a=(0,e.useId)();(0,e.useEffect)((()=>{if(t)return i(a)}),[t]);const s=(0,e.useCallback)((()=>t&&o&&o(a)),[a,o,t]);return!r&&o?[!1,s]:[!0]}(),o=(0,e.useContext)(Wj);return(0,im.jsx)(Xj,{...t,layoutGroup:o,switchLayoutGroup:(0,e.useContext)(Vj),isPresent:n,safeToRemove:r})}const Zj={borderRadius:{...Gj,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Gj,borderTopRightRadius:Gj,borderBottomLeftRadius:Gj,borderBottomRightRadius:Gj,boxShadow:qj};const Jj=(e,t)=>e.depth-t.depth;class eC{constructor(){this.children=[],this.isDirty=!1}add(e){sx(this.children,e),this.isDirty=!0}remove(e){lx(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Jj),this.isDirty=!1,this.children.forEach(e)}}function tC(e,t){const n=hx.now(),r=o=>{let{timestamp:i}=o;const a=i-n;a>=t&&(tx(r),e(a-t))};return ex.read(r,!0),()=>tx(r)}function nC(e){const t=xx(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const rC=["TopLeft","TopRight","BottomLeft","BottomRight"],oC=rC.length,iC=e=>"string"===typeof e?parseFloat(e):e,aC=e=>"number"===typeof e||yw.test(e);function sC(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const lC=uC(0,.5,ew),cC=uC(.5,.95,Kb);function uC(e,t,n){return r=>r<e?0:r>t?1:n(lS(e,t,r))}function dC(e,t){e.min=t.min,e.max=t.max}function fC(e,t){dC(e.x,t.x),dC(e.y,t.y)}function hC(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function pC(e,t,n,r,o){return e=dj(e-=t,1/n,r),void 0!==o&&(e=dj(e,1/o,r)),e}function mC(e,t,n,r,o){let[i,a,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;vw.test(t)&&(t=parseFloat(t),t=zk(a.min,a.max,t/100)-a.min);if("number"!==typeof t)return;let s=zk(i.min,i.max,r);e===i&&(s-=t),e.min=pC(e.min,t,n,s,o),e.max=pC(e.max,t,n,s,o)}(e,t[i],t[a],t[s],t.scale,r,o)}const gC=["x","scaleX","originX"],vC=["y","scaleY","originY"];function yC(e,t,n,r){mC(e.x,t,gC,n?n.x:void 0,r?r.x:void 0),mC(e.y,t,vC,n?n.y:void 0,r?r.y:void 0)}function bC(e){return 0===e.translate&&1===e.scale}function xC(e){return bC(e.x)&&bC(e.y)}function wC(e,t){return e.min===t.min&&e.max===t.max}function kC(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function SC(e,t){return kC(e.x,t.x)&&kC(e.y,t.y)}function jC(e){return ZS(e.x)/ZS(e.y)}function CC(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class EC{constructor(){this.members=[]}add(e){sx(this.members,e),e.scheduleRender()}remove(e){if(lx(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const TC={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},AC=["","X","Y","Z"],PC={visibility:"hidden"};let zC=0;function OC(e,t,n,r){const{latestValues:o}=t;o[e]&&(n[e]=o[e],t.setStaticValue(e,0),r&&(r[e]=0))}function MC(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=jx(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",ex,!(t||r))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&MC(r)}function RC(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:o,resetTransform:i}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n?.();this.id=zC++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Zb.value&&(TC.nodes=TC.calculatedTargetDeltas=TC.calculatedProjections=0),this.nodes.forEach(LC),this.nodes.forEach(WC),this.nodes.forEach(VC),this.nodes.forEach(NC),Zb.addProjectionMetrics&&Zb.addProjectionMetrics(TC)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new eC)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new cx),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var r;this.isSVG=(r=e)instanceof SVGElement&&"svg"!==r.tagName,this.instance=e;const{layoutId:o,layout:i,visualElement:a}=this.options;if(a&&!a.current&&a.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(i||o)&&(this.isLayoutDirty=!0),t){let n;const r=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=tC(r,250),Uj.hasAnimatedSinceResize&&(Uj.hasAnimatedSinceResize=!1,this.nodes.forEach(HC))}))}o&&this.root.registerSharedNode(o,this),!1!==this.options.animate&&a&&(o||i)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n,hasRelativeLayoutChanged:r,layout:o}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const i=this.options.transition||a.getDefaultTransition()||XC,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=a.getProps(),c=!this.targetLayout||!SC(this.targetLayout,o),u=!n&&r;if(this.options.layoutRoot||this.resumeFrom||u||n&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,u);const e={...qb(i,"layout"),onPlay:s,onComplete:l};(a.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||HC(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=o}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,tx(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(UC),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&MC(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let o=0;o<this.path.length;o++){const e=this.path[o];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(DC);this.isUpdating||this.nodes.forEach(FC),this.isUpdating=!1,this.nodes.forEach(BC),this.nodes.forEach(IC),this.nodes.forEach($C),this.clearAllSnapshots();const e=hx.now();nx.delta=rw(0,1e3/60,e-nx.timestamp),nx.timestamp=e,nx.isProcessing=!0,rx.update.process(nx),rx.preRender.process(nx),rx.render.process(nx),nx.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Fj.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(_C),this.sharedNodes.forEach(YC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ex.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ex.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||ZS(this.snapshot.measuredBox.x)||ZS(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t){const t=o(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;const e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!xC(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,o=r!==this.prevTransformTemplateValue;e&&(t||lj(this.latestValues)||o)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),function(e){JC(e.x),JC(e.y)}(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(tE))){const{scroll:e}=this.root;e&&(vj(t.x,e.offset.x),vj(t.y,e.offset.y))}return t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};if(fC(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:o,options:i}=r;r!==this.root&&o&&i.layoutScroll&&(o.wasRoot&&fC(t,e),vj(t.x,o.offset.x),vj(t.y,o.offset.y))}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};fC(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&bj(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),lj(e.latestValues)&&bj(n,e.latestValues)}return lj(this.latestValues)&&bj(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};fC(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!lj(e.latestValues))continue;sj(e.latestValues)&&e.updateSnapshot();const r={x:{min:0,max:0},y:{min:0,max:0}};fC(r,e.measurePageBox()),yC(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return lj(this.latestValues)&&yC(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==nx.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=t.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=t.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=t.isSharedProjectionDirty);const n=Boolean(this.resumingFrom)||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:r,layoutId:o}=this.options;if(this.layout&&(r||o)){if(this.resolvedRelativeTargetAt=nx.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},rj(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),fC(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var i,a,s;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),i=this.target,a=this.relativeTarget,s=this.relativeParent.target,tj(i.x,a.x,s.x),tj(i.y,a.y,s.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):fC(this.target,this.layout.layoutBox),pj(this.target,this.targetDelta)):fC(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},rj(this.relativeTargetOrigin,this.target,e.target),fC(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Zb.value&&TC.calculatedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!sj(this.parent.latestValues)&&!cj(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const e=this.getLead(),t=Boolean(this.resumingFrom)||this!==e;let n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===nx.timestamp&&(n=!1),n)return;const{layout:r,layoutId:o}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!r&&!o)return;fC(this.layoutCorrected,this.layout.layoutBox);const i=this.treeScale.x,a=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const o=n.length;if(!o)return;let i,a;t.x=t.y=1;for(let s=0;s<o;s++){i=n[s],a=i.projectionDelta;const{visualElement:o}=i.options;o&&o.props.style&&"contents"===o.props.style.display||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&bj(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,pj(e,a)),r&&lj(i.latestValues)&&bj(e,i.latestValues))}t.x<gj&&t.x>mj&&(t.x=1),t.y<gj&&t.y>mj&&(t.y=1)}(this.layoutCorrected,this.treeScale,this.path,t),!e.layout||e.target||1===this.treeScale.x&&1===this.treeScale.y||(e.target=e.layout.layoutBox,e.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}});const{target:s}=e;s?(this.projectionDelta&&this.prevProjectionDelta?(hC(this.prevProjectionDelta.x,this.projectionDelta.x),hC(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),ej(this.projectionDelta,this.layoutCorrected,s,this.latestValues),this.treeScale.x===i&&this.treeScale.y===a&&CC(this.projectionDelta.x,this.prevProjectionDelta.x)&&CC(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",s)),Zb.value&&TC.calculatedProjections++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.visualElement?.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},o={...this.latestValues},i={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const a={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,u=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some(KC));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;GC(i.x,e.x,n),GC(i.y,e.y,n),this.setTargetDelta(i),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(rj(a,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,r){qC(e.x,t.x,n.x,r),qC(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,a,n),d&&function(e,t){return wC(e.x,t.x)&&wC(e.y,t.y)}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),fC(d,this.relativeTarget)),s&&(this.animationValues=o,function(e,t,n,r,o,i){o?(e.opacity=zk(0,n.opacity??1,lC(r)),e.opacityExit=zk(t.opacity??1,0,cC(r))):i&&(e.opacity=zk(t.opacity??1,n.opacity??1,r));for(let a=0;a<oC;a++){const o=`border${rC[a]}Radius`;let i=sC(t,o),s=sC(n,o);void 0===i&&void 0===s||(i||(i=0),s||(s=0),0===i||0===s||aC(i)===aC(s)?(e[o]=Math.max(zk(iC(i),iC(s),r),0),(vw.test(s)||vw.test(i))&&(e[o]+="%")):e[o]=s)}(t.rotate||n.rotate)&&(e.rotate=zk(t.rotate||0,n.rotate||0,r))}(o,r,this.latestValues,n,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(tx(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ex.update((()=>{Uj.hasAnimatedSinceResize=!0,Fx.layout++,this.currentAnimation=function(e,t,n){const r=xx(e)?e:gx(e);return r.start(jS("",r,t,n)),r.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{Fx.layout--},onComplete:()=>{Fx.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:o}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&eE(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=ZS(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=ZS(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}fC(t,n),bj(t,o),ej(this.projectionDeltaWithTransform,this.layoutCorrected,t,o)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new EC);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){const{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){const{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;const r={};n.z&&OC("z",e,r,this.animationValues);for(let o=0;o<AC.length;o++)OC(`rotate${AC[o]}`,e,r,this.animationValues),OC(`skew${AC[o]}`,e,r,this.animationValues);e.render();for(const o in r)e.setStaticValue(o,r[o]),this.animationValues&&(this.animationValues[o]=r[o]);e.scheduleRender()}getProjectionStyles(e){if(!this.instance||this.isSVG)return;if(!this.isVisible)return PC;const t={visibility:""},n=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,t.opacity="",t.pointerEvents=nC(e?.pointerEvents)||"",t.transform=n?n(this.latestValues,""):"none",t;const r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=nC(e?.pointerEvents)||""),this.hasProjected&&!lj(this.latestValues)&&(t.transform=n?n({},""):"none",this.hasProjected=!1),t}const o=r.animationValues||r.latestValues;this.applyTransformsToTarget(),t.transform=function(e,t,n){let r="";const o=e.x.translate/t.x,i=e.y.translate/t.y,a=n?.z||0;if((o||i||a)&&(r=`translate3d(${o}px, ${i}px, ${a}px) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:e,rotate:t,rotateX:o,rotateY:i,skewX:a,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),o&&(r+=`rotateX(${o}deg) `),i&&(r+=`rotateY(${i}deg) `),a&&(r+=`skewX(${a}deg) `),s&&(r+=`skewY(${s}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return 1===s&&1===l||(r+=`scale(${s}, ${l})`),r||"none"}(this.projectionDeltaWithTransform,this.treeScale,o),n&&(t.transform=n(o,t.transform));const{x:i,y:a}=this.projectionDelta;t.transformOrigin=`${100*i.origin}% ${100*a.origin}% 0`,r.animationValues?t.opacity=r===this?o.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:o.opacityExit:t.opacity=r===this?void 0!==o.opacity?o.opacity:"":void 0!==o.opacityExit?o.opacityExit:0;for(const s in Kj){if(void 0===o[s])continue;const{correct:e,applyTo:n,isCSSVariable:i}=Kj[s],a="none"===t.transform?o[s]:e(o[s],r);if(n){const e=n.length;for(let r=0;r<e;r++)t[n[r]]=a}else i?this.options.visualElement.renderState.vars[s]=a:t[s]=a}return this.options.layoutId&&(t.pointerEvents=r===this?nC(e?.pointerEvents)||"":"none"),t}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>e.currentAnimation?.stop())),this.root.nodes.forEach(DC),this.root.sharedNodes.clear()}}}function IC(e){e.updateLayout()}function $C(e){const t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:r}=e.layout,{animationType:o}=e.options,i=t.source!==e.layout.source;"size"===o?ij((e=>{const r=i?t.measuredBox[e]:t.layoutBox[e],o=ZS(r);r.min=n[e].min,r.max=r.min+o})):eE(o,t.layoutBox,n)&&ij((r=>{const o=i?t.measuredBox[r]:t.layoutBox[r],a=ZS(n[r]);o.max=o.min+a,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+a)}));const a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};ej(a,n,t.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};i?ej(s,e.applyTransform(r,!0),t.measuredBox):ej(s,n,t.layoutBox);const l=!xC(a);let c=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:o,layout:i}=r;if(o&&i){const a={x:{min:0,max:0},y:{min:0,max:0}};rj(a,t.layoutBox,o.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};rj(s,n,i.layoutBox),SC(a,s)||(c=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=a,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:s,layoutDelta:a,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function LC(e){Zb.value&&TC.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function NC(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function _C(e){e.clearSnapshot()}function DC(e){e.clearMeasurements()}function FC(e){e.isLayoutDirty=!1}function BC(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function HC(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function WC(e){e.resolveTargetDelta()}function VC(e){e.calcProjection()}function UC(e){e.resetSkewAndRotation()}function YC(e){e.removeLeadSnapshot()}function GC(e,t,n){e.translate=zk(t.translate,0,n),e.scale=zk(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function qC(e,t,n,r){e.min=zk(t.min,n.min,r),e.max=zk(t.max,n.max,r)}function KC(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const XC={duration:.45,ease:[.4,0,.1,1]},QC=e=>"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),ZC=QC("applewebkit/")&&!QC("chrome/")?Math.round:Kb;function JC(e){e.min=ZC(e.min),e.max=ZC(e.max)}function eE(e,t,n){return"position"===e||"preserve-aspect"===e&&(r=jC(t),o=jC(n),i=.2,!(Math.abs(r-o)<=i));var r,o,i}function tE(e){return e!==e.root&&e.scroll?.wasRoot}const nE=RC({attachResizeListener:(e,t)=>GS(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),rE={current:void 0},oE=RC({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!rE.current){const e=new nE({});e.mount(window),e.setOptions({layoutScroll:!0}),rE.current=e}return rE.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),iE={pan:{Feature:class extends HS{constructor(){super(...arguments),this.removePointerDownListener=Kb}onPointerDown(e){this.session=new jj(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:wj(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Dj(e),onStart:Dj(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&ex.postRender((()=>r(e,t)))}}}mount(){this.removePointerDownListener=XS(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends HS{constructor(e){super(e),this.removeGroupControls=Kb,this.removeListeners=Kb,this.controls=new Nj(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Kb}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:oE,MeasureLayout:Qj}};function aE(e,t){const n=function(e,t,n){if(e instanceof EventTarget)return[e];if("string"===typeof e){let r=document;t&&(r=t.current);const o=n?.[e]??r.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function sE(e){return!("touch"===e.pointerType||YS())}function lE(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover","Start"===n);const o=r["onHover"+n];o&&ex.postRender((()=>o(t,KS(t))))}const cE=(e,t)=>!!t&&(e===t||cE(e,t.parentElement)),uE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);const dE=new WeakSet;function fE(e){return t=>{"Enter"===t.key&&e(t)}}function hE(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function pE(e){return qS(e)&&!YS()}function mE(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,o,i]=aE(e,n),a=e=>{const r=e.currentTarget;if(!pE(e)||dE.has(r))return;dE.add(r);const i=t(r,e),a=(e,t)=>{window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",l),pE(e)&&dE.has(r)&&(dE.delete(r),"function"===typeof i&&i(e,{success:t}))},s=e=>{a(e,r===window||r===document||n.useGlobalTarget||cE(r,e.target))},l=e=>{a(e,!1)};window.addEventListener("pointerup",s,o),window.addEventListener("pointercancel",l,o)};return r.forEach((e=>{var t;(n.useGlobalTarget?window:e).addEventListener("pointerdown",a,o),e instanceof HTMLElement&&(e.addEventListener("focus",(e=>((e,t)=>{const n=e.currentTarget;if(!n)return;const r=fE((()=>{if(dE.has(n))return;hE(n,"down");const e=fE((()=>{hE(n,"up")}));n.addEventListener("keyup",e,t),n.addEventListener("blur",(()=>hE(n,"cancel")),t)}));n.addEventListener("keydown",r,t),n.addEventListener("blur",(()=>n.removeEventListener("keydown",r)),t)})(e,o))),t=e,uE.has(t.tagName)||-1!==t.tabIndex||e.hasAttribute("tabindex")||(e.tabIndex=0))})),i}function gE(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap","Start"===n);const o=r["onTap"+("End"===n?"":n)];o&&ex.postRender((()=>o(t,KS(t))))}const vE=new WeakMap,yE=new WeakMap,bE=e=>{const t=vE.get(e.target);t&&t(e)},xE=e=>{e.forEach(bE)};function wE(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;yE.has(r)||yE.set(r,{});const o=yE.get(r),i=JSON.stringify(n);return o[i]||(o[i]=new IntersectionObserver(xE,{root:t,...n})),o[i]}(t);return vE.set(e,n),r.observe(e),()=>{vE.delete(e),r.unobserve(e)}}const kE={some:0,all:1};const SE={inView:{Feature:class extends HS{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:o}=e,i={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:kE[r]};return wE(this.node.current,i,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,o&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),i=t?n:r;i&&i(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends HS{mount(){const{current:e}=this.node;e&&(this.unmount=mE(e,((e,t)=>(gE(this.node,t,"Start"),(e,t)=>{let{success:n}=t;return gE(this.node,e,n?"End":"Cancel")})),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends HS{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(RA){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=_k(GS(this.node.current,"focus",(()=>this.onFocus())),GS(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends HS{mount(){const{current:e}=this.node;e&&(this.unmount=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,o,i]=aE(e,n),a=e=>{if(!sE(e))return;const{target:n}=e,r=t(n,e);if("function"!==typeof r||!n)return;const i=e=>{sE(e)&&(r(e),n.removeEventListener("pointerleave",i))};n.addEventListener("pointerleave",i,o)};return r.forEach((e=>{e.addEventListener("pointerenter",a,o)})),i}(e,((e,t)=>(lE(this.node,t,"Start"),e=>lE(this.node,e,"End")))))}unmount(){}}}},jE={layout:{ProjectionNode:oE,MeasureLayout:Qj}},CE=(0,e.createContext)({strict:!1}),EE=(0,e.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),TE=(0,e.createContext)({});function AE(e){return Vb(e.animate)||MS.some((t=>zS(e[t])))}function PE(e){return Boolean(AE(e)||e.variants)}function zE(t){const{initial:n,animate:r}=function(e,t){if(AE(e)){const{initial:t,animate:n}=e;return{initial:!1===t||zS(t)?t:void 0,animate:zS(n)?n:void 0}}return!1!==e.inherit?t:{}}(t,(0,e.useContext)(TE));return(0,e.useMemo)((()=>({initial:n,animate:r})),[OE(n),OE(r)])}function OE(e){return Array.isArray(e)?e.join(" "):e}const ME="undefined"!==typeof window,RE={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},IE={};for(const n in RE)IE[n]={isEnabled:e=>RE[n].some((t=>!!e[t]))};const $E=Symbol.for("motionComponentSymbol");function LE(t,n,r){return(0,e.useCallback)((e=>{e&&t.onMount&&t.onMount(e),n&&(e?n.mount(e):n.unmount()),r&&("function"===typeof r?r(e):kj(r)&&(r.current=e))}),[n])}const NE=ME?e.useLayoutEffect:e.useEffect;function _E(t,n,r,o,i){const{visualElement:a}=(0,e.useContext)(TE),s=(0,e.useContext)(CE),l=(0,e.useContext)(Hj),c=(0,e.useContext)(EE).reducedMotion,u=(0,e.useRef)(null);o=o||s.renderer,!u.current&&o&&(u.current=o(t,{visualState:n,parent:a,props:r,presenceContext:l,blockInitialAnimation:!!l&&!1===l.initial,reducedMotionConfig:c}));const d=u.current,f=(0,e.useContext)(Vj);!d||d.projection||!i||"html"!==d.type&&"svg"!==d.type||function(e,t,n,r){const{layoutId:o,layout:i,drag:a,dragConstraints:s,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:DE(e.parent)),e.projection.setOptions({layoutId:o,layout:i,alwaysMeasureLayout:Boolean(a)||s&&kj(s),visualElement:e,animationType:"string"===typeof i?i:"both",initialPromotionConfig:r,crossfade:u,layoutScroll:l,layoutRoot:c})}(u.current,r,i,f);const h=(0,e.useRef)(!1);(0,e.useInsertionEffect)((()=>{d&&h.current&&d.update(r,l)}));const p=r[Sx],m=(0,e.useRef)(Boolean(p)&&!window.MotionHandoffIsComplete?.(p)&&window.MotionHasOptimisedAnimation?.(p));return NE((()=>{d&&(h.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),Fj.render(d.render),m.current&&d.animationState&&d.animationState.animateChanges())})),(0,e.useEffect)((()=>{d&&(!m.current&&d.animationState&&d.animationState.animateChanges(),m.current&&(queueMicrotask((()=>{window.MotionHandoffMarkAsComplete?.(p)})),m.current=!1))})),d}function DE(e){if(e)return!1!==e.options.allowProjection?e.projection:DE(e.parent)}function FE(t){let{preloadedFeatures:n,createVisualElement:r,useRender:o,useVisualState:i,Component:a}=t;function s(t,n){let s;const l={...(0,e.useContext)(EE),...t,layoutId:BE(t)},{isStatic:c}=l,u=zE(t),d=i(t,c);if(!c&&ME){!function(){(0,e.useContext)(CE).strict;0}();const t=function(e){const{drag:t,layout:n}=IE;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}(l);s=t.MeasureLayout,u.visualElement=_E(a,d,l,r,t.ProjectionNode)}return(0,im.jsxs)(TE.Provider,{value:u,children:[s&&u.visualElement?(0,im.jsx)(s,{visualElement:u.visualElement,...l}):null,o(a,t,LE(d,u.visualElement,n),d,c,u.visualElement)]})}n&&function(e){for(const t in e)IE[t]={...IE[t],...e[t]}}(n),s.displayName=`motion.${"string"===typeof a?a:`create(${a.displayName??a.name??""})`}`;const l=(0,e.forwardRef)(s);return l[$E]=a,l}function BE(t){let{layoutId:n}=t;const r=(0,e.useContext)(Wj).id;return r&&void 0!==n?r+"-"+n:n}function HE(e,t){let{layout:n,layoutId:r}=t;return ix.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!Kj[e]||"opacity"===e)}const WE=(e,t)=>t&&"number"===typeof e?t.transform(e):e,VE={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},UE=ox.length;function YE(e,t,n){const{style:r,vars:o,transformOrigin:i}=e;let a=!1,s=!1;for(const l in t){const e=t[l];if(ix.has(l))a=!0;else if(hk(l))o[l]=e;else{const t=WE(e,Fw[l]);l.startsWith("origin")?(s=!0,i[l]=t):r[l]=t}}if(t.transform||(a||n?r.transform=function(e,t,n){let r="",o=!0;for(let i=0;i<UE;i++){const a=ox[i],s=e[a];if(void 0===s)continue;let l=!0;if(l="number"===typeof s?s===(a.startsWith("scale")?1:0):0===parseFloat(s),!l||n){const e=WE(s,Fw[a]);l||(o=!1,r+=`${VE[a]||a}(${e}) `),n&&(t[a]=e)}}return r=r.trim(),n?r=n(t,o?"":r):o&&(r="none"),r}(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:e="50%",originY:t="50%",originZ:n=0}=i;r.transformOrigin=`${e} ${t} ${n}`}}const GE=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function qE(e,t,n){for(const r in t)xx(t[r])||HE(r,n)||(e[r]=t[r])}function KE(t,n){const r={};return qE(r,t.style||{},t),Object.assign(r,function(t,n){let{transformTemplate:r}=t;return(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return YE(e,n,r),Object.assign({},e.vars,e.style)}),[n])}(t,n)),r}function XE(e,t){const n={},r=KE(e,t);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const QE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ZE(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||QE.has(e)}let JE=e=>!ZE(e);try{(eT=require("@emotion/is-prop-valid").default)&&(JE=e=>e.startsWith("on")?!ZE(e):eT(e))}catch{}var eT;const tT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function nT(e){return"string"===typeof e&&!e.includes("-")&&!!(tT.indexOf(e)>-1||/[A-Z]/u.test(e))}const rT={offset:"stroke-dashoffset",array:"stroke-dasharray"},oT={offset:"strokeDashoffset",array:"strokeDasharray"};function iT(e,t,n){return"string"===typeof e?e:yw.transform(t+n*e)}function aT(e,t,n,r){let{attrX:o,attrY:i,attrScale:a,originX:s,originY:l,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...f}=t;if(YE(e,f,r),n)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:h,style:p,dimensions:m}=e;h.transform&&(m&&(p.transform=h.transform),delete h.transform),m&&(void 0!==s||void 0!==l||p.transform)&&(p.transformOrigin=function(e,t,n){return`${iT(t,e.x,e.width)} ${iT(n,e.y,e.height)}`}(m,void 0!==s?s:.5,void 0!==l?l:.5)),void 0!==o&&(h.x=o),void 0!==i&&(h.y=i),void 0!==a&&(h.scale=a),void 0!==c&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const i=o?rT:oT;e[i.offset]=yw.transform(-r);const a=yw.transform(t),s=yw.transform(n);e[i.array]=`${a} ${s}`}(h,c,u,d,!1)}const sT=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),lT=e=>"string"===typeof e&&"svg"===e.toLowerCase();function cT(t,n,r,o){const i=(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return aT(e,n,lT(o),t.transformTemplate),{...e.attrs,style:{...e.style}}}),[n]);if(t.style){const e={};qE(e,t.style,t),i.style={...e,...i.style}}return i}function uT(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(n,r,o,i,a)=>{let{latestValues:s}=i;const l=(nT(n)?cT:XE)(r,s,a,n),c=function(e,t,n){const r={};for(const o in e)"values"===o&&"object"===typeof e.values||(JE(o)||!0===n&&ZE(o)||!t&&!ZE(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}(r,"string"===typeof n,t),u=n!==e.Fragment?{...c,...l,ref:o}:{},{children:d}=r,f=(0,e.useMemo)((()=>xx(d)?d.get():d),[d]);return(0,e.createElement)(n,{...u,children:f})}}const dT=t=>(n,r)=>{const o=(0,e.useContext)(TE),i=(0,e.useContext)(Hj),a=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:o,createRenderState:i,onUpdate:a}=e;const s={latestValues:fT(t,n,r,o),renderState:i()};return a&&(s.onMount=e=>a({props:t,current:e,...s}),s.onUpdate=e=>a(e)),s}(t,n,o,i);return r?a():function(t){const n=(0,e.useRef)(null);return null===n.current&&(n.current=t()),n.current}(a)};function fT(e,t,n,r){const o={},i=r(e,{});for(const f in i)o[f]=nC(i[f]);let{initial:a,animate:s}=e;const l=AE(e),c=PE(e);t&&c&&!l&&!1!==e.inherit&&(void 0===a&&(a=t.initial),void 0===s&&(s=t.animate));let u=!!n&&!1===n.initial;u=u||!1===a;const d=u?s:a;if(d&&"boolean"!==typeof d&&!Vb(d)){const t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){const r=Yb(e,t[n]);if(r){const{transitionEnd:e,transition:t,...n}=r;for(const r in n){let e=n[r];if(Array.isArray(e)){e=e[u?e.length-1:0]}null!==e&&(o[r]=e)}for(const r in e)o[r]=e[r]}}}return o}function hT(e,t,n){const{style:r}=e,o={};for(const i in r)(xx(r[i])||t.style&&xx(t.style[i])||HE(i,e)||void 0!==n?.getValue(i)?.liveStyle)&&(o[i]=r[i]);return o}const pT={useVisualState:dT({scrapeMotionValuesFromProps:hT,createRenderState:GE})};function mT(e,t){try{t.dimensions="function"===typeof e.getBBox?e.getBBox():e.getBoundingClientRect()}catch(RA){t.dimensions={x:0,y:0,width:0,height:0}}}function gT(e,t,n,r){let{style:o,vars:i}=t;Object.assign(e.style,o,r&&r.getProjectionStyles(n));for(const a in i)e.style.setProperty(a,i[a])}const vT=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function yT(e,t,n,r){gT(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(vT.has(o)?o:kx(o),t.attrs[o])}function bT(e,t,n){const r=hT(e,t,n);for(const o in e)if(xx(e[o])||xx(t[o])){r[-1!==ox.indexOf(o)?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o]=e[o]}return r}const xT=["x","y","width","height","cx","cy","r"],wT={useVisualState:dT({scrapeMotionValuesFromProps:bT,createRenderState:sT,onUpdate:e=>{let{props:t,prevProps:n,current:r,renderState:o,latestValues:i}=e;if(!r)return;let a=!!t.drag;if(!a)for(const l in i)if(ix.has(l)){a=!0;break}if(!a)return;let s=!n;if(n)for(let l=0;l<xT.length;l++){const e=xT[l];t[e]!==n[e]&&(s=!0)}s&&ex.read((()=>{mT(r,o),ex.render((()=>{aT(o,i,lT(r.tagName),t.transformTemplate),yT(r,o)}))}))}})};function kT(e,t){return function(n){let{forwardMotionProps:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{forwardMotionProps:!1};return FE({...nT(n)?wT:pT,preloadedFeatures:e,useRender:uT(r),createVisualElement:t,Component:n})}}const ST={current:null},jT={current:!1};const CT=[...xk,Sw,Mw],ET=new WeakMap;const TT=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class AT{scrapeMotionValuesFromProps(e,t,n){return{}}constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:i,visualState:a}=e,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=uk,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const e=hx.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,ex.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=a;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=s,this.blockInitialAnimation=Boolean(i),this.isControllingVariants=AE(n),this.isVariantNode=PE(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in f){const e=f[h];void 0!==l[h]&&xx(e)&&e.set(l[h],!1)}}mount(e){this.current=e,ET.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),jT.current||function(){if(jT.current=!0,ME)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>ST.current=e.matches;e.addListener(t),t()}else ST.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||ST.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),tx(this.notifyUpdate),tx(this.render),this.valueSubscriptions.forEach((e=>e())),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const n=ix.has(e);n&&this.onBindTransform&&this.onBindTransform();const r=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&ex.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)})),o=t.on("renderRequest",this.scheduleRender);let i;window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,(()=>{r(),o(),i&&i(),t.owner&&t.stop()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in IE){const t=IE[e];if(!t)continue;const{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<TT.length;n++){const t=TT[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){for(const r in t){const o=t[r],i=n[r];if(xx(o))e.addValue(r,o);else if(xx(i))e.addValue(r,gx(o,{owner:e}));else if(i!==o)if(e.hasValue(r)){const t=e.getValue(r);!0===t.liveStyle?t.jump(o):t.hasAnimated||t.set(o)}else{const t=e.getStaticValue(r);e.addValue(r,gx(void 0!==t?t:o,{owner:e}))}}for(const r in n)void 0===t[r]&&e.removeValue(r);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=gx(null===t?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=void 0===this.latestValues[e]&&this.current?this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return void 0!==n&&null!==n&&("string"===typeof n&&(dk(n)||nw(n))?n=parseFloat(n):!(e=>CT.find(bk(e)))(n)&&Mw.test(t)&&(n=Ww(e,t)),this.setBaseTarget(e,xx(n)?n.get():n)),xx(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let n;if("string"===typeof t||"object"===typeof t){const r=Yb(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&void 0!==n)return n;const r=this.getBaseTargetFromProps(this.props,e);return void 0===r||xx(r)?void 0!==this.initialValues[e]&&void 0===n?void 0:this.baseTarget[e]:r}on(e,t){return this.events[e]||(this.events[e]=new cx),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}}class PT extends AT{constructor(){super(...arguments),this.KeyframeResolver=kk}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;xx(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}}class zT extends PT{constructor(){super(...arguments),this.type="html",this.renderInstance=gT}readValueFromInstance(e,t){if(ix.has(t))return((e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Jw(n,t)})(e,t);{const r=(n=e,window.getComputedStyle(n)),o=(hk(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof o?o.trim():o}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return xj(e,n)}build(e,t,n){YE(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return hT(e,t,n)}}class OT extends PT{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=oj,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&mT(this.current,this.renderState)}}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(ix.has(t)){const e=Hw(t);return e&&e.default||0}return t=vT.has(t)?t:kx(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return bT(e,t,n)}onBindTransform(){this.current&&!this.renderState.dimensions&&ex.postRender(this.updateDimensions)}build(e,t,n){aT(e,t,this.isSVGTag,n.transformTemplate)}renderInstance(e,t,n,r){yT(e,t,0,r)}mount(e){this.isSVGTag=lT(e.tagName),super.mount(e)}}const MT=Wb(kT({...VS,...SE,...iE,...jE},((t,n)=>nT(t)?new OT(n):new zT(n,{allowProjection:t!==e.Fragment})))),RT={light:"#4A6FFF",main:"#3B5AFB",dark:"#2A4AE8",contrast:"#FFFFFF"},IT={light:"#FF6B6B",main:"#FF5252",dark:"#E63946",contrast:"#FFFFFF"},$T={50:"#F9FAFB",100:"#F3F4F6",200:"#E5E7EB",300:"#D1D5DB",400:"#9CA3AF",500:"#6B7280",600:"#4B5563",700:"#374151",800:"#1F2937",900:"#111827"},LT="0 1px 2px 0 rgba(0, 0, 0, 0.05)",NT="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",_T="0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",DT="0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",FT="all 0.3s ease",BT="all 0.15s ease",HT="0.25rem",WT="0.5rem",VT="1rem",UT="9999px",YT=Do`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
`,GT=Ho.div`
  position: relative;
  min-height: 100vh;
  background-color: #f8fafc;
  
  @media (prefers-color-scheme: dark) {
    background-color: #0f172a;
  }
`,qT=Ho.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(74, 111, 255, 0.05) 0%, rgba(255, 82, 82, 0.05) 100%);
`,KT=Ho(MT.div)`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  background: ${e=>"primary"===e.variant?"linear-gradient(135deg, rgba(74, 111, 255, 0.1) 0%, rgba(74, 111, 255, 0.05) 100%)":"linear-gradient(135deg, rgba(255, 82, 82, 0.1) 0%, rgba(255, 82, 82, 0.05) 100%)"};
  border-radius: ${e=>e.circle?"50%":"30% 70% 70% 30% / 30% 30% 70% 70%"};
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  z-index: 0;
  filter: blur(40px);
`,XT=Ho(MT.div)`
  position: absolute;
  width: ${e=>e.size||"10px"};
  height: ${e=>e.size||"10px"};
  background: ${e=>"primary"===e.variant?RT.main:IT.main};
  border-radius: 50%;
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  z-index: 0;
  opacity: 0.2;
`,QT=Ho.div`
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  border-radius: ${VT};
  box-shadow: ${DT};
  margin-top: 150px;
  margin-bottom: 40px;
  overflow: hidden;
  text-align: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(90deg, ${RT.main}, ${IT.main});
  }
`,ZT=Ho.div`
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, ${RT.main}, ${IT.main});
    border-radius: ${UT};
  }
`,JT=Ho.span`
  display: inline-block;
  background: linear-gradient(135deg, ${RT.main} 0%, ${RT.dark} 100%);
  color: ${RT.contrast};
  padding: 8px 16px;
  border-radius: ${UT};
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 20px;
  box-shadow: ${NT};
  letter-spacing: 0.5px;
  text-transform: uppercase;
`,eA=Ho.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${$T[900]};
  margin-bottom: 20px;
  line-height: 1.2;
  letter-spacing: -0.025em;
  background: linear-gradient(135deg, ${$T[900]} 0%, ${$T[700]} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,tA=Ho.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: ${$T[500]};
  font-size: 0.875rem;
  
  span {
    display: flex;
    align-items: center;
    gap: 5px;
    
    svg {
      width: 16px;
      height: 16px;
      color: ${$T[400]};
    }
  }
`,nA=Ho.div`
  ${YT}
  font-size: 1.0625rem;
  line-height: 1.7;
  color: ${$T[700]};
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  h2, h3, h4 {
    color: ${$T[900]};
    margin-top: 2.5rem;
    margin-bottom: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.025em;
  }
  
  a {
    color: ${RT.main};
    text-decoration: none;
    border-bottom: 1px solid ${RT.light};
    transition: ${FT};
    
    &:hover {
      color: ${RT.dark};
      border-bottom-color: ${RT.dark};
    }
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.75rem;
    }
  }
  
  code {
    background: ${$T[100]};
    padding: 0.2rem 0.4rem;
    border-radius: ${HT};
    font-family: 'Fira Code', monospace;
    font-size: 0.875em;
  }
  
  pre {
    background: ${$T[800]};
    color: ${$T[100]};
    padding: 1rem;
    border-radius: ${WT};
    overflow-x: auto;
    margin-bottom: 1.5rem;
    
    code {
      background: transparent;
      padding: 0;
      color: inherit;
    }
  }
  
  blockquote {
    border-left: 4px solid ${RT.main};
    padding: 1rem 0 1rem 1.5rem;
    margin: 1.5rem 0;
    background: ${$T[50]};
    border-radius: 0 ${WT} ${WT} 0;
    
    p {
      margin-bottom: 0;
      font-style: italic;
    }
  }
`,rA=Ho.section`
  margin-bottom: 3rem;
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
`,oA=Ho.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${$T[900]};
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
  letter-spacing: -0.025em;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, ${RT.main}, ${IT.main});
    border-radius: ${HT};
  }
`,iA=Ho.div`
  background: ${$T[50]};
  border-radius: ${WT};
  padding: 1.5rem;
  margin: 2rem 0;
  border-left: 4px solid ${RT.main};
  box-shadow: ${NT};
  
  h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: ${$T[900]};
    font-size: 1.25rem;
    font-weight: 600;
  }
`,aA=Ho.a`
  display: block;
  color: ${$T[700]};
  text-decoration: none;
  margin-bottom: 0.75rem;
  transition: ${FT};
  font-size: 0.9375rem;
  padding: 0.5rem 0.75rem;
  border-radius: ${HT};
  
  &:hover {
    color: ${RT.main};
    transform: translateX(5px);
    background: ${$T[100]};
  }
  
  &.active {
    color: ${RT.main};
    font-weight: 600;
    background: ${$T[100]};
  }
`,sA=Ho.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`,lA=Ho.li`
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  
  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    top: 0;
    color: ${RT.main};
    font-weight: bold;
  }
`,cA=Ho.section`
  background: linear-gradient(135deg, ${$T[50]} 0%, ${$T[100]} 100%);
  border-radius: ${VT};
  padding: 2rem;
  margin: 2.5rem 0;
  box-shadow: ${_T};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(90deg, ${RT.main}, ${IT.main});
  }
`,uA=Ho.div`
  background: white;
  border-radius: ${WT};
  padding: 1.5rem;
  box-shadow: ${NT};
  margin-bottom: 1.5rem;
  transition: ${FT};
  border: 1px solid ${$T[200]};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${_T};
    border-color: ${RT.light};
  }
`,dA=Ho.h3`
  color: ${$T[900]};
  font-size: 1.25rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${RT.main};
  }
`,fA=Ho.p`
  color: ${$T[600]};
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
`,hA=Ho.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
`,pA=Ho.div`
  flex: 1;
  min-width: 160px;
  background: white;
  border-radius: ${WT};
  padding: 1.25rem;
  box-shadow: ${NT};
  text-align: center;
  border: 1px solid ${$T[200]};
  transition: ${FT};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${_T};
    border-color: ${RT.light};
  }
`,mA=Ho.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${RT.main};
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, ${RT.main} 0%, ${IT.main} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,gA=Ho.div`
  color: ${$T[600]};
  font-size: 0.875rem;
  font-weight: 500;
`,vA=Ho.div`
  margin: 2rem auto;
  border-radius: ${WT};
  overflow: hidden;
  box-shadow: ${_T};
  max-width: 60%;
  height: auto;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, rgba(0,0,0,0.3), transparent);
    pointer-events: none;
  }
  
  img {
    width: 100%;
    height: auto;
    max-height: 300px;
    object-fit: cover;
    display: block;
    transition: ${FT};
  }
  
  &:hover img {
    transform: scale(1.02);
  }
`,yA=Ho.a`
  display: inline-block;
  background: #3b82f6;
  color: white;
  padding: 0.875rem 2rem;
  border-radius: ${UT};
  font-weight: 700;
  text-decoration: none;
  transition: ${FT};
  margin-top: 1.25rem;
  font-size: 1rem;
  box-shadow: ${_T};
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  z-index: 10;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transform: translateX(-100%);
    transition: ${FT};
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(37, 99, 235, 0.4);
    color: white;
    
    &::before {
      transform: translateX(100%);
      transition: ${BT};
    }
  }
  
  &:active {
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(37, 99, 235, 0.2);
  }
`,bA=Ho.blockquote`
  font-size: 1.25rem;
  font-style: italic;
  color: ${$T[800]};
  border-left: 4px solid ${RT.main};
  padding: 1.5rem 0 1.5rem 2rem;
  margin: 2rem 0;
  background: ${$T[50]};
  border-radius: 0 ${WT} ${WT} 0;
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    font-size: 4rem;
    color: ${RT.light};
    opacity: 0.2;
    font-family: Georgia, serif;
  }
  
  p {
    margin-bottom: 0;
  }
  
  cite {
    display: block;
    margin-top: 1rem;
    font-size: 0.875rem;
    color: ${$T[600]};
    font-style: normal;
    font-weight: 500;
  }
`,xA=Ho.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 2.5rem 0;
  padding: 1.5rem;
  background: ${$T[50]};
  border-radius: ${WT};
  box-shadow: ${NT};
  
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid white;
    box-shadow: ${NT};
  }
  
  h4 {
    margin: 0 0 0.5rem 0;
    color: ${$T[900]};
    font-size: 1.125rem;
    font-weight: 600;
  }
  
  p {
    margin: 0;
    color: ${$T[600]};
    font-size: 0.9375rem;
  }
`,wA=Ho.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background: ${$T[50]};
  border-radius: ${WT};
  box-shadow: ${NT};
  
  h4 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: ${$T[900]};
    font-size: 1.125rem;
    font-weight: 600;
  }
  
  .social-share {
    display: flex;
    gap: 0.75rem;
    
    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 1rem;
      background: white;
      border-radius: ${UT};
      color: ${$T[700]};
      text-decoration: none;
      font-weight: 500;
      transition: ${FT};
      box-shadow: ${LT};
      font-size: 0.875rem;
      
      svg {
        margin-right: 0.5rem;
        width: 16px;
        height: 16px;
      }
      
      &:hover {
        background: ${RT.main};
        color: white;
        transform: translateY(-2px);
        box-shadow: ${NT};
      }
    }
  }
`,kA=Ho.section`
  margin: 4rem auto;
  max-width: 1000px;
  
  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: #1e293b;
    text-align: center;
    
    @media (prefers-color-scheme: dark) {
      color: #f8fafc;
    }
  }
`,SA=Ho.a`
  display: block;
  text-decoration: none;
  color: inherit;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 41, 59, 0.9);
  }
`,jA=Ho.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  ${SA}:hover & img {
    transform: scale(1.05);
  }
`,CA=Ho.div`
  padding: 1.5rem;
`,EA=Ho.h4`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1e293b;
  
  @media (prefers-color-scheme: dark) {
    color: #f8fafc;
  }
`,TA=Ho.div`
  display: flex;
  gap: 1rem;
  color: #64748b;
  font-size: 0.9rem;
  
  @media (prefers-color-scheme: dark) {
    color: #94a3b8;
  }
`,AA=Ho.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
  justify-content: center;
  
  span {
    background: #f1f5f9;
    color: #475569;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 500;
    
    @media (prefers-color-scheme: dark) {
      background: #1e293b;
      color: #cbd5e1;
    }
  }
`,PA=Ho.div`
  background: linear-gradient(135deg, #1e293b, #0f172a);
  padding: 3rem 2rem;
  border-radius: 16px;
  margin: 3rem auto;
  text-align: center;
  color: white;
  max-width: 800px;

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: white;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #e2e8f0;
  }

  ${yA} {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    font-size: 1.1rem;
    padding: 1.2rem 2.5rem;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(37, 99, 235, 0.4);
    }
  }
`,zA=()=>(0,im.jsxs)(im.Fragment,{children:[(0,im.jsxs)(en,{children:[(0,im.jsx)("title",{children:"Creator Economy Monetization: New Revenue Streams in 2025 | Admirian Blog"}),(0,im.jsx)("meta",{name:"description",content:"Explore the latest monetization strategies in the creator economy for 2025. Learn about emerging revenue streams, platform innovations, and how creators are maximizing their earning potential."}),(0,im.jsx)("meta",{name:"keywords",content:"creator economy 2025, influencer monetization, revenue streams, creator platforms, digital content monetization, social media earnings, creator business models"}),(0,im.jsx)("meta",{property:"og:type",content:"article"}),(0,im.jsx)("meta",{property:"og:url",content:"https://blogs.admirian.com/blogs/creator-economy-monetization-2025"}),(0,im.jsx)("meta",{property:"og:title",content:"Creator Economy Monetization: New Revenue Streams in 2025"}),(0,im.jsx)("meta",{property:"og:description",content:"Explore the latest monetization strategies in the creator economy for 2025. Learn about emerging revenue streams and platform innovations."}),(0,im.jsx)("meta",{property:"og:image",content:"https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60"}),(0,im.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,im.jsx)("meta",{name:"twitter:url",content:"https://blogs.admirian.com/blogs/creator-economy-monetization-2025"}),(0,im.jsx)("meta",{name:"twitter:title",content:"Creator Economy Monetization: New Revenue Streams in 2025"}),(0,im.jsx)("meta",{name:"twitter:description",content:"Explore the latest monetization strategies in the creator economy for 2025. Learn about emerging revenue streams and platform innovations."}),(0,im.jsx)("meta",{name:"twitter:image",content:"https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60"}),(0,im.jsx)("link",{rel:"canonical",href:"https://blogs.admirian.com/blogs/creator-economy-monetization-2025"}),(0,im.jsx)("script",{type:"application/ld+json",children:'\n            {\n              "@context": "https://schema.org",\n              "@type": "BlogPosting",\n              "headline": "Creator Economy Monetization: New Revenue Streams in 2025",\n              "description": "Explore the latest monetization strategies in the creator economy for 2025. Learn about emerging revenue streams and platform innovations.",\n              "image": "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60",\n              "author": {\n                "@type": "Organization",\n                "name": "Admirian",\n                "url": "https://admirian.com"\n              },\n              "publisher": {\n                "@type": "Organization",\n                "name": "Admirian",\n                "logo": {\n                  "@type": "ImageObject",\n                  "url": "https://static.admirian.com/9a312601-984e-4237-bfad-1454204ce38f_BrandLogo.svg"\n                }\n              },\n              "datePublished": "2024-03-21",\n              "dateModified": "2024-03-21",\n              "mainEntityOfPage": {\n                "@type": "WebPage",\n                "@id": "https://blogs.admirian.com/blogs/creator-economy-monetization-2025"\n              }\n            }\n          '})]}),(0,im.jsxs)(GT,{children:[(0,im.jsxs)(qT,{children:[(0,im.jsx)(KT,{size:200,top:10,left:5,delay:0}),(0,im.jsx)(KT,{size:200,top:60,left:80,delay:1}),(0,im.jsx)(KT,{size:150,top:30,left:40,delay:2}),(0,im.jsx)(KT,{size:250,top:70,left:20,delay:3}),(0,im.jsx)(XT,{top:20,left:30,delay:0}),(0,im.jsx)(XT,{top:40,left:70,delay:1}),(0,im.jsx)(XT,{top:60,left:50,delay:2}),(0,im.jsx)(XT,{top:80,left:20,delay:3})]}),(0,im.jsx)(am,{isMobile:Fm}),(0,im.jsx)(Gm,{}),(0,im.jsxs)(QT,{children:[(0,im.jsxs)(ZT,{children:[(0,im.jsx)(JT,{children:"Creator Economy"}),(0,im.jsx)(eA,{children:"Creator Economy Monetization: New Revenue Streams in 2025"}),(0,im.jsxs)(tA,{children:[(0,im.jsx)("span",{children:"March 21, 2025"}),(0,im.jsx)("span",{children:"\u2022"}),(0,im.jsx)("span",{children:"12 min read"})]})]}),(0,im.jsx)(vA,{children:(0,im.jsx)("img",{src:"https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80",alt:"Creator Economy Monetization",width:"400",height:"300",loading:"lazy"})}),(0,im.jsxs)(nA,{children:[(0,im.jsxs)(rA,{id:"intro",children:[(0,im.jsx)("p",{children:"The creator economy has evolved dramatically in 2025, with new platforms, technologies, and business models emerging to help creators monetize their content more effectively. From subscription-based content to AI-powered revenue optimization, creators now have more opportunities than ever to generate sustainable income."}),(0,im.jsx)("p",{children:"This comprehensive guide explores the latest monetization strategies, platform innovations, and best practices that are helping creators maximize their earning potential in the digital age."})]}),(0,im.jsxs)(iA,{children:[(0,im.jsx)("h3",{children:"Table of Contents"}),(0,im.jsx)(aA,{href:"#evolution",children:"The Evolution of Creator Economy Monetization"}),(0,im.jsx)(aA,{href:"#revenue-streams",children:"Key Revenue Streams in 2025"}),(0,im.jsx)(aA,{href:"#platform-innovations",children:"Platform Innovations"}),(0,im.jsx)(aA,{href:"#emerging-trends",children:"Emerging Monetization Trends"}),(0,im.jsx)(aA,{href:"#monetization-strategies",children:"Effective Monetization Strategies"}),(0,im.jsx)(aA,{href:"#future-outlook",children:"Future Outlook"}),(0,im.jsx)(aA,{href:"#implementation",children:"How to Implement a Multi-Stream Strategy"})]}),(0,im.jsxs)(cA,{id:"evolution",children:[(0,im.jsx)(oA,{children:"The Evolution of Creator Economy Monetization"}),(0,im.jsx)("p",{children:"The creator economy has transformed from a niche market into a multi-billion dollar industry, with creators finding increasingly innovative ways to monetize their content and audience. Here's how the landscape has evolved:"}),(0,im.jsxs)(uA,{children:[(0,im.jsx)(dA,{children:"From Ad Revenue to Diversified Income"}),(0,im.jsx)(fA,{children:"Creators have moved beyond relying solely on platform ad revenue to building diversified income streams. This shift has provided more stability and higher earning potential, especially as platform policies and algorithms continue to change."})]}),(0,im.jsxs)(uA,{children:[(0,im.jsx)(dA,{children:"Direct-to-Consumer Relationships"}),(0,im.jsx)(fA,{children:"The rise of subscription platforms and membership models has enabled creators to build direct relationships with their audience, reducing reliance on third-party platforms and increasing revenue per follower."})]}),(0,im.jsxs)(uA,{children:[(0,im.jsx)(dA,{children:"Technology-Enabled Monetization"}),(0,im.jsx)(fA,{children:"Advances in technology, from AI-powered analytics to blockchain-based ownership models, have created new opportunities for creators to monetize their content and intellectual property in previously impossible ways."})]}),(0,im.jsxs)(uA,{children:[(0,im.jsx)(dA,{children:"Professionalization of Creator Businesses"}),(0,im.jsx)(fA,{children:"As the industry matures, creators are increasingly treating their content as businesses, implementing professional practices around content strategy, audience growth, and revenue optimization."})]})]}),(0,im.jsxs)(rA,{id:"revenue-streams",children:[(0,im.jsx)(oA,{children:"Key Revenue Streams in 2025"}),(0,im.jsx)("p",{children:"Successful creators in 2025 typically have at least 5-7 different revenue streams, with the most effective combination depending on their niche, audience, and content type. Here are the most lucrative revenue streams for creators today:"}),(0,im.jsx)(vA,{children:(0,im.jsx)("img",{src:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80",alt:"Creator Revenue Streams",width:"400",height:"300",loading:"lazy"})}),(0,im.jsx)("p",{children:"The most effective revenue streams for creators in 2025 include:"}),(0,im.jsxs)(sA,{children:[(0,im.jsx)(lA,{children:"Subscription and membership programs"}),(0,im.jsx)(lA,{children:"Digital products and online courses"}),(0,im.jsx)(lA,{children:"Brand collaborations and sponsored content"}),(0,im.jsx)(lA,{children:"Affiliate marketing and commission-based sales"}),(0,im.jsx)(lA,{children:"Virtual events and experiences"}),(0,im.jsx)(lA,{children:"Content licensing and syndication"}),(0,im.jsx)(lA,{children:"Merchandise and physical products"}),(0,im.jsx)(lA,{children:"Community features and exclusive access"})]}),(0,im.jsx)(bA,{children:'"The most successful creators don\'t just have multiple revenue streams\u2014they have revenue streams that complement each other and create a cohesive ecosystem where each stream supports and enhances the others."'}),(0,im.jsx)("p",{children:"For example, a fitness creator might offer subscription-based workout programs, sell branded merchandise, partner with fitness brands for sponsored content, and host virtual fitness events\u2014all while using each platform to promote the others."})]}),(0,im.jsxs)(rA,{id:"platform-innovations",children:[(0,im.jsx)(oA,{children:"Platform Innovations"}),(0,im.jsx)("p",{children:"Social media platforms and creator tools are introducing new features to help creators monetize their content more effectively. From improved analytics to automated brand matching, these innovations are making it easier for creators to maximize their earning potential."}),(0,im.jsx)(vA,{children:(0,im.jsx)("img",{src:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",alt:"Platform Innovations",width:"400",height:"300",loading:"lazy"})}),(0,im.jsx)("p",{children:"Key platform innovations include:"}),(0,im.jsxs)(sA,{children:[(0,im.jsx)(lA,{children:"Enhanced creator funds with higher payouts"}),(0,im.jsx)(lA,{children:"Improved analytics and audience insights"}),(0,im.jsx)(lA,{children:"Automated brand collaboration marketplaces"}),(0,im.jsx)(lA,{children:"Built-in e-commerce and shopping features"}),(0,im.jsx)(lA,{children:"Subscription and tipping capabilities"}),(0,im.jsx)(lA,{children:"Content licensing and rights management tools"}),(0,im.jsx)(lA,{children:"Cross-platform content syndication"}),(0,im.jsx)(lA,{children:"AI-powered content optimization"})]}),(0,im.jsx)("p",{children:"Platforms are increasingly competing for creator talent by offering better monetization tools and higher revenue shares. For instance, YouTube now offers creators up to 90% of subscription revenue, while Instagram has introduced new shopping features that allow creators to earn commission on product sales."}),(0,im.jsxs)(hA,{children:[(0,im.jsxs)(pA,{children:[(0,im.jsx)(mA,{children:"78%"}),(0,im.jsx)(gA,{children:"of creators use 3+ platforms for monetization"})]}),(0,im.jsxs)(pA,{children:[(0,im.jsx)(mA,{children:"2.5x"}),(0,im.jsx)(gA,{children:"Higher earnings with multi-platform strategy"})]}),(0,im.jsxs)(pA,{children:[(0,im.jsx)(mA,{children:"45%"}),(0,im.jsx)(gA,{children:"Increase in platform revenue share for creators"})]})]})]}),(0,im.jsxs)(rA,{id:"emerging-trends",children:[(0,im.jsx)(oA,{children:"Emerging Monetization Trends"}),(0,im.jsx)("p",{children:"As the creator economy continues to evolve, new monetization trends are emerging that are reshaping how creators earn income. These trends reflect changing consumer preferences, technological advances, and market dynamics."}),(0,im.jsxs)(uA,{children:[(0,im.jsx)(dA,{children:"AI-Powered Revenue Optimization"}),(0,im.jsx)(fA,{children:"AI tools are helping creators optimize pricing, timing, and content strategy to maximize revenue. These tools analyze audience behavior and market trends to provide actionable insights for revenue growth."})]}),(0,im.jsxs)(uA,{children:[(0,im.jsx)(dA,{children:"Community-Driven Content Funding"}),(0,im.jsx)(fA,{children:"Platforms are introducing features that allow communities to collectively fund content creation, giving creators more control and reducing reliance on traditional monetization methods."})]}),(0,im.jsxs)(uA,{children:[(0,im.jsx)(dA,{children:"Virtual and Augmented Reality Experiences"}),(0,im.jsx)(fA,{children:"As VR and AR technologies become more accessible, creators are monetizing immersive experiences, virtual events, and digital collectibles in virtual worlds."})]}),(0,im.jsx)(bA,{children:'"The future of creator monetization lies in creating value through unique experiences and community building, rather than just content consumption. Creators who can offer their audience meaningful connections and exclusive benefits will be the most successful."'})]}),(0,im.jsxs)(rA,{id:"monetization-strategies",children:[(0,im.jsx)(oA,{children:"Effective Monetization Strategies"}),(0,im.jsx)("p",{children:"While having multiple revenue streams is important, the most successful creators implement strategic approaches to monetization that align with their brand, audience, and content. Here are proven strategies for maximizing creator income:"}),(0,im.jsxs)(sA,{children:[(0,im.jsx)(lA,{children:"Audience segmentation for targeted offerings"}),(0,im.jsx)(lA,{children:"Content calendar optimization for revenue generation"}),(0,im.jsx)(lA,{children:"Cross-promotion between revenue streams"}),(0,im.jsx)(lA,{children:"Data-driven pricing strategies"}),(0,im.jsx)(lA,{children:"Community building as a foundation for monetization"}),(0,im.jsx)(lA,{children:"Brand alignment and authenticity in partnerships"}),(0,im.jsx)(lA,{children:"Continuous testing and optimization of monetization methods"}),(0,im.jsx)(lA,{children:"Long-term relationship building with audience and brands"})]}),(0,im.jsx)("p",{children:"The most effective monetization strategies focus on creating value for the audience first, with revenue as a byproduct of that value. For example, a cooking creator might offer free recipes on social media to build audience trust, then monetize through premium cooking classes, branded kitchen products, and partnerships with food brands."})]}),(0,im.jsxs)(rA,{id:"future-outlook",children:[(0,im.jsx)(oA,{children:"Future Outlook"}),(0,im.jsx)("p",{children:"The creator economy is expected to continue its rapid growth, with new technologies and business models creating even more opportunities for monetization. Here are some predictions for the future of creator economy monetization:"}),(0,im.jsxs)(uA,{children:[(0,im.jsx)(dA,{children:"Decentralized Creator Platforms"}),(0,im.jsx)(fA,{children:"Blockchain technology will enable more decentralized creator platforms where creators have greater control over their content, audience relationships, and revenue."})]}),(0,im.jsxs)(uA,{children:[(0,im.jsx)(dA,{children:"Immersive Content Experiences"}),(0,im.jsx)(fA,{children:"As virtual and augmented reality technologies advance, creators will monetize immersive experiences that go beyond traditional content consumption."})]}),(0,im.jsxs)(uA,{children:[(0,im.jsx)(dA,{children:"AI-Generated Content and Co-Creation"}),(0,im.jsx)(fA,{children:"AI tools will enable creators to produce more content and collaborate with their audience in new ways, creating additional monetization opportunities."})]}),(0,im.jsx)("p",{children:"The future of creator monetization will likely involve more personalized, interactive, and value-driven approaches that focus on building sustainable businesses rather than quick revenue gains."})]}),(0,im.jsxs)(rA,{id:"implementation",children:[(0,im.jsx)(oA,{children:"How to Implement a Multi-Stream Strategy"}),(0,im.jsx)("p",{children:"Ready to diversify your creator revenue streams? Here's a step-by-step guide to implementing an effective multi-stream monetization strategy:"}),(0,im.jsxs)(sA,{children:[(0,im.jsx)(lA,{children:"Audit your current content and audience to identify monetization opportunities"}),(0,im.jsx)(lA,{children:"Research platforms and tools that align with your content and audience"}),(0,im.jsx)(lA,{children:"Start with 2-3 complementary revenue streams and master them before expanding"}),(0,im.jsx)(lA,{children:"Create a content calendar that supports your monetization goals"}),(0,im.jsx)(lA,{children:"Develop a cross-promotion strategy to drive audience between revenue streams"}),(0,im.jsx)(lA,{children:"Track performance metrics for each revenue stream and optimize accordingly"}),(0,im.jsx)(lA,{children:"Build systems and processes to scale your monetization efforts"}),(0,im.jsx)(lA,{children:"Continuously test new monetization methods and adapt to audience preferences"})]}),(0,im.jsx)("p",{children:"Remember that effective monetization is a marathon, not a sprint. Focus on building sustainable revenue streams that provide value to your audience and align with your long-term creator goals."})]}),(0,im.jsxs)(PA,{children:[(0,im.jsx)("h3",{children:"Ready to Maximize Your Creator Revenue?"}),(0,im.jsx)("p",{children:"Discover how Admirian's platform can help you optimize your monetization strategy and increase your earnings."}),(0,im.jsx)(yA,{href:"https://admirian.com/demo",style:{background:"#3b82f6",color:"white",display:"inline-block",padding:"1rem 2rem",borderRadius:"50px",fontWeight:"bold",textDecoration:"none",marginTop:"1.5rem"},children:"Request a Demo"})]})]}),(0,im.jsxs)(xA,{children:[(0,im.jsx)("img",{src:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&auto=format&fit=crop&q=80",alt:"Creator Economy Expert",width:"200",height:"200",loading:"lazy"}),(0,im.jsxs)("div",{children:[(0,im.jsx)("h4",{children:"Michael Rodriguez"}),(0,im.jsx)("p",{children:"Creator Economy Strategist at Admirian"})]})]}),(0,im.jsxs)(wA,{children:[(0,im.jsx)("h4",{children:"Share this article"}),(0,im.jsxs)("div",{className:"social-share",children:[(0,im.jsx)("a",{href:"https://twitter.com/intent/tweet?url=https://blogs.admirian.com/blogs/creator-economy-monetization-2025&text=Creator Economy Monetization: New Revenue Streams in 2025",target:"_blank",rel:"noopener noreferrer",children:"Twitter"}),(0,im.jsx)("a",{href:"https://www.linkedin.com/shareArticle?mini=true&url=https://blogs.admirian.com/blogs/creator-economy-monetization-2025&title=Creator Economy Monetization: New Revenue Streams in 2025",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"}),(0,im.jsx)("a",{href:"https://www.facebook.com/sharer/sharer.php?u=https://blogs.admirian.com/blogs/creator-economy-monetization-2025",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})]})]}),(0,im.jsxs)(AA,{children:[(0,im.jsx)("span",{children:"#CreatorEconomy"}),(0,im.jsx)("span",{children:"#Monetization"}),(0,im.jsx)("span",{children:"#DigitalContent"}),(0,im.jsx)("span",{children:"#RevenueStreams"}),(0,im.jsx)("span",{children:"#CreatorBusiness"}),(0,im.jsx)("span",{children:"#DigitalEntrepreneurship"})]}),(0,im.jsxs)(kA,{children:[(0,im.jsx)("h3",{children:"Related Articles"}),(0,im.jsx)("div",{style:{display:"flex",flexDirection:"row",gap:"20px",flexWrap:"wrap",justifyContent:"space-between"},children:[{id:1,title:"AI in Influencer Marketing: The Future of Creator Economy 2025",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",date:"March 20, 2024",readTime:"10 min read",url:"/blogs/ai-influencer-marketing-2025"},{id:2,title:"How to Negotiate with Influencers: Expert Guide 2025",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",date:"March 18, 2024",readTime:"8 min read",url:"/blogs/how-to-negotiate-with-influencers"}].map((e=>(0,im.jsxs)(SA,{href:e.url,style:{flex:"1 1 calc(50% - 10px)",minWidth:"300px",marginBottom:"20px"},children:[(0,im.jsx)(jA,{style:{height:"200px",overflow:"hidden"},children:(0,im.jsx)("img",{src:e.image.replace("w=800","w=600").replace("q=60","q=90"),alt:e.title,width:"600",height:"400",loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.3s ease",":hover":{transform:"scale(1.05)"}}})}),(0,im.jsxs)(CA,{style:{padding:"15px"},children:[(0,im.jsx)(EA,{style:{fontSize:"18px",marginBottom:"8px"},children:e.title}),(0,im.jsxs)(TA,{style:{fontSize:"14px",color:"#666"},children:[(0,im.jsx)("span",{children:e.date}),(0,im.jsx)("span",{style:{margin:"0 8px"},children:"\u2022"}),(0,im.jsx)("span",{children:e.readTime})]})]})]},e.id)))})]})]}),(0,im.jsx)(um,{})]})]});const OA=function(){return(0,im.jsx)(Gt,{children:(0,im.jsx)(Xe,{children:(0,im.jsx)("div",{className:"App",children:(0,im.jsxs)(ge,{children:[(0,im.jsx)(pe,{path:"/",element:(0,im.jsx)(Wm,{})}),(0,im.jsx)(pe,{path:"/blogs/top-10-crms-2025",element:(0,im.jsx)(Ag,{})}),(0,im.jsx)(pe,{path:"/blogs/nano-influencers-2025",element:(0,im.jsx)(tv,{})}),(0,im.jsx)(pe,{path:"/blogs/micro-vs-macro-influencers",element:(0,im.jsx)(Sv,{})}),(0,im.jsx)(pe,{path:"/blogs/how-to-negotiate-with-influencers",element:(0,im.jsx)(Uv,{})}),(0,im.jsx)(pe,{path:"/blogs/agency-success-1000-influencers",element:(0,im.jsx)(hy,{})}),(0,im.jsx)(pe,{path:"/blogs/influencer-content-rights",element:(0,im.jsx)($y,{})}),(0,im.jsx)(pe,{path:"/blogs/how-to-use-crm-tools",element:(0,im.jsx)(tb,{})}),(0,im.jsx)(pe,{path:"/blogs/ai-influencer-marketing-2025",element:(0,im.jsx)(Hb,{})}),(0,im.jsx)(pe,{path:"/blogs/creator-economy-monetization-2025",element:(0,im.jsx)(zA,{})})]})})})})},MA=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:o,getLCP:i,getTTFB:a}=t;n(e),r(e),o(e),i(e),a(e)}))};r.createRoot(document.getElementById("root")).render((0,im.jsx)(e.StrictMode,{children:(0,im.jsx)(OA,{})})),MA()})()})();
//# sourceMappingURL=main.0d30adde.js.map