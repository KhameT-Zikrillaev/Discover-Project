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
</script>

<template>
  <div class="HomePages">
    <div class="HomePages__container">
        <h3>{{ $t('Projects') }}</h3>
        <p>{{ $t("We don't just create projects, we create new opportunities. By building state-scale facilities, we are building the future. We care about the environment:") }}</p>
    </div>
    <section class="section-5">
    <div class="section-5-info" data-aos="fade-right">
        <h2 class="section-5-info-title"><p class="section-5-info-title-line"></p>
         {{ $t('Our') }}
        </h2>
        <span>{{$t('Projects')}}</span>
    </div>

    <div class="section-5-proektos">


    <div class="section-5-proektos-card" data-aos="flip-up">
     <div class="section-5-proektos-card-images">
        <img src="@/assets/images/MagicCity.webp" alt="">
     </div>
     <div class="section-5-proektos-card-info">
        <h3 class="section-5-proektos-card-info-title">Magic City</h3>
        <p class="section-5-proektos-card-info-subtitle">{{ $t('Magic city is a large socially significant project. The cultural and entertainment cluster in Tashkent is one of the new attractions.') }}</p>
     </div>
    </div>

    <div class="section-5-proektos-card" data-aos="flip-up">
     <div class="section-5-proektos-card-images">
        <img src="@/assets/images/Baoulevard.webp" alt="">
     </div>
     <div class="section-5-proektos-card-info">
        <h3 class="section-5-proektos-card-info-title">Boulevard</h3>
        <p class="section-5-proektos-card-info-subtitle">{{ $t('A multifunctional residential complex created to provide comfort to the residents of Uzbekistan.') }}</p>
     </div>
    </div>


    <div class="section-5-proektos-card" data-aos="flip-down">
     <div class="section-5-proektos-card-images">
        <img src="@/assets/images/GordenResidense.webp" alt="">
     </div>
     <div class="section-5-proektos-card-info">
        <h3 class="section-5-proektos-card-info-title">Gardens Residence</h3>
        <p class="section-5-proektos-card-info-subtitle">{{ $t('A grandiose residential quarter in the heart of the capital.') }}</p>
     </div>
    </div>

    <div class="section-5-proektos-card" data-aos="flip-down">
     <div class="section-5-proektos-card-images">
        <img src="@/assets/images/fonon.webp" alt="">
     </div>
     <div class="section-5-proektos-card-info">
        <h3 class="section-5-proektos-card-info-title">Fonon</h3>
        <p class="section-5-proektos-card-info-subtitle">{{ $t('Fonon is a jewelry factory in Uzbekistan built on the basis of Italian ones in 2020. Fonon is the only large enterprise in Central Asia producing jewelry made of precious metals in European and Oriental style.') }}</p>
     </div>
    </div>

    <div class="section-5-proektos-card" data-aos="zoom-in-down">
     <div class="section-5-proektos-card-images">
        <img src="@/assets/images/invento.webp" alt="">
     </div>
     <div class="section-5-proektos-card-info">
        <h3 class="section-5-proektos-card-info-title">Invento</h3>
        <p class="section-5-proektos-card-info-subtitle">{{ $t('International kindergarten and school located in the international business center Tashkent City') }}</p>
     </div>
    </div>

    <div class="section-5-proektos-card" data-aos="zoom-in-down">
     <div class="section-5-proektos-card-images">
        <img src="@/assets/images/presidentSchool.webp" alt="">
     </div>
     <div class="section-5-proektos-card-info">
        <h3 class="section-5-proektos-card-info-title">{{$t('Presidential Schools')}}</h3>
        <p class="section-5-proektos-card-info-subtitle">{{ $t('The Presidential School is a specialized public educational institution whose activities are aimed at identifying and educating gifted children to train highly qualified specialists.') }}</p>
     </div>
    </div>
    </div>

  </section>
  </div>
  <FooterLayout/>
</template>



<style>

</style>