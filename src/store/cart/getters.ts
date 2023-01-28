import { GetterTree } from "vuex";
import { IState } from "..";
import { ICartState } from "./state";

const getters: GetterTree<ICartState, IState> = {
    getCartItems(state){
        return state.users;
    }
}

export default getters;