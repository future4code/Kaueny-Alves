(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,a){t.exports=a(25)},19:function(t,e,a){},25:function(t,e,a){"use strict";a.r(e);var n=a(0),l=a.n(n),i=a(7),r=a.n(i),s=a(10),o=a(1),c=a(2);a(19);function u(){const t=Object(o.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  gap: 10px;\n"]);return u=function(){return t},t}function p(){const t=Object(o.a)(["\n  text-align: left;\n  text-decoration: ",";\n"]);return p=function(){return t},t}function m(){const t=Object(o.a)(["\n  padding: 0;\n  width: 200px;\n"]);return m=function(){return t},t}const h=c.a.ul(m()),f=c.a.li(p(),({completa:t})=>t?"line-through":"none"),d=c.a.div(u());var E=class extends l.a.Component{constructor(...t){super(...t),this.state={tarefas:[],inputValue:"",filter:""},this.onChangeInput=(t=>{this.setState({inputValue:t.target.value})}),this.criaTarefa=(()=>{if(this.state.inputValue){const t={id:Date.now(),texto:this.state.inputValue,completa:!1};this.setState({tarefas:[...this.state.tarefas,t],inputValue:""})}}),this.selecionaTarefa=(t=>{const e=this.state.tarefas.map(e=>e.id===t?Object(s.a)({},e,{completa:!e.completa}):e);this.setState({tarefas:e})}),this.onChangeFilter=(t=>{this.setState({filter:t.target.value})})}componentDidUpdate(){}componentDidMount(){}render(){const t=this.state.tarefas.filter(t=>{switch(this.state.filter){case"pendentes":return!t.completa;case"completas":return t.completa;default:return!0}});return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Lista de tarefas"),l.a.createElement(d,null,l.a.createElement("input",{value:this.state.inputValue,onChange:this.onChangeInput}),l.a.createElement("button",{onClick:this.criaTarefa},"Adicionar")),l.a.createElement("br",null),l.a.createElement(d,null,l.a.createElement("label",null,"Filtro"),l.a.createElement("select",{value:this.state.filter,onChange:this.onChangeFilter},l.a.createElement("option",{value:""},"Nenhum"),l.a.createElement("option",{value:"pendentes"},"Pendentes"),l.a.createElement("option",{value:"completas"},"Completas"))),l.a.createElement(h,null,t.map(t=>l.a.createElement(f,{completa:t.completa,onClick:()=>this.selecionaTarefa(t.id)},t.texto))))}};const g=document.getElementById("root");r.a.render(l.a.createElement(E,null),g)}},[[13,1,2]]]);
//# sourceMappingURL=main.ebeccc49.chunk.js.map