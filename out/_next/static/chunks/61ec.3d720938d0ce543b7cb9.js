(window.webpackJsonp=window.webpackJsonp||[]).push([["61ec"],{"4n3w":function(e,t,n){var r={"./iiif-gallery_2.entry.js":["oRNJ","139f"]};function o(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="4n3w",e.exports=o},"8mO2":function(e,t,n){"use strict";n.d(t,"a",function(){return z}),n.d(t,"b",function(){return ue}),n.d(t,"c",function(){return $e}),n.d(t,"d",function(){return H}),n.d(t,"e",function(){return h});var r,o=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{s(r.next(e))}catch(t){i(t)}}function l(e){try{s(r.throw(e))}catch(t){i(t)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,l)}s((r=r.apply(e,t||[])).next())})},a=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(l){i=[6,l],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},l=window,s=document,c={$flags$:0,$resourcesUrl$:"",raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)}},u=function(){var e=!1;try{s.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){e=!0}}))}catch(t){}return e}(),$=function(){try{return new CSSStyleSheet,!0}catch(e){}return!1}(),f=new WeakMap,d=function(e){return f.get(e)},h=function(e,t){return f.set(t.$lazyInstance$=e,t)},y=function(e){var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};return t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e}),f.set(e,t)},p=function(e,t){return t in e},m=function(e){return console.error(e)},v=function(e,t,r){var o=e.$lazyBundleIds$;return n("4n3w")("./"+o+".entry.js").then(function(t){return t[e.$tagName$.replace(/-/g,"_")]},m)},g=new Map,b=l.__stencil_cssshim,w=0,S=!1,E=[],k=[],O=[],x=function(e){return function(t){e.push(t),S||(S=!0,c.raf(L))}},j=function(e,t){for(var n=0,r=0;n<e.length&&(r=performance.now())<t;)try{e[n++](r)}catch(o){m(o)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},L=function(){w++,function(e){for(var t=0;t<e.length;t++)try{e[t](performance.now())}catch(n){m(n)}e.length=0}(E);var e=2==(6&c.$flags$)?performance.now()+7*Math.ceil(w*(1/22)):1/0;j(k,e),j(O,e),k.length>0&&(O.push.apply(O,k),k.length=0),(S=E.length+k.length+O.length>0)?c.raf(L):w=0},C=x(k),P={},I=function(e){return null!=e},N=function(e){return e.toLowerCase()},M=function(e){return["object","function"].includes(typeof e)};var z=function(){return l.CSS&&l.CSS.supports&&l.CSS.supports("color","var(--c)")?Promise.resolve():n.e("7052").then(n.t.bind(null,"2ES+",7))},T=new WeakMap,R=function(e,t,n){!function(e,t,n,r){var o=_(t),i=g.get(o);if(e=11===e.nodeType?e:s,i)if("string"==typeof i){e=e.head||e;var a=T.get(e),l=void 0;if(a||T.set(e,a=new Set),!a.has(o)){if(b){var c=(l=b.createHostStyle(r,o,i))["s-sc"];c&&(o=c,a=null)}else(l=s.createElement("style")).innerHTML=i;e.insertBefore(l,e.querySelector("link")),a&&a.add(o)}}else e.adoptedStyleSheets.includes(i)||(e.adoptedStyleSheets=e.adoptedStyleSheets.concat([i]))}(e.getRootNode(),t.$tagName$,0,e)},_=function(e,t){return"sc-"+e},H=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o,i=null,a=!1,l=!1,s=[],c=function(t){for(var n=0;n<t.length;n++)i=t[n],Array.isArray(i)?c(i):null!=i&&"boolean"!=typeof i&&((a="function"!=typeof e&&!M(i))&&(i=String(i)),a&&l?s[s.length-1].$text$+=i:s.push(a?{$flags$:0,$text$:i}:i),l=a)};if(c(n),t){o=t.key||void 0;var u=t.className||t.class;u&&(t.class="object"!=typeof u?u:Object.keys(u).filter(function(e){return u[e]}).join(" "))}if("function"==typeof e)return e(t,s,A);var $={$flags$:0,$tag$:e,$children$:s.length>0?s:null,$elm$:void 0,$attrs$:t};return $.$key$=o,$},U={},A={forEach:function(e,t){return e.map(B).forEach(t)},map:function(e,t){return e.map(B).map(t).map(V)}},B=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}},V=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}},q=function(e,t,n,r,o,i){if(n!==r)if("class"!==t||o)if("style"===t){for(var a in n)r&&null!=r[a]||(a.includes("-")?e.style.removeProperty(a):e.style[a]="");for(var a in r)n&&r[a]===n[a]||(a.includes("-")?e.style.setProperty(a,r[a]):e.style[a]=r[a])}else if("key"===t);else if("ref"===t)r&&r(e);else if(t.startsWith("on")&&!p(e,t))t=p(e,N(t))?N(t.substring(2)):N(t[2])+t.substring(3),n&&c.rel(e,t,n,!1),r&&c.ael(e,t,r,!1);else{var l=p(e,t),s=M(r);if((l||s&&null!==r)&&!o)try{e[t]=null==r&&-1===e.tagName.indexOf("-")?"":r}catch(f){}null==r||!1===r?e.removeAttribute(t):(!l||4&i||o)&&!s&&(r=!0===r?"":r.toString(),e.setAttribute(t,r))}else{var u=Q(n),$=Q(e.className).filter(function(e){return!u.includes(e)});e.className=$.concat(Q(r).filter(function(e){return!$.includes(e)})).join(" ")}},Q=function(e){return e?e.split(" "):[]},W=function(e,t,n,r){var o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,i=e&&e.$attrs$||P,a=t.$attrs$||P;for(r in i)null==a[r]&&null!=i[r]&&q(o,r,i[r],void 0,n,t.$flags$);for(r in a)q(o,r,i[r],a[r],n,t.$flags$)},D=function(e,t,n,r){var o,i,a=t.$children$[n],l=0;if(I(a.$text$))a.$elm$=s.createTextNode(a.$text$);else if(o=a.$elm$=s.createElement(a.$tag$),W(null,a,!1),a.$children$)for(l=0;l<a.$children$.length;++l)(i=D(e,a,l))&&o.appendChild(i);return a.$elm$},F=function(e,t,n,r,o,i){for(var a,l=e;o<=i;++o)r[o]&&(a=D(null,n,o))&&(r[o].$elm$=a,l.insertBefore(a,t))},J=function(e,t,n,r){for(;t<=n;++t)I(e[t])&&(r=e[t].$elm$,X(e[t],!0),r.remove())},G=function(e,t){return e.$tag$===t.$tag$&&e.$key$===t.$key$},K=function(e,t){var n=t.$elm$=e.$elm$,r=e.$children$,o=t.$children$;I(t.$text$)?e.$text$!==t.$text$&&(n.textContent=t.$text$):(W(e,t,!1),I(r)&&I(o)?function(e,t,n,r){for(var o,i,a=0,l=0,s=0,c=0,u=t.length-1,$=t[0],f=t[u],d=r.length-1,h=r[0],y=r[d];a<=u&&l<=d;)if(null==$)$=t[++a];else if(null==f)f=t[--u];else if(null==h)h=r[++l];else if(null==y)y=r[--d];else if(G($,h))K($,h),$=t[++a],h=r[++l];else if(G(f,y))K(f,y),f=t[--u],y=r[--d];else if(G($,y))K($,y),e.insertBefore($.$elm$,f.$elm$.nextSibling),$=t[++a],y=r[--d];else if(G(f,h))K(f,h),e.insertBefore(f.$elm$,$.$elm$),f=t[--u],h=r[++l];else{for(s=-1,c=a;c<=u;++c)if(t[c]&&I(t[c].$key$)&&t[c].$key$===h.$key$){s=c;break}s>=0?((i=t[s]).$tag$!==h.$tag$?o=D(t&&t[l],n,s):(K(i,h),t[s]=void 0,o=i.$elm$),h=r[++l]):(o=D(t&&t[l],n,l),h=r[++l]),o&&$.$elm$.parentNode.insertBefore(o,$.$elm$)}a>u?F(e,null==r[d+1]?null:r[d+1].$elm$,n,r,l,d):l>d&&J(t,a,u)}(n,r,t,o):I(o)?(I(e.$text$)&&(n.textContent=""),F(n,null,t,o,0,o.length-1)):I(r)&&J(r,0,r.length-1))},X=function(e,t){e&&(e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$),e.$children$&&e.$children$.forEach(function(e){X(e,t)}))},Y=function(e,t,n,r){var o,i=t.$vnode$||{$flags$:0};N(e.tagName),(o=r)&&o.$tag$===U?r.$tag$=null:r=H(null,null,r),r.$flags$|=4,t.$vnode$=r,r.$elm$=i.$elm$=e,K(i,r)},Z=function(e,t){return i(void 0,void 0,void 0,function(){var n;return a(this,function(r){switch(r.label){case 0:if(!e||!e[t])return[3,4];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,e[t]()];case 2:return r.sent(),[3,4];case 3:return n=r.sent(),m(n),[3,4];case 4:return[2]}})})},ee=function(e,t,n,r){return i(void 0,void 0,void 0,function(){var o;return a(this,function(i){switch(i.label){case 0:return t.$flags$|=16,o=t.$lazyInstance$,r?[4,Z(o,"componentWillLoad")]:[3,2];case 1:i.sent(),i.label=2;case 2:return C(function(){return te(e,t,n,o,r)}),[2]}})})},te=function(e,t,n,r,o){t.$flags$&=-17,e["s-lr"]=!1,o&&R(e,n,t.$modeName$),t.$flags$|=4;try{Y(e,t,0,r.render())}catch(i){m(i)}t.$flags$&=-5,b&&b.updateHost(e),e["s-lr"]=!0,t.$flags$|=2,e["s-rc"].length>0&&(e["s-rc"].forEach(function(e){return e()}),e["s-rc"].length=0),ne(e,t)},ne=function(e,t,n){if(!e["s-al"]){t.$lazyInstance$;var r=t.$ancestorComponent$;512&t.$flags$||(t.$flags$|=512,e.classList.add("hydrated"),t.$onReadyResolve$(e),r||(s.documentElement.classList.add("hydrated"),setTimeout(function(){return c.$flags$|=2},999))),r&&((n=r["s-al"])&&(n.delete(e),0===n.size&&(r["s-al"]=void 0,r["s-init"]())),t.$ancestorComponent$=void 0)}},re=function(e,t,n,r){var o,i,a=d(e),l=a.$hostElement$,s=a.$instanceValues$.get(t),c=a.$flags$;if(o=n,i=r.$members$[t][0],!((n=null==o||M(o)?o:4&i?"false"!==o&&(""===o||!!o):1&i?String(o):o)===s||8&c&&void 0!==s)&&(a.$instanceValues$.set(t,n),a.$lazyInstance$)){if(r.$watchers$&&1==(9&c)){var u=r.$watchers$[t];u&&u.forEach(function(e){try{a.$lazyInstance$[e].call(a.$lazyInstance$,n,s,t)}catch(r){m(r)}})}2==(22&c)&&ee(l,a,r,!1)}},oe=function(e,t,n){if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);var r=Object.entries(t.$members$),o=e.prototype;if(r.forEach(function(e){var r=e[0],i=e[1][0];31&i||2&n&&32&i?Object.defineProperty(o,r,{get:function(){return e=r,d(this).$instanceValues$.get(e);var e},set:function(e){re(this,r,e,t)},configurable:!0,enumerable:!0}):1&n&&64&i&&Object.defineProperty(o,r,{value:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=d(this);return n.$onReadyPromise$.then(function(){var t;return(t=n.$lazyInstance$)[r].apply(t,e)})}})}),1&n){var i=new Map;o.attributeChangedCallback=function(e,t,n){var r=i.get(e);this[r]=(null!==n||"boolean"!=typeof this[r])&&n},e.observedAttributes=r.filter(function(e){e[0];return 15&e[1][0]}).map(function(e){var t=e[0],n=e[1][1]||t;return i.set(n,t),n})}}return e},ie=function(e,t){return function(n){return e.$lazyInstance$?e.$lazyInstance$[t](n):e.$onReadyPromise$.then(function(){return e.$lazyInstance$[t](n)}).catch(m)}},ae=function(e){return u?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e)},le=function(e,t,n,r,o){return i(void 0,void 0,void 0,function(){var r,i;return a(this,function(a){switch(a.label){case 0:return 0!=(256&t.$flags$)?[3,2]:(t.$flags$|=256,[4,v(n)]);case 1:(o=a.sent()).isProxied||(n.$watchers$=o.watchers,oe(o,n,2),o.isProxied=!0),t.$flags$|=8;try{new o(t)}catch(l){m(l)}t.$flags$&=-9,se(t.$lazyInstance$),!o.isStyleRegistered&&o.style&&(r=o.style,function(e,t,n){var r=g.get(e);$&&n?(r=r||new CSSStyleSheet).replace(t):r=t,g.set(e,r)}(_(n.$tagName$,t.$modeName$),r,!!(1&n.$flags$)),o.isStyleRegistered=!0),a.label=2;case 2:return(i=t.$ancestorComponent$)&&!i["s-lr"]&&i["s-rc"]?i["s-rc"].push(function(){return le(e,t,n)}):ee(e,t,n,!0),[2]}})})},se=function(e){},ce=function(e,t){if(0==(1&c.$flags$)){var n=d(e);if(t.$listeners$&&(n.$rmListeners$=function(e,t,n){var r=n.map(function(n){var r=n[0],o=n[1],i=n[2],a=e,l=ie(t,i),s=ae(r);return c.ael(a,o,l,s),function(){return c.rel(a,o,l,s)}});return function(){return r.forEach(function(e){return e()})}}(e,n,t.$listeners$)),!(1&n.$flags$)){n.$flags$|=1;for(var r=e;r=r.parentNode||r.host;)if(r["s-init"]&&!r["s-lr"]){n.$ancestorComponent$=r,(r["s-al"]=r["s-al"]||new Set).add(e);break}t.$members$&&Object.entries(t.$members$).forEach(function(t){var n=t[0];if(31&t[1][0]&&e.hasOwnProperty(n)){var r=e[n];delete e[n],e[n]=r}}),le(e,n,t)}se(n.$lazyInstance$)}},ue=function(e,t){void 0===t&&(t={});var n=[],r=t.exclude||[],i=s.head,a=l.customElements,u=i.querySelector("meta[charset]"),$=s.createElement("style");Object.assign(c,t),c.$resourcesUrl$=new URL(t.resourcesUrl||"/",l.location.href).href,t.syncQueue&&(c.$flags$|=4),e.forEach(function(e){return e[1].forEach(function(t){var i={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3],$watchers$:{}},l=i.$tagName$,s=function(e){function t(t){var n=e.call(this,t)||this;return t=n,n["s-lr"]=!1,n["s-rc"]=[],y(t),n}return o(t,e),t.prototype.connectedCallback=function(){ce(this,i)},t.prototype.disconnectedCallback=function(){!function(e){if(0==(1&c.$flags$)){var t=d(e);t.$rmListeners$&&(t.$rmListeners$(),t.$rmListeners$=void 0),b&&b.removeHost(e),t.$lazyInstance$}}(this)},t.prototype["s-init"]=function(){var e=d(this);e.$lazyInstance$&&ne(this,e)},t.prototype["s-hmr"]=function(e){},t.prototype.forceUpdate=function(){var e=d(this);ee(this,e,i,!1)},t.prototype.componentOnReady=function(){return d(this).$onReadyPromise$},t}(HTMLElement);i.$lazyBundleIds$=e[0],r.includes(l)||a.get(l)||(n.push(l),a.define(l,oe(s,i,1)))})}),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),i.insertBefore($,u?u.nextSibling:i.firstChild)},$e=function(e,t,n){var r=fe(e);return{emit:function(e){return r.dispatchEvent(new CustomEvent(t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e}))}}},fe=function(e){return d(e).$hostElement$}},Q0G1:function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),o=n("sLSF"),i=n("MI3g"),a=n("a7VT"),l=n("Tit0"),s=(n("bcUQ"),n("8mO2"));!function(){if(void 0!==typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}();var c=n("q1tI"),u=n.n(c);n.d(t,"default",function(){return $});var $=function(e){function t(e){return Object(r.default)(this,t),Object(i.default)(this,Object(a.default)(t).call(this,e))}return Object(l.default)(t,e),Object(o.default)(t,[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&applyPolyfills().then(function(){var e;window,Object(s.a)().then(function(){Object(s.b)([["iiif-gallery_2",[[0,"iiif-gallery",{manifest:[1],ignore:[1],items:[32],reset:[64]},[[0,"selectItem","itemSelected"]]],[0,"iiif-gallery-item",{item:[8],selected:[4]}]]]],e)})})}},{key:"render",value:function(){return u.a.createElement("iiif-gallery",{manifest:this.props.manifest,ignore:this.props.ignore})}}]),t}(c.Component)},bcUQ:function(e,t,n){"use strict";(function(e){}).call(this,n("yLpj"))}}]);