import{f as c}from"./DocsAsideTree.f1e55fb6.js";import{c as g,ac as h,e as m,h as a,g as y}from"./runtime-core.esm-bundler.fd6e27b4.js";import"./index.983a7e2f.js";import"./cookie.e27c412f.js";import"./Container.2db332ff.js";const _=g({name:"ContentSlot",functional:!0,props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(e){const{parent:l}=y(),{between:s,default:i}=h(),u=m(()=>typeof e.unwrap=="string"?e.unwrap.split(" "):["*"]);return{fallbackSlot:i,tags:u,between:s,parent:l}},render({use:e,unwrap:l,fallbackSlot:s,between:i,tags:u,parent:n}){var f;try{let o=e;if(typeof e=="string"&&(o=(n==null?void 0:n.slots[e])||((f=n==null?void 0:n.parent)==null?void 0:f.slots[e]),console.warn(`Please set :use="$slots.${e}" in <ContentSlot> component to enable reactivity`)),!o)return s?s():a("div");if(!l)return[o()];const{flatUnwrap:d}=c(),p=d(o(),u);return i?p.flatMap((t,r)=>r===0?[t]:[i(),t]):p.reduce((t,r)=>(typeof r.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=r.children:t.push(r.children):t.push(r),t),[])}catch{return a("div")}}});export{_ as default};