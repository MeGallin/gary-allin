<template>
  <section id="home">

<div class="wrapper">
  <div class="colour-one border-temp"><h1>{{msg}}</h1>
<p>{{text}}</p></div>
  <div class="colour-two"><h1>{{msg}}</h1>
<p>{{text}}</p></div>
  <div class="colour-three"><h1>{{msg}}</h1>
<p>{{text}}</p></div>
  <div class="colour-four"><h1>{{msg}}</h1>
<p>{{text}}</p></div>
</div>

  </section>
</template>

<script>
export default {
    data() {
        return {
            name: 'Home',
            text: 'This is my sample text'
        }
    },    
    props: {
            msg: String
        }

}
</script>

<style scoped src='./Home.css'></style>