var inquirer = require('inquirer')

var roles = ['phpmyadmin', 'statsd']

function questionGenerator (name) {
	return {
		type: 'confirm',
		name: name,
		message: `Would you like to include ${name}?\n`,
		default: false,
	}
}

inquirer.prompt(roles.map(questionGenerator))
.then(answers => {console.log(answers)})