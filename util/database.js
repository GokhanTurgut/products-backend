const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

function mongoConnect(callback) {
  MongoClient.connect(
    "mongodb+srv://username:password@cluster0.inxm8.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}

function getDb() {
  if (_db) {
    return _db;
  } else {
    throw "Database error!";
  }
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
