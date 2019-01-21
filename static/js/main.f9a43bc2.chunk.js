(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(52)},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},41:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(8),s=a.n(o),i=(a(32),a(9)),c=a(10),l=a(12),d=a(11),m=a(13),u=(a(34),a(22)),v=a(14),p=(a(36),a(23)),f=a.n(p),g=a(53),E=a(54),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).removeCardHandle=function(){var e=a.props;(0,e.removeCard)(e.data)},a.editCardHandle=function(){a.setState({isEdit:!0})},a.saveCardHandle=function(){var e=a.props,t=e.saveCard,n=e.data;t(a.state,n),a.setState({isEdit:!1})},a.editData=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(v.a)({},n,r))},a.cancel=function(){a.setState({isEdit:!1})},a.renderCard=function(){var e=a.props.data,t=f()().format("DD/MM/YYYY");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cardbody"},r.a.createElement("div",{className:"title"},"Task",e.id,": ",e.title,r.a.createElement(g.a,{close:!0,onClick:a.removeCardHandle})),r.a.createElement("div",{className:"body"},e.description),r.a.createElement("div",{className:"buttonClass"},r.a.createElement("div",{className:"dateClass"},t),r.a.createElement(g.a,{onClick:a.editCardHandle,color:"info",outline:!0,size:"sm"},"Edit"))))},a.renderEditCard=function(){var e=a.props.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cardbody"},r.a.createElement("div",{className:"title"},"Task",e.id,":"," ",r.a.createElement(E.a,{type:"text",defaultValue:e.title,name:"title",onChange:a.editData})),r.a.createElement("div",{className:"body"}," ",r.a.createElement(E.a,{type:"textarea",defaultValue:e.description,name:"description",onChange:a.editData})),r.a.createElement("div",{className:"buttonClass"},r.a.createElement(g.a,{onClick:a.saveCardHandle,color:"link",style:{color:"green"}},"Save"),r.a.createElement(g.a,{onClick:a.cancel,color:"link",style:{color:"red"}},"Cancel"))))},a.state={isEdit:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.isEdit;return r.a.createElement(r.a.Fragment,null,e?this.renderEditCard():this.renderCard())}}]),t}(n.Component),C=(a(41),a(59)),D=a(55),O=a(56),w=a(57),k=a(58),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).addCard=function(){a.setState({showModal:!0})},a.saveNewTitle=function(e){var t=e.target.value;a.setState({newCardTitle:t})},a.saveNewDesc=function(e){var t=e.target.value;a.setState({newCardDesc:t})},a.addCardSave=function(){var e=a.state,t=e.tasks,n=e.newCardDesc,r=e.newCardTitle;if(t.length>=1){var o=t[t.length-1].id+1;t.push({id:o,title:r,description:n,category:"all"}),a.setState({tasks:t,showModal:!1})}else{t.push({id:1,title:r,description:n,category:"all"}),a.setState({tasks:t,showModal:!1})}},a.toggle=function(){a.setState({showModal:!a.state.showModal})},a.validate=function(){var e=a.state.newCardTitle;return null===e||""===e},a.removeCard=function(e){var t=a.state.tasks;t.splice(t.findIndex(function(t){return t.id===e.id}),1),a.setState({tasks:t})},a.saveCard=function(e,t){var n=a.state.tasks;e.hasOwnProperty("title")&&(t.title=e.title),e.hasOwnProperty("description")&&(t.description=e.description);var r=[];r.push(t),n.map(function(e){return r.find(function(t){return t.id===e.id})||e}),a.setState({tasks:n})},a.onDragStart=function(e,t){console.log("dragstart:",t),e.dataTransfer.setData("id",t)},a.onDragOver=function(e){e.preventDefault()},a.onDrop=function(e,t){var n=e.dataTransfer.getData("id"),r=a.state.tasks.filter(function(e){return e.id==n&&(e.category=t),e});a.setState(Object(u.a)({},a.state,{tasks:r}))},a.state={tasks:[{id:1,title:"first card",description:"cafewfcacasc",category:"all"},{id:2,title:"second card",description:"fewfcacasc",category:"all"},{id:3,title:"third card",description:"cafewc",category:"todo"}],showModal:!1,newCardTitle:"",newCardDesc:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.newCardTitle,a={all:[],todo:[],inprogress:[],completed:[]};return this.state.tasks.forEach(function(t){a[t.category].push(r.a.createElement("div",{key:t.name,onDragStart:function(a){return e.onDragStart(a,t.id)},draggable:!0,className:"draggable"},r.a.createElement(h,{data:t,key:t.id,removeCard:e.removeCard,editCard:e.editCard,saveCard:e.saveCard})))}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-drag"},r.a.createElement("div",{className:"header"},r.a.createElement("div",null,r.a.createElement(g.a,{onClick:this.addCard,outline:!0,color:"danger"},"+ ADD A NEW TASK")),r.a.createElement("div",{className:"heading",style:{textAlign:"right"}},"YOUR PERSONAL PLANNER"," ")),r.a.createElement("div",{className:"all",onDragOver:function(t){return e.onDragOver(t)},onDrop:function(t){e.onDrop(t,"all")}},r.a.createElement("span",{className:"task-header"},"ALL"),a.all),r.a.createElement("div",{className:"todo",onDragOver:function(t){return e.onDragOver(t)},onDrop:function(t){e.onDrop(t,"todo")}},r.a.createElement("span",{className:"task-header"},"TODO's"),a.todo),r.a.createElement("div",{className:"inprogress",onDragOver:function(t){return e.onDragOver(t)},onDrop:function(t){e.onDrop(t,"inprogress")}},r.a.createElement("span",{className:"task-header"},"IN-PROGRESS"),a.inprogress),r.a.createElement("div",{className:"completed",onDragOver:function(t){return e.onDragOver(t)},onDrop:function(t){return e.onDrop(t,"completed")}},r.a.createElement("span",{className:"task-header"},"COMPLETED"),a.completed)),r.a.createElement(C.a,{isOpen:this.state.showModal,toggle:this.toggle},r.a.createElement(D.a,{toggle:this.toggle},"ADD A TASK TO YOUR LIST"),r.a.createElement(O.a,null,r.a.createElement(w.a,{for:"exampleText"},r.a.createElement("sup",{style:{color:"red"}},"*"),"Title:"),r.a.createElement(E.a,{type:"text",name:"title",id:"Title",onChange:this.saveNewTitle}),r.a.createElement(w.a,{for:"exampleText"},"Descripton:"),r.a.createElement(E.a,{type:"textarea",name:"description",id:"Desc",onChange:this.saveNewDesc})),r.a.createElement(k.a,null,r.a.createElement(g.a,{color:"primary",onClick:this.addCardSave,disabled:""===t},"Save"),r.a.createElement(g.a,{color:"secondary",onClick:this.toggle},"Cancel"))))}}]),t}(n.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Container"},r.a.createElement(y,null))}}]),t}(n.Component);a(50),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.f9a43bc2.chunk.js.map