export const swaggerDocument = {
  swagger: '2.0',
  info: {
    description:
      "This is Tonnie's API documentation. All the endpoints are available in https://tonnie-api.herokuapp.com",
    version: '1.0.0',
    title: 'Tonnie API',
  },
  tags: [
    {
      name: 'users',
      description: "Everything about Tonnie's users",
    },
    {
      name: 'languages',
      description: "All languages registered in tonnie's api",
    },
    {
      name: 'skills',
      description: "All skills registered in tonnie's api",
    },
    {
      name: 'careers',
      description: "All careers registered in tonnie's api",
    },
    {
      name: 'userLanguages',
      description: "All user languages registered in tonnie's api",
    },
    {
      name: 'userSkills',
      description: "All user skills registered in tonnie's api",
    },
    {
      name: 'userCareers',
      description: "All user careers registered in tonnie's api",
    },
  ],
  schemes: ['https', 'http'],
  paths: {
    '/api/users/signin': {
      post: {
        tags: ['users'],
        summary: 'Logs user into the system',
        description: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'User object that needs to be send',
            required: true,
            schema: {
              $ref: '#/definitions/UserSignin',
            },
          },
        ],
        responses: {
          200: {
            description: 'Ok',
          },
          400: {
            description: 'Bad Request - Invalid email or password',
          },
        },
      },
    },
    '/api/users/register': {
      post: {
        tags: ['users'],
        summary: 'Register user into the system',
        description: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'User object that needs to be send',
            required: true,
            schema: {
              $ref: '#/definitions/UserRegister',
            },
          },
        ],
        responses: {
          200: {
            description: 'Ok',
          },
        },
      },
    },
    '/api/users/': {
      get: {
        tags: ['users'],
        summary: 'Get all users',
        description: 'Returns a array with all users',
        operationId: '',
        produces: ['application/json'],
        parameters: [],
        responses: {
          200: {
            description: 'Successful Operation',
            schema: {
              $ref: '#/definitions/User',
            },
          },
        },
      },
      put: {
        tags: ['users'],
        summary: 'Update an existing user',
        description: '',
        operationId: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'User object that needs to be updated',
            required: true,
            schema: {
              $ref: '#/definitions/User',
            },
          },
        ],
        responses: {
          200: {
            description: 'Ok',
          },
          400: {
            description:
              'The user id, email, fullname, nickname, pronouns, city, ddi, phone and profileUrl are requerired!',
          },
        },
      },
    },
    '/api/users/{userId}': {
      get: {
        tags: ['users'],
        summary: 'Find user by ID',
        description: 'Returns a single user',
        operationId: '',
        produces: ['application/json'],
        parameters: [
          {
            name: 'userId',
            in: 'path',
            description: 'ID of user to return',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/User',
            },
          },
        },
      },
      delete: {
        tags: ['users'],
        summary: 'Deletes a user',
        description: '',
        operationId: '',
        produces: ['application/json'],
        parameters: [
          {
            name: 'userId',
            in: 'path',
            description: 'ID of user to return',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'Ok',
          },
        },
      },
    },
    '/api/languages': {
      post: {
        tags: ['languages'],
        summary: 'Create a language',
        description: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Language object that needs to be created',
            required: true,
            schema: {
              $ref: '#/definitions/LanguageToBeCreated',
            },
          },
        ],
        responses: {
          200: {
            description: 'Ok',
          },
        },
      },
      get: {
        tags: ['languages'],
        summary: 'Get all languages',
        description: 'Returns a array with all languages',
        operationId: '',
        produces: ['application/json'],
        parameters: [],
        responses: {
          200: {
            description: 'Successful Operation',
            schema: {
              $ref: '#/definitions/Language',
            },
          },
        },
      },
      put: {
        tags: ['languages'],
        summary: 'Update an existing language',
        description: '',
        operationId: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Language object that needs to be updated',
            required: true,
            schema: {
              $ref: '#/definitions/Language',
            },
          },
        ],
        responses: {
          200: {
            description: 'Ok',
          },
        },
      },
    },
    '/api/languages/{languageId}': {
      get: {
        tags: ['languages'],
        summary: 'Find language by ID',
        description: 'Returns a single language',
        operationId: '',
        produces: ['application/json'],
        parameters: [
          {
            name: 'languageId',
            in: 'path',
            description: 'ID of language to return',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/Language',
            },
          },
        },
      },
      delete: {
        tags: ['languages'],
        summary: 'Deletes a language',
        description: '',
        operationId: '',
        produces: ['application/json'],
        parameters: [
          {
            name: 'languageId',
            in: 'path',
            description: 'ID of language to return',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'Ok',
          },
        },
      },
    },
    '/api/skills': {
      post: {
        tags: ['skills'],
        summary: 'Create a skill',
        description: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Skill object that needs to be created',
            required: true,
            schema: {
              $ref: '#/definitions/SkillToBeCreated',
            },
          },
        ],
        responses: {
          200: {
            description: 'Ok',
          },
        },
      },
      get: {
        tags: ['skills'],
        summary: 'Get all skills',
        description: 'Returns a array with all skills',
        operationId: '',
        produces: ['application/json'],
        parameters: [],
        responses: {
          200: {
            description: 'Successful Operation',
            schema: {
              $ref: '#/definitions/Skill',
            },
          },
        },
      },
      put: {
        tags: ['skills'],
        summary: 'Update an existing skill',
        description: '',
        operationId: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Skill object that needs to be updated',
            required: true,
            schema: {
              $ref: '#/definitions/Skill',
            },
          },
        ],
        responses: {
          200: {
            description: 'Ok',
          },
        },
      },
    },
    '/api/skills/{skillId}': {
      get: {
        tags: ['skills'],
        summary: 'Find skill by ID',
        description: 'Returns a single skill',
        operationId: '',
        produces: ['application/json'],
        parameters: [
          {
            name: 'skillId',
            in: 'path',
            description: 'ID of skill to return',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/Skill',
            },
          },
        },
      },
      delete: {
        tags: ['skills'],
        summary: 'Delete a skill',
        description: '',
        operationId: '',
        produces: ['application/json'],
        parameters: [
          {
            name: 'skillId',
            in: 'path',
            description: 'ID of skill to return',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'Ok',
          },
        },
      },
    },
    '/api/careers': {
      post: {
        tags: ['careers'],
        summary: 'Create a career',
        description: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Career object that needs to be created',
            required: true,
            schema: {
              $ref: '#/definitions/CareerToBeCreated',
            },
          },
        ],
        responses: {
          200: {
            description: 'Ok',
          },
        },
      },
      get: {
        tags: ['careers'],
        summary: 'Get all careers',
        description: 'Returns a array with all careers',
        operationId: '',
        produces: ['application/json'],
        parameters: [],
        responses: {
          200: {
            description: 'Successful Operation',
            schema: {
              $ref: '#/definitions/Career',
            },
          },
        },
      },
      put: {
        tags: ['careers'],
        summary: 'Update an existing career',
        description: '',
        operationId: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Career object that needs to be updated',
            required: true,
            schema: {
              $ref: '#/definitions/Career',
            },
          },
        ],
        responses: {
          200: {
            description: 'Ok',
          },
        },
      },
    },
    '/api/careers/{careerId}': {
      get: {
        tags: ['careers'],
        summary: 'Find career by ID',
        description: 'Returns a single career',
        operationId: '',
        produces: ['application/json'],
        parameters: [
          {
            name: 'careerId',
            in: 'path',
            description: 'ID of career to return',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/Career',
            },
          },
        },
      },
      delete: {
        tags: ['careers'],
        summary: 'Delete a career',
        description: '',
        operationId: '',
        produces: ['application/json'],
        parameters: [
          {
            name: 'careerId',
            in: 'path',
            description: 'ID of career to return',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'Ok',
          },
        },
      },
    },
    '/api/userLanguages': {
      post: {
        tags: ['userLanguages'],
        summary: 'Create a User Languages',
        description: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'User Language object that needs to be created',
            required: true,
            schema: {
              $ref: '#/definitions/UserLangToBeCreated',
            },
          },
        ],
        responses: {
          200: {
            description: 'Ok',
          },
        },
      },
      get: {
        tags: ['userLanguages'],
        summary: 'Get all userLanguages',
        description: 'Returns a array with all userLanguages',
        operationId: '',
        produces: ['application/json'],
        parameters: [],
        responses: {
          200: {
            description: 'Successful Operation',
            schema: {
              $ref: '#/definitions/UserLanguage',
            },
          },
        },
      },
      put: {
        tags: ['userLanguages'],
        summary: 'Update an existing userLanguage',
        description: '',
        operationId: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'User Language object that needs to be updated',
            required: true,
            schema: {
              $ref: '#/definitions/UserLanguage',
            },
          },
        ],
        responses: {
          200: {
            description: 'Ok',
          },
        },
      },
    },
    '/api/userLanguages/{userLanguageId}': {
      get: {
        tags: ['userLanguages'],
        summary: 'Find userLanguages by ID',
        description: 'Returns a single userLanguages',
        operationId: '',
        produces: ['application/json'],
        parameters: [
          {
            name: 'userLanguageId',
            in: 'path',
            description: 'ID of userLanguage to return',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/UserLanguage',
            },
          },
        },
      },
      delete: {
        tags: ['userLanguages'],
        summary: 'Deletes a userLanguage',
        description: '',
        operationId: '',
        produces: ['application/json'],
        parameters: [
          {
            name: 'userLanguageId',
            in: 'path',
            description: 'ID of userLanguage to return',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'Ok',
          },
        },
      },
    },
    '/api/userLanguages?userId={userId}': {
      get: {
        tags: ['userLanguages'],
        summary: 'Find userLanguages by UserId',
        description: 'Returns all userLanguages by userid',
        operationId: '',
        produces: ['application/json'],
        parameters: [
          {
            name: 'userId',
            in: 'path',
            description: 'ID of userLanguage to return',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/UserLangByUserId',
            },
          },
        },
      },
    },
    '/api/userLanguages?languageId={languageId}': {
      get: {
        tags: ['userLanguages'],
        summary: 'Find userLanguages by languageId',
        description: 'Returns all userLanguages by languageId',
        operationId: '',
        produces: ['application/json'],
        parameters: [
          {
            name: 'languageId',
            in: 'path',
            description: 'ID of userLanguage to return',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/UserLangByLanguageId',
            },
          },
        },
      },
    },
    '/api/userSkills': {
      post: {
        tags: ['userSkills'],
        summary: 'Create a User Skills',
        description: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'User Skills object that needs to be created',
            required: true,
            schema: {
              $ref: '#/definitions/UserSkillToBeCreated',
            },
          },
        ],
        responses: {
          200: {
            description: 'Ok',
          },
        },
      },
      get: {
        tags: ['userSkills'],
        summary: 'Get all userSkills',
        description: 'Returns a array with all userSkills',
        operationId: '',
        produces: ['application/json'],
        parameters: [],
        responses: {
          200: {
            description: 'Successful Operation',
            schema: {
              $ref: '#/definitions/UserSkill',
            },
          },
        },
      },
      put: {
        tags: ['userSkills'],
        summary: 'Update an existing userSkill',
        description: '',
        operationId: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'User Skill object that needs to be updated',
            required: true,
            schema: {
              $ref: '#/definitions/UserSkill',
            },
          },
        ],
        responses: {
          200: {
            description: 'Ok',
          },
        },
      },
    },
    '/api/userSkills/{userSkillId}': {
      get: {
        tags: ['userSkills'],
        summary: 'Find userSkills by ID',
        description: 'Returns a single userSkills',
        operationId: '',
        produces: ['application/json'],
        parameters: [
          {
            name: 'userSkillId',
            in: 'path',
            description: 'ID of userSkill to return',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/UserSkill',
            },
          },
        },
      },
      delete: {
        tags: ['userSkills'],
        summary: 'Deletes a userSkill',
        description: '',
        operationId: '',
        produces: ['application/json'],
        parameters: [
          {
            name: 'userSkillId',
            in: 'path',
            description: 'ID of userSkill to return',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'Ok',
          },
        },
      },
    },
    '/api/userSkills?userId={userId}': {
      get: {
        tags: ['userSkills'],
        summary: 'Find userSkills by UserId',
        description: 'Returns all userSkills by userid',
        operationId: '',
        produces: ['application/json'],
        parameters: [
          {
            name: 'userId',
            in: 'path',
            description: 'ID of userSkill to return',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/UserSkillsByUserId',
            },
          },
        },
      },
    },
    '/api/userSkills?skillId={skillId}': {
      get: {
        tags: ['userSkills'],
        summary: 'Find userSkills by skillId',
        description: 'Returns all userSkills by skillId',
        operationId: '',
        produces: ['application/json'],
        parameters: [
          {
            name: 'skillId',
            in: 'path',
            description: 'ID of userSkill to return',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/UserSkillsBySkillId',
            },
          },
        },
      },
    },
    '/api/userCareers': {
      post: {
        tags: ['userCareers'],
        summary: 'Create a User Careers',
        description: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'User Careers object that needs to be created',
            required: true,
            schema: {
              $ref: '#/definitions/UserCareerToBeCreated',
            },
          },
        ],
        responses: {
          200: {
            description: 'Ok',
          },
        },
      },
      get: {
        tags: ['userCareers'],
        summary: 'Get all userCareers',
        description: 'Returns a array with all userCareers',
        operationId: '',
        produces: ['application/json'],
        parameters: [],
        responses: {
          200: {
            description: 'Successful Operation',
            schema: {
              $ref: '#/definitions/UserCareer',
            },
          },
        },
      },
      put: {
        tags: ['userCareers'],
        summary: 'Update an existing userCareer',
        description: '',
        operationId: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'User Career object that needs to be updated',
            required: true,
            schema: {
              $ref: '#/definitions/UserCareer',
            },
          },
        ],
        responses: {
          200: {
            description: 'Ok',
          },
        },
      },
    },
    '/api/userCareers/{userCareerId}': {
      get: {
        tags: ['userCareers'],
        summary: 'Find userCareers by ID',
        description: 'Returns a single userCareers',
        operationId: '',
        produces: ['application/json'],
        parameters: [
          {
            name: 'userCareerId',
            in: 'path',
            description: 'ID of userCareer to return',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/UserCareer',
            },
          },
        },
      },
      delete: {
        tags: ['userCareers'],
        summary: 'Delete a userCareer',
        description: '',
        operationId: '',
        produces: ['application/json'],
        parameters: [
          {
            name: 'userCareerId',
            in: 'path',
            description: 'ID of userCareer to return',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'Ok',
          },
        },
      },
    },
    '/api/userCareers?userId={userId}': {
      get: {
        tags: ['userCareers'],
        summary: 'Find userCareers by UserId',
        description: 'Returns all userCareers by userid',
        operationId: '',
        produces: ['application/json'],
        parameters: [
          {
            name: 'userId',
            in: 'path',
            description: 'ID of userCareer to return',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/UserCareersByUserId',
            },
          },
        },
      },
    },
    '/api/userCareers?careerId={careerId}': {
      get: {
        tags: ['userCareers'],
        summary: 'Find userCareers by careerId',
        description: 'Returns all userCareers by careerId',
        operationId: '',
        produces: ['application/json'],
        parameters: [
          {
            name: 'careerId',
            in: 'path',
            description: 'ID of userCareers to return',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/UserCareersByCareerId',
            },
          },
        },
      },
    },
  },
  definitions: {
    User: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        email: {
          type: 'string',
          example: 'test01@gmail.com',
        },
        fullName: {
          type: 'string',
        },
        nickname: {
          type: 'string',
        },
        type: {
          type: 'string',
        },
        pronouns: {
          type: 'string',
        },
        city: {
          type: 'string',
        },
        ddi: {
          type: 'string',
        },
        phone: {
          type: 'string',
        },
        profileUrl: {
          type: 'string',
        },
      },
    },
    UserSignin: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'test01@gmail.com',
        },
        password: {
          type: 'string',
          example: '1234',
        },
      },
    },
    UserRegister: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'test01@gmail.com',
        },
        password: {
          type: 'string',
          example: '1234',
        },
      },
    },
    Language: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          example: 'English',
        },
      },
    },
    LanguageToBeCreated: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'English',
        },
      },
    },
    Skill: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          example: 'Fluter',
        },
        category: {
          type: 'string',
          example: 'Development',
        },
      },
    },
    SkillToBeCreated: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'Fluter',
        },
        category: {
          type: 'string',
          example: 'Development',
        },
      },
    },
    Career: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        jobTitle: {
          type: 'string',
          example: 'Developer',
        },
      },
    },
    CareerToBeCreated: {
      type: 'object',
      properties: {
        jobTitle: {
          type: 'string',
          example: 'Developer',
        },
      },
    },
    UserLanguage: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        userId: {
          type: 'integer',
          format: 'int64',
        },
        languageId: {
          type: 'integer',
          format: 'int64',
        },
        level: {
          type: 'string',
          example: 'English',
        },
      },
    },
    UserLangToBeCreated: {
      type: 'object',
      properties: {
        userId: {
          type: 'integer',
          format: 'int64',
        },
        languageId: {
          type: 'integer',
          format: 'int64',
        },
        level: {
          type: 'string',
          example: 'English',
        },
      },
    },
    UserLangByUserId: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        userId: {
          type: 'integer',
          format: 'int64',
        },
        languageId: {
          type: 'integer',
          format: 'int64',
        },
        level: {
          type: 'string',
          example: 'English',
        },
        user: {
          $ref: '#/definitions/User',
        },
      },
    },
    UserLangByLanguageId: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        userId: {
          type: 'integer',
          format: 'int64',
        },
        languageId: {
          type: 'integer',
          format: 'int64',
        },
        level: {
          type: 'string',
          example: 'English',
        },
        language: {
          $ref: '#/definitions/Language',
        },
      },
    },
    UserSkill: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        userId: {
          type: 'integer',
          format: 'int64',
        },
        skillId: {
          type: 'integer',
          format: 'int64',
        },
        yearsOfXp: {
          type: 'integer',
          example: 8,
        },
      },
    },
    UserSkillToBeCreated: {
      type: 'object',
      properties: {
        userId: {
          type: 'integer',
          format: 'int64',
        },
        skillId: {
          type: 'integer',
          format: 'int64',
        },
        yearsOfXp: {
          type: 'integer',
          example: 8,
        },
      },
    },
    UserSkillsByUserId: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        userId: {
          type: 'integer',
          format: 'int64',
        },
        skillId: {
          type: 'integer',
          format: 'int64',
        },
        yearsOfXp: {
          type: 'string',
          example: 8,
        },
        user: {
          $ref: '#/definitions/User',
        },
      },
    },
    UserSkillsBySkillId: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        userId: {
          type: 'integer',
          format: 'int64',
        },
        skillId: {
          type: 'integer',
          format: 'int64',
        },
        yearsOfXp: {
          type: 'string',
          example: 8,
        },
        Skill: {
          $ref: '#/definitions/Skill',
        },
      },
    },
    UserCareer: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        userId: {
          type: 'integer',
          format: 'int64',
        },
        careerId: {
          type: 'integer',
          format: 'int64',
        },
        yearsOfXp: {
          type: 'integer',
          example: 8,
        },
      },
    },
    UserCareerToBeCreated: {
      type: 'object',
      properties: {
        userId: {
          type: 'integer',
          format: 'int64',
        },
        careerId: {
          type: 'integer',
          format: 'int64',
        },
        yearsOfXp: {
          type: 'integer',
          example: 8,
        },
      },
    },
    UserCareersByUserId: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        userId: {
          type: 'integer',
          format: 'int64',
        },
        careerId: {
          type: 'integer',
          format: 'int64',
        },
        yearsOfXp: {
          type: 'string',
          example: 8,
        },
        user: {
          $ref: '#/definitions/User',
        },
      },
    },
    UserCareersByCareerId: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        userId: {
          type: 'integer',
          format: 'int64',
        },
        careerId: {
          type: 'integer',
          format: 'int64',
        },
        yearsOfXp: {
          type: 'string',
          example: 8,
        },
        career: {
          $ref: '#/definitions/Career',
        },
      },
    },
  },
  externalDocs: {
    description: 'Find out more about Tonnie',
    url: 'https://tonnietalent.com/',
  },
};
