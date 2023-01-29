import { User } from '@/models/user';
import { createStore } from 'vuex';
import cartModule from './cart';
import usersModule from './users';
import productsModule from './products';
import categoriesModule from './categories';

export interface IState {
  authUser: User | null;
  greeting: string;
}

export default createStore<IState>({
  // Variables de estado de la App
  state: {
    authUser: null,
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
    cart: cartModule,
    users: usersModule,
    products: productsModule,
    categories: categoriesModule,
  }
})
