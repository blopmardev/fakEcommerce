import { IUsersState } from "./state";
import { MutationTree } from "vuex";
import { User } from '@/models/user';

const mutations: MutationTree<IUsersState> = {
    setUsers(state:IUsersState, users: User[]) {
        state.users = users;
    },
    setIsLoading(state: IUsersState, value: boolean){
        state.isLoading = value;
    }
}

export default mutations