const { MongoClient, ObjectId } = require("mongodb");
// const dbKey = require("./dbKey.json");
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://ksp:ksp123@cluster0.tqggl.mongodb.net/testinggg?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db("testinggg");
    const collection = database.collection("new");
    // create a filter for a movie to update
    const filter = { _id: "60062dcdb5bd13d71f76cace" };
    console.log(filter._id);
    // this option instructs the method to create a document if no documents match the filter
    // const options = { upsert: true };
    // create a document that sets the plot of the movie
    const updateDoc = {
      $set: {
        "order4": { "order_id": (new ObjectId).toString(), "table_id": "T1", "ordered_time": new Date(), "cooked_status": 0, "take_status": 0, "placed_status": 0, "delete_status": 0, "dishName": "Fried Rice", "langName": "ငါးသလဲထိုးကြေ", "Quantity": 2 },
      },
    };
    // for update one
    // const result = await collection.updateOne(filter, updateDoc, options);
    // for update many
    const result = await collection.updateMany(filter, updateDoc);
    console.log(
    );
  } finally {
    await client.close();
  }
}
run().catch(console.dir);