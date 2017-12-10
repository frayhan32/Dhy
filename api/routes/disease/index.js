/**
 * Created by Faris Rayhan on 12/1/17.
 */
let express = require('express');
let router = express.Router();
let mongoClient = require('mongodb').MongoClient;
let url = process.env.MONGO_DB_URL;
// Find all documents.
let findDocuments = function (db, res, callback) {
    let collection = db.collection('disease');
    collection.find({}).toArray(function (err, docs) {
        if (err) {
            console.log('Error under finding document for disease collection');
            console.log(err);
        } else {
            res.json(docs);
            callback(docs);
        }
    });
};
// Insert documents.
let insertDocument = function (db, req, res, callback) {
    let collection = db.collection('disease');
    let name = req.param('name');
    let mediaOfTransmission = req.param('media_of_transmission');
    let prevention = req.param('prevention');
    let medicine = req.param('medicine');
    let symptoms = req.param('symptoms');
    let insertParam = {
        name: name,
        media_of_transmission: mediaOfTransmission,
        prevention: prevention,
        medicine: medicine,
        symptoms: symptoms

    };
    collection.insertOne(insertParam, function (err, result) {
        if (err) {
            console.log('Error under inserting to disease collection');
            console.log(err);
        } else {
            res.json(result);
            callback(result);
        }
    });

};
// Update documents.
let updateDocument = function (db, req, res, callback) {

    let collection = db.collection('disease');
    let nameQueryString = req.query.name;
    let name = req.param('name');
    let mediaOfTransmission = req.param('media_of_transmission');
    let prevention = req.param('prevention');
    let medicine = req.param('medicine');
    let symptoms = req.param('symptoms');
    let updateParam = {
        name: name,
        media_of_transmission: mediaOfTransmission,
        prevention: prevention,
        medicine: medicine,
        symptoms: symptoms
    };
    collection.updateOne({name: nameQueryString}, updateParam, function (err, result) {
        if (err) {
            console.log('Error under updating to disease collection');
            console.log(err);
        } else {
            res.json(result);
            callback(result);
        }
    });
};
// Delete documents.
let deleteDocument = function (db, req, res, callback) {
    let collection = db.collection('disease');
    let nameQueryString = req.query.name;
    collection.deleteOne({name: nameQueryString}, function (err, result) {
        if (err) {
            console.log('Error under deleting document of disease');
            console.log(err);
        } else {
            res.json(result);
            callback(result);
        }
    });
};
// Get all data.
router.get('/', function (req, res, next) {
    mongoClient.connect(url, function (err, db) {
        findDocuments(db, res, function () {
            db.close();
        })
    })
});

// Posting new data.
router.post('/', function (req, res, next) {
    mongoClient.connect(url, function (err, db) {
        insertDocument(db, req, res, function () {
            db.close();
        })

    })
});

// Update one existing data
router.put('/', function (req, res, next) {
    mongoClient.connect(url, function (err, db) {
        updateDocument(db, req, res, function () {
            db.close();
        })
    })
});

// Delete one existing data
router.delete('/', function (req, res, next) {
    mongoClient.connect(url, function (err, db) {
        deleteDocument(db, req, res, function () {
            db.close();
        })
    })
});

module.exports = router;