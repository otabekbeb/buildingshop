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
    console.log(check1)
if(name1.length>5 && nomer1.length>7 && check1){
 document.querySelector("#phone").style="border:1px solid #d65f10 !important" 
 document.querySelector("#date221").style="color:white !important" 
  document.querySelector("#name").style="border:1px solid #d65f10 !important" 
  document.querySelector("#phone").value=""
  document.querySelector("#name").value=""
  document.querySelector('.custom-checkbox').checked=false
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
</script>

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
        </div>
    </form>
</template>