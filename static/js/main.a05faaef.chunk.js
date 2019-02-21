(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,a){e.exports=a(277)},277:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(20),s=a.n(c),o=a(36),i=a(37),l=a(41),u=a(38),p=a(40),m=a(27),E=a(39),d=a(74),h=a.n(d),b=a(59),f=a.n(b),y=a(28),O=a(115),j=a.n(O),w=a(117),v=a.n(w),g=a(29),C=a.n(g),S=a(116),x=a.n(S),A=a(76),P=a.n(A),_=a(42),R=a.n(_),L=a(73),T=a.n(L),k=a(58),N=a(22),Y=a(114),U=a.n(Y),D=a(75),I=a.n(D),F={firstName:"",lastName:"",score:0},Q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={newPlayer:Object(N.a)({},F)},a.componentDidMount=function(){a.setState(Object(N.a)({},a.state,{newPlayer:a.props.player?Object(N.a)({},a.props.player):Object(N.a)({},F)}))},a.handleScoreChange=function(e,t){a.setState(Object(N.a)({},a.state,{newPlayer:Object(N.a)({},a.state.newPlayer,{score:t})}))},a.handleInputChange=function(e){return function(t){a.setState(Object(N.a)({},a.state,{newPlayer:Object(N.a)({},a.state.newPlayer,Object(k.a)({},e,t.target.value))}))}},a.handleAction=function(){switch(a.props.action){case"create":a.props.dispatch({type:"CREATE_PLAYER_REQUEST",player:a.state.newPlayer});break;case"edit":a.props.dispatch({type:"EDIT_PLAYER_REQUEST",player:a.state.newPlayer});break;default:throw new Error("Invalid action ".concat(a.props.action))}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement(I.a,{id:"first-name",label:"First Name",fullWidth:!0,value:this.state.newPlayer.firstName,onChange:this.handleInputChange("firstName"),margin:"normal"}),r.a.createElement(I.a,{id:"last-name",label:"Last Name",fullWidth:!0,margin:"normal",value:this.state.newPlayer.lastName,onChange:this.handleInputChange("lastName")}),r.a.createElement("div",{className:e.sliderContainer},r.a.createElement(f.a,{id:"label"},"Score: ",this.state.newPlayer.score),r.a.createElement(U.a,{classes:{container:e.slider},value:this.state.newPlayer.score,min:0,max:100,step:1,"aria-labelledby":"label",onChange:this.handleScoreChange})),r.a.createElement(R.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:this.handleAction},"OK"))}}]),t}(n.Component),W=Object(y.withStyles)(function(e){return{slider:{padding:"22px 6px"},sliderContainer:{marginTop:"16px",marginBottom:"20px"}}})(Object(E.b)()(Q));var H=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,editPlayer:null,formAction:null},a.componentDidMount=function(){a.props.dispatch({type:"FETCH_PLAYERS_REQUEST"})},a.handleOpen=function(){a.setState({open:!0,formAction:"create",editPlayer:null})},a.handleClose=function(){a.setState({open:!1,formAction:null})},a.sortedData=function(){return Object(m.a)(a.props.players).sort(function(e,t){return e.score===t.score?e.lastName.toLowerCase()>t.lastName.toLowerCase()?1:-1:e.score<t.score?1:-1})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.dispatch;return r.a.createElement(h.a,{className:a.root,elevation:1},r.a.createElement(T.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.open,onClose:this.handleClose},r.a.createElement("div",{style:{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")},className:a.modal},r.a.createElement(f.a,{variant:"h6",id:"modal-title"},"New Player"),r.a.createElement(W,{player:this.state.editPlayer,action:this.state.formAction}))),r.a.createElement(j.a,{className:a.table},r.a.createElement(x.a,null,r.a.createElement(P.a,null,r.a.createElement(C.a,null,"Name"),r.a.createElement(C.a,{align:"right"},"Score"),r.a.createElement(C.a,{align:"right"},r.a.createElement(R.a,{onClick:this.handleOpen},"Add")))),r.a.createElement(v.a,null,this.sortedData().map(function(t){return r.a.createElement(P.a,{key:t.id},r.a.createElement(C.a,{component:"th",scope:"row"},t.firstName," ",t.lastName),r.a.createElement(C.a,{align:"right"},t.score),r.a.createElement(C.a,{align:"right"},r.a.createElement(R.a,{onClick:function(){e.setState({open:!0,editPlayer:t,formAction:"edit"})}},"Edit"),r.a.createElement(R.a,{onClick:function(){return n({type:"DELETE_PLAYER_REQUEST",id:t.id})}},"Delete")))}))))}}]),t}(n.Component),B=Object(y.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:700},modal:{position:"absolute",width:50*e.spacing.unit,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:4*e.spacing.unit,outline:"none"},slider:{padding:"22px 6px"},sliderContainer:{marginTop:"16px",marginBottom:"20px"}}})(Object(E.b)(function(e,t){return{players:e.players}})(H)),J=a(77),M=a.n(J),G=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(M.a,{container:!0,spacing:16},r.a.createElement(M.a,{item:!0,xs:12,style:{padding:20}},r.a.createElement(B,null))))}}]),t}(n.Component),K=Object(y.withStyles)(function(e){return{root:{flexGrow:1}}})(G);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=a(120),X=a(23),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PLAYERS_SUCCESS":return[].concat(Object(m.a)(e),Object(m.a)(t.data));case"CREATE_PLAYER_SUCCESS":return[].concat(Object(m.a)(e),[Object(N.a)({},t.player)]);case"EDIT_PLAYER_REQUEST":return[].concat(Object(m.a)(e.filter(function(e){return e.id!==t.player.id})),[Object(N.a)({},t.player)]);case"DELETE_PLAYER_SUCCESS":return Object(m.a)(e.filter(function(e){return e.id!==t.id}));default:return e}},q=Object(X.c)({players:$}),z=a(19),Z=a.n(z),ee=a(18),te=a(118),ae=a(119),ne=a.n(ae);var re={create:function(e){var t=e.firstName,a=e.lastName,n=e.score;return new Promise(function(e){return e(function(e,t,a){return{id:ne()(),firstName:e,lastName:t,score:a}}(t,a,n))})},fetchAll:function(){var e=Object(te.a)(Z.a.mark(function e(){return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("players.json");case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),delete:function(e){return new Promise(function(t){return t(e)})},edit:function(e){return new Promise(function(t){return t(e)})}},ce=Z.a.mark(ue),se=Z.a.mark(pe),oe=Z.a.mark(me),ie=Z.a.mark(Ee),le=Z.a.mark(de);function ue(e){var t;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ee.a)(re.fetchAll);case 3:return t=e.sent,e.next=6,Object(ee.b)({type:"FETCH_PLAYERS_SUCCESS",data:t});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(ee.b)({type:"FETCH_PLAYERS_FAIL",message:e.t0.message});case 12:case"end":return e.stop()}},ce,this,[[0,8]])}function pe(e){var t;return Z.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(ee.a)(re.create,e.player);case 3:return t=a.sent,a.next=6,Object(ee.b)({type:"CREATE_PLAYER_SUCCESS",player:t});case 6:a.next=13;break;case 8:return a.prev=8,a.t0=a.catch(0),console.log(a.t0),a.next=13,Object(ee.b)({type:"CREATE_PLAYER_FAIL",message:a.t0.message});case 13:case"end":return a.stop()}},se,this,[[0,8]])}function me(e){var t;return Z.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(ee.a)(re.delete,e.id);case 3:return t=a.sent,a.next=6,Object(ee.b)({type:"DELETE_PLAYER_SUCCESS",id:t});case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(ee.b)({type:"DELETE_PLAYER_FAIL",message:a.t0.message});case 12:case"end":return a.stop()}},oe,this,[[0,8]])}function Ee(e){var t;return Z.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(ee.a)(re.edit,e.player);case 3:return t=a.sent,a.next=6,Object(ee.b)({type:"EDIT_PLAYER_SUCCESS",player:t});case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(ee.b)({type:"EDIT_PLAYER_FAIL",message:a.t0.message});case 12:case"end":return a.stop()}},ie,this,[[0,8]])}function de(){return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.c)("FETCH_PLAYERS_REQUEST",ue);case 2:return e.next=4,Object(ee.c)("CREATE_PLAYER_REQUEST",pe);case 4:return e.next=6,Object(ee.c)("DELETE_PLAYER_REQUEST",me);case 6:return e.next=8,Object(ee.c)("EDIT_PLAYER_REQUEST",Ee);case 8:case"end":return e.stop()}},le,this)}var he=de,be=Object(V.a)(),fe=Object(X.e)(q,Object(X.a)(be));be.run(he),s.a.render(r.a.createElement(E.a,{store:fe},r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[121,1,2]]]);
//# sourceMappingURL=main.a05faaef.chunk.js.map