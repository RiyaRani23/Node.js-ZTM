const request = require('./request.js')
const response = require ('./response.js')

module.exports = {
  send : request.send,
  REQUEST_TIMEOUT : request.REQUEST_TIMEOUT,
  read : response.read,
}



// We can use index.js features of node to imports groups of module
// that are grouped in a folder with an index.js telling that what is
// exported from that folder


// Prefer not to use index.js