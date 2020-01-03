import { tourService } from '../_services/tour.service';
import { router } from '../_helpers/router';

const state = {
    cities: {},
    tours: {},
    selectedTours: {},

    complatedMessage:"",
    errorMessage:"",
    errorType:""
}


const actions = {
    getSelectedTours({commit},{userId}){
        console.log('Module Id:'+userId)
        tourService.getSelectedTours(userId)
            .then(
                selectedTours=>commit("allSelectedTours",selectedTours)
            )
    },


    getCities({ commit }) {
        tourService.getCities()
            .then(
                mainCities => {
                    commit('getAllCities', mainCities);
                }
            )
    },

    addTourToUser({commit},{tourId,userId}){
        tourService.addTourToUser(tourId,userId)
            .then(
                commit('addUserTourComplate'),
                router.push('/complated')
            )
    },

    getTours({ commit }, { from, to, date }) {
        tourService.getTours(from, to, date)
            .then(
                mainTours => {
                    commit('getAllTours', mainTours),
                    commit('clearErrors'),
                        // router.push('/tour'+'/'+from+'/'+to+'/'+date)
                        router.push({ name: 'tour', params: { from: from, to: to, date: date } }).catch(err => {
                            console.log(err);
                        })
                },
                
                error=>{
                    commit('getAllFailure',error),
                    console.log('Error is here')
                }
                
            )
    },

    getTourDetail({ commit }, { id }) {
        tourService.getTourDetail(id)
            .then(
                selectedTour => {
                    commit('getSelectedTour', selectedTour),
                        router.push({ name: 'detail', params: { id: id } }).catch(err => {
                            console.log(err);
                        })
                })

    }
}

const mutations = {
    getAllCities(state, mainCities) {
        state.cities = mainCities;
    },
    getAllTours(state, mainTours) {
        state.tours = mainTours;
    },
    getSelectedTour(state,selectedTour){
        state.selectedTour=selectedTour;
    },
    getAllFailure(state,error){
        state.errorMessage=error;
        state.errorType= 'alert-danger';
    },
    clearErrors(state){
        state.errorMessage="";
        state.errorType= '';
    },
    addUserTourComplate(state){
        state.complatedMessage="Bilet alma işleminiz başarıyla tamamlandı. Satın aldığınız biletleri biletlerim sayfasına tıklayarak görüntüleyebilirsiniz. "
    },
    allSelectedTours(state,selectedTours){
        state.selectedTours=selectedTours;
    }
}


export const tour = {
    namespaced: true,
    state,
    actions,
    mutations
}