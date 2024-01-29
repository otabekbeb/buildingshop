<script setup>
import Bradscubs from '@/components/Bradscubs/Bradscubs.vue';
import ProductCompareList from '@/components/ProductCompareList/ProductCompareList.vue';
import LayoutShort from '@/layout/LayoutShort/LayoutShort.vue';
import { ROUTES } from '@/app/router/helper';
import axios from 'axios';
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
    setInterval(()=>{
    var price=0
    
     var data_g=JSON.parse(localStorage.getItem("comparisons"))
     if(localStorage.getItem("comparisons")){
        for (let i = 0; i < data_g.length; i++) {
            price+=data_g[i].data.priceLess100000*data_g[i].data.countCart
        }
    }
    document.querySelector('#preice1').innerHTML=`${price} ₽`
    document.querySelector('#karzinca').innerHTML=`${data_g.length}`
    },1000)

const cleraLocalStorage=()=>{
    localStorage.removeItem("comparisons")
    window.location.reload()
}
const OpenModal=()=>{
    document.querySelector(".modal_korzina").style="display:flex;"
}
const CloseModal=()=>{
    document.querySelector(".modal_korzina").style="display:none;"
}




const PostKorzina=()=>{
     if(document.querySelector("#name").value==""){
        document.querySelector("#name").style="border:1px solid red;"
        document.querySelectorAll(".input_error")[0].innerHTML="Заполните это место ?"
     }else{
        document.querySelectorAll(".input_error")[0].innerHTML=""
        document.querySelector("#name").style="border:1px solid #FF781F;"
     }

     if(document.querySelector("#phone_number").value==""){
        document.querySelector("#phone_number").style="border:1px solid red;"
        document.querySelectorAll(".input_error")[1].innerHTML="Заполните это место ?"
     }else{
        document.querySelectorAll(".input_error")[1].innerHTML=""
        document.querySelector("#phone_number").style="border:1px solid #FF781F;"
     }

     if(document.querySelector("#email").value==""){
        document.querySelector("#email").style="border:1px solid red;"
        document.querySelectorAll(".input_error")[2].innerHTML="Заполните это место ?"
     }else{
        document.querySelectorAll(".input_error")[2].innerHTML=""
        document.querySelector("#email").style="border:1px solid #FF781F;"
     }

     if(document.querySelector("#description").value==""){
        document.querySelector("#description").style="border:1px solid red;"
        document.querySelectorAll(".input_error")[3].innerHTML="Заполните это место ?"
     }else{
        document.querySelectorAll(".input_error")[3].innerHTML=""
        document.querySelector("#description").style="border:1px solid #FF781F;"
     }

     if(!document.querySelector("#checked_input").checked){
        document.querySelector(".modal_korzina_div_form_div_check p").style="color:red;"
     }else{
        document.querySelector(".modal_korzina_div_form_div_check p").style="color:#999999;"
     }

     if(document.querySelector("#name").value!="" && document.querySelector("#phone_number").value!="" && document.querySelector("#email").value!="" && document.querySelector("#description").value!="" && document.querySelector("#checked_input").checked!=""){
        var data=JSON.parse(localStorage.getItem("comparisons"))
    var data1=[]
    for (let i = 0; i < data.length; i++) {
        data1.push({
            id:data[i].data.id,
            count:data[i].data.countCart
        })
    }
    
    var formdata={
        "name":document.querySelector("#name").value,
        "phone":document.querySelector("#phone_number").value,
        "email":document.querySelector("#email").value,
        "description":document.querySelector("#description").value,
        "items":data1,
    }

    axios.post('http://45.151.144.81:8001/api/order/submit',formdata).then(res=>{
        document.querySelector(".modal_buyurtma").style="display:flex;"
        document.querySelector(".modal_korzina").style="display:none;"
    }).catch(err=>{
        alert("no")
    })
     }
}

const CloseModal1=()=>{
        document.querySelector(".modal_buyurtma").style="display:none;"
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
                        <p class="korzina_tovar_big_div_text">В корзине <span id="karzinca" >{{korzina?korzina:0}}</span> товаров</p>
                        <div class="korzina_tovar_big_div_price">
                            <h1>итого:</h1>
                            <h1 id="preice1">{{ price?price:0 }} ₽</h1>
                        </div>
                        <div class="korzina_tovar_big_div_btn">
                            <p>При нажатии на кнопку оформить заказ, будет сформирован весь нужный список товаров</p>
                            <button @click="OpenModal()"> <svg  viewBox="0 0 24 24" fill="none"
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
        <div class="modal_korzina">
            <div class="modal_korzina_div">
                <div class="modal_korzina_div_img_fon">
                    <img src="./image/Слой_x0020_1.svg" alt="">
                </div>
                <div class="modal_korzina_div_form">
                    <div @click="CloseModal()" class="modal_korzina_div_form_close">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                style="fill: #939393;transform: ;msFilter:;">
                                <path
                                    d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z">
                                </path>
                            </svg>
                    </div>
                    <div class="modal_korzina_div_form_div">
                        <label for="">
                        <input id="name" placeholder="Ваше имя" type="text">
                        <p class="input_error"></p>
                        </label>
                        <label for="">
                        <input id="phone_number" placeholder="Номер телефона" type="text">
                        <p class="input_error"></p>
                        </label>
                        <label for="">
                        <input id="email" placeholder="Электронная почта" type="text">
                        <p class="input_error"></p>
                        </label>
                        <label for="">
                        <input id="description" placeholder="Место доставки" type="text">
                        <p class="input_error"></p>
                        </label>
                        <div class="modal_korzina_div_form_div_check">
                            <input id="checked_input" type="checkbox">
                            <p>Нажимая на кнопку “отправить” вы даёте своё согласие на обработку персональных данных</p>
                        </div>
                        <button @click="PostKorzina()"><svg  viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.03305 3.44444H23L20.5556 12H6.34931M21.7778 16.8889H7.11111L4.66667 1H1M8.33333 21.7778C8.33333 22.4528 7.78612 23 7.11111 23C6.4361 23 5.88889 22.4528 5.88889 21.7778C5.88889 21.1027 6.4361 20.5556 7.11111 20.5556C7.78612 20.5556 8.33333 21.1027 8.33333 21.7778ZM21.7778 21.7778C21.7778 22.4528 21.2306 23 20.5556 23C19.8805 23 19.3333 22.4528 19.3333 21.7778C19.3333 21.1027 19.8805 20.5556 20.5556 20.5556C21.2306 20.5556 21.7778 21.1027 21.7778 21.7778Z"
                                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>Оформить заказ</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal_buyurtma">
            <div class="modal_buyurtma_div">
                <div @click="CloseModal1()" class="modal_buyurtma_div_close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: black;transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                </div>
                <p>Ваше сообщение успешно отправлено! <br>
Вы получите ответ в ближайшее время</p>
            </div>
        </div>
    </LayoutShort>
</template>