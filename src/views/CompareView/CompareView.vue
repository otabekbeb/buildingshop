<script setup>
import Bradscubs from '@/components/Bradscubs/Bradscubs.vue';
import ProductCompareList from '@/components/ProductCompareList/ProductCompareList.vue';
import LayoutShort from '@/layout/LayoutShort/LayoutShort.vue';
import { ROUTES } from '@/app/router/helper';
const bradscubs = [
    {
        id: 1,
        link: ROUTES.main,
        name: 'Главная страница'
    },
    {
        id: 2,
        name: 'корзина',
        active: true
    }
];


    var korzina=localStorage.getItem("comparisons")?JSON.parse(localStorage.getItem("comparisons")).length:0
    
    var price=0

    if(localStorage.getItem("comparisons")){
        for (let i = 0; i < JSON.parse(localStorage.getItem("comparisons")).length; i++) {
            price+=JSON.parse(localStorage.getItem("comparisons"))[i].data.priceLess100000
        }
    }
    

const cleraLocalStorage=()=>{
    localStorage.removeItem("comparisons")
    window.location.reload()
}


</script>

<template>
    <LayoutShort>
        <div class="text_page compare">
            <div style="min-height: 500px;" class="container">
                <div class="text_page_top">
                    <h1>ваши заказанные <b>товары</b></h1>
                    <Bradscubs :bradscubs="bradscubs"></Bradscubs>
                </div>
                <ProductCompareList></ProductCompareList>
                <div class="korzina_tovar_big">
                    <div class="korzina_tovar_big_div">
                        <p class="korzina_tovar_big_div_text">В корзине <span>{{korzina?korzina:0}}</span> товаров</p>
                        <div class="korzina_tovar_big_div_price">
                            <h1>итого:</h1>
                            <h1>{{ price?price:0 }} ₽</h1>
                        </div>
                        <div class="korzina_tovar_big_div_btn">
                            <p>При нажатии на кнопку оформить заказ, будет сформирован весь нужный список товаров</p>
                            <button> <svg  viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.03305 3.44444H23L20.5556 12H6.34931M21.7778 16.8889H7.11111L4.66667 1H1M8.33333 21.7778C8.33333 22.4528 7.78612 23 7.11111 23C6.4361 23 5.88889 22.4528 5.88889 21.7778C5.88889 21.1027 6.4361 20.5556 7.11111 20.5556C7.78612 20.5556 8.33333 21.1027 8.33333 21.7778ZM21.7778 21.7778C21.7778 22.4528 21.2306 23 20.5556 23C19.8805 23 19.3333 22.4528 19.3333 21.7778C19.3333 21.1027 19.8805 20.5556 20.5556 20.5556C21.2306 20.5556 21.7778 21.1027 21.7778 21.7778Z"
                                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>ОФОРМИТЬ ЗАКАЗ</button>
                        </div>
                    </div>
                    <div @click="cleraLocalStorage()" class="korzina_tovar_big_div1">
                        <p>Очистить корзину</p>
                        <div class="korzina_tovar_big_div1_close">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                style="fill: white;transform: ;msFilter:;">
                                <path
                                    d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </LayoutShort>
</template>