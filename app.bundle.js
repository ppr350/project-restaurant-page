"use strict";(self.webpackChunkproject_restaurant_page=self.webpackChunkproject_restaurant_page||[]).push([[143],{426:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(81),a=t.n(o),r=t(645),c=t.n(r)()(a());c.push([e.id,'*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: "Turista Gorda NF W01 Regular";\n    src: url("https://db.onlinewebfonts.com/t/3cfe6d7e2919d98e0c6994d3dfbeda2c.eot");\n    src: url("https://db.onlinewebfonts.com/t/3cfe6d7e2919d98e0c6994d3dfbeda2c.eot?#iefix")format("embedded-opentype"),\n    url("https://db.onlinewebfonts.com/t/3cfe6d7e2919d98e0c6994d3dfbeda2c.woff2")format("woff2"),\n    url("https://db.onlinewebfonts.com/t/3cfe6d7e2919d98e0c6994d3dfbeda2c.woff")format("woff"),\n    url("https://db.onlinewebfonts.com/t/3cfe6d7e2919d98e0c6994d3dfbeda2c.ttf")format("truetype"),\n    url("https://db.onlinewebfonts.com/t/3cfe6d7e2919d98e0c6994d3dfbeda2c.svg#Turista Gorda NF W01 Regular")format("svg");\n}\n\nhtml {\n    height: 100%;\n    font-family: "Turista Gorda NF W01 Regular";\n}\n\nbody {\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: rgb(38, 38, 38);\n}\n\n#content {\n    flex: 1 0 auto;\n}\n\n.content-box {\n    max-width: calc(80% - 80px);\n    margin: 0 auto;\n}\n\n.top-menu {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    font-size: clamp(2rem, 1.286rem + 1.905vw, 3rem);\n    color: rgb(233, 210, 0);\n    text-align: center;\n    list-style: none;\n}\n\n.selected-content {\n    margin-top: 1rem;\n}\n\n.top-menu-options {\n    cursor: pointer;\n}\n\n.images {\n    width: 100%;\n    max-width: 100%;\n}\n\nul .active {\n    color: white;\n}\n\nli:hover,\nli:focus {\n    color: white;\n}\n\n.active {\n    display: block;\n}\n\nh1 {\n    font-size: clamp(2rem, 1.286rem + 1.905vw, 3rem);\n    color: rgb(233, 210, 0);\n    text-align: center;\n}\n\nh2 {\n    font-size: clamp(0.75rem, 0.214rem + 1.429vw, 1.5rem);\n    font-weight: lighter;\n    color: rgb(243, 243, 243);\n    text-align: center;\n}\n\nh3 {\n    font-size: clamp(0.6rem, 0.1rem + 1.333vw, 1.3rem);\n    font-weight: lighter;\n    color: rgb(243, 243, 243);\n}\n\nfooter {\n    flex-shrink: 0;\n    max-width: calc(80% - 80px);\n    margin: 0 auto;\n}',""]);const s=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&c[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},c=[],s=0;s<e.length;s++){var i=e[s],d=o.base?i[0]+o.base:i[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=t(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=a(m,o);o.byIndex=s,n.splice(s,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var s=t(r[c]);n[s].references--}for(var i=o(e,a),d=0;d<r.length;d++){var l=t(r[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=i}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},52:(e,n,t)=>{var o=t(379),a=t.n(o),r=t(795),c=t.n(r),s=t(569),i=t.n(s),d=t(565),l=t.n(d),u=t(216),p=t.n(u),m=t(589),f=t.n(m),h=t(426),b={};b.styleTagTransform=f(),b.setAttributes=l(),b.insert=i().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=p(),a()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals;const g=t.p+"94b52210d781b3db76cd.jpg",v=t.p+"398d25f7294a6a5e04f8.jpg",y=t.p+"26a5291e58ffeb49fc12.jpg";function w(e){const n=e.target,t=document.querySelectorAll(".top-menu-options"),o=e.target.classList[0]+"-tab",a=document.getElementById(o);let r=document.querySelectorAll(".inside-tab-content");for(let e=0;e<r.length;e++)t[e].classList.remove("active"),r[e].style.display="none";n.classList.add("active"),a.style.display="block"}!function(){const e=document.querySelector("#content"),n=document.createElement("ul");n.classList.add("top-menu"),e.appendChild(n),function(){const e=["home","menu","about"],n=document.querySelector(".top-menu");for(let t=0;t<e.length;t++){const o=document.createElement("li");o.classList.add(e[t]),o.classList.add("top-menu-options"),o.innerText=e[t].toUpperCase(),n.appendChild(o),document.querySelectorAll(".top-menu-options").forEach((e=>{e.addEventListener("click",w)}))}}(),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("tab-content"),e.appendChild(n)}(),function(){const e=document.querySelector(".tab-content"),n=document.createElement("div");n.setAttribute("id","home-tab"),n.classList.add("inside-tab-content"),n.style.display="none",e.appendChild(n);const t=document.createElement("h1");t.classList.add("home-title"),t.innerText="KOBE'S KITCH",n.appendChild(t);const o=new Image;o.src=g,o.classList.add("images"),n.appendChild(o);const a=document.createElement("h1");a.classList.add("message"),a.innerText="We love what we are doing",n.appendChild(a)}(),function(){const e=document.querySelector(".tab-content"),n=document.createElement("div");n.setAttribute("id","menu-tab"),n.classList.add("inside-tab-content"),n.style.display="none",e.appendChild(n);const t=document.createElement("h1");t.classList.add("menu-title"),t.innerText="MENU",n.appendChild(t);const o=new Image;o.src=v,o.classList.add("images"),n.appendChild(o);const a=document.createElement("h1");a.classList.add("message"),a.innerText="Contact us for our menu!",n.appendChild(a)}(),function(){const e=document.querySelector(".tab-content"),n=document.createElement("div");n.setAttribute("id","about-tab"),n.classList.add("inside-tab-content"),n.style.display="none",e.appendChild(n);const t=document.createElement("h1");t.classList.add("about-title"),t.innerText="ABOUT",n.appendChild(t);const o=new Image;o.src=y,o.classList.add("images"),n.appendChild(o);const a=document.createElement("h1");a.classList.add("message"),a.innerText="kobe@kitch.ie",n.appendChild(a)}(),document.querySelector(".home").click()}()}},e=>{e(e.s=52)}]);