(function(t){function e(e){for(var a,i,c=e[0],l=e[1],d=e[2],u=0,b=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&b.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);o&&o(e);while(b.length)b.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,c=1;c<s.length;c++){var l=s[c];0!==n[l]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},n={app:0},r=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="trading-app/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var o=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0a6b":function(t,e,s){},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id="4678"},"4f09":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a,n,r=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tile is-ancestor",attrs:{id:"root"}},[s("div",{staticClass:"tile is-parent is-vertical is-4"},[s("div",{staticClass:"message-header"},[t._v("Currency Select")]),s("div",{staticClass:"tile is-child box message-body",attrs:{id:"currency-select"}},[s("div",{staticClass:"currencySelect"},[s("CurrencySelect",{on:{getCurrencies:function(e){t.selectedCurrencyGet=e}}})],1),s("div",{staticClass:"currentCurrency"},[s("CurrentCurrencies")],1)]),s("div",{staticClass:"message-header"},[t._v("Order Form")]),s("div",{staticClass:"tile is-child box message-body",attrs:{id:"order-form"}},[s("OrderForm")],1)]),s("div",{staticClass:"tile is-parent is-vertical is-8"},[s("div",{staticClass:"message-header"},[t._v("Price Chart")]),s("div",{staticClass:"tile is-child box message-body",attrs:{id:"price-chart"}},[s("PriceChart")],1),s("div",{staticClass:"message-header"},[t._v("Order History")]),s("div",{staticClass:"tile is-child box message-body",attrs:{id:"order-history"}},[s("OrderHistory")],1)])])},c=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"select"},[s("select",[s("option",{on:{click:function(e){return t.getCurrencies("BTC")}}},[s("button",{staticClass:"button"},[t._v("BTC-USD")])]),s("hr",{staticClass:"dropdown-divider"}),s("option",{on:{click:function(e){return t.getCurrencies("ETH")}}},[s("button",{staticClass:"button"},[t._v("ETH-USD")])]),s("hr",{staticClass:"dropdown-divider"}),s("option",{on:{click:function(e){return t.getCurrencies("LTC")}}},[s("button",{staticClass:"button"},[t._v("LTC-USD")])]),s("hr",{staticClass:"dropdown-divider"}),s("option",{on:{click:function(e){return t.getCurrencies("XRP")}}},[s("button",{staticClass:"button"},[t._v("XRP-USD")])]),s("hr",{staticClass:"dropdown-divider"}),s("option",{on:{click:function(e){return t.getCurrencies("LINK")}}},[s("button",{staticClass:"button"},[t._v("LINK-USD")])])])])])},d=[],o={name:"CurrencySelect",props:{},methods:{getCurrencies:function(t){this.$emit("getCurrencies",t)}}},u=o,b=s("2877"),v=Object(b["a"])(u,l,d,!1,null,null,null),p=v.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"tabs is-toggle is-fullwidth"},[s("ul",[s("li",{staticClass:"is-active",attrs:{id:"buy-tab"}},[s("span",[s("a",{on:{click:t.uiSetBuy}},[t._v("Buy")])])]),s("li",{attrs:{id:"sell-tab"}},[s("span",[s("a",{on:{click:t.uiSetSell}},[t._v("Sell")])])])])]),s("div",{staticClass:"tabs is-fullwidth"},[s("ul",t._l(t.tabComponents,(function(e){return s("li",{key:e.label,class:{"is-active":t.currentTab===e}},[s("a",{on:{click:function(s){return t.changeTab(e)}}},[t._v(t._s(e.label))])])})),0)]),s(t.currentTab,{tag:"component"}),s("br"),s("button",{staticClass:"button is-success is-fullwidth",attrs:{id:"order-button"}},[t._v("Place "+t._s(t.orderType)+" Order")])],1)},h=[],_=(s("4de4"),s("07ac"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",[t._v("Amount")]),s("div",{staticClass:"field has-addons has-addons-centered"},[s("p",{staticClass:"control is-expanded"},[s("input",{staticClass:"input is-fullwidth",attrs:{type:"text",placeholder:"0.00"}})]),s("p",{staticClass:"control"},[s("a",{staticClass:"button is-outlined is-static"},[s("span",[t._v("USD")])])])])])}],j={name:"MarketTab",label:"Market"},C=j,y=Object(b["a"])(C,_,m,!1,null,"f7164ddc",null),g=y.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",[t._v("Amount")]),s("div",{staticClass:"field has-addons has-addons-centered"},[t._m(0),s("p",{staticClass:"control"},[s("a",{staticClass:"button is-outlined is-static"},[s("span",[t._v(t._s(this.$parent.$parent.selectedCurrencyGet))])])])]),s("span",[t._v("Limit Price")]),s("div",{staticClass:"field has-addons has-addons-centered"},[t._m(1),s("p",{staticClass:"control"},[s("a",{staticClass:"button is-outlined is-static"},[s("span",[t._v(t._s(this.$parent.$parent.selectedCurrencyGive))])])])])])},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"control is-expanded"},[s("input",{staticClass:"input is-fullwidth",attrs:{type:"text",placeholder:"0.00"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"control is-expanded"},[s("input",{staticClass:"input is-fullwidth",attrs:{type:"text",placeholder:"0.00"}})])}],k={name:"LimitTab",label:"Limit"},S=k,O=Object(b["a"])(S,w,x,!1,null,"770ca1ce",null),T=O.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",[t._v("Stop Price")]),t._m(0),s("span",[t._v("Amount")]),s("div",{staticClass:"field has-addons has-addons-centered"},[t._m(1),s("p",{staticClass:"control"},[s("a",{staticClass:"button is-outlined is-static"},[s("span",[t._v(t._s(this.$parent.$parent.selectedCurrencyGet))])])])]),s("span",[t._v("Limit Price")]),t._m(2)])},E=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field has-addons has-addons-centered"},[s("p",{staticClass:"control is-expanded"},[s("input",{staticClass:"input is-fullwidth",attrs:{type:"text",placeholder:"0.00"}})]),s("p",{staticClass:"control"},[s("a",{staticClass:"button is-outlined is-static"},[s("span",[t._v("USD")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"control is-expanded"},[s("input",{staticClass:"input is-fullwidth",attrs:{type:"text",placeholder:"0.00"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field has-addons has-addons-centered"},[s("p",{staticClass:"control is-expanded"},[s("input",{staticClass:"input is-fullwidth",attrs:{type:"text",placeholder:"0.00"}})]),s("p",{staticClass:"control"},[s("a",{staticClass:"button is-outlined is-static"},[s("span",[t._v("USD")])])])])}],B={name:"StopTab",label:"Stop"},z=B,P=Object(b["a"])(z,$,E,!1,null,"2623c123",null),A=P.exports,L={name:"OrderForm",components:{MarketTab:g,LimitTab:T,StopTab:A},data:function(){return{orderType:"Buy",currentTab:g}},computed:{tabComponents:function(){return Object.values(this.$options.components).filter((function(t){return Object.prototype.hasOwnProperty.call(t,"label")}))}},methods:{changeTab:function(t){this.currentTab=t},uiSetSell:function(){document.getElementById("buy-tab").classList.remove("is-active"),document.getElementById("sell-tab").classList.add("is-active"),document.getElementById("order-button").classList.remove("is-success"),document.getElementById("order-button").classList.add("is-danger"),this.orderType="Sell"},uiSetBuy:function(){document.getElementById("sell-tab").classList.remove("is-active"),document.getElementById("buy-tab").classList.add("is-active"),document.getElementById("order-button").classList.remove("is-danger"),document.getElementById("order-button").classList.add("is-success"),this.orderType="Buy"}}},D=L,I=Object(b["a"])(D,f,h,!1,null,"c96a6732",null),U=I.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t._m(0),s("div",{attrs:{id:"render-price-chart"}},[s("RenderPriceChart",{staticStyle:{height:"285px"}})],1)])},F=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"control"},[s("div",{staticClass:"select"},[s("select",[s("option",[s("button",{staticClass:"button"},[t._v("1m")])]),s("hr",{staticClass:"dropdown-divider"}),s("option",[s("button",{staticClass:"button"},[t._v("5m")])]),s("hr",{staticClass:"dropdown-divider"}),s("option",[s("button",{staticClass:"button"},[t._v("15m")])]),s("hr",{staticClass:"dropdown-divider"}),s("option",[s("button",{staticClass:"button"},[t._v("1h")])]),s("hr",{staticClass:"dropdown-divider"}),s("option",[s("button",{staticClass:"button"},[t._v("6h")])]),s("hr",{staticClass:"dropdown-divider"}),s("option",[s("button",{staticClass:"button"},[t._v("1d")])])])])])}],G=s("1fca"),H={extends:G["a"],mounted:function(){this.renderChart({labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Nov","Dec"],datasets:[{lineTension:0,fill:!1,borderColor:"#55b6f9",pointRadius:2,label:"BTC",data:[10,10,10,10,10,10,10,10,10,10,10,10]}]},{responsive:!0,maintainAspectRatio:!1},{legend:{display:!1}})}},R=H,N=Object(b["a"])(R,a,n,!1,null,null,null),J=N.exports,K={name:"PriceChart",components:{RenderPriceChart:J}},X=K,q=Object(b["a"])(X,M,F,!1,null,"82e391c2",null),W=q.exports,Q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-container is-scrollable"},[s("table",{staticClass:"table is-bordered is-striped is-narrow is-haveable"},[s("thead",[s("th",[t._v("Fills")]),s("tr",[s("th",[s("abbr",{attrs:{title:"Type"}},[t._v("Type")])]),s("th",[s("abbr",{attrs:{title:"Size"}},[t._v("Size")])]),s("th",[s("abbr",{attrs:{title:"Price"}},[t._v("Price")])]),s("th",[s("abbr",{attrs:{title:"Fee"}},[t._v("Fee")])]),s("th",[s("abbr",{attrs:{title:"Time"}},[t._v("Time")])]),s("th",[s("abbr",{attrs:{title:"Delete"}})])])]),s("tbody",[s("tr",[s("th",[t._v("Buy")]),s("td",[t._v("50.000000000")]),s("td",[t._v("100.00")]),s("td",[t._v(".55624")]),s("td",[t._v("5h")]),s("td",[s("button",[t._v("x")])])]),s("tr",[s("th",[t._v("Sell")]),s("td",[t._v("50.000000000")]),s("td",[t._v("100.00")]),s("td",[t._v(".55624")]),s("td",[t._v("5h")]),s("td",[s("button",[t._v("x")])])]),s("tr",[s("th",[t._v("Buy")]),s("td",[t._v("50.000000000")]),s("td",[t._v("100.00")]),s("td",[t._v(".55624")]),s("td",[t._v("5h")]),s("td",[s("button",[t._v("x")])])]),s("tr",[s("th",[t._v("Buy")]),s("td",[t._v("50.000000000")]),s("td",[t._v("100.00")]),s("td",[t._v(".55624")]),s("td",[t._v("5h")]),s("td",[s("button",[t._v("x")])])]),s("tr",[s("th",[t._v("Buy")]),s("td",[t._v("50.000000000")]),s("td",[t._v("100.00")]),s("td",[t._v(".55624")]),s("td",[t._v("5h")]),s("td",[s("button",[t._v("x")])])]),s("tr",[s("th",[t._v("Buy")]),s("td",[t._v("50.000000000")]),s("td",[t._v("100.00")]),s("td",[t._v(".55624")]),s("td",[t._v("5h")]),s("td",[s("button",[t._v("x")])])]),s("tr",[s("th",[t._v("Buy")]),s("td",[t._v("50.000000000")]),s("td",[t._v("100.00")]),s("td",[t._v(".55624")]),s("td",[t._v("5h")]),s("td",[s("button",[t._v("x")])])]),s("tr",[s("th",[t._v("Buy")]),s("td",[t._v("50.000000000")]),s("td",[t._v("100.00")]),s("td",[t._v(".55624")]),s("td",[t._v("5h")]),s("td",[s("button",[t._v("x")])])]),s("tr",[s("th",[t._v("Buy")]),s("td",[t._v("50.000000000")]),s("td",[t._v("100.00")]),s("td",[t._v(".55624")]),s("td",[t._v("5h")]),s("td",[s("button",[t._v("x")])])]),s("tr",[s("th",[t._v("Buy")]),s("td",[t._v("50.000000000")]),s("td",[t._v("100.00")]),s("td",[t._v(".55624")]),s("td",[t._v("5h")]),s("td",[s("button",[t._v("x")])])])])])])}],Y={name:"OrderHistory",props:{}},Z=Y,tt=(s("eaaa"),Object(b["a"])(Z,Q,V,!1,null,"34223dba",null)),et=tt.exports,st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dropdown is-hoverable"},[t._m(0),s("div",{staticClass:"dropdown-menu",attrs:{id:"dropdown-menu4",role:"menu"}},[s("div",{staticClass:"dropdown-content"},[s("div",{staticClass:"dropdown-item"},[s("option",[s("h3",{staticClass:"title is-3"},[t._v("BTC: "),s("p",{staticClass:"walletAmount"},[t._v(t._s(this.$parent.btcAmount))])])]),s("hr",{staticClass:"dropdown-divider"}),s("option",[s("h3",{staticClass:"title is-3"},[t._v("ETH: "),s("p",{staticClass:"walletAmount"},[t._v(t._s(this.$parent.ethAmount))])])]),s("hr",{staticClass:"dropdown-divider"}),s("option",[s("h3",{staticClass:"title is-3"},[t._v("LTC: "),s("p",{staticClass:"walletAmount"},[t._v(t._s(this.$parent.ltcAmount))])])]),s("hr",{staticClass:"dropdown-divider"}),s("option",[s("h3",{staticClass:"title is-3"},[t._v("XRP: "),s("p",{staticClass:"walletAmount"},[t._v(t._s(this.$parent.xrpAmount))])])]),s("hr",{staticClass:"dropdown-divider"}),s("option",[s("h3",{staticClass:"title is-3"},[t._v("LINK: "),s("p",{staticClass:"walletAmount"},[t._v(t._s(this.$parent.linkAmount))])])])])])])])},at=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dropdown-trigger"},[s("button",{staticClass:"button",attrs:{"aria-haspopup":"true","aria-controls":"dropdown-menu4"}},[s("span",{staticStyle:{"text-align":"center"}},[t._v("Wallet")])])])}],nt={name:"CurrentCurrencies"},rt=nt,it=(s("f12a"),Object(b["a"])(rt,st,at,!1,null,null,null)),ct=it.exports,lt={name:"App",components:{CurrencySelect:p,OrderForm:U,PriceChart:W,OrderHistory:et,CurrentCurrencies:ct},methods:{changeCurrencies:function(t){this.selectedCurrencyGet=t}},data:function(){return{btcAmount:1e3,ethAmount:200,ltcAmount:0,xrpAmount:1e3,linkAmount:1,selectedCurrencyGet:"BTC",selectedCurrencyGive:"USD"}}},dt=lt,ot=(s("5e25"),Object(b["a"])(dt,i,c,!1,null,"bda95698",null)),ut=ot.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(ut)}}).$mount("#app")},"5e25":function(t,e,s){"use strict";var a=s("0a6b"),n=s.n(a);n.a},"9d29":function(t,e,s){},eaaa:function(t,e,s){"use strict";var a=s("9d29"),n=s.n(a);n.a},f12a:function(t,e,s){"use strict";var a=s("4f09"),n=s.n(a);n.a}});
//# sourceMappingURL=app.638d45d6.js.map