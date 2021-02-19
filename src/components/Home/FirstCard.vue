<template>
  <div>
    <div class="innerWrapper">
      <div v-if="isLoading">
        <div class="middelPage">
          <Spinner />
        </div>
      </div>

      <div
        v-else
        class="colour-one"
        v-for="des in angularDescriptions"
        :key="des.id"
      >
        <content-description
          :title="des.title"
          :description="des.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from '../common/LoadingSpinner/LoadingSpinner';
import $Store from '../../store/index';
import { mapGetters } from 'vuex';

export default {
  components: {
    Spinner,
  },
  data() {
    return {
      name: 'FirstCard',
    };
  },
  computed: {
    ...mapGetters(['angularDescriptions', 'isLoading']),
  },
  created() {
    $Store.dispatch('getAngularDescriptions');
  },
};
</script>
