
// business.route.js

const express = require('express');
const app = express();
const imageBazzarRoutes = express.Router();

// Require Business model in our routes module
let Models = require('../models/Schema');


// Defined get data(index or listing) route for categories
imageBazzarRoutes.route('/categories').get(function (req, res) {
    Models.Categories.find(function (err, resp){
    if(err){
      console.log(err);
    }
    else {
      res.json(resp);
    }
  });
});

// Defined get data(index or listing) route for image category
imageBazzarRoutes.route('/img-category/:id').get(function (req, res) {
    let id = req.params.id;
    Models.ImgCategory.find({categoryId:{$eq:id}}, function (err, resp){
    if(err) {
      console.log(err);
    }
    else {
      res.json(resp);
    }
  });
});

// Defined get data(index or listing) route for contact details
imageBazzarRoutes.route('/contact-details').get(function (req, res) {
    Models.ContactDetails.find(function (err, resp){
    if(err){
      console.log(err);
    }
    else {
      res.json(resp);
    }
  });
});

// Defined get data(index or listing) route for image details
imageBazzarRoutes.route('/img-details/:id').get(function (req, res) {
    let id = req.params.id;
    Models.ImageDetails.find({imgId:{$eq:id}}, function (err, resp){
    if(err) {
      console.log(err);
    }
    else {
      res.json(resp);
    }
  });
});

// Defined get data(index or listing) route for image details
imageBazzarRoutes.route('/purchased-details').post(function (req, res) {
    let purchasedItems = req.body;
    var id = purchasedItems.purchasedImage.imgId;
    if(id) res.json({'message': 'Image added to cart successfully'});
    else res.json({'message': 'Image added to cart is failure'});
});

module.exports = imageBazzarRoutes;