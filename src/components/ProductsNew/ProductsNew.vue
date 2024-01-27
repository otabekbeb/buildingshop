<script setup>
import { defineAsyncComponent, onMounted } from "vue";
import { useNewProductsStore } from "@/app/stores/modules/newProduct";
import { storeToRefs } from "pinia";
import { ROUTES } from "@/app/router/helper";
import ProductButtonsDefault from "@/components/ProductButtonsDefault/ProductButtonsDefault.vue";
const ProductCart = defineAsyncComponent(() =>
  import("@/components/ProductCart/ProductCart.vue")
);

const newProductStore = useNewProductsStore();
const { newProductAsyncGet } = newProductStore;
const { newProducts } = storeToRefs(newProductStore);

onMounted(() => {
  newProductAsyncGet();
});
</script>

<template>
  <div  class="new_product">
    <div class="new_product_top_while">
      <div class="container">
        <div class="title_products row">
          <h2><b>НОВИНКИ</b></h2>
          <div class="title_products_all_wrap">
            <a href="" class="title_products_all">все новинки</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div
        style="gap: 1.4vw; justify-content: center;flex-direction: row;"
        class="products_list row"
       
      >
        <ProductCart
          v-for="(product, index) in (newProducts.items?newProducts.items:[]).slice(0,3)"
          @key="product.id"
        
          :product="product"
        >
          <template v-slot:button-icons >
            <ProductButtonsDefault :product="product" />
          </template>
        </ProductCart>
        
        <RouterLink
          :to="ROUTES.catalog + '/new'"
          class="banner_to_catalog"
        ></RouterLink>

           <ProductCart
          v-for="(product, index) in (newProducts.items?newProducts.items:[]).slice(3)"
         
          @key="product.id"
          
          :product="product"
        >
          <template v-slot:button-icons>
            <ProductButtonsDefault :product="product" />
          </template>
        </ProductCart>
      </div>
    </div>
  </div>
</template>
