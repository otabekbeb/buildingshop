import{_ as w,a as x}from"./LayoutDefault-2ba72251.js";import{_ as y}from"./Bradscubs-9edac3c7.js";import{_ as R,a as V}from"./ProductsViewed-84fcb740.js";import $ from"./Partners-f052888b.js";import{n as B,r as N,a as e,j as f,w as g,d as t,b as o,t as h,u as s,c as v,F as S,e as L,g as E,R as F,f as I}from"./index-1e78f834.js";import{u as K}from"./Search-1728f339.js";import"./banner_to_catalog-e48b9ec9.js";import"./category-icons-2153fbee.js";import"./ProductButtonsDefault-ccab0d00.js";import"./Pagination-ac591486.js";import"./viewed-75057c3a.js";const P={class:"text_page fav catalog"},T={class:"container row"},j={class:"col-9 col-sm-12"},D={class:"text_page_top"},O={key:0,class:"subsection row"},U={class:"catalog_b_inf"},W={class:"container row"},q=t("div",{class:"col-3 col-sm-12"},null,-1),z={class:"col-9 col-sm-12"},rs={__name:"CatalogView",setup(A){const a=B(),b=K(),{currentCategory:r,currentCategoryWithPath:C}=b;return(G,H)=>{const k=N("RouterLink");return e(),f(w,null,{default:g(()=>{var i,n,_,l,m,d,u,p;return[t("div",P,[t("div",T,[o(x),t("div",j,[t("div",D,[t("h1",null,h((n=s(r)((i=s(a).params)==null?void 0:i.id))==null?void 0:n.name),1),o(y,{bradscubs:s(C)((_=s(a).params)==null?void 0:_.id)},null,8,["bradscubs"])]),(m=s(r)((l=s(a).params)==null?void 0:l.id))!=null&&m.subCategories?(e(),v("div",O,[(e(!0),v(S,null,L((u=s(r)((d=s(a).params)==null?void 0:d.id))==null?void 0:u.subCategories,c=>(e(),f(k,{onKey:c.id,class:"subsection_item",to:s(F).catalog+"/"+c.id},{default:g(()=>[I(h(c.name),1)]),_:2},1032,["onKey","to"]))),256))])):E("",!0),o(R,{catalogId:(p=s(a).params)==null?void 0:p.id},null,8,["catalogId"])])])]),t("div",U,[t("div",W,[q,t("div",z,[o(V)])])]),o($)]}),_:1})}}};export{rs as default};
