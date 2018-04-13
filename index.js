var inquirer = require('inquirer')

var roles = ['phpmyadmin', 'statsd']

var questions = []

function includeQuestionGenerator (name) {
	return {
		type: 'confirm',
		name: name,
		message: `Would you like to include ${name}?\n`,
		default: false,
	}
}

var saveQuestion = {
	type: 'input',
	name: 'outputDir',
	message: 'Where would you like to save the output files?\n',
	default: './blubber-docker-setup'
}

questions.push(saveQuestion)
questions = questions.concat(roles.map(includeQuestionGenerator))

inquirer.prompt(questions)
.then(answers => {console.log(answers)})
