var f=(i,r,l)=>new Promise((n,m)=>{var u=o=>{try{e(l.next(o))}catch(_){m(_)}},d=o=>{try{e(l.throw(o))}catch(_){m(_)}},e=o=>o.done?n(o.value):Promise.resolve(o.value).then(u,d);e((l=l.apply(i,r)).next())});import{d as b,u as x,a as S,r as $,b as D,c as k,o as E,e as y,f as s,w as c,g as t,h as a,F as B,E as h,i as C,j as v,v as w,p as L,k as N,_ as j}from"./index-f8fc1903.js";import{E as A,a as M}from"./el-form-item-c07395c9.js";/* empty css                */import{E as R}from"./el-button-e7c22a1d.js";import{E as q}from"./el-input-049d6135.js";import{_ as U}from"./theme-switch.vue_vue_type_script_setup_true_name_theme-switch_lang-62c78a1f.js";import"./lodash-f24acc27.js";import"./mock-70785340.js";import"./event-e06a23af.js";import"./index-dabd5a62.js";const z="/vue3-demi-admin/static/svg/api-d-edcb3b77.svg",G="/vue3-demi-admin/static/svg/api-l-22a0583d.svg",H={username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:5,max:12,message:"长度应该5-12位之间",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:5,max:12,message:"长度应该5-12位之间",trigger:"blur"}]},J=a("div",{style:{margin:"20px"}},null,-1),K={flex:"","flex-1":"","justify-center":"","mt-2":""},O=a("span",null,"登录",-1),P=a("span",null,"重置",-1),Q=b({__name:"form-panle",setup(i){const{themeStore:r}=x(),l=S(),n=$({username:"ADMIN",password:"admin"}),m=D(),u=d=>f(this,null,function*(){d&&(yield d.validate((e,o)=>{if(e)if(n.username==="ADMIN"&&n.password==="admin")l.push("/main"),h.info("登录中");else throw new Error("账号或密码错误")}).catch(e=>{h.error(e.message),r.setLoading(!1)}))});return(d,e)=>{const o=q,_=A,g=R,V=k("svg-icon"),I=C,F=M;return E(),y(B,null,[J,s(F,{ref_key:"ruleFormRef",ref:m,model:t(n),rules:t(H),"w-320px":""},{default:c(()=>[s(_,{label:"账号：",prop:"username"},{default:c(()=>[s(o,{modelValue:t(n).username,"onUpdate:modelValue":e[0]||(e[0]=p=>t(n).username=p)},null,8,["modelValue"])]),_:1}),s(_,{label:"密码：",prop:"password"},{default:c(()=>[s(o,{modelValue:t(n).password,"onUpdate:modelValue":e[1]||(e[1]=p=>t(n).password=p),type:"password",clear:""},null,8,["modelValue"])]),_:1}),s(_,{id:"login-btn"},{default:c(()=>[a("div",K,[s(g,{type:"primary",loading:t(r).isLoading,disabled:t(r).isLoading,onClick:e[2]||(e[2]=p=>u(t(m)))},{default:c(()=>[O]),_:1},8,["loading","disabled"]),s(g,null,{default:c(()=>[s(I,null,{default:c(()=>[s(V,{name:"reset"})]),_:1}),P]),_:1})])]),_:1})]),_:1},8,["model","rules"])],64)}}}),T=i=>(L("data-v-aac96874"),i=i(),N(),i),W={flex:"","h-screen":"","items-center":"","justify-between":"","bg-page_light":"","dark:bg-page_dark":""},X={"flex-1":"","h-screen":"","f-center":""},Y={src:z,alt:"dark",width:"800",height:"400"},Z={src:G,alt:"light",width:"800",height:"400"},ee={"flex-1":"","h-screen":"","f-center":"",relative:"","flex-col":""},se=T(()=>a("h3",{"tracking-7px":""},"海绵宝宝",-1)),te=b({__name:"login-view",setup(i){const{themeStore:r}=x();return(l,n)=>{const m=k("svg-icon");return E(),y("div",W,[a("section",X,[v(a("img",Y,null,512),[[w,t(r).isDark]]),v(a("img",Z,null,512),[[w,!t(r).isDark]])]),a("section",ee,[s(m,{name:"spongebob",size:"12"}),se,s(Q)]),s(t(U))])}}});const ue=j(te,[["__scopeId","data-v-aac96874"]]);export{ue as default};
