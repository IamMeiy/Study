const mongodb = require('mongodb')
const http = require('http');
const { error } = require('console');
const url = 'mongodb://localhost:27017/'

async function findall(){
    const client = new mongodb.MongoClient(url);
    try{
        const db = client.db('mydb');
        const coll = db.collection('customers');

        // here we find all the and store in query as a array
        // without the toArray() method it wont work
        const query = await coll.find({}).toArray();

        return query;
    }
    finally{
        await client.close();
    }
}

http.createServer(async function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    try{
        const response = await findall();
        res.write(JSON.stringify(response));//stringify used to convert the js objects to string
    }
    catch{
        console.log(error)
    }
    res.end();
}).listen(8080)
