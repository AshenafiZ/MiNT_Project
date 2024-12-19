const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

module.exports = (app) => {
  // Enable CORS
  app.use(cors());

  // Parse JSON request bodies
  app.use(bodyParser.json());

  // Parse URL-encoded request bodies
  app.use(bodyParser.urlencoded({ extended: true }));

  console.log('Middleware configured.');
};
