(window.webpackJsonp=window.webpackJsonp||[]).push([["61ec"],{"4n3w":function(t,e,n){var r={"./iiif-gallery_2.entry.js":["oRNJ","139f"]};function i(t){var e=r[t];return e?n.e(e[1]).then(function(){var t=e[0];return n(t)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}i.keys=function(){return Object.keys(r)},i.id="4n3w",t.exports=i},"8mO2":function(t,e,n){"use strict";n.d(e,"a",function(){return T}),n.d(e,"b",function(){return lt}),n.d(e,"c",function(){return ft}),n.d(e,"d",function(){return z}),n.d(e,"e",function(){return d});var r,i=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function s(t){try{u(r.next(t))}catch(e){o(e)}}function a(t){try{u(r.throw(t))}catch(e){o(e)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,a)}u((r=r.apply(t,e||[])).next())})},s=function(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},a=window,u=document,c={$flags$:0,$resourcesUrl$:"",raf:function(t){return requestAnimationFrame(t)},ael:function(t,e,n,r){return t.addEventListener(e,n,r)},rel:function(t,e,n,r){return t.removeEventListener(e,n,r)}},l=function(){var t=!1;try{u.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){t=!0}}))}catch(e){}return t}(),f=function(){try{return new CSSStyleSheet,!0}catch(t){}return!1}(),$=new WeakMap,h=function(t){return $.get(t)},d=function(t,e){return $.set(e.$lazyInstance$=t,e)},p=function(t){var e={$flags$:0,$hostElement$:t,$instanceValues$:new Map};return e.$onReadyPromise$=new Promise(function(t){return e.$onReadyResolve$=t}),$.set(t,e)},v=function(t,e){return e in t},y=function(t){return console.error(t)},m=function(t,e,r){var i=t.$lazyBundleIds$;return n("4n3w")("./"+i+".entry.js").then(function(e){return e[t.$tagName$.replace(/-/g,"_")]},y)},g=new Map,b=a.__stencil_cssshim,w=0,_=!1,S=[],E=[],O=[],j=function(t){return function(e){t.push(e),_||(_=!0,c.raf(M))}},k=function(t,e){for(var n=0,r=0;n<t.length&&(r=performance.now())<e;)try{t[n++](r)}catch(i){y(i)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},M=function(){w++,function(t){for(var e=0;e<t.length;e++)try{t[e](performance.now())}catch(n){y(n)}t.length=0}(S);var t=2==(6&c.$flags$)?performance.now()+7*Math.ceil(w*(1/22)):1/0;k(E,t),k(O,t),E.length>0&&(O.push.apply(O,E),E.length=0),(_=S.length+E.length+O.length>0)?c.raf(M):w=0},x=j(E),C={},A=function(t){return null!=t},L=function(t){return t.toLowerCase()},P=function(t){return["object","function"].includes(typeof t)};var T=function(){return a.CSS&&a.CSS.supports&&a.CSS.supports("color","var(--c)")?Promise.resolve():n.e("7052").then(n.t.bind(null,"2ES+",7))},N=new WeakMap,I=function(t,e,n){!function(t,e,n,r){var i=R(e),o=g.get(i);if(t=11===t.nodeType?t:u,o)if("string"==typeof o){t=t.head||t;var s=N.get(t),a=void 0;if(s||N.set(t,s=new Set),!s.has(i)){if(b){var c=(a=b.createHostStyle(r,i,o))["s-sc"];c&&(i=c,s=null)}else(a=u.createElement("style")).innerHTML=o;t.insertBefore(a,t.querySelector("link")),s&&s.add(i)}}else t.adoptedStyleSheets.includes(o)||(t.adoptedStyleSheets=t.adoptedStyleSheets.concat([o]))}(t.getRootNode(),e.$tagName$,0,t)},R=function(t,e){return"sc-"+t},z=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i,o=null,s=!1,a=!1,u=[],c=function(e){for(var n=0;n<e.length;n++)o=e[n],Array.isArray(o)?c(o):null!=o&&"boolean"!=typeof o&&((s="function"!=typeof t&&!P(o))&&(o=String(o)),s&&a?u[u.length-1].$text$+=o:u.push(s?{$flags$:0,$text$:o}:o),a=s)};if(c(n),e){i=e.key||void 0;var l=e.className||e.class;l&&(e.class="object"!=typeof l?l:Object.keys(l).filter(function(t){return l[t]}).join(" "))}if("function"==typeof t)return t(e,u,H);var f={$flags$:0,$tag$:t,$children$:u.length>0?u:null,$elm$:void 0,$attrs$:e};return f.$key$=i,f},U={},H={forEach:function(t,e){return t.map(B).forEach(e)},map:function(t,e){return t.map(B).map(e).map(W)}},B=function(t){return{vattrs:t.$attrs$,vchildren:t.$children$,vkey:t.$key$,vname:t.$name$,vtag:t.$tag$,vtext:t.$text$}},W=function(t){return{$flags$:0,$attrs$:t.vattrs,$children$:t.vchildren,$key$:t.vkey,$name$:t.vname,$tag$:t.vtag,$text$:t.vtext}},q=function(t,e,n,r,i,o){if(n!==r)if("class"!==e||i)if("style"===e){for(var s in n)r&&null!=r[s]||(s.includes("-")?t.style.removeProperty(s):t.style[s]="");for(var s in r)n&&r[s]===n[s]||(s.includes("-")?t.style.setProperty(s,r[s]):t.style[s]=r[s])}else if("key"===e);else if("ref"===e)r&&r(t);else if(e.startsWith("on")&&!v(t,e))e=v(t,L(e))?L(e.substring(2)):L(e[2])+e.substring(3),n&&c.rel(t,e,n,!1),r&&c.ael(t,e,r,!1);else{var a=v(t,e),u=P(r);if((a||u&&null!==r)&&!i)try{t[e]=null==r&&-1===t.tagName.indexOf("-")?"":r}catch($){}null==r||!1===r?t.removeAttribute(e):(!a||4&o||i)&&!u&&(r=!0===r?"":r.toString(),t.setAttribute(e,r))}else{var l=F(n),f=F(t.className).filter(function(t){return!l.includes(t)});t.className=f.concat(F(r).filter(function(t){return!f.includes(t)})).join(" ")}},F=function(t){return t?t.split(" "):[]},G=function(t,e,n,r){var i=11===e.$elm$.nodeType&&e.$elm$.host?e.$elm$.host:e.$elm$,o=t&&t.$attrs$||C,s=e.$attrs$||C;for(r in o)null==s[r]&&null!=o[r]&&q(i,r,o[r],void 0,n,e.$flags$);for(r in s)q(i,r,o[r],s[r],n,e.$flags$)},V=function(t,e,n,r){var i,o,s=e.$children$[n],a=0;if(A(s.$text$))s.$elm$=u.createTextNode(s.$text$);else if(i=s.$elm$=u.createElement(s.$tag$),G(null,s,!1),s.$children$)for(a=0;a<s.$children$.length;++a)(o=V(t,s,a))&&i.appendChild(o);return s.$elm$},D=function(t,e,n,r,i,o){for(var s,a=t;i<=o;++i)r[i]&&(s=V(null,n,i))&&(r[i].$elm$=s,a.insertBefore(s,e))},Q=function(t,e,n,r){for(;e<=n;++e)A(t[e])&&(r=t[e].$elm$,K(t[e],!0),r.remove())},J=function(t,e){return t.$tag$===e.$tag$&&t.$key$===e.$key$},Y=function(t,e){var n=e.$elm$=t.$elm$,r=t.$children$,i=e.$children$;A(e.$text$)?t.$text$!==e.$text$&&(n.textContent=e.$text$):(G(t,e,!1),A(r)&&A(i)?function(t,e,n,r){for(var i,o,s=0,a=0,u=0,c=0,l=e.length-1,f=e[0],$=e[l],h=r.length-1,d=r[0],p=r[h];s<=l&&a<=h;)if(null==f)f=e[++s];else if(null==$)$=e[--l];else if(null==d)d=r[++a];else if(null==p)p=r[--h];else if(J(f,d))Y(f,d),f=e[++s],d=r[++a];else if(J($,p))Y($,p),$=e[--l],p=r[--h];else if(J(f,p))Y(f,p),t.insertBefore(f.$elm$,$.$elm$.nextSibling),f=e[++s],p=r[--h];else if(J($,d))Y($,d),t.insertBefore($.$elm$,f.$elm$),$=e[--l],d=r[++a];else{for(u=-1,c=s;c<=l;++c)if(e[c]&&A(e[c].$key$)&&e[c].$key$===d.$key$){u=c;break}u>=0?((o=e[u]).$tag$!==d.$tag$?i=V(e&&e[a],n,u):(Y(o,d),e[u]=void 0,i=o.$elm$),d=r[++a]):(i=V(e&&e[a],n,a),d=r[++a]),i&&f.$elm$.parentNode.insertBefore(i,f.$elm$)}s>l?D(t,null==r[h+1]?null:r[h+1].$elm$,n,r,a,h):a>h&&Q(e,s,l)}(n,r,e,i):A(i)?(A(t.$text$)&&(n.textContent=""),D(n,null,e,i,0,i.length-1)):A(r)&&Q(r,0,r.length-1))},K=function(t,e){t&&(t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(e?null:t.$elm$),t.$children$&&t.$children$.forEach(function(t){K(t,e)}))},X=function(t,e,n,r){var i,o=e.$vnode$||{$flags$:0};L(t.tagName),(i=r)&&i.$tag$===U?r.$tag$=null:r=z(null,null,r),r.$flags$|=4,e.$vnode$=r,r.$elm$=o.$elm$=t,Y(o,r)},Z=function(t,e){return o(void 0,void 0,void 0,function(){var n;return s(this,function(r){switch(r.label){case 0:if(!t||!t[e])return[3,4];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,t[e]()];case 2:return r.sent(),[3,4];case 3:return n=r.sent(),y(n),[3,4];case 4:return[2]}})})},tt=function(t,e,n,r){return o(void 0,void 0,void 0,function(){var i;return s(this,function(o){switch(o.label){case 0:return e.$flags$|=16,i=e.$lazyInstance$,r?[4,Z(i,"componentWillLoad")]:[3,2];case 1:o.sent(),o.label=2;case 2:return x(function(){return et(t,e,n,i,r)}),[2]}})})},et=function(t,e,n,r,i){e.$flags$&=-17,t["s-lr"]=!1,i&&I(t,n,e.$modeName$),e.$flags$|=4;try{X(t,e,0,r.render())}catch(o){y(o)}e.$flags$&=-5,b&&b.updateHost(t),t["s-lr"]=!0,e.$flags$|=2,t["s-rc"].length>0&&(t["s-rc"].forEach(function(t){return t()}),t["s-rc"].length=0),nt(t,e)},nt=function(t,e,n){if(!t["s-al"]){e.$lazyInstance$;var r=e.$ancestorComponent$;512&e.$flags$||(e.$flags$|=512,t.classList.add("hydrated"),e.$onReadyResolve$(t),r||(u.documentElement.classList.add("hydrated"),setTimeout(function(){return c.$flags$|=2},999))),r&&((n=r["s-al"])&&(n.delete(t),0===n.size&&(r["s-al"]=void 0,r["s-init"]())),e.$ancestorComponent$=void 0)}},rt=function(t,e,n,r){var i,o,s=h(t),a=s.$hostElement$,u=s.$instanceValues$.get(e),c=s.$flags$;if(i=n,o=r.$members$[e][0],!((n=null==i||P(i)?i:4&o?"false"!==i&&(""===i||!!i):1&o?String(i):i)===u||8&c&&void 0!==u)&&(s.$instanceValues$.set(e,n),s.$lazyInstance$)){if(r.$watchers$&&1==(9&c)){var l=r.$watchers$[e];l&&l.forEach(function(t){try{s.$lazyInstance$[t].call(s.$lazyInstance$,n,u,e)}catch(r){y(r)}})}2==(22&c)&&tt(a,s,r,!1)}},it=function(t,e,n){if(e.$members$){t.watchers&&(e.$watchers$=t.watchers);var r=Object.entries(e.$members$),i=t.prototype;if(r.forEach(function(t){var r=t[0],o=t[1][0];31&o||2&n&&32&o?Object.defineProperty(i,r,{get:function(){return t=r,h(this).$instanceValues$.get(t);var t},set:function(t){rt(this,r,t,e)},configurable:!0,enumerable:!0}):1&n&&64&o&&Object.defineProperty(i,r,{value:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=h(this);return n.$onReadyPromise$.then(function(){var e;return(e=n.$lazyInstance$)[r].apply(e,t)})}})}),1&n){var o=new Map;i.attributeChangedCallback=function(t,e,n){var r=o.get(t);this[r]=(null!==n||"boolean"!=typeof this[r])&&n},t.observedAttributes=r.filter(function(t){t[0];return 15&t[1][0]}).map(function(t){var e=t[0],n=t[1][1]||e;return o.set(n,e),n})}}return t},ot=function(t,e){return function(n){return t.$lazyInstance$?t.$lazyInstance$[e](n):t.$onReadyPromise$.then(function(){return t.$lazyInstance$[e](n)}).catch(y)}},st=function(t){return l?{passive:0!=(1&t),capture:0!=(2&t)}:0!=(2&t)},at=function(t,e,n,r,i){return o(void 0,void 0,void 0,function(){var r,o;return s(this,function(s){switch(s.label){case 0:return 0!=(256&e.$flags$)?[3,2]:(e.$flags$|=256,[4,m(n)]);case 1:(i=s.sent()).isProxied||(n.$watchers$=i.watchers,it(i,n,2),i.isProxied=!0),e.$flags$|=8;try{new i(e)}catch(a){y(a)}e.$flags$&=-9,ut(e.$lazyInstance$),!i.isStyleRegistered&&i.style&&(r=i.style,function(t,e,n){var r=g.get(t);f&&n?(r=r||new CSSStyleSheet).replace(e):r=e,g.set(t,r)}(R(n.$tagName$,e.$modeName$),r,!!(1&n.$flags$)),i.isStyleRegistered=!0),s.label=2;case 2:return(o=e.$ancestorComponent$)&&!o["s-lr"]&&o["s-rc"]?o["s-rc"].push(function(){return at(t,e,n)}):tt(t,e,n,!0),[2]}})})},ut=function(t){},ct=function(t,e){if(0==(1&c.$flags$)){var n=h(t);if(e.$listeners$&&(n.$rmListeners$=function(t,e,n){var r=n.map(function(n){var r=n[0],i=n[1],o=n[2],s=t,a=ot(e,o),u=st(r);return c.ael(s,i,a,u),function(){return c.rel(s,i,a,u)}});return function(){return r.forEach(function(t){return t()})}}(t,n,e.$listeners$)),!(1&n.$flags$)){n.$flags$|=1;for(var r=t;r=r.parentNode||r.host;)if(r["s-init"]&&!r["s-lr"]){n.$ancestorComponent$=r,(r["s-al"]=r["s-al"]||new Set).add(t);break}e.$members$&&Object.entries(e.$members$).forEach(function(e){var n=e[0];if(31&e[1][0]&&t.hasOwnProperty(n)){var r=t[n];delete t[n],t[n]=r}}),at(t,n,e)}ut(n.$lazyInstance$)}},lt=function(t,e){void 0===e&&(e={});var n=[],r=e.exclude||[],o=u.head,s=a.customElements,l=o.querySelector("meta[charset]"),f=u.createElement("style");Object.assign(c,e),c.$resourcesUrl$=new URL(e.resourcesUrl||"/",a.location.href).href,e.syncQueue&&(c.$flags$|=4),t.forEach(function(t){return t[1].forEach(function(e){var o={$flags$:e[0],$tagName$:e[1],$members$:e[2],$listeners$:e[3],$watchers$:{}},a=o.$tagName$,u=function(t){function e(e){var n=t.call(this,e)||this;return e=n,n["s-lr"]=!1,n["s-rc"]=[],p(e),n}return i(e,t),e.prototype.connectedCallback=function(){ct(this,o)},e.prototype.disconnectedCallback=function(){!function(t){if(0==(1&c.$flags$)){var e=h(t);e.$rmListeners$&&(e.$rmListeners$(),e.$rmListeners$=void 0),b&&b.removeHost(t),e.$lazyInstance$}}(this)},e.prototype["s-init"]=function(){var t=h(this);t.$lazyInstance$&&nt(this,t)},e.prototype["s-hmr"]=function(t){},e.prototype.forceUpdate=function(){var t=h(this);tt(this,t,o,!1)},e.prototype.componentOnReady=function(){return h(this).$onReadyPromise$},e}(HTMLElement);o.$lazyBundleIds$=t[0],r.includes(a)||s.get(a)||(n.push(a),s.define(a,it(u,o,1)))})}),f.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",f.setAttribute("data-styles",""),o.insertBefore(f,l?l.nextSibling:o.firstChild)},ft=function(t,e,n){var r=$t(t);return{emit:function(t){return r.dispatchEvent(new CustomEvent(e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t}))}}},$t=function(t){return h(t).$hostElement$}},Q0G1:function(t,e,n){"use strict";n.r(e);var r=n("0iUn"),i=n("sLSF"),o=n("MI3g"),s=n("a7VT"),a=n("AT/M"),u=n("Tit0"),c=n("vYYK"),l=n("bcUQ"),f=n("8mO2");!function(){if(void 0!==typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var t=HTMLElement;window.HTMLElement=function(){return Reflect.construct(t,[],this.constructor)},HTMLElement.prototype=t.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,t)}}();var $=n("q1tI"),h=n.n($);n.d(e,"default",function(){return d});var d=function(t){function e(t){var n;return Object(r.default)(this,e),n=Object(o.default)(this,Object(s.default)(e).call(this,t)),Object(c.a)(Object(a.default)(n),"iiifGallery",void 0),n.iiifGallery=h.a.createRef(),n}return Object(u.default)(e,t),Object(i.default)(e,[{key:"componentDidMount",value:function(){var t=this;"undefined"!=typeof window&&(Object(l.a)().then(function(){var t;window,Object(f.a)().then(function(){Object(f.b)([["iiif-gallery_2",[[0,"iiif-gallery",{manifest:[1],ignore:[1],items:[32],reset:[64]},[[0,"selectItem","itemSelected"]]],[0,"iiif-gallery-item",{item:[8],selected:[4]}]]]],t)})}),this.iiifGallery.current.addEventListener("selectManifest",function(e){t.props.selectManifest(e)}))}},{key:"render",value:function(){return h.a.createElement("iiif-gallery",{manifest:this.props.manifest,ignore:this.props.ignore,ref:this.iiifGallery})}}]),e}($.Component)},bcUQ:function(t,e,n){"use strict";(function(t){function r(){var e=window;e.ES6Promise=function(){function e(){var t=setTimeout;return function(){return t(n,1)}}function n(){for(var t=0;t<m;t+=2)(0,M[t])(M[t+1]),M[t]=void 0,M[t+1]=void 0;m=0}function r(t,e){var n=this,r=new this.constructor(o);void 0===r[C]&&p(r);var i=n._state;if(i){var s=arguments[i-1];w(function(){return d(i,r,s,n._result)})}else $(n,r,t,e);return r}function i(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(o);return u(e,t),e}function o(){}function s(t){try{return t.then}catch(t){return T.error=t,T}}function a(t,e,n){e.constructor===t.constructor&&n===r&&e.constructor.resolve===i?function(t,e){e._state===L?l(t,e._result):e._state===P?f(t,e._result):$(e,void 0,function(e){return u(t,e)},function(e){return f(t,e)})}(t,e):n===T?(f(t,T.error),T.error=null):void 0===n?l(t,e):"function"==typeof n?function(t,e,n){w(function(t){var r=!1,i=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,function(n){r||(r=!0,e!==n?u(t,n):l(t,n))},function(e){r||(r=!0,f(t,e))},t._label);!r&&i&&(r=!0,f(t,i))},t)}(t,e,n):l(t,e)}function u(t,e){if(t===e)f(t,new TypeError("cannot resolve promise w/ itself"));else{var n=typeof e;null===e||"object"!==n&&"function"!==n?l(t,e):a(t,e,s(e))}}function c(t){t._onerror&&t._onerror(t._result),h(t)}function l(t,e){t._state===A&&(t._result=e,t._state=L,0!==t._subscribers.length&&w(h,t))}function f(t,e){t._state===A&&(t._state=P,t._result=e,w(c,t))}function $(t,e,n,r){var i=t._subscribers,o=i.length;t._onerror=null,i[o]=e,i[o+L]=n,i[o+P]=r,0===o&&t._state&&w(h,t)}function h(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,i,o=t._result,s=0;s<e.length;s+=3)r=e[s],i=e[s+n],r?d(n,r,i,o):i(o);t._subscribers.length=0}}function d(t,e,n,r){var i="function"==typeof n,o=void 0,s=void 0,a=void 0,c=void 0;if(i){try{o=n(r)}catch(t){T.error=t,o=T}if(o===T?(c=!0,s=o.error,o.error=null):a=!0,e===o)return void f(e,new TypeError("Cannot return same promise"))}else o=r,a=!0;e._state===A&&(i&&a?u(e,o):c?f(e,s):t===L?l(e,o):t===P&&f(e,o))}function p(t){t[C]=N++,t._state=void 0,t._result=void 0,t._subscribers=[]}var v,y=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},m=0,g=void 0,b=void 0,w=function(t,e){M[m]=t,M[m+1]=e,2===(m+=2)&&(b?b(n):x())},_=(v="undefined"!=typeof window?window:void 0)||{},S=_.MutationObserver||_.WebKitMutationObserver;_="undefined"==typeof self;var E,O,j,k="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,M=Array(1e3),x=void 0;x=S?(E=0,O=new S(n),j=document.createTextNode(""),O.observe(j,{characterData:!0}),function(){j.data=E=++E%2}):k?function(){var t=new MessageChannel;return t.port1.onmessage=n,function(){return t.port2.postMessage(0)}}():void 0===v?function(){try{var t=Function("return this")().require("vertx");return void 0!==(g=t.runOnLoop||t.runOnContext)?function(){g(n)}:e()}catch(n){return e()}}():e();var C=Math.random().toString(36).substring(2),A=void 0,L=1,P=2,T={error:null},N=0,I=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(o),this.promise[C]||p(this.promise),y(e)?(this._remaining=this.length=e.length,this._result=Array(this.length),0===this.length?l(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&l(this.promise,this._result))):f(this.promise,Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===A&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,u=n.resolve;u===i?(u=s(t))===r&&t._state!==A?this._settledAt(t._state,e,t._result):"function"!=typeof u?(this._remaining--,this._result[e]=t):n===R?(a(n=new n(o),t,u),this._willSettleAt(n,e)):this._willSettleAt(new n(function(e){return e(t)}),e):this._willSettleAt(u(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===A&&(this._remaining--,t===P?f(r,n):this._result[e]=n),0===this._remaining&&l(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;$(t,void 0,function(t){return n._settledAt(L,e,t)},function(t){return n._settledAt(P,e,t)})},t}(),R=function(){function t(e){if(this[C]=N++,this._result=this._state=void 0,this._subscribers=[],o!==e){if("function"!=typeof e)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof t))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(t,e){try{e(function(e){u(t,e)},function(e){f(t,e)})}catch(e){f(t,e)}}(this,e)}}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})},t}();return R.prototype.then=r,R.all=function(t){return new I(this,t).promise},R.race=function(t){var e=this;return y(t)?new e(function(n,r){for(var i=t.length,o=0;o<i;o++)e.resolve(t[o]).then(n,r)}):new e(function(t,e){return e(new TypeError("Must pass array to race"))})},R.resolve=i,R.reject=function(t){var e=new this(o);return f(e,t),e},R._setScheduler=function(t){b=t},R._setAsap=function(t){w=t},R._asap=w,R.polyfill=function(){var e=void 0;if(void 0!==t)e=t;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw Error("polyfill failed")}var n=e.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}e.Promise=R},R.Promise=R,R.polyfill(),R}();var r=[];return e.customElements&&(!e.Element||e.Element.prototype.closest&&e.Element.prototype.matches&&e.Element.prototype.remove)||r.push(n.e("0387").then(n.t.bind(null,"t0O2",7))),"function"==typeof Object.assign&&Object.entries&&Array.prototype.find&&Array.prototype.includes&&String.prototype.startsWith&&String.prototype.endsWith&&e.fetch&&function(){try{var t=new URL("b","http://a");return t.pathname="c%20d","http://a/c%20d"===t.href&&t.searchParams}catch(e){return!1}}()&&"undefined"!=typeof WeakMap||r.push(n.e("7571").then(n.t.bind(null,"MpYq",7))),e.CSS&&e.CSS.supports&&e.CSS.supports("color","var(--c)")||r.push(n.e("0e9a").then(n.t.bind(null,"Vl40",7))),Promise.all(r)}n.d(e,"a",function(){return r})}).call(this,n("yLpj"))}}]);