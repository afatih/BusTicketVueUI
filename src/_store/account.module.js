import {userService} from '../_services/user.service';
import {router} from '../_helpers/router';

const user = JSON.parse(localStorage.getItem('user'));
const state = { status: { loggedIn: true }, user,registerComplated:"" };

   

const actions ={
    activation({commit,dispatch},{activationKey}){
        userService.activation(activationKey)
            .then(user=>
                {
                    commit('loginSuccess',user);
  
            },
            error => {
                dispatch('alert/error', error, { root: true });
            })
    },

    register({commit,dispatch},{user}){
        console.log('from tour module user :  '+ JSON.stringify(user))
        userService.register(user)
            .then( () =>{
                commit('RegisterSuccessfull'),
                router.push({name:'registerComplated'});

            },
            err=>{
                dispatch('alert/error',err,{root:true});
            })
    },


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
    },
    RegisterSuccessfull(state){
        state.registerComplated="Üyelik oluşturma işleminiz başarıyla tamamlandı. Hesabınızı aktif etmek için lütfen mail hesabınızdaki linke tıklayınız.";
    }
};




export const account = {
    namespaced: true,
    state,
    actions,
    mutations
};