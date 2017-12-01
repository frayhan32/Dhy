'use strict';

module.exports = {

    up(db, next) {
        return db.createCollection('doctor',next);
    },

    down(db, next) {
        return db.dropCollection('doctor',next);
    }
};
