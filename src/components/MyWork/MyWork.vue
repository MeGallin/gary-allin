<template>
<section id="myWork">
<TellMe :characters="{char1:'W', char2: 'h',char3:'a',char4:'t', char5:'\'s',char6:'D',char7:'o', char8:'n', char9:'E'}"></TellMe>
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
import TellMe from '../common/TellMe/TellMe';
export default {
    data() {
        return {
            name: 'MyWork'
        }
    },
    components: {
        Spinner,
        TellMe
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