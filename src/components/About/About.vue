<template>
<div>  
  <TellMe :characters="characters"></TellMe>
    <div class="wrapper" > 
      <div v-if="isLoading">
         <Spinner/>
      </div>      
        <!-- // Use this to get data with getters -->
        <!-- // {{getterDescriptions}} -->
    <div v-else class="colour-one border-temp" v-for="(des) in aboutDescriptions" :key="des.id">
        <h3>{{des.title}}</h3>
          <Age/>
          <p>{{des.description}}</p>
              
    </div>    
  </div>
</div>
</template>

<script>
import $Store from '../../store/index';
import Spinner from '../common/LoadingSpinner/LoadingSpinner';
import Age from '../common/Age/Age';
import TellMe from '../common/TellMe/TellMe';
export default {
    data() {
        return {
            name: 'About',
            text: 'This is my About text',
            characters: {
              char1:'T',
              char2: 'h',
              char3:'i',
              char4:'s',
              char5:'is',
              char6:'M',
              char7:'e'
            }
        }
    },
    components: {
      Spinner,
      Age,
      TellMe
    },
    computed: {
      getterAboutDescriptions() {
        return $Store.getters.allAboutDescriptions
      },
      isLoading() {
        return $Store.getters.isLoading
      },
      aboutDescriptions() {
        return $Store.state.Http.aboutDescriptions
      }
    },
    created() {     
      $Store.dispatch('getAboutDescriptions')
    }

}
</script>

<style scoped src='./About.css'></style>