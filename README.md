## Hosted Link here: https://mrkazmi333.github.io/movieApp/

## Index

- [About](#about)
- [Preview](#preview)
- [Usage](#usage)
  - [Pre-Requisites](#pre-requisites)
  - [Development Environment](#development-environment)
  - [File Structure](#file-structure)
  - [Commands](#command)

## About

A movie search engine website made using the help of OMDB API. Thanks to creators of API :3

## Preview

<!-- <img src="/assets/tooltip1.png"></img> -->
<!-- <img src="/assets/tooltip2.png"></img> -->

## Usage

To use this code, make sure you have all the `pre-requisites` and your `development environment` is ready. After that you can read about the `file-structure`, which also explains about project structure and how things are working in background. Commands will tell you about the important `commands` you should konow.

### Pre-requisites

In order to work on this project or to develop it, you need to have some pre-installed tools and knowledge about them. Below are the tools you need to install on your system:

- NPM
- Nodejs

### Development Environment

Once you have all the requirements checked out, you can develop this project. You need to set up the development environment to work on it. Follow the steps given below to setup:

1. Clone this repository, write in terminal `git clone https://github.com/mrkazmi333/movieApp.git`.
2. Go inside the cloned folder using `$ cd movieApp`, and install all the dependencies. `$ npm install`
3. To test run the dev server. `$ npm start`

### File Structure

| No  | File/Folder name   | Details                                                                    |
| --- | ------------------ | -------------------------------------------------------------------------- |
| 1   | ./src              | Contains un-built application source code.                                 |
| 2   | ./src/actions      | Folder containing all the action types and creators that needs the         |
|     |                    | to dispatched using reducer inside the index.js file.                      |
| 3   | ./src/reducers     | All the reducers defined inside the folder that returns the desired object |
| 4   | ./src/components   | Individual components view, styling, and logic that our application uses.  |
| 5   | ./src/index.css    | Style for the project.                                                     |
| 6   | ./node_modules/... | Auto installed node packages.                                              |
| 7   | package.json       | NPM package file for this project.                                         |
| 8   | package-lock.json  | NPM packages details.                                                      |
| 9   | .gitignore         | To ignore files to be a part of version control.                           |
| 10  | ./assets           | For storing the images of application preview.                             |
| 11  | ./build            | Webpack output the build here, which is then hosted by github pages.       |

### Commands

- Installing all the dependencies.
  ```
  npm install
  ```
- Starting development server.
  ```
  npm start
  ```

#### Build

To build the project for production, you can use the following command. The output will be dumped in `/build` folder which is used by the github pages to host the site.

```
$ npm run build
```

Feel free to add your own features or improve this one, any kind of help is appreciated.
