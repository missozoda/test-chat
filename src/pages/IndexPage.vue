<template>
  <q-page class="flex item-start justify-center pt-[60px] px-[50px]" >
    <div class="grid grid-cols-3 gap-8 w-full">
      <div class="col-span-2">
        <div class="grid grid-cols-2 gap-8 mb-[35px]">
          <DashboardCard :dashboardCard="dashboardCard"/>
        </div>
        <div class="bg-white pl-[30px] pr-[40px] py-[21px] mb-[34px] shadow-box shadow-5">
          <div class="flex justify-between mb-[21px]">
            <p class="font-medium text-2xl text-[#002955] mx-auto">Oy bo’yicha statistika</p>
            <div class="text-base text-[#58636F]">Fevral 2022
              <q-icon name="date_range" style="color: #dadada" size="24px"></q-icon>
            </div>
          </div>
          <q-img src="../assets/month-chart.png" alt="Month Chart" fit="cover"></q-img>
        </div>
        <div class="bg-white pl-[48px] pr-[50px] pt-[22px] pb-[17px] shadow-box shadow-5">
          <div class="flex justify-between mb-[21px]">
            <p class="font-medium text-2xl text-[#002955] mx-auto">Yil bo’yicha statistika</p>
            <div class="text-base text-[#58636F]">2022
              <q-icon name="date_range" style="color: #dadada" size="24px"></q-icon>
            </div>
          </div>
          <q-img src="../assets/year-chart.png" alt="Year Chart" fit="cover"></q-img>
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
