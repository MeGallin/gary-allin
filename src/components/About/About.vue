<template>
  <section id="about">

<div class="wrapper">
  <div class="colour-one border-temp">
         <div class="call_me">
        <h1>
          <span class="char1">T</span>
          <span class="char2 tint2">h</span>
          <span class="char3">i</span>
          <span class="char4 tint4">s</span>
          <span class="char5"> </span>
          <span class="char5 tint1">i</span>
          <span class="char7">s</span>
          <span class="char8 tint3"></span>
          <span class="char9">m</span>
          <span class="char10 tint2">e</span>
        </h1>      
<<<<<<< HEAD
    </div> -->
=======
      </div>

    <div class="wrapper" > 
      <div v-if="isLoading">
         <Spinner/>
      </div>      
        <!-- // Use this to get data with getters -->
        <!-- // {{getterDescriptions}} -->
    <div v-else class="colour-one border-temp" v-for="(des) in aboutDescriptions" :key="des.id">
 

>>>>>>> ga/age-component
            <h3>{{des.title}}</h3>
            <Age/>
            <p>{{des.description}}</p>
            
          </div>    
      </div>
  </div>    
</div>

  </section>
</template>

<script>
import $Store from '../../store/index';
import Spinner from '../common/LoadingSpinner/LoadingSpinner';
<<<<<<< HEAD
import TellMe from '../common/TellMe/TellMe';
=======
import Age from '../common/Age/Age';
>>>>>>> ga/age-component
export default {
    data() {
        return {
            name: 'About',
            text: 'This is my About text'
        }
    },
    components: {
      Spinner,
<<<<<<< HEAD
      TellMe
=======
      Age
>>>>>>> ga/age-component
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