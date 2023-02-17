<template>
  <q-scroll-area
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
      style="height: 85%">
      <q-table
        :dense="$q.screen.lt.md"
        :rows="rows"
        :columns="columns"
        :loading="loading"
        :filter="filter"
        row-key="name"
        class="text-center"
        hide-pagination
        v-model:pagination="pagination"
      >
      <template v-slot:header="props">
          <q-tr :props="props" class="bg-[#002955]/10 text-sm md:text-lg font-medium text-[#031529]">
            <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
              class="text-[#031529] text-center">
              {{ $t(col.label) }}
            </q-th>
          </q-tr>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props" class="text-sm md:text-base xl:text-lg font-normal text-[#58636f]" clickable  @click="open('right',props.row.status)">
            <q-td key="name" :props="props">
              <div class="pl-2 md:pl-8 lg:pl-14 text-sm lg:text-base xl:text-lg">{{ $t('full_name') }}: <span class="text-[#031529] font-medium">{{ props.row.name }}</span></div>
              <div  class="pl-2 md:pl-8 lg:pl-14 text-sm lg:text-base xl:text-lg">{{ $t('phone') }}: <span class="text-[#031529] font-medium">{{ props.row.tel }}</span></div>
              <div  class="pl-2 md:pl-8 lg:pl-14 text-sm lg:text-base xl:text-lg">{{ $t('created_by') }}: <span class="text-[#031529] font-medium">{{ props.row.time }}</span></div>
            </q-td>
            <q-td key="state" :props="props" class="text-left">
              <div class="pl-2 md:pl-8 lg:pl-14 text-sm lg:text-base xl:text-lg">{{ $t('status') }}:
                <span v-if="props.row.status==1" class="text-[#ffffff] font-normal bg-[#cf3d34] p-1 rounded">{{ props.row.state }}</span>
                <span v-if="props.row.status==2" class="text-[#ffffff] font-normal bg-[#ebb93b] p-1 rounded">{{ props.row.state }}</span>
                <span v-if="props.row.status==3" class="text-[#ffffff] font-normal bg-[#34cf4d] p-1 rounded">{{ props.row.state }}</span>
              </div>
              <div class="pl-2 md:pl-8 lg:pl-14 text-sm lg:text-base xl:text-lg">{{ $t('time') }}: <span class="text-[#031529] font-medium">{{ props.row.time }}</span></div>
              <div class="pl-2 md:pl-8 lg:pl-14 text-sm lg:text-base xl:text-lg">{{ $t('content') }}: <span class="text-[#031529] font-medium">{{ props.row.about }}</span></div>
            </q-td>
            <q-td key="answer" :props="props" class="text-left">
              <div class="pl-2 md:pl-8 lg:pl-14 text-sm lg:text-base xl:text-lg">{{ $t('received') }}: <span class="text-[#031529] font-medium">{{ props.row.received }}</span></div>
              <div class="pl-2 md:pl-8 lg:pl-14 text-sm lg:text-base xl:text-lg">{{ $t('answered') }}: <span class="text-[#031529] font-medium">{{ props.row.answer }}</span></div>
              <div class="pl-2 md:pl-8 lg:pl-14 text-sm lg:text-base xl:text-lg">{{ $t('time_difference') }}: <span class="text-[#031529] font-medium">{{ props.row.timedifference }}</span></div>
            </q-td>
            <q-td key="operator" :props="props" class="text-left">
              <div class="pl-2 md:pl-8 lg:pl-14 text-sm lg:text-base xl:text-lg">{{ $t('full_name') }}: <span class="text-[#031529] font-medium">{{ props.row.operatorName }}</span></div>
              <div class="pl-2 md:pl-8 lg:pl-14 text-sm lg:text-base xl:text-lg">{{ $t('phone') }}: <span class="text-[#031529] font-medium">{{ props.row.operatorTel }}</span></div>
              <div class="pl-2 md:pl-8 lg:pl-14 text-sm lg:text-base xl:text-lg">{{ $t('status') }}: <span class="text-[#031529] font-medium">{{ props.row.operatorState }}</span></div>
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
    label: 'client',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true,
    headerStyle: 'font-weight: 500; font-size: 18px'
  },
  { name: 'state', align: 'left', label: 'appeal', field: 'murojat', sortable: true, headerStyle: 'font-weight: 500; font-size: 18px'},
  { name: 'answer', align: 'left', label: 'answer', field: 'javob', sortable: true, headerStyle: 'font-weight: 500; font-size: 18px' },
  { name: 'operator', align: 'left', label: 'operator', field: 'operator', headerStyle: 'font-weight: 500; font-size: 18px' },

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
    const loading = ref(false)
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
      columns,
      rows,
      filter: {},
      pagination: {
      sortBy: 'desc',
      descending: false,
      page: 1,
      rowsPerPage: 3,
      rowsNumber: 10,
    },
    dialog,
    position,
    loading,

    open (pos, row) {
      if(row === 2 || row===3){
        return position.value = pos, dialog.value = true
      }
    },
    }
  },
})
</script>
