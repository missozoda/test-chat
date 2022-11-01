<template>
  <div class="shadow-box shadow-5 mb-[48px] h-[885px]">
    <div class="header grid grid-cols-4">
      <div class="col-span-3 bg-[#002955]/10 py-[18px] pl-[26px] text-[28px] font-medium text-[#002955]">Kun kesimida</div>
      <div class="col-span-1 bg-white py-[16px] px-[35px] text-xl text-[#002955]">Fevral
        <span class="block text-sm mx-[10px]">2022</span>
      </div>
    </div>
    <div class="col-span-4 border-b-2 border-[#002955]/10 ml-[26px] mt-[23px]"></div>
    <q-scroll-area class="h-[740px]">
      <div class="ml-[26px] mr-[33px] mt-[30px] mb-[45px]">
        <div class="grid grid-cols-4 mb-[19px]" v-for="dailyData in dailyDatas" :key="dailyData" >
          <div class="col-span-3 text-lg mb-[16px] text-[#031529] italic">01.02.2022</div>
          <div class="col-span-1 text-2xl mb-[12px] text-end font-medium"
          :style="{'color': dailyData.color}"
          >{{ Math.round(dailyData.conApp / dailyData.allApp * 100) }}% </div>
          <div class="col-span-3 text-lg mb-[10px] text-[#58636F]">Kelib tushgan murojatlar soni</div>
          <div class="col-span-1 text-xl mb-[8px] text-end text-[#031529]">{{dailyData.allApp}}</div>
          <div class="col-span-3 text-lg mb-[15px] text-[#58636F]">Javob berilganlar soni</div>
          <div class="col-span-1 text-xl mb-[13px] text-end text-[#031529]">{{ dailyData.conApp }}</div>
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
  })
}
</script>
