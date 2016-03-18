/**
 * @param {knex} knex
 * @param Promise
 */
exports.up = function(knex, Promise) {
    return knex.schema
        .renameTable('groups', 'categories')
        .createTable('plant_categories', function(table) {
            table.increments('id').primary();
            table.string('plant').references('id').inTable('plants');
            table.string('category').references('id').inTable('categories');
        })
        .then(function() {
            return knex.select('id', 'group').from('plants');
        })
        .then(function(plants) {
            var inserts = [];

            for (var i = 0; i < plants.length; i++) {
                var plant = plants[i];

                inserts.push(knex.insert({plant: plant.id, category: plant.group }).into('plant_categories'));
            }

            return Promise.all(inserts);
        })
        .then(function() {
            return knex.schema.table('plants', function(table) {
                table.dropColumn('group');
            });
        })
};

exports.down = function(knex, Promise) {
    knex.schema.renameTable('categories', 'groups');
};
