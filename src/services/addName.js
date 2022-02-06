import { db } from "../firebaseConfig";

export const feedbackDetails ={
    add,
    // read,
}

async function add (name){
    return await db
    .collection("namelist")
    // .doc("list")
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
// async function read() {
//     return await db
//       .collection("namelist")
//       .doc("list")
//       .get()
//       .then((doc) => {
//         const data = doc.data();
//         console.log(data.all);
//         return data.all;
//       });
//   }
  
  
//   async function add(name) {
//     let SubSubCategories = await read();
//     const id = name;
//     const subCategory = {
//       id: id,
//       name: name,
//     };
//     SubSubCategories.push(subCategory);
//     await db
//       .collection("namelist")
//       .doc("list")
//       .update({
//         all: subCategory,
//       });
//   }
  