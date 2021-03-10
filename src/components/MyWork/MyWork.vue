<template>
  <section id="myWork">
    <TellMe :characters="characters"></TellMe>
    <div class="wrapper">
      <div v-if="isLoading">
        <div class="middelPage">
          <Spinner />
        </div>
      </div>
      <div v-else v-html="myWorkDescriptions" />
      <div v-if="!isLoading" class="wrapper">
        <modal v-cloak>
          <span slot="button" @click="handleQutes"
            >Random Quotes</span
          >
          <h3 slot="header" class="underline">Random Quotes</h3>
          <div slot="body">
            <div v-if="quote" class="quotes">
              <blockquote class="content">
                "{{ quote }}"
                <cite class="originator">
                  {{ originator }}
                </cite>
              </blockquote>
            </div>
          </div>
          <div slot="footer"></div>
        </modal>
      </div>
    </div>
  </section>
</template>

<script>
import $Store from '../../store/index';
import Spinner from '../common/LoadingSpinner/LoadingSpinner';
import TellMe from '../common/TellMe/TellMe';
import Modal from '../common/Modal/Modal';
export default {
  data() {
    return {
      name: 'MyWork',
      characters: {
        char1: 'W',
        char2: 'h',
        char3: 'a',
        char4: 't',
        char5: "'s",
        char6: 'D',
        char7: 'o',
        char8: 'n',
        char9: 'E',
      },
    };
  },
  components: {
    Spinner,
    TellMe,
    Modal,
  },
  computed: {
    getterMyWorkDescriptions() {
      return $Store.getters.myWorkDescriptions;
    },
    isLoading() {
      return $Store.getters.isLoading;
    },
    myWorkDescriptions() {
      return $Store.state.Http.myWorkDescriptions;
    },
    quote() {
      return $Store.getters.quote;
    },
    originator() {
      return $Store.getters.originator;
    },
  },
  methods: {
    handleQutes: () => {
      $Store.dispatch('getQuotes');
    },
  },
  created() {
    $Store.dispatch('getMyWorkDescriptions');
  },
};
</script>

<style scoped src="./MyWork.css"></style>
