import{_ as v}from"./Bradscubs-17201c55.js";import{s as p,a,c as i,F as h,e as $,j as l,w as d,b as o,u as n,m as C,_ as b,d as s,i as k,g as w,f as m,R as x}from"./index-9c88fb43.js";import{j as f,M as g,e as F}from"./Search-f8152317.js";import{_ as V}from"./ProductButtonsDefault-fdb43dae.js";import{_ as M,a as y}from"./LayoutDefault-d26bda42.js";import{_ as B}from"./Pagination-ec4d3f5e.js";import"./banner_to_catalog-e48b9ec9.js";import"./category-icons-2153fbee.js";const E={class:"catalog_list row"},N={__name:"ProductsFavorite",setup(u){const e=C(()=>b(()=>import("./ProductCart-3de329f8.js"),["assets/ProductCart-3de329f8.js","assets/index-9c88fb43.js","assets/index-5662c288.css","assets/Search-f8152317.js","assets/Search-1c6c14f8.css"])),t=f(),{favorites:_}=p(t);return(c,H)=>(a(),i("div",E,[(a(!0),i(h,null,$(n(_),r=>(a(),l(n(e),{onKey:r.id,product:r},{"button-icons":d(()=>[o(V,{product:r},null,8,["product"])]),_:2},1032,["onKey","product"]))),256))]))}},P=s("span",null,"Очистить избранное",-1),R=s("div",{class:"icon"},null,-1),T=[P,R],S={__name:"ClearFavorite",setup(u){const{favoriteClear:e}=f();return(t,_)=>(a(),i("div",{class:"clear_fav row",onClick:_[0]||(_[0]=(...c)=>n(e)&&n(e)(...c))},T))}},j={class:"text_page fav catalog"},A={class:"container row"},K={class:"col-9 col-sm-12"},L={class:"text_page_top"},O=s("h1",null,[m("Избранные "),s("b",null,"товары"),m(" / ваши заказанные "),s("b",null,"товары")],-1),D={class:"catalog_list row"},I={class:"fav_info_text row"},U={class:"col-8 col-sm-12 row"},q=s("p",null,"При нажатии на кнопку ОТПРАВИТЬ ЗАЯВКАУ, будет сформирован весь нужный список указанный в избранном",-1),z=s("div",{class:"btn"},"ОТПРАВИТЬ ЗАЯВКУ",-1),G=[z],os={__name:"FavoriteView",setup(u){const e=[{id:1,link:x.main,name:"Главная страница"},{id:2,name:"ИЗБРАННЫЕ ТОВАРЫ",active:!0}],t=k(!1);return(_,c)=>(a(),l(M,null,{default:d(()=>[s("div",j,[s("div",A,[o(y),s("div",K,[s("div",L,[O,o(v,{bradscubs:e})]),s("div",D,[o(N)]),s("div",I,[s("div",U,[o(S),q]),s("div",{class:"col-4 col-sm-12",onClick:c[0]||(c[0]=()=>t.value=!0)},G)]),o(B)])])]),t.value?(a(),l(g,{key:0,outClick:()=>t.value=!1},{default:d(()=>[o(F,{closeModal:()=>t.value=!1},null,8,["closeModal"])]),_:1},8,["outClick"])):w("",!0)]),_:1}))}};export{os as default};