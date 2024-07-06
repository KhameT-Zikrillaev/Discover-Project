<script setup>

</script>



<template>
  <section class="section-2">
    <svg class="section-2__banner" width="658" height="855" viewBox="0 0 658 855" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.1">
                    <path d="M259.418 86.7901V0H657.706V591.526H541.891L541.954 536.143H605.022V55.3831H312.102V86.7584H511.563V854.691H0V86.7584H259.386L259.418 86.7901ZM99.6832 795.116H450.591V591.557H303.083L99.6832 795.116ZM259.418 554.371V186.061H315.754V532.491H450.591V146.397H61.004V752.943L259.418 554.371Z" fill="#8F8F8F"></path>
                </g>
            </svg>
    <div class="section-2-left">
        <div class="section-2-left-info" >
        <h2 class="section-2-left-info-title"><p class="section-2-left-info-title-line"></p>
            {{$t('About2')}}
        </h2>
        <span>{{$t('DISCOVER INVEST')}}</span>
    </div>
      <!-- <h2 class="section-2-left-title"><p class="line"></p>DISCOVER INVEST <span>kompaniyasi haqida</span></h2> -->
      <h3 class="section-2-left-subtitle" >{{ $t("We don't just create projects, we create new opportunities. By building state-scale facilities, we are building the future. We care about the environment: the company takes full responsibility for the environmental aspects related to the construction and operation of buildings and infrastructure.") }}</h3>
    </div>
    <div class="section-2-right" >
        <div class="section-2-right-column-1">
    <div class="section-2-right-column-1-card"></div>
    <div class="section-2-right-column-1-card border"><p>4000+</p><span>{{$t('The number of employees')}}</span><img src="@/assets/images/Aboutimg.jpg" alt=""></div>
    <div class="section-2-right-column-1-card border"><p>16</p><span>{{$t('Residential complexes')}}</span><img src="@/assets/images/Aboutimg.jpg" alt=""></div>
    <div class="section-2-right-column-1-card border"><p>14</p><span>{{$t('14 years on marketplace')}}</span><img src="@/assets/images/Aboutimg.jpg" alt=""></div>
    <div class="section-2-right-column-1-card border-flex">{{$t('About')}}</div>
    <div class="section-2-right-column-1-card border"><p>9+</p><span>{{$t('Hospitals')}}</span><img src="@/assets/images/Aboutimg.jpg" alt=""></div>
        </div>
        <div class="section-2-right-column-2">
    <div class="section-2-right-column-1-card border"><p>150+</p><span>{{ $t('projects') }}</span><img src="@/assets/images/Aboutimg.jpg" alt=""></div>
    <div class="section-2-right-column-1-card border"><p>250+</p><span>{{$t('Special techniques recuperated')}}</span><img src="@/assets/images/Aboutimg.jpg" alt=""></div>
        </div>
    </div>
 
  </section>
</template>


<style>

</style>