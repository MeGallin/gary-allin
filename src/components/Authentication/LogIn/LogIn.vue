<template>
  <div v-if="isLoggedIn === false || isLoggedIn === undefined">
    <Button
      type="button"
      :onClick="loginClick"
      :disabled="isDisabled"
      :class="{ active: !isDisabled }"
    >
      LOGIN/REGISTER
    </Button>
  </div>
  <div v-else>
    <Button
      type="button"
      :onClick="logOut"
      :disabled="isDisabled"
      :class="{ active: !isDisabled }"
    >
      LOGOUT
    </Button>
  </div>
</template>
<script>
import { login, isLoggedIn, logout } from '../utils/auth';
import Button from '../../common/Button/Button';

export default {
  data() {
    return {
      name: 'LogIn',
      isLoggedIn: isLoggedIn(),
    };
  },
  components: {
    Button,
  },
  computed: {
    isDisabled() {
      return false;
    },
  },
  methods: {
    loginClick() {
      login();
    },
    logOut() {
      console.log('logged out');
      this.isLoggedIn = false;
      logout();
    },
  },
};
</script>

<style scoped src="./LogIn.css"></style>
