(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1451:function(e,n,t){"use strict";t.d(n,"c",function(){return u}),t.d(n,"g",function(){return l}),t.d(n,"b",function(){return d}),t.d(n,"d",function(){return f}),t.d(n,"e",function(){return g}),t.d(n,"f",function(){return m}),t.d(n,"a",function(){return h}),t.d(n,"h",function(){return b});var a=t(5),o=t(31),r=(t(419),t(56)),i=t.n(r),c=t(93),s=t(24),u=function(e){return function(n){i.a.auth().onAuthStateChanged(function(t){t&&(console.log(t.uid),i.a.firestore().collection("users").doc(t.uid).get().then(function(r){console.log(r.data());var i=r.data().displayName;console.log(i);var c={uid:t.uid,displayName:i},s=o.a.firestore().collection("magasins").doc().id;o.a.firestore().collection("magasins").doc(s).set(Object(a.a)({},e,{id:s,authorName:c.displayName,authorId:c.uid,createdAt:new Date})).then(function(){n({type:"Add_MAGASIN"})}).catch(function(e){console.error("Error adding document: ",e)})}))})}},l=function(e){return function(n){o.a.firestore().collection("magasins").doc(e).delete().then(function(e){e||c.a.dispatch(s.j({message:"Ce magasin a \xe9t\xe9 supprim\xe9 aves succ\xe8s"}))})}},d=function(){return{type:"OPEN_DIALOG_MAGASIN"}};function f(){return{type:"CLOSE_DIALOG_MAGASIN"}}var p=[],g=function(){return function(e){o.a.firestore().collection("magasins").get().then(function(n){return n.forEach(function(e){var n=Object(a.a)({},e.data(),{id:e.id});p.push(n)}),e(m(p)),p}).catch(function(e){console.error("Error writing document: ",e)})}},m=function(e){return{type:"GET_ALL_MAGASINS_SUCCESS",payload:e}};function h(e){return{type:"EDIT_MAGASIN_ITEM",magasin:e}}var b=function(e){return function(n){o.a.firestore().collection("magasins").doc(e.id).update(Object(a.a)({},e)).then(function(){n({type:"UPDATE_MAGASINS"})}).catch(function(e){console.error("Error updating document: ",e)})}}},1554:function(e,n,t){"use strict";t.r(n),t.d(n,"MapMagasins",function(){return A});var a=t(11),o=t(12),r=t(14),i=t(13),c=t(15),s=t(0),u=t.n(s),l=t(1459),d=t(21),f=t(18),p=t(185),g=t(1451),m=t(1),h=t(16),b=t(30),A=function(e){function n(){var e,t;Object(a.a)(this,n);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(t=Object(r.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(c)))).state={isOpen:!1},t.handleToggleOpen=function(){t.setState({isOpen:!0})},t.handleToggleClose=function(){t.setState({isOpen:!1})},t}return Object(c.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=this,n=this.props.magasins||[];return u.a.createElement("div",null,u.a.createElement(h.b,{enter:{animation:"transition.slideUpBigIn"}},u.a.createElement(m.d,{className:"w-full mb-16"},u.a.createElement(m.a,{position:"static",elevation:2,style:{backgroundColor:"#124164"}},u.a.createElement(m.db,{className:"pl-16 pr-8"},u.a.createElement(m.o,{color:"primary"},u.a.createElement(m.w,{"aria-label":"arrow_back",component:b.a,to:"/magasins"},"arrow_back")))))),u.a.createElement(l.Map,{google:this.props.google,zoom:8,initialCenter:{lat:48.864497,lng:2.347071}},n.map(function(n){return u.a.createElement(l.Marker,{position:{lat:n.latitude,lng:n.longitude},icon:"https://i.ibb.co/t42Gp96/shopping-cart.png"},e.state.isOpen&&u.a.createElement(l.InfoWindow,{onCloseClick:function(){return e.handleToggleClose()}},u.a.createElement("span",null,"Something")))})))}}]),n}(s.Component);n.default=Object(f.e)(Object(d.b)(function(e){return console.log(e),{allMagasins:e.magasinReducer.allMagasins,magasins:e.firestore.ordered.magasins,auth:e.firebase.auth}},{getAllMagasins:g.e,getAllMagasinsSuccess:g.f,EditMagasinItem:g.a}),Object(p.firestoreConnect)([{collection:"magasins"}]),Object(l.GoogleApiWrapper)({apiKey:"AIzaSyDZt_9RcYvqfLVpUptCOK3ju_iFlnSv8IE"}))(A)}}]);