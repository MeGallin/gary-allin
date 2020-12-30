<template>
  <div id="header">
    <nav class="wrapper">
      <router-link to='/home'><Logo /></router-link>
      <router-link to='/home'>Home</router-link>
      <router-link to='/about'>About</router-link>  
      <router-link to='/contact'>Contact Me</router-link>   
      <router-link to='/private'>CV</router-link>
    </nav>
  </div>
</template>
<script>
import Logo from '../common/Logo/Logo'
export default {
    data() {
        return {
            name: 'Header',            
        }
    },
    components: {
      Logo
    }
}
</script>
<style scoped src='./Header.css'></style>