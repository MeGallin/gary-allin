<template>
  <div>
    <div v-if="!isLoading">
      <div
        class="content-wrapper"
        v-for="des in vueDescription"
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
import $Store from '../../store/index';
import { mapGetters } from 'vuex';

export default {
  components: {},
  data() {
    return {
      name: 'Second Card',
    };
  },
  computed: {
    ...mapGetters(['vueDescription', 'isLoading']),
  },
  created() {
    $Store.dispatch('getVueDescription');
  },
};
</script>
<style scoped>
.content-wrapper {
  padding: 0.2em;
  margin: 0 0.2em;
}
</style>
