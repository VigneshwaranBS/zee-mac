<template>
  <main>
   <v-form>
     <v-card justify-center width="500"  class="pa-4 ma-16 ">
       <h2>Feedback Form</h2>
        <v-text-field
            v-model="name"
            label=" Name"
            outlined
          ></v-text-field>
           <v-text-field
            v-model="dept"
            label="Department"
            outlined
          ></v-text-field>
           <v-text-field
            v-model="collegename"
            label="College Name"
            outlined
          ></v-text-field>
           <v-text-field
            v-model="year"
            label="year"
            outlined
          ></v-text-field>
           <v-textarea
          outlined
          label="Remark"
          v-model="remark"
        ></v-textarea>
        <v-btn outlined class="primary white--text"  @click="addData">Submit</v-btn>
     </v-card>
   </v-form>
  </main>
</template>

<script>
import {feedbackDetails} from "../services"
export default {
    
  name: "HelloWorld",
 data:()=>({
   name:null,
   dept:null,
   collegename:null,
   year:null,
   remark:null,
 }),
 methods:{
   async addData(){
     if(
       this.name==null||
       this.dept==null||
       this.collegename==null||
       this.year==null||
       this.remark==null
     ){
       alert("enter all info")
     }
     else{
       console.log("hello");
       const data={
         name:this.name,
        dept: this.dept,
        collegename:this.collegename,
        year:this.year,
        remark:this.remark,

       };
      await feedbackDetails
      .add(data)
      .then(()=>{
        alert("added");
      this.name=null;
       this.dept=null;
       this.collegename=null;
       this.year=null;
       this.remark=null;
      })
      .catch((err)=>{
        alert("unable to add")
        console.log(err)
      })
     }
   }
 }
};

</script>

<style lang="scss" scoped>

</style>