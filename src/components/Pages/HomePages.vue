<script setup>
import Section1 from "../HomePages/Section1.vue";
import Section2 from "../HomePages/Section2.vue";
import Section3 from "../HomePages/Section3.vue";
import Section4 from "../HomePages/Section4.vue";
import Section5 from "../HomePages/Section5.vue";
import Section6 from "../HomePages/Section6.vue";
import FooterLayout from "@/components/Layout/FooterLayout.vue";
import { useCounterStore } from "@/stores/counter";
const CounterStore = useCounterStore()  

window.addEventListener('scroll',function(){
  if(window.scrollY>10){
    CounterStore.whiteblock = true
  } else{
    CounterStore.whiteblock = false
  }
})
</script>



<template>
  <Section1/>
  <Section2/>
  <Section3/>
  <Section4/>
  <Section5/>
  <Section6/>
  <FooterLayout/>
</template>


<style>

</style>