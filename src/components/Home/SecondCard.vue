<template>
  <div>
    <div
      class="content-wrapper"
      v-for="des in vueDescription"
      :key="des.id"
    >
      <content-description
        :title="des.title"
        :description="des.description"
        :descriptionTwo="des.descriptionTwo"
      />
    </div>
    <p>{{ vueDescriptionLength }} words.</p>
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
    ...mapGetters([
      'vueDescription',
      'isLoading',
      'vueDescriptionLength',
    ]),
  },
  created() {
    $Store.dispatch('getVueDescription');
  },
};
</script>
<style scoped>
.content-wrapper {
  background-image: linear-gradient(
    to right,
    rgba(51, 51, 51, 1),
    rgba(51, 51, 51, 0.1),
    rgba(51, 51, 51, 0.1)
  );
}
</style>
