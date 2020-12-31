<template>
<section id="home">
  <LogIn/>
  
  <h1>{{name}}</h1>
 
  <div class="wrapper" > 
     <!-- // Use this to get data with getters -->
     <!-- // {{getterDescriptions}} -->
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
import $Store from '../../store/index';


export default {
    data() {
        return {
            name: 'Home',
            text: 'This is my HOME text',  
            loading: '',
            loaded: '',
            
        }
    },
    components: {
      LogIn
    },
    computed: {  
      getterDescriptions() { 
        return $Store.getters.allDescriptions
      },   
      descriptions() {     
        return $Store.state.Http.descriptions
      }
    },
    created() {     
      $Store.dispatch('getDescriptions')
    }

}
</script>

<style scoped src='./Home.css'></style>