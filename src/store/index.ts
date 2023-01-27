import { createStore } from 'vuex'

export default createStore({
  // Variables de estado de la App
  state: {
    authUser: {
      id: 5,
      email: "micorreo@dominio.es",
      name: "Marcos",
    },
    greeting: "🟢Hola, estás online"
  },
  getters: {
  },
  mutations: {
    changeGreeting(state){
      state.greeting = " 🔴Sesión Cerrada"
    }
  },
  actions: {
  },
  modules: {
  }
})
