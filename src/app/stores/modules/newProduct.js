import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { BACKEND_URL, BACKEND_URL_API_PRODUCT } from "../helper";

export const useNewProductsStore = defineStore('newProduct', () => {
    const newProducts = ref([
        {
            id: 1,
            image: '/images/catalog/product/Group 9042642 — копия.png',
            name: 'Пила торцовочная электрическая КМ MS-1401/210 (680152) 1400 Вт',
            price: 7400,
            count: 100,
            weight: 0.009,
            voltage: 67
        }
    ]);

    const newProductAsyncGet = async () => {
        // return;

        return axios.get(BACKEND_URL_API_PRODUCT + '/new').
            then(res => {
                newProducts.value = res.data;
            })
    }

    return { newProducts, newProductAsyncGet };
});