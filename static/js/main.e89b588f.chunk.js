(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{134:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(38),i=n.n(s),o=(n(134),n(15)),c=n(11),l=n(33),d=n(17),j=n(4),u=n(14),b=n(39),m=n.n(b),O=n(199),x=n(187),p=n(200),h=n(204),f=n(201),g=n(205),y=n(47),w=n.n(y),v=n(48),E=n.n(v),C=n(203),S=n(202),P=n(50),I=n.n(P),A=n(49),D=n.n(A),U=n(152),k=n(191),B=n(1),M=function(e){var t=e.id,n=e.type,a=e.label,s=e.placeholder,i=e.value,o=e.handleChange,l=e.inputProps,d=e.multiline,j=void 0===d?{isMultiline:!1}:d,u=Object(r.useState)(""),b=Object(c.a)(u,2),m=b[0],O=b[1],x=Object(r.useState)(!1),p=Object(c.a)(x,2),h=p[0],f=p[1],g=function(){f(!0),""===i?O("".concat(a," is required")):"email"!==t||/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(i)?O(""):O("".concat(a," is invalid"))};return Object(r.useEffect)((function(){h&&g()}),[i]),Object(B.jsx)(k.a,{color:"secondary",style:{paddingBottom:10},fullWidth:!0,id:t,type:n,required:!0,value:i,onFocus:function(){return f(!0)},onChange:o(t),onBlur:g,margin:"dense",InputProps:l,error:!!m,helperText:m,label:a,placeholder:s,multiline:j.isMultiline,rows:j.rows})},T=n(194),z=function(e){var t=e.alert,n=e.setAlert;return Object(B.jsx)(T.a,{open:t.state,onClose:function(){n({state:!1,message:""})},message:t.message,anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:5e3})},N=function(e){var t=e.users,n=Object(d.g)(),a=Object(r.useState)({state:!1,message:""}),s=Object(c.a)(a,2),i=s[0],o=s[1],b=Object(r.useState)({email:"",password:"",showPassword:!1,emailError:null,passwordError:null}),y=Object(c.a)(b,2),v=y[0],P=y[1],A=function(e){return function(t){P(Object(u.a)(Object(u.a)({},v),{},Object(j.a)({},e,t.target.value)))}};return Object(B.jsxs)("div",{className:m.a.loginContainer,children:[Object(B.jsxs)(O.a,{sx:{maxWidth:400},children:[Object(B.jsx)(p.a,{className:m.a.cardHeader,titleTypographyProps:{fontWeight:700,marginBottom:2,variant:"h6"},title:"Hey, Welcome. Login to access Task Management"}),Object(B.jsxs)(x.a,{component:"form",onSubmit:function(e){e.preventDefault();var r=null===t||void 0===t?void 0:t.find((function(e){return e.email===v.email&&e.password===v.password}));r?(localStorage.setItem("loggedInUser",JSON.stringify({id:r.id,name:r.name,email:r.email,isAdmin:r.isAdmin})),n.push("/")):o(Object(u.a)(Object(u.a)({},i),{},{state:!0,message:"Invalid email or password."}))},children:[Object(B.jsxs)(f.a,{children:[Object(B.jsx)(M,{id:"email",type:"email",label:"Email",placeholder:"Enter your email here",value:v.email,handleChange:A,inputProps:{startAdornment:Object(B.jsx)(S.a,{position:"start",children:Object(B.jsx)(w.a,{color:"secondary"})})},error:v.emailError}),Object(B.jsx)(M,{id:"password",type:v.showPassword?"text":"password",label:"Password",placeholder:"Enter your password here",value:v.password,handleChange:A,inputProps:{startAdornment:Object(B.jsx)(S.a,{position:"start",children:Object(B.jsx)(E.a,{color:"secondary"})}),endAdornment:Object(B.jsx)(S.a,{position:"end",children:Object(B.jsx)(C.a,{color:"secondary","aria-label":"toggle password visibility",onClick:function(){P(Object(u.a)(Object(u.a)({},v),{},{showPassword:!v.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:v.showPassword?Object(B.jsx)(D.a,{}):Object(B.jsx)(I.a,{})})})},error:v.passwordError})]}),Object(B.jsxs)(h.a,{sx:{display:"flex",flexDirection:"column",marginBottom:"10px"},children:[Object(B.jsx)(g.a,{type:"submit",sx:{width:"50%",marginBottom:"8px"},color:"secondary",size:"medium",variant:"contained",children:"Login"}),Object(B.jsxs)(U.a,{children:["Not a member yet?",Object(B.jsx)(l.b,{to:"/signup",children:"Sign up"})]})]})]})]}),Object(B.jsx)(z,{alert:i,setAlert:o})]})},W=n(198),_=n(71),F=n.n(_),H=function(e){var t=e.users,n=e.setUsers,a=Object(d.g)(),s=Object(r.useState)({state:!1,message:""}),i=Object(c.a)(s,2),b=i[0],y=i[1],v=Object(r.useState)({name:"",email:"",password:"",showPassword:!1,nameError:null,emailError:null,passwordError:null}),P=Object(c.a)(v,2),A=P[0],k=P[1],T=function(e){return function(t){k(Object(u.a)(Object(u.a)({},A),{},Object(j.a)({},e,t.target.value)))}};return Object(B.jsxs)("div",{className:m.a.signupContainer,children:[Object(B.jsxs)(O.a,{sx:{maxWidth:400},children:[Object(B.jsx)(p.a,{className:m.a.cardHeader,titleTypographyProps:{fontWeight:700,marginBottom:2,variant:"h6"},title:"Hey, Welcome. Signup to access Task Management"}),Object(B.jsxs)(x.a,{component:"form",onSubmit:function(e){if(e.preventDefault(),!(A.nameError||A.emailError||A.passwordError))if(t&&t.some((function(e){return e.email===A.email})))y(Object(u.a)(Object(u.a)({},b),{},{state:!0,message:"User with submitted email already exists."}));else{var r={id:Math.random(),name:A.name,email:A.email,password:A.password,isAdmin:!1};n(t?[].concat(Object(o.a)(t),[r]):[r]),a.push("/login")}},children:[Object(B.jsxs)(f.a,{children:[Object(B.jsx)(M,{id:"name",type:"name",label:"Name",placeholder:"Enter your name here",value:A.name,handleChange:T,inputProps:{startAdornment:Object(B.jsx)(S.a,{position:"start",children:Object(B.jsx)(F.a,{color:"secondary"})})},error:A.nameError}),Object(B.jsx)(M,{id:"email",type:"email",label:"Email",placeholder:"Enter your email here",value:A.email,handleChange:T,inputProps:{startAdornment:Object(B.jsx)(S.a,{position:"start",children:Object(B.jsx)(w.a,{color:"secondary"})})},error:A.emailError}),Object(B.jsx)(M,{id:"password",type:A.showPassword?"text":"password",label:"Password",placeholder:"Enter your password here",value:A.password,handleChange:T,inputProps:{startAdornment:Object(B.jsx)(S.a,{position:"start",children:Object(B.jsx)(E.a,{color:"secondary"})}),endAdornment:Object(B.jsx)(S.a,{position:"end",children:Object(B.jsx)(C.a,{color:"secondary","aria-label":"toggle password visibility",onClick:function(){k(Object(u.a)(Object(u.a)({},A),{},{showPassword:!A.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:A.showPassword?Object(B.jsx)(D.a,{}):Object(B.jsx)(I.a,{})})})},error:A.passwordError})]}),Object(B.jsxs)(h.a,{sx:{display:"flex",flexDirection:"column",marginBottom:"10px"},children:[Object(B.jsx)(g.a,{type:"submit",sx:{width:"50%",marginBottom:"8px"},color:"secondary",size:"medium",variant:"contained",children:"Signup"}),Object(B.jsxs)(U.a,{children:["Already a member?",Object(B.jsx)(l.b,{to:"/login",children:"Login"})]})]})]})]}),Object(B.jsx)(z,{alert:b,setAlert:y})]})},J=function(e){return localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):null},L=function(e,t){localStorage.setItem(e,JSON.stringify(t))},G=n(94),Y=n(54),q=n(44),R=Object(G.a)({typography:{fontFamily:"'Raleway', sans-serif",fontSize:16,fontWeightRegular:500},palette:{warning:{main:Y.a[400],contrastText:"#000000"},error:{main:q.a[500],contrastText:"#ffff"}}},{components:{MuiButton:{styleOverrides:{root:{textTransform:"capitalize"}}}}}),X=n(207),$=n(208),K=function(){var e=Object(d.g)(),t=JSON.parse(localStorage.getItem("loggedInUser"));return Object(B.jsx)(x.a,{sx:{flexGrow:1},children:Object(B.jsx)(X.a,{position:"static",color:"secondary",children:Object(B.jsxs)($.a,{children:[Object(B.jsxs)(U.a,{variant:"h6",component:"div",sx:{flexGrow:1,fontWeight:700},children:["Hello ",t&&t.name]}),Object(B.jsx)(g.a,{onClick:function(){localStorage.removeItem("loggedInUser"),e.push("/login")},variant:"contained",color:"warning",children:"Logout"})]})})})},Q=n(197),V=n(209),Z=n(109),ee=n.n(Z),te=function(e){var t=e.setOpen;return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(V.a,{color:"secondary","aria-label":"add",sx:{position:"absolute",right:16,bottom:16},children:Object(B.jsx)(ee.a,{onClick:function(){return t(!0)}})})})},ne=n(73),re=n.n(ne),ae=n(72),se=n.n(ae),ie=function(e){var t=e.todos,n=e.setTodos,a=e.todo,s=Object(r.useState)(!1),i=Object(c.a)(s,2),o=i[0],l=i[1],d=Object(r.useState)({title:a.title,description:a.description,titleError:null,descriptionError:null}),b=Object(c.a)(d,2),m=b[0],p=b[1],h=function(e){return function(t){p(Object(u.a)(Object(u.a)({},m),{},Object(j.a)({},e,t.target.value)))}};return Object(B.jsx)(Q.a,{item:!0,lg:3,md:4,sm:6,xs:12,children:Object(B.jsx)(O.a,{sx:{minHeight:250},children:o?Object(B.jsx)(f.a,{children:Object(B.jsxs)(x.a,{onSubmit:function(e){e.preventDefault(),m.titleError&&m.descriptionError||(n(t.map((function(e){return e.id===a.id?Object(u.a)(Object(u.a)({},e),{},{title:m.title,description:m.description}):e}))),l(!1))},sx:{display:"flex",flexDirection:"column",justifyContent:"flex-end"},gap:1,component:"form",children:[Object(B.jsx)(M,{id:"title",type:"text",label:"Title",placeholder:"Enter task title here",value:m.title,handleChange:h,error:m.titleError}),Object(B.jsx)(M,{id:"description",type:"text",label:"Description",placeholder:"Enter task description here",value:m.description,handleChange:h,error:m.descriptionError,multiline:{isMultiline:!0,rows:4}}),Object(B.jsxs)(x.a,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",gap:1},children:[Object(B.jsx)(g.a,{disabled:m.titleError&&m.descriptionError,type:"submit",sx:{marginBottom:"8px",alignItems:"center"},size:"medium",variant:"contained",color:"secondary",children:"Update"}),Object(B.jsx)(g.a,{onClick:function(){return l(!1)},sx:{marginBottom:"8px",alignItems:"center"},size:"medium",variant:"contained",color:"error",children:"Cancel"})]})]})}):Object(B.jsxs)(f.a,{children:[Object(B.jsxs)(x.a,{sx:{display:"flex",justifyContent:"flex-end"},gap:1,children:[Object(B.jsx)(g.a,{onClick:function(){return l(!0)},size:"small",color:"warning",variant:"contained","aria-label":"edit",children:Object(B.jsx)(se.a,{})}),Object(B.jsx)(g.a,{onClick:function(){n(t.filter((function(e){return e.id!==a.id})))},size:"small",color:"error",variant:"contained","aria-label":"delete",children:Object(B.jsx)(re.a,{})})]}),Object(B.jsx)(U.a,{sx:{fontSize:20,fontWeight:500},gutterBottom:!0,children:a.title}),Object(B.jsx)(U.a,{variant:"body2",children:a.description})]})})})},oe=n(5),ce=n(189),le=n(210),de=n(211),je=n(110),ue=n.n(je),be=Object(oe.a)(le.a)((function(e){return{"& .MuiPaper-root":{padding:e.theme.spacing(3),maxWidth:"350px"}}})),me=function(e){var t=e.title,n=e.open,r=e.handleModalClose,a=e.children;return Object(B.jsxs)(be,{onClose:r,open:n,fullWidth:!0,children:[Object(B.jsx)(x.a,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end"},children:Object(B.jsx)(V.a,{color:"secondary",children:Object(B.jsx)(ue.a,{onClick:r})})}),Object(B.jsxs)(ce.a,{sx:{textAlign:"left",p:0,fontWeight:700},children:["Hey, You Can Add ",t," Here"]}),Object(B.jsx)(de.a,{sx:{p:0},children:a})]})},Oe=function(e){var t=e.todos,n=e.setTodos,a=e.open,s=e.setOpen,i=Object(r.useState)({state:!1,message:""}),l=Object(c.a)(i,2),d=l[0],b=l[1],m=Object(r.useState)({title:"",description:"",titleError:null,descriptionError:null}),O=Object(c.a)(m,2),p=O[0],h=O[1],f=function(e){return function(t){h(Object(u.a)(Object(u.a)({},p),{},Object(j.a)({},e,t.target.value)))}},y=function(){s(!1),h({title:"",description:"",titleError:null,descriptionError:null})};return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(me,{title:"Task",open:a,handleModalClose:y,children:Object(B.jsxs)(x.a,{component:"form",onSubmit:function(e){e.preventDefault();var r=J("loggedInUser"),a={id:Math.random(),title:p.title,description:p.description,userId:r.id};t&&t.length>0?n([].concat(Object(o.a)(t),[a])):n([a]),y(),b({state:!0,message:"Task sucessfully added."})},sx:{display:"flex",flexDirection:"column"},children:[Object(B.jsx)(M,{id:"title",type:"text",label:"Title",placeholder:"Enter task title here",value:p.title,handleChange:f,error:p.titleError}),Object(B.jsx)(M,{id:"description",type:"text",label:"Description",placeholder:"Enter task description here",value:p.description,handleChange:f,error:p.descriptionError,multiline:{isMultiline:!0,rows:4}}),Object(B.jsx)(x.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:Object(B.jsx)(g.a,{type:"submit",sx:{width:"50%",marginBottom:"8px",alignItems:"center"},color:"secondary",size:"medium",variant:"contained",children:"Create"})})]})}),Object(B.jsx)(z,{alert:d,setAlert:b})]})},xe=function(e){var t=e.user,n=Object(r.useState)(J("todos")),a=Object(c.a)(n,2),s=a[0],i=a[1],o=Object(r.useState)(null),l=Object(c.a)(o,2),d=l[0],j=l[1],u=Object(r.useState)(!1),b=Object(c.a)(u,2),m=b[0],O=b[1];return Object(r.useEffect)((function(){t&&s&&j(s.filter((function(e){return e.userId===t.id}))),L("todos",s)}),[s]),Object(B.jsxs)(B.Fragment,{children:[d&&0!==d.length?Object(B.jsx)(Q.a,{container:!0,spacing:2,children:d.map((function(e){return Object(B.jsx)(ie,{todo:e,todos:s,setTodos:i},e.id)}))}):Object(B.jsx)(Q.a,{container:!0,spacing:0,alignItems:"center",justifyContent:"center",height:"100%",children:Object(B.jsx)("span",{children:"No Tasks Added Yet"})}),Object(B.jsx)(te,{setOpen:O}),Object(B.jsx)(Oe,{todos:s,setTodos:i,open:m,setOpen:O})]})},pe=function(e){var t=e.users,n=e.setUsers,a=e.user,s=Object(r.useState)(!1),i=Object(c.a)(s,2),o=i[0],l=i[1],d=Object(r.useState)({name:a.name,email:a.email,nameError:null,emailError:null}),b=Object(c.a)(d,2),m=b[0],p=b[1],h=function(e){return function(t){p(Object(u.a)(Object(u.a)({},m),{},Object(j.a)({},e,t.target.value)))}};return Object(B.jsx)(Q.a,{item:!0,lg:3,md:4,sm:6,xs:12,children:Object(B.jsx)(O.a,{sx:{minHeight:250},children:o?Object(B.jsx)(f.a,{children:Object(B.jsxs)(x.a,{onSubmit:function(e){e.preventDefault(),m.nameError&&m.emailError||(n(t.map((function(e){return e.id===a.id?Object(u.a)(Object(u.a)({},e),{},{name:m.name,email:m.email}):e}))),l(!1))},sx:{display:"flex",flexDirection:"column",justifyContent:"flex-end"},gap:1,component:"form",children:[Object(B.jsx)(M,{id:"name",type:"text",label:"Name",placeholder:"Enter user's name here",value:m.name,handleChange:h,error:m.nameError}),Object(B.jsx)(M,{id:"email",type:"email",label:"Email",placeholder:"Enter user's email here",value:m.email,handleChange:h,error:m.emailError}),Object(B.jsxs)(x.a,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",gap:1},children:[Object(B.jsx)(g.a,{type:"submit",sx:{marginBottom:"8px",alignItems:"center"},size:"medium",variant:"contained",color:"secondary",children:"Update"}),Object(B.jsx)(g.a,{onClick:function(){return l(!1)},sx:{marginBottom:"8px",alignItems:"center"},size:"medium",variant:"contained",color:"error",children:"Cancel"})]})]})}):Object(B.jsxs)(f.a,{children:[Object(B.jsxs)(x.a,{sx:{display:"flex",justifyContent:"flex-end"},gap:1,children:[Object(B.jsx)(g.a,{onClick:function(){return l(!0)},size:"small",color:"warning",variant:"contained","aria-label":"edit",children:Object(B.jsx)(se.a,{})}),Object(B.jsx)(g.a,{onClick:function(){n(t.filter((function(e){return e.id!==a.id})))},size:"small",color:"error",variant:"contained","aria-label":"delete",children:Object(B.jsx)(re.a,{})})]}),Object(B.jsx)(U.a,{sx:{fontSize:20,fontWeight:700},gutterBottom:!0,children:a.name}),Object(B.jsx)(U.a,{variant:"body2",children:a.email})]})})})},he=function(e){var t=e.users,n=e.setUsers,a=e.open,s=e.setOpen,i=Object(r.useState)({state:!1,message:""}),l=Object(c.a)(i,2),d=l[0],b=l[1],m=Object(r.useState)({name:"",email:"",password:"",nameError:null,emailError:null,passwordError:null}),O=Object(c.a)(m,2),p=O[0],h=O[1],f=function(e){return function(t){h(Object(u.a)(Object(u.a)({},p),{},Object(j.a)({},e,t.target.value)))}},y=function(){s(!1),h({name:"",email:"",password:"",nameError:null,emailError:null,passwordError:null})};return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(me,{title:"User",open:a,handleModalClose:y,children:Object(B.jsxs)(x.a,{component:"form",onSubmit:function(e){if(e.preventDefault(),!(p.nameError||p.emailError||p.passwordError))if(t&&t.some((function(e){return e.email===p.email})))b({state:!0,message:"User with submitted email already exists!"});else{var r={id:Math.random(),name:p.name,email:p.email,password:p.password,isAdmin:!1};t&&t.length>0?n([].concat(Object(o.a)(t),[r])):n([{newUser:r}]),y(),b({state:!0,message:"User sucessfully added."})}},sx:{display:"flex",flexDirection:"column"},children:[Object(B.jsx)(M,{id:"name",type:"name",label:"Name",placeholder:"Enter your name here",value:p.name,handleChange:f,inputProps:{startAdornment:Object(B.jsx)(S.a,{position:"start",children:Object(B.jsx)(F.a,{color:"secondary"})})},error:p.nameError}),Object(B.jsx)(M,{id:"email",type:"email",label:"Email",placeholder:"Enter your email here",value:p.email,handleChange:f,inputProps:{startAdornment:Object(B.jsx)(S.a,{position:"start",children:Object(B.jsx)(w.a,{color:"secondary"})})},error:p.emailError}),Object(B.jsx)(M,{id:"password",type:p.showPassword?"text":"password",label:"Password",placeholder:"Enter your password here",value:p.password,handleChange:f,inputProps:{startAdornment:Object(B.jsx)(S.a,{position:"start",children:Object(B.jsx)(E.a,{color:"secondary"})}),endAdornment:Object(B.jsx)(S.a,{position:"end",children:Object(B.jsx)(C.a,{color:"secondary","aria-label":"toggle password visibility",onClick:function(){h(Object(u.a)(Object(u.a)({},p),{},{showPassword:!p.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:p.showPassword?Object(B.jsx)(D.a,{}):Object(B.jsx)(I.a,{})})})},error:p.passwordError}),Object(B.jsx)(x.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:Object(B.jsx)(g.a,{type:"submit",sx:{width:"50%",marginBottom:"8px",alignItems:"center"},color:"secondary",size:"medium",variant:"contained",children:"Create"})})]})}),Object(B.jsx)(z,{alert:d,setAlert:b})]})},fe=function(e){var t=e.user,n=Object(r.useState)(!1),a=Object(c.a)(n,2),s=a[0],i=a[1],o=Object(r.useState)(J("users")),l=Object(c.a)(o,2),d=l[0],j=l[1],u=Object(r.useState)(null),b=Object(c.a)(u,2),m=b[0],O=b[1];return Object(r.useEffect)((function(){t&&O(d.filter((function(e){return e.id!==t.id}))),L("users",d)}),[d]),Object(B.jsxs)(B.Fragment,{children:[m&&0!==m.length?Object(B.jsx)(Q.a,{container:!0,spacing:2,children:m.map((function(e){return Object(B.jsx)(pe,{user:e,users:d,setUsers:j},e.id)}))}):Object(B.jsx)(Q.a,{container:!0,spacing:0,alignItems:"center",justifyContent:"center",height:"100%",children:Object(B.jsx)("span",{children:"No User Added Yet"})}),Object(B.jsx)(te,{setOpen:i,open:s}),Object(B.jsx)(he,{users:d,setUsers:j,open:s,setOpen:i})]})},ge=function(){var e=J("loggedInUser");return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(K,{}),Object(B.jsx)("div",{className:m.a.container,children:e&&e.isAdmin?Object(B.jsx)(fe,{user:e}):Object(B.jsx)(xe,{user:e})})]})},ye=n(76),we=["children"];var ve=function(e){var t=e.children,n=Object(ye.a)(e,we),r=J("loggedInUser");return Object(B.jsx)(d.b,Object(u.a)(Object(u.a)({},n),{},{render:function(){return r?Object(B.jsx)(d.a,{to:{pathname:"/"}}):t}}))},Ee=["children"];var Ce=function(e){var t=e.children,n=Object(ye.a)(e,Ee),r=J("loggedInUser");return Object(B.jsx)(d.b,Object(u.a)(Object(u.a)({},n),{},{render:function(){return r?t:Object(B.jsx)(d.a,{to:"/login"})}}))},Se=n(190),Pe=function(){return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(Se.a,{sx:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"},children:"Sorry, Page Was Not Found"})})};var Ie=function(){var e={id:Math.random(),name:"Admin",email:"admin@gmail.com",isAdmin:"true",password:"123"},t=Object(r.useState)(J("users")),n=Object(c.a)(t,2),a=n[0],s=n[1];return Object(r.useEffect)((function(){a?a.some((function(t){return t.email===e.email&&t.isAdmin}))||s([].concat(Object(o.a)(a),[e])):s([e])}),[]),Object(r.useEffect)((function(){L("users",a)}),[a]),Object(B.jsx)(l.a,{children:Object(B.jsx)(W.a,{theme:R,children:Object(B.jsxs)(d.d,{children:[Object(B.jsx)(ve,{exact:!0,path:"/login",children:Object(B.jsx)(N,{users:a})}),Object(B.jsx)(ve,{exact:!0,path:"/signup",children:Object(B.jsx)(H,{users:a,setUsers:s})}),Object(B.jsx)(Ce,{path:"/",exact:!0,children:Object(B.jsx)(ge,{})}),Object(B.jsx)(d.b,{component:Pe})]})})})},Ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,212)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))};i.a.render(Object(B.jsx)(a.a.StrictMode,{children:Object(B.jsx)(Ie,{})}),document.getElementById("root")),Ae()},39:function(e,t,n){e.exports={loginContainer:"style_loginContainer__3XoOz",signupContainer:"style_signupContainer__3UumU",cardHeader:"style_cardHeader__-BBnj",container:"style_container__1Gsd8",addBtn:"style_addBtn__3UJ2J"}}},[[142,1,2]]]);
//# sourceMappingURL=main.e89b588f.chunk.js.map