(function(t){function e(e){for(var a,r,o=e[0],c=e[1],u=e[2],l=0,h=[];l<o.length;l++)r=o[l],n[r]&&h.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},n={app:0},i=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"15bf6aa6"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var e=[],s=n[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise(function(e,a){s=n[t]=[e,a]});e.push(s[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t),i=function(e){c.onerror=c.onload=null,clearTimeout(u);var s=n[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");r.type=a,r.request=i,s[1](r)}n[t]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/seriline/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),n=s.n(a);n.a},"2b61":function(t,e,s){"use strict";var a=s("9273"),n=s.n(a);n.a},"4c8c":function(t,e,s){"use strict";var a=s("d607"),n=s.n(a);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/"}},[t._v("Search")]),t._v(" |\n    "),s("router-link",{attrs:{to:"/favorites"}},[t._v("Favorites")])],1),s("router-view")],1)},i=[],r=s("f499"),o=s.n(r);function c(t){localStorage.setItem("Favorite",o()(t))}function u(){return JSON.parse(localStorage.getItem("Favorite"))}function l(t){localStorage.setItem("Query",o()(t))}function d(){return JSON.parse(localStorage.getItem("Query"))}var h={created:function(){this.$store.commit("addAllFavoriteShows",u()),this.$store.commit("setQuery",d())},updated:function(){c(this.$store.state.favoriteShows),l(this.$store.state.query)}},f=h,v=(s("034f"),s("2877")),p=Object(v["a"])(f,n,i,!1,null,null,null),m=p.exports,g=s("8c4f"),w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("search-field"),s("shows-list",{attrs:{shows:t.searchedShows}})],1)},_=[],y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"field has-addons"},[s("p",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"input",attrs:{type:"text",placeholder:"Find a TV series"},domProps:{value:t.query},on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchByQuery(e):null},input:function(e){e.target.composing||(t.query=e.target.value)}}})]),s("p",{staticClass:"control"},[s("button",{staticClass:"button",on:{click:t.searchByQuery}},[t._v("\n                Search\n            ")])])])])},C=[],b={name:"SearchField",data:function(){return{query:""}},methods:{searchByQuery:function(){this.$store.dispatch("searchByQuery",this.query)}},created:function(){this.query=this.$store.state.query}},S=b,k=(s("4c8c"),Object(v["a"])(S,y,C,!1,null,null,null)),$=k.exports,O=s("f183"),j={name:"Search",components:{ShowsList:O["a"],SearchField:$},computed:{searchedShows:function(){return this.$store.state.searchedShows}}},F=j,P=Object(v["a"])(F,w,_,!1,null,null,null),q=P.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show?s("div",{staticClass:"columns detail-container"},[s("div",{staticClass:"card column is-one-third"},[s("div",{staticClass:"card-image"},[t.show.image?s("figure",{staticClass:"image is-2by3"},[s("img",{attrs:{src:t.show.image.original,alt:"Placeholder image"}})]):t._e()]),s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("p",{staticClass:"subtitle"},[t._v(t._s(t.show.status))]),s("div",{staticClass:"tags"},t._l(t.show.genres,function(e){return s("span",{key:e,staticClass:"tag"},[t._v(t._s(e))])}),0)])])]),s("div",{staticClass:"card-content"},[s("div",{staticClass:"tags has-addons"},[s("span",{staticClass:"tag"},[t._v("Premiered")]),s("span",{staticClass:"tag is-link"},[t._v(t._s(t.premiereDate))])])])]),s("div",{staticClass:"column with-description"},[s("div",{staticClass:"description"},[s("p",{staticClass:"title is-4"},[t._v(t._s(t.show.name))]),s("div",{staticClass:"content"},[t._v("\n                "+t._s(t.description)+"\n            ")]),t.show.language?s("div",{staticClass:"tags has-addons"},[s("span",{staticClass:"tag"},[t._v("Language")]),s("span",{staticClass:"tag is-link"},[t._v(t._s(t.show.language))])]):t._e(),t.show.rating.average?s("div",{staticClass:"tags has-addons"},[s("span",{staticClass:"tag"},[t._v("Rating")]),s("span",{staticClass:"tag is-link"},[t._v(t._s(t.show.rating.average+"/10"))])]):t._e(),s("div",{staticClass:"buttons"},[s("div",{staticClass:"button is-link",attrs:{href:t.show.officialSite}},[t._v("Official site")]),s("button",{staticClass:"button is-link",attrs:{disabled:t.isFavorite},on:{click:function(e){t.addToFavorite()}}},[t._v("Add to favorites\n                    ☆\n                ")])])])])]):t._e()},D=[],T=(s("a481"),s("c5f6"),{name:"ShowDetailed",data:function(){return{show:null}},created:function(){var t,e=Number(this.$route.params.id);t=this.$store.state.searchedShows.filter(function(t){return!(!t.id||t.id!==e)}),t.length||(t=this.$store.state.favoriteShows.filter(function(t){return!(!t.id||t.id!==e)})),this.show=t[0]},computed:{description:function(){return this.show.summary?this.show.summary.slice(3,-4).replace(/<[^>]+>/g,""):"Summary"},premiereDate:function(){return new Date(this.show.premiered).toLocaleDateString()},isFavorite:function(){var t=this;return this.$store.state.favoriteShows.filter(function(e){return!(!e.id||e.id!==t.show.id)}).length>0}},methods:{addToFavorite:function(){this.$store.dispatch("addShowToFavorite",this.show)}}}),Q=T,E=(s("5f2c"),Object(v["a"])(Q,x,D,!1,null,"2aed66f2",null)),L=E.exports;a["a"].use(g["a"]);var B=new g["a"]({routes:[{path:"/",name:"Search",component:q},{path:"/favorites",name:"Favorites",component:function(){return s.e("about").then(s.bind(null,"48d5"))}},{path:"/details/:id",name:"Details",component:L}]}),A=s("75fc"),I=s("2f62"),J=s("795b"),M=s.n(J),N=s("bc3a"),z=s.n(N),R="https://api.tvmaze.com",V="/search/shows?q=";function G(t){return new M.a(function(e){z.a.get(R+V+t).then(function(t){e(H(t))})})}function H(t){var e=[];return t.data.map(function(t){e.push(t.show)}),e}a["a"].use(I["a"]);var K=new I["a"].Store({state:{query:"",searchedShows:[],favoriteShows:[]},mutations:{setQuery:function(t,e){t.query=e},setSearchedShows:function(t,e){t.searchedShows=e},addFavorite:function(t,e){t.favoriteShows.push(e)},addAllFavoriteShows:function(t,e){var s;(s=t.favoriteShows).push.apply(s,Object(A["a"])(e))}},actions:{searchByQuery:function(t,e){var s=t.commit;s("setQuery",e),G(e).then(function(t){return s("setSearchedShows",t)},function(t){return console.log(t)})},addShowToFavorite:function(t,e){var s=t.commit;s("addFavorite",e)}}});s("92c6");a["a"].config.productionTip=!1,new a["a"]({router:B,store:K,render:function(t){return t(m)}}).$mount("#app")},"5f2c":function(t,e,s){"use strict";var a=s("64a8"),n=s.n(a);n.a},"64a8":function(t,e,s){},"64a9":function(t,e,s){},9273:function(t,e,s){},b4f0:function(t,e,s){"use strict";var a=s("efc9"),n=s.n(a);n.a},d607:function(t,e,s){},efc9:function(t,e,s){},f183:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-container"},[s("div",{staticClass:"columns"},t._l(t.shows,function(e){return s("show-card",{key:e.id,staticClass:"column is-one-quarter",attrs:{show:e},on:{click:function(s){t.goToDetailPage(e.id)}}})}),1)])},n=[],i=(s("cadf"),s("551c"),s("097d"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show?s("div",{staticClass:"card",on:{click:function(e){t.$emit("click")}}},[s("div",{staticClass:"card-image"},[t.show.image?s("figure",{staticClass:"image is-2by3"},[s("img",{attrs:{src:t.show.image.original,alt:"Placeholder image"}})]):t._e()]),s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v(t._s(t.show.name))]),s("p",{staticClass:"subtitle"},[t._v(t._s(t.show.status))]),s("div",{staticClass:"tags"},t._l(t.show.genres,function(e){return s("span",{key:e,staticClass:"tag"},[t._v(t._s(e))])}),0)])]),s("div",{staticClass:"content"},[t._v("\n            "+t._s(t.description)+"\n        ")])]),s("div",{staticClass:"card-content premiered"},[s("div",{staticClass:"tags has-addons"},[s("span",{staticClass:"tag"},[t._v("Premiered")]),s("span",{staticClass:"tag is-link"},[t._v(t._s(t.premiereDate))])])])]):t._e()}),r=[],o=(s("a481"),{name:"ShowCard",props:{show:null},computed:{description:function(){if(this.show.summary){var t=this.show.summary.slice(3,-4).slice(0,180).replace(/<[^>]+>/g,"");return t+"..."}return"Summary"},premiereDate:function(){return new Date(this.show.premiered).toLocaleDateString()}}}),c=o,u=(s("b4f0"),s("2877")),l=Object(u["a"])(c,i,r,!1,null,"1a529730",null),d=l.exports,h={name:"ShowsList",components:{ShowCard:d},props:{shows:null},methods:{goToDetailPage:function(t){this.$router.push("details/"+t)}}},f=h,v=(s("2b61"),Object(u["a"])(f,a,n,!1,null,"c2df3cec",null));e["a"]=v.exports}});
//# sourceMappingURL=app.9703130d.js.map