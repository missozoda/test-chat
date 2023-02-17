<template>
  <router-link :to="link">
    <q-item clickable @click="setLink(title)">
      <q-item-section v-if="icon" avatar>
        <q-icon class="material-icons-outlined font-normal" :size="$q.screen.md ? '28px': '24px'" :name="icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-[18px] lg:text-[24px]">{{ $t(title) }}</q-item-label>
      </q-item-section>
    </q-item>
  </router-link>
</template>


<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: '/dashboard'
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods:{
    setLink(link){
      localStorage.setItem('link', link)
    }
  }
})
</script>
