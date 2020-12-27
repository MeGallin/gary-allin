<template>
  <div id="app">
    <Header/>
    <Home msg = 'Home comptoent' />
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer
  }
}
</script>

<style scoped src='./App.css'/>

