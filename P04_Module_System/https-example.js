const https = require('https');

const req = https.request('https://www.google.com' , (res) =>{
    res.on('data' , (chunk) => {
        console.log(`Data chunk: ${chunk}`);      
    });
    res.on('end' , () =>{
        console.log('No more data');
    });
});

req.end();