<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";

import { useCounterStore } from "@/stores/counter";
const CounterStore = useCounterStore()  

// window.addEventListener('scroll',function(){
//   if(window.scrollY>10){
//     CounterStore.whiteblock = true
//   } else{
//     CounterStore.whiteblock = false
//   }
// })
</script>



<template>
  <header class="header" :class="{'activeheader': CounterStore.whiteblock}">
     <Navbar :activated="CounterStore.whiteblock"/>
     <svg class="line" width="1650" height="1" viewBox="0 0 1650 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="1650" height="1" fill="url(#paint0_radial_78_95)"></rect>
                <defs>
                    <radialGradient id="paint0_radial_78_95" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(825 0.5) rotate(90) scale(0.5 825)">
                        <stop stop-color="white" stop-opacity="0.5"></stop>
                        <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                    </radialGradient>
                </defs>
     </svg>
  </header>
  
</template>


<style>

</style>