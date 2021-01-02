<template>
  <section id="about">

<div class="wrapper">
  <div class="colour-one border-temp">
    
    <TellMe char1="t" char2="h" char3='is' char4='i' char5='s' char6='M' char7='e'></TellMe>
    <div class="wrapper" > 
      <div v-if="isLoading">
         <Spinner/>
      </div>      
        <!-- // Use this to get data with getters -->
        <!-- // {{getterDescriptions}} -->
      <div v-else class="colour-one border-temp" v-for="(des) in aboutDescriptions" :key="des.id">
    <!-- <div class="call_me">
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
    </div> -->
            <h3>{{des.title}}</h3>
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
import TellMe from '../common/TellMe/TellMe';
export default {
    data() {
        return {
            name: 'About',
            text: 'This is my About text'
        }
    },
    components: {
      Spinner,
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