(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t,n){},38:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n.n(a),c=n(30),o=n.n(c),i=(n(38),n(9)),u=n(3),l=n(15),j=n(32),p=function(e){var t=e.component,n=Object(j.a)(e,["component"]);return Object(r.jsx)(u.b,Object(l.a)(Object(l.a)({},n),{},{render:function(e){return localStorage.getItem("authToken")?Object(r.jsx)(t,Object(l.a)({},e)):Object(r.jsx)(u.a,{to:"/login"})}}))},d=n(5),b=n.n(d),h=n(11),m=n(2),O=n(12),x=n.n(O),f=(n(63),Object(a.createContext)()),g=[{prompt:"What country was 2018 FIFA World Cup hosted? ",optionA:"Brazil",optionB:"Russia",optionC:"France",optionD:"Germany",answer:"B"},{prompt:"What country was 2014 FIFA World Cup hosted? ",optionA:"Brazil",optionB:"Russia",optionC:"France",optionD:"Germany",answer:"A"},{prompt:"What country won 2018 FIFA World Cup? ",optionA:"Brazil",optionB:"Russia",optionC:"France",optionD:"Germany",answer:"C"},{prompt:"What country won 2014 FIFA World Cup hosted? ",optionA:"Brazil",optionB:"Russia",optionC:"France",optionD:"Germany",answer:"D"},{prompt:"What country was 2006 FIFA World Cup hosted? ",optionA:"Brazil",optionB:"Russia",optionC:"France",optionD:"Germany",answer:"D"}];n(29);var v=function(){var e=Object(a.useContext)(f),t=e.score,n=e.setScore,s=e.setGameState;return Object(r.jsxs)("div",{className:"EndScreen",children:[Object(r.jsx)("h1",{children:"Quiz Finished"}),Object(r.jsxs)("h3",{children:[" ",t," / ",g.length," "]}),Object(r.jsx)("button",{onClick:function(){n(0),s("menu")},children:"Restart Quiz"})]})};var w=function(){var e=Object(a.useContext)(f),t=(e.gameState,e.setGameState);return Object(r.jsx)("div",{className:"Menu",children:Object(r.jsx)("button",{onClick:function(){t("quiz")},children:"Start Quiz"})})};var C=function(){var e=Object(a.useContext)(f),t=e.score,n=e.setScore,s=e.setGameState,c=Object(a.useState)(0),o=Object(m.a)(c,2),i=o[0],u=o[1],l=Object(a.useState)(""),j=Object(m.a)(l,2),p=j[0],d=j[1];return Object(r.jsxs)("div",{className:"Quiz",children:[Object(r.jsx)("h1",{children:g[i].prompt}),Object(r.jsxs)("div",{className:"options",children:[Object(r.jsx)("button",{onClick:function(){return d("A")},children:g[i].optionA}),Object(r.jsx)("button",{onClick:function(){return d("B")},children:g[i].optionB}),Object(r.jsx)("button",{onClick:function(){return d("C")},children:g[i].optionC}),Object(r.jsx)("button",{onClick:function(){return d("D")},children:g[i].optionD})]}),i==g.length-1?Object(r.jsx)("button",{onClick:function(){g[i].answer==p&&n(t+1),s("endScreen")},children:"Finish Quiz"}):Object(r.jsx)("button",{onClick:function(){g[i].answer==p&&n(t+1),u(i+1)},children:"Next Question"})]})};var S=function(){var e=Object(a.useState)("menu"),t=Object(m.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(0),o=Object(m.a)(c,2),i=o[0],u=o[1];return Object(r.jsxs)("div",{className:"QuizApp",children:[Object(r.jsx)("h1",{children:"World Cup Quiz"}),Object(r.jsxs)(f.Provider,{value:{gameState:n,setGameState:s,score:i,setScore:u},children:["menu"===n&&Object(r.jsx)(w,{}),"quiz"===n&&Object(r.jsx)(C,{}),"endScreen"===n&&Object(r.jsx)(v,{})]})]})},y=function(e){var t=e.history,n=Object(a.useState)(""),s=Object(m.a)(n,2),c=s[0],o=(s[1],Object(a.useState)("")),l=Object(m.a)(o,2),j=(l[0],l[1]);Object(a.useEffect)((function(){localStorage.getItem("authToken")||t.push("/login"),function(){var e=Object(h.a)(b.a.mark((function e(){var n,r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("authToken"))}},e.prev=1,e.next=4,x.a.get("/api/private",n);case 4:r=e.sent,a=r.data,j(a.data),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),localStorage.removeItem("authToken"),t.push("/login");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[t]);return c?Object(r.jsx)("span",{className:"error-message",children:c}):Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)(i.a,{children:Object(r.jsx)(u.b,{exact:!0,path:"/",component:S})}),Object(r.jsx)("button",{onClick:function(){localStorage.removeItem("authToken"),t.push("/login")},children:"Logout"})]})})},N=(n(64),function(e){var t=e.history,n=Object(a.useState)(""),s=Object(m.a)(n,2),c=s[0],o=s[1],u=Object(a.useState)(""),l=Object(m.a)(u,2),j=l[0],p=l[1],d=Object(a.useState)(""),O=Object(m.a)(d,2),f=O[0],g=O[1];Object(a.useEffect)((function(){localStorage.getItem("authToken")&&t.push("/")}),[t]);var v=function(){var e=Object(h.a)(b.a.mark((function e(n){var r,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r={header:{"Content-Type":"application/json"}},e.prev=2,e.next=5,x.a.post("/api/auth/login",{email:c,password:j},r);case 5:a=e.sent,s=a.data,localStorage.setItem("authToken",s.token),t.push("/"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),g(e.t0.response.data.error),setTimeout((function(){g("")}),5e3);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"login-screen",children:Object(r.jsxs)("form",{onSubmit:v,className:"login-screen__form",children:[Object(r.jsx)("h3",{className:"login-screen__title",children:"Login"}),f&&Object(r.jsx)("span",{className:"error-message",children:f}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(r.jsx)("input",{type:"email",required:!0,id:"email",placeholder:"Email address",onChange:function(e){return o(e.target.value)},value:c,tabIndex:1})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsxs)("label",{htmlFor:"password",children:["Password:"," ",Object(r.jsx)(i.b,{to:"/forgotpassword",className:"login-screen__forgotpassword",children:"Forgot Password?"})]}),Object(r.jsx)("input",{type:"password",required:!0,id:"password",autoComplete:"true",placeholder:"Enter password",onChange:function(e){return p(e.target.value)},value:j,tabIndex:2})]}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"}),Object(r.jsxs)("span",{className:"login-screen__subtext",children:["Don't have an account? ",Object(r.jsx)(i.b,{to:"/register",children:"Register"})]})]})})}),k=(n(65),function(e){var t=e.history,n=Object(a.useState)(""),s=Object(m.a)(n,2),c=s[0],o=s[1],u=Object(a.useState)(""),l=Object(m.a)(u,2),j=l[0],p=l[1],d=Object(a.useState)(""),O=Object(m.a)(d,2),f=O[0],g=O[1],v=Object(a.useState)(""),w=Object(m.a)(v,2),C=w[0],S=w[1],y=Object(a.useState)(""),N=Object(m.a)(y,2),k=N[0],F=N[1],_=function(){var e=Object(h.a)(b.a.mark((function e(n){var r,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r={header:{"Content-Type":"application/json"}},f===C){e.next=7;break}return g(""),S(""),setTimeout((function(){F("")}),5e3),e.abrupt("return",F("Passwords do not match"));case 7:return e.prev=7,e.next=10,x.a.post("/api/auth/register",{username:c,email:j,password:f},r);case 10:a=e.sent,s=a.data,localStorage.setItem("authToken",s.token),t.push("/"),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),F(e.t0.response.data.error),setTimeout((function(){F("")}),5e3);case 20:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"register-screen",children:Object(r.jsxs)("form",{onSubmit:_,className:"register-screen__form",children:[Object(r.jsx)("h3",{className:"register-screen__title",children:"Register"}),k&&Object(r.jsx)("span",{className:"error-message",children:k}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"name",children:"Username:"}),Object(r.jsx)("input",{type:"text",required:!0,id:"name",placeholder:"Enter username",value:c,onChange:function(e){return o(e.target.value)}})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(r.jsx)("input",{type:"email",required:!0,id:"email",placeholder:"Email address",value:j,onChange:function(e){return p(e.target.value)}})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(r.jsx)("input",{type:"password",required:!0,id:"password",autoComplete:"true",placeholder:"Enter password",value:f,onChange:function(e){return g(e.target.value)}})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"confirmpassword",children:"Confirm Password:"}),Object(r.jsx)("input",{type:"password",required:!0,id:"confirmpassword",autoComplete:"true",placeholder:"Confirm password",value:C,onChange:function(e){return S(e.target.value)}})]}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Register"}),Object(r.jsxs)("span",{className:"register-screen__subtext",children:["Already have an account? ",Object(r.jsx)(i.b,{to:"/login",children:"Login"})]})]})})}),F=(n(66),function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(""),o=Object(m.a)(c,2),i=o[0],u=o[1],l=Object(a.useState)(""),j=Object(m.a)(l,2),p=j[0],d=j[1],O=function(){var e=Object(h.a)(b.a.mark((function e(t){var r,a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r={header:{"Content-Type":"application/json"}},e.prev=2,e.next=5,x.a.post("/api/auth/forgotpassword",{email:n},r);case 5:a=e.sent,c=a.data,d(c.data),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),u(e.t0.response.data.error),s(""),setTimeout((function(){u("")}),5e3);case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"forgotpassword-screen",children:Object(r.jsxs)("form",{onSubmit:O,className:"forgotpassword-screen__form",children:[Object(r.jsx)("h3",{className:"forgotpassword-screen__title",children:"Forgot Password"}),i&&Object(r.jsx)("span",{className:"error-message",children:i}),p&&Object(r.jsx)("span",{className:"success-message",children:p}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("p",{className:"forgotpassword-screen__subtext",children:"Please enter the email address you register your account with. We will send you reset password confirmation to this email"}),Object(r.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(r.jsx)("input",{type:"email",required:!0,id:"email",placeholder:"Email address",value:n,onChange:function(e){return s(e.target.value)}})]}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Send Email"})]})})}),_=(n(67),function(e){e.history;var t=e.match,n=Object(a.useState)(""),s=Object(m.a)(n,2),c=s[0],o=s[1],u=Object(a.useState)(""),l=Object(m.a)(u,2),j=l[0],p=l[1],d=Object(a.useState)(""),O=Object(m.a)(d,2),f=O[0],g=O[1],v=Object(a.useState)(""),w=Object(m.a)(v,2),C=w[0],S=w[1],y=function(){var e=Object(h.a)(b.a.mark((function e(n){var r,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r={header:{"Content-Type":"application/json"}},c===j){e.next=7;break}return o(""),p(""),setTimeout((function(){g("")}),5e3),e.abrupt("return",g("Passwords don't match"));case 7:return e.prev=7,e.next=10,x.a.put("/api/auth/passwordreset/".concat(t.params.resetToken),{password:c},r);case 10:a=e.sent,s=a.data,console.log(s),S(s.data),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),g(e.t0.response.data.error),setTimeout((function(){g("")}),5e3);case 20:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"resetpassword-screen",children:Object(r.jsxs)("form",{onSubmit:y,className:"resetpassword-screen__form",children:[Object(r.jsx)("h3",{className:"resetpassword-screen__title",children:"Forgot Password"}),f&&Object(r.jsxs)("span",{className:"error-message",children:[f," "]}),C&&Object(r.jsxs)("span",{className:"success-message",children:[C," ",Object(r.jsx)(i.b,{to:"/login",children:"Login"})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"password",children:"New Password:"}),Object(r.jsx)("input",{type:"password",required:!0,id:"password",placeholder:"Enter new password",autoComplete:"true",value:c,onChange:function(e){return o(e.target.value)}})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"confirmpassword",children:"Confirm New Password:"}),Object(r.jsx)("input",{type:"password",required:!0,id:"confirmpassword",placeholder:"Confirm new password",autoComplete:"true",value:j,onChange:function(e){return p(e.target.value)}})]}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Reset Password"})]})})}),T=function(){return Object(r.jsx)(i.a,{children:Object(r.jsx)("div",{className:"app",children:Object(r.jsxs)(u.d,{children:[Object(r.jsx)(p,{exact:!0,path:"/",component:y}),Object(r.jsx)(u.b,{exact:!0,path:"/login",component:N}),Object(r.jsx)(u.b,{exact:!0,path:"/register",component:k}),Object(r.jsx)(u.b,{exact:!0,path:"/forgotpassword",component:F}),Object(r.jsx)(u.b,{exact:!0,path:"/passwordreset/:resetToken",component:_})]})})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(T,{})}),document.getElementById("root")),I()}},[[68,1,2]]]);
//# sourceMappingURL=main.00c496e6.chunk.js.map