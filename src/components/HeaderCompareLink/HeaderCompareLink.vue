<script setup>
import { useComparisonsStore } from '@/app/stores/modules/comparison';
import { defineProps,watch,ref } from 'vue';
import { ROUTES } from '@/app/router/helper';
import { storeToRefs } from 'pinia';


const comparisonsStore = useComparisonsStore();
const { comparisonCount } = storeToRefs(comparisonsStore);

const props = defineProps({
    active: {
        type: Boolean
    },
    count: {
        type: Boolean
    }
});
var korzina=localStorage.getItem("comparisons")?localStorage.getItem("comparisons"):[0,1]



const { active, count } = props;
</script>

<template>
    <RouterLink :to="ROUTES.compare" class="compare" :class="{ active }">
        <i v-if="count && comparisonCount">{{ comparisonCount }}</i>
        <svg v-if="korzina.length>2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.03305 3.44444H23L20.5556 12H6.34931M21.7778 16.8889H7.11111L4.66667 1H1M8.33333 21.7778C8.33333 22.4528 7.78612 23 7.11111 23C6.4361 23 5.88889 22.4528 5.88889 21.7778C5.88889 21.1027 6.4361 20.5556 7.11111 20.5556C7.78612 20.5556 8.33333 21.1027 8.33333 21.7778ZM21.7778 21.7778C21.7778 22.4528 21.2306 23 20.5556 23C19.8805 23 19.3333 22.4528 19.3333 21.7778C19.3333 21.1027 19.8805 20.5556 20.5556 20.5556C21.2306 20.5556 21.7778 21.1027 21.7778 21.7778Z"
                stroke="#EC2A00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <svg v-if="korzina.length==2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.03305 3.44444H23L20.5556 12H6.34931M21.7778 16.8889H7.11111L4.66667 1H1M8.33333 21.7778C8.33333 22.4528 7.78612 23 7.11111 23C6.4361 23 5.88889 22.4528 5.88889 21.7778C5.88889 21.1027 6.4361 20.5556 7.11111 20.5556C7.78612 20.5556 8.33333 21.1027 8.33333 21.7778ZM21.7778 21.7778C21.7778 22.4528 21.2306 23 20.5556 23C19.8805 23 19.3333 22.4528 19.3333 21.7778C19.3333 21.1027 19.8805 20.5556 20.5556 20.5556C21.2306 20.5556 21.7778 21.1027 21.7778 21.7778Z"
                stroke="#C1C1C1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </RouterLink></template>