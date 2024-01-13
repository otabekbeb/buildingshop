<script setup>
import { useComparisonsStore } from '@/app/stores/modules/comparison';
import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
const ProductCompare = defineAsyncComponent(() => import('@/components/ProductCompare/ProductCompare.vue'));
const comparisonsStore = useComparisonsStore();
const { comparisons, comparisonCount } = storeToRefs(comparisonsStore);
</script>

<template>
    <div v-if="comparisonCount > 0" class="compare_list row">
        <div style="position: relative;" v-for="(comparison,index) in comparisons" @key="comparison?.data?.id">
            <div @click="compareRemove(index)" class="compare_close">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"
                    style="fill: white;transform: ;msFilter:;">
                    <path
                        d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                    </path>
                </svg>
            </div>
        <ProductCompare :product="comparison"></ProductCompare>
    </div>
</div></template>

<script>
function compareRemove(id){
    var a=[]
    a=JSON.stringify(localStorage.getItem("comparisons"))
    a.splice(1,1)
}
</script>