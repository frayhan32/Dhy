/**
 * Created by Faris Rayhan on 12/1/17.
 */
var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;
var url = process.env.MONGO_DB_URL;

var findDocuments = function (db, res, callback) {
    var collection = db.collection('specialist');
    collection.find({}).toArray(function (err, docs) {
        res.json(docs);
        callback(docs);
    });
}

/* GET home page. */
router.get('/', function (req, res, next) {
    mongoClient.connect(url, function (err, db) {
        findDocuments(db, res, function () {
            db.close();
        })
    })
});

module.exports = router;