
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', table => {
      table.increments();
      table.string('project_name', 128)
      .notNullable();
      table.text('project_description');
      table.boolean('completed')
      .defaultTo(false)
      .notNullable();
  })
  .createTable('resources', table => {
    table.increments();
    table.string('resource_name', 128)
    .notNullable()
    .unique();
    table.text('resource_description');
  })
  .createTable('projects_resources', table => {
    table.increments();
    table.integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('projects')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
    table.integer('resource_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('resources')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  })
  .createTable('tasks', table => {
    table.increments();
    table.text('task_description')
    .notNullable();
    table.text('notes');
    table.boolean('completed')
    .defaultTo(false)
    .notNullable();
    table.integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('projects')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('tasks')
  .dropTableIfExists('projects_resources')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
