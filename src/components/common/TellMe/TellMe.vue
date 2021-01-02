<template>
<div>
    <div class="call_me">
        <h1>
          <span class="char1">{{characters.char1}}</span>
          <span class="char2 tint2">{{characters.char2}}</span>
          <span class="char3">{{characters.char3}}</span>
          <span class="char4 tint4">{{characters.char4}}</span>
          <span class="char5">{{characters.char5}}</span>
          <span class="char5 tint1">{{characters.char6}}</span>
          <span class="char7">{{characters.char7}}</span>
          <span class="char8 tint3">{{characters.char8}}</span>
          <span class="char9">{{characters.char9}}</span>
          <span class="char10 tint2">{{characters.char10}}</span>
        </h1>      
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },    
    props: {
        characters: {
            data: {char1:'',char2:''}
        }
    }
            
}


</script>

<style scoped src='./TellMe.css'></style>