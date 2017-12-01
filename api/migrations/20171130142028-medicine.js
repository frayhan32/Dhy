'use strict';

module.exports = {

    up(db, next) {
        return db.createCollection('medicine',next);
    },

    down(db, next) {
        return db.dropCollection('medicine',next);
    }
};
