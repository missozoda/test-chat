<template>
  <div v-for="dashboard in dashboardCard" :key="dashboard" class="grid grid-cols-4 h-auto w-full xl:max-w-[480px] shadow-box shadow-5">
    <div class="col-span-3 bg-[#002955]/10 py-[6px] sm:py-[12px] pl-[26px] text-[20px] sm:text-[28px] md:text-[22px] 2xl:text-[28px] font-medium text-[#002955]"> {{ dashboard.title }}</div>
    <div class="col-span-1 bg-white py-[6px] sm:py-[12px] px-[18px] lg:px-[25px] text-base sm:text-2xl lg:text-lg 2xl:text-3xl" :style="{'color': dashboard.color}"> {{ dashboard.per }}% </div>
    <div class="col-span-3 bg-white pl-[18px] sm:pl-[26px] pt-[24px] pb-[8px] text-sm sm:text-lg lg:text-base 2xl:text-lg text-[#58636E] font-normal">Kelib tushgan murojatlar soni</div>
    <div class="col-span-1 bg-white pt-[24px] pb-[8px] px-[20px] text-base sm:text-2xl lg:text-lg 2xl:text-3xl text-[#031529]">{{dashboard.allApp}}</div>
    <div class="col-span-4 border-b border-[#002955]/10 mx-[26px] h-0"></div>
    <div class="col-span-3 bg-white pl-[18px] sm:pl-[26px] pt-[14px] pb-[8px] text-sm sm:text-lg lg:text-base 2xl:text-lg text-[#58636E] font-normal">Javob berilganlar soni</div>
    <div class="col-span-1 bg-white pt-[14px] pb-[8px] px-[20px] text-base sm:text-2xl lg:text-lg 2xl:text-3xl text-[#031529]">{{dashboard.conApp}}</div>
    <div class="col-span-4 border-b border-[#002955]/10 mx-[26px] mb-[14px] h-0"></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default {
  name: "DashboardCard",
  props:[
    'dashboardCard'
  ]
}
</script>
