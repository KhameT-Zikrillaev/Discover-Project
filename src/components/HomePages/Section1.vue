<script setup>
import { useCounterStore } from "@/stores/counter";
const CounterStore = useCounterStore() 
</script>



<template>
    <section class="section-1">
        <div class="section-1__container">
        <h1 class="section-1-title">DISCOVER INVEST</h1>
        <h3 class="section-1-subtitle">{{$t('Perfection in everything')}}</h3>
         <div class="section-1-link">
            <RouterLink class="section-1-link-btn-1" to="/project" @click="CounterStore.scrollTop()"><p>{{$t('Projects')}}</p></RouterLink>
            <RouterLink class="section-1-link-btn-2" to="/contact" @click="CounterStore.scrollTop()"><p>{{$t('Contacts')}}</p></RouterLink>
         </div>
        </div>
        <video class="section-1__video" loop muted autoplay src="@/assets/video/DIscoverprojectmovie.mp4"></video>
    </section>

 
</template>



<style>

</style>