(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1557:function(e,a,t){"use strict";t.r(a);var r=t(34),n=t(5),l=t(11),s=t(12),o=t(14),c=t(13),m=t(15),i=t(281),u=t(0),f=t.n(u),d=t(1),h=t(16),p=t(82),b=t(30),E=(t(9),t(21)),g=t(427),w=RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),v=function(e){var a=e.formErrors,t=Object(i.a)(e,["formErrors"]),r=!0;return Object.values(a).forEach(function(e){e.length>0&&(r=!1)}),Object.values(t).forEach(function(e){null===e&&(r=!1)}),r},N=function(e){function a(){var e,t;Object(l.a)(this,a);for(var s=arguments.length,m=new Array(s),i=0;i<s;i++)m[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(m)))).state={email:"",password:"",role:"",remember:!1,formErrors:{email:"",password:""}},t.handleChange=function(e){e.preventDefault();var a=e.target,l=a.name,s=a.value,o=Object(n.a)({},t.state.formErrors);switch(l){case"email":o.email=w.test(s)?"":"invalid email address";break;case"password":o.password=s.length<6?"minimum 6 characaters required":""}t.setState(Object(r.a)({formErrors:o},l,s),function(){return console.log(t.state)})},t.handleSubmitLogin=function(e){e.preventDefault();var a=t.state,r=a.email,n=a.password;v(t.state)?(console.log("\n                --SUBMITTING--\n                Email: ".concat(t.state.email,"\n                Password: ").concat(t.state.password,"\n            ")),t.props.submitLoginWithFireBase(r,n),t.setState({email:"",password:""})):console.error("FORM INVALID - DISPLAY ERROR MESSAGE")},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.auth,r=(a.authError,this.state),n=r.email,l=r.password,s=r.remember,o=(r.role,r.formErrors);return console.log(t),t.uid?f.a.createElement(p.a,{to:"/animations"}):f.a.createElement("div",{className:"flex flex-col flex-auto flex-no-shrink items-center justify-center p-32"},f.a.createElement("div",{className:"flex flex-col items-center justify-center w-full"},f.a.createElement(h.a,{animation:"transition.expandIn"},f.a.createElement(d.d,{className:"w-full max-w-384"},f.a.createElement(d.e,{className:"flex flex-col items-center justify-center p-30"},f.a.createElement("img",{className:"w-128 m-30",src:"https://i.ibb.co/BrsxwRH/logologin.jpg",alt:"logo"}),f.a.createElement(d.fb,{variant:"h6",className:"mt-16 mb-32"},"LOGIN TO YOUR ACCOUNT"),f.a.createElement("form",{name:"loginForm",noValidate:!0,className:"flex flex-col justify-center w-full"},f.a.createElement(d.cb,{className:"mb-16",label:"Email",autoFocus:!0,type:"email",name:"email",value:n,onChange:this.handleChange,variant:"outlined",required:!0,fullWidth:!0}),o.email.length>0&&f.a.createElement("span",{style:{color:"red"},className:"errorMessage"},o.email),f.a.createElement(d.cb,{className:"mb-16",label:"Password",type:"password",name:"password",value:l,onChange:this.handleChange,variant:"outlined",required:!0,fullWidth:!0}),o.password.length>0&&f.a.createElement("span",{style:{color:"red"},className:"errorMessage"},o.password),f.a.createElement("div",{className:"flex items-center justify-between"},f.a.createElement(d.q,null,f.a.createElement(d.r,{control:f.a.createElement(d.f,{name:"remember",checked:s,onChange:this.handleChange}),label:"Remember Me"}))),f.a.createElement(d.c,{variant:"contained",color:"primary",className:"w-224 mx-auto mt-16","aria-label":"LOG IN",onClick:this.handleSubmitLogin},"LOG IN")),f.a.createElement("div",{className:"my-24 flex items-center justify-center"},f.a.createElement(d.m,{className:"w-32"}),f.a.createElement("span",{className:"mx-8 font-bold"},"OR"),f.a.createElement(d.m,{className:"w-32"})),f.a.createElement(d.c,{variant:"contained",color:"secondary",size:"small",className:"normal-case w-192 mb-8",onClick:function(){e.props.authWithGoogle()}},"Log in with Google"),f.a.createElement(d.c,{className:"font-medium",component:b.a,to:"/register-2"},"Create an account"))))))}}]),a}(u.Component);a.default=Object(E.b)(function(e){return console.log(e),{auth:e.firebase.auth}},{submitLoginWithFireBase:g.b,authWithGoogle:g.a})(N)}}]);