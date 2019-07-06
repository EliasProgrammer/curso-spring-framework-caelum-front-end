const BASE_URI = 'http://localhost:8080/api';

class FetchAluraForumService {

    static get(resource) {
        const uri = `${BASE_URI}/${resource}`;
        console.log(uri)

        const requestDetails = {
            method: 'GET',
            headers: new Headers({
                "Accept": "application/json",
                "Accept-Language": "pt-BR"
            })      
        }

        return fetch(uri, requestDetails)
            .then(response => {
                
                if(response.ok)
                    return response.json();

                throw new Error('Não foi possível obter dados da API');
            });
    }

    static post(resource, data) {
        const uri = `${BASE_URI}/${resource}`;
        
        const jwt = localStorage.getItem("jwt");
        const bearerToken = `Bearer ${jwt}`;

        const requestDetails = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": bearerToken,
                "Accept": "application/json",
                "Accept-Language": "pt-BR"
            })      
        }

        return fetch(uri, requestDetails)
            .then(response => {

                if(response.ok)
                    return response.json();

                throw {
                    message: 'Não foi possível postar dados para a API',
                    httpStatus: response.status,
                    responseBody: response.json()
                };
            })
    }
} 

export default FetchAluraForumService;