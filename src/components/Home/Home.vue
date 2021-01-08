<template>
  <section id="home">
    <div class="wrapper">
      <TellMe :characters="chareacters"></TellMe>
      <log-in />
    </div>
    <!-- // Use this to get data with getters -->
    <!-- {{ homeDescriptions }} -->
    <div class="wrapper">
      <div v-if="isLoading">
        <Spinner />
      </div>
      <div
        v-else
        class="colour-one border-temp"
        v-for="des in homeDescriptions"
        :key="des.id"
      >
        <content-description
          :title="des.title"
          :description="des.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Spinner from '../common/LoadingSpinner/LoadingSpinner';
import LogIn from '../Authentication/LogIn/LogIn';
import $Store from '../../store/index';
import TellMe from '../common/TellMe/TellMe';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      title: '',
      description: '',
      chareacters: {
        char1: 'W',
        char2: 'h',
        char3: 'a',
        char4: 't',
        char5: 'i',
        char6: 'D',
        char7: 'o',
      },
    };
  },
  components: {
    LogIn,
    Spinner,
    TellMe,
  },
  computed: {
    ...mapGetters(['homeDescriptions', 'isLoading']),
    //ABOVE I used mapGetters in stead of writing then as functions over and over again.
    // getterDescriptions() {
    //   return $Store.getters.homeDescriptions
    // },
    // isLoading() {
    //   return $Store.getters.isLoading
    // },
    // descriptions() {
    //   return $Store.state.Http.descriptions;
    // },
  },
  created() {
    $Store.dispatch('getDescriptions');
  },
};
</script>

<style scoped src="./Home.css"></style>
