<template>
  <div class="form-style">
    <form id="contactForm" @submit.prevent="handleContactFormSubmit">
      <div>
        <label>* Name</label>
        <span class="error" v-if="nameValitation === 'Invalid'">
          Name is a required field
        </span>
        <input
          type="text"
          ref="name"
          name="name"
          :class="
            nameValitation === 'Invalid' ||
            nameValitation === 'Pending'
              ? 'invalid'
              : 'entered'
          "
          @blur="validateInput"
          v-model.trim="posts.name"
        />
      </div>
      <div>
        <label>* Email Address</label>
        <span class="error" v-if="emailValidation === 'Invalid'">
          Email is a required field
        </span>
        <input
          type="email"
          ref="email"
          name="email"
          v-model.trim="posts.email"
          @blur="validateInput"
          :class="
            emailValidation === 'Invalid' ||
            emailValidation === 'Pending'
              ? 'invalid'
              : 'entered'
          "
        />
      </div>
      <div>
        <label> Message</label>
        <span class="error" v-if="messageValidation === 'Invalid'">
          Message field is required.
        </span>
        <textarea
          name="message"
          ref="message"
          v-model.trim="posts.message"
          @blur="validateInput"
          :class="
            messageValidation === 'Invalid' ||
            messageValidation === 'Pending'
              ? 'invalid'
              : 'entered'
          "
        ></textarea>
      </div>

      <Button
        type="submit"
        :disabled="isDisabled"
        :class="{ active: !isDisabled }"
        :onClick="handleContactFormSubmit"
        >SUBMIT</Button
      >
      <div class="messageWRapper">
        <div class="required">
          * Required
        </div>
        <div class="thankYou">{{ thankYouMessage }}</div>
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
      nameValitation: 'Pending',
      emailValidation: 'Pending',
      messageValidation: 'Pending',
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
        enteredMessage === '' ||
        this.submitFormData === false
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
        this.nameValitation = 'Pending';
        this.emailValidation = 'Pending';
        this.messageValidation = 'Pending';
        this.thankYouMessage =
          'Thank you. I will contact you shortly. Gary';

        setTimeout(() => {
          this.thankYouMessage = '';
          this.handleCommit('isSubmitted');
        }, 6000);
      }
    },
    validateInput() {
      if (this.posts.name === '') {
        this.nameValitation = 'Invalid';
      } else {
        this.nameValitation = 'Valid';
      }

      if (this.posts.email === '') {
        this.emailValidation = 'Invalid';
      } else {
        this.emailValidation = 'Valid';
      }

      if (this.posts.message === '') {
        this.messageValidation = 'Invalid';
      } else {
        this.messageValidation = 'Valid';
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
