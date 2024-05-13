const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017/'

async function update_One(){
    const client = await new mongodb.MongoClient(url);

    try{
        const db = client.db('mydb');
        const coll = db.collection('customers');

        const old = {name:'vj'};

        //$set is used to specify the particular element need to update
        const newq = {$set:{name:'Vijay'}};

        //in this 1st parm is for query object(find that particular object), second is need to update
        const updateQuery = await coll.updateOne(old,newq);
        const updateQuery1 = await coll.updateOne({name:'Meiy'},{$set:{name:'Mr_Meiy'}});

        console.log(updateQuery);
        console.log(updateQuery1);
    }

    finally{
        await client.close()
    }
}

update_One().catch(console.dir);