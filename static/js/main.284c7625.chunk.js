(this.webpackJsonppokefriends=this.webpackJsonppokefriends||[]).push([[0],{17:function(e,t,n){e.exports=n(33)},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1),c=n.n(o),s=n(5),i=n(2),l=n(15),u=n(16),m=(n(29),n(8)),d=function(e){var t=e.name,n=e.id,a=e.toggleModal;return r.a.createElement("div",{className:"tc card dib br3 pa4 ma3 grow bw2 shadow-4",onClick:function(){return a(n)}},r.a.createElement("img",{alt:"admin",src:"https://pokeres.bastionbot.org/images/pokemon/".concat(n,".png")}),r.a.createElement("div",null,r.a.createElement("h2",{className:"ttc"},t)))},p=function(e){var t=e.pokemons,n=e.toggleModal;return r.a.createElement(a.Fragment,null,t.map((function(e,t){return r.a.createElement(d,{key:e.id,id:e.id,name:e.name,toggleModal:n})})))},h=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 br2 searchBox ba purple b--purple bg-washed-yellow",type:"search",placeholder:"search pokemons",onChange:t}))},E=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"800px"}},e.children)},f=function(e){var t=e.id,n=e.data;return r.a.createElement("div",{className:"tc descriptionCard dib br3 pa3 ma3 shadow-4"},r.a.createElement("div",{className:"smallCard center"},r.a.createElement("img",{alt:"admin",src:"https://pokeres.bastionbot.org/images/pokemon/".concat(t,".png")}),r.a.createElement("h2",{className:"tc ttu mb0"},n.name)),r.a.createElement("div",null,r.a.createElement("h3",{className:"tc ttu"},"Stats"),r.a.createElement("table",{className:"descriptionCardTable ttu mt1 mb3"},r.a.createElement("tbody",null,n.stats.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"tl"},e.stat.name,":"),r.a.createElement("td",{className:"tr"},e.base_stat))})))),r.a.createElement("h3",{className:"tc ttu mt1 mb2"},"Abilities"),n.abilities.map((function(e,t){return r.a.createElement("p",{key:t,className:"ttu mt0 mb0"},e.ability.name)}))))},g=n(3),b=n(4),v=n(7),k=n(6),O=(n(30),document.getElementById("modal")),C=function(e){Object(v.a)(n,e);var t=Object(k.a)(n);function n(){var e;return Object(g.a)(this,n),(e=t.call(this)).handleClickOutside=function(t){e.wrapperRef&&!e.wrapperRef.contains(t.target)&&e.props.toggleModal()},e.setWrapperRef=function(t){e.wrapperRef=t},e.modal=document.createElement("div"),e.modal.classList.add("modal"),e.modalContent=document.createElement("div"),e.modalContent.classList.add("modal-content"),e.modal.appendChild(e.modalContent),e.wrapperRef=r.a.createRef(),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){O.appendChild(this.modal),document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){O.removeChild(this.modal),document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"render",value:function(){return Object(o.createPortal)(r.a.createElement("div",{ref:this.setWrapperRef},this.props.children),this.modalContent)}}]),n}(a.Component),j=function(e){Object(v.a)(n,e);var t=Object(k.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(b.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),n}(a.Component);n(31);var y=Object(s.b)((function(e){return{searchField:e.searchPokemons.searchField,pokemons:e.requestPokemons.pokemons,isPending:e.requestPokemons.isPending,error:e.requestPokemons.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestPokemons:function(){return e((function(e){e({type:"REQUEST_POKEMONS_PENDING"}),fetch("https://pokeapi.co/api/v2/pokemon?limit=100").then((function(e){return e.json()})).then((function(e){return e.results})).then((function(e){return Promise.all(e.map((function(e){return fetch(e.url).then((function(e){return e.json()})).then((function(e){return{id:e.id,name:e.name}}))})))})).then((function(t){return e({type:"REQUEST_POKEMONS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_POKEMONS_FAILED",payload:t})}))}))}}}))((function(e){Object(a.useEffect)((function(){e.onRequestPokemons()}),[]);var t=Object(a.useState)(!1),n=Object(m.a)(t,2),o=n[0],c=n[1],s=Object(a.useState)(null),i=Object(m.a)(s,2),l=i[0],u=i[1],d=Object(a.useState)(null),g=Object(m.a)(d,2),b=g[0],v=g[1],k=e.searchField,O=e.onSearchChange,y=e.pokemons,N=e.isPending,S=y.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())}));return N?r.a.createElement("h1",{className:"tc f1"},"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Find Your PoK\xe9Friend"),r.a.createElement(h,{searchChange:O}),r.a.createElement(j,null,r.a.createElement(E,null,r.a.createElement(p,{pokemons:S,toggleModal:function(e){fetch("https://pokeapi.co/api/v2/pokemon/".concat(e)).then((function(e){return e.json()})).then((function(e){return{name:e.name,stats:e.stats,abilities:e.abilities}})).then((function(t){u(e),v(t),c(!0)}))}})),o&&r.a.createElement(C,{toggleModal:function(){c(!1),u(null),v(null)}},r.a.createElement(f,{id:l,data:b}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N={searchField:""},S={isPending:!1,pokemons:[],error:""},P=(n(32),Object(l.createLogger)()),w=Object(i.c)({searchPokemons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestPokemons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_POKEMONS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_POKEMONS_SUCCESS":return Object.assign({},e,{pokemons:t.payload,isPending:!1});case"REQUEST_POKEMONS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),R=Object(i.d)(w,Object(i.a)(u.a,P));c.a.render(r.a.createElement(s.a,{store:R},r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.284c7625.chunk.js.map