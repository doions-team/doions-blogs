(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{45:function(t,e,r){t.exports={TagIndexPage:"TagIndexPage_TagIndexPage__1KLH1"}},46:function(t,e,r){t.exports={TagPage:"TagPage_TagPage__2Zrai"}},66:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.r(e);var o=r(4),c=r.n(o),u=r(8),s=r(6),i=r(0),f=r.n(i),l=r(1),p=r(7),g=r(10),m=r(3),b=r(45),h=r.n(b);var d=function(t){return f.a.createElement("div",{className:h.a.TagIndexPage},f.a.createElement("h1",null,"Tags"),f.a.createElement("ul",null,t.tags.map(function(t){return f.a.createElement("li",{key:t.href},f.a.createElement(m.Link,{href:t.href},t.name," (",t.count,")"))})))},w=r(21),v=r(46),y=r.n(v);var j=function(t){var e=t.blogRoot,r=t.name,n=t.routes;return f.a.createElement("div",{className:y.a.TagPage},f.a.createElement("h1",null,r," posts"),f.a.createElement("ul",null,n.map(function(t){return f.a.createElement("li",{key:t.url.href},f.a.createElement(w.a,{blogRoot:e,route:t}))})))},O=r(13);function x(t){return E.apply(this,arguments)}function E(){return(E=Object(s.a)(c.a.mark(function t(e){var r,n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(x.cache[e]){t.next=8;break}return t.next=3,Object(l.c)({context:{crawlingRoutes:!0},root:e,routes:O.a});case 3:return r=t.sent,n=r.paths,t.next=7,Object(l.l)({method:"HEAD",routes:O.a,urls:n});case 7:x.cache[e]=t.sent;case 8:return t.abrupt("return",x.cache[e]);case 9:case"end":return t.stop()}},t)}))).apply(this,arguments)}x.cache={};var R=Object(l.b)(Object(l.n)(function(t,e){return Object(u.a)(Object(u.a)({},e),{},{tagsRoot:t.mountpath})}),Object(l.o)({"/:tag":function(){var t=Object(s.a)(c.a.mark(function t(e,r){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r.crawlingRoutes){t.next=6;break}return t.t0=T,t.next=4,x(r.blogRoot);case 4:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1).map(function(t){return"/"+t}));case 6:return t.abrupt("return",[]);case 7:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()}),Object(l.j)({"/":Object(l.m)({title:"Tags",getView:function(){var t=Object(s.a)(c.a.mark(function t(e,r){var n,a,o;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(r.blogRoot);case 2:return n=t.sent,a=T(n),o=Object(g.fromPairs)(a.map(function(t){return[t.toLowerCase(),[]]})),n.forEach(function(t){var e=t.data;e&&e.tags&&e.tags.forEach(function(e){e=e.toLowerCase(),o[e]&&o[e].push(t)})}),t.abrupt("return",f.a.createElement(d,{blogRoot:r.blogRoot,tags:a.map(function(t){return{name:t,href:Object(p.join)(e.mountpath,t.toLowerCase()),count:(o[t]||[]).length}})}));case 7:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()}),"/:tag":Object(l.m)({getTitle:function(t){return t.params.tag},getView:function(){var t=Object(s.a)(c.a.mark(function t(e,r){var n,a,o;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params.tag.toLowerCase(),t.next=3,x(r.blogRoot);case 3:return a=t.sent,o=[],a.forEach(function(t){(t.data&&t.data.tags||[]).find(function(t){return t.toLowerCase()===n})&&o.push(t)}),t.abrupt("return",f.a.createElement(j,{blogRoot:r.blogRoot,name:e.params.tag,routes:o}));case 7:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()})}));function T(t){var e;return Array.from(new Set((e=[]).concat.apply(e,a(t.map(function(t){return t.data&&t.data.tags||[]})))))}e.default=R}}]);
//# sourceMappingURL=4.e5c46d0e.chunk.js.map