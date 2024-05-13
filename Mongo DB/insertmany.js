var mongodb = require('mongodb');
var url = 'mongodb://localhost:27017/'

const client = new mongodb.MongoClient(url);

async function insertmany(){
    try{
        const db = client.db('mydb');
        const coll = db.collection('customer');

        const query = [
            {name:'Meiy', age: 20, user_id: 1},
            {name:'vj', age:25, user_id: 2},
            {name:'vk', age:22, user_id: 3}
        ];
        const insert = await coll.insertMany(query);
        console.log(insert);
    }
    finally{
        await client.close();
    }
}

insertmany().catch(console.dir)