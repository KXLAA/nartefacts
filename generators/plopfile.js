module.exports = function (plop) {
    plop.setGenerator('component', {
      description: 'application component logic',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'component name please',
        },
      ],
      actions: [
        {
          type: 'add',
          path: '../src/components/{{camelCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'templates/component.tsx.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{camelCase name}}/index.ts',
          templateFile: 'templates/index.ts.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{camelCase name}}/types.ts',
          templateFile: 'templates/types.ts.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{camelCase name}}/styles.ts',
          templateFile: 'templates/styles.ts.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{camelCase name}}/__tests__/{{camelCase name}}.test.tsx',
          templateFile: 'templates/test.tsx.hbs',
        },
      ],
    })
  }
  