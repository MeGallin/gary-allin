<template>
<section id="home">
  <div class="wrapper">
    <TellMe :characters="chareacters"></TellMe>    
    <LogIn/>
  </div>

  <div class="wrapper" > 
     <!-- // Use this to get data with getters -->
     <!-- // {{getterDescriptions}} -->
    <div v-if="isLoading">
      <Spinner/>
    </div>
      <div v-else class="colour-one border-temp" v-for="(des) in descriptions" :key="des.id">
        <h3>{{des.title}}</h3>
        <p>{{des.description}}</p>
        
      </div>    
  </div>
</section>
</template>

<script>
import Spinner from '../common/LoadingSpinner/LoadingSpinner';
import LogIn from '../Authentication/LogIn/LogIn';
import $Store from '../../store/index';
import TellMe from '../common/TellMe/TellMe';

export default {
    data() {
        return {
            name: 'Home',
            text: 'This is my HOME text',  
            chareacters: {
              char1:'W',
              char2: 'h',
              char3:'a',
              char4:'t', 
              char5:'i',
              char6:'D',
              char7:'o'
            }
            
        }
    },
    components: {
      LogIn,
      Spinner,
      TellMe
    },
    computed: {  
      getterDescriptions() { 
        return $Store.getters.allDescriptions
      }, 
      isLoading() {
        return $Store.getters.isLoading
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