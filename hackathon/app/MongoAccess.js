const  {  MongoClient }=require("mongodb")
// Replace the uri string with your MongoDB deployment's connection string.
// const uri = "<connection string uri>";
const uri="mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri);

async function insertNew(data,callback) {
  let result;
  try {
    const database = client.db("hackathon");
    const haiku = database.collection("haikus");
    // create a document to insert
    
    result = await haiku.insertOne(data);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
  callback(result)
}
async function FindAll(callback) {
  // console.log("here")
 result=1;
  try {
    const database = client.db("hackathon");
    const haiku = database.collection("haikus");
    // create a document to insert
   
    result = await haiku.find({}).toArray();
    // console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
  // console.log(result)  
  callback(result);
}
// //////////////////////////////
async function FindSpecific(dataName,callback) {
  let result=1;
  try {
    const database = client.db("hackathon");
    const haiku = database.collection("haikus");
    // create a document to insert
   
     result = await haiku.findOne({filename:dataName})
    // console.log(result)
  // callback(result);
    // console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
  callback(result)
}
module.exports={
    insertNew,
    FindAll,
    FindSpecific
}

