import axios from 'axios';

const ROOT_URL = 'http://stellarcoder.com:5000';

export const getCandleData = (query) => {
    const params = [];
    if (query) {
        query.start && params.push(`start=${query.start}`);
        query.end && params.push(`end=${query.end}`);
        query.tf && params.push(`tf=${query.tf}`);
        query.symbol && params.push(`symbol=${query.symbol}`);
    }
    return axios.get(`${ROOT_URL}/coin?${params.join('&')}`);
}