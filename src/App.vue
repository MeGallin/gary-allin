<template>
  <div id="app">
    <Header/>
    <Home msg = 'Home component' />
    <Footer/>
  </div>
</template>

<script>
import './App.css';
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



