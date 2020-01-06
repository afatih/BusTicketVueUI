// import {userService} from '../_services/user.service';


export function handleResponse1(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                //  logout();
                location.reload(true);
            }
     
            // const error = (data && data.message) || response.statusText ;
            const error = (data && data.message) || response.status ;
            return Promise.reject(error);
        }

        return data;
    });
}