var A=Object.defineProperty,I=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var k=(t,e,n)=>e in t?A(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,g=(t,e)=>{for(var n in e||(e={}))H.call(e,n)&&k(t,n,e[n]);if(v)for(var n of v(e))_.call(e,n)&&k(t,n,e[n]);return t},N=(t,e)=>I(t,O(e));import{r as a,j as S,S as V,R as M,H as q,a as K,b as F}from"./vendor.45ad9980.js";const B=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};B();const C=(t,e,n=window)=>{a.exports.useEffect(()=>{if(n)return n.addEventListener(t,e),()=>{n&&n.removeEventListener(t,e)}},[e,t])},P=Array(10).fill(null).map((t,e)=>e).map(t=>t+""),J=(t,e,n,r)=>{const i=a.exports.useCallback(s=>{P.some(d=>s.key===d)&&t?t(+s.key):s.key==="Delete"&&e?e():s.key==="Enter"&&n?n():s.key==="Backspace"&&r&&r()},[]);C("keydown",i)},E={standard:"Standard",ussr:"USSR"},U=["standard","ussr"],Y=1,W=1120,X=21.33,$=100,G=t=>a.exports.useMemo(()=>Math.round(W-(t/$-Y)*X),[t]),Q=-.23703,Z=1001.46,ee=t=>a.exports.useMemo(()=>Math.round(Q*t+Z),[t]),te=(t,e)=>{const[n,r]=a.exports.useState(0),i=ee(e!=null?e:0),s=G(e!=null?e:0);return a.exports.useEffect(()=>{e===null&&r(0),t==="standard"&&r(i),t==="ussr"&&r(s)},[e,t,i,s]),a.exports.useEffect(()=>{console.log(i,s)},[i,s]),n},T={saveCurrent:"SAVE_CURRENT"},b="HISTORY_ENTRIES",se=t=>{const[e,n]=a.exports.useState(localStorage[b]?JSON.parse(localStorage[b]):[]),[r,i]=a.exports.useState("standard"),[s,l]=a.exports.useState(null),d=a.exports.useMemo(()=>s&&s.length>=3&&+s>100?+s:null,[s]),p=te(r,d),y=a.exports.useCallback(()=>{l(null)},[]),j=a.exports.useCallback(()=>{l(c=>{if(c&&c.length>1){const u=c.slice(0,-1);return+u>0?u:null}return null})},[]),R=a.exports.useCallback(c=>{l(u=>u?u+c:c!==0?c+"":null)},[]),w=a.exports.useCallback(c=>{n(u=>[c,...u])},[]);a.exports.useEffect(()=>{e.length&&localStorage.setItem(b,JSON.stringify(e))},[e]);const h=a.exports.useCallback((c,u,f)=>{c&&u&&f&&(w({distance:c,team:u,value:f}),y())},[]),D=a.exports.useCallback(c=>{var u;((u=c==null?void 0:c.target)==null?void 0:u.value)&&l(()=>(i(c.target.value),null))},[]);a.exports.useEffect(()=>{s!==null&&(+s>1600||s==="00")&&l(null)},[s]),a.exports.useEffect(()=>{const c=setTimeout(()=>{h(d,r,p)},2e3);return()=>{c&&clearTimeout(c)}},[d,r,p,h]);const L=a.exports.useCallback((c,u,f)=>()=>h(c,u,f),[]),z=a.exports.useCallback(()=>window.dispatchEvent(new CustomEvent(T.saveCurrent)),[]);return C(T.saveCurrent,L(d,r,p)),{distance:d,distanceNumbers:s,mil:p,addToDistance:R,changeTeam:D,resetDistance:y,addToHistory:w,history:e,dispatchSaveEvent:z,removeLastFromDistance:j}},ne=()=>{const t=a.exports.useCallback(()=>{let n=!1;return function(r){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4)))&&(n=!0)}(navigator.userAgent||navigator.vendor||window.opera),n},[]);return a.exports.useMemo(()=>t(),[])},o=S.exports.jsx,m=S.exports.jsxs,x=t=>{const e=ne(),n=a.exports.useCallback(()=>{t.onClick(t.value)},[t.value,t.onClick]),r=a.exports.useMemo(()=>e?{onTouchEnd:n}:{onPointerDown:n},[e]);return o("button",N(g({disabled:t.isDisabled,className:"w-full inline-flex justify-center items-center py-5 bg-gray-100 rounded-md font-semibold hover:bg-gray-300 pointer-events-auto disabled:pointer-events-none transition-all ease-in-out duration-150 disabled:brightness-50 outline-none focus:outline-none"},r),{children:o("span",{className:"pointer-events-none",children:t.value===-1?"Reset":t.value})}))},oe=20,ie=t=>{const e=t.history.length>0,n=t.history.length>10;return m("ul",{className:"relative isolate inline-flex justify-start items-start content-start flex-col p-2 gap-px rounded bg-gray-800 w-full overflow-hidden flex-1",children:[o("div",{className:`absolute inset-0 h-32 w-full mt-auto bg-gradient-to-b from-transparent to-gray-900 rounded pointer-events-none ${n?"opacity-100":"opacity-0"}`}),e?t.history.slice(0,oe).map(({distance:r,value:i,team:s},l)=>m("li",{className:"inline-grid grid-cols-3 w-full justify-stretch items-center bg-gray-100 text-xs rounded",children:[o("span",{className:"inline-flex justify-center items-center",children:E[s]}),m("span",{className:"inline-flex justify-between px-5 items-baseline bg-gray-500 text-gray-50 tabular-nums",children:[o("span",{className:"tabular-nums",children:r}),o("small",{className:"text-gray-100 tracking-wide",children:"m"})]}),m("span",{className:"inline-flex justify-between px-5 items-baseline bg-yellow-500 -mr-px rounded-r",children:[o("span",{className:"font-semibold tabular-nums",children:i}),o("small",{className:"text-gray-800 tracking-wide",children:"mil"})]})]},l)):o("span",{className:"text-gray-50 mx-auto text-xs font-semibold tracking-wide",children:"Jetzt loslegen und hier die Werte sehen"})]})},ae=t=>{var i,s;const e=se();J(e.addToDistance,e.resetDistance,e.dispatchSaveEvent,e.removeLastFromDistance);const n=U.map(l=>({value:l,label:E[l]})),r=a.exports.useMemo(()=>Array(9).fill(null).map((l,d)=>d+1).map(l=>o(x,{value:l,onClick:e.addToDistance},l)),[e.addToDistance]);return m("article",{className:"inline-grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto mt-12 select-none",children:[m("div",{className:"inline-flex flex-col p-2 bg-gray-800 rounded",children:[o("div",{className:"inline-flex mb-2 h-11 rounded-none bg-gray-100",children:o("select",{onChange:e.changeTeam,className:"w-full h-full p-1 py-2 rounded-none ",children:n.map(({value:l,label:d})=>o("option",{value:l,label:d,children:d},l))})}),m("div",{className:"inline-flex gap-1",children:[m("output",{className:"inline-flex justify-start items-baseline w-32 bg-gray-600 p-2 text-2xl text-gray-50 font-mono tabular-nums",children:[o("span",{children:(s=(i=e.distance)!=null?i:e.distanceNumbers)!=null?s:"0"}),o("small",{className:"tracking-tight text-sm ml-auto",children:"m"})]}),m("output",{className:"inline-flex justify-start items-baseline w-32 bg-yellow-500 p-2 text-2xl font-mono tabular-nums",children:[o("span",{children:e.distance&&+e.distance>100?e.mil:"0"}),o("small",{className:"tracking-tight text-sm ml-auto",children:"mil"})]})]}),o("div",{className:"inline-grid grid-cols-3 mt-2 gap-1",children:r}),m("div",{className:"inline-grid grid-cols-2 mt-1 gap-1",children:[o(x,{isDisabled:e.distanceNumbers===null||e.distanceNumbers.length<1||e.distanceNumbers.length>3,value:0,onClick:e.addToDistance}),o(x,{value:-1,onClick:e.resetDistance})]}),o("ul",{})]}),o(ie,{history:e.history})]})},re=t=>o("article",{}),le=()=>({}),ce="1.2.12",ue=()=>{const t=le();return m("main",{className:"w-full h-screen min-h-0 inline-flex flex-col antialiased grayscale-0 text-gray-800 overscroll-contain",children:[o("span",{className:"fixed bottom-3 left-3 text-xs text-gray-400 dark:text-gray-700",children:ce}),m(V,{children:[o(M,{path:"/",children:o(ae,g({},t))}),o(M,{path:"/settings",children:o(re,g({},t))})]})]})};function de(){return o(q,{children:o(ue,{})})}K.render(o(F.StrictMode,{children:o(de,{})}),document.getElementById("root"));
