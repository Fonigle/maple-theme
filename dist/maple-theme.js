!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var a in n)("object"==typeof exports?exports:e)[a]=n[a]}}(window,function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1);var a=function(e,t,n,a){var r=t.arg,o=t.value,i=t.modifiers,c=Object.keys(i);switch(r){case"color":var s="";(0===o||"whiteness"===o)&&(s="whiteness"),(1===o||"primary"===o||void 0===o)&&(s="primary"),(2===o||"secondary"===o)&&(s="secondary"),(3===o||"thirdly"===o)&&(s="thirdly"),(12===o||"main-pale"===o)&&(s="main-pale"),(15===o||"main"===o)&&(s="main"),(18===o||"main-deep"===o)&&(s="main-deep"),(20===o||"accent-pale"===o)&&(s="accent-pale"),(21===o||"accent"===o)&&(s="accent"),(22===o||"accent-deep"===o)&&(s="accent-deep"),(200===o||"success"===o)&&(s="success"),(300===o||"warning"===o)&&(s="warning"),(400===o||"error"===o)&&(s="error");var d="";c.indexOf("hover")>=0&&(d="hover-"),c.indexOf("active")>=0&&(d="active-"),e.classList.add("mp-theme-color-"+d+s);break;case"background":var l="";(-1===o||"floor"===o)&&(l="floor"),(0===o||"panel"===o)&&(l="panel"),(1===o||"component"===o||void 0===o)&&(l="component"),(12===o||"main-pale"===o)&&(l="main-pale"),(15===o||"main"===o)&&(l="main"),(18===o||"main-deep"===o)&&(l="main-deep"),(22===o||"accent-pale"===o)&&(l="accent-pale"),(25===o||"accent"===o)&&(l="accent"),(28===o||"accent-deep"===o)&&(l="accent-deep"),(30===o||"highlight-pale"===o)&&(l="highlight-pale"),(31===o||"highlight"===o)&&(l="highlight"),(40===o||"cloak"===o)&&(l="cloak"),(200===o||"success"===o)&&(l="success"),(300===o||"warning"===o)&&(l="warning"),(400===o||"error"===o)&&(l="error"),d="",c.indexOf("hover")>=0&&(d="hover-"),c.indexOf("active")>=0&&(d="active-"),e.classList.add("mp-theme-background-"+d+l);break;case"border":var p=[];if(c.indexOf("all")>=0)p.push("all");else{for(var u=!1,f=0,m=["top","right","bottom","left"];f<m.length;f++){var h=m[f];c.indexOf(h)>=0&&(p.push(h),u=!0)}!u&&p.push("bottom")}var v="";c.indexOf("not-last")>=0&&(v="-not-last");var b="solid";c.indexOf("dashed")>=0&&(b="dashed"),c.indexOf("dotted")>=0&&(b="dotted");for(var y=0,g=p;y<g.length;y++){var O=g[y];e.classList.add("mp-theme-border-default-"+O+"-"+b+v)}break;case"shadow":for(var x=0,k=0,j=[1,2,3,4,5];k<j.length;k++)o===(h=j[k])&&(x=o);void 0===o&&(x=1),d="",Object.keys(i).indexOf("hover")>=0&&(d="hover-"),Object.keys(i).indexOf("active")>=0&&(d="active-");var L="";Object.keys(i).indexOf("filter")>=0&&(L="-filter"),x&&e.classList.add("mp-theme-shadow-"+d+x+L)}},r={install:function(e){e.prototype.$theme={brigthness:function(e){switch(e){case"dark":document.body.classList.replace("mp-light","mp-dark");break;case"light":document.body.classList.replace("mp-dark","mp-light");break;case"toggle":document.body.classList.contains("mp-light")?document.body.classList.replace("mp-light","mp-dark"):document.body.classList.replace("mp-dark","mp-light")}},color:function(e){var t;if(e){var n=[];document.body.classList.forEach(function(e){/^mp-theme-/.test(e)&&n.push(e)}),(t=document.body.classList).remove.apply(t,n),document.body.classList.add("mp-theme-"+e)}}}}},o={install:function(e,t){var n=t&&t.brightness||"light",o=t&&t.color||"default";document.body.classList.add("mp-"+n),document.body.classList.add("mp-theme-"+o),e.directive("theme",a),e.use(r)}};t.default=o}])});