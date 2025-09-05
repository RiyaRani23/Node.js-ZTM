const REQUEST_TIMEOUT = 500;

function encrypt(data) {
    return 'encrypted data';
}

// Shorthand module.exports or exports
// ShortHnad -> exports.send = function send(url , data) 
 function send(url , data) {
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`);
}


module.exports = {   //CommonJS Modules
    REQUEST_TIMEOUT,
   send,
};

// *********************************8
// ECMAScript Module

// export {  
//     REQUEST_TIMEOUT,
//    send,
// };

