// module.exports = {
// 	intToBoolean,
// 	booleanToInt,
// 	projectToBody,
// 	taskToBody
// };

// function intToBoolean(int) {
// 	return int === 1 ? true : false;
// }

// function booleanToInt(bool) {
// 	return bool === true ? 1 : 0;
// }

// function projectToBody(project) {
// 	const result = {
// 		...project,
// 		completed: intToBoolean(project.completed),
// 		};
// 		if (project.tasks) {
// 			result.tasks = project.tasks.map(task => ({
// 				...task,
// 				completed: intToBoolean(task.completed),
// 			}));
// 		}
// 		return result
// }

// function taskToBody(task) {
// 	return {
// 		...task,
// 		completed: intToBoolean(task.completed)
// 	}
// } 

module.exports = {
	convertBoolean: boolean => {
	  return boolean ? true : false;
	}
  };