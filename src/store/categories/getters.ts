import { GetterTree } from "vuex";
import { IState } from "..";
import { ICategoriesState } from "./state";

const getters: GetterTree<ICategoriesState, IState> = {
    getCategories(state){
        return state.categories;
    },

    getIsLoading(state){
        return state.isLoading;
    },
    getCategory(state){
        return state.selectedCategory;
    },
};

export default getters;