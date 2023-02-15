<template>
  <q-layout view="lHh Lpr lFf" class="overflow-hidden">
    <q-header elevated>
      <q-toolbar class="bg-white text-[#002955] not-italic">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-[20px] lg:text-[28px] font-medium inline-block" >
          {{this.currentUrl}}
        </q-toolbar-title>

        <q-btn class="mr-[16px] md:mr-[32px] w-[26px] md:w-[32px] h-[26px] md:h-[32px]" flat dense round icon="notifications_none" aria-label="notification"></q-btn>
        <div v-if="$q.screen.width>=560" class="mr-[16px] md:mr-[32px]">
          <q-btn round flat :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'" @click="$q.fullscreen.toggle()"/>
        </div>
        <q-btn class="mr-[16px] md:mr-[32px] w-[26px] md:w-[32px] h-[26px] md:h-[32px]" flat dense round icon="input" aria-label="input" @click="$router.push('/')"></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer class="bg-[#002955]"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header class="p-[46px]">
          <img :src="this.logo" alt="logo" width="188" height="94">

        </q-item-label>

        <EssentialLink class="text-white text-lg md:text-2xl font-medium py-0 md:py-5 pl-10"
        v-for="link in essentialLinks" :key="link.title" v-bind="link" @click="getUrl()" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import logo from '../assets/kadastr-logo.svg'
import '@quasar/extras/material-icons-outlined'


const linksList = [

  {
    title: 'Dashboard',
    icon: 'dashboard',
    link: '/dashboard'
  },
  {
    title: 'Appeals',
    icon: 'assignment',
    link: '/appeals'
  },
  {
    title: 'Operators',
    icon: 'supervisor_account',
    link: '/operators'
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/settings'
  },
  {
    title: 'Help',
    icon: 'help_outline',
    link: '/help'
  },

]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },
  data:()=>({
    logo,
    // currentUrl:localStorage.getItem('link') || "Dashboard",
  }),
  computed:{
    currentUrl(){
      return this.$router.currentRoute.value.name
    }
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },

  methods:{
    getUrl(){
      this.currentUrl = localStorage.getItem('link')
  },
}
})
</script>
