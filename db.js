const MongoClient = require('mongodb').MongoClient;

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://ksp:ksp123@cluster0.tqggl.mongodb.net/<dbname>?retryWrites=true&w=majority";

MongoClient.connect(uri, function(err, client) {
    if(err) {
         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
    }
//     console.log('Connected!!!!!');
//     const collection = client.db("testMPK").collection("test1");
     var db = client.db("testMPK");
     var myobj = [ 
          { _id: "n1", title: "php", insertdate: "27-12-2020", name: "may"},
          { _id: "n2", title: "python", insertdate: "27-12-2020", name: "phyo"},
          { _id: "n3", title: "ruby", insertdate: "27-12-2020", name: "phyo"}
     ];
    // perform actions on the collection object
    db.collection("test1").insertMany(myobj, function(err, res) {
     if (err) throw err;
     console.log("Number of documents inserted" + res.insertedCount);
     console.log("Documents inserted" + res);
     client.close();
   });
     // db.collection("test1").find({}).toArray(function(err, result) {
     //      if (err) throw err;
     //      console.log(result);
     //      client.close();
     // });
 });