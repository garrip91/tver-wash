(window.webpackJsonp=window.webpackJsonp||[]).push([[17,10,11],{223:function(t,e,n){var content=n(228);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("d0c5145e",content,!0,{sourceMap:!1})},224:function(t,e,n){var content=n(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("53761543",content,!0,{sourceMap:!1})},225:function(t,e,n){t.exports=n.p+"img/logo.c3c8290.svg"},226:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJCdXJnZXJfTWVudSI+PHBhdGggZD0ibTUzIDIxaC00MmMtMS43IDAtMy0xLjMtMy0zczEuMy0zIDMtM2g0MmMxLjcgMCAzIDEuMyAzIDNzLTEuMyAzLTMgM3oiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNTMgMzVoLTQyYy0xLjcgMC0zLTEuMy0zLTNzMS4zLTMgMy0zaDQyYzEuNyAwIDMgMS4zIDMgM3MtMS4zIDMtMyAzeiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im01MyA0OWgtNDJjLTEuNyAwLTMtMS4zLTMtM3MxLjMtMyAzLTNoNDJjMS43IDAgMyAxLjMgMyAzcy0xLjMgMy0zIDN6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4K"},227:function(t,e,n){"use strict";n(223)},228:function(t,e,n){var o=n(98)(!1);o.push([t.i,".nav__btn[data-v-170e048c]{position:relative;background-color:#fff;box-shadow:0 0 10px rgba(0,0,0,.25);width:35px;height:35px;padding:5px;z-index:3}@media(min-width:769px){.nav__btn[data-v-170e048c]{display:none}}.nav__list[data-v-170e048c]{display:flex;transition:top .5s}@media(max-width:768px){.nav__list[data-v-170e048c]{position:fixed;top:-100%;right:0;left:0;background-color:#fff;color:#000;height:100vh;flex-direction:column;justify-content:center;align-items:center}}.nav__list.active[data-v-170e048c]{display:flex;top:0}.nav__item[data-v-170e048c]{margin-right:34px;font-size:1.25rem}.nav__item[data-v-170e048c]:last-of-type{margin-right:0}@media(max-width:768px){.nav__item[data-v-170e048c]{margin-right:0;width:100%;text-align:center;font-size:1.5rem;font-weight:500;margin-bottom:10px}}.nav__link[data-v-170e048c]{text-decoration:none;color:inherit}@media(max-width:768px){.nav__link[data-v-170e048c]{display:block}}",""]),t.exports=o},229:function(t,e,n){"use strict";n.r(e);var o={name:"TheHeaderNav",data:function(){return{links:[{text:"Услуги",href:"/#kind"},{text:"О нас",href:"/about"},{text:"Контакты",href:"/contacts"}]}},methods:{showMenu:function(t){var e="true"===this.$refs.navBtn.getAttribute("aria-expanded");this.$refs.navBtn.setAttribute("aria-expanded",!e),e?document.body.classList.remove("fixed"):document.body.classList.add("fixed"),this.$refs.navList.classList.toggle("active")},hideMenu:function(){document.body.classList.remove("fixed")}}},r=(n(227),n(42)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"nav"},[o("button",{ref:"navBtn",staticClass:"nav__btn btn",attrs:{type:"button","aria-expanded":"false","aria-controls":"menu"},on:{click:t.showMenu}},[o("img",{staticClass:"nav__btn-img",attrs:{src:n(226),alt:"Burger Menu"}})]),t._v(" "),o("ul",{ref:"navList",staticClass:"nav__list",attrs:{id:"menu"}},t._l(t.links,(function(link,e){return o("li",{key:e,staticClass:"nav__item",on:{click:t.hideMenu}},[o("NuxtLink",{staticClass:"nav__link",attrs:{to:link.href}},[t._v("\n        "+t._s(link.text)+"\n      ")])],1)})),0)])}),[],!1,null,"170e048c",null);e.default=component.exports},230:function(t,e,n){"use strict";n(224)},231:function(t,e,n){var o=n(98)(!1);o.push([t.i,".header[data-v-6e0902ce]{display:flex;justify-content:space-between;align-items:center;position:absolute;top:0;padding-top:24px;padding-bottom:24px;color:#fff}@media(max-width:768px){.header__phone[data-v-6e0902ce]{display:none}}",""]),t.exports=o},233:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header__logo",attrs:{href:"/"}},[e("img",{attrs:{src:n(225),alt:"Logo"}})])}],r={name:"TheHeader",props:["isBlack"]},c=(n(230),n(42)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header container"},[t._m(0),t._v(" "),n("TheHeaderNav"),t._v(" "),n("a",{staticClass:"header__phone btn btn--primary",attrs:{href:"tel:+79000000000"}},[t._v("+7 (900) 000-00-00")])],1)}),o,!1,null,"6e0902ce",null);e.default=component.exports;installComponents(component,{TheHeaderNav:n(229).default})},275:function(t,e,n){var content=n(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("76c1c73e",content,!0,{sourceMap:!1})},289:function(t,e,n){"use strict";n(275)},290:function(t,e,n){var o=n(98)(!1);o.push([t.i,".header[data-v-67fafbab]{color:#000!important}.section.container[data-v-67fafbab]{margin-top:144px}@media(max-width:768px){.section.container[data-v-67fafbab]{margin-top:11%}}@media(max-width:425px){.section.container[data-v-67fafbab]{margin-top:20%}}.heading.heading--h1[data-v-67fafbab]{margin-bottom:4%}",""]),t.exports=o},300:function(t,e,n){"use strict";n.r(e);var o={name:"privacy",head:{title:"Политика конфиденциальности - ZA-Remont",meta:[{name:"description",content:"Здесь описание политики конфиденциальности!"}]}},r=(n(289),n(42)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TheHeader"),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section container"},[n("h1",{staticClass:"heading heading--h1"},[t._v("Политика конфиденциальности")]),t._v(" "),n("p",{staticClass:"description description--secondary"},[t._v("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    ")]),t._v(" "),n("p",{staticClass:"description description--secondary"},[t._v("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    ")]),t._v(" "),n("p",{staticClass:"description description--secondary"},[t._v("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    ")])])}],!1,null,"67fafbab",null);e.default=component.exports;installComponents(component,{TheHeader:n(233).default})}}]);