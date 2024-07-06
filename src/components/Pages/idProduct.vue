<script setup>
import { useRoute } from "vue-router";
import { useCounterStore } from "@/stores/counter";
import FooterLayout from "@/components/Layout/FooterLayout.vue";
import { ref, onMounted } from "vue";
const CounterStore = useCounterStore() 



CounterStore.whiteblock = false
window.addEventListener('scroll',function(){
  if(window.scrollY>10){
    CounterStore.whiteblock = true
  } else{
    CounterStore.whiteblock = false
  }
})
const route =useRoute()


const files = ref([]);
const getFiles = () => {
  return CounterStore.files[route.params.id -1]
}
const  fetchData = ()=>{
  files.value = getFiles();
}

onMounted(() => {
  // Вызов функции files() при монтировании компонента
  fetchData();
  setInterval(fetchData, 1000);
});

</script>



<template>
<section class="idproduct-1">
        <div class="idproduct-1__container">
        <h1 class="idproduct-1-title">{{ files.subtitle }}</h1>
        <h3 class="idproduct-1-subtitle">{{ files.name }}</h3>
        </div>
        <img  class="idproduct-1__video" src="@/assets/images/nizbg1.jpg" alt="">
        <!-- <video class="contactpages-1__video"  src="@/assets/video/DIscoverprojectmovie.mp4"></video> -->
    </section>
    <section class="idproduct-2">
        <div class="idproduct-2__container">
          <img :src="files.images" alt="Image">
            <h4>{{ files.description }}</h4>
       </div>
    </section>
 <FooterLayout/>
</template>



<style>

</style>