(window.webpackJsonp=window.webpackJsonp||[]).push([[16,7,8,10,11],{223:function(t,e,n){var content=n(228);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("d0c5145e",content,!0,{sourceMap:!1})},224:function(t,e,n){var content=n(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("53761543",content,!0,{sourceMap:!1})},225:function(t,e,n){t.exports=n.p+"img/logo.c3c8290.svg"},226:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJCdXJnZXJfTWVudSI+PHBhdGggZD0ibTUzIDIxaC00MmMtMS43IDAtMy0xLjMtMy0zczEuMy0zIDMtM2g0MmMxLjcgMCAzIDEuMyAzIDNzLTEuMyAzLTMgM3oiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtNTMgMzVoLTQyYy0xLjcgMC0zLTEuMy0zLTNzMS4zLTMgMy0zaDQyYzEuNyAwIDMgMS4zIDMgM3MtMS4zIDMtMyAzeiIgZmlsbD0iIzAwMDAwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im01MyA0OWgtNDJjLTEuNyAwLTMtMS4zLTMtM3MxLjMtMyAzLTNoNDJjMS43IDAgMyAxLjMgMyAzcy0xLjMgMy0zIDN6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4K"},227:function(t,e,n){"use strict";n(223)},228:function(t,e,n){var o=n(98)(!1);o.push([t.i,".nav__btn[data-v-170e048c]{position:relative;background-color:#fff;box-shadow:0 0 10px rgba(0,0,0,.25);width:35px;height:35px;padding:5px;z-index:3}@media(min-width:769px){.nav__btn[data-v-170e048c]{display:none}}.nav__list[data-v-170e048c]{display:flex;transition:top .5s}@media(max-width:768px){.nav__list[data-v-170e048c]{position:fixed;top:-100%;right:0;left:0;background-color:#fff;color:#000;height:100vh;flex-direction:column;justify-content:center;align-items:center}}.nav__list.active[data-v-170e048c]{display:flex;top:0}.nav__item[data-v-170e048c]{margin-right:34px;font-size:1.25rem}.nav__item[data-v-170e048c]:last-of-type{margin-right:0}@media(max-width:768px){.nav__item[data-v-170e048c]{margin-right:0;width:100%;text-align:center;font-size:1.5rem;font-weight:500;margin-bottom:10px}}.nav__link[data-v-170e048c]{text-decoration:none;color:inherit}@media(max-width:768px){.nav__link[data-v-170e048c]{display:block}}",""]),t.exports=o},229:function(t,e,n){"use strict";n.r(e);var o={name:"TheHeaderNav",data:function(){return{links:[{text:"Услуги",href:"/#kind"},{text:"О нас",href:"/about"},{text:"Контакты",href:"/contacts"}]}},methods:{showMenu:function(t){var e="true"===this.$refs.navBtn.getAttribute("aria-expanded");this.$refs.navBtn.setAttribute("aria-expanded",!e),e?document.body.classList.remove("fixed"):document.body.classList.add("fixed"),this.$refs.navList.classList.toggle("active")},hideMenu:function(){document.body.classList.remove("fixed")}}},r=(n(227),n(42)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"nav"},[o("button",{ref:"navBtn",staticClass:"nav__btn btn",attrs:{type:"button","aria-expanded":"false","aria-controls":"menu"},on:{click:t.showMenu}},[o("img",{staticClass:"nav__btn-img",attrs:{src:n(226),alt:"Burger Menu"}})]),t._v(" "),o("ul",{ref:"navList",staticClass:"nav__list",attrs:{id:"menu"}},t._l(t.links,(function(link,e){return o("li",{key:e,staticClass:"nav__item",on:{click:t.hideMenu}},[o("NuxtLink",{staticClass:"nav__link",attrs:{to:link.href}},[t._v("\n        "+t._s(link.text)+"\n      ")])],1)})),0)])}),[],!1,null,"170e048c",null);e.default=component.exports},230:function(t,e,n){"use strict";n(224)},231:function(t,e,n){var o=n(98)(!1);o.push([t.i,".header[data-v-6e0902ce]{display:flex;justify-content:space-between;align-items:center;position:absolute;top:0;padding-top:24px;padding-bottom:24px;color:#fff}@media(max-width:768px){.header__phone[data-v-6e0902ce]{display:none}}",""]),t.exports=o},233:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"header__logo",attrs:{href:"/"}},[e("img",{attrs:{src:n(225),alt:"Logo"}})])}],r={name:"TheHeader",props:["isBlack"]},l=(n(230),n(42)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header container"},[t._m(0),t._v(" "),n("TheHeaderNav"),t._v(" "),n("a",{staticClass:"header__phone btn btn--primary",attrs:{href:"tel:+79000000000"}},[t._v("+7 (900) 000-00-00")])],1)}),o,!1,null,"6e0902ce",null);e.default=component.exports;installComponents(component,{TheHeaderNav:n(229).default})},235:function(t,e,n){var content=n(243);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("9ece1a9a",content,!0,{sourceMap:!1})},242:function(t,e,n){"use strict";n(235)},243:function(t,e,n){var o=n(98)(!1);o.push([t.i,".footer[data-v-4caa5986]{justify-content:space-between;align-items:center;background-color:#000;padding-top:20px;padding-bottom:20px}.footer[data-v-4caa5986],.footer__nav-list[data-v-4caa5986]{display:flex}.footer__nav-item[data-v-4caa5986]{margin-right:30px}.footer__nav-item[data-v-4caa5986]:last-of-type{margin-right:0}@media(max-width:768px){.footer__nav-item[data-v-4caa5986]{display:none}}.footer__nav-link[data-v-4caa5986]{text-decoration:none;color:#fff}",""]),t.exports=o},247:function(t,e,n){var content=n(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("c0913d66",content,!0,{sourceMap:!1})},248:function(t,e,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("79ef8e76",content,!0,{sourceMap:!1})},249:function(t,e,n){var content=n(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("fd8f763a",content,!0,{sourceMap:!1})},252:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"footer__logo",attrs:{href:"/"}},[e("img",{attrs:{src:n(225),alt:"Logo"}})])}],r={name:"TheFooter"},l=(n(242),n(42)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer container"},[t._m(0),t._v(" "),n("nav",{staticClass:"footer__nav"},[n("ul",{staticClass:"footer__nav-list"},[n("li",{staticClass:"footer__nav-item"},[n("NuxtLink",{staticClass:"footer__nav-link",attrs:{to:"/privacy"}},[t._v("\n          Политика конфиденциальности\n        ")])],1),t._v(" "),n("li",{staticClass:"footer__nav-item"},[n("NuxtLink",{staticClass:"footer__nav-link",attrs:{to:"/data"}},[t._v("\n          Политика обработки данных\n        ")])],1)])]),t._v(" "),n("a",{staticClass:"footer__phone btn btn--primary",attrs:{href:"tel:+79000000000"}},[t._v("+7 (900) 000-00-00")])])}),o,!1,null,"4caa5986",null);e.default=component.exports},261:function(t,e,n){t.exports=n.p+"img/lg.ed76f3e.svg"},262:function(t,e,n){t.exports=n.p+"img/samsung.2694713.svg"},263:function(t,e,n){t.exports=n.p+"img/beko.b2e1670.svg"},264:function(t,e,n){t.exports=n.p+"img/bosch.381e590.svg"},265:function(t,e,n){"use strict";n(247)},266:function(t,e,n){var o=n(98)(!1);o.push([t.i,".kind-gallery[data-v-9300a482]{display:flex;flex-wrap:nowrap;justify-content:space-between;align-items:center}@media(max-width:768px){.kind-gallery__item[data-v-9300a482]{width:18%}}.section[data-v-9300a482]{padding-top:90px;padding-bottom:90px}.description[data-v-9300a482]{max-width:750px}.description[data-v-9300a482],.heading[data-v-9300a482]{margin-bottom:30px}",""]),t.exports=o},267:function(t,e,n){"use strict";n(248)},268:function(t,e,n){var o=n(98),r=n(251),l=n(269),d=o(!1),c=r(l);d.push([t.i,".benefits[data-v-4e05bd9d]{display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:20%;-moz-column-gap:20%;column-gap:20%}.benefits__item[data-v-4e05bd9d]{background-color:#fff;color:#000;font-size:1.5rem;font-weight:600;padding:6% 5px;border-radius:9px;text-align:center;cursor:pointer}@media screen and (max-width:1024px){.benefits__item[data-v-4e05bd9d]{font-size:1.1rem}}@media screen and (max-width:425px){.benefits__item[data-v-4e05bd9d]{font-size:1rem}}@media screen and (max-width:1024px){.benefits[data-v-4e05bd9d]{grid-column-gap:5%;-moz-column-gap:5%;column-gap:5%}}@media(max-width:425px){.benefits[data-v-4e05bd9d]{grid-template-columns:1fr;grid-row-gap:5%;row-gap:5%;font-size:1rem}}.section[data-v-4e05bd9d]{background-image:url("+c+");padding-top:82px;padding-bottom:107px}.description[data-v-4e05bd9d]{max-width:auto}.description[data-v-4e05bd9d],.heading[data-v-4e05bd9d]{margin-bottom:6%}",""]),t.exports=d},269:function(t,e,n){t.exports=n.p+"img/benefits.9abf1bb.png"},270:function(t,e,n){"use strict";n(249)},271:function(t,e,n){var o=n(98)(!1);o.push([t.i,".section[data-v-d1339be0]{padding-top:82px;padding-bottom:74px}.description[data-v-d1339be0]{max-width:none}.description[data-v-d1339be0],.heading[data-v-d1339be0]{margin-bottom:25px}.btn[type=submit][data-v-d1339be0]{background-color:#00327b;padding:3% 5px}@media(max-width:425px){.btn[type=submit][data-v-d1339be0]{padding:5% 5px}}.description__link[data-v-d1339be0]{display:inline-block;color:inherit!important;text-decoration:underline}",""]),t.exports=o},276:function(t,e,n){var content=n(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("28f1127f",content,!0,{sourceMap:!1})},279:function(t,e,n){"use strict";n.r(e);var o=n(2),r=n(234);o.a.use(r.a);var l={name:"RepairPrice",data:function(){return{phone:""}}},d=(n(270),n(42)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section container col-2",attrs:{id:"price"}},[t._m(0),t._v(" "),n("TheForm")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("h2",{staticClass:"heading heading--h2"},[t._v("Сколько будет стоить ремонт?")]),t._v(" "),n("p",{staticClass:"description description--secondary"},[t._v("Невозможно оценить стоимость ремонта, не выслушав все ваши пожелания. Оставьте свой номер телефона для того, чтобы мы вам перезвонили и узнали о всех нюансах.")])])}],!1,null,"d1339be0",null);e.default=component.exports;installComponents(component,{TheForm:n(239).default})},280:function(t,e,n){"use strict";n.r(e);n(26);var o={name:"BenefitsOfWork",data:function(){return{modalHeading:"",modalContent:"",isActiveModal:!1,benefitsList:[{name:"Гарантия 1 месяц",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{name:"Экономно",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{name:"Примеры работ",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]}},methods:{showModal:function(t){this.modalHeading=t.name,this.modalContent=t.content,this.isActiveModal=!0}}},r=(n(267),n(42)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section section--white container"},[n("h2",{staticClass:"heading heading--h2"},[t._v("Преимущества нашей работы")]),t._v(" "),n("ol",{staticClass:"benefits"},t._l(t.benefitsList,(function(e,o){return n("li",{key:o,staticClass:"benefits__item",on:{click:function(n){return t.showModal(e)}}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),0),t._v(" "),t.isActiveModal?n("TheModal",{attrs:{heading:t.modalHeading},on:{"close-modal":function(e){t.isActiveModal=!1}}},[n("p",{staticClass:"description description--secondary"},[t._v("\n      "+t._s(t.modalContent)+"\n    ")])]):t._e()],1)}),[],!1,null,"4e05bd9d",null);e.default=component.exports;installComponents(component,{TheModal:n(250).default})},282:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"section container",attrs:{id:"kind"}},[o("h2",{staticClass:"heading heading--h2"},[t._v("Какую технику ремонтируем?")]),t._v(" "),o("p",{staticClass:"description description--secondary"},[t._v("Мы ремонтируем любую бытовую технику в том числе и от самых известных компаний")]),t._v(" "),o("ul",{staticClass:"kind-gallery"},[o("li",{staticClass:"kind-gallery__item"},[o("img",{attrs:{src:n(261),alt:"LG"}})]),t._v(" "),o("li",{staticClass:"kind-gallery__item"},[o("img",{attrs:{src:n(262),alt:"Samsung"}})]),t._v(" "),o("li",{staticClass:"kind-gallery__item"},[o("img",{attrs:{src:n(263),alt:"Beko"}})]),t._v(" "),o("li",{staticClass:"kind-gallery__item"},[o("img",{attrs:{src:n(264),alt:"Bosch"}})])])])}],r={name:"TechKind"},l=(n(265),n(42)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,"9300a482",null);e.default=component.exports},291:function(t,e,n){"use strict";n(276)},292:function(t,e,n){var o=n(98)(!1);o.push([t.i,"@media(max-width:768px){.nav__link{color:#000!important}}",""]),t.exports=o},299:function(t,e,n){"use strict";n.r(e);var o={name:"IndexPage",head:{title:"Главная страница - ZA-Remont",meta:[{name:"description",content:"Здесь описание главной страницы!"}]}},r=(n(291),n(42)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TheHeader"),t._v(" "),n("FirstSection"),t._v(" "),n("TechKind"),t._v(" "),n("BenefitsOfWork"),t._v(" "),n("RepairPrice"),t._v(" "),n("TheFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:n(233).default,FirstSection:n(296).default,TechKind:n(282).default,BenefitsOfWork:n(280).default,RepairPrice:n(279).default,TheFooter:n(252).default})}}]);