<script setup>
import { defineAsyncComponent } from 'vue';
import { useViewedsStore } from '@/app/stores/modules/viewed';
import { storeToRefs } from 'pinia';
import ProductButtonsDefault from '@/components/ProductButtonsDefault/ProductButtonsDefault.vue';
const ProductCart = defineAsyncComponent(() => import('@/components/ProductCart/ProductCart.vue'));

const viewedsStore = useViewedsStore();
const { vieweds } = storeToRefs(viewedsStore);
</script>

<template>
    <div class="last_catalog row">
        <h2>ВЫ <b>СМОТРЕЛИ</b></h2>
        <div class="last_catalog_list row">
            <ProductCart v-for="product in vieweds" @key="product.id" :product="product">
                <template v-slot:button-icons>
                    <ProductButtonsDefault :product="product" />
                </template>
            </ProductCart>
        </div>
    </div>
    <div class="pagination_div">
        <div class="pagination_div_orange">
            <h3>ПОКАЗАТЬ ЕЩЕ</h3>
        </div>
        <div class="pagination_div_number">
            <h4 style="color: #FF781F">1</h4>
            <h4>2</h4>
            <h4>3</h4>
            <h4>4</h4>
            <h4>5</h4>
            <h4>...</h4>
            <h4>15</h4>
        </div>
        <div class="pagination_div_paginations">
            <div class="pagination_pagination"></div>
            <div id="for_gray" class="pagination_pagination"></div>
        </div>
    </div>
</template>