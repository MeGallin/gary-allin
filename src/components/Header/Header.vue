<template>
  <section id="header">
    <h1>{{name}}</h1>
    <Logo />
    <router-link to='/home'>Home</router-link>
    <router-link to='/about'>About</router-link>  
    <router-link to='/contact'>Contact Me</router-link>   
    <router-link to='/private'>CV</router-link>
  </section>
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