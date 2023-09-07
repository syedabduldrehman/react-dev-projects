import axios from 'axios';

const instance = axios.create({
    baseURL:'...' // the  API(the cloud function) URL 

})

export default instance;