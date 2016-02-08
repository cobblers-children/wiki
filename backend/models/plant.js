'use strict';

module.exports = function (baseModel, bookshelf) {
    return baseModel.extend({
        tableName: 'plants',
        idAttribute: 'id',
        group: function() {
            return this.belongsTo(bookshelf.model('Group'), 'group');
        }
    });
};
