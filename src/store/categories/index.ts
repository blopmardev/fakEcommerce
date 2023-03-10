import { Module } from "vuex";
import { IState } from "..";
import { ICategoriesState } from '../categories/state';
import state from "./state";
import getters from './getters';
import mutations from "./mutations";
import actions from "./actions";

const categoriesModule: Module<ICategoriesState,IState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

export default categoriesModule