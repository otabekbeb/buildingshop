import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export const useComparisonsStore = defineStore('comparison', () => {
    const comparisons = ref(
        JSON.parse(localStorage.getItem('comparisons')) ?? []
    );
    const comparisonCount = computed(() => comparisons?.value?.length ?? 0);

    const checkComparison = (id) => comparisons?.value?.findIndex(item => item.data.id === id) !== -1;

    const comparisonAdd = (comparison,salom) => {
       
var a1=true
console.log(comparisons.value);
        for (let i = 0; i < (comparisons.value).length; i++) {
                 if(comparisons.value[i].data.id==comparison.id){
                    console.log(comparisons.value[i].data,"navsiga2");
                    console.log(comparisons.value[i].data.countCart,"navsiga");
                    comparisons.value[i].data.countCart=comparisons.value[i].data.countCart+salom
                    a1=false
                 }   
        }

        if(a1){
            comparison.countCart=salom
const newComparsion = {
            data:comparison,
        }; 
        comparisons.value = [...comparisons.value, newComparsion];
        }

        // var a=[comparison]
        // for (let i = 0; i < a.length; i++) {
        //     a[i].countCart=salom
        // }
        

       
    };

    const comparisonRemove = id => {
        const index = comparisons.value?.findIndex(comparison => comparison.data.id === id);
        const oldComparisons = [...comparisons.value];
        oldComparisons.splice(index, 1);

        comparisons.value = oldComparisons;
    }

    watch(comparisons, () => {
        const comparisonsJson = JSON.stringify(comparisons.value);
        localStorage.setItem('comparisons', comparisonsJson);
    });

    return { comparisons, comparisonCount, checkComparison, comparisonAdd, comparisonRemove };
});