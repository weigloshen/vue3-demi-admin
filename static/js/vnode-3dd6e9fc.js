import{ae as n,aL as r,F as o,b2 as u}from"./index-f8fc1903.js";var L=(E=>(E[E.TEXT=1]="TEXT",E[E.CLASS=2]="CLASS",E[E.STYLE=4]="STYLE",E[E.PROPS=8]="PROPS",E[E.FULL_PROPS=16]="FULL_PROPS",E[E.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",E[E.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",E[E.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",E[E.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",E[E.NEED_PATCH=512]="NEED_PATCH",E[E.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",E[E.HOISTED=-1]="HOISTED",E[E.BAIL=-2]="BAIL",E))(L||{});function _(E){return r(E)&&E.type===o}function D(E){return r(E)&&E.type===u}function m(E){return r(E)&&!_(E)&&!D(E)}const S=E=>{const N=n(E)?E:[E],T=[];return N.forEach(e=>{var A;n(e)?T.push(...S(e)):r(e)&&n(e.children)?T.push(...S(e.children)):(T.push(e),r(e)&&((A=e.component)!=null&&A.subTree)&&T.push(...S(e.component.subTree)))}),T};export{L as P,m as a,S as f,_ as i};
