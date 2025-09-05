exports.REQUEST_TIMEOUT = 500;

function encrypt(data) {
    return 'encrypted data';
}

// Shorthand module.exports or exports
exports.send = function send(url , data) {
    const encryptedData = encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`);
}


// module.exports = {
//     REQUEST_TIMEOUT,
//    send,
// };