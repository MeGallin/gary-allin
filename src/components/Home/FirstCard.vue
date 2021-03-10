<template>
  <div>
    <div
      class="content-wrapper"
      v-for="des in angularDescription"
      :key="des.id"
    >
      <content-description
        :title="des.title"
        :description="des.description"
        :descriptionTwo="des.descriptionTwo"
        :url="des.url"
      />
    </div>
    <p>{{ angularDescriptionLength }} words.</p>
  </div>
</template>

<script>
import $Store from '../../store/index';
import { mapGetters } from 'vuex';

export default {
  components: {},
  data() {
    return {
      name: 'FirstCard',
    };
  },
  computed: {
    ...mapGetters([
      'angularDescription',
      'isLoading',
      'angularDescriptionLength',
    ]),
  },
  created() {
    $Store.dispatch('getAngularDescription');
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
