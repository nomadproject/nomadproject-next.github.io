(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{209:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(52),a=n(51);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,n=!(r=l(t).call(this,e))||"object"!==c(r)&&"function"!=typeof r?f(o):r,p(f(f(n)),"urlDataProvider",void 0),p(f(f(n)),"uv",void 0),n.data={locales:[{name:"en-GB"}]},n}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,o["Component"]),n=t,(i=[{key:"openManifest",value:function(){window.scrollTo(0,0),console.log(this),this.uv.set(Object.assign({},this.data,{iiifResourceUri:this.manifest,collectionIndex:0,manifestIndex:0,sequenceIndex:0,canvasIndex:0}))}},{key:"componentDidMount",value:function(){window.addEventListener("uvLoaded",function(e){this.urlDataProvider=new UV.URLDataProvider,this.data=Object.assign({},this.data,{collectionIndex:Number(this.urlDataProvider.get("c",0)),manifestIndex:Number(this.urlDataProvider.get("m",0)),sequenceIndex:Number(this.urlDataProvider.get("s",0)),canvasIndex:Number(this.urlDataProvider.get("cv",0)),rotation:Number(this.urlDataProvider.get("r",0)),xywh:this.urlDataProvider.get("xywh","")}),this.uv=createUV("#uv",this.data,this.urlDataProvider),this.uv.on("created",function(){Utils.Urls.setHashParameter("manifest",this.manifest)}),this.manifest=Utils.Urls.getHashParameter("manifest"),this.manifest&&this.openManifest()},!1)}},{key:"componentWillReceiveProps",value:function(e){e.manifest&&this.openManifest(e.manifest)}},{key:"render",value:function(){return console.log("render uv"),r.a.createElement("div",{id:"uv",class:"uv"})}}])&&s(n.prototype,i),a&&s(n,a),t}();function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return g});var g=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=b(this,v(t).call(this,e))).state={manifest:"https://nomad-project.co.uk/objects/collection/index.json",ignore:"https://nomad-project.co.uk/objects/collection/wooden-bowl/index.json",headerMessage:"Watch this space for more objects and stories from the Nomad workshops...",uv:{root:"../static/uv",configUri:"../static/uv.json",manifest:""}},n}var n,c,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o["Component"]),n=t,(c=[{key:"componentDidMount",value:function(){var e=this,t=document.querySelector("iiif-gallery");t.addEventListener("onSelectManifest",function(t){console.log(t.detail.id),e.setState(function(e,n){return{uv:{manifest:t.detail.id}}})}),t.addEventListener("onSelectCollection",function(e){console.log(e.detail.id)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(i.a,{title:"Objects"},r.a.createElement("script",{src:"https://unpkg.com/iiif-gallery/dist/iiifgallery.js"}),r.a.createElement("script",{src:"/static/uv/lib/offline.js"}),r.a.createElement("script",{src:"/static/uv/helpers.js"})),r.a.createElement("header",{class:"pa3 overflow-hidden"},r.a.createElement("a",{href:"/index.html#objects",class:"db fl f5 lato no-underline green bg-animate hover-bg-green hover-white inline-flex items-center pa3 ba border-box mr4"},r.a.createElement("svg",{class:"w1","data-icon":"chevronLeft",viewBox:"0 0 32 32",fill:"currentcolor"},r.a.createElement("title",null,"chevronLeft icon"),r.a.createElement("path",{d:"M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"})),r.a.createElement("span",{class:"pl1 f4"},"go back")),r.a.createElement("div",{class:"db fl pt3 lato lh-copy",dangerouslySetInnerHTML:{__html:this.state.headerMessage}})),r.a.createElement("main",null,r.a.createElement(d,{root:this.state.uv.root,configUri:this.state.uv.configUri,manifest:this.state.uv.manifest}),r.a.createElement("iiif-gallery",{manifest:this.state.manifest,ignore:this.state.ignore})),r.a.createElement(a.a,null),r.a.createElement("script",{src:"/static/uv/uv.js"}))}}])&&h(n.prototype,c),s&&h(n,s),t}()},230:function(e,t,n){__NEXT_REGISTER_PAGE("/objects",function(){return e.exports=n(209),{page:e.exports.default}})}},[[230,1,0]]]);