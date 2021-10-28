(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{134:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(38),i=a.n(s),c=(a(134),a(15)),o=a(13),l=a(33),d=a(17),j=a(4),u=a(7),b=a(39),p=a.n(b),O=a(199),m=a(187),x=a(200),h=a(204),f=a(201),g=a(205),y=a(47),E=a.n(y),v=a(48),w=a.n(v),S=a(203),D=a(202),C=a(50),T=a.n(C),_=a(49),A=a.n(_),I=a(152),U=a(191),L=a(1),P=function(e){var t=e.id,a=e.type,r=e.label,s=e.placeholder,i=e.value,c=e.handleChange,l=e.inputProps,d=e.multiline,j=void 0===d?{isMultiline:!1}:d,u=Object(n.useState)(""),b=Object(o.a)(u,2),p=b[0],O=b[1],m=Object(n.useState)(!1),x=Object(o.a)(m,2),h=x[0],f=x[1],g=function(){f(!0),""===i?O("".concat(r," is required")):"email"!==t||/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(i)?O(""):O("".concat(r," is invalid"))};return Object(n.useEffect)((function(){h&&g()}),[i]),Object(L.jsx)(U.a,{color:"secondary",style:{paddingBottom:10},fullWidth:!0,id:t,type:a,required:!0,value:i,onFocus:function(){return f(!0)},onChange:c(t),onBlur:g,margin:"dense",InputProps:l,error:!!p,helperText:p,label:r,placeholder:s,multiline:j.isMultiline,rows:j.rows})},R=a(194),W=function(e){return localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):null},H=function(e,t){localStorage.setItem(e,JSON.stringify(t))},k=r.a.createContext(),B={alert:{isVisible:!1,message:""},modal:{isOpen:!1}},M=function(e,t){switch(t.type){case"OPEN_MODAL":return Object(u.a)(Object(u.a)({},e),{},{modal:{isOpen:!0}});case"CLOSE_MODAL":return Object(u.a)(Object(u.a)({},e),{},{modal:{isOpen:!1}});case"SHOW_ALERT":return Object(u.a)(Object(u.a)({},e),{},{alert:{isVisible:!0,message:t.payload}});case"HIDE_ALERT":return Object(u.a)(Object(u.a)({},e),{},{alert:{isVisible:!1,message:""}});default:return e}},N=function(e){var t=Object(n.useReducer)(M,B),a=Object(o.a)(t,2),r=a[0],s=a[1];return Object(L.jsx)(k.Provider,{value:{appState:r,appDispatch:s},children:e.children})},F=(k.Consumer,function(){var e=Object(n.useContext)(k),t=e.appState,a=e.appDispatch,r=t.alert;return Object(L.jsx)(R.a,{open:r.isVisible,onClose:function(){a({type:"HIDE_ALERT"})},message:r.message,anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:5e3})}),z=r.a.createContext(),G={id:Math.random(),name:"Admin",email:"admin@gmail.com",isAdmin:"true",password:"123"},J={users:function(){var e=W("users");return e?e.some((function(e){return e.email===G.email&&e.isAdmin}))?e:[].concat(Object(c.a)(e),[G]):[G]}(),loggedInUser:W("loggedInUser"),filteredUsers:null},q=function(e,t){switch(t.type){case"SIGN_UP":case"ADD_USER":return Object(u.a)(Object(u.a)({},e),{},{users:e.users?[].concat(Object(c.a)(e.users),[t.payload]):[t.payload]});case"LOG_IN":return Object(u.a)(Object(u.a)({},e),{},{loggedInUser:e.users.find((function(e){return e.email===t.payload.email&&e.password===t.payload.password}))});case"LOG_OUT":return localStorage.removeItem("loggedInUser"),Object(u.a)(Object(u.a)({},e),{},{loggedInUser:null});case"UPDATE_TODO":return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.payload.id?Object(u.a)(Object(u.a)({},e),{},{name:t.payload.name,email:t.payload.email}):e}))});case"DELETE_USER":return Object(u.a)(Object(u.a)({},e),{},{users:e.users.filter((function(e){return e.id!==t.payload}))});case"SET_FILTERED_USERS":return Object(u.a)(Object(u.a)({},e),{},{filteredUsers:e.users.filter((function(t){return t.id!==e.loggedInUser.id}))});default:return e}},V=function(e){var t=Object(n.useReducer)(q,J),a=Object(o.a)(t,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){H("users",r.users)}),[r.users]),Object(n.useEffect)((function(){H("loggedInUser",r.loggedInUser)}),[r.loggedInUser]),Object(L.jsx)(z.Provider,{value:{userState:r,userDispatch:s},children:e.children})},Y=(z.Consumer,function(){var e=Object(d.g)(),t=Object(n.useContext)(k).appDispatch,a=Object(n.useContext)(z),r=a.userState,s=a.userDispatch,i=r.users,c=Object(n.useState)({email:"",password:"",showPassword:!1}),b=Object(o.a)(c,2),y=b[0],v=b[1],C=function(e){return function(t){v(Object(u.a)(Object(u.a)({},y),{},Object(j.a)({},e,t.target.value)))}};return Object(L.jsxs)("div",{className:p.a.loginContainer,children:[Object(L.jsxs)(O.a,{sx:{maxWidth:400},children:[Object(L.jsx)(x.a,{className:p.a.cardHeader,titleTypographyProps:{fontWeight:700,marginBottom:2,variant:"h6"},title:"Hey, Welcome. Login to access Task Management"}),Object(L.jsxs)(m.a,{component:"form",onSubmit:function(a){a.preventDefault(),(null===i||void 0===i?void 0:i.find((function(e){return e.email===y.email&&e.password===y.password})))?(s({type:"LOG_IN",payload:{email:y.email,password:y.password}}),e.push("/")):t({type:"SHOW_ALERT",payload:"Invalid email or password"})},children:[Object(L.jsxs)(f.a,{children:[Object(L.jsx)(P,{id:"email",type:"email",label:"Email",placeholder:"Enter your email here",value:y.email,handleChange:C,inputProps:{startAdornment:Object(L.jsx)(D.a,{position:"start",children:Object(L.jsx)(E.a,{color:"secondary"})})}}),Object(L.jsx)(P,{id:"password",type:y.showPassword?"text":"password",label:"Password",placeholder:"Enter your password here",value:y.password,handleChange:C,inputProps:{startAdornment:Object(L.jsx)(D.a,{position:"start",children:Object(L.jsx)(w.a,{color:"secondary"})}),endAdornment:Object(L.jsx)(D.a,{position:"end",children:Object(L.jsx)(S.a,{color:"secondary","aria-label":"toggle password visibility",onClick:function(){v(Object(u.a)(Object(u.a)({},y),{},{showPassword:!y.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:y.showPassword?Object(L.jsx)(A.a,{}):Object(L.jsx)(T.a,{})})})}})]}),Object(L.jsxs)(h.a,{sx:{display:"flex",flexDirection:"column",marginBottom:"10px"},children:[Object(L.jsx)(g.a,{type:"submit",sx:{width:"50%",marginBottom:"8px"},color:"secondary",size:"medium",variant:"contained",children:"Login"}),Object(L.jsxs)(I.a,{children:["Not a member yet?",Object(L.jsx)(l.b,{to:"/signup",children:"Sign up"})]})]})]})]}),Object(L.jsx)(F,{})]})}),X=a(198),$=a(71),K=a.n($),Q=function(){var e=Object(d.g)(),t=Object(n.useContext)(k).appDispatch,a=Object(n.useContext)(z),r=a.userState,s=a.userDispatch,i=r.users,c=Object(n.useState)({name:"",email:"",password:"",showPassword:!1}),b=Object(o.a)(c,2),y=b[0],v=b[1],C=function(e){return function(t){v(Object(u.a)(Object(u.a)({},y),{},Object(j.a)({},e,t.target.value)))}};return Object(L.jsxs)("div",{className:p.a.signupContainer,children:[Object(L.jsxs)(O.a,{sx:{maxWidth:400},children:[Object(L.jsx)(x.a,{className:p.a.cardHeader,titleTypographyProps:{fontWeight:700,marginBottom:2,variant:"h6"},title:"Hey, Welcome. Signup to access Task Management"}),Object(L.jsxs)(m.a,{component:"form",onSubmit:function(a){if(a.preventDefault(),!(y.nameError||y.emailError||y.passwordError))if(i&&i.some((function(e){return e.email===y.email})))t({type:"SHOW_ALERT",payload:"User with submitted email already exists"});else{var n={id:Math.random(),name:y.name,email:y.email,password:y.password,isAdmin:!1};s({type:"SIGN_UP",payload:n}),e.push("/login")}},children:[Object(L.jsxs)(f.a,{children:[Object(L.jsx)(P,{id:"name",type:"name",label:"Name",placeholder:"Enter your name here",value:y.name,handleChange:C,inputProps:{startAdornment:Object(L.jsx)(D.a,{position:"start",children:Object(L.jsx)(K.a,{color:"secondary"})})},error:y.nameError}),Object(L.jsx)(P,{id:"email",type:"email",label:"Email",placeholder:"Enter your email here",value:y.email,handleChange:C,inputProps:{startAdornment:Object(L.jsx)(D.a,{position:"start",children:Object(L.jsx)(E.a,{color:"secondary"})})},error:y.emailError}),Object(L.jsx)(P,{id:"password",type:y.showPassword?"text":"password",label:"Password",placeholder:"Enter your password here",value:y.password,handleChange:C,inputProps:{startAdornment:Object(L.jsx)(D.a,{position:"start",children:Object(L.jsx)(w.a,{color:"secondary"})}),endAdornment:Object(L.jsx)(D.a,{position:"end",children:Object(L.jsx)(S.a,{color:"secondary","aria-label":"toggle password visibility",onClick:function(){v(Object(u.a)(Object(u.a)({},y),{},{showPassword:!y.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:y.showPassword?Object(L.jsx)(A.a,{}):Object(L.jsx)(T.a,{})})})},error:y.passwordError})]}),Object(L.jsxs)(h.a,{sx:{display:"flex",flexDirection:"column",marginBottom:"10px"},children:[Object(L.jsx)(g.a,{type:"submit",sx:{width:"50%",marginBottom:"8px"},color:"secondary",size:"medium",variant:"contained",children:"Signup"}),Object(L.jsxs)(I.a,{children:["Already a member?",Object(L.jsx)(l.b,{to:"/login",children:"Login"})]})]})]})]}),Object(L.jsx)(F,{})]})},Z=a(94),ee=a(54),te=a(44),ae=Object(Z.a)({typography:{fontFamily:"'Raleway', sans-serif",fontSize:16,fontWeightRegular:500},palette:{warning:{main:ee.a[400],contrastText:"#000000"},error:{main:te.a[500],contrastText:"#ffff"}}},{components:{MuiButton:{styleOverrides:{root:{textTransform:"capitalize"}}}}}),ne=a(207),re=a(208),se=function(){var e=Object(d.g)(),t=Object(n.useContext)(z),a=t.userState,r=t.userDispatch,s=a.loggedInUser;return Object(L.jsx)(m.a,{sx:{flexGrow:1},children:Object(L.jsx)(ne.a,{position:"static",color:"secondary",children:Object(L.jsxs)(re.a,{children:[Object(L.jsxs)(I.a,{variant:"h6",component:"div",sx:{flexGrow:1,fontWeight:700},children:["Hello ",s&&s.name]}),Object(L.jsx)(g.a,{onClick:function(){r({type:"LOG_OUT"}),e.push("/login")},variant:"contained",color:"warning",children:"Logout"})]})})})},ie=a(197),ce=a(209),oe=a(109),le=a.n(oe),de=function(){var e=Object(n.useContext)(k).appDispatch;return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)(ce.a,{color:"secondary","aria-label":"add",sx:{position:"absolute",right:16,bottom:16},children:Object(L.jsx)(le.a,{onClick:function(){e({type:"OPEN_MODAL"})}})})})},je=a(73),ue=a.n(je),be=a(72),pe=a.n(be),Oe=r.a.createContext(),me={todos:W("todos"),filteredTodos:null},xe=function(e,t){switch(t.type){case"ADD_TODO":return Object(u.a)(Object(u.a)({},e),{},{todos:e.todos?[].concat(Object(c.a)(e.todos),[t.payload]):[t.payload]});case"UPDATE_TODO":return Object(u.a)(Object(u.a)({},e),{},{todos:e.todos.map((function(e){return e.id===t.payload.id?Object(u.a)(Object(u.a)({},e),{},{title:t.payload.title,description:t.payload.description}):e}))});case"DELETE_TODO":return Object(u.a)(Object(u.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.payload}))});case"SET_FILTERED_TODOS":return Object(u.a)(Object(u.a)({},e),{},{filteredTodos:e.todos.filter((function(e){return e.userId===t.payload}))});default:return e}},he=function(e){var t=Object(n.useReducer)(xe,me),a=Object(o.a)(t,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(r.todos))}),[r.todos]),Object(L.jsx)(Oe.Provider,{value:{todosState:r,todosDispatch:s},children:e.children})},fe=(Oe.Consumer,function(e){var t=e.todo,a=Object(n.useContext)(k).appDispatch,r=Object(n.useContext)(Oe),s=r.todosState,i=r.todosDispatch,c=s.filteredTodos,l=Object(n.useState)(!1),d=Object(o.a)(l,2),b=d[0],p=d[1],x=Object(n.useState)({title:t.title,description:t.description}),h=Object(o.a)(x,2),y=h[0],E=h[1],v=function(e){return function(t){E(Object(u.a)(Object(u.a)({},y),{},Object(j.a)({},e,t.target.value)))}};return Object(L.jsx)(ie.a,{item:!0,lg:3,md:4,sm:6,xs:12,children:Object(L.jsx)(O.a,{sx:{minHeight:250},children:b?Object(L.jsx)(f.a,{children:Object(L.jsxs)(m.a,{onSubmit:function(e){e.preventDefault(),y.titleError&&y.descriptionError||(c.some((function(e){return e.title===y.title&&e.id!==t.id}))?a({type:"SHOW_ALERT",payload:"Title has to be unique"}):(i({type:"UPDATE_TODO",payload:{id:t.id,title:y.title,description:y.description}}),a({type:"SHOW_ALERT",payload:"Task was successfully updated"}),p(!1)))},sx:{display:"flex",flexDirection:"column",justifyContent:"flex-end"},gap:1,component:"form",children:[Object(L.jsx)(P,{id:"title",type:"text",label:"Title",placeholder:"Enter task title here",value:y.title,handleChange:v}),Object(L.jsx)(P,{id:"description",type:"text",label:"Description",placeholder:"Enter task description here",value:y.description,handleChange:v,multiline:{isMultiline:!0,rows:4}}),Object(L.jsxs)(m.a,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",gap:1},children:[Object(L.jsx)(g.a,{disabled:y.titleError&&y.descriptionError,type:"submit",sx:{marginBottom:"8px",alignItems:"center"},size:"medium",variant:"contained",color:"secondary",children:"Update"}),Object(L.jsx)(g.a,{onClick:function(){return p(!1)},sx:{marginBottom:"8px",alignItems:"center"},size:"medium",variant:"contained",color:"error",children:"Cancel"})]})]})}):Object(L.jsxs)(f.a,{children:[Object(L.jsxs)(m.a,{sx:{display:"flex",justifyContent:"flex-end"},gap:1,children:[Object(L.jsx)(g.a,{onClick:function(){return p(!0)},size:"small",color:"warning",variant:"contained","aria-label":"edit",children:Object(L.jsx)(pe.a,{})}),Object(L.jsx)(g.a,{onClick:function(){i({type:"DELETE_TODO",payload:t.id}),a({type:"SHOW_ALERT",payload:"Task was successfully deleted"})},size:"small",color:"error",variant:"contained","aria-label":"delete",children:Object(L.jsx)(ue.a,{})})]}),Object(L.jsx)(I.a,{sx:{fontSize:20,fontWeight:500},gutterBottom:!0,children:t.title}),Object(L.jsx)(I.a,{variant:"body2",children:t.description})]})})})}),ge=a(5),ye=a(189),Ee=a(210),ve=a(211),we=a(110),Se=a.n(we),De=Object(ge.a)(Ee.a)((function(e){return{"& .MuiPaper-root":{padding:e.theme.spacing(3),maxWidth:"350px"}}})),Ce=function(e){var t=e.title,a=e.children,r=Object(n.useContext)(k),s=r.appState,i=r.appDispatch,c=s.modal,o=function(){i({type:"CLOSE_MODAL"})};return Object(L.jsxs)(De,{onClose:o,open:c.isOpen,fullWidth:!0,children:[Object(L.jsx)(m.a,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-end"},children:Object(L.jsx)(ce.a,{color:"secondary",children:Object(L.jsx)(Se.a,{onClick:o})})}),Object(L.jsxs)(ye.a,{sx:{textAlign:"left",p:0,fontWeight:700},children:["Hey, You Can Add ",t," Here"]}),Object(L.jsx)(ve.a,{sx:{p:0},children:a})]})},Te=function(){var e=Object(n.useContext)(k).appDispatch,t=Object(n.useContext)(z).userState.loggedInUser,a=Object(n.useContext)(Oe),r=a.todosState,s=a.todosDispatch,i=r.filteredTodos,c=Object(n.useState)({title:"",description:""}),l=Object(o.a)(c,2),d=l[0],b=l[1];Object(n.useEffect)((function(){s({type:"SET_FILTERED_TODOS",payload:t.id})}),[]);var p=function(e){return function(t){b(Object(u.a)(Object(u.a)({},d),{},Object(j.a)({},e,t.target.value)))}};return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(Ce,{title:"Task",children:Object(L.jsxs)(m.a,{component:"form",onSubmit:function(a){if(a.preventDefault(),i.some((function(e){return e.title===d.title})))e({type:"SHOW_ALERT",payload:"Title has to be unique"});else{var n={id:Math.random(),title:d.title,description:d.description,userId:t.id};s({type:"ADD_TODO",payload:n}),e({type:"CLOSE_MODAL"}),b({title:"",description:""}),e({type:"SHOW_ALERT",payload:"Task was successfully added"})}},sx:{display:"flex",flexDirection:"column"},children:[Object(L.jsx)(P,{id:"title",type:"text",label:"Title",placeholder:"Enter task title here",value:d.title,handleChange:p,error:d.titleError}),Object(L.jsx)(P,{id:"description",type:"text",label:"Description",placeholder:"Enter task description here",value:d.description,handleChange:p,error:d.descriptionError,multiline:{isMultiline:!0,rows:4}}),Object(L.jsx)(m.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:Object(L.jsx)(g.a,{type:"submit",sx:{width:"50%",marginBottom:"8px",alignItems:"center"},color:"secondary",size:"medium",variant:"contained",children:"Create"})})]})}),Object(L.jsx)(F,{})]})},_e=function(){var e=Object(n.useContext)(z).userState.loggedInUser,t=Object(n.useContext)(Oe),a=t.todosState,r=t.todosDispatch,s=a.todos,i=a.filteredTodos;return Object(n.useEffect)((function(){r({type:"SET_FILTERED_TODOS",payload:e.id})}),[s]),Object(L.jsxs)(L.Fragment,{children:[i&&0!==i.length?Object(L.jsx)(ie.a,{container:!0,spacing:2,children:i.map((function(e){return Object(L.jsx)(fe,{todo:e},e.id)}))}):Object(L.jsx)(ie.a,{container:!0,spacing:0,alignItems:"center",justifyContent:"center",height:"100%",children:Object(L.jsx)("span",{children:"No Tasks Added Yet"})}),Object(L.jsx)(de,{}),Object(L.jsx)(Te,{})]})},Ae=function(e){var t=e.user,a=Object(n.useState)(!1),r=Object(o.a)(a,2),s=r[0],i=r[1],c=Object(n.useContext)(k).appDispatch,l=Object(n.useContext)(z),d=l.userState,b=l.userDispatch,p=d.users,x=Object(n.useState)({name:t.name,email:t.email}),h=Object(o.a)(x,2),y=h[0],E=h[1],v=function(e){return function(t){E(Object(u.a)(Object(u.a)({},y),{},Object(j.a)({},e,t.target.value)))}};return Object(L.jsx)(ie.a,{item:!0,lg:3,md:4,sm:6,xs:12,children:Object(L.jsx)(O.a,{sx:{minHeight:250},children:s?Object(L.jsx)(f.a,{children:Object(L.jsxs)(m.a,{onSubmit:function(e){e.preventDefault(),y.nameError&&y.emailError||(p.some((function(e){return e.email===y.email&&e.id!==t.id}))?c({type:"SHOW_ALERT",payload:"User with submitted email already exists"}):(b({type:"UPDATE_USER",payload:{id:t.id,name:y.name,email:y.email}}),c({type:"SHOW_ALERT",payload:"User was successfully updated"}),i(!1)))},sx:{display:"flex",flexDirection:"column",justifyContent:"flex-end"},gap:1,component:"form",children:[Object(L.jsx)(P,{id:"name",type:"text",label:"Name",placeholder:"Enter user's name here",value:y.name,handleChange:v}),Object(L.jsx)(P,{id:"email",type:"email",label:"Email",placeholder:"Enter user's email here",value:y.email,handleChange:v}),Object(L.jsxs)(m.a,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",gap:1},children:[Object(L.jsx)(g.a,{type:"submit",sx:{marginBottom:"8px",alignItems:"center"},size:"medium",variant:"contained",color:"secondary",children:"Update"}),Object(L.jsx)(g.a,{onClick:function(){return i(!1)},sx:{marginBottom:"8px",alignItems:"center"},size:"medium",variant:"contained",color:"error",children:"Cancel"})]})]})}):Object(L.jsxs)(f.a,{children:[Object(L.jsxs)(m.a,{sx:{display:"flex",justifyContent:"flex-end"},gap:1,children:[Object(L.jsx)(g.a,{onClick:function(){return i(!0)},size:"small",color:"warning",variant:"contained","aria-label":"edit",children:Object(L.jsx)(pe.a,{})}),Object(L.jsx)(g.a,{onClick:function(){b({type:"DELETE_USER",payload:t.id}),c({type:"SHOW_ALERT",payload:"User was successfully deleted"})},size:"small",color:"error",variant:"contained","aria-label":"delete",children:Object(L.jsx)(ue.a,{})})]}),Object(L.jsx)(I.a,{sx:{fontSize:20,fontWeight:700},gutterBottom:!0,children:t.name}),Object(L.jsx)(I.a,{variant:"body2",children:t.email})]})})})},Ie=function(){var e=Object(n.useContext)(k).appDispatch,t=Object(n.useContext)(z),a=t.userState,r=t.userDispatch,s=a.users,i=Object(n.useState)({name:"",email:"",password:""}),c=Object(o.a)(i,2),l=c[0],d=c[1],b=function(e){return function(t){d(Object(u.a)(Object(u.a)({},l),{},Object(j.a)({},e,t.target.value)))}};return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(Ce,{title:"User",children:Object(L.jsxs)(m.a,{component:"form",onSubmit:function(t){if(t.preventDefault(),!(l.nameError||l.emailError||l.passwordError))if(s&&s.some((function(e){return e.email===l.email})))e({type:"SHOW_ALERT",payload:"User with submitted email already exists"});else{var a={id:Math.random(),name:l.name,email:l.email,password:l.password,isAdmin:!1};r({type:"ADD_USER",payload:a}),e({type:"CLOSE_MODAL"}),d({name:"",email:"",password:""}),e({type:"SHOW_ALERT",payload:"User was sucessfully added"})}},sx:{display:"flex",flexDirection:"column"},children:[Object(L.jsx)(P,{id:"name",type:"name",label:"Name",placeholder:"Enter your name here",value:l.name,handleChange:b,inputProps:{startAdornment:Object(L.jsx)(D.a,{position:"start",children:Object(L.jsx)(K.a,{color:"secondary"})})}}),Object(L.jsx)(P,{id:"email",type:"email",label:"Email",placeholder:"Enter your email here",value:l.email,handleChange:b,inputProps:{startAdornment:Object(L.jsx)(D.a,{position:"start",children:Object(L.jsx)(E.a,{color:"secondary"})})}}),Object(L.jsx)(P,{id:"password",type:l.showPassword?"text":"password",label:"Password",placeholder:"Enter your password here",value:l.password,handleChange:b,inputProps:{startAdornment:Object(L.jsx)(D.a,{position:"start",children:Object(L.jsx)(w.a,{color:"secondary"})}),endAdornment:Object(L.jsx)(D.a,{position:"end",children:Object(L.jsx)(S.a,{color:"secondary","aria-label":"toggle password visibility",onClick:function(){d(Object(u.a)(Object(u.a)({},l),{},{showPassword:!l.showPassword}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:l.showPassword?Object(L.jsx)(A.a,{}):Object(L.jsx)(T.a,{})})})}}),Object(L.jsx)(m.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:Object(L.jsx)(g.a,{type:"submit",sx:{width:"50%",marginBottom:"8px",alignItems:"center"},color:"secondary",size:"medium",variant:"contained",children:"Create"})})]})}),Object(L.jsx)(F,{})]})},Ue=function(){var e=Object(n.useContext)(z),t=e.userState,a=e.userDispatch,r=t.users,s=t.filteredUsers;return Object(n.useEffect)((function(){a({type:"SET_FILTERED_USERS"})}),[r]),Object(L.jsxs)(L.Fragment,{children:[s&&0!==s.length?Object(L.jsx)(ie.a,{container:!0,spacing:2,children:s.map((function(e){return Object(L.jsx)(Ae,{user:e},e.id)}))}):Object(L.jsx)(ie.a,{container:!0,spacing:0,alignItems:"center",justifyContent:"center",height:"100%",children:Object(L.jsx)("span",{children:"No User Added Yet"})}),Object(L.jsx)(de,{}),Object(L.jsx)(Ie,{})]})},Le=function(){var e=Object(n.useContext)(z).userState.loggedInUser;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(se,{}),Object(L.jsx)("div",{className:p.a.container,children:e&&e.isAdmin?Object(L.jsx)(Ue,{}):Object(L.jsx)(_e,{})})]})},Pe=a(76),Re=["children"];var We=function(e){var t=e.children,a=Object(Pe.a)(e,Re),r=Object(n.useContext)(z).userState.loggedInUser;return Object(L.jsx)(d.b,Object(u.a)(Object(u.a)({},a),{},{render:function(){return r?Object(L.jsx)(d.a,{to:{pathname:"/"}}):t}}))},He=["children"];var ke=function(e){var t=e.children,a=Object(Pe.a)(e,He),r=Object(n.useContext)(z).userState.loggedInUser;return console.log(r),Object(L.jsx)(d.b,Object(u.a)(Object(u.a)({},a),{},{render:function(){return r?t:Object(L.jsx)(d.a,{to:"/login"})}}))},Be=a(190),Me=function(){return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)(Be.a,{sx:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center"},children:"Sorry, Page Was Not Found"})})};var Ne=function(){var e={id:Math.random(),name:"Admin",email:"admin@gmail.com",isAdmin:"true",password:"123"},t=Object(n.useState)(W("users")),a=Object(o.a)(t,2),r=a[0],s=a[1];return Object(n.useEffect)((function(){r?r.some((function(t){return t.email===e.email&&t.isAdmin}))||s([].concat(Object(c.a)(r),[e])):s([e])}),[]),Object(n.useEffect)((function(){H("users",r)}),[r]),Object(L.jsx)(X.a,{theme:ae,children:Object(L.jsx)(N,{children:Object(L.jsx)(V,{children:Object(L.jsx)(he,{children:Object(L.jsx)(l.a,{children:Object(L.jsxs)(d.d,{children:[Object(L.jsx)(We,{exact:!0,path:"/login",children:Object(L.jsx)(Y,{})}),Object(L.jsx)(We,{exact:!0,path:"/signup",children:Object(L.jsx)(Q,{})}),Object(L.jsx)(ke,{path:"/",exact:!0,children:Object(L.jsx)(Le,{})}),Object(L.jsx)(d.b,{component:Me})]})})})})})})},Fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,212)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),s(e),i(e)}))};i.a.render(Object(L.jsx)(r.a.StrictMode,{children:Object(L.jsx)(Ne,{})}),document.getElementById("root")),Fe()},39:function(e,t,a){e.exports={loginContainer:"style_loginContainer__3XoOz",signupContainer:"style_signupContainer__3UumU",cardHeader:"style_cardHeader__-BBnj",container:"style_container__1Gsd8",addBtn:"style_addBtn__3UJ2J"}}},[[142,1,2]]]);
//# sourceMappingURL=main.c529ed12.chunk.js.map