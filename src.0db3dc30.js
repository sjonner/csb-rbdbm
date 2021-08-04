parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"B6dB":[function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))(function(o,a){function s(e){try{d(r.next(e))}catch(n){a(n)}}function i(e){try{d(r.throw(e))}catch(n){a(n)}}function d(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t(function(e){e(n)})).then(s,i)}d((r=r.apply(e,n||[])).next())})},n=this&&this.__generator||function(e,n){var t,r,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=n.call(e,s)}catch(i){a=[6,i],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},t=document.getElementById("form"),r=document.getElementById("userId"),o=document.getElementById("token"),a=document.getElementById("fetch"),s=function(){a.disabled=!(r.value.trim()&&o.value.replace(/[^a-z\d]/gi,""))};null==t||t.addEventListener("submit",function(e){e.preventDefault(),window.getContent(r.value.trim(),o.value.replace(/[^a-z\d]/gi,""))},!1),null==r||r.addEventListener("change",s),null==r||r.addEventListener("input",s),null==o||o.addEventListener("change",s),null==o||o.addEventListener("input",s);var i=function(e){return function(n){return new Promise(function(t){return setTimeout(function(){return t(n)},e)})}},d=i(300),u=new Headers({"Content-Type":"application/x-www-form-urlencoded",Host:"ws.personaltrainerapp.nl"}),l=2461;function c(t){return e(this,void 0,void 0,function(){var e,r,o,a,s;return n(this,function(n){switch(n.label){case 0:return e=JSON.stringify(t),(r=window.localStorage.getItem(e))?[2,JSON.parse(r)]:(o=fetch("https://ws.personaltrainerapp.nl",{headers:u,method:"POST",body:["data[service]=WOD","data[method]=whiteboard","data[idc]="+l,"data[id_appuser]="+t.userId,"data[version_wod]=1","data[app]=wodapp","data[language]=nl_NL","data[version]=14.0","data[clientUserAgent]=browser","data[token]="+t.token,"data[id_gym]=2461","data[companySyncVersions][accesslevels][version]=39","data[companySyncVersions][accesslevels][version_pnp]=42","data[companySyncVersions][styles][version]=0","data[companySyncVersions][styles][version_pnp]=0","data[id_appuser_li]="+t.userId,"myWOD"===t.kind&&t.year?"data[page]=myWOD&data[year]="+t.year+"&data[month]="+t.month:"myWOD"===t.kind?"data[page]=myWOD":"data[page]=workout&data[id_wod_whiteboard]="+t.id].join("&")}),[4,Promise.all([o,d(!0)])]);case 1:return a=n.sent(),s=a[0],a[1],[4,s.json()];case 2:return r=n.sent(),window.localStorage.setItem(e,JSON.stringify(r)),[2,r]}})})}function p(t){var r;return e(this,void 0,Promise,function(){var e;return n(this,function(n){switch(n.label){case 0:return[4,c(t)];case 1:return e=n.sent(),[2,"myWOD"===t.kind?{date:e.date,prev:null===(r=e.pagination)||void 0===r?void 0:r.prev,myWOD:e.myWOD}:e]}})})}function m(t,r){var o;return e(this,void 0,void 0,function(){var e,a,s,i;return n(this,function(n){switch(n.label){case 0:return document.getElementById("results").innerHTML="\n    <form>\n      <button type=\"button\" onClick=\"window.download('json', '"+t+"', '"+r+"')\">Download json</button>\n      <button type=\"button\" onClick=\"window.download('html', '"+t+"', '"+r+"')\">Download html</button>\n    </form>\n  ",e={year:"numeric",month:"long"},a={weekday:"long",year:"numeric",month:"long",day:"numeric"},[4,p({kind:"myWOD",userId:t,token:r})];case 1:s=n.sent(),n.label=2;case 2:return(null===(o=null==s?void 0:s.myWOD)||void 0===o?void 0:o.length)?[4,Promise.all(s.myWOD.map(function(e){return p({kind:"workout",id:e.id_wod_whiteboard,userId:t,token:r})}))]:[3,7];case 3:return i=n.sent(),document.getElementById("results").innerHTML+='\n      <details class="month">\n        <summary><strong>'+new Date(s.date.year,s.date.month,1).toLocaleDateString("nl",e)+"</strong></summary>\n        <div>\n          "+i.map(function(e){return'\n            <details class="wod">\n              <summary>'+e.wod.name+'</summary>\n              <div class="wod__details">\n                <div><code style="font-size: 0.9em">\n                  '+new Date(e.wod.date_wod_en).toLocaleDateString("nl",a)+" - "+e.wod.description+'</code></div>\n                <div>\n                  <span>\n                    <code class="time">\n                    '+(7===e.wod.id_wod_score_as?""+e.appuser_result.reps:6===e.wod.id_wod_score_as?""+e.appuser_result.distance:5===e.wod.id_wod_score_as?""+e.appuser_result.weight:3===e.wod.id_wod_score_as?e.appuser_result.rounds+"/"+e.appuser_result.reps:2===e.wod.id_wod_score_as?e.appuser_result.minutes+":"+e.appuser_result.seconds:e.appuser_result.rounds+"/"+e.appuser_result.reps)+'</code>\n                    <span class="label">'+(1===e.appuser_result.rx?"rx":"scaled")+"</span>\n                  </span>\n                  "+(e.appuser_result.comment.trim()?'<textarea readonly cols="40" rows="5">'+e.appuser_result.comment.replace(/(<br ?\/>)/gi,"")+"</textarea>":"")+"\n                </div>\n              </div>\n            </details>\n            "}).join("")+"\n        </div>\n      </details>\n    ",s.prev?[4,p({kind:"myWOD",year:s.prev.year,month:s.prev.month,userId:t,token:r})]:[3,5];case 4:return s=n.sent(),[3,6];case 5:return[3,7];case 6:return[3,2];case 7:return[2]}})})}function w(t,r){var o;return e(this,void 0,void 0,function(){var e,a,s;return n(this,function(n){switch(n.label){case 0:return e=[],[4,p({kind:"myWOD",userId:t,token:r})];case 1:a=n.sent(),n.label=2;case 2:return(null===(o=null==a?void 0:a.myWOD)||void 0===o?void 0:o.length)?[4,Promise.all(a.myWOD.map(function(e){return p({kind:"workout",id:e.id_wod_whiteboard,userId:t,token:r})}))]:[3,7];case 3:return s=n.sent(),e.push({date:a,wods:s}),a.prev?[4,p({kind:"myWOD",year:a.prev.year,month:a.prev.month,userId:t,token:r})]:[3,5];case 4:return a=n.sent(),[3,6];case 5:return[3,7];case 6:return[3,2];case 7:return[2,e]}})})}function v(t,r,o){return e(this,void 0,void 0,function(){var e,a,s,i,d,u,l;return n(this,function(n){switch(n.label){case 0:return a="WodApp-export","json"!==t?[3,2]:[4,w(r,o)];case 1:return s=n.sent(),e=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),a+=".json",[3,3];case 2:(i=document.createElement("html")).innerHTML=document.documentElement.innerHTML,Array.from(i.querySelectorAll("button, script, link, .no-export")).forEach(function(e){return e.remove()}),i.querySelectorAll("details").forEach(function(e){return e.removeAttribute("open")}),d=["<!DOCTYPE html>",i.outerHTML.replace(/\s{2,}/gi," ")].join(""),e=new Blob([d],{type:"text/html"}),a+=".html",n.label=3;case 3:return void 0!==window.navigator.msSaveBlob?window.navigator.msSaveBlob(e,a):(u=window.URL.createObjectURL(e),(l=document.createElement("a")).style.display="none",l.href=u,l.setAttribute("download",a),void 0===l.download&&l.setAttribute("target","_blank"),document.body.appendChild(l),l.click(),document.body.removeChild(l),window.URL.revokeObjectURL(u)),[2]}})})}window.getContent=m,window.download=v;
},{}]},{},["B6dB"], null)
//# sourceMappingURL=/wodapp-dl/src.0db3dc30.js.map
