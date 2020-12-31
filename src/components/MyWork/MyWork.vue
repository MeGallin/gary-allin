<template>
  <section id="myWork">
      <h1>{{name}}</h1>
<div class="wrapper">
<p>{{myWorkDescriptions}}</p> 

</div>

  </section>
</template>

<script>
import $Store from '../../store/index';
export default {
    data() {
        return {
            name: 'MyWork'
        }
    },
    computed: {
        getterMyWorkDescriptions() {
            return $Store.getters.myWorkDescriptions
        },
        myWorkDescriptions() {
            return $Store.state.Http.myWorkDescriptions
        }
    },
    created() {     
        $Store.dispatch('getMyWorkDescriptions')
    }

}
</script>

<style scoped src='./MyWork.css'></style>