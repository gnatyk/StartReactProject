

const axios = require('axios');

function getHeaders() {
    return {
        'X-Auth-Token': localStorage.getItem('customer_token'),
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*/*',
    };
}
const urlServer = process.env.REACT_APP_API_URL;
let _invalidToken = null;
function onInvalidToken(foo) {
    _invalidToken = foo;
}

 var http = axios.create({
      baseURL: urlServer,
      timeout: 1000,
      headers: getHeaders()
    });

///localStorage.setItem('token', token);


module.exports = {
    http
};
