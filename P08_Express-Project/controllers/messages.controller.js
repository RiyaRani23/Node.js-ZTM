function getMessages (req , res)   {
   res.send('<ul><li> Hello Albert! </li></ul>');
}

function postMessage(req , res) {
   console.log('Updating Messages ....');
}

module.exports = {
    getMessages ,
    postMessage,
};
