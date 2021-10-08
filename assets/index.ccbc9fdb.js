var O=Object.defineProperty;var w=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var v=(t,e,r)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,g=(t,e)=>{for(var r in e||(e={}))A.call(e,r)&&v(t,r,e[r]);if(w)for(var r of w(e))I.call(e,r)&&v(t,r,e[r]);return t};import{r as a,j as S,S as H,R as k,H as V,a as K,b as _}from"./vendor.45ad9980.js";const B=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))c(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function r(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerpolicy&&(s.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?s.credentials="include":l.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(l){if(l.ep)return;l.ep=!0;const s=r(l);fetch(l.href,s)}};B();const C=(t,e,r=window)=>{a.exports.useEffect(()=>{if(r)return r.addEventListener(t,e),()=>{r&&r.removeEventListener(t,e)}},[e,t])},F=Array(10).fill(null).map((t,e)=>e).map(t=>t+""),P=(t,e,r,c)=>{const l=a.exports.useCallback(s=>{F.some(d=>s.key===d)&&t?t(+s.key):s.key==="Delete"&&e?e():s.key==="Enter"&&r?r():s.key==="Backspace"&&c&&c()},[]);C("keydown",l)},E={standard:"Standard",ussr:"USSR"},J=["standard","ussr"],U=1,Y=1120,q=21.33,z=100,W=t=>a.exports.useMemo(()=>Math.round(Y-(t/z-U)*q),[t]),X=-.23703,$=1001.46,G=t=>a.exports.useMemo(()=>Math.round(X*t+$),[t]),Q=(t,e)=>{const[r,c]=a.exports.useState(0),l=G(e!=null?e:0),s=W(e!=null?e:0);return a.exports.useEffect(()=>{e===null&&c(0),t==="standard"&&c(l),t==="ussr"&&c(s)},[e,t,l,s]),a.exports.useEffect(()=>{console.log(l,s)},[l,s]),r},T={saveCurrent:"SAVE_CURRENT"},x="HISTORY_ENTRIES",Z=t=>{const[e,r]=a.exports.useState(localStorage[x]?JSON.parse(localStorage[x]):[]),[c,l]=a.exports.useState("standard"),[s,o]=a.exports.useState(null),d=a.exports.useMemo(()=>s&&s.length>=3&&+s>100?+s:null,[s]),f=Q(c,d),b=a.exports.useCallback(()=>{o(null)},[]),M=a.exports.useCallback(()=>{o(i=>{if(i&&i.length>1){const u=i.slice(0,-1);return+u>0?u:null}return null})},[]),R=a.exports.useCallback(i=>{o(u=>u?u+i:i!==0?i+"":null)},[]),N=a.exports.useCallback(i=>{r(u=>[i,...u])},[]);a.exports.useEffect(()=>{e.length&&localStorage.setItem(x,JSON.stringify(e))},[e]);const p=a.exports.useCallback((i,u,h)=>{i&&u&&h&&(N({distance:i,team:u,value:h}),b())},[]),j=a.exports.useCallback(i=>{var u;((u=i==null?void 0:i.target)==null?void 0:u.value)&&o(()=>(l(i.target.value),null))},[]);a.exports.useEffect(()=>{s!==null&&(+s>1600||s==="00")&&o(null)},[s]),a.exports.useEffect(()=>{const i=setTimeout(()=>{p(d,c,f)},2e3);return()=>{i&&clearTimeout(i)}},[d,c,f,p]);const D=a.exports.useCallback((i,u,h)=>()=>p(i,u,h),[]),L=a.exports.useCallback(()=>window.dispatchEvent(new CustomEvent(T.saveCurrent)),[]);return C(T.saveCurrent,D(d,c,f)),{distance:d,distanceNumbers:s,mil:f,addToDistance:R,changeTeam:j,resetDistance:b,addToHistory:N,history:e,dispatchSaveEvent:L,removeLastFromDistance:M}},n=S.exports.jsx,m=S.exports.jsxs,y=t=>{const e=a.exports.useCallback(()=>{t.onClick(t.value)},[t.value,t.onClick]);return n("button",{disabled:t.isDisabled,className:"w-full inline-flex justify-center items-center py-5 bg-gray-100 rounded-md font-semibold hover:bg-gray-300 pointer-events-auto disabled:pointer-events-none transition-all ease-in-out duration-150 disabled:brightness-50 outline-none focus:outline-none",onPointerDown:e,children:n("span",{className:"pointer-events-none",children:t.value===-1?"Reset":t.value})})},ee=20,te=t=>{const e=t.history.length>0,r=t.history.length>10;return m("ul",{className:"relative isolate inline-flex justify-start items-start content-start flex-col p-2 gap-px rounded bg-gray-800 w-full overflow-hidden flex-1",children:[n("div",{className:`absolute inset-0 h-32 w-full mt-auto bg-gradient-to-b from-transparent to-gray-900 rounded pointer-events-none ${r?"opacity-100":"opacity-0"}`}),e?t.history.slice(0,ee).map(({distance:c,value:l,team:s},o)=>m("li",{className:"inline-grid grid-cols-3 w-full justify-stretch items-center bg-gray-100 text-xs rounded",children:[n("span",{className:"inline-flex justify-center items-center",children:E[s]}),m("span",{className:"inline-flex justify-between px-5 items-baseline bg-gray-500 text-gray-50 tabular-nums",children:[n("span",{className:"tabular-nums",children:c}),n("small",{className:"text-gray-100 tracking-wide",children:"m"})]}),m("span",{className:"inline-flex justify-between px-5 items-baseline bg-yellow-500 -mr-px rounded-r",children:[n("span",{className:"font-semibold tabular-nums",children:l}),n("small",{className:"text-gray-800 tracking-wide",children:"mil"})]})]},o)):n("span",{className:"text-gray-50 mx-auto text-xs font-semibold tracking-wide",children:"Jetzt loslegen und hier die Werte sehen"})]})},se=t=>{var l,s;const e=Z();P(e.addToDistance,e.resetDistance,e.dispatchSaveEvent,e.removeLastFromDistance);const r=J.map(o=>({value:o,label:E[o]})),c=a.exports.useMemo(()=>Array(9).fill(null).map((o,d)=>d+1).map(o=>n(y,{value:o,onClick:e.addToDistance},o)),[e.addToDistance]);return m("article",{className:"inline-grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto mt-12 select-none",children:[m("div",{className:"inline-flex flex-col p-2 bg-gray-800 rounded",children:[n("div",{className:"inline-flex mb-2 h-11 rounded-none bg-gray-100",children:n("select",{onChange:e.changeTeam,className:"w-full h-full p-1 py-2 rounded-none ",children:r.map(({value:o,label:d})=>n("option",{value:o,label:d,children:d},o))})}),m("div",{className:"inline-flex gap-1",children:[m("output",{className:"inline-flex justify-start items-baseline w-32 bg-gray-600 p-2 text-2xl text-gray-50 font-mono tabular-nums",children:[n("span",{children:(s=(l=e.distance)!=null?l:e.distanceNumbers)!=null?s:"0"}),n("small",{className:"tracking-tight text-sm ml-auto",children:"m"})]}),m("output",{className:"inline-flex justify-start items-baseline w-32 bg-yellow-500 p-2 text-2xl font-mono tabular-nums",children:[n("span",{children:e.distance&&+e.distance>100?e.mil:"0"}),n("small",{className:"tracking-tight text-sm ml-auto",children:"mil"})]})]}),n("div",{className:"inline-grid grid-cols-3 mt-2 gap-1",children:c}),m("div",{className:"inline-grid grid-cols-2 mt-1 gap-1",children:[n(y,{isDisabled:e.distanceNumbers===null||e.distanceNumbers.length<1,value:0,onClick:e.addToDistance}),n(y,{value:-1,onClick:e.resetDistance})]}),n("ul",{})]}),n(te,{history:e.history})]})},ne=t=>n("article",{}),le=()=>({}),re=()=>{const t=le();return n("main",{className:"w-full h-screen min-h-0 inline-flex flex-col antialiased grayscale-0 text-gray-800 overscroll-contain",children:m(H,{children:[n(k,{path:"/",children:n(se,g({},t))}),n(k,{path:"/settings",children:n(ne,g({},t))})]})})};function ae(){return n(V,{children:n(re,{})})}K.render(n(_.StrictMode,{children:n(ae,{})}),document.getElementById("root"));
