(this["webpackJsonpcypress-realworld-app"]=this["webpackJsonpcypress-realworld-app"]||[]).push([[28],{778:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_s3_image_picker",(function(){return p}));var r=n(52),i=n(130),a=n(37),c=n(284),o=n(33),l=(n(66),n(870),n(872)),s=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function c(e){try{l(r.next(e))}catch(t){a(t)}}function o(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,o)}l((r=r.apply(e,t||[])).next())}))},u=function(e,t){var n,r,i,a,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,r=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(i=(i=c.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){c=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){c.label=a[1];break}if(6===a[0]&&c.label<i[1]){c.label=i[1],i=a;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(a);break}i[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(o){a=[6,o],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}},h=new i.a("S3ImagePicker"),p=function(){function e(e){var t=this;Object(r.k)(this,e),this.contentType="binary/octet-stream",this.level=c.a.Public,this.headerTitle=o.a.IMAGE_PICKER_TITLE,this.headerHint=o.a.IMAGE_PICKER_HINT,this.placeholderHint=o.a.IMAGE_PICKER_PLACEHOLDER_HINT,this.buttonText=o.a.IMAGE_PICKER_BUTTON_TEXT,this.handlePick=function(e){return s(t,void 0,void 0,(function(){var t,n,r,i,a,c,o,s,p,f;return u(this,(function(u){switch(u.label){case 0:n=(t=this).path,r=void 0===n?"":n,i=t.level,a=t.track,c=t.identityId,o=t.fileToKey,s=r+Object(l.b)(e,o),u.label=1;case 1:return u.trys.push([1,4,,5]),[4,Object(l.e)(s,e,i,a,e.type,h)];case 2:return u.sent(),p=this,[4,Object(l.c)(s,i,a,c,h)];case 3:return p.src=u.sent(),[3,5];case 4:throw f=u.sent(),h.error(f),new Error(f);case 5:return[2]}}))}))}}return e.prototype.render=function(){return Object(r.i)(r.b,null,Object(r.i)("slot",{name:"photo-picker"},Object(r.i)("amplify-photo-picker",{previewSrc:this.src,handleClick:this.handlePick,headerTitle:a.a.get(this.headerTitle),headerHint:a.a.get(this.headerHint),placeholderHint:a.a.get(this.placeholderHint),buttonText:a.a.get(this.buttonText)})))},e}()}}]);
//# sourceMappingURL=28.4b0dc023.chunk.js.map