<template>
<section>


  <div>
    <TellMe :characters="characters"></TellMe>
    <div v-if="isLoading">
      <div  class="middelPage">
        <Spinner />
      </div>      
    </div>

    <div v-else v-for="des in aboutDescriptions" :key="des.id">
      <content-description
        :title="des.title"
        :description="des.description"
        :descriptionTwo="des.descriptionTwo"
      />
    </div>
  </div>
  </section>
</template>

<script>
import $Store from '../../store/index';
import Spinner from '../common/LoadingSpinner/LoadingSpinner';
import TellMe from '../common/TellMe/TellMe';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      title: '',
      description: '',
      descriptionTwo: '',
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
    TellMe,
  },
  computed: {
    ...mapGetters(['aboutDescriptions', 'isLoading']),
  },
  created() {
    $Store.dispatch('getAboutDescriptions');
  },
};
</script>

<style scoped src="./About.css"></style>
