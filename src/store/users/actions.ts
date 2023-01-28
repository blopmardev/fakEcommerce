import fakeShopApi from "@/api/fakeShopApi";
import { User } from '@/models/user';
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IUsersState } from "./state";


const actions: ActionTree<IUsersState, IState> = {
    async fetchUsers({ commit }) {
        commit('setIsLoading', true);
        const { data } = await fakeShopApi.get<unknown, AxiosResponse<User[]>>('/users');
        commit('setIsLoading', false);

        commit('setUsers', data);
    },
};

export default actions