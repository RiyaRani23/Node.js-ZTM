const express = require ('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'));

const PORT = 3000;

// Middleware
app.use((req , res , next) => {
    const start = Date.now();
    next();
    // actions go here....
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use('/site', express.static(path.join(__dirname,'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index', {
    title: 'My Friends Are VERYY Clever',
    caption: 'Let\'s go skiing!',
  });
});

  

// app.get('/messages' , (req , res) => {
//    res.send('<ul><li> Hello Albert! </li></ul>');
// });

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);


// app.post('/messages' , (req , res) => {
//    console.log('Updating Messages ....');
// });




app.listen(PORT, () => {
    console.log(`Listening on ${PORT}....`);
})