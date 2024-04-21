var mongodb = require('mongodb');
var url = "mongodb://localhost:27017";

const client = new mongodb.MongoClient(url);

async function insert(){
  try{
    const db =client.db('mydb');
    const coll = db.collection('customers');
    
    const query = {name:'Meiy', title:'web developer'};
    const insert = await coll.insertOne(query);
    console.log(insert);
  }
  finally{
    await client.close();
  }
}

insert().catch(console.dir);