'use strict';

module.exports = {

    up(db, next) {
        return db.createCollection('specialist',next);
    },

    down(db, next) {
        return db.dropCollection('specialist',next);
    }
};
