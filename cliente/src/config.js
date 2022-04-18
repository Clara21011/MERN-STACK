const oktaAuthConfig = { 
    issuer:'https://dev-73915127.okta.com/oauth2/default',
    clientId: '0oa4nxtvznpK9ZBCQ5d7',
    redirectUri: window.location.origin + '/login/callback',
};

const oktaSignInConfig = {
    baseUrl: 'https://dev-73915127.okta.com',
    clientId: '0oa4nxtvznpK9ZBCQ5d7',
    redirectUri: window.location.origin + '/login/callback',
};

export { oktaAuthConfig, oktaSignInConfig}


