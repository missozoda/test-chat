import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
// import EssentialLink from '../components/EssentialLink.vue'

import state from 'src/store/module-example/state'
import mutations from 'src/store/module-example/mutations'
import getters from 'src/store/module-example/getters'
import { locStub } from '@vue/compiler-core'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state:state,
    mutations:mutations,
    getters:getters,
    modules: {
      // example
    },
    // plugins:[
    //   createPersistedState({
    //     storage:{
    //       getItem: key => ls.get(key),
    //       setItem: (key, value)=> ls.set(key, value)
    //     }
    //   })
    // ],

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
