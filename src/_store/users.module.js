import {userService} from '../_services/user.service'

const state = {
    all:{}
};

const actions = {
    getAll ({commit}){
        userService.getAll()
            .then(
                users=>commit('getAllSuccess',users),
                error=>commit('getAllFailure', error)
            );
    }
}

const mutations={
    getAllSuccess(state,users){
        state.all={items:users};
    },
    getAllFailure(state, error) {
        state.all = { error };
    },
}

export const users={
    namespaced: true,
    state,
    actions,
    mutations
}