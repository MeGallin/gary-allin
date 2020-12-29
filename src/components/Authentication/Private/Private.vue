<template>
<div class="wrapper">
  <div class="colour-one border-temp">
      <h1>{{text}}</h1>

           <div :v-for="user in user">
          {{user.user.name}}
          {{user.user.nickname}}
          {{user.user.locale}}
          <img :src="user.user.picture" alt="photo">
          {{Date(user.user.exp)}}
          {{user.user.updated_at}}
      </div>
  </div>
</div>
</template>

<script>
import { User } from '../utils/auth';

export default {
    data() {
        return {
            name: 'Private',
            text: 'Private Zone',
            user: User()
        }
    }

}
</script>

<style scoped src='./Private.css'></style>