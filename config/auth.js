// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1505764913036290', // your App ID
        'clientSecret'  : 'e2f7e889a0ea83ea708efae919207a10', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'VdKiI8qVjtmxoOyf8nhfs63PQ',
        'consumerSecret'    : 'Kpz2sZBtVBtdOqwXRUR6pMZK9vRD3nlylpWzR9AYdBnlJmd8o0',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    }
};