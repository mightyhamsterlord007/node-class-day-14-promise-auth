var Product = require('../models/Product');

module.exports = {
  getAllProducts: (params) => {
      return new Promise((resolve, reject) => {
        Product.find(params)
            .then(products => resolve(products))
            .catch(error => reject(error));
      });
  }  
};