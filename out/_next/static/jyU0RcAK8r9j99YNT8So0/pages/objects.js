(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{209:function(e,t,n){"use strict";n.r(t);var o,r,i,a=n(19),c=n.n(a),s=n(0),u=n.n(s),l=n(52),f=n(51);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=b(this,d(t).call(this,e)),r={root:"../static/uv",configUri:"../static/uv.json",locales:[{name:"en-GB"}]},n}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,s["Component"]),n=t,(a=[{key:"openManifest",value:function(){window.scrollTo(0,0),i.set(Object.assign({},r,{iiifResourceUri:manifest,collectionIndex:0,manifestIndex:0,sequenceIndex:0,canvasIndex:0}))}},{key:"componentDidMount",value:function(){window.addEventListener("uvLoaded",function(e){o=new t.URLDataProvider,r=Object.assign({},r,{collectionIndex:Number(o.get("c",0)),manifestIndex:Number(o.get("m",0)),sequenceIndex:Number(o.get("s",0)),canvasIndex:Number(o.get("cv",0)),rotation:Number(o.get("r",0)),xywh:o.get("xywh","")}),(i=createUV("#uv",r,o)).on("created",function(){Utils.Urls.setHashParameter("manifest",manifest)}),manifest=Utils.Urls.getHashParameter("manifest"),manifest&&this.openManifest()},!1)}},{key:"render",value:function(){return u.a.createElement("div",{id:"uv",class:"uv"})}}])&&m(n.prototype,a),c&&m(n,c),t}();function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t,n,o,r,i,a){try{var c=e[i](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(o,r)}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return x});var x=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),j(this,E(t).call(this,e))}var n,o,r,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,s["Component"]),n=t,o=[{key:"componentDidMount",value:function(){var e=document.querySelector("iiif-gallery");e.addEventListener("onSelectManifest",function(e){props.manifest=e.detail.id,this.setState(this.state)}),e.addEventListener("onSelectCollection",function(e){props.manifest=e.detail.id,this.setState(this.state)})}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(l.a,{title:"Objects"},u.a.createElement("script",{src:"https://unpkg.com/iiif-gallery/dist/iiifgallery.js"}),u.a.createElement("script",{src:"/static/uv/lib/offline.js"}),u.a.createElement("script",{src:"/static/uv/helpers.js"})),u.a.createElement("header",{class:"pa3 overflow-hidden"},u.a.createElement("a",{href:"/index.html#objects",class:"db fl f5 lato no-underline green bg-animate hover-bg-green hover-white inline-flex items-center pa3 ba border-box mr4"},u.a.createElement("svg",{class:"w1","data-icon":"chevronLeft",viewBox:"0 0 32 32",fill:"currentcolor"},u.a.createElement("title",null,"chevronLeft icon"),u.a.createElement("path",{d:"M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"})),u.a.createElement("span",{class:"pl1 f4"},"go back")),u.a.createElement("div",{class:"db fl pt3 lato lh-copy",dangerouslySetInnerHTML:{__html:this.props.headerMessage}})),u.a.createElement("main",null,u.a.createElement(h,{root:this.props.uv.root,configUri:this.props.uv.configUri,manifest:this.props.uv.manifest}),u.a.createElement("iiif-gallery",{manifest:this.props.manifest,ignore:this.props.ignore})),u.a.createElement(f.a,null))}}],r=[{key:"getInitialProps",value:(i=c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{manifest:"https://nomad-project.co.uk/objects/collection/index.json",ignore:"https://nomad-project.co.uk/objects/collection/wooden-bowl/index.json",headerMessage:"Watch this space for more objects and stories from the Nomad workshops...",uv:{root:"../static/uv",configUri:"../static/uv.json",manifest:""}});case 1:case"end":return e.stop()}},e,this)}),a=function(){var e=this,t=arguments;return new Promise(function(n,o){var r=i.apply(e,t);function a(e){g(r,n,o,a,c,"next",e)}function c(e){g(r,n,o,a,c,"throw",e)}a(void 0)})},function(){return a.apply(this,arguments)})}],o&&w(n.prototype,o),r&&w(n,r),t}()},230:function(e,t,n){__NEXT_REGISTER_PAGE("/objects",function(){return e.exports=n(209),{page:e.exports.default}})}},[[230,1,0]]]);