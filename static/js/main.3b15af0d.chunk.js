(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(18)},16:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),s=t.n(c),l=(t(16),t(4)),i=t(5),o=t(8),m=t(6),u=t(9),d=t(1),h=t.n(d),E=t(7),v=function(){var e=Object(E.a)(h.a.mark(function e(a){var t,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.iev.aero/api/flights/".concat(a));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.body);case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),p=function(e){var a=new Date,t=a.getDate()+e,n=a.getMonth()+1,r=a.getFullYear();return t<10&&(t="0"+t),n<10&&(n="0"+n),"".concat(t,"-").concat(n,"-").concat(r)},f=function(){return r.a.createElement("div",{className:"header-container"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:"./assets/logo.a3d810f.png",alt:"logo"})),r.a.createElement("div",{className:"nav-bar"},r.a.createElement("ul",{className:"nav-list"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-item-sp"},"For passengers")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-item-sp"},"IEV Services")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-item-sp"},"VIP")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-item-sp"},"Corporate")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-item-sp"},"EN")))))},y=function(e){var a=e.onSubmit,t=r.a.createRef();return r.a.createElement("div",{className:"flights-search-container"},r.a.createElement("div",{className:"flights-search"},r.a.createElement("div",{className:"search"},r.a.createElement("h2",{className:"title"},"search flights"),r.a.createElement("div",{className:"search-input-container"},r.a.createElement("form",{action:"/",className:"search-form",onSubmit:function(e){return a(e,t)}},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fa fa-search"})),r.a.createElement("input",{type:"search",id:"search",placeholder:"Destination or flight #",ref:t}),r.a.createElement("button",{onClick:function(e){return a(e,t)},className:"button",type:"submit"},"Search"))))))},N=["term","timeDepShedule","airportToID.city_en","status","airline","codeShareData","gateNo"],b=["term","timeArrShedule","airportFromID.city_en","status","airline","codeShareData"],D=function(e){var a=e.data,t=function(e,a,t){return"departure"===e?a:t}(e.status,N,b);return r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead"},r.a.createElement("tr",null,r.a.createElement("th",null,"Terminal"),r.a.createElement("th",null,"Time"),r.a.createElement("th",null,"Destination"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Airline"),r.a.createElement("th",null,"Flight"),t.includes("gateNo")?r.a.createElement("th",null,"Gate"):null)),r.a.createElement("tbody",{className:"tbody"},a.map(function(e){return r.a.createElement("tr",{key:e.ID},t.map(function(a,t){return"airline"===a&&e[a]?r.a.createElement("td",{key:t},e[a].en.name):"codeShareData"===a?r.a.createElement("td",{key:t},e[a][0].codeShare):"timeDepShedule"===a&&e[a]?r.a.createElement("td",{key:t},e[a].match("[0-9:]{5}")[0]):"timeArrShedule"===a&&e[a]?r.a.createElement("td",{key:t},e[a].match("[0-9:]{5}")[0]):r.a.createElement("td",{key:t},e[a])}))})))},w=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={data:null,searchValue:"",status:"departure",day:"today"},t.defineDayDate=function(e){return p("yesterday"===e?-1:"tomorrow"===e?1:0)},t.handleSubmit=function(e,a){e.preventDefault(),t.setState({searchValue:a.current.value})},t.switchTabTo=function(e){t.state.status!==e&&t.setState({status:e})},t.getDataByStatus=function(e,a){return a?"departure"===e?a.departure:a.arrival:null},t.handleDayTabTo=function(e){t.state.day!==e&&t.setState({data:null,day:e})},t.filteredList=function(e,a){return e?e.filter(function(e){return e["airportToID.name_en"]&&e["airportToID.name_en"].toLowerCase().includes(a.toLowerCase())||e["airportFromID.name_en"]&&e["airportFromID.name_en"].toLowerCase().includes(a.toLowerCase())||e.codeShareData[0].codeShare.toLowerCase().includes(a.toLowerCase())}):null},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.defineDayDate(this.state.day);v(a).then(function(a){e.setState({data:a,filteredData:e.getDataByStatus(e.state.status,e.state.data)})})}},{key:"componentDidUpdate",value:function(e,a){var t=this;if(a.day!==this.state.day){var n=this.defineDayDate(this.state.day);v(n).then(function(e){t.setState({data:e})})}}},{key:"render",value:function(){var e=this,a=this.state,t=a.status,n=a.data,c=a.day,s=a.searchValue,l=this.getDataByStatus(t,n),i="departure"===t?"active":"",o="arrival"===t?"active":"";return l=this.filteredList(l,s),r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement("div",{className:"main-container"},r.a.createElement(y,{onChange:this.handleInput,onSubmit:this.handleSubmit}),r.a.createElement("div",{className:"search-results"},r.a.createElement("div",{className:"main-tabs"},r.a.createElement("ul",{className:"tabs"},r.a.createElement("li",{className:"tabs-item ".concat(i),onClick:function(){return e.switchTabTo("departure")}},r.a.createElement("span",{className:"tabs-item-link ".concat(i)},"departures")),r.a.createElement("li",{className:"tabs-item ".concat(o),onClick:function(){return e.switchTabTo("arrival")}},r.a.createElement("span",{className:"tabs-item-link ".concat(o)},"arrivals"))),r.a.createElement("div",{className:"tabs-container"},r.a.createElement("div",{className:"date-wrap"},r.a.createElement("div",{className:"dates-container"},r.a.createElement("div",{className:"date yesterday ".concat("yesterday"===c?"active":""),onClick:function(){return e.handleDayTabTo("yesterday")}},r.a.createElement("div",{className:"date-num"},p(-1)),r.a.createElement("div",{className:"date-title"},"Yesterday")),r.a.createElement("div",{className:"date today ".concat("today"===c?"active":""),onClick:function(){return e.handleDayTabTo("today")}},r.a.createElement("div",{className:"date-num"},p(0)),r.a.createElement("div",{className:"date-title"},"Today")),r.a.createElement("div",{className:"date tomorrow ".concat("tomorrow"===c?"active":""),onClick:function(){return e.handleDayTabTo("tomorrow")}},r.a.createElement("div",{className:"date-num"},p(1)),r.a.createElement("div",{className:"date-title"},"Tomorrow")))),n?r.a.createElement(D,{data:l,status:t}):"Loading...")))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.3b15af0d.chunk.js.map