const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');

module.exports = function(passport) {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = process.env.SECRET;
    passport.use('jwt', new JwtStrategy(opts, function(jwt_payload, done) {
        User.getUserById(jwt_payload._id, function(err, user) {
            if (err) {
                  done(err, false);
            }
            if (user) {
                  done(null, user);
            } else {
                  done(null, false);
                // or you could create a new account
            }
        });
    }));
}