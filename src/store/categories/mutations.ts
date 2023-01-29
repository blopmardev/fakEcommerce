import { ICategoriesState } from "./state";
import { MutationTree } from "vuex";
import Category from '@/models/category';

const mutations: MutationTree<ICategoriesState> = {
    setCategories(state: ICategoriesState, categories: Category[]) {
        state.categories = categories;
    },
    setIsLoading(state: ICategoriesState, value: boolean){
        state.isLoading = value;
    },
    setSelectedCategory(state, category: Category){
        state.selectedCategory = category;
    }
}

export default mutations