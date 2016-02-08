
exports.up = function(knex, Promise) {
    return knex.schema.createTable('groups', function(table) {
        table.string('id').primary();
        table.string('name');
        table.string('description');
        table.string('body', 5000);
        table.string('image');
    }).createTable('plants', function (table) {
        table.string('id').primary();
        table.string('name');
        table.string('group').references('groups.id');
        table.string('description');
        table.string('body', 5000);
        table.string('image');
    }).createTable('articles', function (table) {
        table.string('id').primary();
        table.string('name');
        table.string('description');
        table.string('body', 5000);
        table.string('image');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('plants').dropTable('groups').dropTable('articles');
};
