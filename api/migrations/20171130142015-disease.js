'use strict';

module.exports = {

    up(db, next) {
        return db.createCollection('disease',next);
    },

    down(db, next) {
        return db.dropCollection('disease',next);
    }
};
