# Express Exercise with Authentication

1. Create a basic Nodejs server
2. Use [Nodemon](https://www.npmjs.com/package/nodemon) for watching changes.
3. Create basic Routes for the authentication
   3.1 POST - Login
   3.2 POST - Register
   3.3 GET - Private (Just for authenticated users)
4. Register the users using their username and password.
   4.1 Hash the password using [bcrypt](https://www.npmjs.com/package/bcrypt)
   4.2 Use [JOI](https://www.npmjs.com/package/joi) for validating the user schemas.
   4.3 Use [Boom](https://www.npmjs.com/package/@hapi/boom) for error handling.
5. Read about [JWT](https://jwt.io/)
   5.1 Create an JWT once the user has enter his username and password succesfully.
   5.2 Use Passport and [PassportJWT](http://www.passportjs.org/packages/passport-jwt/) as the main auth middleware.

Note: Use [Postman](https://www.postman.com/) or an alternative for consuming APIs.
