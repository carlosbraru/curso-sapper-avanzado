import{v as t,_ as e,a as n,b as r,c as s,i as a,d as o,S as c,e as i,f as u,s as f,g as l,x as m,O as p,l as h,k as d,h as v,j as x,y,m as g,o as b,q as j,z as k,r as w}from"./client.c6899055.js";import{_ as R}from"./asyncToGenerator.5229e80b.js";function E(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,a=n(t);if(e){var o=n(this).constructor;s=Reflect.construct(a,arguments,o)}else s=a.apply(this,arguments);return r(this,s)}}function D(t){var e,n,r,s,a,o,c=t[0].title+"",f=t[0].html+"";return document.title=e=t[0].title,{c:function(){n=l(),r=i("h1"),s=m(c),a=l(),o=i("div"),this.h()},l:function(t){p('[data-svelte="svelte-1uty71u"]',document.head).forEach(h),n=d(t),r=v(t,"H1",{});var e=x(r);s=y(e,c),e.forEach(h),a=d(t),o=v(t,"DIV",{class:!0}),x(o).forEach(h),this.h()},h:function(){g(o,"class","content svelte-emm3f3")},m:function(t,e){b(t,n,e),b(t,r,e),u(r,s),b(t,a,e),b(t,o,e),o.innerHTML=f},p:function(t,n){var r=j(n,1)[0];1&r&&e!==(e=t[0].title)&&(document.title=e),1&r&&c!==(c=t[0].title+"")&&k(s,c),1&r&&f!==(f=t[0].html+"")&&(o.innerHTML=f)},i:w,o:w,d:function(t){t&&h(n),t&&h(r),t&&h(a),t&&h(o)}}}function H(t){return T.apply(this,arguments)}function T(){return(T=R(t.mark((function e(n){var r,s,a;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.params,t.next=3,this.fetch("blog/".concat(r.slug,".json"));case 3:return s=t.sent,t.next=6,s.json();case 6:if(a=t.sent,200!==s.status){t.next=11;break}return t.abrupt("return",{post:a});case 11:this.error(s.status,a.message);case 12:case"end":return t.stop()}}),e,this)})))).apply(this,arguments)}function z(t,e,n){var r=e.post;return t.$$set=function(t){"post"in t&&n(0,r=t.post)},[r]}var I=function(t){e(r,c);var n=E(r);function r(t){var e,c;return s(this,r),e=n.call(this),document.getElementById("svelte-emm3f3-style")||((c=i("style")).id="svelte-emm3f3-style",c.textContent=".content.svelte-emm3f3 h2{font-size:1.4em;font-weight:500}.content.svelte-emm3f3 pre{background-color:#f9f9f9;box-shadow:inset 1px 1px 5px rgba(0, 0, 0, 0.05);padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-emm3f3 pre code{background-color:transparent;padding:0}.content.svelte-emm3f3 ul{line-height:1.5}.content.svelte-emm3f3 li{margin:0 0 0.5em 0}",u(document.head,c)),a(o(e),t,z,D,f,{post:0}),e}return r}();export default I;export{H as preload};
