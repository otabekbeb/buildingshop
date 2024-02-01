<script setup>
import { defineProps } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from "yup";
import { useApplicationStore } from '@/app/stores/modules/application';
import { useFavoritesStore } from '@/app/stores/modules/favorite';

const props = defineProps({
    closeModal: {
        type: Function
    }
});

const { favorites, favoriteClear } = useFavoritesStore();
const { applicationAsyncCreate } = useApplicationStore();

const schema = yup.object().shape({
    name: yup.string().required().min(2),
    phone: yup.string().required().min(8),
    email: yup.string().required().email(),
});

const onSubmit = async (values) => {
    // console.log({
    //     ...values,
    //     items: favorites?.map(item => {
    //         return {
    //             id: item.id,
    //             count: item.countCart
    //         }
    //     })
    // });
    
    var name1=document.querySelector('#name').value
    var nomer1=document.querySelector('#phone').value
    var check1=document.querySelector('.custom-checkbox').checked
    var check2=document.querySelector('#big_div_for_checkbox').checked
    console.log(check1)
if(name1.length>5 && nomer1.length>7 && check1.length>5 && check2){
    document.querySelector("#phone").style="border:1px solid #d65f10 !important" 
    document.querySelector("#date221").style="color:white !important" 
    document.querySelector("#name").style="border:1px solid #d65f10 !important" 
    document.querySelector("#big_div_for_checkbox").style = "display:none;"
    document.querySelector(".qora_for_check").style = "display:none;"
    document.querySelector("#phone").value=""
    document.querySelector("#name").value=""
    document.querySelector('.custom-checkbox').checked=false
    // document.querySelector('.qora_for_check').checked=false
    // document.querySelector('#big_div_for_checkbox').checked=false
    await applicationAsyncCreate({
        ...values,
        name:name1,
        phone:nomer1,
        items: favorites?.map(item => {
            return {
                id: item.id,
                count: item?.countCart ?? 1
            }
        })
    });
}else{
    if(!check2) {
        document.querySelector("#big_div_for_checkbox").style = "display:flex"
        document.querySelector(".qora_for_check").style = "display:flex;"
    }else {
        document.querySelector("#big_div_for_checkbox").style = "display:none;"
        document.querySelector(".qora_for_check").style = "display:none;"
    }

    if(!check1){
    document.querySelector("#date221").style="color:red !important" 
   
    }else{
    document.querySelector("#date221").style="color:white !important" 

    }
    if(name1.length<6){
 document.querySelector("#name").style="border:2px solid red !important"  
    }else{
       document.querySelector("#name").style="border:1px solid #d65f10 !important"   
    }
    if(nomer1.length<7){
 document.querySelector("#phone").style="border:2px solid red !important" 
    }else{
        document.querySelector("#phone").style="border:1px solid #d65f10 !important"  
    }
}



    if (typeof props.closeModal === 'function') props.closeModal();
};

    function close_for_check() {
        document.querySelector("#big_div_for_checkbox").style = "display:none;"
        document.querySelector(".qora_for_check").style = "display:none;"
    }
</script>

<style>
    .qora_for_check {
        display: none;
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(55, 55, 55, 0.84);
        z-index: 1000;
    }
    .big_div_for_checkbox_input {
        display: none;
        position: fixed;
        top: 40%;
        left: 40%;
        right: 30%;
        bottom: 50%;
    }

    .div_for_checkbox_input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        max-width: 300px;
        height: 116px;
        padding: 0 1rem;
        border-radius: 8px;
        background: #333;
        box-shadow: 0px 4px 13px 0px rgba(0, 0, 0, 0.22);
    }

    #close_for_check {
        position: absolute;
        top: 0;
        right: 10px;
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
        color: #FF781F;
    }

    .big_div_for_checkbox_input samp {
        font-size: 12px;
        line-height: 15px;
        font-weight: 700;
        color: #fff;
    }
</style>

<template>
    <Form method="post" @submit="onSubmit" :validation-schema="schema">
        <Field type="text" id="name" autocomplete="off"
         name="name" placeholder="Ваше имя" />
        <Field type="tel" id="phone" autocomplete="off" name="phone" required placeholder="Номер телефона" />
        <button class="form_button" @click="onSubmit" type="submit">отправить
            заявку</button>
        <div class="agreement" >
            <input type="checkbox" class="custom-checkbox" name="happy" >
            <label class="Sdd" for="happy"></label>
            <span id="date221">Нажимая на кнопку “отправить” вы даёте своё согласие на обработку персональных
                данных</span>
                <div class="qora_for_check">
                    <div id="big_div_for_checkbox" class="big_div_for_checkbox_input">
                        <div class="div_for_checkbox_input">
                            <p id="close_for_check" @click="close_for_check">x</p>
                            <samp>Требуется подтвердить согласие на обработку персональных данных.</samp>
                        </div>
                    </div>
                </div>
        </div>
    </form>
</template>