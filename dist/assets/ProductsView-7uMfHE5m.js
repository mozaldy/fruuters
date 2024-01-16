import{H as f}from"./Hero-vzlgMYqL.js";import{u as y}from"./index-mhHqwn3h.js";import{_ as C,R as v,p as w,e as S,f as b,g as k,r as l,o as r,c as a,a as d,d as s,m as x,y as P,F as u,h as p,t as n,w as I,i as L,n as R,q as V}from"./index-f0069yrR.js";const H={components:{RouterLink:v,Hero:f},data(){return{products:y(w),categories:[],selectedCategory:""}},computed:{filteredProducts(){return this.selectedCategory?this.products.filter(e=>e.categories&&e.categories.some(o=>o.name===this.selectedCategory)):this.products}},async created(){const e=this.$route.query.category;e&&(this.selectedCategory=e),await this.fetchCategories()},methods:{async fetchCategories(){const e=S(b,"product_categories"),o=await k(e);this.categories=o.docs.map(c=>({id:c.id,name:c.data().name}))}}},m=e=>(R("data-v-dce5a90e"),e=e(),V(),e),q={class:"container mt-5"},B={class:"mb-3"},D=m(()=>s("label",{for:"categorySelect"},"Filter by Category:",-1)),F=m(()=>s("option",{value:""},"All Categories",-1)),N=["value"],A={class:"list-group rounded-5"},M=["src"],$={class:"h5 fw-bold col-4"},j={class:"h5 col-1"};function E(e,o,c,T,i,_){const g=l("Hero"),h=l("RouterLink");return r(),a("div",null,[d(g,{text1:"All Products"}),s("div",q,[s("div",B,[D,x(s("select",{"onUpdate:modelValue":o[0]||(o[0]=t=>i.selectedCategory=t),onChange:o[1]||(o[1]=(...t)=>e.filterProducts&&e.filterProducts(...t)),id:"categorySelect"},[F,(r(!0),a(u,null,p(i.categories,t=>(r(),a("option",{key:t.id,value:t.id},n(t.name),9,N))),128))],544),[[P,i.selectedCategory]])]),s("ul",A,[(r(!0),a(u,null,p(_.filteredProducts,t=>(r(),a("li",{key:t.id,class:"list-group-item justify-content-evenly py-0 d-flex flex-wrap align-items-center"},[s("img",{src:t.img_url,class:"my-2 rounded-5 col-2",alt:""},null,8,M),s("span",$,n(t.title),1),s("div",j,"$"+n(t.price),1),d(h,{to:{name:"product",params:{productId:t.id}},class:"col-md-2 btn btn-primary"},{default:I(()=>[L(" Learn More ")]),_:2},1032,["to"])]))),128))])])])}const J=C(H,[["render",E],["__scopeId","data-v-dce5a90e"]]);export{J as default};