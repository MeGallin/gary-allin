<template>
  <section id="header">
    <h1>{{name}}</h1>
    <router-link to='/home'>Home</router-link>
    <router-link to='/about'>About</router-link>    
    <router-link to='/private'>CV</router-link>
  </section>
</template>
<script>
export default {
    data() {
        return {
            name: 'Header',
            
        }
    }
}
</script>
<style scoped src='./Header.css'></style>