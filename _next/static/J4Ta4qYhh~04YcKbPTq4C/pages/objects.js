(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{209:function(e,t,n){"use strict";n.r(t);var r=n(19),o=n.n(r),i=n(0),a=n.n(i),c=n(52),s=n(51);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=!(o=f(t).call(this,e))||"object"!==u(o)&&"function"!=typeof o?d(r):o,m(d(d(n)),"urlDataProvider",void 0),m(d(d(n)),"uv",void 0),m(d(d(n)),"data",void 0),n.data={root:"../static/uv",configUri:"../static/uv.json",locales:[{name:"en-GB"}]},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,i["Component"]),n=t,(r=[{key:"openManifest",value:function(){window.scrollTo(0,0),this.uv.set(Object.assign({},this.data,{iiifResourceUri:this.manifest,collectionIndex:0,manifestIndex:0,sequenceIndex:0,canvasIndex:0}))}},{key:"componentDidMount",value:function(){window.addEventListener("uvLoaded",function(e){this.urlDataProvider=new UV.URLDataProvider,this.data=Object.assign({},this.data,{collectionIndex:Number(this.urlDataProvider.get("c",0)),manifestIndex:Number(this.urlDataProvider.get("m",0)),sequenceIndex:Number(this.urlDataProvider.get("s",0)),canvasIndex:Number(this.urlDataProvider.get("cv",0)),rotation:Number(this.urlDataProvider.get("r",0)),xywh:this.urlDataProvider.get("xywh","")}),this.uv=createUV("#uv",data,this.urlDataProvider),this.uv.on("created",function(){Utils.Urls.setHashParameter("manifest",this.manifest)}),this.manifest=Utils.Urls.getHashParameter("manifest"),this.manifest&&this.openManifest()},!1)}},{key:"render",value:function(){return a.a.createElement("div",{id:"uv",class:"uv"})}}])&&l(n.prototype,r),o&&l(n,o),t}();function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return E});var E=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,w(t).call(this,e))}var n,r,u,l,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,i["Component"]),n=t,r=[{key:"componentDidMount",value:function(){var e=document.querySelector("iiif-gallery");e.addEventListener("onSelectManifest",function(e){console.log(e.detail.id)}),e.addEventListener("onSelectCollection",function(e){console.log(e.detail.id)})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(c.a,{title:"Objects"},a.a.createElement("script",{src:"https://unpkg.com/iiif-gallery/dist/iiifgallery.js"}),a.a.createElement("script",{src:"/static/uv/lib/offline.js"}),a.a.createElement("script",{src:"/static/uv/helpers.js"})),a.a.createElement("header",{class:"pa3 overflow-hidden"},a.a.createElement("a",{href:"/index.html#objects",class:"db fl f5 lato no-underline green bg-animate hover-bg-green hover-white inline-flex items-center pa3 ba border-box mr4"},a.a.createElement("svg",{class:"w1","data-icon":"chevronLeft",viewBox:"0 0 32 32",fill:"currentcolor"},a.a.createElement("title",null,"chevronLeft icon"),a.a.createElement("path",{d:"M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"})),a.a.createElement("span",{class:"pl1 f4"},"go back")),a.a.createElement("div",{class:"db fl pt3 lato lh-copy",dangerouslySetInnerHTML:{__html:this.props.headerMessage}})),a.a.createElement("main",null,a.a.createElement(h,{root:this.props.uv.root,configUri:this.props.uv.configUri,manifest:this.props.uv.manifest}),a.a.createElement("iiif-gallery",{manifest:this.props.manifest,ignore:this.props.ignore})),a.a.createElement(s.a,null),a.a.createElement("script",{src:"/static/uv/uv.js"}))}}],u=[{key:"getInitialProps",value:(l=o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{manifest:"https://nomad-project.co.uk/objects/collection/index.json",ignore:"https://nomad-project.co.uk/objects/collection/wooden-bowl/index.json",headerMessage:"Watch this space for more objects and stories from the Nomad workshops...",uv:{root:"../static/uv",configUri:"../static/uv.json",manifest:""}});case 1:case"end":return e.stop()}},e,this)}),f=function(){var e=this,t=arguments;return new Promise(function(n,r){var o=l.apply(e,t);function i(e){b(o,n,r,i,a,"next",e)}function a(e){b(o,n,r,i,a,"throw",e)}i(void 0)})},function(){return f.apply(this,arguments)})}],r&&y(n.prototype,r),u&&y(n,u),t}()},230:function(e,t,n){__NEXT_REGISTER_PAGE("/objects",function(){return e.exports=n(209),{page:e.exports.default}})}},[[230,1,0]]]);