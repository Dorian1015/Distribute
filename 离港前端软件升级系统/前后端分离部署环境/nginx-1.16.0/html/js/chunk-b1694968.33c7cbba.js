(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1694968"],{"159b":function(t,e,n){var a=n("da84"),i=n("fdbc"),r=n("17c2"),o=n("9112");for(var s in i){var c=a[s],u=c&&c.prototype;if(u&&u.forEach!==r)try{o(u,"forEach",r)}catch(l){u.forEach=r}}},"17c2":function(t,e,n){"use strict";var a=n("b727").forEach,i=n("a640"),r=n("ae40"),o=i("forEach"),s=r("forEach");t.exports=o&&s?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"1b42":function(t,e,n){"use strict";var a=n("26c8"),i=n.n(a);i.a},"1dde":function(t,e,n){var a=n("d039"),i=n("b622"),r=n("2d00"),o=i("species");t.exports=function(t){return r>=51||!a((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"26c8":function(t,e,n){},3914:function(t,e,n){},"3f66":function(t,e,n){"use strict";var a=n("b5c7"),i=n.n(a);i.a},4160:function(t,e,n){"use strict";var a=n("23e7"),i=n("17c2");a({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"4de4":function(t,e,n){"use strict";var a=n("23e7"),i=n("b727").filter,r=n("1dde"),o=n("ae40"),s=r("filter"),c=o("filter");a({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,n){var a=n("861d"),i=n("e8b5"),r=n("b622"),o=r("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?a(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"7dce":function(t,e,n){"use strict";var a=n("3914"),i=n.n(a);i.a},"7f1a":function(t,e,n){t.exports=n.p+"img/dog.146655c9.jpg"},8078:function(t,e,n){"use strict";var a=n("a6d4"),i=n.n(a);i.a},a640:function(t,e,n){"use strict";var a=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&a((function(){n.call(null,e||function(){throw 1},1)}))}},a6d4:function(t,e,n){},ae40:function(t,e,n){var a=n("83ab"),i=n("d039"),r=n("5135"),o=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(r(s,t))return s[t];e||(e={});var n=[][t],u=!!r(e,"ACCESSORS")&&e.ACCESSORS,l=r(e,0)?e[0]:c,d=r(e,1)?e[1]:void 0;return s[t]=!!n&&!i((function(){if(u&&!a)return!0;var t={length:-1};u?o(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,l,d)}))}},b0c0:function(t,e,n){var a=n("83ab"),i=n("9bf2").f,r=Function.prototype,o=r.toString,s=/^\s*function ([^ (]*)/,c="name";a&&!(c in r)&&i(r,c,{configurable:!0,get:function(){try{return o.call(this).match(s)[1]}catch(t){return""}}})},b5c7:function(t,e,n){},b727:function(t,e,n){var a=n("0366"),i=n("44ad"),r=n("7b0b"),o=n("50c4"),s=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,d=6==t,f=5==t||d;return function(h,m,b,p){for(var v,g,T=r(h),S=i(T),L=a(m,b,3),w=o(S.length),C=0,x=p||s,y=e?x(h,w):n?x(h,0):void 0;w>C;C++)if((f||C in S)&&(v=S[C],g=L(v,C,T),t))if(e)y[C]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return C;case 2:c.call(y,v)}else if(l)return!1;return d?-1:u||l?l:y}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},bc13:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("Menu"),n("Header"),n("Tags"),n("div",{staticClass:"content"},[n("transition",{attrs:{name:"move",mode:"out-in"}},[n("keep-alive",{attrs:{include:t.tagsList}},[n("router-view")],1)],1),n("el-backtop",{attrs:{target:".content"}})],1)],1)},i=[],r=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"menu"}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{collapse:t.isCollapse,"active-text-color":"#20a0ff","background-color":"#324157","text-color":"#bfcbd9"}},t._l(t.menuList,(function(e){return n("el-menu-item",{key:e.index,attrs:{index:e.index},on:{click:function(n){return t.btnClick(e.title)}}},[n("i",{class:e.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])})),1)],1)}),o=[],s=(n("4160"),n("159b"),n("2b0e")),c=new s["default"],u={name:"Menu",data:function(){return{isCollapse:this.$store.state.menuCollapse,menuList:[{icon:"el-icon-document",path:"/version",title:"版本管理"},{icon:"el-icon-document",path:"/counter",title:"柜台信息"},{icon:"el-icon-document",path:"/log",title:"日志信息"}]}},methods:{btnClick:function(t){this.menuList.forEach((function(e,n){e.title===t&&c.$emit("menu",e)})),this.$store.dispatch("menuNameActionFun",t)}}},l=u,d=(n("3f66"),n("2877")),f=Object(d["a"])(l,r,o,!1,null,"77b214a9",null),h=f.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"header"}},[a("div",{staticClass:"logo"},[a("span",{staticClass:"mainTag"},[t._v("首页")]),a("span",{staticClass:"splitLine"},[t._v("/")]),a("span",{staticClass:"secondTag"},[t._v(t._s(t.$store.state.menuName))])]),a("div",{staticClass:"header-right"},[a("div",{staticClass:"header-user-con"},[a("div",{staticClass:"user-avator"},[a("img",{directives:[{name:"show",rawName:"v-show",value:0==t.imgShow,expression:"imgShow == 0"}],attrs:{src:n("d20b")},on:{click:t.changeImg}}),a("img",{directives:[{name:"show",rawName:"v-show",value:1==t.imgShow,expression:"imgShow == 1"}],attrs:{src:n("7f1a")},on:{click:t.changeImg}})]),a("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:t.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[t._v(" "+t._s(t.userName)+" "),a("i",{staticClass:"el-icon-caret-bottom"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[t._v("退出登录")])],1)],1)],1)])])},b=[],p={name:"Header",data:function(){return{userName:"超级管理员",menuName:"版本管理",imgShow:0}},methods:{handleCommand:function(t){"loginout"==t&&(localStorage.setItem("token",""),this.$router.push("login"))},changeImg:function(){this.imgShow=0===this.imgShow?1:0}}},v=p,g=(n("7dce"),Object(d["a"])(v,m,b,!1,null,"5e463e1c",null)),T=g.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tags"}},[n("el-tabs",{attrs:{type:"card",closable:""},on:{"tab-remove":t.removeTab},model:{value:t.editableTabsValue,callback:function(e){t.editableTabsValue=e},expression:"editableTabsValue"}},t._l(t.editableTabs,(function(t){return n("el-tab-pane",{key:t.name,attrs:{label:t.title,name:t.name}},[n("router-link",{staticClass:"tags-li-title",attrs:{to:t.path}})],1)})),1)],1)},L=[],w=(n("4de4"),{name:"Tags",data:function(){return{editableTabs:[{title:"版本管理",path:"/version",name:"版本管理"}],editableTabsValue:"版本管理",addMenuPath:""}},mounted:function(){var t=this;c.$on("menu",(function(e){t.addMenuPath=e.path,t.addTab(e.title)}))},watch:{editableTabsValue:function(){var t=this,e=this.editableTabs,n=this.editableTabsValue;e.forEach((function(e,a){e.name===n&&(t.$store.dispatch("menuNameActionFun",n),t.$router.push(e.path))}))}},methods:{addTab:function(t){var e=this.editableTabs,n=!0,a="";e.forEach((function(e,i){e.name===t&&(n=!1,a=e.path)})),n&&(a=this.addMenuPath,this.editableTabs.push({title:t,path:a,name:t})),this.editableTabsValue=t,this.$store.dispatch("menuNameActionFun",t),this.$router.push(a),c.$emit("tags",this.editableTabs)},removeTab:function(t){var e=this,n=this.editableTabs,a=this.editableTabsValue;a===t&&n.forEach((function(i,r){if(i.name===t){var o=n[r+1]||n[r-1];o?a=o.name:(a="版本管理",e.addMenuPath="/version")}})),this.editableTabsValue=a,this.editableTabs=n.filter((function(e){return e.name!==t})),this.addTab(a)}},created:function(){this.addTab(this.editableTabs[0].title)}}),C=w,x=(n("8078"),Object(d["a"])(C,S,L,!1,null,"12065852",null)),y=x.exports,E={name:"Home",data:function(){return{tagsList:[{title:"首页",name:"首页"}]}},components:{Menu:h,Header:T,Tags:y},created:function(){var t=this;c.$on("tags",(function(e){for(var n=[],a=0,i=e.length;a<i;a++)e[a].name&&n.push(e[a].name);t.tagsList=n}))}},k=E,_=(n("1b42"),Object(d["a"])(k,a,i,!1,null,"81330a8a",null));e["default"]=_.exports},d20b:function(t,e,n){t.exports=n.p+"img/cat.fbca2f72.jpg"},e8b5:function(t,e,n){var a=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-b1694968.33c7cbba.js.map