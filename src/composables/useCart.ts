//import { User } from "@/models/user";
import { Product } from '@/models/product';
import { computed } from "vue";
import { useStore } from "vuex";

export const useCart = () => {
  const store = useStore();

  return {
    // getters
    cartItems: computed(() => store.getters["cart/getCartItems"]),
    isCartOpen: computed(() => store.getters["cart/getIsOpen"]),

    // mutations
    //addElementToCart: (user: User) => store.commit("cart/addElement", user),
    //removeElementFromCart: (user: User) =>
      //store.commit("cart/removeElement", user),
    //toggleCart: () => store.commit("cart/toggleCart"),

    addElementToCart: (product: Product) => store.commit("cart/addElement", product),
    removeElementFromCart: (product: Product) =>
      store.commit("cart/removeElement", product),
    toggleCart: () => store.commit("cart/toggleCart"),
  };
};