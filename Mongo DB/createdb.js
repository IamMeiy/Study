const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017/'

async function createDb(){
    const client = await new mongodb.MongoClient(url);
    try{
        await client.connect();
        const db = await client.db('newdb');
        console.log('dbcreated');
        const coll = await db.createCollection('newcoll');
        console.log('coll created');
    }

    finally{
        await client.close()
    }
}

createDb().catch(console.dir);