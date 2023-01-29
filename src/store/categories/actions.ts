import fakeShopApi from "@/api/fakeShopApi";
import { Category } from '@/models/category';
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { ICategoriesState } from "./state";

const actions: ActionTree<ICategoriesState, IState> = {
    async fetchCategories({ commit }) {
        commit('setIsLoading', true);

        const { data } = await fakeShopApi.get<unknown, AxiosResponse<Category[]>>('/categories');

        commit('setIsLoading', false);

        commit('setCategories', data);
    },

    async fetchCategoryById({ commit }, categoryId: number) {

        commit("setIsLoading", true);

        const { data } = await fakeShopApi.get<unknown, AxiosResponse<Category>>(
            `/categories/${categoryId}`
        );

        commit("setIsLoading", false);

        commit("setSelectedCategory", data);
    },
};

export default actions