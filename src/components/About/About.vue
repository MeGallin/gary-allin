<template>
  <section id="about">

<div class="wrapper">
  <div class="colour-one border-temp">
    

    <div class="wrapper" > 
      
        <!-- // Use this to get data with getters -->
        <!-- // {{getterDescriptions}} -->
          <div class="colour-one border-temp" v-for="(des) in aboutDescriptions" :key="des.id">
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
    </div>
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
export default {
    data() {
        return {
            name: 'About',
            text: 'This is my About text'
        }
    },
    computed: {
      getterAboutDescriptions() {
        return $Store.getters.allAboutDescriptions
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