const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const userRouter = require('./user-router');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Development routing
app.use('/', userRouter);

/* This serves static files from dist (bundled) while preserving the /callback for auth0 
app.use('/api', userRouter);
app.use('/', express.static('dist'));
app.get('/callback', (req, res, next) => {
  res.sendFile('index.html', { root: './dist/' });
}); */
app.listen(port, () => console.log('Listening on port', port));
