import {connectionService} from './connection.service'

export const tourService={
    getCities,
    getTours,
    getTourDetail,
    addTourToUser,
    getSelectedTours,
    apiUrl:connectionService.apiUrl
}


function getCities(){
    const requestOptions = {
        method:'GET',
    };
    return fetch(this.apiUrl+'/tour/cities',requestOptions).then(handleResponse);
}


function getTours(from,to,date){
    const requestOptions={
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({from,to,date})
    }
    return fetch(this.apiUrl+'/tour',requestOptions).then(handleResponse)
}

function getTourDetail(id){
    const requestOptions={
        method:'GET'
    }
    return fetch(this.apiUrl+'/tour/detail/'+id ,requestOptions).then(handleResponse)
}

function addTourToUser(tourId,userId){
    const requestOptions={
        method:'POST',
        headers:{'content-Type':'application/json'},
        body:JSON.stringify({tourId,userId})
    }
    return fetch(this.apiUrl+'tour/add',requestOptions).then(handleResponse)
}

function getSelectedTours(id){
    const requestOptions={
        method:'GET'
    }
    return fetch(this.apiUrl+'/tour/user/'+id ,requestOptions).then(handleResponse)
}




function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                location.reload(true);
            }
     
            // const error = (data && data.message) || response.statusText ;
            const error = (data && data.message) || response.status ;
            return Promise.reject(error);
        }

        return data;
    });
}