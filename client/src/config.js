const oktaAuthConfig = {
    issuer: 'https://dev-73915127.okta.com/oauth2/default',
    clientId: '0oa4nxtvznpK9ZBCQ5d7',
    redirectUri: window.location.origin + '/login/callback',
};
  
const oktaSignInConfig = {
    baseUrl: 'https://dev-73915127.okta.com',
    clientId: '0oa4twz6bluiwHgdU5d7',
    redirectUri: window.location.origin + '/login/callback',
    logo: 'blog.png',
    authParams: {
        // If your app is configured to use the Implicit flow
        // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
        // you will need to uncomment the below line
        // pkce: false
    },
    features:{
        registration: true,
        rememberMe: true,
        router: true
    }
// Additional documentation on config options can be found at https://github.com/okta/okta-signin-widget#basic-config-options
};
  
export { oktaAuthConfig, oktaSignInConfig };