import{R as m}from"./vue-router-848ac1f1.js";import{a as u}from"./axios-4a70c6fc.js";import{d as l,Y as _,Z as f,c as r,a1 as i,u as g,_ as b,E as c,a2 as h,a3 as v,a4 as y}from"./@vue-87301338.js";import{_ as C}from"./index-66e3ac10.js";import"./ant-design-vue-50a1d689.js";import"./@babel-9e06c973.js";import"./resize-observer-polyfill-3d106987.js";import"./vue-types-ef06c517.js";import"./@ant-design-79e2aec8.js";import"./@ctrl-fb5a5473.js";import"./dom-align-ecb06dd6.js";import"./lodash-es-6d1fdea6.js";import"./dayjs-28368fa5.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-6b992d05.js";import"./compute-scroll-into-view-183f845a.js";import"./pinia-4c2438cc.js";import"./gsap-648a0ac7.js";import"./firebase-006cb462.js";import"./@firebase-2256ea6b.js";import"./idb-81bdbf9b.js";const w={data:null,status:{err:2,code:"",message:"",emessage:"",details:[]}},x=t=>t.data,I=t=>(console.log("err",t),w),R=t=>t?`?${Object.entries(t).map(([o,s])=>`${o}=${encodeURIComponent(s)}`).join("&")}`:"",S={method:"post",baseURL:"",transformRequest:[(t,o)=>(o["Content-Type"]="application/json",t)],headers:{"Content-Type":"multipart/form-data"},withCredentials:!1,responseType:"json"},p=u.create(S);p.interceptors.response.use(t=>x(t),t=>I(t));const V=(t,o=void 0)=>new Promise(s=>{p.get(`${t}${R(o)}`).then(e=>s(e))}),k=(t,o)=>new Promise(s=>{p.post(t,JSON.stringify(o)).then(e=>s(e))}),d={login:"/api/staff/login",version:"/api/version"},L=t=>k(d.login,t),N=()=>V(d.version),T=t=>(h("data-v-ddbaaaa3"),t=t(),v(),t),$={id:"bgm-login"},j=T(()=>y("p",null,"bgm-login",-1)),B=l({__name:"login",setup(t){const o=async()=>{const e={account:"aa@aa.aa",password:"1234"},{data:a,status:n}=await L(e);return n.err===0?a:!1},s=async()=>{const{data:e,status:a}=await N();return a.err===0?(console.log(e),!0):!1};return(e,a)=>{const n=_("a-button");return b(),f("div",$,[j,r(n,{onClick:o},{default:i(()=>[c("LOGIN")]),_:1}),r(n,{onClick:s},{default:i(()=>[c("Version")]),_:1}),r(g(m),{to:"/bgm"},{default:i(()=>[c("BGM")]),_:1})])}}});const et=C(B,[["__scopeId","data-v-ddbaaaa3"]]);export{et as default};