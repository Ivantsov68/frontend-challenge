(function(e){function t(t){for(var c,o,l=t[0],i=t[1],s=t[2],d=0,f=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);u&&u(t);while(f.length)f.shift()();return n.push.apply(n,s||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],c=!0,l=1;l<a.length;l++){var i=a[l];0!==r[i]&&(c=!1)}c&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var c={},r={app:0},n=[];function o(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=c,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(a,c,function(t){return e[t]}.bind(null,c));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/frontend-challenge/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0b74":function(e,t,a){"use strict";a("b9e3")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var c=a("7a23"),r={id:"app"};function n(e,t,a,n,o,l){var i=Object(c["v"])("router-view");return Object(c["o"])(),Object(c["d"])("div",r,[Object(c["f"])(i)])}var o={name:"App"};o.render=n;var l=o,i=a("6c02"),s={class:"header"},u={class:"container"},d={class:"header-block"},f={class:"header-nav"},p={class:"link-wrapper"},b=Object(c["e"])("Все котики"),O={class:"link-wrapper"},j=Object(c["e"])("Любимые котики"),v={class:"main"},g={class:"container"},h={class:"main-block"},m={class:"love-cats"},y={class:"wrapper-like"},k=Object(c["f"])("div",{class:"circle"},null,-1);function S(e,t,a,r,n,o){var l=Object(c["v"])("router-link");return Object(c["o"])(),Object(c["d"])("body",null,[Object(c["f"])("header",s,[Object(c["f"])("div",u,[Object(c["f"])("div",d,[Object(c["f"])("nav",f,[Object(c["f"])("div",p,[Object(c["f"])(l,{class:"nav-link",to:"/frontend-challenge/",exact:""},{default:Object(c["z"])((function(){return[b]})),_:1})]),Object(c["f"])("div",O,[Object(c["f"])(l,{class:"nav-link",to:"/frontend-challenge/like-cats"},{default:Object(c["z"])((function(){return[j]})),_:1})])])])])]),Object(c["f"])("main",null,[Object(c["f"])("section",v,[Object(c["f"])("div",g,[Object(c["f"])("div",h,[Object(c["f"])("div",m,[(Object(c["o"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(n.data,(function(e){return Object(c["o"])(),Object(c["d"])("div",{class:"image-wrapper",key:e.id+Date.now()},[Object(c["f"])("img",{class:"cat-img",src:e.url,alt:"",onClick:t[1]||(t[1]=function(){return o.img&&o.img.apply(o,arguments)})},null,8,["src"]),Object(c["f"])("label",y,[Object(c["f"])("input",{type:"checkbox",class:"check-box",onClick:t[2]||(t[2]=function(){return o.addLikeCats&&o.addLikeCats.apply(o,arguments)})}),k])])})),128))]),Object(c["f"])("div",{onClick:t[3]||(t[3]=function(){return o.moreCats&&o.moreCats.apply(o,arguments)}),class:"more-cats"}," ... загружаем еще котиков ... ")])])])])])}var w=a("2909"),x=a("b85c"),N=a("1da1"),C=(a("96cf"),a("7db0"),a("99af"),a("a434"),a("bc3a")),_=a.n(C),J={name:"AllCats",data:function(){return{data:[],url:"",page:1}},watch:{url:function(e){localStorage.url=e}},mounted:function(){var e=this;try{JSON.parse(localStorage.getItem("url"))}catch(t){localStorage.setItem("url","[]")}this.loadNextImage(),document.onscroll=function(){var t=document.querySelector(".more-cats").getBoundingClientRect();600===t.y&&(e.page++,e.loadNextImage())}},methods:{loadNextImage:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var a,c,r,n,o,l,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,_.a.defaults.headers.common["x-api-key"]="d8c07093-2298-45f3-9d95-d595ded37ef0",t.next=4,_.a.get("https://api.thecatapi.com/v1/images/search",{params:{limit:15,page:e.page,order:"desc"}});case 4:if(a=t.sent,c=[],e.data)(i=e.data).push.apply(i,Object(w["a"])(a.data));else{n=Object(x["a"])(e.data);try{for(l=function(){var e=o.value;a.data.find((function(t){return t.id===e.id}))||c.push(e)},n.s();!(o=n.n()).done;)l()}catch(s){n.e(s)}finally{n.f()}(r=e.data).push.apply(r,c)}t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},moreCats:function(){this.page++,this.loadNextImage()},img:function(){console.log("wsr")},addLikeCats:function(e){if(console.log(e.target),e.target.checked){var t=e.target.parentNode.parentNode.querySelector("img").getAttribute("src");localStorage.url&&Array.isArray(JSON.parse(localStorage.url))&&(localStorage.url=JSON.stringify([].concat(Object(w["a"])(JSON.parse(localStorage.url)),[t])),this.url=localStorage.url)}else{var a=e.target.parentNode.parentNode.querySelector("img").getAttribute("src"),c=JSON.parse(localStorage.url),r=c.splice(find((function(e){return e===a})),1);localStorage.url=JSON.stringify(c),console.log(r),console.log(c)}}}};a("d439");J.render=S;var A=J,L=Object(c["A"])("data-v-0e3df160");Object(c["r"])("data-v-0e3df160");var I={class:"header"},P={class:"container"},q={class:"header-block"},M={class:"header-nav"},K={class:"link-wrapper"},R=Object(c["e"])("Все котики"),U={class:"link-wrapper"},z=Object(c["e"])("Любимые котики"),T={class:"main"},B={class:"container"},D={class:"main-block"},E={class:"love-cats"},F={class:"wrapper-like"},G=Object(c["f"])("div",{class:"circle"},null,-1);Object(c["p"])();var H=L((function(e,t,a,r,n,o){var l=Object(c["v"])("router-link");return Object(c["o"])(),Object(c["d"])("body",null,[Object(c["f"])("header",I,[Object(c["f"])("div",P,[Object(c["f"])("div",q,[Object(c["f"])("nav",M,[Object(c["f"])("div",K,[Object(c["f"])(l,{class:"nav-link",to:"/frontend-challenge/",exact:""},{default:L((function(){return[R]})),_:1})]),Object(c["f"])("div",U,[Object(c["f"])(l,{class:"nav-link",to:"/frontend-challenge/like-cats"},{default:L((function(){return[z]})),_:1})])])])])]),Object(c["f"])("main",null,[Object(c["f"])("section",T,[Object(c["f"])("div",B,[Object(c["f"])("div",D,[Object(c["f"])("div",E,[(Object(c["o"])(),Object(c["d"])("div",{key:n.componentKey},[(Object(c["o"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(n.addedUrl,(function(e){return Object(c["o"])(),Object(c["d"])("div",{class:"image-wrapper",key:e},[Object(c["f"])("img",{class:"cat-img",src:e,alt:""},null,8,["src"]),Object(c["f"])("label",F,[Object(c["f"])("input",{type:"checkbox",class:"check-box",onClick:t[1]||(t[1]=function(){return o.removeLikeCats&&o.removeLikeCats.apply(o,arguments)}),checked:""}),G])])})),128))]))])])])])])])})),Q={name:"LikeCats",data:function(){return{addedUrl:JSON.parse(localStorage.url),componentKey:0}},methods:{removeLikeCats:function(e){if(console.log(e.target),!e.target.checked){var t=e.target.parentNode.parentNode.querySelector("img").getAttribute("src"),a=JSON.parse(localStorage.url),c=a.splice(a.indexOf(t),1);localStorage.url=JSON.stringify(a),this.addedUrl=a,this.componentKey++,console.log(c),console.log(a)}}}};a("0b74");Q.render=H,Q.__scopeId="data-v-0e3df160";var V=Q,W=[{path:"/frontend-challenge/",name:"AllCats",component:A},{path:"/frontend-challenge/like-cats",name:"LikeCats",component:V}],X=Object(i["a"])({history:Object(i["b"])(),routes:W}),Y=X,Z=Object(c["c"])(l);Z.use(Y),Z.mount("#app")},a292:function(e,t,a){},b9e3:function(e,t,a){},d439:function(e,t,a){"use strict";a("a292")}});
//# sourceMappingURL=app.039935cb.js.map