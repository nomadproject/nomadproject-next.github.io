(window.webpackJsonp=window.webpackJsonp||[]).push([["bdd2"],{"0KLy":function(e,t,n){"use strict";var a=n("KI45"),r=a(n("p0XB")),o=a(n("0iUn")),i=a(n("sLSF")),l=a(n("MI3g")),s=a(n("a7VT")),u=a(n("Tit0")),c=a(n("XXOK")),d=a(n("UXZV")),f=a(n("eVuF")),m=a(n("pLtp")),p=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var h=p(n("q1tI")),v=n("Q0KE"),g=[],y=[],w=!1;function E(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}function b(e){var t={loading:!1,loaded:{},error:null},n=[];try{(0,m.default)(e).forEach(function(a){var r=E(e[a]);r.loading?t.loading=!0:(t.loaded[a]=r.loaded,t.error=r.error),n.push(r.promise),r.promise.then(function(e){t.loaded[a]=e}).catch(function(e){t.error=e})})}catch(a){t.error=a}return t.promise=f.default.all(n).then(function(e){return t.loading=!1,e}).catch(function(e){throw t.loading=!1,e}),t}function _(e,t){return h.default.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function k(e,t){var n,a=(0,d.default)({loader:null,loading:null,delay:200,timeout:null,render:_,webpack:null,modules:null},t),f=null;function m(){return f||(f=e(a.loader)),f.promise}if("undefined"==typeof window&&g.push(m),!w&&"undefined"!=typeof window&&"function"==typeof a.webpack){var p=a.webpack();y.push(function(e){var t=!0,n=!1,a=void 0;try{for(var r,o=(0,c.default)(p);!(t=(r=o.next()).done);t=!0){var i=r.value;if(-1!==e.indexOf(i))return m()}}catch(l){n=!0,a=l}finally{try{t||null==o.return||o.return()}finally{if(n)throw a}}})}return(n=function(t){function n(t){var r;return(0,o.default)(this,n),(r=(0,l.default)(this,(0,s.default)(n).call(this,t))).retry=function(){r.setState({error:null,loading:!0,timedOut:!1}),f=e(a.loader),r._loadModule()},m(),r.state={error:f.error,pastDelay:!1,timedOut:!1,loading:f.loading,loaded:f.loaded},r}return(0,u.default)(n,t),(0,i.default)(n,[{key:"componentWillMount",value:function(){this._mounted=!0,this._loadModule()}},{key:"_loadModule",value:function(){var e=this;if(this.context&&(0,r.default)(a.modules)&&a.modules.forEach(function(t){e.context(t)}),f.loading){"number"==typeof a.delay&&(0===a.delay?this.setState({pastDelay:!0}):this._delay=setTimeout(function(){e.setState({pastDelay:!0})},a.delay)),"number"==typeof a.timeout&&(this._timeout=setTimeout(function(){e.setState({timedOut:!0})},a.timeout));var t=function(){e._mounted&&(e.setState({error:f.error,loaded:f.loaded,loading:f.loading}),e._clearTimeouts())};f.promise.then(function(){t()}).catch(function(e){t()})}}},{key:"componentWillUnmount",value:function(){this._mounted=!1,this._clearTimeouts()}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"render",value:function(){return this.state.loading||this.state.error?h.default.createElement(a.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?a.render(this.state.loaded,this.props):null}}],[{key:"preload",value:function(){return m()}}]),n}(h.default.Component)).contextType=v.LoadableContext,n}function j(e){return k(E,e)}function x(e,t){for(var n=[];e.length;){var a=e.pop();n.push(a(t))}return f.default.all(n).then(function(){if(e.length)return x(e,t)})}j.Map=function(e){if("function"!=typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return k(b,e)},j.preloadAll=function(){return new f.default(function(e,t){x(g).then(e,t)})},j.preloadReady=function(e){return new f.default(function(t){var n=function(){return w=!0,t()};x(y,e).then(n,n)})},t.default=j},"1RlH":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/archive",function(){var e=n("PVZq");return{page:e.default||e}}])},"9Jkg":function(e,t,n){e.exports=n("oh+g")},PVZq:function(e,t,n){"use strict";n.r(t);var a=n("0iUn"),r=n("sLSF"),o=n("MI3g"),i=n("a7VT"),l=n("Tit0"),s=n("q1tI"),u=n.n(s),c=n("tXcZ"),d=n("aIN1"),f=n("UXZV"),m=n.n(f),p=n("AT/M"),h=n("vYYK"),v=function(e){function t(e){var n;return Object(a.default)(this,t),n=Object(o.default)(this,Object(i.default)(t).call(this,e)),Object(h.a)(Object(p.default)(n),"uvEl",void 0),Object(h.a)(Object(p.default)(n),"uv",void 0),Object(h.a)(Object(p.default)(n),"uvstate",void 0),Object(h.a)(Object(p.default)(n),"urlDataProvider",void 0),n}return Object(l.default)(t,e),Object(r.default)(t,[{key:"openManifest",value:function(){this.uvEl.style.display="block",this.props.scrollIntoView&&this.uvEl.scrollIntoView(),this.uv.set(m()({},this.uvstate,{collectionIndex:0,manifestIndex:0,sequenceIndex:0,canvasIndex:0}))}},{key:"componentWillMount",value:function(){if("undefined"!=typeof window){var e=this;window.addEventListener("uvLoaded",function(t){e.urlDataProvider=new UV.URLDataProvider,e.uvstate={root:e.props.root,configUri:e.props.configUri,locales:[{name:"en-GB"}],iiifResourceUri:"",collectionIndex:Number(e.urlDataProvider.get("c",0)),manifestIndex:Number(e.urlDataProvider.get("m",0)),sequenceIndex:Number(e.urlDataProvider.get("s",0)),canvasIndex:Number(e.urlDataProvider.get("cv",0)),rotation:Number(e.urlDataProvider.get("r",0)),xywh:e.urlDataProvider.get("xywh","")},e.uvEl=document.querySelector("#"+e.props.id||!1),e.uv=createUV(e.uvEl,e.uvstate,e.urlDataProvider),e.uv.on("created",function(){Utils.Urls.setHashParameter("manifest",e.uvstate.iiifResourceUri)}),e.uvstate.iiifResourceUri=Utils.Urls.getHashParameter("manifest"),e.uvstate.iiifResourceUri&&e.openManifest()},!1)}}},{key:"componentWillReceiveProps",value:function(e){this.uvstate&&e.manifest&&this.uvstate.iiifResourceUri!==e.manifest&&(this.uvstate.iiifResourceUri=e.manifest,this.openManifest())}},{key:"render",value:function(){return u.a.createElement("div",{id:"uv",className:"uv"})}}]),t}(s.Component),g=n("UgXd"),y=n.n(g),w=n("YFqc"),E=n.n(w);n.d(t,"default",function(){return _});var b=y()(function(){return n.e("61ec").then(n.bind(null,"Q0G1"))},{loadableGenerated:{webpack:function(){return["Q0G1"]},modules:["../components/gallery"]}}),_=function(e){function t(e){var n;return Object(a.default)(this,t),(n=Object(o.default)(this,Object(i.default)(t).call(this,e))).state={manifest:null,headerMessage:"",uv:{root:"../static/uv",configUri:"../static/uv.json",manifest:""}},n}return Object(l.default)(t,e),Object(r.default)(t,[{key:"componentWillMount",value:function(){if("undefined"!=typeof window){var e=this;console.log("componentWillMount"),window.addEventListener("uvLoaded",function(t){console.log("uv loaded"),document.getElementById("#gallery").addEventListener("selectManifest",function(t){e.setState(function(e,n){return{uv:{manifest:t.detail.id}}})}),e.setState(function(e,t){return{uv:{manifest:"https://nomad-project.co.uk/objects/collection/index.json"}}})},!1)}}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(c.a,{title:"Archive"},u.a.createElement("script",{src:"https://unpkg.com/manifesto.js@3.0.6/dist/client/manifesto.bundle.js"}),u.a.createElement("script",{src:"/static/uv/lib/offline.js"}),u.a.createElement("script",{src:"/static/uv/helpers.js"})),u.a.createElement("header",{className:"pa3 overflow-hidden"},u.a.createElement(E.a,{href:"/"},u.a.createElement("a",{className:"db fl f5 lato no-underline green bg-animate hover-bg-green hover-white inline-flex items-center pa3 ba border-box mr4"},u.a.createElement("svg",{className:"w1","data-icon":"chevronLeft",viewBox:"0 0 32 32",fill:"currentcolor"},u.a.createElement("title",null,"chevronLeft icon"),u.a.createElement("path",{d:"M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"})),u.a.createElement("span",{className:"pl1 f4"},"go back"))),u.a.createElement("div",{className:"db fl pt3 lato lh-copy",dangerouslySetInnerHTML:{__html:this.state.headerMessage}})),u.a.createElement("main",null,u.a.createElement(v,{id:"uv",root:this.state.uv.root,configUri:this.state.uv.configUri,manifest:this.state.uv.manifest,scrollIntoView:"true"}),u.a.createElement(b,{id:"gallery",manifest:this.state.manifest,ignore:this.state.ignore})),u.a.createElement(d.a,null),u.a.createElement("script",{async:!0,src:"/static/uv/uv.js"}))}}]),t}(s.Component)},Q0KE:function(e,t,n){"use strict";var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("q1tI"));t.LoadableContext=r.createContext(null)},UgXd:function(e,t,n){"use strict";var a=n("KI45"),r=a(n("pLtp")),o=a(n("UXZV")),i=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=i(n("q1tI")),s=i(n("0KLy")),u="undefined"==typeof window;function c(e,t){return delete t.webpack,delete t.modules,u?function(){return l.default.createElement(t.loading,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}:e(t)}function d(){return l.default.createElement("p",null,"loading...")}t.noSSR=c,t.default=function(e,t){var n=s.default,a={loading:function(e){return e.error,e.isLoading,e.pastDelay?l.default.createElement(d,null):null}};if("function"==typeof e.then?a.loader=function(){return e}:"function"==typeof e?a.loader=e:"object"==typeof e&&(a=(0,o.default)({},a,e)),a=(0,o.default)({},a,t),e.render&&(a.render=function(t,n){return e.render(n,t)}),e.modules){n=s.default.Map;var i={},u=e.modules();(0,r.default)(u).forEach(function(e){var t=u[e];"function"!=typeof t.then?i[e]=t:i[e]=function(){return t.then(function(e){return e.default||e})}}),a.loader=i}if(a.loadableGenerated&&delete(a=(0,o.default)({},a,a.loadableGenerated)).loadableGenerated,"boolean"==typeof a.ssr){if(!a.ssr)return delete a.ssr,c(n,a);delete a.ssr}return n(a)}},YFqc:function(e,t,n){e.exports=n("cTJO")},aIN1:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=function(e){return r.a.createElement("footer",{className:"pv4 ph3 ph5-m ph6-l mid-gray bg-light-gray"},r.a.createElement("p",{className:"f3 firasans fw4 mw7 tc center"},"with thanks to"),r.a.createElement("div",{className:"pv4 ph3 ph5-ns tc"},r.a.createElement("a",{className:"dib h4 w4 mr3 mb4",href:"http://www.kayd.org/"},r.a.createElement("img",{src:"/static/img/kayd-logo.png",style:{height:"100px"},alt:"KAYD Somali Arts and Culture"})),r.a.createElement("a",{className:"dib h4 w4 mr3 mb4",href:"https://www.hlf.org.uk/"},r.a.createElement("img",{src:"/static/img/hlf-logo.png",alt:"Heritage Lottery Fund"})),r.a.createElement("a",{className:"dib h4 w4 mr3 mb2",href:"http://www.sussex.ac.uk/shl/"},r.a.createElement("img",{src:"/static/img/sussex-humanities-lab.jpg",alt:"Sussex University Humanities Lab"})),r.a.createElement("a",{className:"dib h4 w4 mr3 mb2",href:"http://www.bl.uk"},r.a.createElement("img",{src:"/static/img/BL-logo.jpg",alt:"British Library"})),r.a.createElement("a",{className:"dib h4 w4 mr3 mb2",href:"http://www.britishmuseum.org"},r.a.createElement("img",{src:"/static/img/BM-logo.png",alt:"British Museum"})),r.a.createElement("a",{className:"dib h4 w4 mr3 mb2",href:"http://www.quexpark.co.uk/museum/"},r.a.createElement("img",{src:"/static/img/powell-cotton-logo.png",alt:"Powell Cotton Museum"})),r.a.createElement("a",{className:"dib h4 w4 mr3 mb2",href:"https://www.thefuseboxbrighton.com/"},r.a.createElement("img",{src:"/static/img/fusebox-logo.png",alt:"The FuseBox"}))),r.a.createElement("small",{className:"db tc"},r.a.createElement("p",{className:"f6 fw3 lato"},"Built by ",r.a.createElement("a",{href:"https://mnemoscene.io"},"Mnemoscene")," using ",r.a.createElement("a",{href:"https://universalviewer.io"},"Universal Viewer")),r.a.createElement("p",{className:"f6 fw3 lato"},"icons via ",r.a.createElement("a",{href:"https://fontawesome.com"},"Font Awesome"))),e.children)}},cTJO:function(e,t,n){"use strict";var a=n("KI45"),r=a(n("9Jkg")),o=a(n("/HRN")),i=a(n("WaGi")),l=a(n("ZDA2")),s=a(n("/+P4")),u=a(n("N9n2")),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},d=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var f=n("CxY0"),m=c(n("q1tI")),p=(d(n("17x9")),c(n("nOHt"))),h=n("Bu4q");function v(e){return e&&"object"==typeof e?h.formatWithValidation(e):e}var g=function(e){function t(){var e,n,a,r,i;return(0,o.default)(this,t),(e=(0,l.default)(this,(0,s.default)(t).apply(this,arguments))).formatUrls=(n=function(e,t){return{href:v(e),as:v(t)}},a=null,r=null,i=null,function(e,t){if(e===a&&t===r)return i;var o=n(e,t);return a=e,r=t,i=o,o}),e.linkClicked=function(t){var n=t.currentTarget,a=n.nodeName,r=n.target;if("A"!==a||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),i=o.href,l=o.as;if(function(e){var t=f.parse(e,!1,!0),n=f.parse(h.getLocationOrigin(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var s=window.location.pathname;i=f.resolve(s,i),l=l?f.resolve(s,l):i,t.preventDefault();var u=e.props.scroll;null==u&&(u=l.indexOf("#")<0),p.default[e.props.replace?"replace":"push"](i,l,{shallow:e.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,r.default)(this.props.href)!==(0,r.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=f.resolve(e,t);p.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,r=n.as;"string"==typeof t&&(t=m.default.createElement("a",null,t));var o=m.Children.only(t),i={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=r||a),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=p.Router._rewriteUrlForNextExport(i.href)),m.default.cloneElement(o,i)}}]),t}(m.Component);t.default=g},"oh+g":function(e,t,n){var a=n("WEpk"),r=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}},tXcZ:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("m/Pd"),i=n.n(o),l="https://nomad-project.co.uk/static/img/nomad-og.jpg",s="UA-126420986-1";t.a=function(e){return r.a.createElement(i.a,null,r.a.createElement("meta",{charSet:"UTF-8"}),r.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(s)}),r.a.createElement("script",{dangerouslySetInnerHTML:{__html:"\n\t\t\twindow.dataLayer = window.dataLayer || [];\n\t\t\tfunction gtag(){dataLayer.push(arguments);}\n\t\t\tgtag('js', new Date());\n\t\t\tgtag('config', '".concat(s,"');\n\t\t\t")}}),r.a.createElement("title",null,e.title||""),r.a.createElement("meta",{name:"description",content:e.description||"Nomad Project"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.a.createElement("link",{rel:"icon",href:"/static/favicon.ico"}),r.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://unpkg.com/tachyons/css/tachyons.min.css"}),r.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/static/css/styles.css"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Fira+Sans",rel:"stylesheet"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Merriweather",rel:"stylesheet"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lato",rel:"stylesheet"}),r.a.createElement("meta",{property:"og:url",content:e.url||"https://nomad-project.co.uk"}),r.a.createElement("meta",{property:"og:title",content:e.title||""}),r.a.createElement("meta",{property:"og:description",content:e.description||"Nomad Project"}),r.a.createElement("meta",{name:"twitter:site",content:e.url||"https://nomad-project.co.uk"}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:image",content:e.ogImage||l}),r.a.createElement("meta",{property:"og:image",content:e.ogImage||l}),r.a.createElement("meta",{property:"og:image:width",content:"1200"}),r.a.createElement("meta",{property:"og:image:height",content:"630"}),e.children)}},vYYK:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n("hfKm"),r=n.n(a);function o(e,t,n){return t in e?r()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}}},[["1RlH","5d41","9da1"]]]);