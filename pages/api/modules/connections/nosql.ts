// const MongoClient = require('mongodb').MongoClient;

// let db: any

// export async function getNoSqlConnection():Promise<any> {
//     if(db){
//         return db
//     }else{
//         // Connection URL
//         const url = "mongodb://127.0.0.1:27017";
//         // Database Name
//         const dbName = 'fluorkr';
//         // Create a new MongoClient
//         let dbo = await MongoClient.connect(url, { useNewUrlParser: true })
//         db = dbo.db(dbName)
//         return db
//     }
// }

// export function disconnect(){
//     MongoClient.close()
// }

