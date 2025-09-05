

function decrypt(data) {
    return 'decrypted data';
}

// Shorthand -> module.exports.read = function read()
 function read(){
    return decrypt('data');
}


module.exports ={  // CommonJS Modules
    read,
}

// ****************************************
// ECMA Script Modules

// export {  
//     read,
// }
