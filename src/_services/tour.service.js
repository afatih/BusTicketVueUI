import {connectionService} from './connection.service';
import {authHeader} from '../_helpers/auth-header';
// import {userService} from '../_services/user.service'

export const tourService={
    getCities,
    getTours,
    getTourDetail,
    addTourToUser,
    deleteUserTour,
    getUserTours,
    apiUrl:connectionService.apiUrl
}

function deleteUserTour(userTourId,tourId){
    const requestOptions={
        method:'DELETE',
        headers: authHeader(),
        body:JSON.stringify({userTourId,tourId})
    }
    return fetch(this.apiUrl+'/tour',requestOptions).then(handleResponse)
}

function getCities(){
    const requestOptions = {
        method:'GET',
        headers:authHeader()  
    
    };
    return fetch(this.apiUrl+'/tour/cities',requestOptions).then(handleResponse)
}


function getTours(from,to,date){

    const requestOptions={
        method:'POST',
        headers: authHeader(),
        body:JSON.stringify({from,to,date})
    }
    return fetch(this.apiUrl+'/tour',requestOptions).then(handleResponse)
}

function getTourDetail(id){
    const requestOptions={
        method:'GET',
        headers:authHeader()
    }
    return fetch(this.apiUrl+'/tour/detail/'+id ,requestOptions).then(handleResponse)
}

function addTourToUser(tourId,userId){
    const requestOptions={
        method:'POST',
        headers: authHeader(),
        body:JSON.stringify({tourId,userId})
    }
    return fetch(this.apiUrl+'/tour/add',requestOptions).then(handleResponse)
}

function getUserTours(id){
    const requestOptions={
        method:'GET',
        headers:authHeader()
    }
    return fetch(this.apiUrl+'/tour/user/'+id ,requestOptions).then(handleResponse)
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // userService.logout();
                // location.reload(true);
            }
     
            // const error = (data && data.message) || response.statusText ;
            const error = (data && data.message) || response.status ;
            return Promise.reject(error);
        }

        return data;
    });
}