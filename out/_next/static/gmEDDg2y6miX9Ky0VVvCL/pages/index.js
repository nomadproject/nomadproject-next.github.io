(window.webpackJsonp=window.webpackJsonp||[]).push([["ce6e"],{"/eQG":function(e,t,n){n("v5Dd");var r=n("WEpk").Object;e.exports=function(e,t){return r.getOwnPropertyDescriptor(e,t)}},"4mXO":function(e,t,n){e.exports=n("7TPF")},"4n3w":function(e,t,n){var r={"./iiif-gallery_2.entry.js":["oRNJ","139f"]};function a(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}a.keys=function(){return Object.keys(r)},a.id="4n3w",e.exports=a},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},"8mO2":function(e,t,n){"use strict";n.d(t,"a",function(){return A}),n.d(t,"b",function(){return ue}),n.d(t,"c",function(){return fe}),n.d(t,"d",function(){return z}),n.d(t,"e",function(){return d});var r,a=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=function(e,t,n,r){return new(n||(n=Promise))(function(a,i){function o(e){try{l(r.next(e))}catch(t){i(t)}}function s(e){try{l(r.throw(e))}catch(t){i(t)}}function l(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(o,s)}l((r=r.apply(e,t||[])).next())})},o=function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(s){i=[6,s],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},s=window,l=document,c={$flags$:0,$resourcesUrl$:"",raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)}},u=function(){var e=!1;try{l.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){e=!0}}))}catch(t){}return e}(),f=function(){try{return new CSSStyleSheet,!0}catch(e){}return!1}(),m=new WeakMap,h=function(e){return m.get(e)},d=function(e,t){return m.set(t.$lazyInstance$=e,t)},p=function(e){var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};return t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e}),m.set(e,t)},$=function(e,t){return t in e},g=function(e){return console.error(e)},v=function(e,t,r){var a=e.$lazyBundleIds$;return n("4n3w")("./"+a+".entry.js").then(function(t){return t[e.$tagName$.replace(/-/g,"_")]},g)},y=new Map,w=s.__stencil_cssshim,b=0,E=!1,k=[],x=[],N=[],j=function(e){return function(t){e.push(t),E||(E=!0,c.raf(O))}},S=function(e,t){for(var n=0,r=0;n<e.length&&(r=performance.now())<t;)try{e[n++](r)}catch(a){g(a)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},O=function(){b++,function(e){for(var t=0;t<e.length;t++)try{e[t](performance.now())}catch(n){g(n)}e.length=0}(k);var e=2==(6&c.$flags$)?performance.now()+7*Math.ceil(b*(1/22)):1/0;S(x,e),S(N,e),x.length>0&&(N.push.apply(N,x),x.length=0),(E=k.length+x.length+N.length>0)?c.raf(O):b=0},L=j(x),C={},_=function(e){return null!=e},M=function(e){return e.toLowerCase()},T=function(e){return["object","function"].includes(typeof e)};var A=function(){return s.CSS&&s.CSS.supports&&s.CSS.supports("color","var(--c)")?Promise.resolve():n.e("7052").then(n.t.bind(null,"2ES+",7))},I=new WeakMap,P=function(e,t,n){!function(e,t,n,r){var a=R(t),i=y.get(a);if(e=11===e.nodeType?e:l,i)if("string"==typeof i){e=e.head||e;var o=I.get(e),s=void 0;if(o||I.set(e,o=new Set),!o.has(a)){if(w){var c=(s=w.createHostStyle(r,a,i))["s-sc"];c&&(a=c,o=null)}else(s=l.createElement("style")).innerHTML=i;e.insertBefore(s,e.querySelector("link")),o&&o.add(a)}}else e.adoptedStyleSheets.includes(i)||(e.adoptedStyleSheets=e.adoptedStyleSheets.concat([i]))}(e.getRootNode(),t.$tagName$,0,e)},R=function(e,t){return"sc-"+e},z=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var a,i=null,o=!1,s=!1,l=[],c=function(t){for(var n=0;n<t.length;n++)i=t[n],Array.isArray(i)?c(i):null!=i&&"boolean"!=typeof i&&((o="function"!=typeof e&&!T(i))&&(i=String(i)),o&&s?l[l.length-1].$text$+=i:l.push(o?{$flags$:0,$text$:i}:i),s=o)};if(c(n),t){a=t.key||void 0;var u=t.className||t.class;u&&(t.class="object"!=typeof u?u:Object.keys(u).filter(function(e){return u[e]}).join(" "))}if("function"==typeof e)return e(t,l,B);var f={$flags$:0,$tag$:e,$children$:l.length>0?l:null,$elm$:void 0,$attrs$:t};return f.$key$=a,f},H={},B={forEach:function(e,t){return e.map(D).forEach(t)},map:function(e,t){return e.map(D).map(t).map(U)}},D=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}},U=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}},F=function(e,t,n,r,a,i){if(n!==r)if("class"!==t||a)if("style"===t){for(var o in n)r&&null!=r[o]||(o.includes("-")?e.style.removeProperty(o):e.style[o]="");for(var o in r)n&&r[o]===n[o]||(o.includes("-")?e.style.setProperty(o,r[o]):e.style[o]=r[o])}else if("key"===t);else if("ref"===t)r&&r(e);else if(t.startsWith("on")&&!$(e,t))t=$(e,M(t))?M(t.substring(2)):M(t[2])+t.substring(3),n&&c.rel(e,t,n,!1),r&&c.ael(e,t,r,!1);else{var s=$(e,t),l=T(r);if((s||l&&null!==r)&&!a)try{e[t]=null==r&&-1===e.tagName.indexOf("-")?"":r}catch(m){}null==r||!1===r?e.removeAttribute(t):(!s||4&i||a)&&!l&&(r=!0===r?"":r.toString(),e.setAttribute(t,r))}else{var u=W(n),f=W(e.className).filter(function(e){return!u.includes(e)});e.className=f.concat(W(r).filter(function(e){return!f.includes(e)})).join(" ")}},W=function(e){return e?e.split(" "):[]},q=function(e,t,n,r){var a=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,i=e&&e.$attrs$||C,o=t.$attrs$||C;for(r in i)null==o[r]&&null!=i[r]&&F(a,r,i[r],void 0,n,t.$flags$);for(r in o)F(a,r,i[r],o[r],n,t.$flags$)},J=function(e,t,n,r){var a,i,o=t.$children$[n],s=0;if(_(o.$text$))o.$elm$=l.createTextNode(o.$text$);else if(a=o.$elm$=l.createElement(o.$tag$),q(null,o,!1),o.$children$)for(s=0;s<o.$children$.length;++s)(i=J(e,o,s))&&a.appendChild(i);return o.$elm$},V=function(e,t,n,r,a,i){for(var o,s=e;a<=i;++a)r[a]&&(o=J(null,n,a))&&(r[a].$elm$=o,s.insertBefore(o,t))},K=function(e,t,n,r){for(;t<=n;++t)_(e[t])&&(r=e[t].$elm$,Q(e[t],!0),r.remove())},X=function(e,t){return e.$tag$===t.$tag$&&e.$key$===t.$key$},Y=function(e,t){var n=t.$elm$=e.$elm$,r=e.$children$,a=t.$children$;_(t.$text$)?e.$text$!==t.$text$&&(n.textContent=t.$text$):(q(e,t,!1),_(r)&&_(a)?function(e,t,n,r){for(var a,i,o=0,s=0,l=0,c=0,u=t.length-1,f=t[0],m=t[u],h=r.length-1,d=r[0],p=r[h];o<=u&&s<=h;)if(null==f)f=t[++o];else if(null==m)m=t[--u];else if(null==d)d=r[++s];else if(null==p)p=r[--h];else if(X(f,d))Y(f,d),f=t[++o],d=r[++s];else if(X(m,p))Y(m,p),m=t[--u],p=r[--h];else if(X(f,p))Y(f,p),e.insertBefore(f.$elm$,m.$elm$.nextSibling),f=t[++o],p=r[--h];else if(X(m,d))Y(m,d),e.insertBefore(m.$elm$,f.$elm$),m=t[--u],d=r[++s];else{for(l=-1,c=o;c<=u;++c)if(t[c]&&_(t[c].$key$)&&t[c].$key$===d.$key$){l=c;break}l>=0?((i=t[l]).$tag$!==d.$tag$?a=J(t&&t[s],n,l):(Y(i,d),t[l]=void 0,a=i.$elm$),d=r[++s]):(a=J(t&&t[s],n,s),d=r[++s]),a&&f.$elm$.parentNode.insertBefore(a,f.$elm$)}o>u?V(e,null==r[h+1]?null:r[h+1].$elm$,n,r,s,h):s>h&&K(t,o,u)}(n,r,t,a):_(a)?(_(e.$text$)&&(n.textContent=""),V(n,null,t,a,0,a.length-1)):_(r)&&K(r,0,r.length-1))},Q=function(e,t){e&&(e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$),e.$children$&&e.$children$.forEach(function(e){Q(e,t)}))},G=function(e,t,n,r){var a,i=t.$vnode$||{$flags$:0};M(e.tagName),(a=r)&&a.$tag$===H?r.$tag$=null:r=z(null,null,r),r.$flags$|=4,t.$vnode$=r,r.$elm$=i.$elm$=e,Y(i,r)},Z=function(e,t){return i(void 0,void 0,void 0,function(){var n;return o(this,function(r){switch(r.label){case 0:if(!e||!e[t])return[3,4];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,e[t]()];case 2:return r.sent(),[3,4];case 3:return n=r.sent(),g(n),[3,4];case 4:return[2]}})})},ee=function(e,t,n,r){return i(void 0,void 0,void 0,function(){var a;return o(this,function(i){switch(i.label){case 0:return t.$flags$|=16,a=t.$lazyInstance$,r?[4,Z(a,"componentWillLoad")]:[3,2];case 1:i.sent(),i.label=2;case 2:return L(function(){return te(e,t,n,a,r)}),[2]}})})},te=function(e,t,n,r,a){t.$flags$&=-17,e["s-lr"]=!1,a&&P(e,n,t.$modeName$),t.$flags$|=4;try{G(e,t,0,r.render())}catch(i){g(i)}t.$flags$&=-5,w&&w.updateHost(e),e["s-lr"]=!0,t.$flags$|=2,e["s-rc"].length>0&&(e["s-rc"].forEach(function(e){return e()}),e["s-rc"].length=0),ne(e,t)},ne=function(e,t,n){if(!e["s-al"]){t.$lazyInstance$;var r=t.$ancestorComponent$;512&t.$flags$||(t.$flags$|=512,e.classList.add("hydrated"),t.$onReadyResolve$(e),r||(l.documentElement.classList.add("hydrated"),setTimeout(function(){return c.$flags$|=2},999))),r&&((n=r["s-al"])&&(n.delete(e),0===n.size&&(r["s-al"]=void 0,r["s-init"]())),t.$ancestorComponent$=void 0)}},re=function(e,t,n,r){var a,i,o=h(e),s=o.$hostElement$,l=o.$instanceValues$.get(t),c=o.$flags$;if(a=n,i=r.$members$[t][0],!((n=null==a||T(a)?a:4&i?"false"!==a&&(""===a||!!a):1&i?String(a):a)===l||8&c&&void 0!==l)&&(o.$instanceValues$.set(t,n),o.$lazyInstance$)){if(r.$watchers$&&1==(9&c)){var u=r.$watchers$[t];u&&u.forEach(function(e){try{o.$lazyInstance$[e].call(o.$lazyInstance$,n,l,t)}catch(r){g(r)}})}2==(22&c)&&ee(s,o,r,!1)}},ae=function(e,t,n){if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);var r=Object.entries(t.$members$),a=e.prototype;if(r.forEach(function(e){var r=e[0],i=e[1][0];31&i||2&n&&32&i?Object.defineProperty(a,r,{get:function(){return e=r,h(this).$instanceValues$.get(e);var e},set:function(e){re(this,r,e,t)},configurable:!0,enumerable:!0}):1&n&&64&i&&Object.defineProperty(a,r,{value:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=h(this);return n.$onReadyPromise$.then(function(){var t;return(t=n.$lazyInstance$)[r].apply(t,e)})}})}),1&n){var i=new Map;a.attributeChangedCallback=function(e,t,n){var r=i.get(e);this[r]=(null!==n||"boolean"!=typeof this[r])&&n},e.observedAttributes=r.filter(function(e){e[0];return 15&e[1][0]}).map(function(e){var t=e[0],n=e[1][1]||t;return i.set(n,t),n})}}return e},ie=function(e,t){return function(n){return e.$lazyInstance$?e.$lazyInstance$[t](n):e.$onReadyPromise$.then(function(){return e.$lazyInstance$[t](n)}).catch(g)}},oe=function(e){return u?{passive:0!=(1&e),capture:0!=(2&e)}:0!=(2&e)},se=function(e,t,n,r,a){return i(void 0,void 0,void 0,function(){var r,i;return o(this,function(o){switch(o.label){case 0:return 0!=(256&t.$flags$)?[3,2]:(t.$flags$|=256,[4,v(n)]);case 1:(a=o.sent()).isProxied||(n.$watchers$=a.watchers,ae(a,n,2),a.isProxied=!0),t.$flags$|=8;try{new a(t)}catch(s){g(s)}t.$flags$&=-9,le(t.$lazyInstance$),!a.isStyleRegistered&&a.style&&(r=a.style,function(e,t,n){var r=y.get(e);f&&n?(r=r||new CSSStyleSheet).replace(t):r=t,y.set(e,r)}(R(n.$tagName$,t.$modeName$),r,!!(1&n.$flags$)),a.isStyleRegistered=!0),o.label=2;case 2:return(i=t.$ancestorComponent$)&&!i["s-lr"]&&i["s-rc"]?i["s-rc"].push(function(){return se(e,t,n)}):ee(e,t,n,!0),[2]}})})},le=function(e){},ce=function(e,t){if(0==(1&c.$flags$)){var n=h(e);if(t.$listeners$&&(n.$rmListeners$=function(e,t,n){var r=n.map(function(n){var r=n[0],a=n[1],i=n[2],o=e,s=ie(t,i),l=oe(r);return c.ael(o,a,s,l),function(){return c.rel(o,a,s,l)}});return function(){return r.forEach(function(e){return e()})}}(e,n,t.$listeners$)),!(1&n.$flags$)){n.$flags$|=1;for(var r=e;r=r.parentNode||r.host;)if(r["s-init"]&&!r["s-lr"]){n.$ancestorComponent$=r,(r["s-al"]=r["s-al"]||new Set).add(e);break}t.$members$&&Object.entries(t.$members$).forEach(function(t){var n=t[0];if(31&t[1][0]&&e.hasOwnProperty(n)){var r=e[n];delete e[n],e[n]=r}}),se(e,n,t)}le(n.$lazyInstance$)}},ue=function(e,t){void 0===t&&(t={});var n=[],r=t.exclude||[],i=l.head,o=s.customElements,u=i.querySelector("meta[charset]"),f=l.createElement("style");Object.assign(c,t),c.$resourcesUrl$=new URL(t.resourcesUrl||"/",s.location.href).href,t.syncQueue&&(c.$flags$|=4),e.forEach(function(e){return e[1].forEach(function(t){var i={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3],$watchers$:{}},s=i.$tagName$,l=function(e){function t(t){var n=e.call(this,t)||this;return t=n,n["s-lr"]=!1,n["s-rc"]=[],p(t),n}return a(t,e),t.prototype.connectedCallback=function(){ce(this,i)},t.prototype.disconnectedCallback=function(){!function(e){if(0==(1&c.$flags$)){var t=h(e);t.$rmListeners$&&(t.$rmListeners$(),t.$rmListeners$=void 0),w&&w.removeHost(e),t.$lazyInstance$}}(this)},t.prototype["s-init"]=function(){var e=h(this);e.$lazyInstance$&&ne(this,e)},t.prototype["s-hmr"]=function(e){},t.prototype.forceUpdate=function(){var e=h(this);ee(this,e,i,!1)},t.prototype.componentOnReady=function(){return h(this).$onReadyPromise$},t}(HTMLElement);i.$lazyBundleIds$=e[0],r.includes(s)||o.get(s)||(n.push(s),o.define(s,ae(l,i,1)))})}),f.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",f.setAttribute("data-styles",""),i.insertBefore(f,u?u.nextSibling:i.firstChild)},fe=function(e,t,n){var r=me(e);return{emit:function(e){return r.dispatchEvent(new CustomEvent(t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e}))}}},me=function(e){return h(e).$hostElement$}},"9Jkg":function(e,t,n){e.exports=n("oh+g")},"Jo+v":function(e,t,n){e.exports=n("/eQG")},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),a=n("sLSF"),i=n("MI3g"),o=n("a7VT"),s=n("Tit0"),l=n("q1tI"),c=n.n(l),u=n("tXcZ"),f=n("AT/M"),m=n("vYYK"),h=n("Jo+v"),d=n.n(h),p=n("4mXO"),$=n.n(p),g=n("pLtp"),v=n.n(g);function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=v()(n);"function"==typeof $.a&&(r=r.concat($()(n).filter(function(e){return d()(n,e).enumerable}))),r.forEach(function(t){Object(m.a)(e,t,n[t])})}return e}var w=function(e){function t(e){var n;return Object(r.default)(this,t),(n=Object(i.default)(this,Object(o.default)(t).call(this,e))).state={topSrc:e.src,bottomOpacity:0,bottomSrc:e.src},n}return Object(s.default)(t,e),Object(a.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this,n=this.state.topSrc,r=e.src;r!==n&&this.setState({bottomSrc:!1,topSrc:!1},function(){return t.setState({bottomSrc:n,topSrc:r,bottomOpacity:.99},function(){t.timeout||clearTimeout(t.timeout),t.timeout=setTimeout(function(){return t.setState({bottomOpacity:0})},20)})})}},{key:"render",value:function(){var e=this.props,t=e.duration,n=e.timingFunction,r=e.delay,a=e.style,i=e.alt,o=this.state,s=o.topSrc,l=o.bottomOpacity,u=o.bottomSrc;return c.a.createElement("div",{style:y({},b,{position:"relative"})},s&&c.a.createElement("img",{style:y({},b,a,{position:"absolute"}),src:s,alt:i}),u&&c.a.createElement("img",{style:y({},b,a,{opacity:l,transition:"opacity ".concat(t/1e3,"s ").concat(n," ").concat(r/1e3,"s")}),src:u}))}}]),t}(l.Component),b={maxWidth:"100%",maxHeight:"100%"};w.defaultProps={duration:500,timingFunction:"ease",delay:0};var E=function(e){function t(e){var n;return Object(r.default)(this,t),n=Object(i.default)(this,Object(o.default)(t).call(this,e)),Object(m.a)(Object(f.default)(n),"crossfade",void 0),n.state={imageIndex:0},n}return Object(s.default)(t,e),Object(a.default)(t,[{key:"changeImage",value:function(){this.state.imageIndex===this.props.images.length-1?this.setState({imageIndex:0}):this.setState({imageIndex:this.state.imageIndex+1})}},{key:"componentDidMount",value:function(){var e=this;setInterval(function(){return e.changeImage()},4e3)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"crossfade-img",ref:function(t){return e.crossfade=t}},c.a.createElement(w,{src:this.props.images[this.state.imageIndex],duration:1e3,timingFunction:"ease-out"}))}}]),t}(l.Component),k=function(e){function t(e){return Object(r.default)(this,t),Object(i.default)(this,Object(o.default)(t).call(this,e))}return Object(s.default)(t,e),Object(a.default)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},c.a.createElement("iframe",{src:this.props.video,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},frameBorder:0,mozallowfullscreen:"true",allowFullScreen:!0}))}}]),t}(l.Component),x=n("YFqc"),N=n.n(x);function j(e){return e.link?c.a.createElement("p",null,c.a.createElement(N.a,{href:e.link},c.a.createElement("a",{className:"f5 no-underline green bg-animate hover-bg-green hover-white inline-flex items-center ph3 pv2 ba border-box"},c.a.createElement("span",{className:"pr1 f4"},e.text),c.a.createElement("svg",{className:"w1","data-icon":"chevronRight",viewBox:"0 0 32 32",fill:"currentcolor"},c.a.createElement("title",null,"chevronRight icon"),c.a.createElement("path",{d:"M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"}))))):null}function S(e){return e.video?c.a.createElement(k,{video:e.video}):c.a.createElement(E,{images:e.images})}var O=function(e){return c.a.createElement("section",{id:e.id},c.a.createElement("article",{className:"cf center w-90 pt4 pb4"},c.a.createElement("div",{className:"left fl-ns w-two-thirds-ns tc ph4-ns"},c.a.createElement(S,{video:e.video,images:e.images})),c.a.createElement("div",{className:"right fl-ns center w-third-ns tl relative"},c.a.createElement("h2",{className:"absolute f3 fw4 firasans bg-white ".concat(e.color)},e.title),c.a.createElement("p",{className:"pt5 lato lh-copy f4",dangerouslySetInnerHTML:{__html:e.text}}),c.a.createElement(j,{link:e.link,text:e.linktext}))))},L=n("aIN1");n("bcUQ"),n("8mO2");!function(){if(void 0!==typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),n.d(t,"default",function(){return T});var C,_,M,T=function(e){function t(e){var n;return Object(r.default)(this,t),(n=Object(i.default)(this,Object(o.default)(t).call(this,e))).state={intro:{title:"A collaborative project by <a class='mid-gray no-underline underline-hover' href='https://twitter.com/abirahussein?lang=en'>Abira Hussein</a> and <a class='no-underline underline-hover' href='https://mnemoscene.io'>Mnemoscene</a>",text:"Centered on <a class='blue no-underline underline-hover' href='#workshops'>workshops</a> engaging Somali communities, Nomad explores the creative use of immersive <a class='orange no-underline underline-hover' href='#mixed-reality'>mixed reality</a> and web-based technology to contextualise archival Somali <a class='green no-underline underline-hover' href='#archive'>objects</a> with the people and traditions to which they belong. <br/> The project is supported by the Heritage Lottery Fund (HLF) and premiered at the British Library and British Museum during Somali Week Festival 2018."},sections:[{color:"orange",id:"mixed-reality",video:"https://player.vimeo.com/video/298863478?title=0&byline=0&portrait=0",title:"Mixed Reality",text:"Nomad includes a Mixed Reality experience for the Microsoft HoloLens developed by <a class='no-underline underline-hover' href='https://mnemoscene.io'>Mnemoscene.</a> The experience layers sound recordings from the British Library, digitised objects and photographs from the British Museum and Powell-Cotton Museum, and people presented as 3D holograms into the user’s real-life environment."},{color:"blue",id:"workshops",images:["/static/img/workshop1.jpg","/static/img/workshop2.jpg","/static/img/workshop3.jpg","/static/img/workshop4.jpg"],title:"Workshops",text:"This project aims to gather and share the heritage of Somali communities with the public. Workshop participants are invited to  share their stories and create 3D models of objects from their personal collections using photogrammetry. The outcomes from these workshops can be found in the archive."},{color:"green",id:"archive",images:["/static/img/object.jpg"],title:"Archive",text:"A growing collection of 3D objects, photographs, and audio recordings from the British Museum and Nomad workshops.",link:"/archive/",linktext:"view archive"}]},n}return Object(s.default)(t,e),Object(a.default)(t,[{key:"alternatingCols",value:function(){window.innerWidth<480?_.classList.add("mobile"):_.classList.remove("mobile"),Array.prototype.slice.call(M).forEach(function(e,t){if(t%2!=0){var n=e.querySelector("article"),r=n.querySelector("div");window.innerWidth<480?r.classList.contains("right")&&(n.appendChild(n.firstElementChild),n.classList.remove("switched")):r.classList.contains("left")&&(n.appendChild(n.firstElementChild),n.classList.add("switched"))}})}},{key:"componentDidMount",value:function(){C=window.innerWidth,_=document.querySelector("body"),M=this.sectionContainer.querySelectorAll("section");var e=this;window.addEventListener("resize",function(){window.innerWidth<480&&C>480?e.alternatingCols():C<480&&e.alternatingCols(),C=window.innerWidth},!0),this.alternatingCols()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(u.a,{title:"Nomad Project"},c.a.createElement("script",{src:"https://player.vimeo.com/api/player.js"})),c.a.createElement("header",{className:"vh-100 dt w-100"},c.a.createElement("div",{className:"dtc v-mid tc ph4 pv4"},c.a.createElement("h1",{className:"mt2 mb0 firasans fw6 f2 f1-ns"},"Nomad"),c.a.createElement("div",{className:"f5 f3-ns"},c.a.createElement("p",{className:"fw6 lh-copy mw8 center firasans",dangerouslySetInnerHTML:{__html:this.state.intro.title}}),c.a.createElement("p",{className:"lh-copy mw8 center firasans",dangerouslySetInnerHTML:{__html:this.state.intro.text}})),c.a.createElement("div",{className:"cf mw7 center"},c.a.createElement("a",{className:"link dim gray dib h2 w2 br-100 mr3 ",href:"https://twitter.com/i/moments/1059806320642138112",title:""},c.a.createElement("svg",{"data-icon":"twitter",viewBox:"0 0 32 32",fill:"currentColor"},c.a.createElement("path",{d:"M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"}))),c.a.createElement("a",{className:"link dim gray dib br-100 h2 w2 mr3 ",href:"https://instagram.com/nomadproject.uk",title:""},c.a.createElement("svg",{className:"dib h2 w2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},c.a.createElement("path",{d:"M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"}))),c.a.createElement("a",{className:"link dim gray dib br-100 h2 w2 mr3 ",href:"mailto:info@nomad-project.co.uk",title:"info@nomad-project.co.uk"},c.a.createElement("svg",{"aria-hidden":"true","data-prefix":"fas","data-icon":"envelope",className:"svg-inline--fa fa-envelope fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},c.a.createElement("path",{fill:"currentColor",d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"})))))),c.a.createElement("main",{ref:function(t){return e.sectionContainer=t}},this.state.sections.map(function(e){var t=e.color,n=e.id,r=e.video,a=e.images,i=e.title,o=e.text,s=e.link,l=e.linktext;return c.a.createElement(O,{key:n,color:t,id:n,video:r,images:a,title:i,text:o,link:s,linktext:l})})),c.a.createElement(L.a,null))}}]),t}(l.Component)},YFqc:function(e,t,n){e.exports=n("cTJO")},aIN1:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);t.a=function(e){return a.a.createElement("footer",{className:"pv4 ph3 ph5-m ph6-l mid-gray bg-light-gray"},a.a.createElement("p",{className:"f3 firasans fw4 mw7 tc center"},"with thanks to"),a.a.createElement("div",{className:"pv4 ph3 ph5-ns tc"},a.a.createElement("a",{className:"dib h4 w4 mr3 mb4",href:"http://www.kayd.org/"},a.a.createElement("img",{src:"/static/img/kayd-logo.png",style:{height:"100px"},alt:"KAYD Somali Arts and Culture"})),a.a.createElement("a",{className:"dib h4 w4 mr3 mb4",href:"https://www.hlf.org.uk/"},a.a.createElement("img",{src:"/static/img/hlf-logo.png",alt:"Heritage Lottery Fund"})),a.a.createElement("a",{className:"dib h4 w4 mr3 mb2",href:"http://www.sussex.ac.uk/shl/"},a.a.createElement("img",{src:"/static/img/sussex-humanities-lab.jpg",alt:"Sussex University Humanities Lab"})),a.a.createElement("a",{className:"dib h4 w4 mr3 mb2",href:"http://www.bl.uk"},a.a.createElement("img",{src:"/static/img/BL-logo.jpg",alt:"British Library"})),a.a.createElement("a",{className:"dib h4 w4 mr3 mb2",href:"http://www.britishmuseum.org"},a.a.createElement("img",{src:"/static/img/BM-logo.png",alt:"British Museum"})),a.a.createElement("a",{className:"dib h4 w4 mr3 mb2",href:"http://www.quexpark.co.uk/museum/"},a.a.createElement("img",{src:"/static/img/powell-cotton-logo.png",alt:"Powell Cotton Museum"})),a.a.createElement("a",{className:"dib h4 w4 mr3 mb2",href:"https://www.thefuseboxbrighton.com/"},a.a.createElement("img",{src:"/static/img/fusebox-logo.png",alt:"The FuseBox"}))),a.a.createElement("small",{className:"db tc"},a.a.createElement("p",{className:"f6 fw3 lato"},"Built by ",a.a.createElement("a",{href:"https://mnemoscene.io"},"Mnemoscene")," using ",a.a.createElement("a",{href:"https://universalviewer.io"},"Universal Viewer")),a.a.createElement("p",{className:"f6 fw3 lato"},"icons via ",a.a.createElement("a",{href:"https://fontawesome.com"},"Font Awesome"))),e.children)}},bcUQ:function(e,t,n){"use strict";(function(e){}).call(this,n("yLpj"))},cTJO:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("9Jkg")),i=r(n("/HRN")),o=r(n("WaGi")),s=r(n("ZDA2")),l=r(n("/+P4")),c=r(n("N9n2")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var m=n("CxY0"),h=u(n("q1tI")),d=(f(n("17x9")),u(n("nOHt"))),p=n("Bu4q");function $(e){return e&&"object"==typeof e?p.formatWithValidation(e):e}var g=function(e){function t(){var e,n,r,a,o;return(0,i.default)(this,t),(e=(0,s.default)(this,(0,l.default)(t).apply(this,arguments))).formatUrls=(n=function(e,t){return{href:$(e),as:$(t)}},r=null,a=null,o=null,function(e,t){if(e===r&&t===a)return o;var i=n(e,t);return r=e,a=t,o=i,i}),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,a=n.target;if("A"!==r||!(a&&"_self"!==a||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),o=i.href,s=i.as;if(function(e){var t=m.parse(e,!1,!0),n=m.parse(p.getLocationOrigin(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(o)){var l=window.location.pathname;o=m.resolve(l,o),s=s?m.resolve(l,s):o,t.preventDefault();var c=e.props.scroll;null==c&&(c=s.indexOf("#")<0),d.default[e.props.replace?"replace":"push"](o,s,{shallow:e.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,c.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,a.default)(this.props.href)!==(0,a.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=m.resolve(e,t);d.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var i=h.Children.only(t),o={onClick:function(t){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(o.href=a||r),o.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=d.Router._rewriteUrlForNextExport(o.href)),h.default.cloneElement(i,o)}}]),t}(h.Component);t.default=g},"oh+g":function(e,t,n){var r=n("WEpk"),a=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},tXcZ:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("m/Pd"),o=n.n(i),s="https://nomad-project.co.uk/static/img/nomad-og.jpg",l="UA-126420986-1";t.a=function(e){return a.a.createElement(o.a,null,a.a.createElement("meta",{charSet:"UTF-8"}),a.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(l)}),a.a.createElement("script",{dangerouslySetInnerHTML:{__html:"\n\t\t\twindow.dataLayer = window.dataLayer || [];\n\t\t\tfunction gtag(){dataLayer.push(arguments);}\n\t\t\tgtag('js', new Date());\n\t\t\tgtag('config', '".concat(l,"');\n\t\t\t")}}),a.a.createElement("title",null,e.title||""),a.a.createElement("meta",{name:"description",content:e.description||"Nomad Project"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.a.createElement("link",{rel:"icon",href:"/static/favicon.ico"}),a.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://unpkg.com/tachyons/css/tachyons.min.css"}),a.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/static/css/styles.css"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Fira+Sans",rel:"stylesheet"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Merriweather",rel:"stylesheet"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lato",rel:"stylesheet"}),a.a.createElement("meta",{property:"og:url",content:e.url||"https://nomad-project.co.uk"}),a.a.createElement("meta",{property:"og:title",content:e.title||""}),a.a.createElement("meta",{property:"og:description",content:e.description||"Nomad Project"}),a.a.createElement("meta",{name:"twitter:site",content:e.url||"https://nomad-project.co.uk"}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:image",content:e.ogImage||s}),a.a.createElement("meta",{property:"og:image",content:e.ogImage||s}),a.a.createElement("meta",{property:"og:image:width",content:"1200"}),a.a.createElement("meta",{property:"og:image:height",content:"630"}),e.children)}},v5Dd:function(e,t,n){var r=n("NsO/"),a=n("vwuL").f;n("zn7N")("getOwnPropertyDescriptor",function(){return function(e,t){return a(r(e),t)}})},vYYK:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n("hfKm"),a=n.n(r);function i(e,t,n){return t in e?a()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1"]]]);