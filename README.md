# NESTJS BOILERPLATE

This is the fourth project for Udacity's Frontend Developer nanodegree.
It consists of a page for process a web article and return sentiments using NLP from Meanings Cloud API.

## IMPORTANT ⚠

Due to Aylien Text API isn't for free access now in 2021, I use [Meaning Cloud API](https://www.meaningcloud.com/).
.env file isn't included but I define this file below.

## Structure 💡

```bash
├── README.md
├── LICENCE.md
├── REQUIREMENTS.md # achieved requirements
├── .vscode/ # visual code ideal settings
├── src/
│   ├── client/ # web app
│   └── server/ # NodeJS express server
├── .env # !!! this file isn't attached
├── .eslintrc.json # eslint config
├── .stylelint.json # stylelint config
├── babel.config.js # babel config
├── webpack.dev.js # webpack dev server config
├── webpack.prod.js # webpack production config
├── tsconfig.build.js # config for build
└── package.json
```

## Executing ⚙️

Project uses **npm scripts** for eases execution, testing and building.
Also this is using webpack.

Before execute the project, install npm dependencies with `npm i`.

| Command                 | Action                                     |
| ----------------------- | ------------------------------------------ |
| npm start               | starts nodejs server                       |
| npm run start-dev       | starts nodejs server in debug/watcher mode |
| npm run build-dev       | starts webpack dev server for web app      |
| npm run build-prod      | bundle the web app                         |
| npm run lint-analyze    | executes linter analysis                   |
| npm run lint-fix        | executes linter analysis and autofix       |
| npm run test-server     | executes jest unit tests for server        |
| npm run test-client     | executes jest unit tests for web app       |
| npm run build-and-start | builds the web app and executes the server |

So, you can get an api key in [Meaning Cloud API](https://www.meaningcloud.com/).

Finally, you should create a .env file in project root, with the format below:

```bash
DEBUG=false # true for use mock response in nodejs server
API_URL=https://api.meaningcloud.com/sentiment-2.1
API_LANG=en
API_KEY=<your-meaning-cloud-api-key>
```

I used this article to test: https://www.sciencedaily.com/releases/2021/06/210607161000.htm

## Linting 🧿

Project uses two linters, for code formatting and code styling normalizing.

-   **eslint**: TypeScript linter with Airbnb React base config and some other additions.
-   **stylelint**: CSS/SASS linter.

For correct interpretation of linters, is recommended to use [Visual Studio Code](https://code.visualstudio.com/) as IDE and install Eslint plugin.

---

⌨ by Alvear Candia, Cristopher Alejandro <calvear93@gmail.com>
