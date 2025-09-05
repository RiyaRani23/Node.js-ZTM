// const request = require('./request.js');
// const response = require('./response.js');
  
// function makeRequest(url,data){
//     request.send(url , data);
//     return response.read();
// }


// WE can directly write send and read that represent we are only 
// calling send and read function from response and request file
const { send } = require('./request.js');
const { read } = require('./response.js');

function makeRequest(url,data){
    send(url , data);
    return read();
}

const responseData = makeRequest('https://google.com' , 'Hii')
console.log(responseData);

// Above code is CommonJs Modules

// *********************************************************
// Below is ECMAScript Modules

// import { send } from './request.js';
// import { read } from './response.js';





// OutPut

// sending encrypted data to https://google.com
// decrypted data

 

