import { Module } from 'vuex';
import state, { ICartState } from './state';
import mutations from './mutations';
import { IState } from '..';

const cartModule: Module<ICartState, IState> = {
    namespaced: true,
    state,
    mutations
}

export default cartModule