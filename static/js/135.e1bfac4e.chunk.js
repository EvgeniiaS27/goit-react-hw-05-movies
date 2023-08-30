"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[135],{700:function(e,n,t){t.d(n,{W:function(){return r}});var i="Container_container__VVOCq",c=t(184),r=function(e){var n=e.children;return(0,c.jsx)("div",{className:i,children:n})}},787:function(e,n,t){t.d(n,{D:function(){return r}});var i="Title_title__mrNq5",c=t(184),r=function(e){var n=e.children;return(0,c.jsx)("h1",{className:i,children:n})}},135:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var i=t(439),c=t(791),r=t(689),s=t(87),a=t(323),o=t(525),l=t(700),u=t(787),h={linkBack:"MovieDetails_linkBack__CKjEq",genres:"MovieDetails_genres__Pnmgt",boxContant:"MovieDetails_boxContant__SNEFB",postert:"MovieDetails_postert__f4I0S",infoContent:"MovieDetails_infoContent__ELlH1",linkList:"MovieDetails_linkList__767FF",linkItem:"MovieDetails_linkItem__QXhuP",active:"MovieDetails_active__uPNdW"},d=t(184),f=function(){var e,n,t=(0,r.UO)().movieId,f=(0,c.useState)({}),v=(0,i.Z)(f,2),m=v[0],_=v[1],j=(0,c.useState)(!1),x=(0,i.Z)(j,2),p=x[0],k=x[1],g=(0,c.useState)(null),w=(0,i.Z)(g,2),N=w[0],C=w[1];(0,c.useEffect)((function(){k(!0),(0,a.tT)(t).then((function(e){return 200!==e.status?Promise.reject(new Error("Oops, something went wrong...")):e.json()})).then((function(e){return 0!==e.length?_(e):Promise.reject(new Error("Oops, something went wrong... Please try again"))})).catch((function(e){return C(e)})).finally((function(){return k(!1)}))}),[t]);var b=(0,r.TH)(),D=(0,c.useRef)(null!==(e=null===(n=b.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies"),y=m.title,M=m.genres,O=m.overview,E=m.poster_path;return(0,d.jsx)("main",{children:(0,d.jsxs)(l.W,{children:[N&&(0,d.jsx)("h1",{children:N.message}),p&&(0,d.jsx)(o.a,{}),(0,d.jsx)(s.rU,{className:h.linkBack,to:D.current,children:"Go to Back"}),(0,d.jsxs)("div",{className:h.boxContant,children:[(0,d.jsx)("div",{className:h.poster,children:(0,d.jsx)("img",{src:E?"https://image.tmdb.org/t/p/w200".concat(E):"https://via.placeholder.com/200x300",alt:"poster ",width:"200"})}),(0,d.jsxs)("div",{className:h.infoContent,children:[(0,d.jsx)(u.D,{children:y}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:O}),(0,d.jsx)("h2",{children:"Genres"}),(0,d.jsx)("p",{children:M?M.map((function(e){return(0,d.jsx)("span",{className:h.genres,children:e.name},e.id)})):""})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Additional information"}),(0,d.jsxs)("ul",{className:h.linkList,children:[(0,d.jsx)("li",{className:h.item,children:(0,d.jsx)(s.OL,{className:function(e){var n=e.isActive;return"".concat(n?h.active:h.linkItem)},to:"cast",children:"Cast"})}),(0,d.jsx)("li",{className:h.item,children:(0,d.jsx)(s.OL,{className:function(e){var n=e.isActive;return"".concat(n?h.active:h.linkItem)},to:"reviews",children:"Reviews"})})]}),(0,d.jsx)(c.Suspense,{fallback:(0,d.jsx)(o.a,{}),children:(0,d.jsx)(r.j3,{})})]})]})})}},323:function(e,n,t){t.d(n,{Df:function(){return r},M1:function(){return a},V0:function(){return l},tT:function(){return s},tx:function(){return o}});var i="https://api.themoviedb.org/3",c="f8a6c1c08257b05a7c4692b093cbf34e",r=function(){return fetch("".concat(i,"/trending/movie/day?api_key=").concat(c))},s=function(e){return fetch("".concat(i,"/movie/").concat(e,"?api_key=").concat(c))},a=function(e){return fetch("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(c))},o=function(e){return fetch("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(c))},l=function(e){return fetch("".concat(i,"/search/movie?query=").concat(e,"&api_key=").concat(c))}}}]);
//# sourceMappingURL=135.e1bfac4e.chunk.js.map