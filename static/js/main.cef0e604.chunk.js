(this.webpackJsonpreactproject=this.webpackJsonpreactproject||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),s=n.n(c),i=n(24),r=n.n(i),o=(n(54),n(36),n.p,n(55),n(23)),l=n(8),h=n(9),d=n(17),j=n(11),b=n(10),u=n(85),p=n(82),m=n(18),g=n.n(m),O=n(6),x=n(14),v=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;Object(l.a)(this,n),a=t.call(this,e);var c=localStorage.getItem("token"),s=!0;return null==c?s=!1:console.log(c),a.initialState={email:"",password:"",loggedIn:s},a.state=a.initialState,a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"handleChange",value:function(e){var t=e.target.name,n=e.target.value;this.setState(Object(o.a)({},t,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log(this.state);var n=this.state,c=n.email,s=n.password,i={email:this.state.email,password:this.state.password};g.a.post("http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/login",i).then((function(e){var n=e.data.message,i=e.data;if(void 0!==n)return alert(" Please enter valid email password"),Object(a.jsx)(O.a,{to:"/"});console.log(i),c===t.state.email&&s===t.state.password&&(localStorage.setItem("token","logincheck"),t.setState({loggedIn:!0}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return this.state.loggedIn?Object(a.jsx)(O.a,{to:"/homepage"}):Object(a.jsx)("div",{align:"center",style:{marginLeft:"2px",paddingTop:"5%"},children:Object(a.jsx)(u.a,{onSubmit:this.handleSubmit,children:Object(a.jsxs)("div",{style:{width:"40%",height:"350px",textAlign:"left",border:"1px Solid black",backgroundColor:"white"},children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{style:{marginLeft:"30px",width:"30%"},children:"Log in"}),Object(a.jsx)(x.b,{to:"/register",style:{float:"Right",marginRight:"5%"},children:"Sign Up"})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(u.a.Group,{controlId:"formBasicemail",style:{width:"70%",marginLeft:"5%"},children:[Object(a.jsx)(u.a.Label,{children:"Email address"}),Object(a.jsx)(u.a.Control,{type:"email",placeholder:"Enter email",name:"email",value:this.state.email,onChange:this.handleChange})]}),Object(a.jsxs)(u.a.Group,{controlId:"formBasicpassword",style:{width:"70%",marginLeft:"5%",paddingBottom:"2%"},children:[Object(a.jsx)(u.a.Label,{children:"Password"}),Object(a.jsx)(u.a.Control,{type:"password",placeholder:"Password",name:"password",value:this.state.password,onChange:this.handleChange})]}),Object(a.jsx)(p.a,{variant:"primary",type:"submit",style:{marginLeft:"29px"},children:"Submit"})]})})})}}]),n}(c.Component),y=n(84),f=n(86),C=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;Object(l.a)(this,n),a=t.call(this,e);var c=localStorage.getItem("token"),s=!0;return null==c?s=!1:console.log(c),a.state={loggedIn:s},a}return Object(h.a)(n,[{key:"render",value:function(){return!1===this.state.loggedIn?(console.log(this.state.loggedIn),Object(a.jsx)(O.a,{to:"/"})):Object(a.jsxs)("div",{children:[Object(a.jsxs)(y.a,{collapseOnSelect:!0,expand:"lg",bg:" bg-light",variant:"",children:[Object(a.jsx)(y.a.Brand,{href:"/",children:"React"}),Object(a.jsx)(y.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(a.jsxs)(y.a.Collapse,{id:"responsive-navbar-nav",children:[Object(a.jsxs)(f.a,{className:"mr-auto",children:[Object(a.jsx)(f.a.Link,{href:"/home",children:"Home"}),Object(a.jsx)(f.a.Link,{href:"/emplyeelist",children:"EmployeeList"})]}),Object(a.jsx)(f.a,{children:Object(a.jsx)(f.a.Link,{href:"/logout",children:"Logout"})})]})]}),Object(a.jsx)("h1",{style:{textAlign:"center",marginTop:"20%"},children:"Welcome To My First App"})]})}}]),n}(c.Component),w=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(l.a)(this,n),a=t.call(this,e),localStorage.removeItem("token"),a.state={},a}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{style:{textAlign:"center",marginTop:"20%",fontSize:"30px"},children:Object(a.jsx)(O.a,{to:"/"})})}}]),n}(c.Component),L=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).initialState={name:" ",gender:" ",balance:0,account_no:0,accounttype:"  ",email:" ",password:" "},a.state=a.initialState,a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"handleChange",value:function(e){var t=e.target.name,n=e.target.value;this.setState(Object(o.a)({},t,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log(this.state);var t={name:this.state.name,gender:this.state.gender,balance:this.state.balance,account_no:this.state.account_no,accounttype:this.state.accounttype,email:this.state.email,password:this.state.password};g.a.post("http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/register",t).then((function(e){console.log(e),alert("Record Save Successfully!!!")})).catch((function(e){console.log(e),alert("Enter Your Full Details")}))}},{key:"render",value:function(){return Object(a.jsx)("div",{align:"center",style:{marginLeft:"2px"},children:Object(a.jsx)(u.a,{onSubmit:this.handleSubmit,children:Object(a.jsxs)("div",{style:{width:"45%",border:"1px Solid black",textAlign:"left",marginTop:"3%",backgroundColor:"white"},children:[Object(a.jsx)("div",{children:Object(a.jsx)(x.b,{to:"/",style:{width:"5%",float:"Right",marginRight:"8%",fontSize:"20px"},children:"Login"})}),Object(a.jsx)("h1",{style:{width:"70%",marginLeft:"10%"},children:"Registration Form"}),Object(a.jsx)("hr",{}),Object(a.jsxs)(u.a.Group,{controlId:"formBasicName",style:{width:"70%",marginLeft:"10%"},children:[Object(a.jsxs)(u.a.Label,{children:[Object(a.jsx)("b",{children:"Name"})," "]}),Object(a.jsx)(u.a.Control,{type:"text",placeholder:"Enter name",name:"name",onChange:this.handleChange})]}),Object(a.jsxs)(u.a.Group,{controlId:"formBasicgender",style:{marginLeft:"10%"},children:[Object(a.jsxs)(u.a.Label,{children:[Object(a.jsx)("b",{children:"Gender "})," "]}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"radio",name:"gender",value:"Male",onChange:this.handleChange})," Male"," "," "," "," ",Object(a.jsx)("input",{type:"radio",name:"gender",value:"Female",onChange:this.handleChange})," Female "," "," "," "," ",Object(a.jsx)("input",{type:"radio",name:"gender",value:"Other",onChange:this.handleChange}),"   Other"]}),Object(a.jsxs)(u.a.Group,{controlId:"formBasicbalance",style:{width:"70%",marginLeft:"10%"},children:[Object(a.jsxs)(u.a.Label,{children:[Object(a.jsx)("b",{children:"Balance"})," "]}),Object(a.jsx)(u.a.Control,{type:"text",placeholder:"Enter balance",name:"balance",value:this.state.balance,onChange:this.handleChange})]}),Object(a.jsxs)(u.a.Group,{controlId:"formBasicaccount_no",style:{width:"70%",marginLeft:"10%"},children:[Object(a.jsxs)(u.a.Label,{children:[Object(a.jsx)("b",{children:"Account No"})," "]}),Object(a.jsx)(u.a.Control,{type:"text",placeholder:"Enter account no",name:"account_no",value:this.state.account_no,onChange:this.handleChange})]}),Object(a.jsxs)(u.a.Group,{controlId:"formBasicaccounttype",style:{width:"70%",marginLeft:"10%"},children:[Object(a.jsxs)(u.a.Label,{children:[Object(a.jsx)("b",{children:"Account Type"})," "]}),Object(a.jsxs)(u.a.Control,{as:"select",name:"accounttype",value:this.state.accounttype,onChange:this.handleChange,children:[Object(a.jsx)("option",{children:"Default select"}),Object(a.jsx)("option",{children:" Current "}),Object(a.jsx)("option",{children:"Savings "}),Object(a.jsx)("option",{children:" Salary "}),Object(a.jsx)("option",{children:"Fixed deposit "}),Object(a.jsx)("option",{children:"NRI "})]})]}),Object(a.jsxs)(u.a.Group,{controlId:"formBasicemail",style:{width:"70%",marginLeft:"10%"},children:[Object(a.jsxs)(u.a.Label,{children:[Object(a.jsx)("b",{children:"Email"})," "]}),Object(a.jsx)(u.a.Control,{type:"email",placeholder:"Enter email",name:"email",value:this.state.email,onChange:this.handleChange})]}),Object(a.jsxs)(u.a.Group,{controlId:"formGridPassword",style:{width:"70%",marginLeft:"10%"},children:[Object(a.jsx)(u.a.Label,{children:"Password"}),Object(a.jsx)(u.a.Control,{type:"password",name:"password",value:this.state.Password,onChange:this.handleChange,placeholder:"Enter password"})]}),Object(a.jsx)(p.a,{variant:"primary",type:"submit",style:{width:"30%",marginLeft:"33%"},children:"Submit"})]})})})}}]),n}(c.Component),k=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={show:!0},a}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsxs)(y.a,{collapseOnSelect:!0,expand:"lg",bg:" bg-light",variant:"",children:[Object(a.jsx)(y.a.Brand,{href:"/",children:"React"}),Object(a.jsx)(y.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(a.jsxs)(y.a.Collapse,{id:"responsive-navbar-nav",children:[Object(a.jsxs)(f.a,{className:"mr-auto",children:[Object(a.jsx)(f.a.Link,{href:"/home",children:"Home"}),Object(a.jsx)(f.a.Link,{href:"/emplyeelist",children:"EmployeeList"})]}),Object(a.jsx)(f.a,{children:Object(a.jsx)(f.a.Link,{href:"/logout",children:"Logout"})})]})]}),Object(a.jsx)(p.a,{variant:"info",style:{marginLeft:"10%",marginTop:"3%"},onClick:function(){return e.setState({show:!e.state.show})},children:"Hide"}),this.state.show?Object(a.jsxs)("p",{style:{padding:"15px"},children:[Object(a.jsx)("h1",{children:Object(a.jsx)("u",{children:"Home page "})}),"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]}):null]})}}]),n}(c.Component),S=n(83),I=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).update=function(e){a.setState((function(t){return{getId:e.id,name:e.name,gender:e.gender,account_no:e.account_no,balance:e.balance,accounttype:e.accounttype,email:e.email}}))},a.state={cusList:[],getId:"",name:"",gender:"",account_no:"",balance:"",accounttype:"",email:""},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getCusList()}},{key:"getCusList",value:function(){var e=this;g.a.get("http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/").then((function(t){var n=t.data;e.setState({cusList:n}),console.log(e.state.cusList)}))}},{key:"onDeleteEmpRecord",value:function(e){var t=this;alert(e),g.a.delete("http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/"+e+"/",{empId:e}).then((function(e){console.log("Data:",e),t.getCusList()})).catch((function(e){console.log("Error:",e)}))}},{key:"render",value:function(){var e=this;return""!==this.state.name&&""!==this.state.email?Object(a.jsx)(O.a,{to:{pathname:"/update",state:{getId:this.state.getId,name:this.state.name,gender:this.state.gender,account_no:this.state.account_no,balance:this.state.balance,accounttype:this.state.accounttype,email:this.state.email}}}):Object(a.jsxs)("div",{children:[Object(a.jsxs)(y.a,{collapseOnSelect:!0,expand:"lg",bg:" bg-light",variant:"",children:[Object(a.jsx)(y.a.Brand,{href:"/",children:"React"}),Object(a.jsx)(y.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(a.jsxs)(y.a.Collapse,{id:"responsive-navbar-nav",children:[Object(a.jsxs)(f.a,{className:"mr-auto",children:[Object(a.jsx)(f.a.Link,{href:"/home",children:"Home"}),Object(a.jsx)(f.a.Link,{href:"/emplyeelist",children:"EmployeeList"})]}),Object(a.jsx)(f.a,{children:Object(a.jsx)(f.a.Link,{href:"/logout",children:"Logout"})})]})]}),Object(a.jsxs)(S.a,{border:"1px",style:{backgroundColor:"lightblue",textAlign:"center"},children:[Object(a.jsx)("thead",{style:{backgroundColor:"olive",color:"white"},children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Name:"}),Object(a.jsx)("th",{children:"Gender:"}),Object(a.jsx)("th",{children:"Account No.:"}),Object(a.jsx)("th",{children:"Balance:"}),Object(a.jsx)("th",{children:"Account Type:"}),Object(a.jsx)("th",{children:"Email:"}),Object(a.jsx)("th",{colSpan:"2"})]})}),Object(a.jsx)("tbody",{children:this.state.cusList.map((function(t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t.name}),Object(a.jsx)("td",{children:t.gender}),Object(a.jsx)("td",{children:t.account_no}),Object(a.jsx)("td",{children:t.balance}),Object(a.jsx)("td",{children:t.accounttype}),Object(a.jsx)("td",{children:t.email}),Object(a.jsx)("td",{children:Object(a.jsx)(p.a,{variant:"danger",onClick:function(){return e.onDeleteEmpRecord(t.id)},children:"Delete"})}),Object(a.jsxs)("td",{children:[" ",Object(a.jsx)(p.a,{variant:"info",onClick:function(){return e.update(t)},children:"Update"})]})]})}))})]})]})}}]),n}(c.Component),_=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).update=function(){var e=a.state.id,t={name:a.state.name,gender:a.state.gender,balance:a.state.balance,account_no:a.state.account_no,accounttype:a.state.accounttype,email:a.state.email,password:a.state.password};g.a.put(" http://videhjaiswal.pythonanywhere.com/customer/customer_api/customers/"+e+"/",t).then((function(e){console.log(e),alert("Your Record Update Successfully!!!")})).catch((function(e){alert("Not submite")}))},a.state={id:"",name:"",gender:"",balance:"",account_no:"",accounttype:"",email:""},a.onHandlechange=a.onHandlechange.bind(Object(d.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.setState({id:this.props.location.state.getId,name:this.props.location.state.name,gender:this.props.location.state.gender,balance:this.props.location.state.balance,account_no:this.props.location.state.account_no,accounttype:this.props.location.state.accounttype,email:this.props.location.state.email})}},{key:"onHandlechange",value:function(e){var t=e.target.name,n=e.target.value;this.setState(Object(o.a)({},t,n))}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)(x.b,{to:"/emplyeelist",style:{backgroundColor:"#ffc107",margin:"1rem",marginTop:"1rem",padding:"7px",borderRadius:"5px",fontSize:"1.5rem",color:"black"},children:"Back"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("h1",{style:{textAlign:"center"},children:"Update Customer"}),Object(a.jsx)(u.a,{children:Object(a.jsxs)(S.a,{style:{textAlign:"center",margin:"4rem"},children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"ID:"}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"text",disabled:!0,name:"id",onChange:this.onHandlechange,value:this.state.id})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Name:"}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"text",name:"name",onChange:this.onHandlechange,value:this.state.name})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Gender:"}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"text",name:"gender",onChange:this.onHandlechange,placeholder:"gender",value:this.state.gender})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"account_no:"}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"text",name:"account_no",onChange:this.onHandlechange,placeholder:"account_no",value:this.state.account_no})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Balance:"}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"text",name:"balance",onChange:this.onHandlechange,placeholder:"balance",value:this.state.balance})})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Account Type:"}),Object(a.jsx)("td",{children:Object(a.jsx)("input",{type:"text",name:"accounttype",onChange:this.onHandlechange,placeholder:"accounttype",value:this.state.accounttype})})]}),Object(a.jsx)("tr",{children:Object(a.jsxs)("td",{colSpan:"2",children:[" ",Object(a.jsx)(p.a,{type:"button",variant:"warning",onClick:function(){return e.update(e.state.id)},children:"Update"})]})})]})})]})}}]),n}(c.Component);var B=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(x.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(O.d,{children:[Object(a.jsx)(O.b,{path:"/home",component:k}),Object(a.jsx)(O.b,{exact:!0,path:"/",component:v}),Object(a.jsx)(O.b,{exact:!0,path:"/homepage",component:C}),Object(a.jsx)(O.b,{path:"/logout",component:w}),Object(a.jsx)(O.b,{path:"/register",component:L}),Object(a.jsx)(O.b,{path:"/emplyeelist",component:I}),Object(a.jsx)(O.b,{path:"/update",component:_})]})})})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root")),E()}},[[80,1,2]]]);
//# sourceMappingURL=main.cef0e604.chunk.js.map