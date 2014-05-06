Write a web server that accepts request to the '/' url and responds with a **random mood**.

### Setup
1. Create a new project directory
1. Scaffold a new, empty express project with `yo refactoru-express`
1. Install all dependencies with `npm install`

### Running
1. Start the server with `node app.js` (or `nodemon app.js` to automatically restart the server when app.js changes)
1. Navigate in your browser to http://localhost:PORT/
1. You should see a random mood such as 'joyful', 'antsy', or 'despondent'
1. Refresh the page in the browser to see another random mood.

### Tip
1. Install underscore with `npm install --save underscore`
1. Include underscore in your app.js with `var _ = require('underscore');`
1. Use underscore's [sample](http://underscorejs.org/#sample) method to choose the random mood from an array of predefined moods.