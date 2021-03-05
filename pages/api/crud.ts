// import { getNoSqlConnection } from './modules/connections/nosql'
// import { ObjectId } from "mongodb"

// export async function get(entity:string, id:string) {
//     const db = await getNoSqlConnection()
//     const result = await db.collection(entity).findOne({_id: new ObjectId(id)})
//     return result
// }

// export async function multiGet(entity: string, queries:string[]) {
//     const db = await getNoSqlConnection()
//     const result = await db.collection(entity).find({appId: {$in: queries}})
//     return result.toArray()
// }

// export async function appGetOne(entity:string, id:string) {
//     const db = await getNoSqlConnection()
//     const result = await db.collection(entity).findOne({appId: id})
//     return result
// }

// export async function appGet(entity:string, id:string) {
//     const db = await getNoSqlConnection()
//     const result = await db.collection(entity).find({appId: id})
//     return result
// }

// export async function patch(entity: string, filter: any, patch: any) {
//     const db = await getNoSqlConnection()
//     console.log("Patching ", filter, patch)
//     if(filter._id)
//         filter._id = new ObjectId(filter._id)
//     console.log(entity, filter, patch)
//     const updatedResult = await db.collection(entity).updateOne(filter, {$set: patch})
//     return updatedResult
// }

// export async function patchAddToSet(entity: string, filter: any, patch: any) {
//     const db = await getNoSqlConnection()
//     if(filter._id)
//         filter._id = new ObjectId(filter._id)
//     console.log(entity, filter, patch)
//     const updatedResult = await db.collection(entity).updateOne(filter, {$addToSet: patch})
//     return updatedResult
// }

// export async function expirePatch(entity: string, clocks: any, patch: any) {
//     const db = await getNoSqlConnection()
//     const filter = {appId: {$in: clocks}}
//     const updatedResult = await db.collection(entity).updateOne(filter, {$set: patch})
//     return updatedResult
// }

// export async function post(entity: string, data: any) {
//     const db = await getNoSqlConnection()
//     const result = await db.collection(entity).insertOne(data)
//     return result
// }

// export async function postMany(entity: string, data:[any]) {
//     const db = await getNoSqlConnection()
//     const result = await db.collection(entity).insertMany(data)
//     return result
// }

// export async function getAll(entity: string){
//     const db = await getNoSqlConnection()
//     const result = await db.collection(entity).find({}).toArray()
//     return result
// }

// export async function getSpecific(entity: string, filter: any) {
//     const db = await getNoSqlConnection()
//     const result = await db.collection(entity).find(filter).toArray()
//     return result
// }

// export async function deleteEntity(entity: string, filter:any=null) {
//     if (filter) {
//         try {
//             const db = await getNoSqlConnection()
//             console.log("Filter ", filter)
//             if(filter._id)
//                 filter._id = new ObjectId(filter._id)
//             const result = await db.collection(entity).deleteOne(filter)
//             return result.deletedCount
//         } catch (e) {
//             throw e
//         }
//     }
// }

// export default {
//     appGet,
//     get,
//     post,
//     postMany,
//     getAll,
//     patch,
//     appGetOne,
//     getSpecific,
//     deleteEntity,
//     expirePatch
// }