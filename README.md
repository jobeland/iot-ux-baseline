# Azure IoT UX Baseline

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and added the following features that are required by almost all Azure IoT UX solutions:

- [Typescript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [I18-Next](https://react.i18next.com) for internationalization.
- [Azure IoT UX Fluent Controls](https://github.com/Azure/iot-ux-fluent-controls) for common UX controls.
- [Azure IoT UX Fluent CSS](https://github.com/Azure/iot-ux-fluent-css) for the common Azure IoT color palette and themes.

## Getting Started

To get started with your own UX solution, fork this repo, run `npm install`, and start editing. `src/pages/App.tsx` is the main entry point and has examples of how all the above features work together.

You can learn more about the individual features [here](#learn-more).

## Leveraging In An Existing Repository

To leverage this UX baseline in your pre-existing repository, add this repository as a remote and pull the latest. From your repository directory:
```
git remote add baseline https://github.com/Azure/iot-ux-baseline.git
git checkout -b <integration branch> 
git pull baseline master --allow-unrelated-histories
<resolve any conflicts>
git push
<submit PR to your repository from integration branch>
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- [React](https://reactjs.org/).
- [Azure IoT UX Fluent Controls](https://aka.ms/iotfluentcontrols).
- [Azure IoT UX Fluent CSS](https://github.com/Azure/iot-ux-fluent-css).
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [React-I18Next](https://react.i18next.com/)
