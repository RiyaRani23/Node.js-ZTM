const express = require ('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id : 0,
        name : 'Albert Einstein'
    },
    {
        id : 1,
        name : 'Sir Isaac Newton '
    }

];

// Middleware
app.use((req , res , next) => {
    const start = Data.now();
    next();
    // actions go here....
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
})

app.use(express.json());

app.post('/friends' , (req , res) => {
    if(req.body.name){
        res.status(400).json({
            error: 'Missing Friend Name'
        });
    }
    const newFriend = {
        name : req.body.name,
        id : friends.length
    };
    friends.push(newFriend);

    res.json(newFriend);
})

app.get('/friends' , (req , res) => {
//    res.send('Heeelloooo');
      res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
    const friendId = req.params.friendId;
    const friend = friends[friendId];
    if(friend) {
        res.status(200).json(friend);
    } 
    // GET  /friends/22
    else {
        res.status(404).json({
            error : "Friend does not exist"
        });
    }
});

app.get('/messages' , (req , res) => {
   res.send('<ul><li> Hello Albert! </li></ul>');
});

app.post('/messages' , (req , res) => {
   console.log('Updating Messages ....');
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}....`);
})