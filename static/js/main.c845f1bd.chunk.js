(this.webpackJsonpmovies_app_react_with_materialui_=this.webpackJsonpmovies_app_react_with_materialui_||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},176:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(13),s=a.n(i),r=(a(104),a(105),a(106),a(2)),o=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("span",{className:"header",onClick:function(){window.scroll(0,0)},children:"IMDB"})})},l=a(8),d=a(218),j=a(221),u=a(223),b=a(87),m=a.n(b),h=a(88),p=a.n(h),O=a(89),g=a.n(O),f=a(63),v=a.n(f),x=a(15),_=Object(d.a)({root:{width:"100%",position:"fixed",bottom:0,backgroundColor:"#2d313a",zIndex:100}});function y(){var e=_(),t=c.a.useState(0),a=Object(l.a)(t,2),i=a[0],s=a[1],o=Object(x.f)();return Object(n.useEffect)((function(){0===i?o.push("/"):1===i?o.push("movies"):2===i?o.push("tv"):3===i&&o.push("search")}),[i,o]),Object(r.jsxs)(j.a,{value:i,onChange:function(e,t){s(t)},showLabels:!0,className:e.root,children:[Object(r.jsx)(u.a,{style:{color:"white"},label:"Trending",icon:Object(r.jsx)(m.a,{})}),Object(r.jsx)(u.a,{style:{color:"white"},label:"Movies",icon:Object(r.jsx)(p.a,{})}),Object(r.jsx)(u.a,{style:{color:"white"},label:"TV series",icon:Object(r.jsx)(g.a,{})}),Object(r.jsx)(u.a,{style:{color:"white"},label:"Search",icon:Object(r.jsx)(v.a,{})})]})}var S=a(66),N=a(229),k=a(33),w=a(19),C=a.n(w),T=(a(136),"https://image.tmdb.org/t/p/w300"),E="https://www.movienewz.com/img/films/poster-holder.jpg",P=a(226),G=(a(137),a(44)),F=a.n(G),B=a(233),I=a(224),M=a(177),D=a(225),U=a(90),z=a.n(U),A=(a(171),a(172),function(e){return e.preventDefault()}),V=function(e){e.content_type;var t=e.id,a=e.media_type,c=Object(n.useState)([]),i=Object(l.a)(c,2),s=i[0],o=i[1],d=null===s||void 0===s?void 0:s.map((function(e){return Object(r.jsxs)("div",{className:"carousel__item",children:[Object(r.jsx)("img",{src:e.profile_path?"".concat(T,"/").concat(e.profile_path):"https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",alt:null===e||void 0===e?void 0:e.name,className:"carousel__item_img",onDragStart:A}),Object(r.jsx)("b",{className:"carousel__item_text",children:null===e||void 0===e?void 0:e.name})]})}));return Object(n.useEffect)((function(){C()({method:"GET",url:"https://api.themoviedb.org/3/".concat(a,"/").concat(t,"/credits?api_key=").concat("a17145694cc205065d6e4ce39eebe7ae","&language=en-US")}).then((function(e){var t;o(null!==(t=e.data.cast)&&void 0!==t?t:[])}))}),[]),Object(r.jsx)(z.a,{mouseTracking:!0,fadeOutAnimation:!0,activeIndex:-2,items:d,autoWidth:!0,autoPlay:!0,animationDuration:1400,disableButtonsControls:!0,disableDotsControls:!0,animationType:"fadeout",responsive:{0:{items:3},512:{items:5},1024:{items:7}}})},W=Object(d.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:"90%",maxWidth:"780px",height:"95%",border:"1px solid #282c34",borderRadius:10,backgroundColor:"#39445a",color:"white",boxShadow:e.shadows[5],padding:e.spacing(1,1,3)},button:{margin:"0px auto",justifySelf:"center",maxWidth:"calc(40em - 20px)",borderRadius:"10px"},mySvgStyle:{fill:"red",verticalAlign:"middle"}}}));function R(e){var t=e.children,a=e.id,i=e.media_type,s=W(),o=c.a.useState(!1),d=Object(l.a)(o,2),j=d[0],u=d[1],b=Object(n.useState)(),m=Object(l.a)(b,2),h=m[0],p=m[1],O=Object(n.useState)(),g=Object(l.a)(O,2),f=g[0],v=g[1];Object(n.useEffect)((function(){C()({method:"GET",url:"https://api.themoviedb.org/3/".concat(i,"/").concat(a,"?api_key=").concat("a17145694cc205065d6e4ce39eebe7ae","&language=en-US")}).then((function(e){var t;p(null!==(t=e.data)&&void 0!==t?t:[])})),C()({method:"GET",url:"https://api.themoviedb.org/3/".concat(i,"/").concat(a,"/videos?api_key=").concat("a17145694cc205065d6e4ce39eebe7ae","&language=ru-RU")}).then((function(e){var t,a;v(null!==(t=null===(a=e.data.results[0])||void 0===a?void 0:a.key)&&void 0!==t?t:[])}))}),[]);return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{className:"movie",type:"button",onClick:function(){u(!0)},children:t}),Object(r.jsx)(B.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:s.modal,open:j,onClose:function(){u(!1)},closeAfterTransition:!0,BackdropComponent:I.a,BackdropProps:{timeout:500},children:Object(r.jsx)(M.a,{in:j,children:h&&Object(r.jsx)("div",{className:"content__wrapper",children:Object(r.jsxs)("div",{className:"content__container",children:[Object(r.jsx)("div",{className:"content__poster",children:Object(r.jsx)("img",{className:"back__poster",src:h.backdrop_path?"".concat("https://image.tmdb.org/t/p/original","/").concat(h.backdrop_path):E,alt:"".concat(h.title?h.title:h.original_title?h.original_title:h.name?h.name:h.original_name," Poster")})}),Object(r.jsxs)("div",{className:"content__about",children:[Object(r.jsxs)("span",{className:"content__title",children:[h.title?h.title:h.original_title?h.original_title:h.name?h.name:h.original_name,"(",((null===h||void 0===h?void 0:h.release_date)||(null===h||void 0===h?void 0:h.first_air_date)||"_____").substring(0,4),")"]}),"\u2003",Object(r.jsx)("a",{href:"http://youtu.be/".concat(f),target:"__blank",children:Object(r.jsx)(F.a,{className:s.mySvgStyle,children:Object(r.jsx)(F.a,{})})}),Object(r.jsx)(D.a,{size:"large",className:s.button,color:"secondary",style:{backgroundColor:"transparent"},target:"__blank",href:"http://youtu.be/".concat(f),startIcon:Object(r.jsx)(F.a,{})})]}),Object(r.jsx)("div",{className:"content__tag",children:h.tagline&&Object(r.jsx)("i",{className:"content__tagline",children:h.tagline})}),Object(r.jsx)("div",{className:"content__description",children:h.overview}),Object(r.jsx)("div",{className:"content__carusel",children:Object(r.jsx)(V,{media_type:i,id:a})}),Object(r.jsx)(D.a,{className:s.button,variant:"contained",color:"primary",target:"__blank",href:"http://youtu.be/".concat(f),startIcon:Object(r.jsx)(F.a,{}),children:"Watch the trailer"})]})})})})]})}var J=function(e){var t=e.id,a=e.title,n=e.poster_path,c=e.media_type,i=e.first_air_date,s=e.release_date,o=e.original_title,l=e.name,d=e.original_name,j=(e.backdrop_path,e.vote_average);return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(R,{media_type:c,id:t,children:[Object(r.jsx)(P.a,{className:"badge__handler",badgeContent:j,color:j>=7?"primary":j>=5&&j<7?"secondary":"error"}),Object(r.jsx)("div",{className:"poster__container",children:Object(r.jsx)("img",{className:"poster",src:n?"".concat(T,"/").concat(n):E,alt:"".concat(a||(o||(l||d)))})}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("b",{children:a||(o||(l||d))})}),Object(r.jsxs)("div",{className:"subtitle",children:[Object(r.jsx)("span",{children:"tv"===c?"TV Series":"Movie"}),Object(r.jsx)("span",{children:i||s})]})]})})},L=(a(173),a(232)),q=Object(d.a)((function(e){return{root:{display:"flex",justifyContent:"center",marginTop:"10px","& > * + *":{marginTop:e.spacing(2)}}}})),H=function(e){var t=e.setPage,a=e.numPages,n=void 0===a?10:a,c=q();return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:c.root,children:Object(r.jsx)(L.a,{count:n,onChange:function(e){return a=e.target.textContent,t(a),void window.scroll(0,0);var a},hideNextButton:!0,hidePrevButton:!0,color:"primary"})})})},K=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(1),s=Object(l.a)(i,2),o=s[0],d=s[1];return Object(n.useEffect)((function(){!function(e){C()({method:"GET",url:"https://api.themoviedb.org/3/trending/all/day?api_key=".concat("a17145694cc205065d6e4ce39eebe7ae","&page=").concat(e)}).then((function(e){var t;c(null!==(t=e.data.results)&&void 0!==t?t:[])}))}(o)}),[o]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{className:"page__title",children:"Trending"}),Object(r.jsx)("div",{className:"movies",children:a.length>0&&a.map((function(e,t){return Object(r.jsx)(J,Object(k.a)({id:e.id,media_type:e.media_type},e),e.id)}))}),Object(r.jsx)(H,{setPage:d})]})},Q=(a(174),a(14)),X=a(69),Y=a.n(X),Z=a(91),$=a(234),ee=Object(d.a)((function(e){return{root:{},chip:{margin:"2px"}}})),te=function(e){var t=e.selectGenres,a=e.setSelectGenres,c=e.genres,i=e.setGenres,s=e.setPage,o=e.type,l=function(){var e=Object(Z.a)(Y.a.mark((function e(){var t,a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://api.themoviedb.org/3/genre/".concat(o,"/list?api_key=").concat("a17145694cc205065d6e4ce39eebe7ae","&language=en-US"));case 2:t=e.sent,a=t.data,i(a.genres);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=ee();Object(n.useEffect)((function(){return l(),function(){i({})}}),[]);return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"genres__holder",children:[t.length>0&&t.map((function(e){return Object(r.jsx)($.a,{className:d.chip,label:e.name,clickable:!0,size:"small",color:"primary",onDelete:function(){return function(e){a(t.filter((function(t){return t.id!==e.id}))),i([].concat(Object(Q.a)(c),[e]).sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0}))),s(1)}(e)}},e.id)})),c.length>0&&c.map((function(e){return Object(r.jsx)($.a,{className:d.chip,label:e.name,clickable:!0,size:"small",onClick:function(){return function(e){console.log("click",e),a([].concat(Object(Q.a)(t),[e]).sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0}))),i(c.filter((function(t){return t.id!==e.id}))),s(1)}(e)}},e.id)}))]})})},ae=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))},ne=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(1),s=Object(l.a)(i,2),o=s[0],d=s[1],j=Object(n.useState)(10),u=Object(l.a)(j,2),b=u[0],m=u[1],h=Object(n.useState)([]),p=Object(l.a)(h,2),O=p[0],g=p[1],f=Object(n.useState)([]),v=Object(l.a)(f,2),x=v[0],_=v[1],y=ae(O);return Object(n.useEffect)((function(){!function(e){C()({method:"GET",url:"https://api.themoviedb.org/3/discover/movie?api_key=".concat("a17145694cc205065d6e4ce39eebe7ae","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(e,"&with_genres=").concat(y)}).then((function(e){var t;c(null!==(t=e.data.results)&&void 0!==t?t:[]),m(e.data.total_pages)}))}(o)}),[o,y]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{className:"page__movies",children:"Movies"}),Object(r.jsx)(te,{type:"movie",selectGenres:O,setSelectGenres:g,genres:x,setGenres:_,setPage:d}),Object(r.jsx)("div",{className:"movies",children:a.length>0&&a.map((function(e,t){return Object(r.jsx)(J,Object(k.a)({media_type:"movie",id:e.id},e),e.id)}))}),b>1&&Object(r.jsx)(H,{setPage:d,numPages:b})]})},ce=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(1),s=Object(l.a)(i,2),o=s[0],d=s[1],j=Object(n.useState)(10),u=Object(l.a)(j,2),b=u[0],m=u[1],h=Object(n.useState)([]),p=Object(l.a)(h,2),O=p[0],g=p[1],f=Object(n.useState)([]),v=Object(l.a)(f,2),x=v[0],_=v[1],y=ae(O);return Object(n.useEffect)((function(){!function(e){C()({method:"GET",url:"https://api.themoviedb.org/3/discover/tv?api_key=".concat("a17145694cc205065d6e4ce39eebe7ae","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(e,"&with_genres=").concat(y)}).then((function(e){var t;c(null!==(t=e.data.results)&&void 0!==t?t:[]),m(e.data.total_pages)}))}(o)}),[o,y]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{className:"page__tv",children:"TV"}),Object(r.jsx)(te,{type:"tv",selectGenres:O,setSelectGenres:g,genres:x,setGenres:_,setPage:d}),Object(r.jsx)("div",{className:"movies",children:a.length>0&&a.map((function(e,t){return Object(r.jsx)(J,Object(k.a)({media_type:"tv",id:e.id},e),e.id)}))}),b>1&&Object(r.jsx)(H,{setPage:d,numPages:b})]})},ie=a(230),se=a(92),re=a(227),oe=a(231),le=a(228),de=function(){var e,t,a,c=Object(se.a)({palette:{type:"dark",primary:{main:"#fff"}}}),i=Object(n.useState)([]),s=Object(l.a)(i,2),o=s[0],d=s[1],j=Object(n.useState)(1),u=Object(l.a)(j,2),b=u[0],m=u[1],h=Object(n.useState)(0),p=Object(l.a)(h,2),O=p[0],g=p[1],f=Object(n.useState)(""),x=Object(l.a)(f,2),_=x[0],y=x[1],S=Object(n.useState)(0),N=Object(l.a)(S,2),w=N[0],T=N[1];function E(e){C()({method:"GET",url:"https://api.themoviedb.org/3/search/".concat(w?"tv":"movie","?api_key=").concat("a17145694cc205065d6e4ce39eebe7ae","&language=en-US&query=").concat(_,"&include_adult=true&page=").concat(e)}).then((function(e){var t;d(null!==(t=e.data.results)&&void 0!==t?t:[]),g(e.data.total_pages)}))}return e=function(){E(b),m(1)},t=[_],a=500,Object(n.useEffect)((function(){var t=setTimeout((function(){return e()}),a);return function(){return clearTimeout(t)}}),[].concat(Object(Q.a)(t||[]),[a])),Object(n.useEffect)((function(){E(b)}),[w,b]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("span",{className:"page__search",children:"Search"}),Object(r.jsxs)(re.a,{theme:c,children:[Object(r.jsxs)("div",{className:"search__container",children:[Object(r.jsx)(ie.a,{style:{flex:1},className:"search__box",label:"Search IMDB",variant:"filled",value:_,onChange:function(e){y(e.target.value)}}),Object(r.jsx)(D.a,{variant:"contained",style:{marginLeft:"10px"},onClick:E,children:Object(r.jsx)(v.a,{fontSize:"large"})})]}),Object(r.jsxs)(oe.a,{value:w,indicatorColor:"primary",textColor:"primary",style:{margin:"0 auto",justifyContent:"center",paddingBottom:5},onChange:function(e,t){T(t),m(1)},children:[Object(r.jsx)(le.a,{label:"Movies",style:{width:"50%"}}),Object(r.jsx)(le.a,{label:"TV series",style:{width:"50%"}})]})]}),Object(r.jsxs)("div",{className:"movies",children:[o.length>0&&o.map((function(e,t){return Object(r.jsx)(J,Object(k.a)({media_type:w?"tv":"movie",id:e.id},e),e.id)})),_&&o.length<1&&(w?Object(r.jsx)("h2",{children:"No Series Found"}):Object(r.jsx)("h2",{children:"No Movies Found"}))]}),O>1&&Object(r.jsx)(H,{setPage:m,numPages:O})]})};var je=function(){return Object(r.jsxs)(S.a,{children:[Object(r.jsx)(o,{}),Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(N.a,{children:Object(r.jsxs)(x.c,{children:[Object(r.jsx)(x.a,{path:"/",component:K,exact:!0}),Object(r.jsx)(x.a,{path:"/movies",component:ne}),Object(r.jsx)(x.a,{path:"/tv",component:ce}),Object(r.jsx)(x.a,{path:"/search",component:de})]})})}),Object(r.jsx)(y,{})]})};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(je,{})}),document.getElementById("root"))}},[[176,1,2]]]);
//# sourceMappingURL=main.c845f1bd.chunk.js.map