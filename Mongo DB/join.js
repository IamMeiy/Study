const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017';

async function joingColl(){
    const client = await new mongodb.MongoClient(url);

    try{
        const db = client.db('mydb');
        const coll = db.collection('id_cust');

        //aggeregate is used to join two coll
        const query = await coll.aggregate([

            // $lookup is used to specify which column is primary and foreign key
            {$lookup:{
                from: 'customer',
                localField: '_id',
                foreignField: 'user_id',
                as: 'JoinData' //this used to show the result in this name
            }}
        ]).toArray();

        console.log(JSON.stringify(query));//here we convert the object to string to display it
    }
    finally{
        await client.close();
    }
}

joingColl().catch(console.dir);