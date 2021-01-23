<template>
<section id="cv">
  <div class="wrapper">
    <tell-me :characters="login"></tell-me>
    <tell-me :characters="register"></tell-me>
  </div>
 
    
    <div class="wrapper border-temp">
      <div v-if="isLoading">
        <Spinner />
      </div>
      <div
        v-else
        class=""
        v-for="des in cvDescriptions"
        :key="des.id"
      >
        <content-description
        class=""
          :title="des.title"
          :description="des.description"
        />
      </div>
      
    </div>
  <log-in />
</section>
  
</template>

<script>
import LogIn from '../../Authentication/LogIn/LogIn';
import TellMe from '../../common/TellMe/TellMe.vue';
import Spinner from '../../../components/common/LoadingSpinner/LoadingSpinner';
import $Store from '../../..//store/index';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      name: 'NotAthorised',
      text: 'Please login or register to accees my CV.',
      login: {
        char1: 'L',
        char2: 'o',
        char3: 'g',
        char4: '-',
        char5: 'I',
        char6: 'n',        
      },
      register: {
        char1: 'R',
        char2: 'e',
        char3: 'g',
        char4: 'i',
        char5: 's',
        char6: 't',
        char7: 'e',
        char8: 'r',        
      }
    };
  },
  components: {
    LogIn,
    TellMe,
    Spinner
  },
  computed:  {
    ...mapGetters(['cvDescriptions', 'isLoading']),
  },
  created() {
    $Store.dispatch('getCvDescriptions');
  }
};
</script>
<style scoped src="./NotAuthorised.css"></style>
