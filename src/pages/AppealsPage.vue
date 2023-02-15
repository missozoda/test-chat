<template>
  <q-page class="flex item-start justify-center py-[36px] pl-[32px] pr-[18px]">
      <div class="shadow-box shadow-5 w-full">
        <div class="flex justify-between w-full pt-[27px] pb-[22px]">
          <div class="flex justify-between px-[60px]">
            <input class="block py-[10px] px-[20px] mr-[36px] border border-[#58636F] rounded" type="date" name="date" id="date" value="01.02.2023">
            <select class="block py-[10px] px-[17px]  mr-[36px] border border-[#58636F] rounded" name="state" id="state">
              <option value="holati" disabled selected>Holati</option>
              <option value="qabul-qilindi">Qabul qilindi</option>
              <option value="qabul-qilinmadi">Qabul qilinmadi</option>
              <option value="javob-berildi">Javob berildi</option>
            </select>
            <input class="block py-[10px] px-[17px] border border-[#58636F] rounded" type="text" placeholder="Operator" name="operator" id="operator">
          </div>
          <q-space/>
          <q-btn class="bg-[#002955] mr-[30px] w-[43px] h-[43px]" text-color="white" icon="download"></q-btn>
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
