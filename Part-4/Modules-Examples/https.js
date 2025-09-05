const request = require('./request.js');
const response = require('./response.js');

function makeRequest(url,data){
    request.send(url , data);
    return response.read();
}

const responseData = makeRequest('https://google.com' , 'Hii')
console.log(responseData);