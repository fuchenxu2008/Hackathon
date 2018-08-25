const axios = require('axios')
const web3 = require('web3');

const getData = () => {
    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=20', {
        headers: {
            'X-CMC_PRO_API_KEY': 'f22cbc37-a098-4fb3-84f4-872f38d2b023'
        }
    })
    .then(res => console.log(res.data));
}

// getData();
console.log(web3);
