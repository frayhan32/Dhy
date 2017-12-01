'use strict';

module.exports = {

    up(db, next) {
        return db.createCollection('hospital',next);
    },

    down(db, next) {
        return db.dropCollection('hospital',next);
    }
};
