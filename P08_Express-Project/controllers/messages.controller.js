const path = require('path'); // /folder/files.jpg \folder\files.jpg


// function getMessages (req , res)   {
// image upload
//    res.sendFile(path.join(_dirname, '..', 'public', 'skimountain.jpg'));
//    res.send('<ul><li> Hello Albert! </li></ul>');
// }

function getMessages(req, res) {
  res.render('messages', {
    title: 'Messages to my Friends!',
    friend: 'Elon Musk',
  });
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
}


function postMessage(req , res) {
   console.log('Updating Messages ....');
}

module.exports = {
    getMessages ,
    postMessage,
};
