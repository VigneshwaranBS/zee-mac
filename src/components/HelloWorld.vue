<template>
  <div class="container">
    <h1>COMING </h1>
    <h1>SOON </h1>
    <p>We will be celebrating the launch of our new site very soon !</p>
    <v-btn
     class="mx-2"
      color="#80DEEA"
    >
      Notify Me !
    </v-btn>
    <footer>
      <p> &#174; 2023 by"Coming Soon " . Proudly Created with <u>Webilicious.com</u></p>
    <div class="icons">
      <v-icon
        medium
      >
       mdi-facebook
      </v-icon>
      <v-icon
        medium
      >
       mdi-twitter
      </v-icon>
      <v-icon
        medium
      >
         mdi-instagram
      </v-icon>
    </div>
   
    </footer>
  </div>
</template>

<script>
export default {
name:"HelloWorld",

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,500&display=swap');

.container{
  font-family: 'Poppins', sans-serif;
  text-align: center;
  margin-top: 120px;

}
h1{
  font-size: 60px;
}
p{
  padding: 30px;
  font-size: 20px;
}

footer{
  margin-top: 150px;
}
.icons{
  padding-left: 15px;
}
</style>