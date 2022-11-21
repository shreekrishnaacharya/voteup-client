"use strict";(self.webpackChunkAdmin_Referendum_2_0=self.webpackChunkAdmin_Referendum_2_0||[]).push([[746],{6577:function(e,r,n){n.d(r,{j:function(){return u},n:function(){return h}});var a=n(4165),t=n(5861),i=n(1881),s=n.n(i),o=n(4886),l=n(7637),c=s().create({baseURL:o.L1.BASE_URL,headers:{"Content-Type":"application/json",Accept:"application/json"}});c.interceptors.request.use((function(e){var r=l.Z.getLocalAccessToken();return r&&(e.headers.Authorization="Bearer "+r),e}),(function(e){return Promise.reject(e)}));var d=!1;c.interceptors.response.use((function(e){return e}),function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r){var n,t,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=r.config).url==o.L1.LOGIN||!r.response){e.next=21;break}if(401!==r.response.status||d){e.next=20;break}return d=!0,e.prev=4,e.next=7,c.post("/auth/refreshtoken",{refreshToken:l.Z.getLocalRefreshToken()});case 7:return t=e.sent,i=t.data.token,l.Z.updateLocalAccessToken(i),e.abrupt("return",c(n));case 13:return e.prev=13,e.t0=e.catch(4),l.Z.removeUser(),window.location.reload(),e.abrupt("return",Promise.reject(e.t0));case 18:e.next=21;break;case 20:d&&(d=!1,l.Z.removeUser());case 21:return e.abrupt("return",Promise.reject(r));case 22:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(r){return e.apply(this,arguments)}}());var u=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r){var n,t,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n="get","method"in r&&(n=r.method.toLowerCase()),t=r.url,delete r.method,delete r.url,"get"!=n&&"delete"!=n){e.next=11;break}return r.params=r.data,delete r.data,e.abrupt("return",c[n](t,r));case 11:return i=r.data,delete r.data,e.abrupt("return",c[n](t,i,r));case 14:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({url:r,responseType:"blob"}).then((function(e){var r=e.data,n=document.createElement("a"),a=window.URL.createObjectURL(r);n.href=a,n.download="Report.pdf",document.body.append(n),n.click(),n.remove(),window.URL.revokeObjectURL(a)}));case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},8678:function(e,r,n){n.d(r,{Z:function(){return i}});var a=n(2087),t=n(6417);function i(e){var r=e.children;e.type;return(0,t.jsx)(a.E.div,{whileHover:{scale:1},whileTap:{scale:.9},children:r})}i.defaultProps={type:"scale"}},7772:function(e,r,n){var a=n(9506),t=n(1113),i=n(7723),s=n(1130),o=n(8303),l=n(6417);function c(){var e=s.X5.mini;return(0,l.jsx)(a.Z,{sx:{bottom:0,width:"100%",position:"absolute",height:"2.5rem"},children:(0,l.jsxs)(a.Z,{px:2,py:1,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between",children:[(0,l.jsxs)(a.Z,{display:"flex",gap:2,children:[(0,l.jsx)(t.Z,{sx:{display:Boolean(e)?"none":"block"},children:"\xa9 2022 - Referendum 2.0"}),(0,l.jsx)(t.Z,{sx:{fontSize:(Boolean(e),"13px")},children:(0,l.jsx)(o.rU,{to:s.L1.PRIVACY,rel:"Privacy Policy",children:"Privacy Policy"})}),(0,l.jsx)(t.Z,{sx:{fontSize:(Boolean(e),"13px")},children:(0,l.jsx)(o.rU,{to:s.L1.RULES,rel:"Terms of Use",children:"ToU"})}),(0,l.jsx)(t.Z,{sx:{fontSize:(Boolean(e),"13px")},children:(0,l.jsx)(o.rU,{to:s.L1.TERMS,rel:"Terms and conditions",children:"ToS"})}),(0,l.jsx)(t.Z,{sx:{fontSize:(Boolean(e),"13px")},children:(0,l.jsx)(o.rU,{to:s.L1.FAQ,rel:"Frequently asked question",children:"FAQ"})}),(0,l.jsx)(t.Z,{sx:{fontSize:(Boolean(e),"13px")},children:(0,l.jsx)(o.rU,{to:s.L1.BLOG,rel:"Blog",children:"Blog"})}),(0,l.jsx)(t.Z,{sx:{fontSize:"13px",display:Boolean(e)?"none":"block"},children:(0,l.jsx)(o.rU,{to:s.L1.HOME,rel:"Home",children:"Home"})})]}),(0,l.jsxs)(t.Z,{sx:{pt:{xs:2,md:0},fontSize:(Boolean(e),"13px"),display:Boolean(e)?"none":"block"},children:["Crafted by"," ",(0,l.jsx)(i.Z,{href:"https://www.linkedin.com/in/shree-krishna-acharya-0a10a514b/",rel:"sksharma72000@gmail.com",target:"_blank",sx:{color:"#fff",textShadow:"0 3px 5px rgba(0, 0, 0, 0.5)"},children:"Shree Krishna Acharya"})]})]})})}c.defaultProps={mini:!1},r.Z=c},4049:function(e,r,n){n.d(r,{Z:function(){return c}});var a=n(1413),t=n(9506),i=n(8303),s=n.p+"static/media/logo.fc2eee2a0f516fa7c80f.png",o=n(6417),l=function(){return(0,o.jsx)("img",{src:s,alt:"Referendum 2.0",width:"221"})},c=function(e){var r=e.sx,n=e.to;return(0,o.jsx)(t.Z,{sx:(0,a.Z)((0,a.Z)({},r),{},{position:"absolute",top:0}),children:(0,o.jsx)(i.rU,{to:n,children:(0,o.jsx)(l,{})})})}},3045:function(e,r,n){n.r(r),n.d(r,{default:function(){return Re}});var a=n(3830),t=n(4886),i=n(8303),s=n(9019),o=n(5898),l=n(1113),c=n(4165),d=n(1413),u=n(5861),h=n(885),x=n(7313),m=n(5627),p=n(3306),f=n(7843),Z=n(5480),j=n(1727),g=n(7131),b=n(3929),v=n(4758),S=n(7723),w=n(4193),y=n(2563),P=n(8089),R=n(2702),k=n(8678),L=n(1741),C=n(4874),M=n(7637),A=n(1130),I=n(6577),E=function(){var e=(0,u.Z)((0,c.Z)().mark((function e(r){var n;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,I.j)((0,d.Z)({},r)).then((function(e){return{flag:!0,status:e.status,message:"Success",data:e.data}})).then((function(e){return e})).catch((function(e){return{flag:!1,status:e.status,message:e.data?e.data.message:"Error",data:e.data}}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();function F(e){return G.apply(this,arguments)}function G(){return(G=(0,u.Z)((0,c.Z)().mark((function e(r){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E({url:"/auth/login",data:r,method:"post"}).then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return B.apply(this,arguments)}function B(){return(B=(0,u.Z)((0,c.Z)().mark((function e(r){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E({url:"/auth/signup/",method:"post",data:r}).then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return U.apply(this,arguments)}function U(){return(U=(0,u.Z)((0,c.Z)().mark((function e(r){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E({url:"/auth/forgot",data:r,method:"post"}).then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return O.apply(this,arguments)}function O(){return(O=(0,u.Z)((0,c.Z)().mark((function e(r){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E({url:"/auth/change-password",data:(0,d.Z)({},r),method:"post"}).then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=n(6417),H=P.Ry({username:P.Z_().required("Email cannot be blank").email(),password:P.Z_().required("Password cannot be blank")}),z=function(){var e=(0,x.useState)(!1),r=(0,h.Z)(e,2),n=r[0],t=r[1],P=(0,x.useState)(!1),I=(0,h.Z)(P,2),E=I[0],G=I[1],T=(0,a.useHistory)(),B=(0,m.cI)({resolver:(0,y.X)(H)}),N=B.handleSubmit,U=B.control,D=B.formState,O=(D.errors,D.isSubmitting),z=function(){G(!E)},W=function(e){e.preventDefault()},K=(0,R.Ds)().enqueueSnackbar,q=function(){var e=(0,u.Z)((0,c.Z)().mark((function e(r){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(r),e.next=3,F(r).then((function(e){if(1==e.flag){K("Login success",{variant:"success"}),M.Z.setUser((0,d.Z)({},e.data));var r=localStorage.getItem("REFEERER_URL");Boolean(r)?(localStorage.removeItem("REFEERER_URL"),window.location.href=r):T.push({pathname:A.L1.HOME})}else K("Invalid login detail",{variant:"error"})}));case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,V.jsx)(V.Fragment,{children:(0,V.jsx)("form",{noValidate:!0,onSubmit:N(q),children:(0,V.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,V.jsx)(s.ZP,{item:!0,xs:12,children:(0,V.jsx)(o.Z,{spacing:1,children:(0,V.jsx)(m.Qr,{name:"username",defaultValue:"sksharma72000@gmail.com",control:U,render:function(e){var r,n=e.field,a=e.fieldState;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(p.Z,{htmlFor:"email-login",children:"Email Address"}),(0,V.jsx)(f.Z,(0,d.Z)({id:"email-login",type:"email",placeholder:"Enter email address",fullWidth:!0},n)),a.error&&(0,V.jsx)(Z.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:null===(r=a.error)||void 0===r?void 0:r.message})]})}})})}),(0,V.jsx)(s.ZP,{item:!0,xs:12,children:(0,V.jsx)(o.Z,{spacing:1,children:(0,V.jsx)(m.Qr,{name:"password",defaultValue:"Krishna21211",control:U,render:function(e){var r,n=e.field,a=e.fieldState;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(p.Z,{htmlFor:"password-login",children:"Password"}),(0,V.jsx)(f.Z,(0,d.Z)((0,d.Z)({fullWidth:!0,id:"password-login",type:E?"text":"password"},n),{},{endAdornment:(0,V.jsx)(j.Z,{position:"end",children:(0,V.jsx)(g.Z,{"aria-label":"toggle password visibility",onClick:z,onMouseDown:W,edge:"end",size:"large",children:E?(0,V.jsx)(L.Z,{}):(0,V.jsx)(C.Z,{})})}),placeholder:"Enter password"})),a.error&&(0,V.jsx)(Z.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:null===(r=a.error)||void 0===r?void 0:r.message})]})}})})}),(0,V.jsx)(s.ZP,{item:!0,xs:12,sx:{mt:-1},children:(0,V.jsxs)(o.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,V.jsx)(b.Z,{control:(0,V.jsx)(v.Z,{checked:n,onChange:function(e){return t(e.target.checked)},name:"checked",color:"primary",size:"small"}),label:(0,V.jsx)(l.Z,{variant:"h6",children:"Keep me sign in"})}),(0,V.jsx)(S.Z,{variant:"h6",component:i.rU,to:A.L1.FORGOT_PASSWORD,color:"text.primary",children:"Forgot Password?"})]})}),(0,V.jsx)(s.ZP,{item:!0,xs:12,children:(0,V.jsx)(k.Z,{children:(0,V.jsx)(w.Z,{disableElevation:!0,disabled:O,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Login"})})})]})})})},W=n(9506),K=n(5987),q=n(9860),_=n(3428),Q=n(4641),J=n(9536),Y=n(3405),X=["border","boxShadow","children","content","contentSX","darkTitle","divider","elevation","secondary","shadow","sx","title","codeHighlight"],$={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},ee=(0,x.forwardRef)((function(e,r){var n=e.border,a=void 0===n||n,t=e.boxShadow,i=e.children,s=e.content,o=void 0===s||s,c=e.contentSX,u=void 0===c?{}:c,h=e.darkTitle,x=e.divider,m=void 0===x||x,p=e.elevation,f=e.secondary,Z=e.shadow,j=e.sx,g=void 0===j?{}:j,b=e.title,v=(e.codeHighlight,(0,K.Z)(e,X)),S=(0,q.Z)();return t="dark"===S.palette.mode?t||!0:t,(0,V.jsxs)(_.Z,(0,d.Z)((0,d.Z)({elevation:p||0,ref:r},v),{},{sx:(0,d.Z)((0,d.Z)({},g),{},{border:a?"1px solid":"none",borderRadius:2,borderColor:"dark"===S.palette.mode?S.palette.divider:S.palette.grey.A800,boxShadow:!t||a&&"dark"!==S.palette.mode?"inherit":Z||S.customShadows.z1,":hover":{boxShadow:t?Z||S.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:S.typography.fontFamily,fontSize:"0.75rem"}}),children:[!h&&b&&(0,V.jsx)(Q.Z,{sx:$,titleTypographyProps:{variant:"subtitle1"},title:b,action:f}),h&&b&&(0,V.jsx)(Q.Z,{sx:$,title:(0,V.jsx)(l.Z,{variant:"h3",children:b}),action:f}),b&&m&&(0,V.jsx)(J.Z,{}),o&&(0,V.jsx)(Y.Z,{sx:u,children:i}),!o&&i]}))})),re=["children"],ne=function(e){var r=e.children,n=(0,K.Z)(e,re);return(0,V.jsx)(ee,(0,d.Z)((0,d.Z)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{border:!1,boxShadow:!0,children:(0,V.jsx)(W.Z,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:r})}))},ae=n(4049),te=n.p+"static/media/bg.f1359f1f153ff56c396e.png",ie=function(){return(0,V.jsx)(W.Z,{sx:{position:"fixed",zIndex:-1,width:"100%",height:"100%",background:"url(".concat(te,") repeat center center fixed"),backgroundSize:"auto"}})},se=n(7772),oe=function(e){var r=e.children;return(0,V.jsxs)(W.Z,{children:[(0,V.jsx)(ie,{}),(0,V.jsxs)(s.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"60vh"},children:[(0,V.jsx)(s.ZP,{item:!0,xs:12,sx:{px:2,py:1},children:(0,V.jsx)(ae.Z,{to:A.L1.HOME})}),(0,V.jsx)(s.ZP,{item:!0,xs:12,children:(0,V.jsx)(s.ZP,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 250px)",md:"calc(100vh - 200px)"},mt:4},children:(0,V.jsx)(s.ZP,{item:!0,children:(0,V.jsx)(ne,{children:r})})})})]}),(0,V.jsx)(se.Z,{mini:!0})]})},le=n(182),ce=function(){return(0,V.jsxs)(oe,{children:[(0,V.jsx)(le.q,{children:(0,V.jsx)("title",{children:"Login | Referendum 2.0"})}),(0,V.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,V.jsx)(s.ZP,{item:!0,xs:12,children:(0,V.jsxs)(o.Z,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[(0,V.jsx)(l.Z,{variant:"h3",children:"Login"}),(0,V.jsx)(l.Z,{component:i.rU,to:A.L1.SIGNUP,variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Don't have an account?"})]})}),(0,V.jsx)(s.ZP,{item:!0,xs:12,children:(0,V.jsx)(z,{})})]})]})},de=n(4256),ue=n(7327),he=n(1550),xe=function(e){var r=0;return e.length>5&&(r+=1),e.length>7&&(r+=1),function(e){return new RegExp(/[0-9]/).test(e)}(e)&&(r+=1),function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&(r+=1),function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&(r+=1),r},me=n(6513),pe=P.Ry({fname:P.Z_().required("First name cannot be blank"),lname:P.Z_().required("Last name cannot be blank"),email:P.Z_().required("Email cannot be blank").email(),contact:P.Z_().required("Phone cannot be blank"),country:P.Z_().required("Country cannot be blank"),temp_password:P.Z_().required("Password cannot be blank")}),fe=function(){var e=(0,x.useState)(),r=(0,h.Z)(e,2),n=r[0],a=r[1],t=(0,x.useState)(!1),b=(0,h.Z)(t,2),v=b[0],P=b[1],M=function(){P(!v)},I=(0,R.Ds)().enqueueSnackbar,E=function(e){e.preventDefault()},F=(0,m.cI)({resolver:(0,y.X)(pe)}),G=F.handleSubmit,B=F.control,N=F.formState,U=(N.errors,N.isSubmitting);(0,x.useEffect)((function(){!function(e){var r,n=xe(e);a((r=n)<2?{label:"Poor",color:"error.main"}:r<3?{label:"Weak",color:"warning.main"}:r<4?{label:"Normal",color:"warning.dark"}:r<5?{label:"Good",color:"success.main"}:r<6?{label:"Strong",color:"success.dark"}:{label:"Poor",color:"error.main"})}("")}),[]);var D=function(){var e=(0,u.Z)((0,c.Z)().mark((function e(r){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(r).then((function(e){1==e.flag?(I("Signup success",{variant:"success"}),history.push({pathname:A.L1.LOGIN})):I("Signup failed",{variant:"error"})}));case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,V.jsx)(V.Fragment,{children:(0,V.jsx)("form",{noValidate:!0,onSubmit:G(D),children:(0,V.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,V.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,V.jsx)(o.Z,{spacing:1,children:(0,V.jsx)(m.Qr,{name:"fname",defaultValue:"",control:B,render:function(e){var r=e.field,n=e.fieldState;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(p.Z,{htmlFor:"firstname-signup",children:"First Name*"}),(0,V.jsx)(f.Z,(0,d.Z)((0,d.Z)({},r),{},{id:"firstname-login",type:"firstname",fullWidth:!0,error:Boolean(n.error)})),n.error&&(0,V.jsx)(Z.Z,{error:!0,id:"helper-text-firstname-signup",children:n.error.message})]})}})})}),(0,V.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,V.jsx)(o.Z,{spacing:1,children:(0,V.jsx)(m.Qr,{name:"lname",defaultValue:"",control:B,render:function(e){var r=e.field,n=e.fieldState;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(p.Z,{htmlFor:"lastname-signup",children:"Last Name*"}),(0,V.jsx)(f.Z,(0,d.Z)((0,d.Z)({},r),{},{fullWidth:!0,error:Boolean(n.error),id:"lastname-signup",inputProps:{}})),n.error&&(0,V.jsx)(Z.Z,{error:!0,children:n.error.message})]})}})})}),(0,V.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,V.jsx)(o.Z,{spacing:1,children:(0,V.jsx)(m.Qr,{name:"contact",defaultValue:"",control:B,render:function(e){var r=e.field,n=e.fieldState;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(p.Z,{htmlFor:"phone-signup",children:"Phone*"}),(0,V.jsx)(f.Z,(0,d.Z)((0,d.Z)({},r),{},{fullWidth:!0,error:Boolean(n.error),id:"phone-signup",inputProps:{}})),n.error&&(0,V.jsx)(Z.Z,{error:!0,children:n.error.message})]})}})})}),(0,V.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,V.jsx)(o.Z,{spacing:1,children:(0,V.jsx)(m.Qr,{name:"country",defaultValue:"Nepal",control:B,render:function(e){var r=e.field,n=e.fieldState;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(p.Z,{htmlFor:"country-login",children:"Country*"}),(0,V.jsx)(de.Z,(0,d.Z)((0,d.Z)({},r),{},{labelId:"select-label",id:"country-login",children:Object.values(me).map((function(e){return(0,V.jsx)(ue.Z,{value:e,children:e},e)}))})),n.error&&(0,V.jsx)(Z.Z,{error:!0,children:n.error.message})]})}})})}),(0,V.jsx)(s.ZP,{item:!0,xs:12,children:(0,V.jsx)(o.Z,{spacing:1,children:(0,V.jsx)(m.Qr,{name:"email",defaultValue:"",control:B,render:function(e){var r=e.field,n=e.fieldState;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(p.Z,{htmlFor:"email-signup",children:"Email Address*"}),(0,V.jsx)(f.Z,(0,d.Z)((0,d.Z)({},r),{},{type:"email",fullWidth:!0,error:Boolean(n.error),id:"email-login",inputProps:{}})),n.error&&(0,V.jsx)(Z.Z,{error:!0,children:n.error.message})]})}})})}),(0,V.jsxs)(s.ZP,{item:!0,xs:12,children:[(0,V.jsx)(o.Z,{spacing:1,children:(0,V.jsx)(m.Qr,{name:"temp_password",defaultValue:"",control:B,render:function(e){var r=e.field,n=e.fieldState;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(p.Z,{htmlFor:"password-signup",children:"Password"}),(0,V.jsx)(f.Z,(0,d.Z)((0,d.Z)({},r),{},{fullWidth:!0,error:Boolean(n.error),id:"password-signup",type:v?"text":"password",endAdornment:(0,V.jsx)(j.Z,{position:"end",children:(0,V.jsx)(g.Z,{"aria-label":"toggle password visibility",onClick:M,onMouseDown:E,edge:"end",size:"large",children:v?(0,V.jsx)(L.Z,{}):(0,V.jsx)(C.Z,{})})}),placeholder:"******",inputProps:{}})),n.error&&(0,V.jsx)(Z.Z,{error:!0,children:n.error.message})]})}})}),(0,V.jsx)(he.Z,{fullWidth:!0,sx:{mt:2},children:(0,V.jsxs)(s.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,V.jsx)(s.ZP,{item:!0,children:(0,V.jsx)(W.Z,{sx:{bgcolor:null===n||void 0===n?void 0:n.color,width:85,height:8,borderRadius:"7px"}})}),(0,V.jsx)(s.ZP,{item:!0,children:(0,V.jsx)(l.Z,{variant:"subtitle1",fontSize:"0.75rem",children:null===n||void 0===n?void 0:n.label})})]})})]}),(0,V.jsx)(s.ZP,{item:!0,xs:12,children:(0,V.jsxs)(l.Z,{variant:"body2",children:["By Signing up, you agree to our \xa0",(0,V.jsx)(S.Z,{variant:"subtitle2",component:i.rU,to:A.L1.TERMS,children:"Terms of Service"}),"\xa0 and \xa0",(0,V.jsx)(S.Z,{variant:"subtitle2",component:i.rU,to:A.L1.PRIVACY,children:"Privacy Policy"})]})}),(0,V.jsx)(s.ZP,{item:!0,xs:12,children:(0,V.jsx)(k.Z,{children:(0,V.jsx)(w.Z,{disableElevation:!0,disabled:U,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Create Account"})})})]})})})},Ze=function(){return(0,V.jsxs)(oe,{children:[(0,V.jsx)(le.q,{children:(0,V.jsx)("title",{children:"Signup | Referendum 2.0"})}),(0,V.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,V.jsx)(s.ZP,{item:!0,xs:12,children:(0,V.jsxs)(o.Z,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[(0,V.jsx)(l.Z,{variant:"h3",children:"Sign up"}),(0,V.jsx)(l.Z,{component:i.rU,to:A.L1.LOGIN,variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Already have an account?"})]})}),(0,V.jsx)(s.ZP,{item:!0,xs:12,children:(0,V.jsx)(fe,{})})]})]})},je=P.Ry({email:P.Z_().required("Email cannot be blank").email()}),ge=function(){var e=(0,m.cI)({resolver:(0,y.X)(je)}),r=e.handleSubmit,n=e.control,h=e.formState,x=(h.errors,h.isSubmitting),j=(0,R.Ds)().enqueueSnackbar,g=(0,a.useHistory)(),b=function(){var e=(0,u.Z)((0,c.Z)().mark((function e(r){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(r).then((function(e){var r=e.flag,n=e.data;1==r?(j("Email send success. Check your email for password reset code",{variant:"success"}),g.push({pathname:t.L1.NEW_PASSWORD})):j(n.message,{variant:"error"})}));case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,V.jsx)(V.Fragment,{children:(0,V.jsx)("form",{noValidate:!0,onSubmit:r(b),children:(0,V.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,V.jsx)(s.ZP,{item:!0,xs:12,children:(0,V.jsx)(o.Z,{spacing:1,children:(0,V.jsx)(m.Qr,{name:"email",defaultValue:"",control:n,render:function(e){var r,n=e.field,a=e.fieldState;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(p.Z,{htmlFor:"email-login",children:"Email Address"}),(0,V.jsx)(f.Z,(0,d.Z)({id:"email-login",type:"email",placeholder:"Enter email address",fullWidth:!0},n)),a.error&&(0,V.jsx)(Z.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:null===(r=a.error)||void 0===r?void 0:r.message})]})}})})}),(0,V.jsx)(s.ZP,{item:!0,xs:12,children:(0,V.jsx)(l.Z,{component:i.rU,to:t.L1.LOGIN,variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Got your password?"})}),(0,V.jsx)(s.ZP,{item:!0,xs:12,children:(0,V.jsx)(k.Z,{children:(0,V.jsx)(w.Z,{disableElevation:!0,disabled:x,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Submit"})})})]})})})},be=function(){return(0,V.jsxs)(oe,{children:[(0,V.jsx)(le.q,{children:(0,V.jsx)("title",{children:"Forgot Password | Referendum 2.0"})}),(0,V.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,V.jsx)(s.ZP,{item:!0,xs:12,children:(0,V.jsx)(l.Z,{variant:"h3",children:"Forgot Password?"})}),(0,V.jsx)(s.ZP,{item:!0,xs:12,children:(0,V.jsx)(ge,{})})]})]})},ve=n(4942),Se=n(9474),we=P.Ry({code:P.Z_().required("Verify code is required").test("len","Must be exactly 6 characters",(function(e){return 6===e.length})),password:P.Z_().required("New password is required"),confirm:P.Z_().oneOf([P.iH("password"),null],"Does not match with new password!").required("Confirm Password is required")}),ye=function(){var e=(0,x.useState)({new:!1,confirm:!1}),r=(0,h.Z)(e,2),n=r[0],t=r[1],i=(0,a.useHistory)(),l=(0,Se.TH)(),b=new URLSearchParams(l.search);b.has("code");console.log(b.has("code"));var v=(0,m.cI)({resolver:(0,y.X)(we)}),S=v.handleSubmit,P=v.control,M=v.formState,I=(M.errors,M.isSubmitting),E=function(e){t((0,d.Z)((0,d.Z)({},n),{},(0,ve.Z)({},e,!n[e])))},F=function(e){e.preventDefault()},G=(0,R.Ds)().enqueueSnackbar,T=function(){var e=(0,u.Z)((0,c.Z)().mark((function e(r){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(r).then((function(e){1==e.flag?(G("Password change success",{variant:"success"}),i.push({pathname:A.L1.LOGIN})):G("Password not changed",{variant:"warning"})}));case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,V.jsx)(V.Fragment,{children:(0,V.jsx)("form",{noValidate:!0,onSubmit:S(T),children:(0,V.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,V.jsx)(s.ZP,{item:!0,xs:12,children:(0,V.jsx)(o.Z,{spacing:1,children:(0,V.jsx)(m.Qr,{name:"code",defaultValue:b.has("code")?b.get("code"):"",control:P,render:function(e){var r,n=e.field,a=e.fieldState;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(p.Z,{htmlFor:"email-login",children:"Code"}),(0,V.jsx)(f.Z,(0,d.Z)({id:"email-login",type:"text",placeholder:"Enter code",readOnly:b.has("code"),fullWidth:!0},n)),a.error&&(0,V.jsx)(Z.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:null===(r=a.error)||void 0===r?void 0:r.message})]})}})})}),(0,V.jsx)(s.ZP,{item:!0,xs:12,children:(0,V.jsx)(o.Z,{spacing:1,children:(0,V.jsx)(m.Qr,{name:"password",defaultValue:"",control:P,render:function(e){var r,a=e.field,t=e.fieldState;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(p.Z,{htmlFor:"password-new",children:"New Password"}),(0,V.jsx)(f.Z,(0,d.Z)((0,d.Z)({fullWidth:!0,id:"password-new",type:n.new?"text":"password"},a),{},{endAdornment:(0,V.jsx)(j.Z,{position:"end",children:(0,V.jsx)(g.Z,{"aria-label":"toggle password visibility",onClick:function(){return E("new")},onMouseDown:F,edge:"end",size:"large",children:n.new?(0,V.jsx)(L.Z,{}):(0,V.jsx)(C.Z,{})})}),placeholder:"Enter new password"})),t.error&&(0,V.jsx)(Z.Z,{error:!0,children:null===(r=t.error)||void 0===r?void 0:r.message})]})}})})}),(0,V.jsx)(s.ZP,{item:!0,xs:12,children:(0,V.jsx)(o.Z,{spacing:1,children:(0,V.jsx)(m.Qr,{name:"confirm",defaultValue:"",control:P,render:function(e){var r,a=e.field,t=e.fieldState;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(p.Z,{htmlFor:"password-confirm",children:"Confirm Password"}),(0,V.jsx)(f.Z,(0,d.Z)((0,d.Z)({fullWidth:!0,id:"password-confirm",type:n.confirm?"text":"password"},a),{},{endAdornment:(0,V.jsx)(j.Z,{position:"end",children:(0,V.jsx)(g.Z,{"aria-label":"toggle password visibility",onClick:function(){return E("confirm")},onMouseDown:F,edge:"end",size:"large",children:n.confirm?(0,V.jsx)(L.Z,{}):(0,V.jsx)(C.Z,{})})}),placeholder:"Reenter password"})),t.error&&(0,V.jsx)(Z.Z,{error:!0,children:null===(r=t.error)||void 0===r?void 0:r.message})]})}})})}),(0,V.jsx)(s.ZP,{item:!0,xs:12,children:(0,V.jsx)(k.Z,{children:(0,V.jsx)(w.Z,{disableElevation:!0,disabled:I,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Submit"})})})]})})})},Pe=function(){return(0,V.jsxs)(oe,{children:[(0,V.jsx)(le.q,{children:(0,V.jsx)("title",{children:"Change Password | Referendum 2.0"})}),(0,V.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,V.jsx)(s.ZP,{item:!0,xs:12,children:(0,V.jsxs)(o.Z,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[(0,V.jsx)(l.Z,{variant:"h3",children:"Change Password"}),(0,V.jsx)(l.Z,{component:i.rU,to:A.L1.LOGIN,variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Got your password?"})]})}),(0,V.jsx)(s.ZP,{item:!0,xs:12,children:(0,V.jsx)(ye,{})})]})]})};var Re=function(){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(a.Route,{exact:!0,path:t.L1.LOGIN,component:ce}),(0,V.jsx)(a.Route,{exact:!0,path:t.L1.FORGOT_PASSWORD,component:be}),(0,V.jsx)(a.Route,{exact:!0,path:t.L1.NEW_PASSWORD,component:Pe}),(0,V.jsx)(a.Route,{exact:!0,path:t.L1.SIGNUP,component:Ze})]})}},6513:function(e){e.exports=JSON.parse('{"AF":"Afghanistan","AX":"\xc5land Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cape Verde","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Congo, The Democratic Republic of the","CK":"Cook Islands","CR":"Costa Rica","CI":"Cote D\'Ivoire","HR":"Croatia","CU":"Cuba","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands (Malvinas)","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GG":"Guernsey","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","HM":"Heard Island and Mcdonald Islands","VA":"Holy See (Vatican City State)","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran, Islamic Republic Of","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KP":"Democratic People\'s Republic of Korea","KR":"Korea, Republic of","XK":"Kosovo","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People\'s Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libyan Arab Jamahiriya","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MO":"Macao","MK":"Macedonia, The Former Yugoslav Republic of","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia, Federated States of","MD":"Moldova, Republic of","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","AN":"Netherlands Antilles","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territory, Occupied","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Reunion","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","SH":"Saint Helena","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","PM":"Saint Pierre and Miquelon","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia and the South Sandwich Islands","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SZ":"Swaziland","SE":"Sweden","CH":"Switzerland","SY":"Syrian Arab Republic","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania, United Republic of","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","UM":"United States Minor Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela","VN":"Viet Nam","VG":"Virgin Islands, British","VI":"Virgin Islands, U.S.","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"}')}}]);