<template>
    <div v-if="isLoggedIn === undefined">
        <button type="button" @click='loginClick()'>login</button>
    </div>
    <div v-else> 
        <button type="button" @click="logOut()">logout</button> 
    </div>
</template>

<script>
import {login, isLoggedIn, logout} from '../utils/auth';
 console.log(isLoggedIn());
export default {
   
    data() {
        return {
            name: 'LogIn',
            isLoggedIn: isLoggedIn(),
        }
    },
     methods: {
            loginClick() {
                login();
            },
            logOut() {
                console.log('logged out');
                this.isLoggedIn = undefined;
                logout();
            }
        }

}
</script>

<style scoped src='./LogIn.css'></style>