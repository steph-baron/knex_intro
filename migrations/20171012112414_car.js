
exports.up = function(knex, Promise) {
  return knex.schema.createTable('car', function(table){
    table.increments('id').primary();
    table.string('make').notNull();
    table.integer('year').notNull();
    table.string('model').notNull();
    table.string('color').notNull();
    table.boolean('runs');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.droTableIfExists('car');
};
