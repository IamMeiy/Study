const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017/'

async function update_Many(){

    const client = await new mongodb.MongoClient(url);

    try{
        const db = client.db('mydb');
        const coll = db.collection('customer');

        const oldQuery = {name:'Meiy'};
        const updateQuery = {$set:{name:'MRMeiy', age: 19}};

        const query = await coll.updateMany(oldQuery,updateQuery);

        console.log(query);
    }
    finally{
        await client.close();
    }
}

update_Many().catch(console.dir);