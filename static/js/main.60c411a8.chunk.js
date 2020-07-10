(this["webpackJsonpword-grouping-app"]=this["webpackJsonpword-grouping-app"]||[]).push([[0],{15:function(e,t,n){e.exports=n(24)},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1),i=n.n(o),l=n(2),c=n(9),u=n.n(c),s=n(11),p=n(3),m=n(4),d=n(6),g=n(5),h=function(e){var t=e.handleFileUpload;return r.a.createElement("label",{className:"btn btn-outline-info mt-2",htmlFor:"csv"},r.a.createElement("input",{id:"csv",type:"file",accept:".csv",className:"d-none",onChange:t}),"Upload .csv")},f=n(13),b=function(e){var t=e.onClick,n=e.disabled,a=e.children,o=e.className;return r.a.createElement("button",{onClick:t,disabled:n,className:o},a)},v=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).toggleEdit=function(){a.setState((function(e){return{isEditing:!e.isEditing}}))},a.onGroupSelect=function(e){var t=a.props,n=t.item,r=t.parentGroup,o=t.handleGroupChange,i=e.value;i!==r&&o(n,r,i),a.toggleEdit()},a.state={isEditing:!1},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state.isEditing,t=this.props,n=t.item,a=t.parentGroup,o=t.groupOptions,i={label:a,value:a};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("div",{className:"mr-2"},n),e?r.a.createElement("div",{className:"w-50"},r.a.createElement(f.a,{defaultValue:i,options:o.map((function(e){return{label:e,value:e}})),onChange:this.onGroupSelect,className:"flex-fill"})):r.a.createElement(b,{onClick:this.toggleEdit,className:"btn btn-sm btn-outline-secondary"},"Change Group")),r.a.createElement("br",null))}}]),n}(a.Component),N=function(e){var t=e.onClick,n=e.disabled,a=e.children,o=e.className;return r.a.createElement("button",{onClick:t,disabled:n,className:o,style:{color:"black",size:20,fontWeight:"bold"}},a)},E=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).toggleOpen=function(){a.setState((function(e){return{isOpen:!e.isOpen}}))},a.state={isOpen:!1},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.groupName,n=e.groupItems,a=e.groupOptions,o=e.handleGroupChange,i=this.state.isOpen;return r.a.createElement("div",{className:"mb-1"},r.a.createElement(N,{onClick:this.toggleOpen,className:"btn mb-3 shadow-none"},i?"-":"+"," ",t),r.a.createElement("div",{className:"ml-4"},i&&n.map((function(e){return r.a.createElement(v,{key:e,item:e,parentGroup:t,groupOptions:a,handleGroupChange:o})}))))}}]),n}(a.Component),G=function(e){var t=e.editing,n=e.newGroupName,a=e.groupNameTaken,o=e.toggleEditing,i=e.updateNewGroupName,l=e.createGroup;return r.a.createElement("div",{className:"mb-1 d-inline-flex align-items-center"},r.a.createElement(b,{onClick:o,className:"btn btn-outline-primary shadow-none"},t?"Cancel":"Create Group"),t&&r.a.createElement("form",{onSubmit:l,className:"ml-2"},r.a.createElement("input",{autoFocus:!0,type:"text",onChange:i,value:n,className:"mr-2"}),r.a.createElement(b,{type:"submit",disabled:a||!n,className:"btn btn-outline-success shadow-none"},a?"Group Name Taken":"Submit")))},w=function(e){var t=e.prefixGroups,n=e.handleGroupChange,a=e.editing,o=e.newGroupName,i=e.groupNameTaken,l=e.toggleEditing,c=e.updateNewGroupName,u=e.createGroup,s=Object.keys(t);return r.a.createElement("div",{className:"mt-4"},t&&0!==Object.keys(t).length&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-inline-flex"},r.a.createElement("h2",{className:"mr-4"},"Prefix Groups"),r.a.createElement(G,{editing:a,newGroupName:o,groupNameTaken:i,toggleEditing:l,updateNewGroupName:c,createGroup:u}))),r.a.createElement("div",null,s.map((function(e){return r.a.createElement("div",{key:e},r.a.createElement(E,{groupName:e,groupItems:t[e],groupOptions:s,handleGroupChange:n}))}))))},O=n(14),k=function(e){var t=new FileReader;return new Promise((function(n,a){t.onerror=function(){t.abort(),a(new DOMException("Error loading file."))},t.onload=function(){var e=t.result.split("\n"),a=C(e);n(a)},t.readAsBinaryString(e)}))},C=function(e){var t,n={},a=Object(O.a)(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;if(r=r.trim()){for(var o=r.split("_")[0],i=!1,l=0,c=Object.keys(n);l<c.length;l++){var u=c[l];if(u.length>=o.length&&u.substring(0,o.length)===o){n[u].push(r),i=!0;break}}i||(n[r]=[r])}}}catch(s){a.e(s)}finally{a.f()}return n},j=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).handleFileUpload=function(){var e=Object(s.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files[0],e.prev=1,e.next=4,k(n);case 4:r=e.sent,a.setState({groups:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.warn(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handleGroupChange=function(e,t,n){var r=a.state.groups,o=r[t].findIndex((function(t){return t===e}));delete r[t][o],r[n].push(e),a.setState({groups:r})},a.toggleEditing=function(){a.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{editing:!e.editing})}))},a.updateNewGroupName=function(e){var t=a.state.groups,n=e.target.value,r=n in t;a.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{newGroupName:n,groupNameTaken:r})}))},a.createGroup=function(){var e=a.state.groups,t=a.state,n=t.editing,r=t.newGroupName;e[r]=[],a.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},{groups:e,editing:!n,newGroupName:""})}))},a.state={groups:{},editing:!1,newGroupName:"",groupNameTaken:!1},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.groups,n=e.editing,a=e.newGroupName,o=e.groupNameTaken;return r.a.createElement("div",{className:"container mt-3"},r.a.createElement("h1",null,"Word Grouping App"),r.a.createElement(h,{handleFileUpload:this.handleFileUpload}),r.a.createElement(w,{prefixGroups:t,handleGroupChange:this.handleGroupChange,editing:n,newGroupName:a,groupNameTaken:o,toggleEditing:this.toggleEditing,updateNewGroupName:this.updateNewGroupName,createGroup:this.createGroup}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(23);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.60c411a8.chunk.js.map