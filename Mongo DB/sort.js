const mongodb = require('mongodb')
const url = 'mongodb://localhost:27017'

async function sort(){
    const client = await new mongodb.MongoClient(url);

    try{
        const db = client.db('mydb');
        const coll = db.collection('customers');

        /*
        this below state is used to declare the ascend and descend order
        ascending - 1
        descending - -1
        */
        const sort = {name:-1};
        const query = await coll.find().sort(sort).toArray(); /* You can give the sor value directly or in varible also */

        console.log(query);
    }
    finally{
        await client.close();
    }
}

sort().catch(console.dir);