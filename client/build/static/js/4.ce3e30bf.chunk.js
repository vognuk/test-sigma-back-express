(this["webpackJsonptest-sigma-front-react"]=this["webpackJsonptest-sigma-front-react"]||[]).push([[4,7],{132:function(e,a,t){"use strict";t.r(a);t(0);var c=t(2);a.default=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("h1",{children:"User private page"})})}},133:function(e,a,t){"use strict";var c=t(22),s=t(38),n=t(0),r=t(2);a.a=function(e,a,t,i,d,b,j){return function(l){var m=Object(n.useState)(!0),o=Object(s.a)(m,2),u=(o[0],o[1]),O=Object(n.useState)(!1),h=Object(s.a)(O,2),p=h[0];h[1];return Object(r.jsx)(a,Object(c.a)(Object(c.a)({},l),{},{formHeading:e,setIsLoading:u,isError:p,nameFieldRender:t,secondNameFieldRender:i,emailFieldRender:d,passwordFieldRender:b,birthdateFieldRender:j}))}}},134:function(e,a,t){"use strict";var c=t(38),s=t(0),n=t(143),r=t(144),i=t(145),d=t(146),b=t(147),j=t(15),l=t(16),m=t(6),o=t(132),u=(t(135),t(17),t(2));a.a=function(e){var a=e.formHeading,t=e.nameFieldRender,O=e.secondNameFieldRender,h=e.emailFieldRender,p=e.passwordFieldRender,f=e.birthdateFieldRender,g=(e.isError,e.setIsLoading,Object(s.useState)("")),x=Object(c.a)(g,2),v=x[0],w=x[1],S=Object(s.useState)(""),k=Object(c.a)(S,2),N=k[0],F=k[1],R=Object(s.useState)(""),y=Object(c.a)(R,2),C=y[0],L=y[1],E=Object(s.useState)(""),I=Object(c.a)(E,2),q=I[0],H=I[1],J=Object(s.useState)(""),P=Object(c.a)(J,2),B=P[0],D=P[1],U=Object(j.c)(),z=function(e){var a=e.target,t=a.name,c=a.value;switch(t){case"name":w(c);break;case"secondName":F(c);break;case"email":L(c);break;case"password":H(c);break;case"birthdate":D(c);break;default:return}};return Object(u.jsx)(n.a,{children:Object(u.jsxs)(r.a,{onSubmit:function(e){e.preventDefault();switch(w(v),F(N),L(C),H(q),D(B),a){case"Registration":U(l.a.register({name:v,secondName:N,email:C,password:q,birthdate:B}));break;case"Login":U(l.a.logIn({email:C,password:q})),Object(m.g)(o.default)}},children:[t&&Object(u.jsx)(i.a,{children:Object(u.jsx)(d.a,{className:"mblank-2 my-2 w-320",type:"text",name:"name",value:v,id:"name",placeholder:"Name",onChange:z})}),O&&Object(u.jsx)(i.a,{children:Object(u.jsx)(d.a,{className:"mblank-2 my-2",type:"text",name:"secondName",value:N,id:"secondname",placeholder:"Second name",onChange:z})}),h&&Object(u.jsx)(i.a,{children:Object(u.jsx)(d.a,{className:"mblank-2 my-2",type:"email",name:"email",value:C,id:"email",placeholder:"Email",onChange:z,required:!0})}),p&&Object(u.jsx)(i.a,{children:Object(u.jsx)(d.a,{className:"mblank-2 my-2",type:"password",name:"password",value:q,id:"Password",placeholder:"Password ",onChange:z,required:!0})}),f&&Object(u.jsx)(i.a,{children:Object(u.jsx)(d.a,{className:"mblank-2 my-2",type:"date",name:"birthdate",value:B,id:"birthdate",placeholder:"Birthdate",onChange:z})}),Object(u.jsx)(b.a,{className:"m-3",children:a})]})})}},148:function(e,a,t){"use strict";t.r(a);var c=t(38),s=t(0),n=t(133),r=t(134),i=t(2);a.default=function(){var e=Object(s.useState)(!1),a=Object(c.a)(e,2),t=a[0],d=(a[1],Object(s.useState)(!1)),b=Object(c.a)(d,2),j=b[0],l=(b[1],Object(s.useState)(!0)),m=Object(c.a)(l,2),o=m[0],u=(m[1],Object(s.useState)(!0)),O=Object(c.a)(u,2),h=O[0],p=(O[1],Object(s.useState)(!1)),f=Object(c.a)(p,2),g=f[0],x=(f[1],Object(n.a)("Login",r.a,t,j,o,h,g));return Object(i.jsx)(x,{})}}}]);
//# sourceMappingURL=4.ce3e30bf.chunk.js.map