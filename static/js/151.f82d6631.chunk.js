"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[151],{197:function(n,t,r){r.d(t,{HI:function(){return f},Hg:function(){return o},IQ:function(){return l},Jh:function(){return p},qF:function(){return s}});var e=r(861),a=r(757),u=r.n(a),c=r(243),i="659ec0491a7a7fd8899a0a31d750ba1c",o=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/week?api_key=".concat(i),{signal:t.signal});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.id,e=t.controller,n.next=3,c.Z.get("movie/".concat(r,"?api_key=").concat(i),{signal:e.signal});case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.id,e=t.controller,n.next=3,c.Z.get("movie/".concat(r,"/credits?api_key=").concat(i),{signal:e.signal});case 3:return a=n.sent,n.abrupt("return",a.data.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.id,e=t.controller,n.next=3,c.Z.get("movie/".concat(r,"/reviews?api_key=").concat(i),{signal:e.signal});case 3:return a=n.sent,n.abrupt("return",a.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},151:function(n,t,r){r.r(t),r.d(t,{default:function(){return k}});var e,a,u,c,i=r(861),o=r(439),s=r(757),f=r.n(s),l=r(689),p=r(791),v=r(197),d=r(168),h=r(444),m=h.ZP.ul(e||(e=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),w=h.ZP.li(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n"]))),x=h.ZP.p(u||(u=(0,d.Z)(["\n  font-weight: 600;\n"]))),Z=h.ZP.p(c||(c=(0,d.Z)([""]))),g=r(184),k=function(){var n=(0,l.UO)().movieId,t=(0,p.useState)([]),r=(0,o.Z)(t,2),e=r[0],a=r[1];return(0,p.useEffect)((function(){var t=new AbortController,r=function(){var r=(0,i.Z)(f().mark((function r(){var e;return f().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,v.Jh)({id:n,controller:t});case 2:e=r.sent,a(e);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return r(),function(){t.abort()}}),[n]),e?0===e.length?(0,g.jsx)("div",{children:"No reviews for this movie"}):(0,g.jsx)(m,{children:e.map((function(n){return(0,g.jsxs)(w,{children:[(0,g.jsx)(x,{children:n.author}),(0,g.jsx)(Z,{children:n.content})]},n.id)}))}):null}},861:function(n,t,r){function e(n,t,r,e,a,u,c){try{var i=n[u](c),o=i.value}catch(s){return void r(s)}i.done?t(o):Promise.resolve(o).then(e,a)}function a(n){return function(){var t=this,r=arguments;return new Promise((function(a,u){var c=n.apply(t,r);function i(n){e(c,a,u,i,o,"next",n)}function o(n){e(c,a,u,i,o,"throw",n)}i(void 0)}))}}r.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=151.f82d6631.chunk.js.map