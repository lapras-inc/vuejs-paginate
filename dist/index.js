!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VuejsPaginate=t():e.VuejsPaginate=t()}(this,function(){return function(e){function t(a){if(n[a])return n[a].exports;var s=n[a]={exports:{},id:a,loaded:!1};return e[a].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var s=n(1),r=a(s);e.exports=r.default},function(e,t,n){n(2);var a=n(6)(n(7),n(8),"data-v-82963a40",null);e.exports=a.exports},function(e,t,n){var a=n(3);"string"==typeof a&&(a=[[e.id,a,""]]);n(5)(a,{});a.locals&&(e.exports=a.locals)},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,"a[data-v-82963a40]{cursor:pointer}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(a[r]=!0)}for(s=0;s<t.length;s++){var i=t[s];"number"==typeof i[0]&&a[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){function a(e,t){for(var n=0;n<e.length;n++){var a=e[n],s=u[a.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](a.parts[r]);for(;r<a.parts.length;r++)s.parts.push(l(a.parts[r],t))}else{for(var i=[],r=0;r<a.parts.length;r++)i.push(l(a.parts[r],t));u[a.id]={id:a.id,refs:1,parts:i}}}}function s(e){for(var t=[],n={},a=0;a<e.length;a++){var s=e[a],r=s[0],i=s[1],o=s[2],l=s[3],c={css:i,media:o,sourceMap:l};n[r]?n[r].parts.push(c):t.push(n[r]={id:r,parts:[c]})}return t}function r(e,t){var n=g(),a=x[x.length-1];if("top"===e.insertAt)a?a.nextSibling?n.insertBefore(t,a.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function o(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function l(e,t){var n,a,s;if(t.singleton){var r=h++;n=v||(v=o(t)),a=c.bind(null,n,r,!1),s=c.bind(null,n,r,!0)}else n=o(t),a=d.bind(null,n),s=function(){i(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else s()}}function c(e,t,n,a){var s=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=C(t,s);else{var r=document.createTextNode(s),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function d(e,t){var n=t.css,a=t.media,s=t.sourceMap;if(a&&e.setAttribute("media",a),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},f=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=p(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,h=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=f()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=s(e);return a(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var o=n[i],l=u[o.id];l.refs--,r.push(l)}if(e){var c=s(e);a(c,t)}for(var i=0;i<r.length;i++){var l=r[i];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete u[l.id]}}}};var C=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,a){var s,r=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(s=e,r=e.default);var o="function"==typeof r?r.options:r;if(t&&(o.render=t.render,o.staticRenderFns=t.staticRenderFns),n&&(o._scopeId=n),a){var l=o.computed||(o.computed={});Object.keys(a).forEach(function(e){var t=a[e];l[e]=function(){return t}})}return{esModule:s,exports:r,options:o}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{pageCount:{type:Number,required:!0},initialPage:{type:Number,default:0},forcePage:{type:Number},clickHandler:{type:Function,default:function(){}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},containerClass:{type:String},pageClass:{type:String},pageLinkClass:{type:String},prevClass:{type:String},prevLinkClass:{type:String},nextClass:{type:String},nextLinkClass:{type:String},noLiSurround:{type:Boolean,default:!1}},data:function(){return{selected:this.initialPage}},beforeUpdate:function(){void 0!==this.forcePage&&this.forcePage!==this.selected&&(this.selected=this.forcePage)},computed:{pages:function(){var e=this,t={};if(this.pageCount<=this.pageRange)for(var n=0;n<this.pageCount;n++){var a={index:n,content:n+1,selected:n===this.selected};t[n]=a}else!function(){var n=e.pageRange/2,a=e.pageRange-n;e.selected<n?(n=e.selected,a=e.pageRange-n):e.selected>e.pageCount-e.pageRange/2&&(a=e.pageCount-e.selected,n=e.pageRange-a);for(var s=function(s){var r={index:s,content:s+1,selected:s===e.selected};if(s<=e.marginPages-1||s>=e.pageCount-e.marginPages)return void(t[s]=r);var i={content:"...",disabled:!0};e.selected-n>e.marginPages&&t[e.marginPages]!==i&&(t[e.marginPages]=i),e.selected+a<e.pageCount-e.marginPages-1&&t[e.pageCount-e.marginPages-1]!==i&&(t[e.pageCount-e.marginPages-1]=i);var o=e.selected+a-e.pageCount+1;return o>0&&s===e.selected-n-o&&(t[s]=r),s>=e.selected-n&&s<=e.selected+a?void(t[s]=r):void 0},r=0;r<e.marginPages;r++)s(r);for(var i=e.pageCount-1;i>=e.pageCount-e.marginPages;i--)s(i);var o=0;e.selected-e.pageRange>0&&(o=e.selected-e.pageRange);var l=e.pageCount;e.selected+e.pageRange<e.pageCount&&(l=e.selected+e.pageRange);for(var c=o;c<l;c++)s(c)}();return t}},methods:{handlePageSelected:function(e){this.selected!==e&&(this.selected=e,this.clickHandler(this.selected+1))},prevPage:function(){this.selected<=0||(this.selected--,this.clickHandler(this.selected+1))},nextPage:function(){this.selected>=this.pageCount-1||(this.selected++,this.clickHandler(this.selected+1))},firstPageSelected:function(){return 0===this.selected},lastPageSelected:function(){return this.selected===this.pageCount-1||0===this.pageCount}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.noLiSurround?n("div",{class:e.containerClass},[n("a",{class:[e.prevLinkClass,{disabled:e.firstPageSelected()}],attrs:{tabindex:"0"},on:{click:function(t){e.prevPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.prevPage():null}}},[e._v(e._s(e.prevText))]),e._v(" "),e._l(e.pages,function(t){return[t.disabled?n("a",{class:[e.pageLinkClass,{active:t.selected,disabled:t.disabled}],attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:[e.pageLinkClass,{active:t.selected,disabled:t.disabled}],attrs:{tabindex:"0"},on:{click:function(n){e.handlePageSelected(t.index)},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.handlePageSelected(t.index):null}}},[e._v("\n      "+e._s(t.content)+"\n    ")])]}),e._v(" "),n("a",{class:[e.nextLinkClass,{disabled:e.lastPageSelected()}],attrs:{tabindex:"0"},on:{click:function(t){e.nextPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.nextPage():null}}},[e._v(e._s(e.nextText))])],2):n("ul",{class:e.containerClass},[n("li",{class:[e.prevClass,{disabled:e.firstPageSelected()}]},[n("a",{class:e.prevLinkClass,attrs:{tabindex:"0"},on:{click:function(t){e.prevPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.prevPage():null}}},[e._v(e._s(e.prevText))])]),e._v(" "),e._l(e.pages,function(t){return n("li",{class:[e.pageClass,{active:t.selected,disabled:t.disabled}]},[t.disabled?n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"}},[e._v(e._s(t.content))]):n("a",{class:e.pageLinkClass,attrs:{tabindex:"0"},on:{click:function(n){e.handlePageSelected(t.index)},keyup:function(n){return"button"in n||!e._k(n.keyCode,"enter",13)?void e.handlePageSelected(t.index):null}}},[e._v(e._s(t.content))])])}),e._v(" "),n("li",{class:[e.nextClass,{disabled:e.lastPageSelected()}]},[n("a",{class:e.nextLinkClass,attrs:{tabindex:"0"},on:{click:function(t){e.nextPage()},keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?void e.nextPage():null}}},[e._v(e._s(e.nextText))])])],2)},staticRenderFns:[]}}])});