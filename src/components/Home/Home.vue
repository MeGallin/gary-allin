<template>
  <section id="home" ref="sectionDimensions">
    <div class="wrapper">
      <TellMe :characters="chareacters"></TellMe>
      <log-in />
    </div>
    <!-- // Use this to get data with getters -->
    <!-- {{ homeDescriptions }} -->
    <div class="wrapper">
      <div v-if="isLoading">
        <div class="middelPage">
          <Spinner />
        </div>
      </div>

      <div
        v-else
        class="colour-one"
        v-for="des in homeDescriptions"
        :key="des.id"
      >
        <content-description
          :title="des.title"
          :description="des.description"
        />
      </div>
    </div>

    <div class="wrapper">
      <div class="innerWrapper">
        <FirstCard></FirstCard>
      </div>

      <div class="innerWrapper">
        <SecondCard></SecondCard>
      </div>

      <div class="innerWrapper">
        <ThirdCard></ThirdCard>
      </div>
    </div>

    <span
      class="windowSize"
      v-if="!isLoading && (!sectionHeight || !sectionWidth)"
    >
      {{ sectionHeightWidthMessage }}
    </span>
    <span v-else>
      <span
        title="Dimensions of the section element"
        class="windowSize"
        :class="
          sectionWidth > 650 ? 'windowSizeYellow' : 'windowSizeRed'
        "
        v-if="sectionHeight || sectionWidth"
      >
        {{ sectionHeight }}x{{ sectionWidth }}
      </span>
    </span>
  </section>
</template>

<script>
import Spinner from '../common/LoadingSpinner/LoadingSpinner';
import LogIn from '../Authentication/LogIn/LogIn';
import $Store from '../../store/index';
import TellMe from '../common/TellMe/TellMe';
import { mapGetters } from 'vuex';
import FirstCard from './FirstCard';
import SecondCard from './SecondCard';
import ThirdCard from './ThirdCard';

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
      sectionHeightWidthMessage:
        'Resize your window to see what happens.',
      sectionHeight: null,
      sectionWidth: null,
    };
  },
  mounted() {
    window.onresize = () => {
      this.sectionHeight = this.$refs.sectionDimensions.offsetHeight;
      this.sectionWidth = this.$refs.sectionDimensions.offsetWidth;
    };
  },
  components: {
    LogIn,
    Spinner,
    TellMe,
    FirstCard,
    SecondCard,
    ThirdCard,
  },
  computed: {
    ...mapGetters(['homeDescriptions', 'isLoading']),
  },
  created() {
    $Store.dispatch('getDescriptions');
  },
};
</script>

<style scoped src="./Home.css"></style>
