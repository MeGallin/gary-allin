<template>
  <content-wrapper>
    <template v-slot:header>
      <h3 class="underline">{{ title }}</h3>
    </template>
    <template v-slot:default>
      <div>
        <p>{{ description }}</p>
        <p>{{ descriptionTwo }}</p>
        <p>{{ descriptionThree }}</p>
        <p>{{ descriptionFour }}</p>
        <p>{{ descriptionFive }}</p>
        <p>{{ descriptionSix }}</p>
      </div>
    </template>
  </content-wrapper>
</template>

<script>
import ContentWrapper from '../ContentWrapper/ContentWrapper.vue';
export default {
  components: { ContentWrapper },
  data() {
    return {
      name: 'ContentDescription',
    };
  },
  props: [
    'title',
    'description',
    'descriptionTwo',
    'descriptionThree',
    'descriptionFour',
    'descriptionFive',
    'descriptionSix',
  ],
};
</script>

<style scoped src="./ContentDescription.css"></style>
