const express = require('express');
const passport = require('passport');
const { PORT } = require('./src/config');
const { boomHandler } = require('./src/middlewares/error');
const passportJwtStrategy = require('./src/strategies/jwt.strategy');
const routes = require('./src/routes');

const port = PORT || 3000;
const app = express();
app.use(express.json());

passport.use(passportJwtStrategy);
routes(app);

app.use(boomHandler);

app.listen(port, () => {
	console.info(`>>> The app is running on port ${port} 🔥...`);
});
