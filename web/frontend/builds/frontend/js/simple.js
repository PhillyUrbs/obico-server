(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],p=0,f=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],r=!0,c=1;c<o.length;c++){var s=o[c];0!==n[s]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=o[0]))}return e}var r={},n={simple:0},i=[];function a(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=r,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/static/frontend/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;i.push([2,"chunk-vendors"]),o()})({2:function(e,t,o){e.exports=o("d2c0")},3837:function(e,t,o){e.exports=o.p+"img/logo.png"},3942:function(e,t,o){},"785f":function(e,t,o){"use strict";o("99af"),o("fb6a"),o("b0c0"),o("d3b7"),o("ac1f"),o("25f0"),o("5319");var r=o("0122"),n=/(?:^|[-_/])(\w)/g,i="root",a="anonymous component",c=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/,s=function(e){var t=c.exec(e);return t?t.slice(1):[]},u=function(e,t){var o=s(e)[2];return t&&o.substr(-1*t.length)===t&&(o=o.substr(0,o.length-t.length)),o},l=function(e){if(!e)return a;if(e.$root===e)return i;if(!e.$options)return a;if(e.$options.name)return e.$options.name;if(e.$options._componentTag)return e.$options._componentTag;if(e.$options.__file){var t=e.$options.__file.replace(/^[a-zA-Z]:/,"").replace(/\\/g,"/"),o=u(t,".vue");return o.replace(n,(function(e,t){return t?t.toUpperCase():""}))}return a},p=function e(t,o,n,i,a,c){var s=0;for(var u in o){if(s+=1,s>c)break;"object"==Object(r["a"])(o[u])?a>i&&e(t,o[u],n+"."+u,i+1,a,c):t[n+"."+u]=o[u]}},f=function(e){var t=e.config.errorHandler;e.config.errorHandler=function(o,r,n){if(window.Sentry){var i={},a=r;if(r._original&&(a=r._original),a)try{i.componentName=l(a),p(i,JSON.parse(JSON.stringify(a.$options.propsData)),"props",0,2,10)}catch(c){console.log("Unable to extract metadata from Vue component.")}n&&(i.lifecycleHook=n),setTimeout((function(){window.Sentry.getCurrentHub().withScope((function(e){e.setContext("vue",i),window.Sentry.getCurrentHub().captureException(o)}))}))}"function"===typeof t&&t.call(e,o,r,n),e.util&&e.util.warn("Error in ".concat(n,': "').concat(o.toString(),'"'),r),console.error(o)}};t["a"]=f},"850a":function(e,t,o){"use strict";var r=o("3942"),n=o.n(r);n.a},b5b9:function(e,t,o){e.exports=o.p+"img/logo.png"},d2c0:function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("a026"),n=o("5f5b"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"example"},[e._v(" "+e._s(e.msg)+" "),r("b",{directives:[{name:"b-popover",rawName:"v-b-popover.hover",value:{title:"Popover",content:"This is the content of popover"},expression:"{title:'Popover', content:'This is the content of popover'}",modifiers:{hover:!0}}]},[e._v("POPOVER")])]),r("div",[r("img",{attrs:{src:e.logo}}),r("img",{attrs:{src:o("3837")}}),r("img",{attrs:{src:o("b5b9")}})]),r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:"Card Title","img-src":e.logo,"img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-text",[e._v(" Here you can see a "),r("b",{directives:[{name:"b-popover",rawName:"v-b-popover.hover",value:{title:"Popover",content:"This is the content of popover"},expression:"{title:'Popover', content:'This is the content of popover'}",modifiers:{hover:!0}}]},[e._v("POPOVER")]),e._v(" in action. ")]),r("b-button",{attrs:{href:"#",variant:"primary"}},[e._v("Go somewhere")])],1),r("div",{staticClass:"form-group mt-2"},e._l(["a","b"],(function(t){return r("div",{key:t,staticClass:"custom-control custom-radio"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.choice,expression:"choice"}],staticClass:"custom-control-input",attrs:{type:"radio",name:"select",id:"select-"+t},domProps:{value:t,checked:e._q(e.choice,t)},on:{change:function(o){e.choice=t}}}),r("label",{staticClass:"custom-control-label",attrs:{for:"select-"+t}},[e._v("Choice: "+e._s(t))])])})),0)],1)},a=[],c=o("3837"),s=o.n(c),u=o("205f"),l=o("d6e4"),p=o("1947"),f={components:{BCard:u["a"],BCardText:l["a"],BButton:p["a"]},data:function(){return{msg:"Hello from vue!",choice:"a",logo:s.a}}},v=f,d=(o("850a"),o("2877")),m=Object(d["a"])(v,i,a,!1,null,"d27a8994",null),b=m.exports,g=o("785f");Object(g["a"])(r["default"]),r["default"].use(n["a"]),new r["default"]({render:function(e){return e(b)}}).$mount("#vue-app-simple")}});
//# sourceMappingURL=simple.js.map