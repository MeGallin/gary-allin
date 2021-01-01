<template>
  <section id="myWork">
      <h1>{{name}}</h1>
<div class="wrapper">
    <div v-if="isLoading">
        <Spinner/>
    </div>
    <div v-else v-html="myWorkDescriptions"/>
<!-- {{myWorkDescriptions}}  -->

</div>

  </section>
</template>

<script>
import $Store from '../../store/index';
import Spinner from '../common/LoadingSpinner/LoadingSpinner';
export default {
    data() {
        return {
            name: 'MyWork'
        }
    },
    components: {
        Spinner
    },
    computed: {
        getterMyWorkDescriptions() {
            return $Store.getters.myWorkDescriptions
        },
        isLoading() {
            return $Store.getters.isLoading
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