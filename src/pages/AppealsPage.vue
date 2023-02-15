<template>
  <q-page class="flex item-start justify-center py-[36px] pl-[20px] md:pl-[32px] pr-[18px]">
      <div class="shadow-box shadow-5 w-full">
        <div class="flex justify-between flex-nowrap w-full pt-[27px] pb-[22px]">
          <div class="flex flex-wrap px-2 md:px-[24px] xl:px-[60px]">
            <input class="block py-[8px] sm:py-[10px] px-[20px] mb-2 md:mb-0 mr-[18px] xl:mr-[36px] border border-[#58636F] rounded" type="date" name="date" id="date" value="01.02.2023">
            <select class="block py-[8px] sm:py-[10px] px-[17px]  mb-2 md:mb-0 mr-[18px] xl:mr-[36px] border border-[#58636F] rounded" name="state" id="state">
              <option value="holati" disabled selected>Holati</option>
              <option value="qabul-qilindi">Qabul qilindi</option>
              <option value="qabul-qilinmadi">Qabul qilinmadi</option>
              <option value="javob-berildi">Javob berildi</option>
            </select>
            <input class="block py-[8px] sm:py-[10px] px-[17px] mb-2 md:mb-0 border border-[#58636F] rounded" type="text" placeholder="Operator" name="operator" id="operator">
          </div>
          <q-space/>
          <q-btn class="bg-[#002955] mr-[14px] xl:mr-[30px] w-[32px] md:w-[43px] h-[32px] md:h-[43px]" text-color="white" icon="download"/>
        </div>
        <QTable/>
      </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import QTable from 'src/components/QTable.vue';

export default defineComponent({
  name: 'AppealsPage',
  components:{
    QTable
  },
  data:()=>({
    showChat: true
  })

})
</script>
