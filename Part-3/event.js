const EventEmitter = require('events');
const celebrity = new EventEmitter();

// Subscribe to celebrity for Observer 1
//   function () or () =>
celebrity.on ('race win' ,(result) => {
    if (result === 'win'){
        console.log('Congratulations ! You are the best !');
    }
});

// Subscribe to celebrity for Observer 2

celebrity.on('race win' , (result) => {
    if (result === 'win'){
       console.log('Boo I could have done better than that!');
    }
});

celebrity.emit('race win', 'win');
celebrity.emit('race lost', 'lost');
celebrity.emit('race win' , 'win');


