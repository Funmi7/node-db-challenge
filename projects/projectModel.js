const db = require('../data/db-config');
const mappers = require('./mappers');

module.exports = {
    get,
    getById,
    add
}

function get() {
  return db("projects").then(projects =>
    projects.map(project => {
      return {
        ...project,
        completed: mappers.convertBoolean(project.completed)
      };
    })
  );
}

function getById(id) {
    return db('projects')
    .where({ id })
    .first();
}

function add(project) {
    return db('projects')
    .insert(project)
    .then(ids => {
        return getById(ids[0]);
    });
}



