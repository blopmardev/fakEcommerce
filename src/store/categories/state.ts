import { Category } from '@/models/category';

export interface ICategoriesState {
    categories: Category[];
    isLoading: boolean;
    selectedCategory: Category | null;
}

function state(): ICategoriesState {
    return {
        categories: [],
        isLoading: false,
        selectedCategory: null,
    }
}

export default state;