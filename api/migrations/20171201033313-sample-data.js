'use strict';

module.exports = {

    up(db, next) {
        db.collection('hospital').insertOne({
            name: "Hossana Medika"
        }, next);

        db.collection('disease').insertOne({
            name: "Liver"
        }, next);
        db.collection('doctor').insertOne({
            name: "Faris Rayhan"
        }, next);
        db.collection('medicine').insertOne({
            name: "Paracetamol"
        }, next);
        db.collection('news').insertOne({
            name: "Today is rain"
        }, next);
        db.collection('specialist').insertOne({
            name: "Obgyn"
        }, next);
        db.collection('symptoms').insertOne({
            name: "Headache"
        }, next);
    },

    down(db, next) {
        // TODO write the statements to rollback your migration (if possible)
        next();
    }

};