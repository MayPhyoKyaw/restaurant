/*server.js*/

// include all required modules
var http = require('http');
const express = require('express');
var bodyParser = require('body-parser');

const { MongoClient, ObjectId } = require("mongodb");

// server details
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/fonts', express.static(__dirname + 'public/fonts'))
app.use('/images', express.static(__dirname + 'public/images'))

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
app.listen(port, () => console.info(`Listening on port ${port}`))

// get dishes
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

// get identification
app.get('/menu.html/identification', async (req, res) => {
    const mongo_url = 'mongodb+srv://ksp:ksp123@cluster0.tqggl.mongodb.net/testinggg?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true';
    // const client = new MongoClient(url);
    const db = "resturant";
    // connect to your cluster
    const client2 = await MongoClient.connect(mongo_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    // specify the DB's name
    const userdb = client2.db(db);
    console.log("Connected correctly to server for selecting....");
    userdb.collection('admin').find().toArray((err, result) => {
        if (err) return console.log(err);
        res.send(result);
    });
});

app.get('/menu.html/transaction', async (req, res) => {
    const mongo_url = 'mongodb+srv://ksp:ksp123@cluster0.tqggl.mongodb.net/testinggg?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true';
    // const client = new MongoClient(url);
    const db = "resturant";
    // connect to your cluster
    const client2 = await MongoClient.connect(mongo_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    // specify the DB's name
    const userdb = client2.db(db);
    console.log("Connected correctly to server for selecting....");
    userdb.collection('transaction').find().toArray((err, result) => {
        if (err) return console.log(err);
        res.send(result);
    });
});

// create transaction
// app.post('/menu.html', (req, res) => {
//     console.log(req.body)
//     const url = 'mongodb+srv://ksp:ksp123@cluster0.tqggl.mongodb.net/testinggg?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true';
//     const client = new MongoClient(url);
//     const dbName = "resturant"

//     async function CreateRun() {
//         try {
//             await client.connect();
//             console.log("Connected correctly to server for creating transaction....");
//             const db = client.db(dbName);
//             // Use the collection "people"
//             const col = db.collection("transaction");
//             // Construct a document
//             let personDocument = {
//                 _id: (new ObjectId).toString(),
//             };
//             // Insert a single document, wait for promise so we can read it back
//             const p = await col.insertOne(personDocument);
//         } catch (err) {
//             console.log(err.stack);
//         }
//         finally {
//             await client.close();
//         }
//     }
//     CreateRun().catch(console.dir);
// });

// create order list
app.post('/menu.html/CreateOrder', (req, res) => {
    console.log(req.body)
    const url = 'mongodb+srv://ksp:ksp123@cluster0.tqggl.mongodb.net/testinggg?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true';
    const client = new MongoClient(url);
    const dbName = "resturant"

    async function CreateRun() {
        try {
            await client.connect();
            console.log("Connected correctly to server for creating orders....");
            const db = client.db(dbName);
            // Use the collection "people"
            const col = db.collection("transaction");
            // Construct a document
            let personDocument = [{
                _id: req.body.trans_ID,
                orders: [req.body.orders],
                // order: {
                    // ordered_at: req.body.ordered_at,
                    // table_no: req.body.table_no,
                    // order_no: req.body.ordered_ID,
                    
                    // ordered_titles: req.body.ordered_titles,
                    // ordered_quantities: req.body.ordered_quantities,
                // },
            }]

            // Insert a single document, wait for promise so we can read it back
            const p = await col.insertMany(personDocument);
            // const p = await col.insertMany(personDocument, function(err){
            //     if (err) return;
            //     // Object inserted successfully.
            //     var objectId = personDocument._id;
            //     console.log(objectId);
            // });

        } catch (err) {
            console.log(err.stack);
        }
        finally {
            await client.close();
        }
    }
    CreateRun().catch(console.dir);
});

// delete order list
app.post('/menu.html/DeleteOrder', (req, res) => {
    console.log(req.body)
    const url = 'mongodb+srv://ksp:ksp123@cluster0.tqggl.mongodb.net/testinggg?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true';
    const client = new MongoClient(url);
    const dbName = "resturant"

    async function DeleteRun() {
        try {
            await client.connect();
            console.log("Connected correctly to server for deleting order....");
            const database = client.db(dbName);
            const collection = database.collection("transaction");
            console.log(req.body.delete_transaction_id)
            // create a filter for a movie to update
            const filter = {
                _id: req.body.delete_transaction_id,
            };
            // for update many
            const result = await collection.deleteOne(filter);
            if (result.deletedCount === 1) {
                console.dir("Successfully deleted one document.");
            } else {
                console.log("No documents matched the query. Deleted 0 documents.");
            }
        } finally {
            await client.close();
        }
    }
    DeleteRun().catch(console.dir);
});

app.post('/menu.html/updateOrder', (req, res) => {
    console.log(req.body)
    const url = 'mongodb+srv://ksp:ksp123@cluster0.tqggl.mongodb.net/testinggg?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true';
    const client = new MongoClient(url);
    const db = "resturant"

    async function UpdateRun() {
        try {
            await client.connect();
            console.log("Connected correctly to server for editting....");
            const database = client.db(db);
            const collection = database.collection("transaction");
            console.log(req.body.update_trans_id)
            // create a filter for a movie to update
            const filter = {
                _id: req.body.update_trans_id,
            };
            var i=0;
            i++;
            // var newOrderName = `order${i}`
            // update a document
            const updateDoc = {
                $push: {
                    orders: req.body.order,                    
                },
            };
            // for update many
            const result = await collection.updateMany(filter, updateDoc);
            console.log(
                `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
            );
        } finally {
            await client.close();
        }
    }
    UpdateRun().catch(console.dir);
});