import { computed } from 'vue';
import { useStore } from 'vuex';

const useCategories = () => {
    const store = useStore();

    return {
        categories: computed(() => store.getters['categories/getCategories']),
        isLoading: computed(() => store.getters['categories/getIsLoading']),
        category: computed(() => store.getters['categories/getCategory']),

        fetchCategories: () => store.dispatch("categories/fetchCategories"),
        fetchCategoryById: (categoryId: number) =>
            store.dispatch("categories/fetchCategoryById", categoryId),
    }
}

export default useCategories