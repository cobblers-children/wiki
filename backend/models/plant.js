'use strict';

module.exports = function (baseModel, bookshelf) {
    return baseModel.extend({
        tableName: 'plants',
        idAttribute: 'id',
        categories: function() {
            return this.belongsToMany(bookshelf.model('Category'), 'plant_categories', 'plant', 'category');
        }
    });
};
