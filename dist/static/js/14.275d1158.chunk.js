(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1446:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(31),r=function(){return function(e){n.a.auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})}}},1449:function(e,t,a){"use strict";a.d(t,"c",function(){return c}),a.d(t,"g",function(){return l}),a.d(t,"b",function(){return s}),a.d(t,"d",function(){return p}),a.d(t,"e",function(){return f}),a.d(t,"f",function(){return h}),a.d(t,"a",function(){return _}),a.d(t,"h",function(){return v});var n=a(5),r=a(31),o=(a(419),a(56)),i=a.n(o),d=a(93),u=a(24),c=function(e){return function(t){i.a.auth().onAuthStateChanged(function(a){a&&(console.log(a.uid),i.a.firestore().collection("users").doc(a.uid).get().then(function(o){console.log(o.data());var i=o.data().displayName;console.log(i);var d={uid:a.uid,displayName:i},u=r.a.firestore().collection("produits").doc().id;r.a.firestore().collection("produits").doc(u).set(Object(n.a)({},e,{id:u,authorName:d.displayName,authorId:d.uid,createdAt:new Date})).then(function(){t({type:"Add_PRODUIT"})}).catch(function(e){console.error("Error adding document: ",e)})}))})}},l=function(e){return function(t){r.a.firestore().collection("produits").doc(e).delete().then(function(e){e||d.a.dispatch(u.j({message:"Ce produit a \xe9t\xe9 supprim\xe9 avec succ\xe8s"}))})}},s=function(){return{type:"OPEN_DIALOG_PRODUIT"}};function p(){return{type:"CLOSE_DIALOG_PRODUIT"}}var m=[],f=function(){return function(e){r.a.firestore().collection("produits").get().then(function(t){return t.forEach(function(e){var t=Object(n.a)({},e.data(),{id:e.id});m.push(t)}),e(h(m)),m}).catch(function(e){console.error("Error writing document: ",e)})}},h=function(e){return{type:"GET_ALL_PRODUITS_SUCCESS",payload:e}};function _(e){return{type:"EDIT_PRODUIT_ITEM",produit:e}}var v=function(e){return function(t){r.a.firestore().collection("produits").doc(e.id).update(Object(n.a)({},e)).then(function(){t({type:"UPDATE_PRODUITS"})}).catch(function(e){console.error("Error updating document: ",e)})}}},1556:function(e,t,a){"use strict";a.r(t);var n=a(34),r=a(11),o=a(12),i=a(14),d=a(13),u=a(15),c=a(0),l=a.n(c),s=a(1),p=a(16),m=a(82),f=a(30),h=(a(9),a(21)),_=a(1449),v=a(1446),E=function(e){function t(){var e,a;Object(r.a)(this,t);for(var o=arguments.length,u=new Array(o),c=0;c<o;c++)u[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(u)))).state={id:"",nom_prod:"",marque_prod:"",axe_prod:""},a.updateProduitState=function(){var e=a.props.match.params.produitId;if("produit"===e)a.setState({id:"",nom_prod:"",marque_prod:"",axe_prod:""});else{var t=a.props.produitItem;a.setState({id:e,nom_prod:t.nom_prod,marque_prod:t.marque_prod,axe_prod:t.axe_prod})}},a.handleSaveProduit=function(){a.props.addProduit(a.state),a.setState({id:"",nom_prod:"",marque_prod:"",axe_prod:""})},a.handleUpdateProduit=function(){a.props.updateProduit(a.state),a.setState({id:"",nom_prod:"",marque_prod:"",axe_prod:""})},a.handleChange=function(e){a.setState(Object(n.a)({},e.target.id,e.target.value))},a.handleSignOut=function(){a.props.signOut()},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.updateProduitState(),console.log("je trouve",this.props.produitItem)}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props.match.params.produitId;if("edit"===n){var r=this.props.produitItem;this.setState({id:n,nom_prod:r.nom_prod,marque_prod:r.marque_prod,axe_prod:r.axe_prod})}}},{key:"render",value:function(){return this.props.auth.uid?l.a.createElement(p.m,{classes:{toolbar:"p-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:l.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},l.a.createElement("div",{className:"flex flex-col items-start max-w-full"},l.a.createElement(p.a,{animation:"transition.slideRightIn",delay:300},l.a.createElement(s.fb,{className:"normal-case flex items-center sm:mb-12",component:f.a,role:"button",to:"/produits"},l.a.createElement(s.w,{className:"mr-4 text-20"},"arrow_back"),"Produits")),l.a.createElement("div",{className:"flex items-center max-w-full"},l.a.createElement("div",{className:"flex flex-col min-w-0"},l.a.createElement(p.a,{animation:"transition.slideLeftIn",delay:300},l.a.createElement(s.fb,{className:"text-16 sm:text-20 truncate"},this.state.nom_prod?this.state.nom_prod:"Nouveau Produit")),l.a.createElement(p.a,{animation:"transition.slideLeftIn",delay:300},l.a.createElement(s.fb,{variant:"caption"},"Produit Details"))))),l.a.createElement("div",null,l.a.createElement(p.a,{animation:"transition.slideRightIn",delay:300},"produit"===this.props.match.params.produitId?l.a.createElement(s.c,{className:"whitespace-no-wrap",variant:"contained",onClick:this.handleSaveProduit},"Save"):l.a.createElement(s.c,{className:"whitespace-no-wrap",variant:"contained",onClick:this.handleUpdateProduit,component:f.a,to:"/produits"},"Update")),l.a.createElement(p.a,{animation:"transition.perspectiveDownIn",delay:500},l.a.createElement(s.c,{onClick:this.handleSignOut,component:f.a,to:"/Login"},"Log Out")))),contentToolbar:l.a.createElement("div",{className:"px-24"},l.a.createElement(p.a,{animation:"transition.perspectiveUpIn",delay:500},"produit"===this.props.match.params.produitId?l.a.createElement("h4",null," Nouveau Produit "):l.a.createElement("h4",null," Produit details "))),content:l.a.createElement("div",{className:"p-16 sm:p-24 max-w-2xl"},l.a.createElement("form",null,l.a.createElement(p.a,{animation:"transition.bounceUpIn",delay:1200},l.a.createElement(s.cb,{value:this.state.nom_prod,id:"nom_prod",label:"Nom",onChange:this.handleChange,variant:"outlined",margin:"normal",className:"mt-8 mb-16",name:"nom_prod",fullWidth:!0,required:!0})),l.a.createElement(p.a,{animation:"transition.bounceUpIn",delay:1e3},l.a.createElement(s.cb,{className:"mt-8 mb-16",id:"marque_prod",name:"marque_prod",onChange:this.handleChange,label:"Marque",type:"text",value:this.state.marque_prod,multiline:!0,rows:5,variant:"outlined",fullWidth:!0})),l.a.createElement(p.a,{animation:"transition.bounceUpIn",delay:800},l.a.createElement(s.cb,{className:"mt-8 mb-16",id:"axe_prod",name:"axe_prod",onChange:this.handleChange,label:"Axe",type:"text",value:this.state.axe_prod,variant:"outlined",fullWidth:!0})))),innerScroll:!0}):l.a.createElement(m.a,{to:"/Login"})}}]),t}(c.Component);t.default=Object(h.b)(function(e){return console.log(e),{allProduits:e.produitReducer.allProduits,produits:e.firestore.ordered.produits,produitItem:e.r\u00e9seauReducer.produitItem,auth:e.firebase.auth}},{addProduit:_.c,getAllProduits:_.e,updateProduit:_.h,signOut:v.a})(E)}}]);