(this["webpackJsonpcypress-realworld-app"]=this["webpackJsonpcypress-realworld-app"]||[]).push([[31],{781:function(t,e,r){"use strict";r.r(e),r.d(e,"amplify_s3_text",(function(){return f}));var n=r(52),o=r(130),a=r(37),i=r(284),c=r(33),l=(r(66),r(870),r(872)),s=function(t,e,r,n){return new(r||(r=Promise))((function(o,a){function i(t){try{l(n.next(t))}catch(e){a(e)}}function c(t){try{l(n.throw(t))}catch(e){a(e)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,c)}l((n=n.apply(t,e||[])).next())}))},u=function(t,e){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(c){a=[6,c],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},p=new o.a("S3Text"),f=function(){function t(t){Object(n.k)(this,t),this.contentType="text/*",this.level=i.a.Public,this.fallbackText=c.a.TEXT_FALLBACK_CONTENT}return t.prototype.watchHandler=function(){return s(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.load()];case 1:return t.sent(),[2]}}))}))},t.prototype.componentWillLoad=function(){return s(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.load()];case 1:return t.sent(),[2]}}))}))},t.prototype.load=function(){return s(this,void 0,void 0,(function(){var t,e,r,n,o,a,i,c,s,f,h;return u(this,(function(u){switch(u.label){case 0:return e=(t=this).path,r=t.textKey,n=t.body,o=t.contentType,a=t.level,i=t.track,c=t.identityId,r||e?(s=r||e,p.debug("loading "+s+"..."),n?[4,Object(l.e)(r,n,a,i,o,p)]:[3,2]):(p.debug("empty textKey and path"),[2]);case 1:u.sent(),u.label=2;case 2:return u.trys.push([2,4,,5]),f=this,[4,Object(l.a)(s,a,i,c,p)];case 3:return f.src=u.sent(),[3,5];case 4:throw h=u.sent(),p.debug(h),new Error(h);case 5:return[2]}}))}))},t.prototype.render=function(){return Object(n.i)("div",null,Object(n.i)("div",{class:"text-container"},this.src?Object(n.i)("pre",null,this.src):Object(n.i)("pre",null,a.a.get(this.fallbackText))))},Object.defineProperty(t,"watchers",{get:function(){return{textKey:["watchHandler"],body:["watchHandler"]}},enumerable:!1,configurable:!0}),t}();f.style=":host{--container-color:var(--amplify-smoke-white);--border-color:var(--amplify-light-grey);--font-size:var(--amplify-text-md);--text-color:var(--amplify-secondary-color)}.text-container{background-color:var(--container-color);border:1px solid var(--border-color);border-radius:5px;margin-bottom:10px}pre{display:block;margin:0.5rem 0;padding:0.5rem;line-height:1rem;max-height:50rem;font-size:var(--font-size);color:var(--text-color);word-break:break-all;overflow-y:scroll;overflow-x:auto}"}}]);
//# sourceMappingURL=31.0d2a800e.chunk.js.map