(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{209:function(e,t,n){"use strict";n.r(t);var o=n(19),r=n.n(o),i=n(0),a=n.n(i),c=n(52),s=n(51);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n,o,r,i,a){try{var c=e[i](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(o,r)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return h});var h=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,d(t).call(this,e))}var n,o,l,h,b;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,i["Component"]),n=t,o=[{key:"componentDidMount",value:function(){var e=document.querySelector("iiif-gallery");e.addEventListener("onSelectManifest",function(e){props.manifest=e.detail.id,this.setState(this.state)}),e.addEventListener("onSelectCollection",function(e){props.manifest=e.detail.id,this.setState(this.state)})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(c.a,{title:"Objects"},a.a.createElement("script",{src:"https://unpkg.com/iiif-gallery/dist/iiifgallery.js"}),a.a.createElement("script",{src:"/static/uv/lib/offline.js"}),a.a.createElement("script",{src:"/static/uv/helpers.js"})),a.a.createElement("header",{class:"pa3 overflow-hidden"},a.a.createElement("a",{href:"/index.html#objects",class:"db fl f5 lato no-underline green bg-animate hover-bg-green hover-white inline-flex items-center pa3 ba border-box mr4"},a.a.createElement("svg",{class:"w1","data-icon":"chevronLeft",viewBox:"0 0 32 32",fill:"currentcolor"},a.a.createElement("title",null,"chevronLeft icon"),a.a.createElement("path",{d:"M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"})),a.a.createElement("span",{class:"pl1 f4"},"go back")),a.a.createElement("div",{class:"db fl pt3 lato lh-copy",dangerouslySetInnerHTML:{__html:this.props.headerMessage}})),a.a.createElement("main",null,a.a.createElement("iiif-gallery",{manifest:"https://nomad-project.co.uk/objects/collection/index.json",ignore:"https://nomad-project.co.uk/objects/collection/wooden-bowl/index.json"})),a.a.createElement(s.a,null))}}],l=[{key:"getInitialProps",value:(h=r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{manifest:"https://nomad-project.co.uk/objects/collection/index.json",ignore:"https://nomad-project.co.uk/objects/collection/wooden-bowl/index.json",headerMessage:"Watch this space for more objects and stories from the Nomad workshops...",uv:{root:"../static/uv",configUri:"../static/uv.json",manifest:""}});case 1:case"end":return e.stop()}},e,this)}),b=function(){var e=this,t=arguments;return new Promise(function(n,o){var r=h.apply(e,t);function i(e){u(r,n,o,i,a,"next",e)}function a(e){u(r,n,o,i,a,"throw",e)}i(void 0)})},function(){return b.apply(this,arguments)})}],o&&f(n.prototype,o),l&&f(n,l),t}()},230:function(e,t,n){__NEXT_REGISTER_PAGE("/objects",function(){return e.exports=n(209),{page:e.exports.default}})}},[[230,1,0]]]);