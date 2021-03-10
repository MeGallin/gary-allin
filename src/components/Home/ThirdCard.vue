<template>
  <div>
    <div
      class="content-wrapper"
      v-for="des in reactDescription"
      :key="des.id"
    >
      <content-description
        :title="des.title"
        :description="des.description"
        :descriptionTwo="des.descriptionTwo"
        :url="des.url"
      />
    </div>
    <p>{{ reactDescriptionLength }} words.</p>
  </div>
</template>

<script>
import $Store from '../../store/index';
import { mapGetters } from 'vuex';

export default {
  components: {},
  data() {
    return {
      name: 'Third Card',
    };
  },
  computed: {
    ...mapGetters([
      'reactDescription',
      'isLoading',
      'reactDescriptionLength',
    ]),
  },
  created() {
    $Store.dispatch('getReactDescription');
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
