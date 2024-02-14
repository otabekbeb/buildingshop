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
    
    var i=0
    var a=document.querySelector("body").clientWidth 
    console.log(a)
    if(a<=991 && window.location.pathname=="/" ){
    i=1
    }else{
    i=0
    }
    
    var name1=document.querySelectorAll('#name')[i].value
    var nomer1=document.querySelectorAll('#phone')[i].value
    var check1=document.querySelectorAll('.custom-checkbox')[i].checked
    var check2=document.querySelectorAll('#big_div_for_checkbox')[i].checked

if(name1.length>5 && nomer1.length>7 && check1){
    document.querySelectorAll("#phone")[i].style="border:1px solid #d65f10 !important" 
     document.querySelectorAll(".qora_for_check2")[i].style = "display:flex;";
     
    document.querySelectorAll("#date221")[i].style="color:white !important" 
    document.querySelectorAll("#name")[i].style="border:1px solid #d65f10 !important" 
    document.querySelectorAll("#big_div_for_checkbox")[i].style = "display:none;"
    document.querySelectorAll(".qora_for_check")[i].style = "display:none;"
    document.querySelectorAll("#phone")[i].value=""
    document.querySelectorAll("#name")[i].value=""
    document.querySelectorAll('.custom-checkbox')[i].checked=false
    // document.querySelectorAll('.qora_for_check')[i].checked=false
    // document.querySelectorAll('#big_div_for_checkbox')[i].checked=false
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
    if(!check1){
        document.querySelectorAll("#big_div_for_checkbox")[i].style = "display:flex"
        document.querySelectorAll(".qora_for_check")[i].style = "display:flex;"
        document.querySelectorAll("#date221")[i].style="color:red !important"      
    }else{
        document.querySelectorAll("#big_div_for_checkbox")[i].style = "display:none;"
        document.querySelectorAll(".qora_for_check")[i].style = "display:none;"
        document.querySelectorAll("#date221")[i].style="color:white !important" 
    }

    if(name1.length<6){
        document.querySelectorAll("#big_div_for_nameinputs")[i].style = "display:flex"
        document.querySelectorAll("#name")[i].style="border:2px solid red !important"  
    }else{
        document.querySelectorAll("#name")[i].style="border:1px solid #d65f10 !important"
        document.querySelectorAll("#big_div_for_nameinputs")[i].style = "display:none;"
        
    }

    if(nomer1.length<7){
        document.querySelectorAll("#big_div_for_nameinputs")[i].style = "display:flex";
        document.querySelectorAll("#phone")[i].style="border:2px solid red !important"; 
    }else{
        document.querySelectorAll("#phone")[i].style="border:1px solid #d65f10 !important";  
        document.querySelectorAll("#big_div_for_nameinputs")[i].style = "display:none;";
      
    }
}



    if (typeof props.closeModal === 'function') props.closeModal();
};

    function close_for_check() {
         var i=0
    var a=document.querySelector("body").clientWidth 
    console.log(a)
    if(a<=991 && window.location.pathname=="/" ){
    i=1
    }else{
    i=0
    }
        document.querySelectorAll("#big_div_for_checkbox")[i].style = "display:none;"
        document.querySelectorAll(".qora_for_check")[i].style = "display:none;"
    }

    function close_for_check2() {
         var i=0
    var a=document.querySelector("body").clientWidth 
    console.log(a)
    if(a<=991 && window.location.pathname=="/" ){
    i=1
    }else{
    i=0
    }
    document.querySelectorAll("#big_div_for_nameinputs")[i].style = "display:none;"
    document.querySelectorAll(".qora_for_check2")[i].style = "display:none;"
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

    .qora_for_check2 {
        display: none;
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(55, 55, 55, 0.84);
        z-index: 1000;
    }
    .big_div_for_checkbox_input,
    .big_div_for_name_inputs {
        display: none;
        position: fixed;
        top: 40%;
        left: 40%;
        right: 30%;
        bottom: 50%;
    }

    .div_for_checkbox_input,
    .div_for_name_inputs {
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
    
    .div_for_name_inputs span {
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
        <div style="position:relative" class="agreement" >
            <input type="checkbox" style="background:red" class="custom-checkbox" name="happy" >
            <label class="Sdd" for="happy"></label>
            <span id="date221">Нажимая на кнопку “отправить” вы даёте своё согласие на обработку персональных
                данных</span>
             
        </div>   <div class="qora_for_check">
                    <div id="big_div_for_checkbox" class="big_div_for_checkbox_input">
                        <div class="div_for_checkbox_input">
                            <p id="close_for_check" @click="close_for_check">x</p>
                            <samp>Требуется подтвердить согласие на обработку персональных данных.</samp>
                        </div>
                    </div>
                </div>

                <div class="qora_for_check2">
                    <div id="big_div_for_nameinputs" class="big_div_for_name_inputs" style="display:block">
                        <div class="div_for_name_inputs">
                            <p id="close_for_check" @click="close_for_check2">x</p>
                            <samp>Ваше сообщение было получено. они скоро свяжутся с вами</samp>
                        </div>
                    </div>
                </div>
    </form>
</template>