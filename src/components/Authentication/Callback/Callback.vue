<template>
<div class="wrapper">
  <div class="colour-one border-temp">
      <h1>{{text}}</h1>
  </div>
</div>
</template>

<script>
import { handleAuth } from '../utils/auth';
export default {
    data() {
        return {
            name: 'Callback',
            text: 'Loading....'
        }
    },
    beforeMount() {
        handleAuth(err => {
            if(err) {
                console.error(err);
                return;
            } else {
                console.log('logged in');
                this.$router.push('/private');
            }
        })
    }

}
</script>

<style scoped src='./Callback.css'></style>