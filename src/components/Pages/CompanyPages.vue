<script setup>
import { useCounterStore } from "@/stores/counter";
import FooterLayout from "@/components/Layout/FooterLayout.vue";
const CounterStore = useCounterStore() 
CounterStore.whiteblock = false
window.addEventListener('scroll',function(){
  if(window.scrollY>10){
    CounterStore.whiteblock = true
  } else{
    CounterStore.whiteblock = false
  }
})
function   downloadPDF() {
    // Замените 'имя_файла.pdf' на имя вашего PDF файла
    const pdfUrl = `${import.meta.env.BASE_URL}презентация.pdf`;

    // Создаем ссылку для скачивания файла
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'презентация.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


</script>


<template>
 <section class="companypages-1">
        <div class="companypages-1__container">
        <h1 class="companypages-1-title" >{{ $t('ABOUT COMPANY') }}</h1>
        <h3 class="companypages-1-subtitle" >{{ $t("We don't just create projects, we create new opportunities. By building state-scale facilities, we are building the future. We care about the environment:") }}</h3>
        <div class="companypages-1-link" >
            <button @click="downloadPDF()" class="companypages-1-link-btn-1"><p>{{ $t('download the presentation') }}<svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.0926 21.8891L17.9555 23.9446V14.7437C17.9555 14.311 17.7836 13.8961 17.4777 13.5901C17.1718 13.2842 16.7568 13.1123 16.3241 13.1123C15.8915 13.1123 15.4765 13.2842 15.1706 13.5901C14.8647 13.8961 14.6928 14.311 14.6928 14.7437V23.863L12.5883 21.7422C12.4362 21.5901 12.2556 21.4695 12.0569 21.3872C11.8582 21.3048 11.6451 21.2625 11.43 21.2625C11.2149 21.2625 11.0019 21.3048 10.8032 21.3872C10.6044 21.4695 10.4239 21.5901 10.2718 21.7422C10.1197 21.8944 9.999 22.0749 9.91668 22.2737C9.83436 22.4724 9.79199 22.6854 9.79199 22.9005C9.79199 23.1156 9.83436 23.3286 9.91668 23.5274C9.999 23.7261 10.1197 23.9067 10.2718 24.0588L15.1659 28.9529C15.3183 29.1041 15.4991 29.2237 15.6979 29.3049C15.8966 29.3861 16.1094 29.4272 16.3241 29.426C16.7442 29.4243 17.1474 29.2607 17.4498 28.9692L22.3439 24.2382C22.517 24.0954 22.6588 23.9184 22.7603 23.7183C22.8619 23.5181 22.9211 23.2992 22.9342 23.0751C22.9473 22.8511 22.914 22.6268 22.8365 22.4162C22.7589 22.2056 22.6387 22.0132 22.4834 21.8512C22.3281 21.6892 22.1411 21.5609 21.934 21.4745C21.7269 21.388 21.5042 21.3452 21.2798 21.3488C21.0554 21.3523 20.8341 21.4022 20.6298 21.4951C20.4256 21.5881 20.2427 21.7222 20.0926 21.8891Z" fill="white"></path>
                                    <path d="M25.5737 6.58678C24.9081 4.66348 23.6594 2.99551 22.0016 1.81496C20.3437 0.634414 18.3591 0 16.3239 0C14.2886 0 12.304 0.634414 10.6462 1.81496C8.98831 2.99551 7.73968 4.66348 7.07401 6.58678C5.60831 6.78309 4.22355 7.37416 3.06786 8.29677C1.91217 9.21937 1.02903 10.4388 0.512917 11.8246C-0.00319755 13.2104 -0.13287 14.7104 0.137769 16.1643C0.408409 17.6181 1.06918 18.971 2.0494 20.0782C2.1678 20.2868 2.33073 20.4667 2.52659 20.6051C2.72244 20.7435 2.9464 20.837 3.18253 20.879C3.41865 20.9209 3.66112 20.9104 3.89268 20.8479C4.12424 20.7855 4.33919 20.6728 4.52222 20.5178C4.70526 20.3629 4.85187 20.1695 4.95163 19.9514C5.05138 19.7333 5.10183 19.4959 5.09937 19.256C5.0969 19.0162 5.0416 18.7799 4.93739 18.5639C4.83318 18.3479 4.68263 18.1575 4.49645 18.0064C3.8653 17.3007 3.45235 16.4272 3.30765 15.4916C3.16295 14.556 3.29271 13.5985 3.68121 12.7352C4.06971 11.8719 4.70027 11.1398 5.49647 10.6276C6.29267 10.1154 7.22033 9.84511 8.16703 9.84952H8.33017C8.71182 9.85722 9.08409 9.73083 9.38217 9.49237C9.68025 9.2539 9.88527 8.91846 9.96154 8.54442C10.2611 7.06929 11.0614 5.74307 12.2268 4.79048C13.3923 3.83788 14.8513 3.3175 16.3565 3.3175C17.8617 3.3175 19.3207 3.83788 20.4862 4.79048C21.6516 5.74307 22.4519 7.06929 22.7515 8.54442C22.8277 8.91846 23.0328 9.2539 23.3308 9.49237C23.6289 9.73083 24.0012 9.85722 24.3828 9.84952H24.4807C25.4274 9.84511 26.3551 10.1154 27.1513 10.6276C27.9475 11.1398 28.578 11.8719 28.9665 12.7352C29.355 13.5985 29.4848 14.556 29.3401 15.4916C29.1954 16.4272 28.7825 17.3007 28.1513 18.0064C28.0076 18.1675 27.8973 18.3556 27.8268 18.5597C27.7564 18.7638 27.7271 18.9798 27.7408 19.1953C27.7544 19.4108 27.8107 19.6214 27.9064 19.815C28.0021 20.0085 28.1352 20.1812 28.2981 20.3229C28.5955 20.5852 28.9783 20.7302 29.3748 20.7308C29.6065 20.7305 29.8354 20.6808 30.0463 20.5852C30.2573 20.4896 30.4455 20.3501 30.5984 20.1761C31.6058 19.0707 32.2899 17.7097 32.5759 16.2418C32.862 14.7738 32.739 13.2555 32.2203 11.8528C31.7017 10.4501 30.8073 9.21693 29.6351 8.28819C28.4629 7.35946 27.0579 6.77087 25.5737 6.58678Z" fill="white"></path>
                                    </svg></p></button>
          
         </div>
         

        </div>
        <img  class="companypages-1__video" src="@/assets/images/bg-main.jpg" alt="">
        <!-- <video class="contactpages-1__video"  src="@/assets/video/DIscoverprojectmovie.mp4"></video> -->
    </section>

 <section class="companypages-2">
    <div class="companypages-2__container">
        <div class="companypages-2__container-left">
            <div class="section-5-info" data-aos="fade-right">
        <h2 class="section-5-info-title"><p class="section-5-info-title-line"></p>
            {{$t('About3')}}
        </h2>
        <span>{{$t('company')}}</span>
        </div>
        <svg class="rectangle" width="531" height="690" viewBox="0 0 531 690" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.1">
                                <path d="M209.43 70.0665V0H530.972V477.544H437.473L437.525 432.833H488.44V44.7113H251.963V70.0409H412.99V690H0V70.0409H209.405L209.43 70.0665ZM80.4752 641.905H363.766V477.57H244.682L80.4752 641.905ZM209.43 447.549V150.208H254.911V429.885H363.766V118.188H49.2491V607.858L209.43 447.549Z" fill="#8F8F8F"></path>
                            </g>
                        </svg>
        </div>
        <div class="companypages-2__container-right">
            <div class="companypages-2__container-right-images">
                <img src="@/assets/images/bg-company.jpg" alt="">
            </div>
            <p class="companypages-2__container-right-text">{{ $t("We don't just create projects, we create new opportunities. By building state-scale facilities, we are building the future. We care about the environment:") }}</p>

            <div class="companypages-2__container-right-link" data-aos="fade-down">
            <RouterLink class="companypages-2__container-right-link-btn-1" to="/project" @click="CounterStore.scrollTop()"><p>{{$t('projects')}}</p></RouterLink>
            </div>
    
        </div>

  
    </div>
 </section>

 <section class="companypages-3">
    <div class="companypages-3__container">

        <div class="companypages-3__container-card" data-aos="fade-up">

      
     <div class="companypages-3__container-card-left">
        <div class="companypages-3__container-card-left-numb">
            <p class="companypages-3__container-card-left-numb-text">1</p>
            <p class="companypages-3__container-card-left-numb-line"></p>
        </div>
        <div class="companypages-3__container-card-left-info">
            <h3>{{ $t('Our mission') }}</h3>
            <p>{{ $t('Our mission We introduce the most advanced technologies in construction in Uzbekistan and create modern design solutions. Relying on first-class workers, we build affordable housing and industrial buildings for many years.') }}</p>
        </div>
     </div>
     <div class="companypages-3__container-card-right">
        <div class="companypages-3__container-card-right-images">
            <img src="@/assets/images/m-1.jpg" alt="">
        </div>
        
    </div>
        </div>

        <div class="companypages-3__container-card" data-aos="fade-up">

      
<div class="companypages-3__container-card-left">
   <div class="companypages-3__container-card-left-numb">
       <p class="companypages-3__container-card-left-numb-text">2</p>
       <p class="companypages-3__container-card-left-numb-line"></p>
   </div>
   <div class="companypages-3__container-card-left-info">
       <h3>{{$t('Our Vision')}}</h3>
       <p>{{ $t('Creation of the best project company in Central Asia, which provides an opportunity to: - Society - to improve the standard of living of people by setting high standards in work. - Clients - to enjoy joint activities, to build long-term and open relationships. - Employees - constant growth,') }}</p>
   </div>
</div>
<div class="companypages-3__container-card-right">
   <div class="companypages-3__container-card-right-images">
       <img src="@/assets/images/m-2.jpg" alt="">
   </div>
   
</div>
        </div>

         <div class="companypages-3__container-card" data-aos="fade-up">

      
<div class="companypages-3__container-card-left">
   <div class="companypages-3__container-card-left-numb">
       <p class="companypages-3__container-card-left-numb-text">3</p>
      
   </div>
   <div class="companypages-3__container-card-left-info">
       <h3>{{ $t('Our values') }}</h3>
       <p>{{ $t("Our values Since the founding (LLC) 'Discover Invest' in 2008, we have been working only with professionals. Our specialists use advanced technologies and an innovative approach to business.Regardless of the time and place of operation, we remain committed to our values: staff and safety, continuous improvement and the trust of our customers.") }}</p>
   </div>
</div>
<div class="companypages-3__container-card-right">
   <div class="companypages-3__container-card-right-images">
       <img src="@/assets/images/m-3.jpg" alt="">
   </div>
   
</div>
         </div>

    </div>
 </section>

 <section class="companypages-4">

 </section>

 <section class="companypages-5">
    <div class="companypages-5__container">
        <div class="companypages-5__container-grid">
            <div class="companypages-5__container-grid-card">
                <h3>14</h3>
                <p>{{$t('14 years on marketplace')}}</p>
                <img src="@/assets/images/Aboutimg.jpg" alt="">
            </div>

            <div class="companypages-5__container-grid-card">
                <h3>4000+</h3>
                <p>{{$t('The number of employees')}}</p>
                <img src="@/assets/images/Aboutimg.jpg" alt="">
            </div>
            <div class="companypages-5__container-grid-card">
                <h3>150+</h3>
                <p>{{ $t('projects') }}</p>
                <img src="@/assets/images/Aboutimg.jpg" alt="">
            </div>
            <div class="companypages-5__container-grid-card">
                <h3>16</h3>
                <p>{{$t('Residential complexes')}}</p>
                <img src="@/assets/images/Aboutimg.jpg" alt="">
            </div>
            <div class="companypages-5__container-grid-card">
                <h3>250+</h3>
                <p>{{$t('Special techniques recuperated')}}</p>
                <img src="@/assets/images/Aboutimg.jpg" alt="">
            </div>

            <div class="companypages-5__container-grid-card">
                <h3>9+</h3>
                <p>Больницы</p>
                <img src="@/assets/images/Aboutimg.jpg" alt="">
            </div>

        </div>
    </div>
 </section>



 <FooterLayout/>
</template>

<style>

</style>