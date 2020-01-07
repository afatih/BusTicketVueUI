import { tourService } from '../_services/tour.service';
import { router } from '../_helpers/router';
// import { handleResponse } from '../_helpers/handleResponse';

const state = {
    cities: [],
    tours: {},
    selectedTours: {},
    userTours: {},

    complatedMessage: "",

}


const actions = {

    deleteUserTour({ dispatch, commit }, { userTourId, tourId, userId }) {
        tourService.deleteUserTour(userTourId, tourId, userId)
            .then(
                () => {
                    dispatch('alert/success', "Silme işlemi başarılı", { root: true });

                    //kullanıcının turlarını güncelleme işlemi
                    tourService.getUserTours(userId)
                        .then(
                            selectedTours => commit("getAllUserTours", selectedTours)
                        )
                }
            )
    },


    getUserTours({ commit }, { userId }) {
        tourService.getUserTours(userId)
            .then(
                selectedTours => commit("getAllUserTours", selectedTours)
            )
    },



    getCities({ commit }) {
        tourService.getCities()
            .then(
                mainCities => {
                    commit('getAllCities', mainCities);
                }
            ).catch(() => {
            })
    },

    addTourToUser({ commit, dispatch }, { tourId, userId }) {
        tourService.addTourToUser(tourId, userId)
            .then(
                () => {
                    commit('addUserTourComplate'),
                        router.push('/complated')
                },
                err => {
                    dispatch('alert/error', err, { root: true });
                }
            )
    },

    getTours({ commit, dispatch }, { from, to, date }) {
        tourService.getTours(from, to, date)
            .then(
                mainTours => {
                    commit('getAllTours', mainTours),
                        // router.push('/tour'+'/'+from+'/'+to+'/'+date)
                        router.push({ name: 'tour', params: { from: from, to: to, date: date } }).catch(err => {
                            console.log(err);
                        })
                },

                err => {
                    dispatch('alert/error', err, { root: true });
                }

            )
    },

    getTourDetail({ commit, dispatch }, { id }) {
        tourService.getTourDetail(id)
            .then(
                selectedTour => {

                    commit('getSelectedTour', selectedTour),
                        router.push({ name: 'detail', params: { id: id } }).catch(err => {
                            console.log(err);
                        })
                },
                err => {
                    dispatch('alert/error', err, { root: true });
                })

    }
}

const mutations = {
    getAllCities(state, mainCities) {
        state.cities = mainCities;
    },
    asd(state) {
        state.cities = {};
    },
    getAllTours(state, mainTours) {
        state.tours = mainTours;
    },
    getSelectedTour(state, selectedTour) {
        state.selectedTours = selectedTour;
    },
    getAllUserTours(state, selectedTours) {
        state.userTours = selectedTours;
    },
    addUserTourComplate(state) {
        state.complatedMessage = "Bilet alma işleminiz başarıyla tamamlandı. Satın aldığınız biletleri Biletlerim sayfasına tıklayarak görüntüleyebilirsiniz. "
    }

}


export const tour = {
    namespaced: true,
    state,
    actions,
    mutations
}