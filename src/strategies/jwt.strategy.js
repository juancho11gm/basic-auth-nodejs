const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('../config');

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: config.JWT_KEY,
};

const passportJwtStrategy = new JwtStrategy(options, (payload, done) => {
	return done(null, payload);
});

module.exports = passportJwtStrategy;
