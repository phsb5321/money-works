module.exports = function (plop) {
	plop.setGenerator('hook', {
		description: 'Gerador de React Hooks',
		prompts: [{
			type: 'input',
			name: 'nomeHook',
			message: 'Digite o nome do Hook: '
		}],
		actions: [{
			type: 'add',
			path: 'src/hooks/use{{nomeHook}}.js',
			templateFile: 'plop/hook-template.hbs'
		}]
	})
};