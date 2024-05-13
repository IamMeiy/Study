const mongodb = require('mongodb')
const url = 'mongodb://localhost:27017/'

async function deleteColl(){
    const client = await new mongodb.MongoClient(url);

    try{

        const db = client.db('mydb');
        const coll = db.collection('test');

        const query = await coll.drop();//This statement delete the coll
        /*
        This statement delete the coll, but u need to connect db directly, give it directly as parameter
        */
        const query1 = await db.dropCollection('test1');

        console.log(query);
        console.log(query1);
    }

    finally{
        await client.close();
    }
}

deleteColl().catch(console.dir);