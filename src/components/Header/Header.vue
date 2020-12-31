<template>
  <div class="navImageWrapper">
    <nav>
      <div class="navWrapper">
        <div class="logo">
          <router-link to='/home'><Logo /></router-link>
        </div>
        <div class="hamburger" @click="setOpen(!open)">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        
        <ul :class="open ? 'navLinks open' : 'navLinks'">
          <li>
            <router-link to='/home'>
             <a @click="setOpenMediaQuery(open)">Home</a> 
            </router-link>
          </li>
          <li>
            <router-link to='/about'>
              <a @click="setOpenMediaQuery(open)">About</a>
            </router-link>
          </li>
          <li>
            <router-link to='/contact'>
              <a @click="setOpenMediaQuery(open)">Contact Me</a>
            </router-link>
          </li>
          <li>
            <router-link to='/private'>
              <a @click="setOpenMediaQuery(open)">CV</a>
            </router-link>
          </li>
        </ul>       
      </div>
    </nav>
  </div>
</template>
<script>
import Logo from '../common/Logo/Logo'
export default {
    data() {
        return {
            name: 'Header',
            open: false,

        }
    },
    components: {
      Logo
    },
    methods: {
      setOpen() {
        this.open = open
      },      
    setOpenMediaQuery() {
      this.open = false;
    }
    }
}
</script>
<style scoped src='./Header.css'></style>