(this["webpackJsonptest-sigma-front-react"]=this["webpackJsonptest-sigma-front-react"]||[]).push([[1],{124:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(21),s=r.n(c),a=(r(63),r(64),r(27)),o=(r(65),r(7)),u="/",i="/register",l="/login",b="/user",j=r(22),d=r(34),g=r(15),O=r(16),h=r(2),f=["component","redirectTo"],p=function(e){var t=e.component,r=e.redirectTo,n=Object(d.a)(e,f),c=Object(g.d)((function(e){return O.c.getIsAuthenticated(e)}));return Object(h.jsx)(o.b,Object(j.a)(Object(j.a)({},n),{},{render:function(e){return c?Object(h.jsx)(t,Object(j.a)({},e)):Object(h.jsx)(o.a,{to:r})}}))},x=["component","isAuthenticated","redirectTo"],m=Object(g.b)((function(e){return{isAuthenticated:O.c.getIsAuthenticated(e)}}))((function(e){var t=e.component,r=e.isAuthenticated,n=e.redirectTo,c=Object(d.a)(e,x);return Object(h.jsx)(o.b,Object(j.a)(Object(j.a)({},c),{},{render:function(e){return r&&c.restricted?Object(h.jsx)(o.a,{to:n}):Object(h.jsx)(t,Object(j.a)({},e))}}))})),v=r(6),S=r(54),k=r.n(S),y=(r(113),function(){return Object(h.jsx)(k.a,Object(v.a)({className:"loader",type:"TailSpin",color:"grey",height:50,width:50,timeout:2e3},"color","#3f51b5"))}),C=r(125),E=r(126),w=r(127),U=r(128),A=r(129),R=r(130),q=r(131),T=r(17),I=r(33),N=function(e,t){var r=Object(n.useState)(!0),c=Object(a.a)(r,2),s=c[0],o=c[1],u=Object(g.d)((function(e){return O.c.getIsAuthenticated(e)}));Object(n.useEffect)((function(){}),[u]),console.log(u);var i=Object(g.c)(),l=function(){return o(!s)};return Object(h.jsx)("div",{children:Object(h.jsxs)(C.a,{className:"mx-3",color:"faded",light:!0,isAuthenticated:u,children:[Object(h.jsx)(E.a,{href:"/",className:"mr-auto",children:Object(h.jsx)(I.a,{color:"faded"})}),Object(h.jsx)(w.a,{onClick:l,className:"mr-2"}),Object(h.jsx)(U.a,{isOpen:!s,navbar:!0,children:Object(h.jsx)(A.a,{navbar:!0,children:u?Object(h.jsx)(R.a,{children:Object(h.jsx)(T.a,{style:{textDecoration:"none"},to:"/",onClick:function(){i(O.a.logOut()),u=!1,l()},exact:!0,children:Object(h.jsx)(q.a,{children:"Logout"})})}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(R.a,{children:Object(h.jsx)(T.a,{style:{textDecoration:"none"},to:"/register",exact:!0,children:Object(h.jsx)(q.a,{onClick:l,children:"Register"})})}),Object(h.jsx)(R.a,{children:Object(h.jsx)(T.a,{style:{textDecoration:"none"},to:"/login",children:Object(h.jsx)(q.a,{onClick:l,children:"Login"})})})]})})})]})})},z=function(){return Object(h.jsxs)("div",{style:{position:"fixed",left:"0px",bottom:"0px",height:"30px",width:"100%",textDecoration:"none",margin:"15px"},children:[Object(h.jsx)(q.a,{href:"https://www.linkedin.com/in/vitalii-chervonyi/",target:"_blank",color:"faded"}),Object(h.jsx)(I.b,{})]})},L=r(18),D=(r(121),Object(n.lazy)((function(){return r.e(6).then(r.bind(null,140))}))),F=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,141))})),P=Object(n.lazy)((function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,147))})),B=Object(n.lazy)((function(){return r.e(7).then(r.bind(null,148))}));var J=function(e){e.histry;var t=Object(n.useState)(!0),r=Object(a.a)(t,2),c=(r[0],r[1]);return Object(g.d)((function(e){return O.c.getIsAuthenticated(e)})),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(L.a,{autoClose:5e3}),Object(h.jsx)("header",{children:Object(h.jsx)(N,{setLoged:c})}),Object(h.jsx)("main",{children:Object(h.jsx)(n.Suspense,{fallback:Object(h.jsx)(y,{}),children:Object(h.jsxs)(o.d,{children:[Object(h.jsx)(o.b,{exact:!0,redirectTo:"/",path:u,component:D}),Object(h.jsx)(m,{public:!0,redirectTo:"/login",path:l,component:P}),Object(h.jsx)(m,{public:!0,redirectTo:"/register",path:i,component:F}),Object(h.jsx)(p,{redirectTo:"/user",path:b,component:B}),Object(h.jsx)(o.a,{to:"/"})]})})}),Object(h.jsx)("footer",{children:Object(h.jsx)(z,{})})]})},Y=function(e){e&&e instanceof Function&&r.e(8).then(r.bind(null,149)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;r(e),n(e),c(e),s(e),a(e)}))},W=r(55),_=r(11),G=r(57),H=r(8),K=r(20),M=r(56),Q=r.n(M),V=Object(G.a)(Object(H.d)({serializableCheck:{ignoredActions:[K.a,K.f,K.b,K.c,K.d,K.e]}})),X={key:"auth",storage:Q.a,whitelist:["token"]},Z=Object(H.a)({reducer:{auth:Object(K.g)(X,O.b)},middleware:V,devTools:!1}),$={store:Z,persistor:Object(K.h)(Z)},ee=Object(_.a)();s.a.render(Object(h.jsx)(g.a,{store:$.store,children:Object(h.jsx)(W.a,{loading:null,persistor:$.persistor,children:Object(h.jsx)(o.c,{history:ee,children:Object(h.jsx)(J,{})})})}),document.getElementById("root")),Y()},16:function(e,t,r){"use strict";r.d(t,"b",(function(){return k})),r.d(t,"a",(function(){return T})),r.d(t,"c",(function(){return I}));var n,c,s,a,o=r(8),u=Object(o.b)("auth/registerRequest"),i=Object(o.b)("auth/registerSuccess"),l=Object(o.b)("auth/registerError"),b=Object(o.b)("auth/loginRequest"),j=Object(o.b)("auth/loginSuccess"),d=Object(o.b)("auth/loginError"),g={registerRequest:u,registerSuccess:i,registerError:l,logoutRequest:Object(o.b)("auth/logoutRequest"),logoutSuccess:Object(o.b)("auth/logoutSuccess"),logoutError:Object(o.b)("auth/logoutError"),loginRequest:b,loginSuccess:j,loginError:d,getCurrentUserRequest:Object(o.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(o.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(o.b)("auth/getCurrentUserError")},O=r(6),h=r(10),f={name:null,secondName:null,email:null,password:null,birthdate:null},p=Object(o.c)(f,(n={},Object(O.a)(n,g.registerSuccess,(function(e,t){return t.payload.user})),Object(O.a)(n,g.loginSuccess,(function(e,t){return t.payload.user})),Object(O.a)(n,g.logoutSuccess,(function(){return f})),Object(O.a)(n,g.getCurrentUserSuccess,(function(e,t){return t.payload})),n)),x=Object(o.c)(null,(c={},Object(O.a)(c,g.registerSuccess,(function(e,t){return t.payload.token})),Object(O.a)(c,g.loginSuccess,(function(e,t){return t.payload.token})),Object(O.a)(c,g.logoutSuccess,(function(){return null})),c)),m=function(e,t){return t.payload},v=Object(o.c)(null,(s={},Object(O.a)(s,g.registerError,m),Object(O.a)(s,g.loginError,m),Object(O.a)(s,g.logoutError,m),Object(O.a)(s,g.getCurrentUserError,m),s)),S=Object(o.c)(!1,(a={},Object(O.a)(a,g.registerSuccess,(function(){return!0})),Object(O.a)(a,g.loginSuccess,(function(){return!0})),Object(O.a)(a,g.getCurrentUserSuccess,(function(){return!0})),Object(O.a)(a,g.registerError,(function(){return!1})),Object(O.a)(a,g.loginError,(function(){return!1})),Object(O.a)(a,g.getCurrentUserError,(function(){return!1})),Object(O.a)(a,g.logoutSuccess,(function(){return!1})),a)),k=Object(h.b)({user:p,isAuthenticated:S,token:x,error:v}),y=r(19),C=r.n(y),E=r(26),w=r(23),U=r.n(w),A=r(18);U.a.defaults.baseURL="http://localhost:3000";var R=function(e){U.a.defaults.headers.common.Authorization="Bearer ".concat(e)},q=function(){U.a.defaults.headers.common.Authorization=""},T={register:function(e){return function(){var t=Object(E.a)(C.a.mark((function t(r){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(g.registerRequest()),t.prev=1,t.next=4,U.a.post("/api/users/register",e);case 4:n=t.sent,R(n.data.token),A.b.success("You are registered!"),r(g.registerSuccess(n.data)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),r(g.registerError(t.t0.message)),t.t0.message.includes("409")?A.b.error("User is already exist!"):A.b.error(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},logOut:function(){return function(){var e=Object(E.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g.logoutRequest()),e.prev=1,e.next=4,U.a.post("/api/users/logout");case 4:q(),t(g.logoutSuccess()),console.log("ok"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435 \u0432\u044b\u0445\u043e\u0434\u0430 \u0438 \u0435\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u0435(\u0438\u0437 \u043e\u0442\u0432\u0435\u0442\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430)",e.t0.message),t(g.logoutError(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logIn:function(e){return function(){var t=Object(E.a)(C.a.mark((function t(r){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(g.loginRequest()),t.prev=1,t.next=4,U.a.post("/api/users/login",e);case 4:n=t.sent,R(n.data.token),A.b.success("You are logged in!"),r(g.loginSuccess(n.data)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),r(g.loginError(t.t0.message)),t.t0.message.includes("401")?A.b.error("Wrong email or password!"):A.b.error(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var e=Object(E.a)(C.a.mark((function e(t,r){var n,c,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r(),c=n.auth.token){e.next=3;break}return e.abrupt("return");case 3:return R(c),t(g.getCurrentUserRequest()),e.prev=5,e.next=8,U.a.get("/users/current");case 8:s=e.sent,t(g.getCurrentUserSuccess(s.data)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),t(g.getCurrentUserError(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,r){return e.apply(this,arguments)}}()}},I={getIsAuthenticated:function(e){return e.auth.isAuthenticated},getUserName:function(e){return e.auth.user.name},getUserSecondname:function(e){return e.auth.user.secondName},getUserEmail:function(e){return e.auth.user.email},getUserPassword:function(e){return e.auth.user.password},getUserBirthdate:function(e){return e.auth.user.birthdate}}},63:function(e,t,r){},65:function(e,t,r){}},[[124,2,3]]]);
//# sourceMappingURL=main.80860db8.chunk.js.map