'use strict';

module.exports = function (baseModel, bookshelf) {
    return baseModel.extend({
        tableName: 'articles',
        idAttribute: 'id'
    });
};
