<script setup>
import { useCounterStore } from "@/stores/counter";
import FooterLayout from "@/components/Layout/FooterLayout.vue";

const CounterStore = useCounterStore() 
CounterStore.whiteblock = true
window.addEventListener('scroll',function(){
  if(window.scrollY>10){
    CounterStore.whiteblock = true
  } else{
    CounterStore.whiteblock = true
  }
})
const breakpoints={
      '480': {
        itemsToShow: 2.95,
   
      },  
      '768': {
        itemsToShow: 3.95,
      },
    }

</script>
<script>
import { defineComponent, ref } from 'vue'
import { Carousel, Pagination, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
})

</script>
<template>
  <div class="HomePages">
    <div class="HomePages__container">
        <h3>{{$t('News')}}</h3>
        <p>{{ $t("We don't just create projects, we create new opportunities. By building state-scale facilities, we are building the future. We care about the environment:") }}</p>
    </div>
    <div class="section-6">

<div class="section-5-info" data-aos="fade-right">
    <h2 class="section-5-info-title"><p class="section-5-info-title-line"></p>
        {{$t('Company')}}
    </h2>
    <span>{{ $t('news') }}</span>
</div>

<div class="section-6-corusel">

  <Carousel id="activeClasses" 
      :breakpoints="breakpoints"
      :itemsToShow="1.95" 
      :wrapAround="true" 
      :transition="500"
      :autoplay="2500"
      loopn>
    <Slide v-for="slide in CounterStore.files" :key="slide">
      <div class="carousel__item">
         <img :src="slide.images" alt="Image">
        <h3>{{slide.dates}}</h3>
         <p>{{slide.name}}</p>
         <RouterLink :to="'/product/'  + slide.id" @click="CounterStore.scrollTop()" >Подробно</RouterLink>

      </div>
    </Slide>
  
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>



</div>


</div>
<FooterLayout/>
  </div>
</template>



<style>

</style>