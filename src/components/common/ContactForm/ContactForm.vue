<template>
  <div class="form-style">
    <form id="contactForm">
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
          @blur="validateNameInput"
          v-model.trim="posts.name"
        />
      </div>
      <div>
        <label>* Email Address</label>
        <span class="error" v-if="emailValidation === 'Invalid'">
          Email is a required field and needs to contain a valid email
          address.
        </span>
        <input
          type="email"
          ref="email"
          name="email"
          v-model.trim="posts.email"
          @blur="validateEmailInput"
          :class="
            emailValidation === 'Invalid' ||
            emailValidation === 'Pending'
              ? 'invalid'
              : 'entered'
          "
        />
      </div>
      <div>
        <label>* Message</label>
        <span class="error" v-if="messageValidation === 'Invalid'">
          Message field is required.
        </span>
        <textarea
          name="message"
          ref="message"
          v-model.trim="posts.message"
          @blur="validateMessageInput"
          :class="
            messageValidation === 'Invalid' ||
            messageValidation === 'Pending'
              ? 'invalid'
              : 'entered'
          "
        ></textarea>
      </div>

      <div class="messageWRapper">    
        <div class="thankYou">{{ thankYouMessage }}</div>
      </div>
    </form>
    <Button
      type="submit"
      :disabled="isDisabled"
      :class="{ active: !isDisabled }"
      :onClick="handleContactFormSubmit"
      >SUBMIT</Button
    >
    <span class="windowSize" v-if="!textAreaHeight || !textAreaWidth">
      {{textAreaHeightWidthMessage}}
    </span>
    <span v-else>
      <span       
      title="Resize you window"
      class="windowSize" 
      :class="textAreaWidth > 650 ? 'windowSizeYellow':'windowSizeRed' " v-if="textAreaHeight || textAreaWidth">
      {{ textAreaHeight }}x{{textAreaWidth}}
      </span>
    </span>
    
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

      textAreaHeightWidthMessage: 'Resize your window to see what happens.',
      textAreaHeight: null,
      textAreaWidth: null,
    };
  },
  components: {
    Button,
  },
  watch: {
    'posts.name': function(newVal) { 
      if(newVal.length >= 3) {
        this.validateNameInput();
      }
    },
    'posts.email': function(newVal) {
      if(newVal.length >= 3) {
        this.validateEmailInput();
      }
    },
    'posts.message': function(newVal) {
      if(newVal) {
        this.validateMessageInput();
      }
    }

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
          this.handleCommit('foo');
        }, 6000);
    },
    validateNameInput() {
      if (this.posts.name === '') {
        this.nameValitation = 'Invalid';
      } else {
        this.nameValitation = 'Valid';
      }
    },
    validateEmailInput() {
      if (this.posts.email === '' || !this.posts.email.includes('@')) {
        this.emailValidation = 'Invalid';
      } else {
        this.emailValidation = 'Valid';
      }

    },
    validateMessageInput() {
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

    foo() {
      return $Store.state.['common/isSubmitted'];
    },
  },
   mounted() {
    window.onresize = () => {    
        this.textAreaHeight = this.$refs.message.offsetHeight;
        this.textAreaWidth = this.$refs.message.offsetWidth;        
    }
  },
};
</script>

<style scoped src="./ContactForm.css"></style>
