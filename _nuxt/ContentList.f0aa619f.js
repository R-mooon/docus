import c from"./ContentQuery.f2a06e6b.js";import{c as n,ac as h,h as p}from"./runtime-core.esm-bundler.fd6e27b4.js";import"./index.983a7e2f.js";import"./asyncData.b7ba831d.js";import"./entry.e71db693.js";import"./DocsAsideTree.f1e55fb6.js";import"./cookie.e27c412f.js";import"./Container.2db332ff.js";import"./query.c3f7607a.js";const N=n({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(u){const t=h(),{path:f,query:a}=u,m={...a||{},path:f||(a==null?void 0:a.path)||"/"},r=(e,o)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:e,data:o},null,2));return p(c,m,{default:t!=null&&t.default?({data:e,refresh:o,isPartial:d})=>t==null?void 0:t.default({list:e,refresh:o,isPartial:d,...this.$attrs}):({data:e})=>r("default",e),empty:e=>t!=null&&t.empty?t.empty(e):r("default",e==null?void 0:e.data),"not-found":e=>{var o;return t!=null&&t["not-found"]?(o=t==null?void 0:t["not-found"])==null?void 0:o.call(t,e):r("not-found",e==null?void 0:e.data)}})}});export{N as default};
