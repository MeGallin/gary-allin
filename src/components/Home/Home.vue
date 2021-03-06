<template>
  <section id="home" ref="sectionDimensions">
    <div class="wrapper">
      <TellMe :characters="chareacters"></TellMe>
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
        <div v-if="!isLoading" class="iconWrapper">
          <Images :images="images.AngularIcon" alt="AngularIcon" />
          <Images :images="images.RXJSIcon" alt="RXJSIcon" />
          <Images :images="images.PHPIcon" alt="PHPIcon" />
          <Images :images="images.MySQL" alt="MySQL" />
        </div>
      </div>

      <div class="innerWrapper">
        <SecondCard></SecondCard>
        <div v-if="!isLoading" class="iconWrapper">
          <Images :images="images.VueIcon" alt="VueIcon" />
          <Images :images="images.PHPIcon" alt="PHPIcon" />
          <Images :images="images.Auth0" alt="Auth0" />
        </div>
      </div>

      <div class="innerWrapper">
        <ThirdCard></ThirdCard>
        <div v-if="!isLoading" class="iconWrapper">
          <Images :images="images.ReactIcon" alt="ReactIcon" />
          <Images :images="images.ReduxIcon" alt="ReduxIcon" />
          <Images :images="images.PHPIcon" alt="PHPIcon" />
        </div>
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
import Images from '../common/Images/Images';
import $Store from '../../store/index';
import TellMe from '../common/TellMe/TellMe';
import { mapGetters } from 'vuex';
import FirstCard from './FirstCard';
import SecondCard from './SecondCard';
import ThirdCard from './ThirdCard';
import AngularIcon from '../../../public/assets/Images/Icons/angular-icon.svg';
import RXJSIcon from '../../../public/assets/Images/Icons/rxjs-1.svg';
import PHPIcon from '../../../public/assets/Images/Icons/php-1.svg';
import VueIcon from '../../../public/assets/Images/Icons/vue-js-1.svg';
import ReactIcon from '../../../public/assets/Images/Icons/react-2.svg';
import ReduxIcon from '../../../public/assets/Images/Icons/redux.svg';
import MySQL from '../../../public/assets/Images/Icons/mySql.svg';
import Auth0 from '../../../public/assets/Images/Icons/auth0.svg';

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
      images: {
        AngularIcon: AngularIcon,
        RXJSIcon: RXJSIcon,
        PHPIcon: PHPIcon,
        VueIcon: VueIcon,
        ReactIcon: ReactIcon,
        ReduxIcon: ReduxIcon,
        MySQL: MySQL,
        Auth0: Auth0,
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
    Spinner,
    TellMe,
    FirstCard,
    SecondCard,
    ThirdCard,
    Images,
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
