(this.webpackJsonpfilmclub=this.webpackJsonpfilmclub||[]).push([[0],{15:function(e){e.exports=JSON.parse('[{"id":985,"original_language":"en","original_title":"Eraserhead","overview":"Henry Spencer tries to survive his industrial environment, his angry girlfriend, and the unbearable screams of his newly born mutant child.","release_date":"1978-02-03","title":"Eraserhead","vote_average":7.5,"watched":"2020-11-24"},{"id":1955,"original_language":"en","original_title":"The Elephant Man","overview":"A Victorian surgeon rescues a heavily disfigured man being mistreated by his owner as a side-show freak. Behind his monstrous fa\xe7ade, there is revealed a person of great intelligence and sensitivity. Based on the true story of Joseph Merrick (called John Merrick in the film), a severely deformed man in 19th century London.","release_date":"1980-10-02","title":"The Elephant Man","vote_average":8.1,"watched":"2021-11-25"},{"id":399055,"original_language":"en","original_title":"Shape of Water","overview":"An other-worldly story, set against the backdrop of Cold War era America circa 1962, where a mute janitor working at a lab falls in love with an amphibious man being held captive there and devises a plan to help him escape.","release_date":"2017-12-01","title":"Shape of Water","vote_average":7.3,"watched":"2020-12-08"},{"id":110415,"original_language":"ko","original_title":"Snowpiercer","overview":"In a future where a failed global-warming experiment kills off most life on the planet, a class system evolves aboard the Snowpiercer, a train that travels around the globe via a perpetual-motion engine.","release_date":"2013-08-01","title":"Snowpiercer","vote_average":6.9,"watched":"2020-11-17"},{"id":503919,"original_language":"en","original_title":"The Lighthouse","overview":"Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.","release_date":"2019-10-18","title":"The Lighthouse","vote_average":7.5,"watched":"2021-12-06"},{"id":108,"original_language":"fr","original_title":"Trois couleurs : Bleu","overview":"Julie is haunted by her grief after living through a tragic auto wreck that claimed the life of her composer husband and young daughter. Her initial reaction is to withdraw from her relationships, lock herself in her apartment and suppress her pain. But avoiding human interactions on the bustling streets of Paris proves impossible, and she eventually meets up with Olivier, an old friend who harbors a secret love for her, and who could draw her back to reality.","release_date":"1993-09-08","title":"Three Colors: Blue","vote_average":7.5,"watched":"2021-12-15"}]')},33:function(e,t,a){e.exports=a(48)},40:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),l=a(22),i=a.n(l),o=a(3),c=a(30),s=a(11),u=a(0),d=a.n(u),m=a(9),g=a(31),v=a(17),h=a(20),f=(Object(g.a)({apiKey:"AIzaSyBJbuJKTr2LSUgOEb5ugACh4YyP_PLqczU",authDomain:"movie-database-84f3f.firebaseapp.com",databaseUrl:"https://anetacamo-store.firebaseio.com",projectId:"movie-database-84f3f",storageBucket:"movie-database-84f3f.appspot.com",messagingSenderId:"866806633132",appId:"1:866806633132:web:48fa3c36dc7d4457920509"}),Object(h.b)()),p=Object(v.c)();function b(e,t){return Object(h.a)(f,e,t)}function E(e,t){return Object(h.d)(f,e,t)}function O(){var e=Object(n.useState)(),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){return Object(h.c)(f,(function(e){return r(e)}))}),[]),a}a(40);function w(e){var t=e.moviesList,a=e.handleClick,n=e.listName,l=t.sort((function(e,t){return e.original_language>t.original_language?1:-1}));return r.a.createElement("div",{className:"movie-listing"},r.a.createElement("h5",null,r.a.createElement("span",{className:"red underlined"},n)," ",l.length),(null===l||void 0===l?void 0:l.length)>0&&l.map((function(e){var t;return r.a.createElement("h5",{key:e.id,onClick:function(){return a(e)}},e.title,r.a.createElement("span",{className:"red"},null===(t=e.release_date)||void 0===t?void 0:t.substring(0,4)),r.a.createElement("span",{className:"red language"},e.original_language))})))}function N(e){var t=e.featured,a=e.onClick,n=e.icon,l=e.type,i="fa ".concat(n," ").concat(!t&&" black");return console.log("type: ",l),r.a.createElement("i",{onClick:function(){return a({type:l})},className:i,"aria-hidden":"true"})}function y(e){var t=e.handleDownload,a=e.handleOpen,l=Object(n.useState)(""),i=Object(m.a)(l,2),o=i[0],c=i[1],s=Object(n.useState)(""),u=Object(m.a)(s,2),g=u[0],v=u[1],h=Object(n.useState)(!1),f=Object(m.a)(h,2),p=f[0],O=f[1],w=Object(n.useState)(""),N=Object(m.a)(w,2),y=N[0],j=N[1],_=Object(n.useState)(!1),S=Object(m.a)(_,2),C=S[0],x=S[1],I=Object(n.useState)(!1),T=Object(m.a)(I,2),M=T[0],L=T[1];return r.a.createElement("div",{className:"signup-form"},r.a.createElement(k,{placeholder:"Your Mail",value:o,type:"email",onInputChange:function(e){return c(e)}}),r.a.createElement(k,{placeholder:"Your Password",value:g,type:"password",onInputChange:function(e){return v(e)}}),C||r.a.createElement("button",{disabled:p,onClick:function(){return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.prev=1,e.next=4,d.a.awrap(b(o,g));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),j(y);case 9:O(!1),x(!0),a(!1);case 12:case"end":return e.stop()}}),null,null,[[1,6]])}},"signup"),r.a.createElement("button",{disabled:p,onClick:function(){return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.prev=1,e.next=4,d.a.awrap(E(o,g));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),j(y);case 9:O(!1),console.log("logged in. download movies now!"),t(),a(!1),console.log("CLOSED THE TAB!");case 14:case"end":return e.stop()}}),null,null,[[1,6]])}},"login"),""!==y&&y,C&&r.a.createElement("p",null,"thanks for registering!"),r.a.createElement("h5",{className:"red underlined",onClick:function(){return L(!M)}},"Do I have to sign up?"),M&&r.a.createElement("p",null,"when you sign up you can save movies and access them from different computers. ",r.a.createElement("br",null),"And your list will not be deleted upon clearing browser data."))}function k(e){var t=e.type,a=e.placeholder,n=e.value,l=e.onInputChange,i=e.required,o=e.nameClass;return r.a.createElement("input",{className:o,placeholder:a,type:t||"text",value:n,onChange:function(e){return l(e.target.value)},required:i})}var j=a(15),_=function(e){var t,a,n=e.movie,l=e.handleFeatured,i=e.storedMovies,o=O();return r.a.createElement("div",{className:"film-details container"},n?r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement("span",null,n.title),n.title!==n.original_title?r.a.createElement("span",{className:"red"}," ",n.original_title):null),o&&r.a.createElement(N,{onClick:l,featured:null===(t=i.find((function(e){return e.id===n.id})))||void 0===t?void 0:t.suggested,icon:"fa-lightbulb-o",type:"suggested"}),r.a.createElement("span",{className:"red bold"},n.vote_average),n.runtime&&r.a.createElement("span",null," ",n.runtime," min"),r.a.createElement("p",null,n.overview),r.a.createElement("p",null,r.a.createElement("b",null,"release date")," ",n.release_date,r.a.createElement("br",null),r.a.createElement("b",null,"original language")," ",n.original_language,r.a.createElement("br",null)),r.a.createElement("br",null),j.some((function(e){return e.id===n.id}))?r.a.createElement("h5",{className:"purple"},"we watched this movie on ".concat(j.find((function(e){return e.id===n.id})).watched)):o?r.a.createElement("button",{className:"small",onClick:function(){return l({type:"suggested"})}},(null===(a=i.find((function(e){return e.id===n.id})))||void 0===a?void 0:a.suggested)?"UNVOTE":"VOTE FOR THIS"):r.a.createElement("h5",{className:"purple"},"login or sign up to vote")):r.a.createElement("p",null))};function S(e){var t=e.storedMovies,a=e.handleSelectedMovie,l=Object(n.useState)(!1),i=Object(m.a)(l,2),o=i[0],c=i[1],s=Object(n.useState)(null),u=Object(m.a)(s,2),g=u[0],v=u[1],h=Object(n.useState)(""),f=Object(m.a)(h,2),p=f[0],b=f[1],E=Object(n.useState)([]),O=Object(m.a)(E,2),w=O[0],N=O[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(k,{nameClass:"search-field",placeholder:"Search for a movie",value:p,onInputChange:function(e){return function(e){var t,a;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(b(e),0===e.length){n.next=20;break}return c(!0),n.prev=3,n.next=6,d.a.awrap(fetch("".concat("https://api.themoviedb.org/3/","search/movie?api_key=").concat("4cb1eeab94f45affe2536f2c684a5c9e","&query=").concat(e)));case 6:return t=n.sent,n.next=9,d.a.awrap(t.json());case 9:a=n.sent,N(a.results),c(!1),n.next=18;break;case 14:n.prev=14,n.t0=n.catch(3),v("Something went wrong"),c(!1);case 18:n.next=21;break;case 20:v("Search needs letters");case 21:case"end":return n.stop()}}),null,null,[[3,14]])}(e)}})),r.a.createElement("div",{className:"underline"}),r.a.createElement(C,{loading:o,erorr:g,query:p,movies:w,storedMovies:t,handleSelectedMovie:a}))}function C(e){var t=e.loading,a=e.error,n=e.query,l=e.movies,i=e.storedMovies,o=e.handleSelectedMovie;return r.a.createElement("div",{className:"results movie-listing container"},r.a.createElement("h5",null,t?"Loading...":a),0!==n.length&&0!==l.length?l.map((function(e){var t,a;return r.a.createElement("h5",{key:e.id,onClick:function(){return o(e)}},e.title," ",r.a.createElement("span",{className:"purple"},null===(t=e.release_date)||void 0===t?void 0:t.substring(0,4)),(a=e.id,i.some((function(e){return e.id===a}))&&r.a.createElement("i",{className:"fa fa-star red"})))})):r.a.createElement("h5",null,"No movies found"))}function x(e){var t=e.movies,a=e.handleClick,n=e.listName,l=Object.values(t.reduce((function(e,t){var a=t.id;return e[a]=e[a]||{id:a,count:0},e[a].count++,e}),{}));function i(e){return t.find((function(t){return t.id===e}))}return l.sort((function(e,t){return e.count<t.count?1:-1})),r.a.createElement("div",{className:"movie-listing",style:{backgroundColor:"black",color:"white",padding:"16px 20px",marginRight:"-20px"}},r.a.createElement("h5",{className:"purple bold",style:{marginRight:0}},n),(null===t||void 0===t?void 0:t.length)>0&&l.map((function(e){return!j.some((function(t){return t.id===e.id}))&&r.a.createElement("h5",{key:e.id,onClick:function(){return a(i(e.id))}},i(e.id).title,r.a.createElement("span",{className:"red"},i(e.id).release_date.substring(0,4)),r.a.createElement("span",{className:"red language"},i(e.id).original_language),r.a.createElement("span",{className:"purple bolded bold"},e.count))})))}var I=a(21),T=function(){return{type:"OPEN"}};function M(e){var t=e.saved,a=e.handleSave,n=e.handleDownload,l=O(),i=Object(I.c)((function(e){return e.isOpen})),o=Object(I.b)();return r.a.createElement("div",{className:"user-greet ".concat(i&&"open")},r.a.createElement("div",{className:"form-head container flex"},r.a.createElement("div",null,l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:{marginTop:0}},"hi ",null===l||void 0===l?void 0:l.email.split("@")[0]),r.a.createElement("p",{className:"red underlined",onClick:function(){return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.awrap(Object(h.e)(f));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("something went wrong");case 8:o({type:"OPEN"});case 9:case"end":return e.stop()}}),null,null,[[0,5]])}},"logout"))),l&&r.a.createElement("button",{className:"small ".concat(!t||"green"),onClick:a,disabled:t},t?"saved":"submit your choices!"),!l&&!i&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"small",onClick:function(){return o({type:"OPEN"})}},"LOGIN"),r.a.createElement("button",{className:"small",onClick:function(){return o({type:"OPEN"})}},"SIGNUP")),i&&r.a.createElement("div",{className:"line-container",onClick:function(){return o({type:"OPEN"})}},r.a.createElement("div",{className:"line first"}),r.a.createElement("div",{className:"line"}))),T&&r.a.createElement(y,{handleDownload:n,handleOpen:function(){return o({type:"OPEN"})}}))}function L(e){var t=e.handleClick,a=e.listName;function n(e){return j.find((function(t){return t.id===e}))}return j.sort((function(e,t){return e.watched<t.watched?1:-1})),r.a.createElement("div",{className:"movie-listing",style:{backgroundColor:"black",color:"white",padding:"16px 20px",marginRight:"-20px"}},r.a.createElement("h5",{className:"purple bold",style:{marginRight:0}},a),(null===j||void 0===j?void 0:j.length)>0&&j.map((function(e){return r.a.createElement("h5",{key:e.id,onClick:function(){return t(n(e.id))}},n(e.id).title,r.a.createElement("span",{className:"red"},n(e.id).release_date.substring(0,4)),r.a.createElement("span",{className:"red language"},n(e.id).original_language),r.a.createElement("span",{className:"purple bolded bold"},e.watched))})))}a(47);var J=a(24),D=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN":return!e;default:return e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return!e;default:return e}},B=Object(J.a)({isOpen:D,isLoading:P}),A=Object(J.b)(B,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(r.a.createElement(I.a,{store:A},r.a.createElement((function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)([]),u=Object(m.a)(i,2),g=u[0],h=u[1],f=Object(n.useState)(!1),b=Object(m.a)(f,2),E=b[0],N=b[1],y=O(),k=Object(n.useState)(!1),j=Object(m.a)(k,2),C=j[0],I=j[1],T=Object(n.useState)([]),J=Object(m.a)(T,2),D=J[0],P=J[1];function B(e,t){console.log("featured changed",t);var a=!0!==e[t]||void 0;console.log("feature state",a);var n=Object(c.a)({},e,Object(o.a)({},t,a));console.log("updated movie like: ",n.like,n.suggested);var r=function(e){return["title","id","seen","like","suggested","original_title","release_date","original_language","vote_average","overview"].reduce((function(t,a){return void 0!==e[a]&&(t[a]=e[a]),t}),{})}(n);l(r),console.log("simplified movie like: ",r.like,r.suggested);var i,u=function(e){var t,a=g.filter((function(t){return t.id!==e.id}));return t=e.id,g.some((function(e){return e.id===t}))?void 0===e.like&&void 0===e.suggested?Object(s.a)(a):[].concat(Object(s.a)(a),[e]):[].concat(Object(s.a)(g),[e])}(r);console.log(r),console.log(u),i=u,console.log("saving movies to local storage"),localStorage.setItem("films",JSON.stringify(i)),h(i),N(!1)}return Object(n.useEffect)((function(){return console.log("useEffect run"),Object(v.d)(Object(v.a)(p,"users"),(function(e){console.log(e.docs);var t=[],a=e.docs.map((function(e){var a=JSON.parse(e.data().movies);console.log(JSON.parse(e.data().movies)),a!==[]&&a.filter((function(e){e.suggested&&t.push(e)}))}));if(console.log("alluser",a),P(t),console.log(t),y){var n=e.docs.filter((function(e){return e.id===y.uid}));if(void 0===n[0]){!function(){var e,t;d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=Object(v.b)(p,"users",y.uid),t={movies:localStorage.getItem("films")},a.next=4,d.a.awrap(Object(v.e)(e,t));case 4:case"end":return a.stop()}}))}(),N(!0)}else{var r=JSON.parse(n[0].data().movies);null!==r&&h(r.filter((function(e){return null!==e&&"id"in e})))}}}))}),[C,y]),r.a.createElement("div",{className:"search"},r.a.createElement(S,{storedMovies:g,handleSelectedMovie:function(e){return l(e)}}),r.a.createElement(M,{saved:E,handleSave:function(){return function(e){var t,a;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log("saving movies to online db"),void 0!==y&&null!==y){n.next=5;break}N(!1),n.next=10;break;case 5:return t=Object(v.b)(p,"users",y.uid),a={movies:JSON.stringify(e)},n.next=9,d.a.awrap(Object(v.e)(t,a));case 9:N(!0);case 10:case"end":return n.stop()}}))}(g)},handleDownload:function(){return I(!C)}}),a&&r.a.createElement(_,{movie:a,handleFeatured:function(e){return B(a,e.type)},storedMovies:g}),r.a.createElement("div",{className:"favourite-movies container"},y&&r.a.createElement(w,{listName:"your suggested movies",moviesList:g.filter((function(e){return e.suggested})),handleClick:l}),r.a.createElement(x,{listName:"suggested by all",movies:D,handleClick:l}),r.a.createElement("br",null),r.a.createElement(L,{listName:"movies we watched",movies:D,handleClick:l})))}),null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.93725d90.chunk.js.map