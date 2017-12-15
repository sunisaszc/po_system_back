import passport from 'passport';
var user = require('../controllers/user.controller');

module.exports = (app) => {
    var path = '/api/user';

    app.get(path + '/getuser', user.getUsers);
    app.post(path + '/signup', user.create);

    app.post('/login',passport.authenticate('local', {
            successFlash: true,
            failureFlash: true
        }),user.login);

    app.post('/logout', user.logout);

    app.get('/oauth/google', passport.authenticate('google', {
        scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
        successFlash: true,
        failureFlash: true
    }));

    app.get('/oauth/google/callback', passport.authenticate('google', {
        successFlash: true,
        failureFlash: true
    }));

}