/*! For license information please see server.js.LICENSE.txt */
require("source-map-support").install(),(()=>{"use strict";var t={871:t=>{t.exports=require("@fastify/static")},442:t=>{t.exports=require("fastify")}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{const t=require("preact"),e=require("preact-render-to-string");var n=r.n(e);const o=require("path");var i=r.n(o);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}const l=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(f,e);var r,n,o,i,l=(o=f,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=u(o);if(i){var r=u(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function f(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(e=l.call(this,t)).state={jobData:t.dataJob},e}return r=f,(n=[{key:"render",value:function(){var e=this;return(0,t.h)("div",{style:{backgroundColor:"#f5f6f7"}},(0,t.h)("p",{className:"date"},"August 2022"),(0,t.h)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},(0,t.h)("div",{className:"sortable-list",style:{justifyContent:"center",alignItems:"center",width:"100%"}},this.props.dataJob.map((function(t,r){return e.renderItem(r,t)})))))}},{key:"renderItem",value:function(e,r){return(0,t.h)("div",{key:e,style:{backgroundColor:"white",width:"100%",height:"100%",display:"flex"},draggable:!0,className:"item"},(0,t.h)("div",{style:{flex:1,flexDirection:"column",display:"flex",marginRight:15,direction:"rtl"}},(0,t.h)("text",{style:{lineHeight:"20px",marginTop:15,marginBottom:5,fontFamily:"Arial",fontSize:13,color:"gray"},className:"time"},r.time),(0,t.h)("img",{src:"assets/clip.png",alt:"attach",style:{width:15,height:15,marginBottom:0}})),(0,t.h)("div",{style:{backgroundColor:"finished"===r.status?"#0070f2":"lightgray",width:3,position:"relative"}},(0,t.h)("div",{style:{width:20,height:20,backgroundColor:"white",borderRadius:"50%",position:"absolute",top:"25%",left:"50%",transform:"translate(-50%, -50%)",borderWidth:2,borderColor:"blue"}},(0,t.h)("div",{style:{width:"finished"===r.status?15:10,height:"finished"===r.status?15:10,backgroundColor:"unfinished"===r.status?"white":"#0070f2",borderRadius:"50%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",border:"unfinished"===r.status?"3px solid gray":"white"}},r.icon&&(0,t.h)("img",{className:"icon",src:r.icon,alt:"".concat(r.icon),style:{width:10,height:10,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",filter:"brightness(0) invert(1)"}})))),(0,t.h)("div",{style:{flex:3.5,paddingTop:10,paddingBottom:10,borderBottom:"1px solid lightgray",marginLeft:20}},(0,t.h)("div",{style:{display:"flex",justifyContent:"space-between"}},(0,t.h)("div",null,(0,t.h)("p",{style:{display:"block",fontWeight:"bold",fontFamily:"Arial",lineHeight:"1px"},className:"title"},r.title),(0,t.h)("p",{style:{display:"block",fontSize:14,lineHeight:"10px",fontFamily:"Arial"},className:"description"},r.description),(0,t.h)("p",{style:{display:"block",fontSize:12,color:"gray",lineHeight:"10px",fontFamily:"Arial"},className:"attribute"},r.attribute)),(0,t.h)("div",{style:{padding:5,paddingRight:20,direction:"rtl"}},(0,t.h)("p",{style:{display:"block",fontSize:12,color:"gray",lineHeight:"1px",fontFamily:"Arial"},className:"status1"},r.status1),(0,t.h)("p",{style:{display:"block",fontSize:12,color:"gray",fontFamily:"Arial"},className:"status2"},r.status2),(0,t.h)("p",{style:{display:"block",fontSize:12,color:"gray",lineHeight:"2px",fontFamily:"Arial"},className:"attribute"},r.attribute)))))}}])&&s(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),f}(t.Component),f="assets/check.png",p="assets/more.png",h=[{title:"Timeline Title heo",description:"Description",attribute:"Attribute",status1:"Status1",status2:"Status2",status:"finished",time:"00 Aug",icon:f},{title:"Timeline Title heog",description:"Description",attribute:"Attribute",status1:"Status1",status2:"Status2",status:"finished",time:"Today",icon:f},{title:"Timeline Title heoh",description:"Description",attribute:"Attribute",status1:"Status1",status2:"Status2",status:"finished",time:"Today",icon:p},{title:"Timeline Title heol",description:"Description",attribute:"Attribute",status1:"Status1",status2:"Status2",status:"unfinished",time:"00 Aug",icon:""},{title:"Timeline Title heolnn",description:"Description",status1:"Status1",status2:"Status2",attribute:"Attribute",status:"unfinished",time:"00 Aug",icon:""}],y=[{title:"Timeline Title 1",description:"Description 1",attribute:"Attribute 1",status1:"Status1",status2:"Status2",status:"finished",time:"00 Aug",icon:f},{title:"Timeline Title 2",description:"Description 2",attribute:"Attribute 2",status1:"Status1",status2:"Status2",status:"finished",time:"Today",icon:""},{title:"Timeline Title 3",description:"Description 3",attribute:"Attribute 3",status1:"Status1",status2:"Status2",status:"finished",time:"Today",icon:p},{title:"Timeline Title 4",description:"Description 4",attribute:"Attribute 4",status1:"Status1",status2:"Status2",status:"unfinished",time:"00 Aug",icon:""},{title:"Timeline Title 5",description:"Description 5",status1:"Status1",status2:"Status2",attribute:"Attribute",status:"unfinished",time:"00 Aug",icon:f}];function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===d(o)?o:String(o)),n)}var o}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}const g=[{route:"/",component:function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(s,e);var r,n,o,i,a=(o=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(o);if(i){var r=v(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=a.call(this,t)).state={job:h},e}return r=s,(n=[{key:"componentDidMount",value:function(){var t=this;localStorage.setItem("dataUpdate",JSON.stringify(y));var e=JSON.parse(localStorage.getItem("dataUpdate"));this.timeOutId=setTimeout((function(){t.setState({job:e})}),1e4)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeOutId)}},{key:"render",value:function(){var e=this.state.job;return(0,t.h)(l,{dataJob:e})}}])&&m(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),s}(t.Component)}],w=JSON.parse('{"u2":"event_timeline","WL":"","Hw":[]}');function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function x(){x=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),s=new N(n||[]);return o(a,"_invoke",{value:_(t,r,s)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var p="suspendedStart",h="suspendedYield",y="executing",d="completed",m={};function b(){}function v(){}function g(){}var w={};u(w,a,(function(){return this}));var j=Object.getPrototypeOf,O=j&&j(j(C([])));O&&O!==r&&n.call(O,a)&&(w=O);var T=g.prototype=b.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,s){var c=f(t[o],t,i);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==S(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function _(e,r,n){var o=p;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var c=P(s,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=f(e,r,n);if("normal"===u.type){if(o=n.done?d:h,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=d,n.method="throw",n.arg=u.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function C(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(S(e)+" is not iterable")}return v.prototype=g,o(T,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:v,configurable:!0}),v.displayName=u(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(T),t},e.awrap=function(t){return{__await:t}},k(E.prototype),u(E.prototype,s,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new E(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(T),u(T,c,"Generator"),u(T,a,(function(){return this})),u(T,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=C,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function j(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}var O=r(442),T=r(871),k=O({logger:!0});k.register(T,{root:i().join(__dirname,"../public")}),g.forEach((function(e){return k.route({method:"GET",url:e.route,schema:{response:{200:{type:"string"}}},handler:function(r,o){return o.header("Content-Type","text/html; charset=utf-8"),i=n()((0,t.h)(e.component,null)),'\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <link rel="manifest" href="manifest.json">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>'.concat(w.u2,'</title>\n        <meta name="description" content="').concat(w.WL,'">\n        <meta name="keywords" content="').concat(w.Hw.join(", "),'">\n        <link rel="apple-touch-icon" href="./assets/start152x152.png">\n        <meta name="apple-mobile-web-app-capable" content="yes">\n        <meta name="apple-mobile-web-app-status-bar-style" content="black">\n        <meta name="apple-mobile-web-app-title" content="Event Timeline PWA">\n        <meta name="theme-color" content="#2F3BA2" />\n        <meta name="color-scheme" content="light dark" />\n        <style>\n            html, body {\n                height: 100%;\n                width: 100%;\n                margin: 0;\n                font-family: helvetica;\n            }\n        </style>\n    </head>\n    <body>\n        <div id="root">\n            ').concat(i,"\n        </div>\n        <script type=\"module\" src=\"client.js\" async><\/script>\n        <script>\n            if ('serviceWorker' in navigator) {\n                navigator.serviceWorker.register('service-worker.js', { scope: '/' })\n                    .then(registration => {\n                        console.log('Service Worker registered with scope:', registration.scope);\n                    })\n                    .catch(error => {\n                        console.error('Service Worker registration failed:', error);\n                    });\n            }\n        <\/script>\n    </body>\n    </html>\n");var i}})})),function(){var t,e=(t=x().mark((function t(){return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.listen({port:3e3});case 3:t.next=9;break;case 5:t.prev=5,t.t0=t.catch(0),k.log.error(t.t0),process.exit(1);case 9:case"end":return t.stop()}}),t,null,[[0,5]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){j(i,n,o,a,s,"next",t)}function s(t){j(i,n,o,a,s,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}()()})()})();
//# sourceMappingURL=server.js.map