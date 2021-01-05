<template>
  <div>
    <TellMe :characters="characters"></TellMe>
    <div class="wrapper">
      <div v-if="isLoading">
        <Spinner />
      </div>
      <!-- // Use this to get data with getters -->
      <!-- // {{getterDescriptions}} -->
      <div
        v-else
        class="colour-one border-temp"
        v-for="des in aboutDescriptions"
        :key="des.id"
      >
        <Age />
        <content-description
          :title="des.title"
          :description="des.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import $Store from '../../store/index';
import Spinner from '../common/LoadingSpinner/LoadingSpinner';
import TellMe from '../common/TellMe/TellMe';
import Age from '../common/Age/Age.vue';

export default {
  data() {
    return {
      title: '',
      description: '',
      characters: {
        char1: 'T',
        char2: 'h',
        char3: 'i',
        char4: 's',
        char5: 'is',
        char6: 'M',
        char7: 'e',
      },
    };
  },
  components: {
    Spinner,
    Age,
    TellMe,
  },
  computed: {
    getterAboutDescriptions() {
      return $Store.getters.allAboutDescriptions;
    },
    isLoading() {
      return $Store.getters.isLoading;
    },
    aboutDescriptions() {
      return $Store.state.Http.aboutDescriptions;
    },
  },
  created() {
    $Store.dispatch('getAboutDescriptions');
  },
};
</script>

<style scoped src="./About.css"></style>
