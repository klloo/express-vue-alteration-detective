webpackJsonp([1],{"62cB":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r=n("mtWM"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},s,!1,function(t){n("Yx1/")},null,null).exports,a=n("/ocq"),c={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v("인덱스 페이지")])},staticRenderFns:[]};var u=n("VU/8")({},c,!1,function(t){n("62cB")},null,null).exports,l={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v("로그인 페이지")])},staticRenderFns:[]};var v=n("VU/8")({},l,!1,function(t){n("Rqzv")},null,null).exports,p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"movies"},[n("h1",[t._v("영화 목록")]),t._v(" "),t._l(t.movies,function(e,i){return n("div",{key:i,staticClass:"movie"},[n("img",{staticClass:"poster",attrs:{src:e.poster}}),t._v(" "),n("div",[n("strong"),t._v(", "),n("i"),t._v(" []\n      "),n("router-link",{attrs:{to:{name:"show",params:{id:e.id}}}},[t._v("더보기")])],1)])})],2)},staticRenderFns:[]},h=n("VU/8")({created:function(){var t=this;this.$http.get("/api/movies").then(function(e){t.movies=e.data})},data:function(){return{movies:[]}}},p,!1,null,null,null).exports,m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("상세 내용")]),this._v("\n  "+this._s(this.movie)+"\n")])},staticRenderFns:[]},d=n("VU/8")({created:function(){var t=this,e=this.$route.params.id;this.$http.get("/api/movies/"+e).then(function(e){t.movie=e.data})},data:function(){return{movie:{}}}},m,!1,null,null,null).exports;i.a.use(a.a);var f=new a.a({mode:"history",routes:[{path:"/",name:"index",component:u},{path:"/login",name:"login",component:v},{path:"/movie",name:"MovieIndexPage",component:h},{path:"/movie/:id",name:"MovieShowPage",component:d}]});i.a.prototype.$http=r.a,i.a.config.productionTip=!1,new i.a({el:"#app",router:f,components:{App:o},template:"<App/>"})},Rqzv:function(t,e){},"Yx1/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f98d9fff89ecc0befd12.js.map