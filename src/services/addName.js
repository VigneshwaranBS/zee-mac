import { db } from "../firebaseconfig";

export const addName ={
    add,
}

async function add (name){
    return await db
    .collection("namelist")
    .add(name)
    .then((docref)=>{
        console.log(docref);
        return docref;
    })
    .catch((error)=>{
        console.log(error)
        return error;
    })

}