(this["webpackJsonpWeather App by Alejandro Flores"]=this["webpackJsonpWeather App by Alejandro Flores"]||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){},17:function(e,n,t){},18:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t(7),i=t.n(a),s=(t(13),t(8)),o=t(4),r=t(0);function d(e){var n=e.onSearch,t=Object(c.useState)(""),a=Object(o.a)(t,2),i=a[0],s=a[1];return Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(i),s("")},children:[Object(r.jsx)("input",{name:"busca",type:"text",placeholder:"Ciudad...",value:i,onChange:function(e){return s(e.target.value)},className:"busca"}),Object(r.jsx)("input",{type:"submit",value:"Agregar",className:"btnBusca"})]})}t(15);var l=function(e){var n=e.onSearch;return Object(r.jsx)("div",{className:"mainConent",children:Object(r.jsxs)("div",{className:"navBar",children:[Object(r.jsx)("h1",{"data-text":"Weather App",children:"Weather App"}),Object(r.jsx)(d,{onSearch:n})]})})};t(16),t(17);function m(e){var n=e.min,t=e.max,c=e.name,a=e.img,i=e.onClose;e.id;return Object(r.jsxs)("div",{className:"card1",children:[Object(r.jsx)("div",{id:"closeIcon",className:"row",children:Object(r.jsx)("button",{onClick:i,className:"btn btn-sm btn-danger",children:"X"})}),Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h5",{className:"card-title",children:c}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col-sm-4 col-md-4 col-lg-4",children:[Object(r.jsx)("p",{children:"Min"}),Object(r.jsxs)("p",{children:[n,"\xb0"]})]}),Object(r.jsxs)("div",{className:"col-sm-4 col-md-4 col-lg-4",children:[Object(r.jsx)("p",{children:"Max"}),Object(r.jsxs)("p",{children:[t,"\xb0"]})]}),Object(r.jsx)("div",{className:"col-sm-4 col-md-4 col-lg-4",children:Object(r.jsx)("img",{className:"iconoClima cardImg",src:"http://openweathermap.org/img/wn/"+a+"@2x.png",width:"80",height:"80",alt:""})})]})]})]})}function j(e){var n=e.cities,t=e.onClose;return n?Object(r.jsx)("div",{className:"cards",children:n.map((function(e){return Object(r.jsx)(m,{max:e.max,min:e.min,name:e.name,img:e.img,onClose:function(){return t(e.id)},id:e.id},e.id)}))}):Object(r.jsx)("div",{children:"Sin ciudades"})}t(18);function u(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],a=n[1];return Object(r.jsxs)("div",{className:"App",children:["".concat("4ae2636d8dfbdc3044bede63951a019b"),Object(r.jsx)(l,{onSearch:function(e){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("4ae2636d8dfbdc3044bede63951a019b","&units=metric")).then((function(e){return e.json()})).then((function(e){if(void 0!==e.main){var n={min:Math.round(e.main.temp_min),max:Math.round(e.main.temp_max),img:e.weather[0].icon,id:e.id,wind:e.wind.speed,temp:e.main.temp,name:e.name,weather:e.weather[0].main,clouds:e.clouds.all,latitud:e.coord.lat,longitud:e.coord.lon};a((function(e){return[].concat(Object(s.a)(e),[n])}))}else alert("Ciudad no encontrada")}))}}),Object(r.jsx)(j,{cities:t,onClose:function(e){a((function(n){return n.filter((function(n){return n.id!==e}))}))}})]})}t(19).config();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(r.jsx)(u,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.8ebabb1d.chunk.js.map