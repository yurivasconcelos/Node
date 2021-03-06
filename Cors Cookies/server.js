const express = require('express')
var cookieParser = require('cookie-parser')
 
var app = express()
app.use(cookieParser())

app.use(function(req, res, next) {
    console.log(req.headers);
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});



app.get('/', (req, res) => {
 
    console.log(req.headers);
    console.log('acionated /')
    res.cookie('cookieName', 'yuri', { maxAge: 900000, httpOnly: true });
    res.send(" / ok");
})

app.get('/another', (req, res) => {
    console.log('acionated another')
    console.log('Cookies: ', req.cookies)
    console.log('cookie is', req.headers.cookie);
    console.log(req.headers);
    res.send("another ok");
})


app.listen(3000, () => {
    console.log('listening on: http://locahost:3000')
})