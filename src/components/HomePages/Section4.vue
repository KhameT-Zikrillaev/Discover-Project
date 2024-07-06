<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const breakpoints={
      '400': {
        slidesPerView: 1,
        spaceBetween: 0,  
      },  
      '768': {
        slidesPerView: 2,
        spaceBetween: 10,
      },

      '1240': {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      '1440': {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    }
const modules = [Navigation,Autoplay]
</script>



<template>
<section class="section-4">
    <div class="section-4-info" data-aos="fade-right">
        <h2 class="section-4-info-title"><p class="section-4-info-title-line"></p>
           {{ $t('Our') }}
        </h2>
        <span>{{ $t('advantages') }}</span>
    </div>
    <swiper class="corusel-1" 
    loop
:slides-per-view="1"
:space-between="80"
:breakpoints="breakpoints"
:navigation="false" 
:modules="modules"
:autoplay="{
      delay: 2500
    }"
>

<swiper-slide >
   <div class="corusel-1-card">
     <img src="@/assets/images/1img.webp" alt="">
      <h3 class="corusel-1-card-title">{{$t("Norbekov Shavkat Bo'riboy o'g'li")}}</h3>
      <p class="corusel-1-card-subtitle">{{ $t('Project Manager') }}</p>
   </div>
</swiper-slide>
<swiper-slide >
    <div class="corusel-1-card">
     <img src="@/assets/images/2img.webp" alt="">
      <h3 class="corusel-1-card-title">{{ $t("Artiqbaev Saxobiddin Doniyor o'g'li") }}</h3>
      <p class="corusel-1-card-subtitle">{{ $t('Project Manager') }}</p>
   </div>
</swiper-slide>
<swiper-slide >
    <div class="corusel-1-card">
     <img src="@/assets/images/3img.webp" alt="">
      <h3 class="corusel-1-card-title">{{ $t('Kuziyev Jaxongir Baxodirovich') }}</h3>
      <p class="corusel-1-card-subtitle">{{ $t('Construction site supervisor') }}</p>
    </div>
</swiper-slide>
<swiper-slide >
    <div class="corusel-1-card">
     <img src="@/assets/images/4img.webp" alt="">
      <h3 class="corusel-1-card-title">{{$t("Boltaev Obidjon Uchqin o'g'li")}}</h3>
      <p class="corusel-1-card-subtitle">{{ $t('Project Manager') }}</p>
    </div>
</swiper-slide>
<swiper-slide >
    <div class="corusel-1-card">
     <img src="@/assets/images/5img.webp" alt="">
      <h3 class="corusel-1-card-title">{{$t("Xusanov Akromjon Turaxon o'g'li")}}</h3>
      <p class="corusel-1-card-subtitle">{{ $t('Project Manager') }}</p>
    </div>
</swiper-slide>
</swiper>
</section>
</template>



<style>

</style>