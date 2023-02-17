<template>
  <q-page class="flex flex-center">
    <div class="row bg-indigo-9" style="height: 100vh; width: 100%;">
      <q-card class="w-[90%] h-[90%] sm:w-[80%] sm:h-[80%] lg:w-[60%] mx-auto my-auto shadow-20">
        <q-btn-toggle
        v-model="language"
        :options="languages"
        toggle-color="blue-9"
        color="indigo-10"
        dense
        no-caps
        flat
        size="16px"
        class="text-normal"
      />
        <q-form ref="loginForm" @submit="onSubmit" @reset="onReset" @validation-error="onValidationError"
            class="overflow-auto flex items-center q-mx-auto" :class="$q.screen.xs ? '' : 'q-pa-md' ">
      <div class="column items-center justify-center q-mx-auto q-mt-xl">
        <div class="text-center q-my-xl q-mx-auto">
          <img src="../assets/kadastr.svg" alt="Kadastr agentligi" width="205" height="76"/>
        </div>
        <div class="text-center text-[24px] md:text-[32px] text-indigo-10 text-weight-medium q-mx-auto">
          {{ $t("login") }}
        </div>
        <div class="q-pa-lg">
          <div class="q-pa-sm justify-center full-width row">
            <q-input ref="username" color="blue-9" outlined
                    label-color="indigo-10"
                    :dense="$q.screen.xs"
                    :label="$t('login')"
                    lazy-rules
                    :rules="[val => !!val || 'required']" class="q-mb-md col-xs-10 col-sm-10 col-md-10 text-[#002955]">
              <template v-slot:prepend>
                <q-icon name="person" color="indigo-10"/>
              </template>
            </q-input>
            <q-input ref="password" :type="viewPsw?'text':'password'"
                    label-color="indigo-10"
                    :dense="$q.screen.xs"
                    color="indigo-10" outlined
                    :label="$t('password')"
                    lazy-rules
                    counter
                    :rules="[val => !!val || 'required',
                  val => val.length >= 3 || 'min_6_chars' ]" class="q-mb-md col-xs-10 col-sm-10 col-md-10 text-[#002955]">
              <template v-slot:prepend>
                <q-icon name="lock" color="indigo-10"/>
              </template>
              <template v-slot:append>
                <q-icon
                  :name="viewPsw ? 'visibility' : 'visibility_off'"
                  class="cursor-pointer"
                  @click="viewPsw = !viewPsw"
                />
              </template>
            </q-input>
            <div class="row no-wrap justify-center col-9">
              <q-checkbox :label="$t('remember')" color="indigo-10" size="xs"/>
            </div>
          </div>
          <div class="full-width row wrap justify-center q-mt-lg q-mb-lg">
            <router-link to="/dashboard">
              <q-btn :label="$t('enter')" color="indigo-10" no-caps class="q-ml-sm q-pl-xl q-pr-xl q-pt-sm q-pb-sm text-white"
                  type="submit" size="md"/>
            </router-link>
          </div>
        </div>
      </div>
    </q-form>

      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import {mapGetters, mapMutations} from 'vuex';

export default defineComponent({
  name: 'LoginPage',
  data() {
      return {
        is_password: true,
        credentials: {
          login: '',
          password: '',
          remember: false,
          language: 'uz'
        },
        viewPsw: false,
        languages_state: [
          {'name': 'O`zbek', 'code': 'uz'},
          {'name': 'Русский', 'code': 'ru'},
          {'name': 'English', 'code': 'en'},
        ]
      }
    },
    computed: {
      language: {
        get() {
          return this.$i18n.locale;
        },
        set(value) {
          this.$i18n.locale = value;
        },
      },
      languages: function () {
        let locs = [];
        for (let i = 0; i < this.languages_state.length; i++) {
          locs.push({label: this.languages_state[i].name, value: this.languages_state[i].code});
        }
        return locs;
      }
    },
    methods: {
      ...mapMutations(['setUser', 'setRoutes', 'setCurrentRouteName']),
      ...mapGetters(['getUser']),
      onSubmit() {
        this.$i18n.locale = 'uz'
        // this.$axios.post(apiUrls.AUTH + '/login' + this.optionPage({
        //   login: this.credentials.login,
        //   password: this.credentials.password,
        // })).then(response => {
        //   this.setUser(response.data)
          this.setRoutes(this.$router.options.routes)
          this.setCurrentRouteName('DashboardPage')
          this.$router.push({path: '/admin/dashboard'})

        // }).catch(err => {
        //   this.showNotifyError(err.errorMessage)
        //   console.log(err)
        // })
      },
      onReset() {
        this.credentials.login = null
        this.credentials.password = null
      },
    },
})
</script>
