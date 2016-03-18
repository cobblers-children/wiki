'use strict';

module.exports = function (baseModel, bookshelf) {
    return baseModel.extend({
        tableName: 'categories',
        idAttribute: 'id'
    });
};
