(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1448:function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"g",function(){return u}),n.d(t,"b",function(){return d}),n.d(t,"d",function(){return m}),n.d(t,"e",function(){return f}),n.d(t,"f",function(){return h}),n.d(t,"a",function(){return b}),n.d(t,"h",function(){return v});var a=n(5),i=n(31),o=(n(419),n(56)),r=n.n(o),l=n(93),s=n(24),c=function(e){return function(t){r.a.auth().onAuthStateChanged(function(n){n&&(console.log(n.uid),r.a.firestore().collection("users").doc(n.uid).get().then(function(o){console.log(o.data());var r=o.data().displayName;console.log(r);var l={uid:n.uid,displayName:r},s=i.a.firestore().collection("animations").doc().id;i.a.firestore().collection("animations").doc(s).set(Object(a.a)({},e,{id:s,authorName:l.displayName,authorId:l.uid,createdAt:new Date})).then(function(){t({type:"Add_ANIMATION"})}).catch(function(e){console.error("Error adding document: ",e)})}))})}},u=function(e){return function(t){i.a.firestore().collection("animations").doc(e).delete().then(function(e){e||l.a.dispatch(s.j({message:"Cette animation a \xe9t\xe9 supprim\xe9e"}))})}},d=function(){return{type:"OPEN_DIALOG_ANIMATION"}};function m(){return{type:"CLOSE_DIALOG_ANIMATION"}}var p=[],f=function(){return function(e){i.a.firestore().collection("animations").get().then(function(t){return t.forEach(function(e){var t=Object(a.a)({},e.data(),{id:e.id});p.push(t)}),e(h(p)),p}).catch(function(e){console.error("Error writing document: ",e)})}},h=function(e){return{type:"GET_ALL_ANIMATIONS_SUCCESS",payload:e}};function b(e){return{type:"EDIT_ANIMATION_ITEM",animation:e}}var v=function(e){return function(t){i.a.firestore().collection("animations").doc(e.id).update(Object(a.a)({},e)).then(function(){t({type:"UPDATE_ANIMATION"})}).catch(function(e){console.error("Error updating document: ",e)})}}},1463:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),o=s(i),r=s(n(38)),l=s(n(4));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u="Select...",d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selected:n.parseValue(e.value,e.options)||{label:"undefined"===typeof e.placeholder?u:e.placeholder,value:""},isOpen:!1},n.mounted=!0,n.handleDocumentClick=n.handleDocumentClick.bind(n),n.fireChangeEvent=n.fireChangeEvent.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),a(t,[{key:"componentWillReceiveProps",value:function(e){if(e.value){var t=this.parseValue(e.value,e.options);t!==this.state.selected&&this.setState({selected:t})}else this.setState({selected:{label:"undefined"===typeof e.placeholder?u:e.placeholder,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1),document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,document.removeEventListener("click",this.handleDocumentClick,!1),document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(e){this.props.onFocus&&"function"===typeof this.props.onFocus&&this.props.onFocus(this.state.isOpen),"mousedown"===e.type&&0!==e.button||(e.stopPropagation(),e.preventDefault(),this.props.disabled||this.setState({isOpen:!this.state.isOpen}))}},{key:"parseValue",value:function(e,t){var n=void 0;if("string"===typeof e)for(var a=0,i=t.length;a<i;a++)if("group"===t[a].type){var o=t[a].items.filter(function(t){return t.value===e});o.length&&(n=o[0])}else"undefined"!==typeof t[a].value&&t[a].value===e&&(n=t[a]);return n||e}},{key:"setValue",value:function(e,t){var n={selected:{value:e,label:t},isOpen:!1};this.fireChangeEvent(n),this.setState(n)}},{key:"fireChangeEvent",value:function(e){e.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(e.selected)}},{key:"renderOption",value:function(e){var t,n=e.value;"undefined"===typeof n&&(n=e.label||e);var a=e.label||e.value||e,i=n===this.state.selected.value||n===this.state.selected,r=(c(t={},this.props.baseClassName+"-option",!0),c(t,e.className,!!e.className),c(t,"is-selected",i),t),s=(0,l.default)(r);return o.default.createElement("div",{key:n,className:s,onMouseDown:this.setValue.bind(this,n,a),onClick:this.setValue.bind(this,n,a),role:"option","aria-selected":i?"true":"false"},a)}},{key:"buildMenu",value:function(){var e=this,t=this.props,n=t.options,a=t.baseClassName,i=n.map(function(t){if("group"===t.type){var n=o.default.createElement("div",{className:a+"-title"},t.name),i=t.items.map(function(t){return e.renderOption(t)});return o.default.createElement("div",{className:a+"-group",key:t.name,role:"listbox",tabIndex:"-1"},n,i)}return e.renderOption(t)});return i.length?i:o.default.createElement("div",{className:a+"-noresults"},"No options found")}},{key:"handleDocumentClick",value:function(e){this.mounted&&(r.default.findDOMNode(this).contains(e.target)||this.state.isOpen&&this.setState({isOpen:!1}))}},{key:"isValueSelected",value:function(){return"string"===typeof this.state.selected||""!==this.state.selected.value}},{key:"render",value:function(){var e,t,n,a,i,r=this.props,s=r.baseClassName,u=r.controlClassName,d=r.placeholderClassName,m=r.menuClassName,p=r.arrowClassName,f=r.arrowClosed,h=r.arrowOpen,b=r.className,v=this.props.disabled?"Dropdown-disabled":"",E="string"===typeof this.state.selected?this.state.selected:this.state.selected.label,g=(0,l.default)((c(e={},s+"-root",!0),c(e,b,!!b),c(e,"is-open",this.state.isOpen),e)),y=(0,l.default)((c(t={},s+"-control",!0),c(t,u,!!u),c(t,v,!!v),t)),O=(0,l.default)((c(n={},s+"-placeholder",!0),c(n,d,!!d),c(n,"is-selected",this.isValueSelected()),n)),C=(0,l.default)((c(a={},s+"-menu",!0),c(a,m,!!m),a)),N=(0,l.default)((c(i={},s+"-arrow",!0),c(i,p,!!p),i)),w=o.default.createElement("div",{className:O},E),k=this.state.isOpen?o.default.createElement("div",{className:C,"aria-expanded":"true"},this.buildMenu()):null;return o.default.createElement("div",{className:g},o.default.createElement("div",{className:y,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this),"aria-haspopup":"listbox"},w,o.default.createElement("div",{className:s+"-arrow-wrapper"},h&&f?this.state.isOpen?h:f:o.default.createElement("span",{className:N}))),k)}}]),t}();d.defaultProps={baseClassName:"Dropdown"},t.default=d},1567:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(16),r=n(11),l=n(12),s=n(14),c=n(13),u=n(15),d=n(1),m=n(1463),p=n.n(m),f=n(21),h=n(18),b=(n(9),n(185)),v=n(82),E=n(30),g=n(50),y=(n(4),[{id:"name",align:"left",disablePadding:!1,label:"Name",sort:!0},{id:"description",align:"left",disablePadding:!1,label:"Description",sort:!0},{id:"lieu",align:"left",disablePadding:!1,label:"Lieu",sort:!0},{id:"type",align:"left",disablePadding:!1,label:"Type",sort:!0},{id:"produits",align:"left",disablePadding:!1,label:"Produits",sort:!0},{id:"actions",align:"left",disablePadding:!1,label:"Actions",sort:!0}]),O=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={selectedProductsMenu:null},n.openSelectedProductsMenu=function(e){n.setState({selectedProductsMenu:e.currentTarget})},n.closeSelectedProductsMenu=function(){n.setState({selectedProductsMenu:null})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.onSelectAllClick,e.order),n=e.orderBy;e.numSelected,e.rowCount,e.classes,this.state.selectedProductsMenu;return i.a.createElement(d.Y,null,i.a.createElement(d.Z,{className:"h-64"},y.map(function(e){return i.a.createElement(d.X,{key:e.id,align:e.align,padding:e.disablePadding?"none":"default",sortDirection:n===e.id&&t},e.sort&&i.a.createElement(d.eb,{title:"Sort",placement:"right"===e.align?"bottom-end":"bottom-start",enterDelay:300},i.a.createElement(d.ab,{active:n===e.id,direction:t},e.label)))},this)))}}]),t}(i.a.Component),C=Object(g.withStyles)(function(e){return{actionsButtonWrapper:{background:e.palette.background.paper}}},{withTheme:!0})(O),N=n(1448),w=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={statusSwitchEl:null,chatsMoreMenuEl:null,searchText:"",nom_prod:""},n.handleClick=function(e){console.log(e),n.props.EditAnimationItem(e)},n.chatsMoreMenuClose=function(e){n.setState({chatsMoreMenuEl:null})},n.chatsMoreMenuClick=function(e){n.setState({chatsMoreMenuEl:e.currentTarget})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getAllAnimations()}},{key:"render",value:function(){var e=this,t=this.state.chatsMoreMenuEl;if(!this.props.auth.uid)return i.a.createElement(v.a,{to:"/Login"});var n=this.props.animations||[];return i.a.createElement("div",{className:"w-full flex flex-col",delay:1e3},i.a.createElement(o.a,{animation:"transition.slideUpBigIn",delay:300},i.a.createElement(d.V,null,i.a.createElement(o.a,{animation:"transition.slideUpBigIn",delay:300},i.a.createElement(C,null)),i.a.createElement(o.a,{animation:"transition.whirlIn",delay:400},i.a.createElement(d.W,null,n.map(function(a){return i.a.createElement(d.Z,{className:"h-64",hover:!0},i.a.createElement(d.X,{component:"th",scope:"row",align:"left"},a.name),i.a.createElement(d.X,{className:"truncate",component:"th",scope:"row",align:"left"},a.description),i.a.createElement(d.X,{component:"th",scope:"row",align:"left"},a.lieu),i.a.createElement(d.X,{component:"th",scope:"row",align:"left"},a.typeanim),i.a.createElement(d.X,{component:"th",scope:"row",align:"left"},i.a.createElement(p.a,{placeholder:"Cliquez ici pour voir les produits",fluid:!0,search:!0,selection:!0,multiple:!0,options:n.map(function(e,t){return i.a.createElement("option",{key:e.id},e.nom_prod.produits[t])})})),i.a.createElement(d.X,null,i.a.createElement("div",null,i.a.createElement(d.x,{"aria-owns":t?"chats-more-menu":null,"aria-haspopup":"true",onClick:e.chatsMoreMenuClick},i.a.createElement(d.w,null,"more_vert")),i.a.createElement(d.H,{id:"chats-more-menu",anchorEl:t,open:Boolean(t),onClose:e.chatsMoreMenuClose},i.a.createElement(d.I,{onClick:e.chatsMoreMenuClose},i.a.createElement(d.F,{className:"pl-0",onClick:function(){e.props.removeAnimation(a.id)},primary:"Supprimer"}),i.a.createElement(d.w,{onClick:function(){e.props.removeAnimation(a.id)},className:"text-red text-20",align:"right"},"remove_circle")),i.a.createElement(d.I,{onClick:e.chatsMoreMenuClose},i.a.createElement(d.F,{className:"pl-0",primary:"Modifier",onClick:function(){e.handleClick(a)},component:E.a,to:"/form/"+a.id+"/"+a.name}),i.a.createElement(d.w,{onClick:function(){e.handleClick(a)},className:"text-blue text-20",component:E.a,to:"/form/"+a.id+"/"+a.name,align:"right"},"edit_circle"))))))}))))))}}]),t}(a.Component),k=Object(h.e)(Object(f.b)(function(e){return{allAnimations:e.myReducer.allAnimations,animations:e.firestore.ordered.animations,auth:e.firebase.auth}},{getAllAnimations:N.e,getAllAnimationsSuccess:N.f,removeAnimation:N.g,EditAnimationItem:N.a,OpenRemoveAnimation:N.b}),Object(b.firestoreConnect)([{collection:"animations"}]))(w),A=Object(f.b)(function(e){return{mainTheme:e.fuse.settings.mainTheme}})(function(e){e.setSearchText,e.searchText,e.mainTheme,e.props;return i.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},i.a.createElement("div",{className:"flex items-center"},i.a.createElement(o.a,{animation:"transition.expandIn",delay:300},i.a.createElement(d.w,{className:"text-32 mr-0 sm:mr-12"},"shopping_basket")),i.a.createElement(o.a,{animation:"transition.slideLeftIn",delay:300},i.a.createElement(d.fb,{className:"hidden sm:flex",variant:"h6"},"Animations"))),i.a.createElement(o.a,{animation:"transition.slideRightIn",delay:300},i.a.createElement(d.c,{component:E.a,to:"/mapanimation",color:"secondary",variant:"contained"},i.a.createElement("span",{className:"hidden sm:flex"},"Voir les animations en map"))),i.a.createElement(o.a,{animation:"transition.slideRightIn",delay:300},i.a.createElement(d.c,{component:E.a,to:"/form/animation",className:"whitespace-no-wrap",variant:"contained"},i.a.createElement("span",{className:"hidden sm:flex"},"Ajouter Animation"))))}),M=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={id:"",name:"",description:"",typeanim:"",lieu:"",produits:""},n.updateAnimationState=function(){var e=n.props.animationItem;n.setState({id:e.id,name:e.name,description:e.description,typeanim:e.typeanim,lieu:e.lieu,produits:e.produits})},n.closeDialog=function(){n.props.closeDialogAnimation()},n.handleSubmit=function(){console.log(n.state);var e=n.props.animationItem;n.props.removeAnimation(e.id)},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.updateAnimationState(),console.log("je trouve",this.props.animationItem)}},{key:"render",value:function(){var e=this.props,t=e.todoDialog,n=e.animationItem;return i.a.createElement(d.j,Object.assign({},t.props,{onClose:this.closeDialog}),i.a.createElement(d.a,{position:"static"},i.a.createElement(d.db,null,i.a.createElement(d.fb,{color:"inherit"},"\xcates-vous s\xfbr de vouloir supprimer ",n.name," ?"))),i.a.createElement(d.k,{className:"justify-center"},i.a.createElement(d.x,{color:"secondary",onClick:this.handleSubmit},i.a.createElement(d.w,null,"done")),i.a.createElement(d.x,{color:"primary",onClick:this.closeDialog},i.a.createElement(d.w,null,"close"))))}}]),t}(a.Component),j=Object(f.b)(function(e){return console.log("Item",e),{todoDialog:e.myReducer.todoDialog,animationItem:e.myReducer.animationItem,animations:e.firestore.ordered.animations}},{removeAnimation:N.g,closeDialogAnimation:N.d})(M);t.default=Object(h.e)(Object(f.b)(function(e){return{animations:e.firestore.ordered.animations,auth:e.firebase.auth}},null),Object(b.firestoreConnect)([{collection:"animations"}]))(function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.m,{header:i.a.createElement(A,null),content:i.a.createElement(k,null),innerScroll:!0}),i.a.createElement(j,null))})}}]);