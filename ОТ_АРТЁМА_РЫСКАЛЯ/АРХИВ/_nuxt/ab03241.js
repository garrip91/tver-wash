(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{223:function(t,e,n){var content=n(228);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("d0c5145e",content,!0,{sourceMap:!1})},226:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJCdXJnZXJfTWVudSI+PHBhdGggZD0ibTUzIDIxaC00MmMtMS43IDAtMy0xLjMtMy0zczEuMy0zIDMtM2g0MmMxLjcgMCAzIDEuMyAzIDNzLTEuMyAzLTMgM3oiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNTMgMzVoLTQyYy0xLjcgMC0zLTEuMy0zLTNzMS4zLTMgMy0zaDQyYzEuNyAwIDMgMS4zIDMgM3MtMS4zIDMtMyAzeiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im01MyA0OWgtNDJjLTEuNyAwLTMtMS4zLTMtM3MxLjMtMyAzLTNoNDJjMS43IDAgMyAxLjMgMyAzcy0xLjMgMy0zIDN6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4K"},227:function(t,e,n){"use strict";n(223)},228:function(t,e,n){var c=n(98)(!1);c.push([t.i,".nav__btn[data-v-170e048c]{position:relative;background-color:#fff;box-shadow:0 0 10px rgba(0,0,0,.25);width:35px;height:35px;padding:5px;z-index:3}@media(min-width:769px){.nav__btn[data-v-170e048c]{display:none}}.nav__list[data-v-170e048c]{display:flex;transition:top .5s}@media(max-width:768px){.nav__list[data-v-170e048c]{position:fixed;top:-100%;right:0;left:0;background-color:#fff;color:#000;height:100vh;flex-direction:column;justify-content:center;align-items:center}}.nav__list.active[data-v-170e048c]{display:flex;top:0}.nav__item[data-v-170e048c]{margin-right:34px;font-size:1.25rem}.nav__item[data-v-170e048c]:last-of-type{margin-right:0}@media(max-width:768px){.nav__item[data-v-170e048c]{margin-right:0;width:100%;text-align:center;font-size:1.5rem;font-weight:500;margin-bottom:10px}}.nav__link[data-v-170e048c]{text-decoration:none;color:inherit}@media(max-width:768px){.nav__link[data-v-170e048c]{display:block}}",""]),t.exports=c},229:function(t,e,n){"use strict";n.r(e);var c={name:"TheHeaderNav",data:function(){return{links:[{text:"Услуги",href:"/#kind"},{text:"О нас",href:"/about"},{text:"Контакты",href:"/contacts"}]}},methods:{showMenu:function(t){var e="true"===this.$refs.navBtn.getAttribute("aria-expanded");this.$refs.navBtn.setAttribute("aria-expanded",!e),e?document.body.classList.remove("fixed"):document.body.classList.add("fixed"),this.$refs.navList.classList.toggle("active")},hideMenu:function(){document.body.classList.remove("fixed")}}},o=(n(227),n(42)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("nav",{staticClass:"nav"},[c("button",{ref:"navBtn",staticClass:"nav__btn btn",attrs:{type:"button","aria-expanded":"false","aria-controls":"menu"},on:{click:t.showMenu}},[c("img",{staticClass:"nav__btn-img",attrs:{src:n(226),alt:"Burger Menu"}})]),t._v(" "),c("ul",{ref:"navList",staticClass:"nav__list",attrs:{id:"menu"}},t._l(t.links,(function(link,e){return c("li",{key:e,staticClass:"nav__item",on:{click:t.hideMenu}},[c("NuxtLink",{staticClass:"nav__link",attrs:{to:link.href}},[t._v("\n        "+t._s(link.text)+"\n      ")])],1)})),0)])}),[],!1,null,"170e048c",null);e.default=component.exports}}]);