<template>
<section>
<div class="wrapper">
  <div class="colour-one border-temp">
  <TellMe :characters="characters"></TellMe>

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
</section>
</template>

<script>
import { User } from '../utils/auth';
import TellMe from '../../common/TellMe/TellMe';

export default {
    data() {
        return {
            name: 'Private',
            text: 'Private Zone',
            user: User(),
            characters: {
                char1:'M',
                char2: 'y',
                char3:' ',
                char4:'C',
                char5:'V'
            }
        }
    },
    components: {
        TellMe
    }

}
</script>

<style scoped src='./Private.css'></style>