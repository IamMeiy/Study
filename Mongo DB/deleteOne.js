const mongodb = require('mongodb')
const url = 'mongodb://localhost:27017'

async function deleteOne(){
    const client = await new mongodb.MongoClient(url);

    try{
        const db = client.db('mydb');
        const coll = db.collection('customers');

        const deleteQuery = {name : 'Meiy'};

        const result = await coll.deleteOne(deleteQuery);

        console.log(result);
    }

    finally{
        await client.close();
    }

}

deleteOne().catch(console.dir);