import {tourService} from '../_services/tour.service';
import {router} from '../_helpers/router';

const state ={
    cities:{},
    tours:{}
}

const actions={
    getCities({commit}){
        tourService.getCities()
            .then(
                mainCities=>{
                    commit('getAllCities',mainCities);
                }
            )
    },
    getTours({commit},{from,to,date}){
        tourService.getTours(from,to,date)
            .then(
                mainTours=>{
                    commit('getAllTours',mainTours),
                    router.push('/selectTour')
                },
            )
    }
}


const mutations = {
    getAllCities(state,mainCities){
        state.cities=mainCities;
    },
     getAllTours(state,mainTours){
        state.tours=mainTours;
    }
}


export const tour={
    namespaced: true,
    state,
    actions,
    mutations
}