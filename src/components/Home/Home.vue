<template>
<section id="home">
  <LogIn/>
  
  <h1>{{name}}</h1>
  
  <div class="wrapper" > 
    
      <div class="colour-one border-temp" v-for="(des) in descriptions" :key="des.id">
        <h3>{{des.title}}</h3>
        <p>{{des.description}}</p>
        {{loading}}{{loaded}}
      </div>    
  </div>

  <div class="colour-two">
    <p>{{text}}</p></div>
  <div class="colour-three">
    <p>{{text}}</p></div>
  <div class="colour-four">
    <p>{{text}}</p>
  </div>

</section>
</template>

<script>
import LogIn from '../Authentication/LogIn/LogIn';

export default {
 async created() {
   const url = '../assets/Home/home.json';
    try {
          const headers = { "Content-Type": "application/json" };   
          const data = await this.$http.get( url, { headers });
          this.descriptions = data.data;
          const status = data.status;
          const statusText = data.statusText;
          if(status !== 200) {
            this.loading = 'loading...';
          } else {
            this.loaded = statusText;
          }
    } catch (error) {
      console.error(error);
    }
  },
    data() {
        return {
            name: 'Home',
            text: 'This is my HOME text',
            descriptions: [],
            loading: '',
            loaded: ''
        }
    },
    components: {
      LogIn
    }

}
</script>

<style scoped src='./Home.css'></style>