<template>
  <div class="shadow-box shadow-5 h-[calc(100vh-100px)] mb-4">
    <div class="header grid grid-cols-4">
      <div class="col-span-3 bg-[#002955]/10 py-[12px] xl:py-[16px] 2xl:py-[18px] pl-[26px] text-[18px] min-[450px]:text-[24px] md:text-[28px] font-medium text-[#002955]">Kun kesimida</div>
      <div class="col-span-1 bg-white py-[6px] sm:py-[10px] xl:py-[12px] 2xl:py-[16px] mx-auto text-base sm:text-xl text-[#002955] text-center">Fevral
        <span class="block text-xs sm:text-sm mx-auto">2022</span>
      </div>
    </div>
    <div class="col-span-4 border-b-2 border-[#002955]/10 ml-[24px] mt-[12px] md:mt-[22px]"></div>
    <q-scroll-area :thumb-style="thumbStyle" :bar-style="barStyle" class="h-[85%]">
      <div class="mx-[18px] sm:mx-[24px] mt-[16px] md:mt-[28px] mb-[20px] md:mb-[36px]">
        <div class="grid grid-cols-4 mb-[18px]" v-for="dailyData in dailyDatas" :key="dailyData" >

          <div class="col-span-3 text-sm min-[450px]:text-lg mb-[8px] sm:mb-[16px] text-[#031529] italic">01.02.2022</div>
          <div class="col-span-1 text-xl min-[450px]:text-2xl mb-[6px] sm:mb-[12px] text-end font-medium"
          :style="{'color': dailyData.color}"
          >{{ Math.round(dailyData.conApp / dailyData.allApp * 100) }}% </div>
          <div class="col-span-3 text-sm min-[450px]:text-lg mb-[6px] sm:mb-[10px] text-[#58636F]">Kelib tushgan murojatlar soni</div>
          <div class="col-span-1 text-base min-[450px]:text-xl mb-[4px] sm:mb-[8px] text-end text-[#031529]">{{dailyData.allApp}}</div>
          <div class="col-span-3 text-sm min-[450px]:text-lg mb-[10px] sm:mb-[14px] text-[#58636F]">Javob berilganlar soni</div>
          <div class="col-span-1 text-base min-[450px]:text-xl mb-[6px] sm:mb-[12px] text-end text-[#031529]">{{ dailyData.conApp }}</div>
          <div class="col-span-4 border-b border-[#002955]/10 h-0"></div>

        </div>
      </div>
    </q-scroll-area>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default {
  name: "DailyDashboardCard",
  data:()=>({
    dailyDatas:[
      {
        allApp: 128,
        conApp: 102,
        color: '#5ECC54'
      },
      {
        allApp: 125,
        conApp: 97,
        color: '#CACC54'
      },
      {
        allApp: 130,
        conApp: 105,
        color: '#CCA354'
      },
      {
        allApp: 121,
        conApp: 110,
        color: '#5ECC54'
      },
      {
        allApp: 117,
        conApp: 62,
        color: '#DE4848'
      },
      {
        allApp: 126,
        conApp: 75,
        color: '#CC6A54'
      }
    ]
  }),
  setup () {
    return {
      thumbStyle: {
        backgroundColor: '#002955',
        width: '9px',
        opacity: 0.8
      },

      barStyle: {
        backgroundColor: 'rgb(196, 196, 196)',
        width: '9px',
        opacity: 0.7
      },
    }
  }
}
</script>
