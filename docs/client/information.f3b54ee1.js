import{S as t,i as e,s as a,e as r,a as s,b as o,t as n,H as i,g as l,f as c,c as u,d,p as v,h,x as f,j as p,q as g,k as m,o as x,m as b,r as I}from"./client.9b55d42f.js";function k(t){let e,a,x,b,I,k,y,E,w,D,j,G,R=t[1].title+"",V=t[1].detail+"";return{c(){e=o(),a=r("div"),x=r("div"),b=o(),I=r("div"),k=r("a"),y=n("Regresar a Home"),E=o(),w=r("div"),D=n(R),j=o(),G=n(V),this.h()},l(t){i('[data-svelte="svelte-107qnug"]',document.head).forEach(l),e=c(t),a=u(t,"DIV",{class:!0,style:!0});var r=d(a);x=u(r,"DIV",{class:!0}),d(x).forEach(l),b=c(r),I=u(r,"DIV",{class:!0});var s=d(I);k=u(s,"A",{href:!0,class:!0});var o=d(k);y=v(o,"Regresar a Home"),o.forEach(l),E=c(s),w=u(s,"DIV",{class:!0});var n=d(w);D=v(n,R),n.forEach(l),j=c(s),G=v(s,V),s.forEach(l),r.forEach(l),this.h()},h(){document.title="Descripción",h(x,"class","gradient svelte-fuuvth"),h(k,"href","./"),h(k,"class","return svelte-fuuvth"),h(w,"class","title svelte-fuuvth"),h(I,"class","description svelte-fuuvth"),h(a,"class","Information svelte-fuuvth"),f(a,"background","url("+t[0].URL_BIG_IMAGE+t[1].url+")")},m(t,r){p(t,e,r),p(t,a,r),s(a,x),s(a,b),s(a,I),s(I,k),s(k,y),s(I,E),s(I,w),s(w,D),s(I,j),s(I,G)},p(t,[e]){2&e&&R!==(R=t[1].title+"")&&g(D,R),2&e&&V!==(V=t[1].detail+"")&&g(G,V),3&e&&f(a,"background","url("+t[0].URL_BIG_IMAGE+t[1].url+")")},i:m,o:m,d(t){t&&l(e),t&&l(a)}}}function y(t,e,a){let r,s;x(t,I,(t=>a(1,s=t)));const{session:o}=b();return x(t,o,(t=>a(0,r=t))),[r,s,o]}export default class extends t{constructor(t){var o;super(),document.getElementById("svelte-fuuvth-style")||((o=r("style")).id="svelte-fuuvth-style",o.textContent=".Information.svelte-fuuvth{text-align:justify;color:var(--black);height:var(--height);background-repeat:no-repeat !important;background-position:center !important;background-size:cover !important}.gradient.svelte-fuuvth{top:0;bottom:0;right:0;position:fixed;background-image:linear-gradient(var(--white, transparent));pointer-events:none}.title.svelte-fuuvth{font-size:2rem;color:var(--yellow);text-align:center;font-weight:bold;margin:auto;width:90%}.description.svelte-fuuvth{position:relative;padding:10px;width:calc(100% - 20px);display:flex;flex-direction:column;align-items:center;justify-content:center}.return.svelte-fuuvth{padding:10px;background:var(--transparent);border-top:2px solid var(--red);border-bottom:2px solid var(--red);color:var(--red);text-decoration:none;margin:25px auto;text-align:center}",s(document.head,o)),e(this,t,y,k,a,{})}}