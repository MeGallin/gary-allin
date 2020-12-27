<template>
  <section id="about">
<h1>{{msg}}</h1>
  </section>
</template>

<script>
export default {
    date() {
        return {
            name: 'About'
        }
    },    
    props: {
            msg: String
        }

}
</script>

<style scoped src='./About.css'></style>