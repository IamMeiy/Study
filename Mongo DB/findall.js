const mongodb = require('mongodb')
const url = 'mongodb://localhost:27017/'

async function findall(){
    const client = new mongodb.MongoClient(url);
    try{
        const db = client.db('mydb');
        const coll = db.collection('customers');

        // here we find all the and store in query as a array
        // without the toArray() method it wont work
        const query = await coll.find({name:/^v/},{projection:{_id:0,name:1}}).toArray();

        // console.log(JSON.stringify(query.map(cust => cust.name)));
        console.log(query)
    }
    finally{
        await client.close();
    }
}

findall().catch(console.dir);