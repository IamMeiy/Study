const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017'

async function deleteMany(){
    const client = await new mongodb.MongoClient(url);

    try{
        const db = await client.db('mydb');
        const coll = db.collection('customer');

        const query = await coll.deleteMany();

        console.log(query);
    }


    finally{
        await client.close();
    }
}

deleteMany().catch(console.dir);