(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{149:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(52);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){function t(e){var n,r,o,i,l,s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=!(o=c(t).call(this,e))||"object"!==a(o)&&"function"!=typeof o?u(r):o,i=u(u(n)),s=void 0,(l="iframe")in i?Object.defineProperty(i,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[l]=s,n}var n,i,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:"padding:56.25% 0 0 0;position:relative;"},o.a.createElement("iframe",{ref:function(t){return e.iframe=t},src:this.props.video,style:{position:absolute,top:0,left:0,width:"100%",height:"100%"},frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))}}])&&l(n.prototype,i),m&&l(n,m),t}();function f(e){return e.link?o.a.createElement("p",null,o.a.createElement("a",{href:e.link,class:"f5 no-underline green bg-animate hover-bg-green hover-white inline-flex items-center pa3 ba border-box"},o.a.createElement("span",{class:"pr1 f4"},e.text),o.a.createElement("svg",{class:"w1","data-icon":"chevronRight",viewBox:"0 0 32 32",fill:"currentcolor"},o.a.createElement("title",null,"chevronRight icon"),o.a.createElement("path",{d:"M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"})))):null}function d(e){return e.video?o.a.createElement(m,{video:e.video,maxwidth:e.maxwidth}):o.a.createElement("img",{src:e.img,alt:e.title,class:"w-80-ns",style:{maxWidth:e.maxwidth}})}var h=function(e){return o.a.createElement("section",{id:e.id},o.a.createElement("article",{class:"cf center w-90 pt4 pb4"},o.a.createElement("div",{class:"left fl-ns w-two-thirds-ns tc"},o.a.createElement(d,{video:e.video,img:e.img,maxwidth:1024})),o.a.createElement("div",{class:"right fl-ns center w-third-ns tl relative"},o.a.createElement("h2",{class:"absolute f3 fw4 firasans green bg-white pa2",style:{left:"-30%"}},e.title),o.a.createElement("p",{class:"pt5 lato lh-copy f4",dangerouslySetInnerHTML:{__html:e.text}}),o.a.createElement(f,{link:e.link,text:e.linktext}))))},p=n(51);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return k});var E,x,j,k=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=v(this,w(t).call(this,e))).state={intro:{title:"A collaborative project by <a class='mid-gray no-underline underline-hover' href='https://twitter.com/abirahussein?lang=en'>Abira Hussein</a> and <a class='no-underline underline-hover' href='https://mnemoscene.io'>Mnemoscene</a>",text:"Nomad is a <a class='orange no-underline underline-hover' href='#mixed-reality'>mixed reality</a> experience premiering at the Somali Week Festival 2018. Alongside <a class='blue no-underline underline-hover' href='#workshops'>workshops</a> engaging Somali communities in London, Nomad explores the creative use of immersive and web-based technology to contextualise archival Somali <a class='green no-underline underline-hover' href='#objects'>objects</a> with the people and traditions to which they belong."},sections:[{id:"mixed-reality",video:"https://player.vimeo.com/video/97911584?title=0&byline=0&portrait=0",title:"Mixed Reality",text:"Nomad is a Mixed Reality experience for the Microsoft HoloLens developed by <a class='no-underline underline-hover' href='https://mnemoscene.io'>Mnemoscene.</a> The experience layers sound recordings from the British Library, digitised objects and photographs from the British Museum and Powell-Cotton Museum, and people presented as 3D holograms into the user’s real-life environment."},{id:"workshops",img:"/static/img/workshops.jpg",title:"Workshops",text:"This project aims to gather and share the heritage of Somali communities in London with the public. Workshops invite participants to record their own stories and create 3D models of objects from their personal collections using photogrammetry."},{id:"objects",img:"/static/img/object.jpg",title:"Objects",text:"A collection of 3D objects, photographs and audio recordings from the British Museum and Nomad workshops.",link:"/objects/index.html",linktext:"view objects"}]},n}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,r["Component"]),n=t,(a=[{key:"alternatingCols",value:function(){window.innerWidth<480?x.classList.add("mobile"):x.classList.remove("mobile"),Array.prototype.slice.call(j).forEach(function(e,t){if(t%2!=0){var n=e.querySelector("article"),r=n.querySelector("div");window.innerWidth<480?r.classList.contains("right")&&(n.appendChild(n.firstElementChild),n.classList.remove("switched")):r.classList.contains("left")&&(n.appendChild(n.firstElementChild),n.classList.add("switched"))}})}},{key:"componentDidMount",value:function(){E=window.innerWidth,x=document.querySelector("body"),j=this.sectionContainer.querySelectorAll("section");var e=this;window.addEventListener("resize",function(){window.innerWidth<480&&E>480?e.alternatingCols():E<480&&e.alternatingCols(),E=window.innerWidth},!0),this.alternatingCols()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(i.a,{title:"Nomad Project"},o.a.createElement("script",{src:"https://player.vimeo.com/api/player.js"})),o.a.createElement("header",{class:"vh-100 dt w-100"},o.a.createElement("div",{class:"dtc v-mid tc ph4 pv4"},o.a.createElement("h1",{class:"mt2 mb0 firasans fw6 f2 f1-ns"},"Nomad"),o.a.createElement("div",{class:"f5 f3-ns"},o.a.createElement("p",{class:"fw6 lh-copy mw8 center firasans",dangerouslySetInnerHTML:{__html:this.state.intro.title}}),o.a.createElement("p",{class:"lh-copy mw8 center firasans",dangerouslySetInnerHTML:{__html:this.state.intro.text}})),o.a.createElement("div",{class:"cf mw7 center"},o.a.createElement("a",{class:"link dim gray dib h2 w2 br-100 mr3 ",href:"https://twitter.com/hashtag/nomadproject?src=hash",title:""},o.a.createElement("svg",{"data-icon":"twitter",viewBox:"0 0 32 32",fill:"currentColor"},o.a.createElement("path",{d:"M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"}))),o.a.createElement("a",{class:"link dim gray dib br-100 h2 w2 mr3 ",href:"https://instagram.com/nomadproject.uk",title:""},o.a.createElement("svg",{class:"dib h2 w2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.414"},o.a.createElement("path",{d:"M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"}))),o.a.createElement("a",{class:"link dim gray dib br-100 h2 w2 mr3 ",href:"mailto:info@nomad-project.co.uk",title:"info@nomad-project.co.uk"},o.a.createElement("svg",{"aria-hidden":"true","data-prefix":"fas","data-icon":"envelope",class:"svg-inline--fa fa-envelope fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o.a.createElement("path",{fill:"currentColor",d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"})))))),o.a.createElement("main",{ref:function(t){return e.sectionContainer=t}},this.state.sections.map(function(e){var t=e.id,n=e.video,r=e.img,i=e.title,a=e.text,l=e.link,c=e.linktext;return o.a.createElement(h,{id:t,video:n,img:r,title:i,text:a,link:l,linktext:c})})),o.a.createElement(p.a,null))}}])&&y(n.prototype,a),l&&y(n,l),t}()},208:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(149),{page:e.exports.default}})}},[[208,1,0]]]);