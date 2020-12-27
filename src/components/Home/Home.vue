<template>
  <section id="home">
<h1>{{msg}}</h1>
  </section>
</template>

<script>
export default {
    data() {
        return {
            name: 'Home'
        }
    },    
    props: {
            msg: String
        }

}
</script>

<style scoped src='./Home.css'></style>