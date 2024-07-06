<script setup>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { RouterLink, RouterView } from 'vue-router'
import MainLayout from "@/components/Layout/MainLayout.vue";
import HeaderLayout from "@/components/Layout/HeaderLayout.vue";
import { useCounterStore } from "./stores/counter";
const token = import.meta.env.VITE_TG_TOKEN
const chatId = import.meta.env.VITE_TG_CHATID
const CounterStore = useCounterStore()
import 'animate.css';
import { ref } from 'vue';
const textanimated = ref(false)
const text = ref(false)
const  modalcontact = ref(false)
setTimeout(function () {
   textanimated.value = true
  }, 3000); 
function test() {
  if(text.value == false){
    text.value =true
  } else{
    text.value =false
  }
}
window.addEventListener('scroll',function(){
  var scroll = document.querySelector('.stick');
  scroll.classList.toggle("activestick", window.scrollY>500)
})





const username = ref("");
const telephone = ref("");
const textDepartment = ref("Departament");
function textDepartmented (item){
  textDepartment.value = item
}

const notify = ()=>{
  toast("Well done!",{
    autoClose:1000,
  });
}

function submit(){
    const fullMessage= `Name: ${username.value}, telephone: ${telephone.value}, Departament : ${textDepartment.value} `;
     console.log(fullMessage)
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullMessage}`)
   username.value = "";
   telephone.value = "";
   notify()
}



</script>




<template>
  <div class="logo__started logostartedactive">
    <div class="logo__started-container ">
      <div class="logo__started-container-box">
        <img class="logo__started-container-box-mg1 mg1active" src="@/assets/icon/centerkvadrat.png" alt="">
        <img class="logo__started-container-box-mg2 mg2active" src="@/assets/icon/centervnutri.png" alt="">
        <img class="logo__started-container-box-mg3 mg3active" src="@/assets/icon/right.png" alt="">
      </div>
      <h1 v-if="true" class="h1 activatedtext" >DISCOVER <br> INVEST</h1>
      <!-- <div class="animate__animated animate__fadeInDown">XAXAX</div> -->
    </div>
  </div>

 <div class="stick" @click="modalcontact = true">
  <div class="stickphone-phone-animation">
    <svg class="stickphone-phone-animation-icon" width="61" height="61" viewBox="0 0 61 61" fill="#FAB448" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="59" height="59" stroke="#FAB448" stroke-width="2"></rect>
        <path d="M22.4737 24.3576C21.2932 27.0437 22.3425 31.4757 25.3592 35.1019C29.0317 39.5339 34.2782 41.2799 36.9014 38.9967L39 37.2508L36.1145 33.6246L33.8847 35.3705C32.3108 36.7135 29.4252 35.7734 27.4578 33.2216C25.4904 30.6699 24.9658 27.7152 26.5397 26.3722L28.6383 24.6262L25.6216 21" fill="white"></path>
        <path d="M22.4737 24.3576C21.2932 27.0437 22.3425 31.4757 25.3592 35.1019C29.0317 39.5339 34.2782 41.2799 36.9014 38.9967L39 37.2508L36.1145 33.6246L33.8847 35.3705C32.3108 36.7135 29.4252 35.7734 27.4578 33.2216C25.4904 30.6699 24.9658 27.7152 26.5397 26.3722L28.6383 24.6262L25.6216 21L22.4737 24.3576Z" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="square"></path>
    </svg>
     <p class="stickphone-phone-animation-line-1"></p>
     <p class="stickphone-phone-animation-line-2"></p>
        </div>
 </div>
 
<div class="tooglecontact" :class="{'tooglecontactactive' : modalcontact}">
   <div class="tooglecontact__container" :class="{'tooglecontactmodalactive' : modalcontact}">
     <div class="tooglecontact__container-block" @click="modalcontact = false">X</div>
      <h1>{{$t('WE WILL CALL YOU BACK')}}</h1>
      <h3>{{$t('Leave your number and we will call you back.')}}</h3>
       <form method="POST" @submit.prevent="submit" class="tooglecontact__container-form" action="">
               <div class="tooglecontact__container-form-item">
                <label for="">{{$t('Name')}}</label>
                <input required type="text" v-model="username">
               </div>

               <div class="tooglecontact__container-form-item">
                <label for="">{{$t('Phone number')}}</label>
                <input required type="number" v-model="telephone">
               </div>

               <div class="tooglecontact__container-form-item">
                <label for="">{{$t('Department')}}</label>
             <select name="" id="" @input="textDepartmented($event.target.value)">
                <option value="Department">{{$t('Department')}}</option>
                <option value="Sales department">{{$t('Sales department')}}</option>
                <option value="Human Resources Department">{{$t('Human Resources Department')}}</option>
                <option value="Financial department">{{$t('Financial department')}}</option>
                <option value="Accounting">{{$t('Accounting')}}</option>
                <option value="Purchasing department">{{$t('Purchasing department')}}</option>
                <option value="Office">{{$t('Office')}}</option>
            </select>
               </div>
               <button type="submit" class="tooglecontact__container-form-btn">{{$t('Send')}}</button>

       </form>
   </div>
</div>







  <HeaderLayout/>
  <MainLayout/>




</template>

<style>

</style>
