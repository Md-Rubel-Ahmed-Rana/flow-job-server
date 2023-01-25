require("dotenv").config()
const passport = require("passport");
const User = require("../models/user.model");
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;


passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    try {
         User.findOne({ email: jwt_payload }, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    } catch (error) {
       res.send(error) 
    }
}));