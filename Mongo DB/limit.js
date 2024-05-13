const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017/'

async function limitvalues(){
    const client = await new mongodb.MongoClient(url);

    try{
        const db = client.db('mydb');
        const coll = db.collection('customer');

        //always declare the limit before toArray, cause 1st it limit the values then it change to as array
        const query = await coll.find().limit(2).toArray();

        console.log(query);
    }
    finally{
        await client.close()
    }
}

limitvalues().catch(console.dir)