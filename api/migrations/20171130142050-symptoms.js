'use strict';

module.exports = {

    up(db, next) {
        return db.createCollection('symptoms',next);
    },

    down(db, next) {
        return db.dropCollection('symptoms',next);
    }
};
