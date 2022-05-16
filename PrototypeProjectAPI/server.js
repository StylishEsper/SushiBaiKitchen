const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;

app.use(cors());
app.use(express.json({limit: '50mb'}));

//api routes
app.post('/sign-up', require('./tables/userTable/user.controller'));

app.post('/login', require('./tables/userTable/user.controller'))

app.get('/' , (req,res) => {
    res.send('Server is running')
})

app.listen(port, () => {
    console.log('Server listening on port ' + port)
});
