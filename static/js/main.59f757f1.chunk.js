(this["webpackJsonpreact-hooks-exemple"]=this["webpackJsonpreact-hooks-exemple"]||[]).push([[0],{40:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a,c,r=n(1),s=n(0),o=n(32),i=n.n(o),l=(n(40),n(15)),j=n(2),b=n(12),u=Object(s.createContext)(),d=Object(s.createContext)(),O=function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],c=Object(s.useContext)(u),o=Object(s.useContext)(d);return Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n.trim()?(o.addNote(n.trim()).then((function(){c.show("Note was created","success")})).catch((function(){c.show("Something wrong","danger")})),a("")):c.show("Enter text")},children:[Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter note",value:n,onChange:function(e){return a(e.target.value)}})}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Click Me"})]})},h=function(e){return Object(r.jsx)("ul",{className:"list-group",children:e.notes.map((function(t){return Object(r.jsxs)("li",{className:"list-group-item note",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("strong",{children:t.title}),Object(r.jsx)("small",{children:t.date})]}),Object(r.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm",onClick:function(){return e.onRemove(t.id)},children:"\xd7"})]},t.id)}))})},p=function(){return Object(r.jsx)("div",{className:"text-center",children:Object(r.jsx)("div",{className:"spinner-border text-primary",role:"status",children:Object(r.jsx)("span",{className:"sr-only",children:"Loading..."})})})},x=function(){var e=Object(s.useContext)(d),t=e.loading,n=e.notes,a=e.fetchNotes,c=e.removeNote;return Object(s.useEffect)((function(){a()}),[]),Object(r.jsxs)(s.Fragment,{children:[Object(r.jsx)(O,{}),Object(r.jsx)("hr",{}),t?Object(r.jsx)(p,{}):Object(r.jsx)(h,{notes:n,onRemove:c})]})},v=function(){return Object(r.jsx)("div",{className:"jumbotron",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{className:"display-4",children:"React with hooks"}),Object(r.jsxs)("p",{className:"lead",children:["Version ",Object(r.jsx)("strong",{children:"1.0.1"})]})]})})},m=function(){return Object(r.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"#",children:"React-example"}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(r.jsxs)("ul",{className:"navbar-nav",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{className:"nav-link",to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{className:"nav-link",to:"/about",children:"About"})})]})})]})},f=function(){var e=Object(s.useContext)(u),t=e.alert,n=e.hide;return t.visible?Object(r.jsxs)("div",{className:"alert alert-".concat(t.type||"warning"," alert-dismissible"),children:[Object(r.jsx)("strong",{children:"Attention!"}),"\xa0",t.text,Object(r.jsx)("button",{onClick:n,type:"button",className:"close","aria-label":"Close",children:Object(r.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}):null},g=n(8),N=n(4),y="SHOW_ALERT",w="HIDE_ALERT",E="SHOW_LOADER",k="FETCH_NOTES",C="ADD_NOTE",T="REMOVE_NOTE",D=(a={},Object(g.a)(a,y,(function(e,t){var n=t.payload;return Object(N.a)(Object(N.a)({},n),{},{visible:!0})})),Object(g.a)(a,w,(function(e){return Object(N.a)(Object(N.a)({},e),{},{visible:!1})})),Object(g.a)(a,"DEFAULT",(function(e){return e})),a),L=function(e,t){return(D[t.type]||D.DEFAULT)(e,t)},A=function(e){var t=e.children,n=Object(s.useReducer)(L,{visible:!1}),a=Object(b.a)(n,2),c=a[0],o=a[1];return Object(r.jsx)(u.Provider,{value:{show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";return o({type:y,payload:{text:e,type:t}})},hide:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";return o({type:w,payload:{text:e,type:t}})},alert:c},children:t})},F=n(11),R=n.n(F),S=n(17),_=n(18),H=n.n(_),P=n(34),U=(c={},Object(g.a)(c,E,(function(e){return Object(N.a)(Object(N.a)({},e),{},{loading:!0})})),Object(g.a)(c,C,(function(e,t){return Object(N.a)(Object(N.a)({},e),{},{notes:[].concat(Object(P.a)(e.notes),[t])})})),Object(g.a)(c,k,(function(e,t){var n=t.payload;return Object(N.a)(Object(N.a)({},e),{},{notes:n,loading:!1})})),Object(g.a)(c,T,(function(e,t){var n=t.payload;return Object(N.a)(Object(N.a)({},e),{},{notes:e.notes.filter((function(e){return e.id!==n}))})})),Object(g.a)(c,"DEFAULT",(function(e){return e})),c),I=function(e,t){return(U[t.type]||U.DEFAULT)(e,t)},J="https://react-hooks-example-88ef0-default-rtdb.firebaseio.com",B=function(e){var t=e.children,n=Object(s.useReducer)(I,{notes:[],loading:!1}),a=Object(b.a)(n,2),c=a[0],o=a[1],i=function(){return o({type:E})},l=function(){var e=Object(S.a)(R.a.mark((function e(){var t,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.next=3,H.a.get("".concat(J,"/notes.json"));case 3:t=e.sent,n=Object.keys(t.data).map((function(e){return Object(N.a)(Object(N.a)({},t.data[e]),{},{id:e})})),o({type:k,payload:n});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(S.a)(R.a.mark((function e(t){var n,a,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={title:t,date:(new Date).toJSON()},e.prev=1,e.next=4,H.a.post("".concat(J,"/notes.json"),n);case 4:a=e.sent,c=Object(N.a)(Object(N.a)({},n),{},{id:a.data.name}),o({type:C,payload:c}),console.log(a.data.name),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(1),new Error(e.t0.messages);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(S.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.delete("".concat(J,"/notes/").concat(t,".json "));case 2:o({type:T,payload:t});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(d.Provider,{value:{showLoader:i,fetchNotes:l,addNote:j,removeNote:u,loading:c.loading,notes:c.notes},children:t})};var M=function(){return Object(r.jsx)(B,{children:Object(r.jsx)(A,{children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)(m,{}),Object(r.jsxs)("div",{className:"container pt-4",children:[Object(r.jsx)(f,{}),Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{path:"/",exact:!0,component:x}),Object(r.jsx)(j.a,{path:"/about",component:v})]})]})]})})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};i.a.render(Object(r.jsx)(M,{}),document.getElementById("root")),V()}},[[65,1,2]]]);
//# sourceMappingURL=main.59f757f1.chunk.js.map