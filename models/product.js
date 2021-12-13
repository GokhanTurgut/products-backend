const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "..", "data", "products.json");

module.exports = class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    readProducts().then((products) => {
      products.push(this);
      fs.writeFile(dataPath, JSON.stringify(products), (error) => {
        console.log(error);
      });
    });
  }

  static fetchAll() {
    return readProducts();
  }
};

function readProducts() {
  return new Promise((resolve) => {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        resolve([]);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}
