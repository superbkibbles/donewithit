import { create } from 'apisauce';

import { getToken } from '../auth/storage';
import catche from '../utility/catche';
import settings from '../config/settings';

const apiClient = create({
    baseURL: settings.apiUrl
});

apiClient.addAsyncRequestTransform(async (request) => {
    const token = await getToken();
    if (!token) return;
    request.headers["x-auth-token"] = token;
})

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig);

    if(response.ok) {
        catche.store(url, response.data);
        return response;
    }

    const data = await catche.get(url);
    return data ? {ok: true, data}: response;

}

export default apiClient;