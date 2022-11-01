<template>
  <q-scroll-area class="h-full" style="height: calc(100% - 100px);">
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="name"
        class="text-center"
        hide-pagination
        v-model:pagination="pagination"
      >
      <template v-slot:header="props">
          <q-tr :props="props" class="bg-[#002955]/10 text-lg font-medium text-[#031529]">
            <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
              class="text-lg font-medium text-[#031529] text-center">
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props" class="text-lg font-normal text-[#58636f]" clickable  @click="open('right',props.row.status)">
            <q-td key="name" :props="props">
              <div class="pl-14">F.I.Sh <span class="text-[#031529] font-medium">{{ props.row.name }}</span></div>
              <div  class="pl-14">Tel: <span class="text-[#031529] font-medium">{{ props.row.tel }}</span></div>
              <div  class="pl-14">Yaratildi: <span class="text-[#031529] font-medium">{{ props.row.time }}</span></div>
            </q-td>
            <q-td key="state" :props="props" class="text-left">
              <div class="pl-14">Holati:
                <span v-if="props.row.status==1" class="text-[#031529] font-medium bg-[#cf3d34] p-1 rounded">{{ props.row.state }}</span>
                <span v-if="props.row.status==2" class="text-[#031529] font-medium bg-[#ebb93b] p-1 rounded">{{ props.row.state }}</span>
                <span v-if="props.row.status==3" class="text-[#031529] font-medium bg-[#34cf4d] p-1 rounded">{{ props.row.state }}</span>
              </div>
              <div class="pl-14">Vaqti: <span class="text-[#031529] font-medium">{{ props.row.time }}</span></div>
              <div class="pl-14">Mazmuni: <span class="text-[#031529] font-medium">{{ props.row.about }}</span></div>
            </q-td>
            <q-td key="answer" :props="props" class="text-left">
              <div class="pl-14">Qabul qilindi: <span class="text-[#031529] font-medium">{{ props.row.received }}</span></div>
              <div class="pl-14">Javob berildi: <span class="text-[#031529] font-medium">{{ props.row.answer }}</span></div>
              <div class="pl-14">Vaqtlar farqi: <span class="text-[#031529] font-medium">{{ props.row.timedifference }}</span></div>
            </q-td>
            <q-td key="operator" :props="props" class="text-left">
              <div class="pl-14">F.I.Sh: <span class="text-[#031529] font-medium">{{ props.row.operatorName }}</span></div>
              <div class="pl-14">Tel: <span class="text-[#031529] font-medium">{{ props.row.operatorTel }}</span></div>
              <div class="pl-14">Holati: <span class="text-[#031529] font-medium">{{ props.row.operatorState }}</span></div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
      <q-dialog v-model="dialog" :position="position">
      <q-card style="width: 460px" class="h-full">
        <AppealsChat/>
      </q-card>
    </q-dialog>
  </q-scroll-area>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import AppealsChat from 'src/components/AppealsChat.vue';

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Mijoz',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'state', align: 'left', label: 'Murojat', field: 'murojat', sortable: true },
  { name: 'answer', align: 'left', label: 'Javob', field: 'javob', sortable: true },
  { name: 'operator', align: 'left', label: 'Operator', field: 'operator' },

]

const rows = [
  {
    name: 'Ivan Ivanov',
    status: 1,
    state: 'Qabul qilinmadi',
    received: ' --:-- --.--.---- ',
    operatorName: '-------',
    tel:"+998 (99) 321-44-55 ",
    time: "17:04 11.02.2022",
    answer:" --:-- --.--.---- ",
    operatorTel:" ------ ",
    about:"Lorem Ipsum is...",
    timedifference:" --:--:-- ",
    operatorState:" ------ ",
  },
    {
    name: 'Ivan Ivanov',
    status: 2,
    state: 'Qabul qilindi',
    received: ' 17:08 11.02.2022',
    operatorName: ' Ivan Ivanov ',
    tel:"+998 (99) 321-44-55 ",
    time: "17:04 11.02.2022",
    answer:" --:-- --.--.---- ",
    operatorTel:" +998 (99) 321-44-55 ",
    about:"Lorem Ipsum is...",
    timedifference:" --:--:-- ",
    operatorState:" Faol ",
  },
  {
    name: 'Ivan Ivanov',
    status: 3,
    state: 'Javob berildi',
    received: ' 17:08 11.02.2022"',
    operatorName: 'Ivan Ivanov ',
    tel:"+998 (99) 321-44-55 ",
    time: "17:04 11.02.2022",
    answer:"  17:27 11.02.2022",
    operatorTel:" +998 (99) 321-44-55 ",
    about:"Lorem Ipsum is...",
    timedifference:" 00:19:27 ",
    operatorState:"Faol ",
  },
  {
    name: 'Ivan Ivanov',
    status: 3,
    state: 'Javob berildi',
    received: ' 17:08 11.02.2022"',
    operatorName: 'Ivan Ivanov ',
    tel:"+998 (99) 321-44-55 ",
    time: "17:04 11.02.2022",
    answer:"  17:27 11.02.2022",
    operatorTel:" +998 (99) 321-44-55 ",
    about:"Lorem Ipsum is...",
    timedifference:" 00:19:27 ",
    operatorState:"Faol ",
  },
    {
    name: 'Ivan Ivanov',
    status: 3,
    state: 'Javob berildi',
    received: ' 17:08 11.02.2022"',
    operatorName: 'Ivan Ivanov ',
    tel:"+998 (99) 321-44-55 ",
    time: "17:04 11.02.2022",
    answer:"  17:27 11.02.2022",
    operatorTel:" +998 (99) 321-44-55 ",
    about:"Lorem Ipsum is...",
    timedifference:" 00:19:27 ",
    operatorState:"Faol ",
  },
  {
    name: 'Ivan Ivanov',
    status: 2,
    state: 'Qabul qilindi',
    received: ' 17:08 11.02.2022',
    operatorName: ' Ivan Ivanov ',
    tel:"+998 (99) 321-44-55 ",
    time: "17:04 11.02.2022",
    answer:" --:-- --.--.---- ",
    operatorTel:" +998 (99) 321-44-55 ",
    about:"Lorem Ipsum is...",
    timedifference:" --:--:-- ",
    operatorState:" Faol ",
  },
  {
    name: 'Ivan Ivanov',
    status: 1,
    state: 'Qabul qilinmadi',
    received: ' --:-- --.--.---- ',
    operatorName: '-------',
    tel:"+998 (99) 321-44-55 ",
    time: "17:04 11.02.2022",
    answer:" --:-- --.--.---- ",
    operatorTel:" ------ ",
    about:"Lorem Ipsum is...",
    timedifference:" --:--:-- ",
    operatorState:" ------ ",
  },
  {
    name: 'Ivan Ivanov',
    status: 2,
    state: 'Qabul qilindi',
    received: ' 17:08 11.02.2022',
    operatorName: ' Ivan Ivanov ',
    tel:"+998 (99) 321-44-55 ",
    time: "17:04 11.02.2022",
    answer:" --:-- --.--.---- ",
    operatorTel:" +998 (99) 321-44-55 ",
    about:"Lorem Ipsum is...",
    timedifference:" --:--:-- ",
    operatorState:" Faol ",
  },
  {
    name: 'Ivan Ivanov',
    status: 1,
    state: 'Qabul qilinmadi',
    received: ' --:-- --.--.---- ',
    operatorName: '-------',
    tel:"+998 (99) 321-44-55 ",
    time: "17:04 11.02.2022",
    answer:" --:-- --.--.---- ",
    operatorTel:" ------ ",
    about:"Lorem Ipsum is...",
    timedifference:" --:--:-- ",
    operatorState:" ------ ",
  },
]

export default defineComponent({
  name: 'AppealsTable',
  components:{
    AppealsChat
  },
  setup () {
    const dialog = ref(false)
    const position = ref('right')
    return {
      columns,
      rows,
      pagination: {
      sortBy: 'desc',
      descending: false,
      page: 1,
      rowsPerPage: 3,
      rowsNumber: 10,
    },
    dialog,
    position,

    open (pos, row) {
      if(row === 2 || row===3){
        return position.value = pos, dialog.value = true
      }

      // position.value = pos
      // dialog.value = true
    }
    }
  },
})
</script>
