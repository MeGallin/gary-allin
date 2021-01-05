<template>
  <div class="form-style">
    <form id="contactForm" @submit.prevent="handleContactFormSubmit">
      <div>
        <label>* Name</label>
        <span class="error" v-if="!posts.name">
          {{ nameValitation }}
        </span>
        <input
          type="text"
          ref="name"
          name="name"
          v-model.trim="posts.name"
          :class="posts.name ? 'entered' : ''"
        />
      </div>
      <div>
        <label>* Email Address</label>
        <span class="error" v-if="!posts.email">
          {{ emailValidation }}
        </span>
        <input
          type="email"
          ref="email"
          name="email"
          v-model.trim="posts.email"
          :class="posts.email ? 'entered' : ''"
        />
      </div>
      <div>
        <label> Message</label>
        <span class="error" v-if="!posts.message">
          {{ messageValidation }}
        </span>
        <textarea
          name="message"
          ref="message"
          v-model.trim="posts.message"
          :class="posts.message ? 'entered' : ''"
        ></textarea>
      </div>

      <Button
        type="submit"
        :disabled="isDisabled"
        :class="{ active: !isDisabled }"
        :onClick="handleContactFormSubmit"
        >SUBMIT</Button
      >
      <div class="required">
        * Required
        <span class="thankYou">{{ thankYouMessage }}</span>
      </div>
    </form>
  </div>
</template>

<script>
import { postContactForm } from '../../../api';
import $Store from '../../../store/index';
import { mapActions } from 'vuex';
import Button from '../Button/Button';

export default {
  data() {
    return {
      nameValitation: '',
      emailValidation: '',
      messageValidation: '',
      posts: {
        name: '',
        email: '',
        message: '',
      },
      thankYouMessage: '',
    };
  },
  components: {
    Button,
  },
  methods: {
    async submitFormData(formData) {
      try {
        await postContactForm(JSON.stringify(formData));
      } catch (error) {
        console.log(error);
      }
    },
    ...mapActions(['handleCommit']),
    handleContactFormSubmit() {
      // Additional validation can be added here
      const enteredName = this.$refs.name.value;
      const enteredEmail = this.$refs.email.value;
      const enteredMessage = this.$refs.message.value;

      if (
        enteredName === '' ||
        enteredEmail === '' ||
        enteredMessage === ''
      ) {
        this.nameValitation = 'Name is a required field';
        this.emailValidation = 'Email is a required field';
        this.messageValidation = 'Please provide a message';
      } else {
        // Additional validation can be added here
        let formData = {
          name: this.posts.name,
          email: this.posts.email,
          message: this.posts.message,
        };
        this.submitFormData(formData);
        this.posts.name = '';
        this.posts.email = '';
        this.posts.message = '';
        this.thankYouMessage =
          'Thank you. I will contact you shortly. Gary';

        setTimeout(() => {
          this.thankYouMessage = '';
          this.handleCommit('isSubmitted');
        }, 6000);
      }
    },
  },
  computed: {
    isDisabled() {
      return (
        !this.posts.name || !this.posts.email || !this.posts.message
      );
    },
    isSubmitted: {
      get: function() {
        return $Store.state.common.isSubmitted;
      },
      set: function(val) {
        console.log(val);
      },
    },
  },
};
</script>

<style scoped src="./ContactForm.css"></style>
