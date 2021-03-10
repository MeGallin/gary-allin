<template>
  <content-wrapper class="contentWrapper">
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
        <p>
          <a :href="url" target="_blank">{{ url }}</a>
        </p>
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
    'url',
  ],
};
</script>

<style scoped src="./ContentDescription.css"></style>
