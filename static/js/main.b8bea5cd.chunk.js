(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{13:function(e,t,n){e.exports=n(24)},18:function(e,t,n){},19:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),l=(n(18),n(11)),s=n(7),i=n(1),u=n(2),h=n(3),m=n(4),b=(n(19),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(){e.props.onIncrement(e.props.habit)},e.handleDecrement=function(){e.props.onDecrement(e.props.habit)},e.handleDelete=function(){e.props.onDelete(e.props.habit)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("habit : ".concat(this.props.habit.name," mounted"))}},{key:"componentWillUnmount",value:function(){console.log("habit : ".concat(this.props.habit.name," will unmounted"))}},{key:"render",value:function(){console.log("habit : ".concat(this.props.habit.name));var e=this.props.habit,t=e.name,n=e.count;return c.a.createElement("li",{className:"habit"},c.a.createElement("span",{className:"habit-name"},t),c.a.createElement("span",{className:"habit-count"},n),c.a.createElement("button",{className:"habit-button habit-increase",onClick:this.handleIncrement},c.a.createElement("i",{className:"fas fa-plus-square"})),c.a.createElement("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement},c.a.createElement("i",{className:"fas fa-minus-square"})),c.a.createElement("button",{className:"habit-button habit-delete",onClick:this.handleDelete},c.a.createElement("i",{className:"fas fa-trash"})))}}]),n}(a.PureComponent)),d=Object(a.memo)((function(e){console.log("habitAddForm");var t=c.a.createRef(),n=c.a.createRef();return c.a.createElement("form",{ref:t,className:"add-form",onSubmit:function(a){a.preventDefault();var c=n.current.value;c&&e.onAdd(c),t.current.reset()}},c.a.createElement("input",{ref:n,type:"text",className:"add-input",placeholder:"Habit"}),c.a.createElement("button",{className:"add-button"},"Add"))})),p=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(t){e.props.onIncrement(t)},e.handleDecrement=function(t){e.props.onDecrement(t)},e.handleDelete=function(t){e.props.onDelete(t)},e.handleAdd=function(t){e.props.onAdd(t)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return console.log("habits"),c.a.createElement("div",{className:"habits"},c.a.createElement(d,{onAdd:this.handleAdd}),c.a.createElement("ul",null,this.props.habits.map((function(t){return c.a.createElement(b,{key:t.id,habit:t,onIncrement:e.handleIncrement,onDecrement:e.handleDecrement,onDelete:e.handleDelete})}))),c.a.createElement("button",{className:"habit-reset",onClick:this.props.onReset},"Reset All"))}}]),n}(a.Component),f=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return console.log("navbar"),c.a.createElement("nav",{className:"navbar"},c.a.createElement("i",{className:"navbar-logo fas fa-leaf"}),c.a.createElement("span",null,"Hanbit Tracker"),c.a.createElement("span",{className:"navbar-count"},this.props.totalCount))}}]),n}(a.PureComponent),v=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Rnning",count:0},{id:3,name:"Coding",count:0}]},e.handleIncrement=function(t){var n=e.state.habits.map((function(e){return e.id===t.id?Object(s.a)({},t,{count:t.count+1}):e}));e.setState({habits:n})},e.handleDecrement=function(t){var n=e.state.habits.map((function(e){if(e.id===t.id){var n=t.count-1;return Object(s.a)({},t,{count:n<0?0:n})}return e}));e.setState({habits:n})},e.handleDelete=function(t){var n=e.state.habits.filter((function(e){return e.id!==t.id}));e.setState({habits:n})},e.handleAdd=function(t){var n=[].concat(Object(l.a)(e.state.habits),[{id:Date.now(),name:t,count:0}]);e.setState({habits:n})},e.handleReset=function(){var t=e.state.habits.map((function(e){return 0!==e.count?Object(s.a)({},e,{count:0}):e}));e.setState({habits:t})},e}return Object(u.a)(n,[{key:"render",value:function(){return console.log("app"),c.a.createElement(c.a.Fragment,null,c.a.createElement(f,{totalCount:this.state.habits.filter((function(e){return e.count>0})).length}),c.a.createElement(p,{habits:this.state.habits,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onAdd:this.handleAdd,onReset:this.handleReset}))}}]),n}(a.Component);n(20),n(12);o.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.b8bea5cd.chunk.js.map