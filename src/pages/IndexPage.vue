<template>
  <q-page class="flex item-start justify-center pt-[32px] px-[28px]" >
    <div class="grid grid-cols-3 gap-8 w-full">
      <div class="col-span-2">
        <div class="grid grid-cols-2 gap-8 mb-[28px]  max-w-[1005px]">
          <DashboardCard :dashboardCard="dashboardCard"/>
        </div>
        <div class="bg-white pl-[28px] pr-[32px] py-[12px] mb-[28px] shadow-box shadow-5 max-h-[305px] max-w-[1000px]">
          <div class="flex justify-between mb-[16px]">
            <p class="font-medium text-2xl text-[#002955] mx-auto">Oy bo’yicha statistika</p>
            <div class="text-base text-[#58636F] align-center">Fevral 2022
              <q-icon name="date_range" style="color: #dadada" size="22px"/>
            </div>
          </div>
          <q-img src="../assets/month-chart.png" alt="Month Chart"/>
        </div>
        <div class="bg-white pl-[28px] pr-[32px] py-[12px] shadow-box shadow-5 max-h-[305px] max-w-[1000px]">
          <div class="flex justify-between mb-[16px]">
            <p class="font-medium text-2xl text-[#002955] mx-auto">Yil bo’yicha statistika</p>
            <div class="text-base text-[#58636F]">2022
              <q-icon name="date_range" style="color: #dadada" size="22px"/>
            </div>
          </div>
          <q-img src="../assets/year-chart.png" alt="Year Chart"/>
        </div>
      </div>
      <DailyDashboardCard/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import AppealsPageVue from './AppealsPage.vue';
import DashboardCard from '../components/DashboardCard.vue'
import DailyDashboardCard from '../components/DailyDashboardCard.vue'

export default defineComponent({
  name: 'IndexPage',
  components:{
    AppealsPageVue,
    DashboardCard,
    DailyDashboardCard,

  },
  data:()=>({
    dashboardCard:[
      {
        title: "Bugun",
        allApp: 150,
        conApp: 100,
        per: Math.round(100 / 150 * 100),
        color: "#F99929"
      },
      {
        title: "Joriy oy",
        allApp: 4337,
        conApp: 4023,
        per: Math.round(4023 / 4337 * 100),
        color: "#5ECC54"
      }
    ]
  }),

})
</script>
