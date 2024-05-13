const mongodb = require('mongodb');
const url = "mongodb://localhost:27017/"

const client = new mongodb.MongoClient(url);

async function insert_id(){
    try{
        const db = client.db('mydb');
        const coll = db.collection('id_cust');

        const query = {_id:3, name:'Vikram'};

        const insert = await coll.insertOne(query);

        console.log(insert);
    }
    finally{
        await client.close();
    }
}

insert_id().catch(console.dir);