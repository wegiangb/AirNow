webpackJsonp([1],{108:function(e,t,n){"use strict";t.a="f042aac189855a41eaea34a368f3891c87a073fb"},109:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},110:function(e,t){},111:function(e,t,n){"use strict";var o=n(2),r=n(112),a=Object(o.combineReducers)({airData:r.a});t.a=a},112:function(e,t,n){"use strict";var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"NEW_AIR_DATA":return[t.payload.data];default:return e}};t.a=o},113:function(e,t,n){"use strict";function o(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="/service-worker.js";i?a(e):r(e)})}}function r(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}function a(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):r(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}t.a=o;var i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))},114:function(e,t){},35:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=n.n(o),a=n(12),i=n.n(a),c=n(46),u=(n.n(c),n(4)),l=n(2),s=n(22),f=n.n(s),p=n(85),d=(n.n(p),n(86)),y=n(111),h=n(113),m=n(114),g=(n.n(m),Object(l.applyMiddleware)(f.a)(l.createStore)),b=document.getElementById("root");i.a.render(r.a.createElement(c.AppContainer,null,r.a.createElement(u.Provider,{store:g(y.a)},r.a.createElement(d.a,null))),b),Object(h.a)()},46:function(e,t,n){e.exports=n(47)},47:function(e,t,n){"use strict";e.exports=n(48)},48:function(e,t,n){"use strict";e.exports.AppContainer=n(49)},49:function(e,t,n){"use strict";e.exports=n(50)},50:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),u=c.Component,l=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return this.props.component?c.createElement(this.props.component,this.props.props):c.Children.only(this.props.children)}}]),t}(u);e.exports=l},85:function(e,t){},86:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),c=n.n(i),u=n(4),l=n(2),s=n(87),f=n(88),p=n(109),d=(n.n(p),n(110)),y=(n.n(d),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),h=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={location:null,counting:!0},n.checkNowOnClick=n.checkNowOnClick.bind(n),n.getCountingFinished=n.getCountingFinished.bind(n),n}return a(t,e),y(t,[{key:"componentWillMount",value:function(){var e=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){e.setState({location:t}),e.props.ge(e.state.location.coords)})}},{key:"checkNowOnClick",value:function(e){var t=this;navigator.geolocation&&(this.setState({location:null,counting:!0}),navigator.geolocation.getCurrentPosition(function(e){t.setState({location:e}),t.props.ge(t.state.location.coords)}))}},{key:"getCountingFinished",value:function(e){e&&this.setState({counting:!1})}},{key:"render",value:function(){if(this.state.location){this.state.location.coords;return c.a.createElement("div",null,c.a.createElement(s.a,{getCountingFinished:this.getCountingFinished}),this.state.counting?c.a.createElement("button",{onClick:this.checkNowOnClick,className:"check-button diable",disabled:!0},"Checking"):c.a.createElement("button",{onClick:this.checkNowOnClick,className:"check-button"},"Update"),c.a.createElement("div",{id:"bg-healthy"}),c.a.createElement("div",{id:"bg-moderate"}),c.a.createElement("div",{id:"bg-sensitive"}),c.a.createElement("div",{id:"bg-unhealthy"}),c.a.createElement("div",{id:"bg-danger"}),c.a.createElement("div",{id:"bg-hazardous"}))}return c.a.createElement("h1",{className:"loading"},"Loading")}}]),t}(i.Component),m=function(e){return Object(l.bindActionCreators)({ge:f.a},e)};t.a=Object(u.connect)(null,m)(h)},87:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),c=n.n(i),u=n(4),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={pm25Data:null,codition:null},n.updatePM25=n.updatePM25.bind(n),n}return a(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){if(e.airData[0]){var t=e.airData[0].data.iaqi.pm25.v;this.updatePM25(t)}}},{key:"updatePM25",value:function(e){for(var t=this,n=0;n<=e;n++)setTimeout(function(n){return function(){t.setState({pm25Data:n});var o=t.state.pm25Data;n==e&&t.props.getCountingFinished(!0),o<=50?(document.querySelector(".main-meter").style.color="#70F1CE",document.querySelector("#bg-healthy").style.opacity="1",t.setState({codition:"Healthy"})):o<=100?(document.querySelector(".main-meter").style.color="#EDC77A",document.querySelector("#bg-healthy").style.opacity="0",document.querySelector("#bg-moderate").style.opacity="1",t.setState({codition:"Moderate"})):o<=150?(document.querySelector(".main-meter").style.color="#EFA556",document.querySelector("#bg-moderate").style.opacity="0",document.querySelector("#bg-sensitive").style.opacity="1",t.setState({codition:"Unhealthy for Sensitive Groups"})):o<=200?(document.querySelector(".main-meter").style.color="#FE7148",document.querySelector("#bg-sensitive").style.opacity="0",document.querySelector("#bg-unhealthy").style.opacity="1",t.setState({codition:"Unhealthy"})):o<300?(document.querySelector(".main-meter").style.color="#B093EF",document.querySelector("#bg-unhealthy").style.opacity="0",document.querySelector("#bg-danger").style.opacity="1",t.setState({codition:"Very Unhealthy"})):(document.querySelector(".main-meter").style.color="#000000",document.querySelector("#bg-danger").style.opacity="0",document.querySelector("#bg-hazardous").style.opacity="1",t.setState({codition:"Hazardous"}))}}(n),function(e){return 60*e}(n))}},{key:"componentWillUnmount",value:function(){document.querySelector("#bg-healthy").style.opacity="0",document.querySelector("#bg-moderate").style.opacity="0",document.querySelector("#bg-sensitive").style.opacity="0",document.querySelector("#bg-unhealthy").style.opacity="0",document.querySelector("#bg-danger").style.opacity="0",document.querySelector("#bg-hazardous").style.opacity="0"}},{key:"render",value:function(){return this.props.airData[0]?c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("div",{className:"airnow"},"AirNow")),c.a.createElement("h1",{className:"city"},this.props.airData[0].data.city.name),c.a.createElement("div",{className:"main-meter animated bounceIn"},c.a.createElement("h3",{className:"title"},"PM2.5"),c.a.createElement("div",{className:"pm25"}," ",this.state.pm25Data," "),c.a.createElement("h3",{className:"condition"},this.state.codition))):c.a.createElement("h2",{className:"loading"},"Loading data...")}}]),t}(i.Component),f=function(e){return{airData:e.airData}};t.a=Object(u.connect)(f)(s)},88:function(e,t,n){"use strict";var o=n(24),r=n.n(o),a=n(108),i=function(e){var t=e.latitude,n=e.longitude;return{type:"NEW_AIR_DATA",payload:r.a.get("https://api.waqi.info/feed/geo:"+t+";"+n+"/?token="+a.a)}};t.a=i}},[35]);
//# sourceMappingURL=app.5aa46769.js.map