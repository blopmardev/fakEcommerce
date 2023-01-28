import { createStore } from 'vuex'

export default createStore({
  // Variables de estado de la App
  state: {
    authUser: {
      id: 5,
      email: "micorreo@dominio.es",
      name: "Marcos",
    },
    greeting: "🟢Hola, estás online",
  },
  getters: {
    hello(state){
      return state.greeting;
    }
  },
  mutations: {
    changeGreeting(state, hello: string){
      state.greeting = hello;
    },
  },
  actions: {
  },
  modules: {
  }
})
