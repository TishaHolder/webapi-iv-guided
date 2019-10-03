
// it's recommended to load configuration for .env as early as possible
// dotenv is used to add the port environment variable to our computer
// add dotenv file in root of project and define env variables as key value pairs separated by the newline character
// dotenv is able to read those files and its contents to the process.env object
// to install: npm i dotenv
require('dotenv').config(); // add this line as the first thing to run1

const server = require('./api/server.js');

// we'll read the port from the server environment if it is there
// heroku will have the PORT environment variable set
// makes the port dynamic so the API is aware of the environment and switches to a different port depending on the environment
// we need to access the environment from node js
// node js has a process object that has a property called env that represents the environment 
// you can read and add things to the environment
// you can use this to read the port dynamically from the environment
// add the environment variable outside of the application code
// process.env object gives us the ability to read environment variables
// dotenv is used to add the port environment variable to our computer
const port = process.env.PORT || 5000;

// we can now use that port, if set up by heroku or read from .env or 5000 as a default if not set
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
