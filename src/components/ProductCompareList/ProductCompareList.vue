<script setup>
import { useComparisonsStore } from '@/app/stores/modules/comparison';
import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
const ProductCompare = defineAsyncComponent(() => import('@/components/ProductCompare/ProductCompare.vue'));
const comparisonsStore = useComparisonsStore();
const { comparisons, comparisonCount } = storeToRefs(comparisonsStore);
const { comparisonRemove } = useComparisonsStore();
</script>

<template>
    <div v-if="comparisonCount > 0" style="gap: 1.4vw; justify-content: center;flex-direction: row;" class="compare_list row">
        <div class="for_comparisonCount" style="position: relative;" v-for="comparison in comparisons" @key="comparison?.data?.id">
            <div @click="comparisonRemove(comparison?.data?.id)" class="compare_close">
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
