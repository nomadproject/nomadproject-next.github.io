(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{149:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(52);n(26);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,f(t).call(this,e))).state={topSrc:e.src,bottomOpacity:0,bottomSrc:e.src},n}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r["Component"]),n=t,(i=[{key:"componentWillReceiveProps",value:function(e){var t=this,n=this.state.topSrc,r=e.src;r!==n&&this.setState({bottomSrc:!1,topSrc:!1},function(){return t.setState({bottomSrc:n,topSrc:r,bottomOpacity:.99},function(){t.timeout||clearTimeout(t.timeout),t.timeout=setTimeout(function(){return t.setState({bottomOpacity:0})},20)})})}},{key:"render",value:function(){var e=this.props,t=e.duration,n=e.timingFunction,r=e.delay,i=e.style,a=e.alt,l=this.state,s=l.topSrc,u=l.bottomOpacity,f=l.bottomSrc;return o.a.createElement("div",{style:c({},h,{position:"relative"})},s&&o.a.createElement("img",{style:c({},h,i,{position:"absolute"}),src:s,alt:a}),f&&o.a.createElement("img",{style:c({},h,i,{opacity:u,transition:"opacity ".concat(t/1e3,"s ").concat(n," ").concat(r/1e3,"s")}),src:f}))}}])&&s(n.prototype,i),a&&s(n,a),t}(),h={maxWidth:"100%",maxHeight:"100%"};function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}m.defaultProps={duration:500,timingFunction:"ease",delay:0};var w=function(e){function t(e){var n,r,o,i,a,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=!(o=b(t).call(this,e))||"object"!==d(o)&&"function"!=typeof o?g(r):o,i=g(g(n)),c=void 0,(a="crossfade")in i?Object.defineProperty(i,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[a]=c,n.state={imageIndex:0},n.changeImage=n.changeImage.bind(g(g(n))),n.resize=n.resize.bind(g(g(n))),n}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,r["Component"]),n=t,(i=[{key:"changeImage",value:function(){this.state.imageIndex===this.props.images.length-1?this.setState({imageIndex:0}):this.setState({imageIndex:this.state.imageIndex+1})}},{key:"resize",value:function(){this.crossfade.querySelectorAll("img").array.forEach(function(e){var t=e.parentElement.offsetWidth;e.style.width=t+"px"})}},{key:"componentDidMount",value:function(){var e=this;if("undefined"!=typeof window){var t=this;window.addEventListener("resize",function(e){t.resize()}),this.resize(),setInterval(function(){return e.changeImage()},4e3)}}},{key:"render",value:function(){var e=this;return o.a.createElement(m,{ref:function(t){return e.crossfade=t},src:this.props.images[this.state.imageIndex],duration:1e3,timingFunction:"ease-out"})}}])&&y(n.prototype,i),a&&y(n,a),t}();function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),S(this,j(t).call(this,e))}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){return o.a.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},o.a.createElement("iframe",{src:this.props.video,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))}}])&&O(n.prototype,i),a&&O(n,a),t}();function _(e){return e.link?o.a.createElement("p",null,o.a.createElement("a",{href:e.link,class:"f5 no-underline green bg-animate hover-bg-green hover-white inline-flex items-center pa3 ba border-box"},o.a.createElement("span",{class:"pr1 f4"},e.text),o.a.createElement("svg",{class:"w1","data-icon":"chevronRight",viewBox:"0 0 32 32",fill:"currentcolor"},o.a.createElement("title",null,"chevronRight icon"),o.a.createElement("path",{d:"M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"})))):null}function P(e){return e.video?o.a.createElement(k,{video:e.video}):o.a.createElement(w,{images:e.images})}var C=function(e){return o.a.createElement("section",{id:e.id},o.a.createElement("article",{class:"cf center w-90 pt4 pb4"},o.a.createElement("div",{class:"left fl-ns w-two-thirds-ns tc ph4-ns"},o.a.createElement(P,{video:e.video,images:e.images})),o.a.createElement("div",{class:"right fl-ns center w-third-ns tl relative"},o.a.createElement("h2",{class:"absolute f3 fw4 firasans bg-white ".concat(e.color)},e.title),o.a.createElement("p",{class:"pt5 lato lh-copy f4",dangerouslySetInnerHTML:{__html:e.text}}),o.a.createElement(_,{link:e.link,text:e.linktext}))))},A=n(51);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return B});var R,W,H,B=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=T(this,z(t).call(this,e))).state={intro:{title:"A collaborative project by <a class='mid-gray no-underline underline-hover' href='https://twitter.com/abirahussein?lang=en'>Abira Hussein</a> and <a class='no-underline underline-hover' href='https://mnemoscene.io'>Mnemoscene</a>",text:"Nomad is a <a class='orange no-underline underline-hover' href='#mixed-reality'>mixed reality</a> experience premiering at the Somali Week Festival 2018. Alongside <a class='blue no-underline underline-hover' href='#workshops'>workshops</a> engaging Somali communities in London, Nomad explores the creative use of immersive and web-based technology to contextualise archival Somali <a class='green no-underline underline-hover' href='#archive'>objects</a> with the people and traditions to which they belong."},sections:[{color:"orange",id:"mixed-reality",video:"https://player.vimeo.com/video/298863478?title=0&byline=0&portrait=0",title:"Mixed Reality",text:"Nomad is a Mixed Reality experience for the Microsoft HoloLens developed by <a class='no-underline underline-hover' href='https://mnemoscene.io'>Mnemoscene.</a> The experience layers sound recordings from the British Library, digitised objects and photographs from the British Museum and Powell-Cotton Museum, and people presented as 3D holograms into the user’s real-life environment."},{color:"blue",id:"workshops",images:["/static/img/workshops.jpg","/static/img/object.jpg"],title:"Workshops",text:"This project aims to gather and share the heritage of Somali communities in London with the public. Workshops invite participants to record their own stories and create 3D models of objects from their personal collections using photogrammetry."},{color:"green",id:"archive",images:["/static/img/object.jpg"],title:"Archive",text:"A collection of 3D objects, photographs and audio recordings from the British Museum and Nomad workshops.",link:"/archive/index.html",linktext:"view archive"}]},n}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,r["Component"]),n=t,(a=[{key:"alternatingCols",value:function(){window.innerWidth<480?W.classList.add("mobile"):W.classList.remove("mobile"),Array.prototype.slice.call(H).forEach(function(e,t){if(t%2!=0){var n=e.querySelector("article"),r=n.querySelector("div");window.innerWidth<480?r.classList.contains("right")&&(n.appendChild(n.firstElementChild),n.classList.remove("switched")):r.classList.contains("left")&&(n.appendChild(n.firstElementChild),n.classList.add("switched"))}})}},{key:"componentDidMount",value:function(){R=window.innerWidth,W=document.querySelector("body"),H=this.sectionContainer.querySelectorAll("section");var e=this;window.addEventListener("resize",function(){window.innerWidth<480&&R>480?e.alternatingCols():R<480&&e.alternatingCols(),R=window.innerWidth},!0),this.alternatingCols()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(i.a,{title:"Nomad Project"},o.a.createElement("script",{src:"https://player.vimeo.com/api/player.js"})),o.a.createElement("header",{class:"vh-100 dt w-100"},o.a.createElement("div",{class:"dtc v-mid tc ph4 pv4"},o.a.createElement("h1",{class:"mt2 mb0 firasans fw6 f2 f1-ns"},"Nomad"),o.a.createElement("div",{class:"f5 f3-ns"},o.a.createElement("p",{class:"fw6 lh-copy mw8 center firasans",dangerouslySetInnerHTML:{__html:this.state.intro.title}}),o.a.createElement("p",{class:"lh-copy mw8 center firasans",dangerouslySetInnerHTML:{__html:this.state.intro.text}})),o.a.createElement("div",{class:"cf mw7 center"},o.a.createElement("a",{class:"link dim gray dib h2 w2 br-100 mr3 ",href:"https://twitter.com/hashtag/nomadproject?src=hash",title:""},o.a.createElement("svg",{"data-icon":"twitter",viewBox:"0 0 32 32",fill:"currentColor"},o.a.createElement("path",{d:"M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"}))),o.a.createElement("a",{class:"link dim gray dib br-100 h2 w2 mr3 ",href:"https://instagram.com/nomadproject.uk",title:""},o.a.createElement("svg",{class:"dib h2 w2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.414"},o.a.createElement("path",{d:"M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"}))),o.a.createElement("a",{class:"link dim gray dib br-100 h2 w2 mr3 ",href:"mailto:info@nomad-project.co.uk",title:"info@nomad-project.co.uk"},o.a.createElement("svg",{"aria-hidden":"true","data-prefix":"fas","data-icon":"envelope",class:"svg-inline--fa fa-envelope fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o.a.createElement("path",{fill:"currentColor",d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"})))))),o.a.createElement("main",{ref:function(t){return e.sectionContainer=t}},this.state.sections.map(function(e){var t=e.color,n=e.id,r=e.video,i=e.images,a=e.title,c=e.text,l=e.link,s=e.linktext;return o.a.createElement(C,{color:t,id:n,video:r,images:i,title:a,text:c,link:l,linktext:s})})),o.a.createElement(A.a,null))}}])&&M(n.prototype,a),c&&M(n,c),t}()},208:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(149),{page:e.exports.default}})}},[[208,1,0]]]);