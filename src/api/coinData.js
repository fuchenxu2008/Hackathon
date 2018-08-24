import axios from 'axios';

const ROOT_URL = 'http://stellarcoder.com:5000';

export const getCoinList = () => {
    return axios.get(`${ROOT_URL}/vollist`);
}