<template>
  <div v-for="dashboard in dashboardCard" :key="dashboard" class="grid grid-cols-4 h-[215px] shadow-box shadow-5">
    <div class="col-span-3 bg-[#002955]/10 py-[17px] pl-[26px] text-[28px] font-medium text-[#002955]"> {{ dashboard.title }}</div>
    <div class="col-span-1 bg-white py-[17px] px-[25px] text-3xl" :style="{'color': dashboard.color}"> {{ dashboard.per }}% </div>
    <div class="col-span-3 bg-white pl-[26px] pt-[28px] pb-[10px] text-lg text-[#58636E] font-normal">Kelib tushgan murojatlar soni</div>
    <div class="col-span-1 bg-white pt-[24px] pb-[8px] px-[20px] text-3xl text-[#031529]">{{dashboard.allApp}}</div>
    <div class="col-span-4 border-b border-[#002955]/10 mx-[26px] h-0"></div>
    <div class="col-span-3 bg-white pl-[26px] pt-[18px] pb-[10px] text-lg text-[#58636E] font-normal">Javob berilganlar soni</div>
    <div class="col-span-1bg-white pt-[14px] pb-[8px] px-[20px] text-3xl text-[#031529]">{{dashboard.conApp}}</div>
    <div class="col-span-4 border-b border-[#002955]/10 mx-[26px] mb-[24px] h-0"></div>
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
