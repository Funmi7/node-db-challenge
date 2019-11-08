const db = require('../data/db-config');
const mappers = require('./mappers');

module.exports = {
    getTasks: (id) => {
      return db('tasks as t')
      .join('projects as p', 'p.id', 't.project_id')
      .select('t.*', 'p.project_name', 'p.project_description')
      .where('t.project_id', id)
      .then(tasks =>
        tasks.map(task => {
          return {
            ...task,
            completed: mappers.convertBoolean(task.completed)
          };
        })
      );
    },
    addTask: task => {
      return db("tasks").insert(task);
    }
}