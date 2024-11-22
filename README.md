# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

******\*\*\*******from my CMD when running npx create**************************\*\*\***************************

npx create-react-app my-app
Need to install the following packages:
create-react-app@5.0.1
Ok to proceed? (y) y

npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated uid-number@0.0.6: This package is no longer supported.
npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
npm warn deprecated fstream-ignore@1.0.5: This package is no longer supported.
npm warn deprecated fstream@1.0.12: This package is no longer supported.
npm warn deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.

Creating a new React app in C:\Users\rober\Documents\CSC214\Group Project\my-app.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...

added 1314 packages in 51s

259 packages are looking for funding
run `npm fund` for details

Initialized a git repository.

Installing template dependencies using npm...

added 46 packages, and changed 1 package in 7s

263 packages are looking for funding
run `npm fund` for details
Removing template package using npm...

removed 1 package, and audited 1360 packages in 4s

263 packages are looking for funding
run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
npm audit fix --force

Run `npm audit` for details.
Git commit not created Error: Command failed: git commit -m "Initialize project using Create React App"
at genericNodeError (node:internal/errors:984:15)
at wrappedFn (node:internal/errors:538:14)
at checkExecSyncError (node:child_process:891:11)
at execSync (node:child_process:963:15)
at tryGitCommit (C:\Users\rober\Documents\CSC214\Group Project\my-app\node_modules\react-scripts\scripts\init.js:62:5)
at module.exports (C:\Users\rober\Documents\CSC214\Group Project\my-app\node_modules\react-scripts\scripts\init.js:350:25)
at [eval]:3:14
at runScriptInThisContext (node:internal/vm:209:10)
at node:internal/process/execution:118:14
at [eval]-wrapper:6:24 {
status: 128,
signal: null,
output: [ null, null, null ],
pid: 15736,
stdout: null,
stderr: null
}
Removing .git directory...

Success! Created my-app at C:\Users\rober\Documents\CSC214\Group Project\my-app
Inside that directory, you can run several commands:

npm start
Starts the development server.

npm run build
Bundles the app into static files for production.

npm test
Starts the test runner.

npm run eject
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

cd my-app
npm start

Happy hacking!

********\*********After running npm install for configuration of ESLint for React error checking******\*******
npm install eslint-plugin-react-hooks --save-dev

added 1 package, changed 1 package, and audited 1361 packages in 5s

263 packages are looking for funding
run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
npm audit fix --force

Run `npm audit` for details.

// NOTE:
Running audit fix will update some of the packages but not all their dependencies which can cause run time errors

in the src directory you can have directories for pictures, styles (CSS), and others. This is a
file tree structure that is more about organization rather than Object Oriented.
This is done using a heirarchy file structure.

Use this link for official guide (best guide honestly). Look at Selecting a template for the app.
https://create-react-app.dev/docs/getting-started

To install node modules in current directory type: npm install

JSX files:
These files are good for writing HTML-like structures within the JavaScript code.
This is where we'll use HTML tags to represent our UI elements.

JS files:
Ideal for plain files that just contain logic, functions, and other non-UI parts
of your react components. Not directly related to component rendering, or external API's
that don't require JSX. (so can be js files that just have functions for JSX files to reference)

The components directory is where all of the HTML and tag-related code will be,
anything that relates to the HTML of our website and JSX.

src folder in general has to do with our source code.

Styles is for CSS styles files for formatting HTML in JSX files?

Found info from Stack Overflow:
By default webpack and other build tools will compile all CSS files into one, even if css was imported in separate JSX files. So you can't use different CSS files and expect you don't affect on another part of page.

You have some options:

      Use BEM for naming class names.

      Use cssModules. In this case elements will have their own css class name and styles will not affect any other elements except if you use :global selector

More on CSS files: https://github.com/css-modules/css-modules

Index.html:
From: https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.geeksforgeeks.org/how-to-use-files-in-public-folder-in-reactjs/&ved=2ahUKEwjCj8Dyg8yJAxU_mIQIHTY8CHUQFnoECBYQAw&usg=AOvVaw2Jy1oSjb7gdbVmtkQ3iGyW

In React, the files stored in the "public" folder contains static files such as "index.html", javascript library files, images, and other assets, etc. which you don't want to be processed by Webpack. Files in this folder are copied and pasted as they are directly into the build folder.

NOTE: I don't think all images should be in the public folder, will look into this

Recommended file structure by Gemini (Google):

components/: Reusable UI components.

      Organize by feature or component type (e.g., Buttons/, Forms/, Layout/).
      Each component can have its own folder for related files (e.g., Button.jsx, Button.css, Button.test.jsx).

pages/ or views/: Top-level components representing different routes or sections of your application.
hooks/: Custom React hooks for reusable logic.
services/ or api/: Code for interacting with APIs or external services.
utils/: Helper functions, utility modules.
context/: Context providers and consumers for global state management.
store/: If using Redux, store configuration and reducers.
styles/: Global stylesheets or CSS modules.
assets/: Project-specific assets (e.g., images, fonts).
