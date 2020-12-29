<template>
<div class="wrapper">
  <div class="colour-one border-temp">
      <p>{{text}}</p>
  </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: 'NotAthorised',
            text: 'You are not authorised to see this page. Please register to enter.'
        }
    }

}
</script>
<style scoped src='./NotAuthorised.css'></style>