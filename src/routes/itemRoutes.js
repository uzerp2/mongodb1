// itemRoutes.js

var express = require('express');
var app = express();
var itemRouter = express.Router();

itemRouter.route('/').get(function (req, res) {
  res.render('items');
});

itemRouter.route('/single').get(function (req, res) {
  res.render('singleItem');
});

itemRouter.route('/add').get(function (req, res) {
  res.render('addItem');
});

module.exports = itemRouter;