import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import en from '@/lenguage/en.json'
import ru from '@/lenguage/ru.json'
import uz from '@/lenguage/uz.json'
import dataUZ from "@/views/datafileUZ";
import dataEN from "@/views/datafileEN";
import dataRU from "@/views/datafileRU";
export const useCounterStore = defineStore('counter',{
 state:()=>({
      whiteblock:false,
     
      files:dataEN
 }),
 actions:{
     scrollTop(){
          window.scrollTo({
            behavior:'smooth',
            top:0,
          })
        },
        lenguageEN(){
         
          this.files = dataEN
        },
        lenguageRU(){
        
          this.files = dataRU
        },
        lenguageUZ(){
         
          this.files = dataUZ
        }
   
 },

 
});
