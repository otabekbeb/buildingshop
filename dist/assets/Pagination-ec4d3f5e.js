import{a as o,c as a,d as r,v as u,g as v,F as k,e as C,t as d}from"./index-9c88fb43.js";const y={class:"navigation row"},h={class:"col-8 col-sm-12"},p=r("span",null,"ПОКАЗАТЬ ЕЩЕ",-1),w=[p],x={class:"page_nav_wrap col-4 col-sm-12 row"},N={class:"page_nav"},$={key:0},b=["onClick"],B={key:1},F={key:4},D={__name:"Pagination",props:{currentPage:Number,totalPages:Number},emits:["more","page"],setup(t,{emit:i}){const c=t,f=(g,e)=>{const s=[];if(g<4)for(let n=2;n<6;n++)n!==e&&s.push(n);else if(e<g+4)for(let n=e-4;n<e;n++)n!==1&&s.push(n);else{const n=g-1;for(let l=n;l<n+4;l++)l!==1&&l!==e&&s.push(l)}return s},P=()=>{c.currentPage<2||i("page",c.currentPage-1)},m=()=>{c.currentPage>=c.totalPages||i("page",c.currentPage+1)};return(g,e)=>(o(),a("div",y,[r("div",h,[r("div",{onClick:e[0]||(e[0]=s=>i("more")),class:"nav_add"},w)]),r("div",x,[r("div",N,[t.currentPage==1?(o(),a("span",$,"1")):(o(),a("a",{key:1,onClick:e[1]||(e[1]=u(s=>i("page",1),["prevent"]))},"1")),t.currentPage-4>1?(o(),a("a",{key:2,onClick:e[2]||(e[2]=u(()=>{},["prevent"]))},"...")):v("",!0),(o(!0),a(k,null,C(f(t.currentPage,t.totalPages),s=>(o(),a(k,null,[s!=t.currentPage?(o(),a("a",{key:0,onClick:u(n=>i("page",s),["prevent"]),href:""},d(s),9,b)):(o(),a("span",B,d(s),1))],64))),256)),t.currentPage+4<t.totalPages?(o(),a("a",{key:3,onClick:e[3]||(e[3]=u(()=>{},["prevent"]))},"...")):v("",!0),t.currentPage==t.totalPages?(o(),a("span",F,d(t.totalPages),1)):(o(),a("a",{key:5,onClick:e[4]||(e[4]=u(s=>i("page",t.totalPages),["prevent"]))},d(t.totalPages),1))]),r("div",{class:"page_nav_str"},[r("div",{onClick:P,class:"prev"}),r("div",{onClick:m,class:"next"})])])]))}};export{D as _};