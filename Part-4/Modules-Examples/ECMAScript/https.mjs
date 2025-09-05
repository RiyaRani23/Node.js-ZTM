import { send } from './internals/request.mjs';
import { read } from './internals/response.mjs';


function makeRequest(url,data){
    send(url , data);
    return read();
}

const responseData = makeRequest('https://google.com' , 'Hii')
console.log(responseData);



// OutPut


// sending encrypted data to https://google.com decrypted data
