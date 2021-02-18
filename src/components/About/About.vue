<template>
  <section>
    <div>
      <div class="wrapper">
        <TellMe :characters="characters"></TellMe>
        <div class="wrapper">
          <img class="angularIcon" :src="AngularIcon" alt="Angular" />
          <img class="vueIcon" :src="VueIcon" alt="VUEJS" />
          <img class="reactIcon" :src="ReactIcon" alt="ReactJS" />
        </div>
      </div>

      <div class="wrapper">
        <div v-if="isLoading">
          <div class="middelPage">
            <Spinner />
          </div>
        </div>

        <div v-else v-for="des in aboutDescriptions" :key="des.id">
          <content-description
            :title="des.title"
            :description="des.description"
            :descriptionTwo="des.descriptionTwo"
            :descriptionThree="des.descriptionThree"
            :descriptionFour="des.descriptionFour"
            :descriptionFive="des.descriptionFive"
            :descriptionSix="des.descriptionSix"
          />
        </div>
      </div>
    </div>
    <modal v-cloak>
      <span slot="button">Contact Me</span>
      <h3 slot="header" class="underline">Send me a message</h3>
      <div slot="body">
        <contact-form />
      </div>
      <div slot="footer"></div>
    </modal>
  </section>
</template>

<script>
import $Store from '../../store/index';
import Spinner from '../common/LoadingSpinner/LoadingSpinner';
import TellMe from '../common/TellMe/TellMe';
import Modal from '../common/Modal/Modal';
import { mapGetters } from 'vuex';
import ContactForm from '../common/ContactForm/ContactForm';
import AngularIcon from '../../../public/assets/Images/Icons/Angular_full_color_logo.svg.png';
import VueIcon from '../../../public/assets/Images/Icons/512px-Vue.js_Logo_2.svg.png';
import ReactIcon from '../../../public/assets/Images/Icons/512px-React-icon.svg.png';

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
      AngularIcon: AngularIcon,
      VueIcon: VueIcon,
      ReactIcon: ReactIcon,
    };
  },
  components: {
    Spinner,
    TellMe,
    Modal,
    ContactForm,
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
