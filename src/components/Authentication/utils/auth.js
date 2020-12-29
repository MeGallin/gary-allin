import auth0 from 'auth0-js';
import authCreds from '../../../__env.json';

export const webAuth = new auth0.WebAuth({
    domain: authCreds.auth0.domain,
    clientID: authCreds.auth0.clientId,
    redirectUri: 'http://localhost:8080/callback',
    responseType: 'token id_token',
    scope: 'openid profile',
});

let token = {}
let user = {}

const handleAuth = cb => {
webAuth.parseHash((err, authResult) => {
    if(authResult && authResult.accessToken && authResult.idToken) {
        token.accessToken = authResult.accessToken;
        token.idToken = authResult.idToken; 
        user.user = authResult.idTokenPayload;                     
        cb();
    } else {
        console.error(err);
    }
})
}

const User = () => {
return user;
}

const isLoggedIn = () => {
return token.accessToken;
};

const login = () => {
webAuth.authorize();
};

const logout = () => {
token = {}
}

export { login, handleAuth, isLoggedIn, logout, User};