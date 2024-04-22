const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017/'

async function findOne(){
    const client = new mongodb.MongoClient(url);
    try{
        const db = client.db('mydb');
        const coll = db.collection('customers');

        /* 
        The first parm in findOne method is for query criteria, - Which specifies the condition that must be returned
        sec parm is optional, - for projection, sorting
        */

        /* 
        for projection give the field name and give 0 or 1,
        0 - dont display,
        1 - display
        */

        const find = await coll.findOne({name:'Meiy', age:20}); /* we have a condition here */

        console.log(find);
    }
    finally{
        await client.close();
    }
}

findOne().catch(console.dir);