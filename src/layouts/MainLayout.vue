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
          {{$t(this.currentUrl)}}
        </q-toolbar-title>

        <q-select
        v-model="language"
        :options="languages"
        option-value="code"
        option-label="name"
        :display-value="language ? language.name : 'No'"
        borderless
        transition-show="flip-up"
        transition-hide="flip-down"
        color="blue-9"
        class="q-mr-sm row items-center"
      >
        <template v-slot:selected="props">
          <div class="fs-14 text-indigo-9">
            {{this.languages_state.find(locale => locale.code === language).name}}
          </div>
        </template>

      </q-select>
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
import {mapGetters, mapMutations} from 'vuex'
// import {apiUrls, baseUrl} from "src/utils/const/apiUrls";
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import logo from '../assets/kadastr-logo.svg'
import '@quasar/extras/material-icons-outlined'


const linksList = [

  {
    title: 'dashboard',
    icon: 'dashboard',
    link: '/dashboard'
  },
  {
    title: 'appeals',
    icon: 'assignment',
    link: '/appeals'
  },
  {
    title: 'operators',
    icon: 'supervisor_account',
    link: '/operators'
  },
  {
    title: 'settings',
    icon: 'settings',
    link: '/settings'
  },
  {
    title: 'help',
    icon: 'help_outline',
    link: '/help'
  },

]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },
  data:()=>({
    logo,
    languages_state: [
      {'name': 'O`zbek', 'code': 'uz'},
        {'name': 'Русский', 'code': 'ru'},
        {'name': 'English', 'code': 'en'}
      ],
      path: ''
    // currentUrl:localStorage.getItem('link') || "Dashboard",
  }),
  computed:{
    currentUrl(){
      return this.$router.currentRoute.value.name
    },

    language: {
      get() {
        if (!this.$i18n.locale) {
          if (this.$i18n.locale = this.$store.state.user) {
            this.$i18n.locale = this.$store.state.user.language;
          } else {
            this.$i18n.locale = 'uz';
          }
        }
        console.log('---', this.languages_state.find(locale => locale.code === this.$i18n.locale).code)
        // console.log('--', this.languages_state.find(locale => locale.code === this.$i18n.locale));
        return this.languages_state.find(locale => locale.code === this.$i18n.locale).code;
      },
      set(langObj) {
        this.$i18n.locale = langObj.code;
        this.setLanguage(this.language);
        // this.setUserLanguage(this.language)
      }
    },
    
    languages: function () {
      return this.languages_state;
    },
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

    ...mapGetters([
      'getUser',
    ]),

    ...mapMutations([
      'setLanguage',
    ]),

    // setCurrLanguage() {
    //   let user = this.getUser()
    //   if (user == null) this.$router.push('/');
    //   if (user) this.language = user.language ? user.language : 'uz';
    //   this.setLanguage(this.language)
    //   this.$i18n.locale = this.language
    //   return
    // },

    reloadWindow() {
      window.location.reload()
    },

    // logOut() {
    //   this.$q.notify({
    //     type: 'info',
    //     message: this.$t('are_you_sure_logout'),
    //     position: 'center',
    //     timeout: 0,
    //     color: 'blue',
    //     actions: [
    //       {
    //         label: this.$t('no'), color: 'white', handler: () => {
    //         }
    //       },
    //       {
    //         label: this.$t('yes'), color: 'white', handler: () => {
    //           this.$router.push('/');
    //           this.bean = {}
    //           this.$store.commit('clearUserSession');
    //           setTimeout(fun => {
    //             this.reloadWindow()
    //           }, 1_00)

    //         }
    //       },
    //     ]
    //   })
    // },

    // setUserLanguage(language) {
    //   this.$axios.put(apiUrls.USERS + '/lang?language=' + language, {}).then(res => {
    //   }).catch(err => {
    //   })
    // },
  }, 

  mounted() {
    // this.setCurrLanguage()
  }
})
</script>
