const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Categories
let categories_schema = new Schema({
  imgId: String,
  name: String,
  url: String
},{
    collection: 'categories'
});
let categories_model =  mongoose.model('categories', categories_schema);

// Define collection and schema for Categories
let imgCategory_schema = new Schema({
    categoryId: String,
    imgId: String,
    url: String
},{
    collection: 'imgCategory'
});
let imgCategory_model =  mongoose.model('imgCategory', imgCategory_schema);

// Define collection and schema for Contact Details
let contact_schema = new Schema({
    company: String,
    address: String,
    city: String,
    landMark: String
},{
    collection: 'contactDetails'
});
let contact_model =  mongoose.model('contactDetails', contact_schema);

// Define collection and schema for Contact Details
let imgDetails_schema = new Schema({
    imgId: String,
    detail_id: String,
    title: String,
    name: String,
    type: String,
    dimensions: String,
    resolutions: String,
    price: String,
    tag: String
},{
    collection: 'imageDetails'
});
let imgDetails_model =  mongoose.model('imageDetails', imgDetails_schema);

// Define collection and schema for Purchased Details
let purchasedImg_schema = new Schema({
    purchasedImage: {
      imgId: String,
      detail_id: String,
      title: String,
      name: String,
      type: String,
      dimensions: String,
      resolutions: String,
      price: String,
      tag: String
    },
    purchasedTime: Number
},{
    collection: 'purchasedDetails'
});
let purchased_model =  mongoose.model('purchasedDetails', purchasedImg_schema);

module.exports = {
    Categories: categories_model,
    ImgCategory: imgCategory_model,
    ContactDetails: contact_model,
    ImageDetails: imgDetails_model,
    PurchasedDetails: purchased_model
};