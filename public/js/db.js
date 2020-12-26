const MongoClient = require('mongodb').MongoClient;

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://ksp:ksp123@cluster0.tqggl.mongodb.net/<dbname>?retryWrites=true&w=majority";

MongoClient.connect(uri, function(err, client) {
    if(err) {
         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
    }
//     console.log('Connected!!!!!');
//     const collection = client.db("testMPK").collection("test1");
     var dbo = client.db("testMPK");
     var myobj = { title: "java", insertdate: "24-12-2020", name: "may"};
    // perform actions on the collection object
//     dbo.collection("test1").insertOne(myobj, function(err, res) {
//      if (err) throw err;
//      console.log("1 document inserted");
//      client.close();
//    });
     dbo.collection("test1").find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          client.close();
     });
 });