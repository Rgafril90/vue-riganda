(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c93164e"],{"5a5c":function(t,e,a){"use strict";a.r(e);a("b0c0");var c=a("7a23"),n={class:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"},r=Object(c["g"])("h1",{class:"h2"},"Users",-1),s=Object(c["i"])("Create User"),o={class:"row row-cols-4 g-3"},l=Object(c["g"])("img",{src:"Gambar-default.jpeg",class:"card-img-top",alt:"..."},null,-1),i={class:"card-body"},u={class:"card-title"},b={class:"card-text"},d=Object(c["i"])("Detail User");function j(t,e,a,j,f,O){var g=Object(c["A"])("router-link"),p=Object(c["A"])("layout-main");return Object(c["s"])(),Object(c["f"])("div",null,[Object(c["j"])(p,null,{default:Object(c["G"])((function(){return[Object(c["g"])("div",n,[r,Object(c["j"])(g,{to:{name:"createuser"},class:"btn btn-success"},{default:Object(c["G"])((function(){return[s]})),_:1})]),Object(c["g"])("div",o,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(f.datausers,(function(t){return Object(c["s"])(),Object(c["f"])("div",{key:t,class:"card col mr-1"},[l,Object(c["g"])("div",i,[Object(c["g"])("h5",u,Object(c["C"])(t.name),1),Object(c["g"])("h6",null,Object(c["C"])(t.username),1),Object(c["g"])("p",b,"Company : "+Object(c["C"])(t.company.name),1),Object(c["j"])(g,{to:{name:"detailuser",params:{id:t.id,username:t.username}},class:"btn btn-primary"},{default:Object(c["G"])((function(){return[d]})),_:2},1032,["to"])])])})),128))])]})),_:1})])}a("d3b7");var f=a("7909"),O={components:{LayoutMain:f["a"]},data:function(){return{datausers:null}},methods:{loadUsers:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json()})).then((function(e){t.datausers=e})).catch((function(t){console.log(t)}))}},mounted:function(){this.loadUsers()}},g=a("6b0d"),p=a.n(g);const m=p()(O,[["render",j]]);e["default"]=m},7909:function(t,e,a){"use strict";var c=a("7a23"),n=function(t){return Object(c["v"])("data-v-66c8f5d3"),t=t(),Object(c["t"])(),t},r={class:"dashboard"},s={class:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"},o=n((function(){return Object(c["g"])("a",{class:"navbar-brand col-md-3 col-lg-2 me-0 px-3",href:"#"},"Nur Rachmat .inc",-1)})),l=n((function(){return Object(c["g"])("button",{class:"navbar-toggler position-absolute d-md-none collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["g"])("span",{class:"navbar-toggler-icon"})],-1)})),i=n((function(){return Object(c["g"])("input",{class:"form-control form-control-dark w-100",type:"text",placeholder:"Search","aria-label":"Search"},null,-1)})),u={class:"navbar-nav"},b={class:"nav-item text-nowrap"},d=Object(c["i"])("Sign out"),j={class:"container-fluid"},f={class:"row"},O={id:"sidebarMenu",class:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"},g={class:"position-sticky pt-3"},p={class:"nav flex-column"},m={class:"nav-item"},v=n((function(){return Object(c["g"])("span",{"data-feather":"home"},null,-1)})),h=Object(c["i"])(" Dashboard "),k={class:"nav-item"},y=n((function(){return Object(c["g"])("span",{"data-feather":"file"},null,-1)})),w=Object(c["i"])(" Profil "),x={class:"nav-item"},_=n((function(){return Object(c["g"])("span",{"data-feather":"shopping-cart"},null,-1)})),G=Object(c["i"])(" About "),S={class:"nav-item"},U=n((function(){return Object(c["g"])("span",{"data-feather":"shopping-cart"},null,-1)})),C=Object(c["i"])(" Users "),M={class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"};function A(t,e,a,n,A,D){var I=Object(c["A"])("router-link");return Object(c["s"])(),Object(c["f"])("div",r,[Object(c["g"])("header",s,[o,l,i,Object(c["g"])("div",u,[Object(c["g"])("div",b,[Object(c["j"])(I,{to:"/login",class:"nav-link px-3"},{default:Object(c["G"])((function(){return[d]})),_:1})])])]),Object(c["g"])("div",j,[Object(c["g"])("div",f,[Object(c["g"])("nav",O,[Object(c["g"])("div",g,[Object(c["g"])("ul",p,[Object(c["g"])("li",m,[Object(c["j"])(I,{to:"/dashboard",class:"nav-link active","aria-current":"page"},{default:Object(c["G"])((function(){return[v,h]})),_:1})]),Object(c["g"])("li",k,[Object(c["j"])(I,{to:"/profil",class:"nav-link"},{default:Object(c["G"])((function(){return[y,w]})),_:1})]),Object(c["g"])("li",x,[Object(c["j"])(I,{to:"/about",class:"nav-link"},{default:Object(c["G"])((function(){return[_,G]})),_:1})]),Object(c["g"])("li",S,[Object(c["j"])(I,{to:"/users",class:"nav-link"},{default:Object(c["G"])((function(){return[U,C]})),_:1})])])])]),Object(c["g"])("main",M,[Object(c["z"])(t.$slots,"default",{},void 0,!0)])])])])}var D={name:"LayoutMain"},I=(a("ecf7"),a("6b0d")),J=a.n(I);const L=J()(D,[["render",A],["__scopeId","data-v-66c8f5d3"]]);e["a"]=L},a2f5:function(t,e,a){},b0c0:function(t,e,a){var c=a("83ab"),n=a("5e77").EXISTS,r=a("e330"),s=a("9bf2").f,o=Function.prototype,l=r(o.toString),i=/^\s*function ([^ (]*)/,u=r(i.exec),b="name";c&&!n&&s(o,b,{configurable:!0,get:function(){try{return u(i,l(this))[1]}catch(t){return""}}})},ecf7:function(t,e,a){"use strict";a("a2f5")}}]);
//# sourceMappingURL=chunk-0c93164e.43d1b791.js.map