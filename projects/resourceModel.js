const db = require('../data/db-config');
module.exports = {
	getResources: () => {
		return db("resources");
	},
	addResource: resource => {
		return db('resources')
			.insert(resource)
	}
};