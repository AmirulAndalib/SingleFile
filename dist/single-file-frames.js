!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e="single-file-load-image",t="single-file-image-loaded",s=globalThis.browser,o=e=>globalThis.dispatchEvent(e),n=globalThis.CustomEvent,i=globalThis.document,a=globalThis.HTMLDocument,r=globalThis.FileReader,l=globalThis.Blob,d=[];if(i instanceof a&&s&&s.runtime&&s.runtime.getURL){c="single-file-new-font-face",m=e=>{const t=e.detail;d.find((e=>JSON.stringify(e)==JSON.stringify(t)))||d.push(e.detail)},globalThis.addEventListener(c,m,u);let e=i.createElement("script");e.textContent="("+function(){const e=globalThis.console,t=e=>globalThis.dispatchEvent(e),s=globalThis.CustomEvent,o=e&&e.warn&&((...t)=>e.warn(...t))||(()=>{}),n="single-file-new-font-face",i={family:"font-family",style:"font-style",weight:"font-weight",stretch:"font-stretch",unicodeRange:"unicode-range",variant:"font-variant",featureSettings:"font-feature-settings"};if(globalThis.FontFace){const e=globalThis.FontFace;let a;globalThis.FontFace=function(){a||(o("SingleFile is hooking the FontFace constructor to get font URLs."),a=!0);const d={};d["font-family"]=arguments[0],d.src=arguments[1];const c=arguments[2];if(c&&Object.keys(c).forEach((e=>{i[e]&&(d[i[e]]=c[e])})),d.src instanceof ArrayBuffer){const e=new r;e.readAsDataURL(new l([d.src])),e.addEventListener("load",(()=>{d.src="url("+e.result+")",t(new s(n,{detail:d}))}))}else t(new s(n,{detail:d}));return new e(...arguments)},globalThis.FontFace.toString=function(){return"function FontFace() { [native code] }"}}}.toString()+")()",(i.documentElement||i).appendChild(e),e.remove(),e=i.createElement("script"),e.src=s.runtime.getURL("/dist/web/hooks/hooks-frames-web.js"),e.async=!1,(i.documentElement||i).appendChild(e),e.remove()}var c,m,u;const g=new RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)","ig");const f="data-single-file-removed-content",h="data-single-file-hidden-content",p="data-single-file-kept-content",b="data-single-file-hidden-frame",w="data-single-file-preserved-space-element",y="data-single-file-shadow-root-element",E="data-single-file-image",T="data-single-file-poster",A="data-single-file-canvas",I="data-single-file-import",v="data-single-file-input-value",S="data-single-file-lazy-loaded-src",R="data-single-file-stylesheet",F="data-single-file-disabled-noscript",C="data-single-file-async-script",k="*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)",M=["NOSCRIPT","DISABLED-NOSCRIPT","META","LINK","STYLE","TITLE","TEMPLATE","SOURCE","OBJECT","SCRIPT","HEAD"],N=/^'(.*?)'$/,x=/^"(.*?)"$/,q={regular:"400",normal:"400",bold:"700",bolder:"700",lighter:"100"},P="single-file-ui-element";function L(e,t,s,o,n={usedFonts:new Map,canvases:[],images:[],posters:[],shadowRoots:[],imports:[],markedElements:[]},i){return Array.from(s.childNodes).filter((t=>t instanceof e.HTMLElement||t instanceof e.SVGElement)).forEach((s=>{let a,r,l;if(!o.autoSaveExternalSave&&(o.removeHiddenElements||o.removeUnusedFonts||o.compressHTML)&&(l=e.getComputedStyle(s),s instanceof e.HTMLElement&&o.removeHiddenElements&&(r=(i||s.closest("html > head"))&&M.includes(s.tagName)||s.closest("details"),r||(a=i||function(e,t){let s=!1;if(t){const o=t.getPropertyValue("display"),n=t.getPropertyValue("opacity"),i=t.getPropertyValue("visibility");if(s="none"==o,!s&&("0"==n||"hidden"==i)&&e.getBoundingClientRect){const t=e.getBoundingClientRect();s=!t.width&&!t.height}}return Boolean(s)}(s,l),a&&(s.setAttribute(h,""),n.markedElements.push(s)))),!a)){if(o.compressHTML&&l){const e=l.getPropertyValue("white-space");e&&e.startsWith("pre")&&(s.setAttribute(w,""),n.markedElements.push(s))}o.removeUnusedFonts&&(D(l,o,n.usedFonts),D(e.getComputedStyle(s,":first-letter"),o,n.usedFonts),D(e.getComputedStyle(s,":before"),o,n.usedFonts),D(e.getComputedStyle(s,":after"),o,n.usedFonts))}!function(e,t,s,o,n,i,a){if("CANVAS"==s.tagName)try{const t=U(e,s,a);n.canvases.push({dataURI:s.toDataURL("image/png",""),width:t.width,height:t.height}),s.setAttribute(A,n.canvases.length-1),n.markedElements.push(s)}catch(e){}if("IMG"==s.tagName){const t={currentSrc:i?"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==":o.loadDeferredImages&&s.getAttribute(S)||s.currentSrc};if(n.images.push(t),s.setAttribute(E,n.images.length-1),n.markedElements.push(s),s.removeAttribute(S),a=a||e.getComputedStyle(s)){t.size=U(e,s,a);const o=a.getPropertyValue("box-shadow"),n=a.getPropertyValue("background-image");o&&"none"!=o||n&&"none"!=n||!(t.size.pxWidth>1||t.size.pxHeight>1)||(t.replaceable=!0,t.backgroundColor=a.getPropertyValue("background-color"),t.objectFit=a.getPropertyValue("object-fit"),t.boxSizing=a.getPropertyValue("box-sizing"),t.objectPosition=a.getPropertyValue("object-position"))}}if("VIDEO"==s.tagName&&!s.poster){const e=t.createElement("canvas"),o=e.getContext("2d");e.width=s.clientWidth,e.height=s.clientHeight;try{o.drawImage(s,0,0,e.width,e.height),n.posters.push(e.toDataURL("image/png","")),s.setAttribute(T,n.posters.length-1),n.markedElements.push(s)}catch(e){}}"IFRAME"==s.tagName&&i&&o.removeHiddenElements&&(s.setAttribute(b,""),n.markedElements.push(s));"LINK"==s.tagName&&s.import&&s.import.documentElement&&(n.imports.push({content:B(s.import)}),s.setAttribute(I,n.imports.length-1),n.markedElements.push(s));"INPUT"==s.tagName&&("password"!=s.type&&(s.setAttribute(v,s.value),n.markedElements.push(s)),"radio"!=s.type&&"checkbox"!=s.type||(s.setAttribute(v,s.checked),n.markedElements.push(s)));"TEXTAREA"==s.tagName&&(s.setAttribute(v,s.value),n.markedElements.push(s));"SELECT"==s.tagName&&s.querySelectorAll("option").forEach((e=>{e.selected&&(e.setAttribute(v,""),n.markedElements.push(e))}));"SCRIPT"==s.tagName&&(s.async&&""!=s.getAttribute("async")&&"async"!=s.getAttribute("async")&&(s.setAttribute(C,""),n.markedElements.push(s)),s.textContent=s.textContent.replace(/<\/script>/gi,"<\\/script>"))}(e,t,s,o,n,a,l);const d=!(s instanceof e.SVGElement)&&_(s);if(d&&!s.classList.contains(P)){const i={};s.setAttribute(y,n.shadowRoots.length),n.markedElements.push(s),n.shadowRoots.push(i),L(e,t,d,o,n,a),i.content=d.innerHTML,i.delegatesFocus=d.delegatesFocus,i.mode=d.mode,d.adoptedStyleSheets&&d.adoptedStyleSheets.length&&(i.adoptedStyleSheets=Array.from(d.adoptedStyleSheets).map((e=>Array.from(e.cssRules).map((e=>e.cssText)).join("\n"))))}L(e,t,s,o,n,a),!o.autoSaveExternalSave&&o.removeHiddenElements&&i&&(r||""==s.getAttribute(p)?s.parentElement&&(s.parentElement.setAttribute(p,""),n.markedElements.push(s.parentElement)):a&&(s.setAttribute(f,""),n.markedElements.push(s)))})),n}function D(e,t,s){if(e){const o=e.getPropertyValue("font-style")||"normal";e.getPropertyValue("font-family").split(",").forEach((n=>{if(n=O(n),!t.loadedFonts||t.loadedFonts.find((e=>O(e.family)==n&&e.style==o))){const t=(i=e.getPropertyValue("font-weight"),q[i.toLowerCase().trim()]||i),a=e.getPropertyValue("font-variant")||"normal",r=[n,t,o,a];s.set(JSON.stringify(r),[n,t,o,a])}var i}))}}function _(e){const t=globalThis.chrome;if(e.openOrClosedShadowRoot)return e.openOrClosedShadowRoot;if(!(t&&t.dom&&t.dom.openOrClosedShadowRoot))return e.shadowRoot;try{return t.dom.openOrClosedShadowRoot(e)}catch(t){return e.shadowRoot}}function O(e=""){return function(e){e=e.match(N)?e.replace(N,"$1"):e.replace(x,"$1");return e.trim()}((t=e.trim(),t.replace(g,((e,t,s)=>{const o="0x"+t-65536;return o!=o||s?t:o<0?String.fromCharCode(o+65536):String.fromCharCode(o>>10|55296,1023&o|56320)})))).toLowerCase();var t}function V(e){if(e){const t=[];return e.querySelectorAll("style").forEach(((s,o)=>{try{const n=e.createElement("style");n.textContent=s.textContent,e.body.appendChild(n);const i=n.sheet;n.remove(),i&&i.cssRules.length==s.sheet.cssRules.length||(s.setAttribute(R,o),t[o]=Array.from(s.sheet.cssRules).map((e=>e.cssText)).join("\n"))}catch(e){}})),t}}function U(e,t,s){let o=t.naturalWidth,n=t.naturalHeight;if(!o&&!n){let i,a,r,l,d,c,m,u,g=!1;if("content-box"==(s=s||e.getComputedStyle(t)).getPropertyValue("box-sizing")){const e=t.style.getPropertyValue("box-sizing"),s=t.style.getPropertyPriority("box-sizing"),o=t.clientWidth;t.style.setProperty("box-sizing","border-box","important"),g=t.clientWidth!=o,e?t.style.setProperty("box-sizing",e,s):t.style.removeProperty("box-sizing")}i=z("padding-left",s),a=z("padding-right",s),r=z("padding-top",s),l=z("padding-bottom",s),g?(d=z("border-left-width",s),c=z("border-right-width",s),m=z("border-top-width",s),u=z("border-bottom-width",s)):d=c=m=u=0,o=Math.max(0,t.clientWidth-i-a-d-c),n=Math.max(0,t.clientHeight-r-l-m-u)}return{pxWidth:o,pxHeight:n}}function z(e,t){if(t.getPropertyValue(e).endsWith("px"))return parseFloat(t.getPropertyValue(e))}function B(e){const t=e.doctype;let s="";return t&&(s="<!DOCTYPE "+t.nodeName,t.publicId?(s+=' PUBLIC "'+t.publicId+'"',t.systemId&&(s+=' "'+t.systemId+'"')):t.systemId&&(s+=' SYSTEM "'+t.systemId+'"'),t.internalSubset&&(s+=" ["+t.internalSubset+"]"),s+="> "),s+e.documentElement.outerHTML}const H=S,W=P,j="attributes",J=globalThis.browser,K=globalThis.document,G=globalThis.MutationObserver,Y=(e,t,s)=>globalThis.addEventListener(e,t,s),$=(e,t,s)=>globalThis.removeEventListener(e,t,s),X=new Map;async function Z(s){if(K.documentElement){X.clear();const i=Math.max(K.documentElement.scrollHeight-1.5*K.documentElement.clientHeight,0),a=Math.max(K.documentElement.scrollWidth-1.5*K.documentElement.clientWidth,0);if(globalThis.scrollY<=i&&globalThis.scrollX<=a)return function(s){return new Promise((async i=>{let a;const r=new Set,l=new G((async e=>{if((e=e.filter((e=>e.type==j))).length){e.filter((e=>{if("src"==e.attributeName&&(e.target.setAttribute(H,e.target.src),e.target.addEventListener("load",d)),"src"==e.attributeName||"srcset"==e.attributeName||"SOURCE"==e.target.tagName)return!e.target.classList||!e.target.classList.contains(W)})).length&&(a=!0,await ee(l,s,u),r.size||await Q(l,s,u))}}));function d(e){const t=e.target;t.removeAttribute(H),t.removeEventListener("load",d)}async function c(e){a=!0,await ee(l,s,u),await Q(l,s,u),e.detail&&r.add(e.detail)}async function m(e){await ee(l,s,u),await Q(l,s,u),r.delete(e.detail),r.size||await Q(l,s,u)}function u(s){l.disconnect(),$(e,c),$(t,m),i(s)}await se("idleTimeout",(()=>{a||(oe("loadTimeout"),oe("maxTimeout"),te(l,s,u))}),2*s.loadDeferredImagesMaxIdleTime),await ee(l,s,u),l.observe(K,{subtree:!0,childList:!0,attributes:!0}),Y(e,c),Y(t,m),function(e){e.loadDeferredImagesBlockCookies&&o(new n("single-file-block-cookies-start")),e.loadDeferredImagesBlockStorage&&o(new n("single-file-block-storage-start")),e.loadDeferredImagesKeepZoomLevel?o(new n("single-file-load-deferred-images-keep-zoom-level-start")):o(new n("single-file-load-deferred-images-start"))}(s)}))}(s)}}async function Q(e,t,s){await se("loadTimeout",(()=>te(e,t,s)),t.loadDeferredImagesMaxIdleTime)}async function ee(e,t,s){await se("maxTimeout",(async()=>{await oe("loadTimeout"),await te(e,t,s)}),10*t.loadDeferredImagesMaxIdleTime)}async function te(e,t,s){await oe("idleTimeout"),function(e){e.loadDeferredImagesBlockCookies&&o(new n("single-file-block-cookies-end")),e.loadDeferredImagesBlockStorage&&o(new n("single-file-block-storage-end")),e.loadDeferredImagesKeepZoomLevel?o(new n("single-file-load-deferred-images-keep-zoom-level-end")):o(new n("single-file-load-deferred-images-end"))}(t),await se("endTimeout",(async()=>{await oe("maxTimeout"),s()}),t.loadDeferredImagesMaxIdleTime/2),e.disconnect()}async function se(e,t,s){if(J&&J.runtime&&J.runtime.sendMessage){if(!X.get(e)||!X.get(e).pending){const o={callback:t,pending:!0};X.set(e,o),await J.runtime.sendMessage({method:"singlefile.lazyTimeout.setTimeout",type:e,delay:s}),o.pending=!1}}else{const o=X.get(e);o&&globalThis.clearTimeout(o),X.set(e,t),globalThis.setTimeout(t,s)}}async function oe(e){if(J&&J.runtime&&J.runtime.sendMessage)await J.runtime.sendMessage({method:"singlefile.lazyTimeout.clearTimeout",type:e});else{const t=X.get(e);X.delete(e),t&&globalThis.clearTimeout(t)}}J&&J.runtime&&J.runtime.onMessage&&J.runtime.onMessage.addListener&&J.runtime.onMessage.addListener((e=>{if("singlefile.lazyTimeout.onTimeout"==e.method){const t=X.get(e.type);t&&(X.delete(e.type),t.callback())}}));const ne={ON_BEFORE_CAPTURE_EVENT_NAME:"single-file-on-before-capture",ON_AFTER_CAPTURE_EVENT_NAME:"single-file-on-after-capture",WIN_ID_ATTRIBUTE_NAME:"data-single-file-win-id",preProcessDoc:function(e,t,s){let o;return e.querySelectorAll("noscript:not([data-single-file-disabled-noscript])").forEach((e=>{e.setAttribute(F,e.textContent),e.textContent=""})),function(e){e.querySelectorAll("meta[http-equiv=refresh]").forEach((e=>{e.removeAttribute("http-equiv"),e.setAttribute("disabled-http-equiv","refresh")}))}(e),e.head&&e.head.querySelectorAll(k).forEach((e=>e.hidden=!0)),e.querySelectorAll("svg foreignObject").forEach((e=>{const t=e.querySelectorAll("html > head > "+k+", html > body > "+k);t.length&&(Array.from(e.childNodes).forEach((e=>e.remove())),t.forEach((t=>e.appendChild(t))))})),o=t&&e.documentElement?L(t,e,e.documentElement,s):{canvases:[],images:[],posters:[],usedFonts:[],shadowRoots:[],imports:[],markedElements:[]},{canvases:o.canvases,fonts:d,stylesheets:V(e),images:o.images,posters:o.posters,usedFonts:Array.from(o.usedFonts.values()),shadowRoots:o.shadowRoots,imports:o.imports,referrer:e.referrer,markedElements:o.markedElements}},serialize:B,postProcessDoc:function(e,t){if(e.querySelectorAll("[data-single-file-disabled-noscript]").forEach((e=>{e.textContent=e.getAttribute(F),e.removeAttribute(F)})),e.querySelectorAll("meta[disabled-http-equiv]").forEach((e=>{e.setAttribute("http-equiv",e.getAttribute("disabled-http-equiv")),e.removeAttribute("disabled-http-equiv")})),e.head&&e.head.querySelectorAll("*:not(base):not(link):not(meta):not(noscript):not(script):not(style):not(template):not(title)").forEach((e=>e.removeAttribute("hidden"))),!t){const s=[f,b,h,w,E,T,A,v,y,I,R,C];t=e.querySelectorAll(s.map((e=>"["+e+"]")).join(","))}t.forEach((e=>{e.removeAttribute(f),e.removeAttribute(h),e.removeAttribute(p),e.removeAttribute(b),e.removeAttribute(w),e.removeAttribute(E),e.removeAttribute(T),e.removeAttribute(A),e.removeAttribute(v),e.removeAttribute(y),e.removeAttribute(I),e.removeAttribute(R),e.removeAttribute(C)}))},getShadowRoot:_},ie="__frameTree__::",ae='iframe, frame, object[type="text/html"][data]',re="singlefile.frameTree.initRequest",le="singlefile.frameTree.ackInitRequest",de="singlefile.frameTree.cleanupRequest",ce="singlefile.frameTree.initResponse",me=".",ue=globalThis.window==globalThis.top,ge=globalThis.browser,fe=globalThis.top,he=globalThis.MessageChannel,pe=globalThis.document,be=new Map;let we;function ye(e){e.frames.forEach((t=>Te("responseTimeouts",e.sessionId,t.windowId)));const t=be.get(e.sessionId);if(t){e.requestedFrameId&&(t.requestedFrameId=e.requestedFrameId),e.frames.forEach((e=>{let s=t.frames.find((t=>e.windowId==t.windowId));s||(s={windowId:e.windowId},t.frames.push(s)),s.processed||(s.content=e.content,s.baseURI=e.baseURI,s.title=e.title,s.canvases=e.canvases,s.fonts=e.fonts,s.stylesheets=e.stylesheets,s.images=e.images,s.posters=e.posters,s.usedFonts=e.usedFonts,s.shadowRoots=e.shadowRoots,s.imports=e.imports,s.processed=e.processed)}));t.frames.filter((e=>!e.processed)).length||(t.frames=t.frames.sort(((e,t)=>t.windowId.split(me).length-e.windowId.split(me).length)),t.resolve&&(t.requestedFrameId&&t.frames.forEach((e=>{e.windowId==t.requestedFrameId&&(e.requestedFrame=!0)})),t.resolve(t.frames)))}}function Ee(e,t,s,o){const n=Fe(e);!function(e,t,s,o,n){const i=[];let a;be.get(n)?a=be.get(n).requestTimeouts:(a={},be.set(n,{requestTimeouts:a}));t.forEach(((e,t)=>{const s=o+me+t;e.setAttribute(ne.WIN_ID_ATTRIBUTE_NAME,s),i.push({windowId:s})})),ve({frames:i,sessionId:n,requestedFrameId:e.documentElement.dataset.requestedFrameId&&o}),t.forEach(((e,t)=>{const i=o+me+t;try{Se(e.contentWindow,{method:re,windowId:i,sessionId:n,options:s})}catch(e){}a[i]=globalThis.setTimeout((()=>ve({frames:[{windowId:i,processed:!0}],sessionId:n})),750)})),delete e.documentElement.dataset.requestedFrameId}(e,n,t,s,o),n.length&&function(e,t,s,o,n){const i=[];t.forEach(((e,t)=>{const a=o+me+t;let r;try{r=e.contentDocument}catch(e){}if(r)try{const t=e.contentWindow;t.stop(),Te("requestTimeouts",n,a),Ee(r,s,a,n),i.push(Re(r,t,a,s))}catch(e){i.push({windowId:a,processed:!0})}})),ve({frames:i,sessionId:n,requestedFrameId:e.documentElement.dataset.requestedFrameId&&o}),delete e.documentElement.dataset.requestedFrameId}(e,n,t,s,o)}function Te(e,t,s){const o=be.get(t);if(o&&o[e]){const t=o[e][s];t&&(globalThis.clearTimeout(t),delete o[e][s])}}function Ae(e,t){const s=be.get(e);s&&s.responseTimeouts&&(s.responseTimeouts[t]=globalThis.setTimeout((()=>ve({frames:[{windowId:t,processed:!0}],sessionId:e})),1e4))}function Ie(e,t,s){e.forEach(((e,o)=>{const n=t+me+o;e.removeAttribute(ne.WIN_ID_ATTRIBUTE_NAME);try{Se(e.contentWindow,{method:de,windowId:n,sessionId:s})}catch(e){}})),e.forEach(((e,o)=>{const n=t+me+o;let i;try{i=e.contentDocument}catch(e){}if(i)try{Ie(Fe(i),n,s)}catch(e){}}))}function ve(e){e.method=ce;try{fe.singlefile.processors.frameTree.initResponse(e)}catch(t){Se(fe,e,!0)}}function Se(e,t,s){if(e==fe&&ge&&ge.runtime&&ge.runtime.sendMessage)ge.runtime.sendMessage(t);else if(s){const s=new he;e.postMessage(ie+JSON.stringify({method:t.method,sessionId:t.sessionId}),"*",[s.port2]),s.port1.postMessage(t)}else e.postMessage(ie+JSON.stringify(t),"*")}function Re(e,t,s,o){const n=ne.preProcessDoc(e,t,o),i=ne.serialize(e);ne.postProcessDoc(e,n.markedElements);return{windowId:s,content:i,baseURI:e.baseURI.split("#")[0],title:e.title,canvases:n.canvases,fonts:n.fonts,stylesheets:n.stylesheets,images:n.images,posters:n.posters,usedFonts:n.usedFonts,shadowRoots:n.shadowRoots,imports:n.imports,processed:!0}}function Fe(e){let t=Array.from(e.querySelectorAll(ae));return e.querySelectorAll("*").forEach((e=>{const s=ne.getShadowRoot(e);s&&(t=t.concat(...s.querySelectorAll(ae)))})),t}ue&&(we="0",ge&&ge.runtime&&ge.runtime.onMessage&&ge.runtime.onMessage.addListener&&ge.runtime.onMessage.addListener((e=>e.method==ce?(ye(e),Promise.resolve({})):e.method==le?(Te("requestTimeouts",e.sessionId,e.windowId),Ae(e.sessionId,e.windowId),Promise.resolve({})):void 0))),((e,t,s)=>{globalThis.addEventListener(e,t,s)})("message",(async e=>{if("string"==typeof e.data&&e.data.startsWith(ie)){e.preventDefault(),e.stopPropagation();const t=JSON.parse(e.data.substring(ie.length));if(t.method==re)e.source&&Se(e.source,{method:le,windowId:t.windowId,sessionId:t.sessionId}),ue||(globalThis.stop(),t.options.loadDeferredImages&&Z(t.options),await async function(e){const t=e.sessionId,s=globalThis._singleFile_waitForUserScript;ue||(we=globalThis.frameId=e.windowId);Ee(pe,e.options,we,t),ue||(e.options.userScriptEnabled&&s&&await s(ne.ON_BEFORE_CAPTURE_EVENT_NAME),ve({frames:[Re(pe,globalThis,we,e.options)],sessionId:t,requestedFrameId:pe.documentElement.dataset.requestedFrameId&&we}),e.options.userScriptEnabled&&s&&await s(ne.ON_AFTER_CAPTURE_EVENT_NAME),delete pe.documentElement.dataset.requestedFrameId)}(t));else if(t.method==le)Te("requestTimeouts",t.sessionId,t.windowId),Ae(t.sessionId,t.windowId);else if(t.method==de)!function(e){const t=e.sessionId;Ie(Fe(pe),e.windowId,t)}(t);else if(t.method==ce&&be.get(t.sessionId)){e.ports[0].onmessage=e=>ye(e.data)}}}),!0)}));