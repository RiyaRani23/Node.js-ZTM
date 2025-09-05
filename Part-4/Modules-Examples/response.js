

function decrypt(data) {
    return 'decrypted data';
}

module.exports.read = function read(){
    return decrypt('data');
}

// shorthand
// module.exports ={
//     read,
// }