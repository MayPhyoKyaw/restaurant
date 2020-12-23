/*server.js*/

// include all required modules
var http = require ('http');
const express = require('express');
var fs = require ('fs'); 

// server details
const app = express();
const port = 3000;

// Static Files
app.use(express.static('public'));
app.use('/css' , express.static(__dirname + 'public/css'))
app.use('/js' , express.static(__dirname + 'public/js'))
app.use('/fonts' , express.static(__dirname + 'public/fonts'))
app.use('/images' , express.static(__dirname + 'public/images'))

app.get('', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/menu.html', (req, res) => {
    res.sendFile(__dirname + '/menu.html')
})

app.get('/buffet.html', (req, res) => {
    res.sendFile(__dirname + '/buffet.html')
})

// Listen on port
app.listen(port , () => console.info(`Listening on port ${port}`))