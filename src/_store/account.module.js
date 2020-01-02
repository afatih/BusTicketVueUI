import {userService} from '../_services/user.service';
import {router} from '../_helpers/router';

const user = JSON.parse(localStorage.getItem('user'));
const state = { status: { loggedIn: true }, user }
   

const actions ={
    login({dispatch,commit},{email,password}){
        commit('loginRequest',{email});

        userService.login(email,password)
            .then(user=>{
                commit('loginSuccess',user);
                router.push('/');
            },
            error => {
                commit('loginFailure', error);
                dispatch('alert/error', error, { root: true });
            }
            )
    },
    logout({commit}){
        userService.logout();
        commit('logout');
    }

}


const mutations = {
    loginRequest(state, user) {
        state.status = { loggingIn: true };
        state.user = user;
    },
    loginSuccess(state, user) {
        state.status = { loggedIn: true };
        state.user = user;
    },
    loginFailure(state) {
        state.status = {};
        state.user = null;
    },
    logout(state) {
        state.status = {};
        state.user = null;
    }
};




export const account = {
    namespaced: true,
    state,
    actions,
    mutations
};