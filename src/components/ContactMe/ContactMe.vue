<template>
<section>
  <div>
    <TellMe :characters="characters"></TellMe>
    <ContactForm />
  </div>
  </section>
</template>

<script>
import ContactForm from '../common/ContactForm/ContactForm';
import TellMe from '../common/TellMe/TellMe';
export default {
  data() {
    return {
      characters: {
        char1: 'M',
        char2: 'a',
        char3: 'i',
        char4: 'L',
        char5: ' ',
        char6: 'M',
        char7: 'e',
      },
    };
  },
  components: {
    TellMe,
    ContactForm,
  },
};
</script>

<style scoped src="./ContactMe.css"></style>
