(this["webpackJsonptesla-clone"]=this["webpackJsonptesla-clone"]||[]).push([[0],{35:function(n,e,t){},36:function(n,e,t){},49:function(n,e,t){"use strict";t.r(e);var r,i,c,o,a,s,l,d=t(0),j=t.n(d),x=t(10),b=t.n(x),g=(t(35),t(36),t(3)),p=t(15),h=t(4),O=t(28),u=t.n(O),f=t(29),m=t.n(f),v=t(14),w=Object(v.b)({name:"car",initialState:{cars:["Model S","Model 3","Model X","Model Y"]},reducers:{}}),y=function(n){return n.car.cars},k=w.reducer,T=t(13),B=t(2);var I,M,C,S,E,z,D,A=function(){var n=Object(d.useState)(!1),e=Object(p.a)(n,2),t=e[0],r=e[1],i=Object(T.b)(y);return Object(B.jsxs)(L,{children:[Object(B.jsx)("a",{children:Object(B.jsx)("img",{src:"/images/logo.svg",alt:""})}),Object(B.jsx)(X,{children:i&&i.map((function(n,e){return Object(B.jsx)("a",{href:"#",children:n},e)}))}),Object(B.jsxs)(N,{children:[Object(B.jsx)("a",{href:"#",children:"Shop"}),Object(B.jsx)("a",{href:"#",children:"Tesla Account"}),Object(B.jsx)(R,{onClick:function(){return r(!0)}})]}),Object(B.jsxs)(J,{show:t,children:[Object(B.jsx)(Y,{children:Object(B.jsx)(W,{onClick:function(){return r(!1)}})}),i&&i.map((function(n,e){return Object(B.jsxs)("li",{children:[Object(B.jsx)("a",{href:"#"}),n]},e)})),Object(B.jsxs)("li",{children:[Object(B.jsx)("a",{href:"#"}),"Existing Inventory"]}),Object(B.jsxs)("li",{children:[Object(B.jsx)("a",{href:"#"}),"Used Inventory"]}),Object(B.jsxs)("li",{children:[Object(B.jsx)("a",{href:"#"}),"Trade-In"]}),Object(B.jsxs)("li",{children:[Object(B.jsx)("a",{href:"#"}),"Cyber Truck"]}),Object(B.jsxs)("li",{children:[Object(B.jsx)("a",{href:"#"}),"Roadster"]})]})]})},L=h.a.div(r||(r=Object(g.a)(["\nmin-height:60px;\nposition:fixed;\ndisplay:flex;\nalign-tems:center;\npadding:0 20px;\nmargin-top:20px;\ntop:0;\nleft:0;\njustify-content:space-between;\nz-index:+1;\n"]))),X=h.a.div(i||(i=Object(g.a)(["\ndisplay:flex;\nalign-items:center;\nflex:1;\njustify-content:center;\nmargin-left:18px;\nmargin-bottom:25px;\na{\n    font-width:600;\n    text-decoration:uppercase;\n    padding:0 10px;\n    flex-wrap:nowrap;\n}\n@media(max-width:768px){\n    display:none;\n}\n\n"]))),N=h.a.div(c||(c=Object(g.a)(["\ndisplay:flex;\nalign-items:center;\nmargin-bottom:25px;\nmargin-left:860px;\n\na{\n    font-width:600;\n    text-decoration:uppercase;\n   margin-right:10px;\n    flex-wrap:nowrap;\n}\n"]))),R=Object(h.a)(u.a)(o||(o=Object(g.a)(["\n\ncursor:pointer;\n\n"]))),J=h.a.div(a||(a=Object(g.a)(["\nposition:fixed;\ntop:0;\nbottom:0;\nbackground:white;\nwidth:300px;\nmargin-left:80%;\nz-index:16;\nlist-style:none;\npadding:20px;\ndisplay:flex;\nflex-direction:column;\ntext-align:start;\ntransform:",";\ntransition: transform 0.2s ease-in;\nli{\n    padding:15px 0;\n    border-bottom:1px solid rgba(0,0,0,.2);\n    a{\n    font-weight:600;\n}\n}\n\n\n"])),(function(n){return n.show?"translateX(0)":"translateX(100%)"})),W=Object(h.a)(m.a)(s||(s=Object(g.a)(["\ncursor:pointer;\n\n\n"]))),Y=h.a.div(l||(l=Object(g.a)(["\n\ndisplay:flex;\njustify-content:flex-end;\n"]))),P=t(18),U=t.n(P);var $,q=function(n){var e=n.title,t=n.description,r=n.leftBtnText,i=n.rightBtnText,c=n.backgroundImg;return Object(B.jsxs)(F,{bgImage:c,children:[Object(B.jsx)(U.a,{bottom:!0,children:Object(B.jsxs)(G,{children:[Object(B.jsx)("h1",{children:e}),Object(B.jsx)("p",{children:t})]})}),Object(B.jsxs)(Z,{children:[Object(B.jsx)(U.a,{bottom:!0,children:Object(B.jsxs)(H,{children:[r&&Object(B.jsx)(K,{children:r}),i&&Object(B.jsx)(Q,{children:i})]})}),Object(B.jsx)(V,{src:"/images/down-arrow.svg"})]})]})},F=h.a.div(I||(I=Object(g.a)(["\n\nwidth: 100vw;\nheight:100vh;\nbackground-image:url('/images/model-s.jpg');\nbackground-size:cover;\nbackground-position:center;\nbackground-repeat:no-repeat;\ndisplay:flex;\nflex-direction:column;\njustify-content: space-between;//vertical \nalign-items:center:center;//horizontal\nbackground-image: ","\n"])),(function(n){return'url("/images/'.concat(n.bgImage,'")')})),G=h.a.div(M||(M=Object(g.a)(["\n\npadding-top:15vh;\ntext-align:center;\n\n"]))),H=h.a.div(C||(C=Object(g.a)(["\ndisplay:flex;\nmargin-bottom:30px;\nmargin-left:500px;\n@media (max-width:768px){\n    flex-direction:column;\n}\n\n"]))),K=h.a.div(S||(S=Object(g.a)(["\nbackground-color:rgba(23,26,32,0.8);\nheight:40px;\nwidth:256px;\ncolor:white;\ndisplay:flex;\njustify-content:center;\nalign-items:center;\nborder-radius:100px;\nopacity:0.85;\ntext-transform:uppercase;\nfont-size:12px;\ncursor:pointer;\nmargin:8px;\n"]))),Q=Object(h.a)(K)(E||(E=Object(g.a)(["\nbackground:white;\nopacity:0.65;\ncolor:black;\n"]))),V=h.a.img(z||(z=Object(g.a)(["\n\nheight:40px;\nanimation: animateDown infinite 1.5s;\noverflow-x:hidden;\n"]))),Z=h.a.div(D||(D=Object(g.a)(["\n\n\n"])));var _=function(){return Object(B.jsxs)(nn,{children:[Object(B.jsx)(q,{title:"Model S",description:"Order Online for Touchless Delievery",backgroundImg:"model-s.jpg",leftBtnText:"Custom order",rightBtnText:"Existing inventory"}),Object(B.jsx)(q,{title:"Model Y",description:"Order Online for Touchless Delievery",backgroundImg:"model-y.jpg",leftBtnText:"Custom order",rightBtnText:"Existing inventory"}),Object(B.jsx)(q,{title:"Model 3",description:"Order Online for Touchless Delievery",backgroundImg:"model-3.jpg",leftBtnText:"Custom order",rightBtnText:"Existing inventory"}),Object(B.jsx)(q,{title:"Model X",description:"Order Online for Touchless Delievery",backgroundImg:"model-x.jpg",leftBtnText:"Custom order",rightBtnText:"Existing inventory"}),Object(B.jsx)(q,{title:"Lowest Cost Solar Panels in America",description:"Money-back guarantee",backgroundImg:"solar-panel.jpg",leftBtnText:"Order now",rightBtnText:"Learn more"}),Object(B.jsx)(q,{title:"Solar for New Roofs",description:"Solar Roof Costs Less Than a New",backgroundImg:"solar-roof.jpg",leftBtnText:"Order now",rightBtnText:"Learn more"}),Object(B.jsx)(q,{title:"Accessories",description:"",backgroundImg:"accessories.jpg"})]})},nn=h.a.div($||($=Object(g.a)([" height:100vh;\n \n"])));var en=function(){return Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(A,{}),Object(B.jsx)(_,{})]})},tn=Object(v.a)({reducer:{car:k}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));b.a.render(Object(B.jsx)(j.a.StrictMode,{children:Object(B.jsx)(T.a,{store:tn,children:Object(B.jsx)(en,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.a302e25d.chunk.js.map