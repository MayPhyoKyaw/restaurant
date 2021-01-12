/*server.js*/

// include all required modules
var http = require ('http');
const express = require('express');
var bodyParser = require('body-parser');

const { MongoClient, ObjectId } = require("mongodb");

// server details
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
// Static Files
app.use(express.static('public'));
app.use('/css' , express.static(__dirname + 'public/css'))
app.use('/js' , express.static(__dirname + 'public/js'))
app.use('/fonts' , express.static(__dirname + 'public/fonts'))
app.use('/images' , express.static(__dirname + 'public/images'))

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

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

app.get('/menu.html/selectDish', async (req, res) => {
    const url = 'mongodb+srv://ksp:ksp123@cluster0.tqggl.mongodb.net/testinggg?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true';
    // const client = new MongoClient(url);
    const dbName = "resturant";
    // connect to your cluster
    const client = await MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    // specify the DB's name
    const dbRes = client.db(dbName);
    console.log("Connected correctly to server for selecting....");
    dbRes.collection('dish').find().toArray((err, result) => {
        if (err) return console.log(err);
        res.send(result);
    });
});