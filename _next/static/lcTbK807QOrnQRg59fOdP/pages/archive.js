(window.webpackJsonp=window.webpackJsonp||[]).push([["bdd2"],{"1RlH":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/archive",function(){var e=a("PVZq");return{page:e.default||e}}])},PVZq:function(e,t,a){"use strict";a.r(t);var n=a("0iUn"),r=a("sLSF"),i=a("MI3g"),s=a("a7VT"),c=a("Tit0"),l=a("q1tI"),o=a.n(l),m=a("tXcZ"),u=a("aIN1"),d=a("UXZV"),f=a.n(d),h=a("AT/M"),g=a("vYYK"),p=function(e){function t(e){var a;return Object(n.default)(this,t),a=Object(i.default)(this,Object(s.default)(t).call(this,e)),Object(g.a)(Object(h.default)(a),"uvEl",void 0),Object(g.a)(Object(h.default)(a),"uv",void 0),Object(g.a)(Object(h.default)(a),"uvstate",void 0),Object(g.a)(Object(h.default)(a),"urlDataProvider",void 0),a}return Object(c.default)(t,e),Object(r.default)(t,[{key:"openManifest",value:function(){this.uvEl.style.display="block",this.props.scrollIntoView&&this.uvEl.scrollIntoView(),this.uv.set(f()({},this.uvstate,{collectionIndex:0,manifestIndex:0,sequenceIndex:0,canvasIndex:0}))}},{key:"componentWillMount",value:function(){if("undefined"!=typeof window){var e=this;window.addEventListener("uvLoaded",function(t){e.urlDataProvider=new UV.URLDataProvider,e.uvstate={root:e.props.root,configUri:e.props.configUri,locales:[{name:"en-GB"}],iiifResourceUri:"",collectionIndex:Number(e.urlDataProvider.get("c",0)),manifestIndex:Number(e.urlDataProvider.get("m",0)),sequenceIndex:Number(e.urlDataProvider.get("s",0)),canvasIndex:Number(e.urlDataProvider.get("cv",0)),rotation:Number(e.urlDataProvider.get("r",0)),xywh:e.urlDataProvider.get("xywh","")},e.uvEl=document.querySelector("#"+e.props.id||!1),e.uv=createUV(e.uvEl,e.uvstate,e.urlDataProvider),e.uv.on("created",function(){Utils.Urls.setHashParameter("manifest",e.uvstate.iiifResourceUri)}),e.uvstate.iiifResourceUri=Utils.Urls.getHashParameter("manifest"),e.uvstate.iiifResourceUri&&e.openManifest()},!1)}}},{key:"componentWillReceiveProps",value:function(e){this.uvstate&&e.manifest&&this.uvstate.iiifResourceUri!==e.manifest&&(this.uvstate.iiifResourceUri=e.manifest,this.openManifest())}},{key:"render",value:function(){return o.a.createElement("div",{id:"uv",class:"uv"})}}]),t}(l.Component);a.d(t,"default",function(){return v});var v=function(e){function t(e){var a;return Object(n.default)(this,t),(a=Object(i.default)(this,Object(s.default)(t).call(this,e))).state={manifest:"https://nomad-project.co.uk/objects/collection/index.json",headerMessage:"",uv:{root:"../static/uv",configUri:"../static/uv.json",manifest:""}},a}return Object(c.default)(t,e),Object(r.default)(t,[{key:"componentWillMount",value:function(){if("undefined"!=typeof window){var e=this;console.log("component will mount"),window.addEventListener("uvLoaded",function(t){console.log("uv loaded");var a=document.querySelector("iiif-gallery");a.addEventListener("onSelectManifest",function(t){e.setState(function(e,a){return{uv:{manifest:t.detail.id}}})}),console.log("set manifest:",e.state.manifest),a.manifest=e.state.manifest},!1)}}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m.a,{title:"Archive"},o.a.createElement("script",{src:"https://unpkg.com/iiif-gallery@0.0.26/dist/iiifgallery.js"}),o.a.createElement("script",{src:"/static/uv/lib/offline.js"}),o.a.createElement("script",{src:"/static/uv/helpers.js"})),o.a.createElement("header",{class:"pa3 overflow-hidden"},o.a.createElement("a",{href:"/index.html",class:"db fl f5 lato no-underline green bg-animate hover-bg-green hover-white inline-flex items-center pa3 ba border-box mr4"},o.a.createElement("svg",{class:"w1","data-icon":"chevronLeft",viewBox:"0 0 32 32",fill:"currentcolor"},o.a.createElement("title",null,"chevronLeft icon"),o.a.createElement("path",{d:"M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"})),o.a.createElement("span",{class:"pl1 f4"},"go back")),o.a.createElement("div",{class:"db fl pt3 lato lh-copy",dangerouslySetInnerHTML:{__html:this.state.headerMessage}})),o.a.createElement("main",null,o.a.createElement(p,{id:"uv",root:this.state.uv.root,configUri:this.state.uv.configUri,manifest:this.state.uv.manifest,scrollIntoView:"true"}),o.a.createElement("iiif-gallery",{ignore:this.state.ignore})),o.a.createElement(u.a,null),o.a.createElement("script",{async:!0,src:"/static/uv/uv.js"}))}}]),t}(l.Component)},aIN1:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(e){return r.a.createElement("footer",{class:"pv4 ph3 ph5-m ph6-l mid-gray bg-light-gray"},r.a.createElement("p",{class:"f3 firasans fw4 mw7 tc center"},"with thanks to"),r.a.createElement("div",{class:"pv4 ph3 ph5-ns tc"},r.a.createElement("a",{class:"dib h4 w4 mr3 mb4",href:"http://www.kayd.org/"},r.a.createElement("img",{src:"/static/img/kayd-logo.png",style:{height:"100px;"},alt:"KAYD Somali Arts and Culture"})),r.a.createElement("a",{class:"dib h4 w4 mr3 mb4",href:"https://www.hlf.org.uk/"},r.a.createElement("img",{src:"/static/img/hlf-logo.png",alt:"Heritage Lottery Fund"})),r.a.createElement("a",{class:"dib h4 w4 mr3 mb2",href:"http://www.sussex.ac.uk/shl/"},r.a.createElement("img",{src:"/static/img/sussex-humanities-lab.jpg",alt:"Sussex University Humanities Lab"})),r.a.createElement("a",{class:"dib h4 w4 mr3 mb2",href:"http://www.bl.uk"},r.a.createElement("img",{src:"/static/img/BL-logo.jpg",alt:"British Library"})),r.a.createElement("a",{class:"dib h4 w4 mr3 mb2",href:"http://www.britishmuseum.org"},r.a.createElement("img",{src:"/static/img/BM-logo.png",alt:"British Museum"})),r.a.createElement("a",{class:"dib h4 w4 mr3 mb2",href:"http://www.quexpark.co.uk/museum/"},r.a.createElement("img",{src:"/static/img/powell-cotton-logo.png",alt:"Powell Cotton Museum"})),r.a.createElement("a",{class:"dib h4 w4 mr3 mb2",href:"https://www.thefuseboxbrighton.com/"},r.a.createElement("img",{src:"/static/img/fusebox-logo.png",alt:"The FuseBox"}))),r.a.createElement("small",{class:"db tc"},r.a.createElement("p",{class:"f6 fw3 lato"},"Built by ",r.a.createElement("a",{href:"https://mnemoscene.io"},"Mnemoscene")," using ",r.a.createElement("a",{href:"https://universalviewer.io"},"Universal Viewer")),r.a.createElement("p",{class:"f6 fw3 lato"},"icons via ",r.a.createElement("a",{href:"https://fontawesome.com"},"Font Awesome"))),e.children)}},tXcZ:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("m/Pd"),s=a.n(i),c="https://nomad-project.co.uk/static/img/nomad-og.jpg",l="UA-126420986-1";t.a=function(e){return r.a.createElement(s.a,null,r.a.createElement("meta",{charSet:"UTF-8"}),r.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(l)}),r.a.createElement("script",{dangerouslySetInnerHTML:{__html:"\n\t\t\twindow.dataLayer = window.dataLayer || [];\n\t\t\tfunction gtag(){dataLayer.push(arguments);}\n\t\t\tgtag('js', new Date());\n\t\t\tgtag('config', '".concat(l,"');\n\t\t\t")}}),r.a.createElement("title",null,e.title||""),r.a.createElement("meta",{name:"description",content:e.description||"Nomad Project"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.a.createElement("link",{rel:"icon",href:"/static/favicon.ico"}),r.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://unpkg.com/tachyons/css/tachyons.min.css"}),r.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/static/css/styles.css"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Fira+Sans",rel:"stylesheet"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Merriweather",rel:"stylesheet"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lato",rel:"stylesheet"}),r.a.createElement("meta",{property:"og:url",content:e.url||"https://nomad-project.co.uk"}),r.a.createElement("meta",{property:"og:title",content:e.title||""}),r.a.createElement("meta",{property:"og:description",content:e.description||"Nomad Project"}),r.a.createElement("meta",{name:"twitter:site",content:e.url||"https://nomad-project.co.uk"}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:image",content:e.ogImage||c}),r.a.createElement("meta",{property:"og:image",content:e.ogImage||c}),r.a.createElement("meta",{property:"og:image:width",content:"1200"}),r.a.createElement("meta",{property:"og:image:height",content:"630"}),e.children)}},vYYK:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a("hfKm"),r=a.n(n);function i(e,t,a){return t in e?r()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}}},[["1RlH","5d41","9da1"]]]);