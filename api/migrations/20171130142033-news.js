'use strict';

module.exports = {

    up(db, next) {
        return db.createCollection('news',next);
    },

    down(db, next) {
        return db.dropCollection('news',next);
    }
};
