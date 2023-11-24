# Live App
Checkout the app live at http://ec2-35-86-147-12.us-west-2.compute.amazonaws.com:8080/ (dockerized version runs here on ec2)

# Bootstrap

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deployment with Docker
- sudo docker build -t peter-thorpe-centripetal-interview-app .
- sudo docker run -d -p 8080:80 peter-thorpe-centripetal-interview-app
- ensure that port 8080 is open

## Deployment via static bundle
- The static bundle in the `build` folder can be deployed by serving the `index.html` file on any web server. 

## Code organization
- Interview Question 1 is implemented as a client side react application with the source code in the `src` folder. 
- Components I wrote are in the `Components` folder, each one properly encapsulated with helper files specific to the component. 
- The top level component that the `App` component uses is the `GridSolver` component. 
- Interview question 2 is implemented within the `src` folder as `getTopNValuesWithCountsForAllAttributes.ts`. 

## Testing
- Interview question 1: In the `GridSolver/util` directory you'll find the unit tests for the `getSolvedGridValues.ts` module. In the `App.test.tsx` file in the src directory you'll find the React Testing Library component tests for the `GridSolver` component. These set of tests confirm that the app as a whole is working and should be thought of as (lean) integration tests. All of these tests run and pass when `npm test` is run, per the screenshot below.
- Interview question 2: In the `getTopNValuesWithCountsForAllAttributes.test.ts` file in the `src` directory you'll find the tests for interview question 2. They all pass when `npm test` is run, per the screenshot below. 

## Screenshot of all tests passing 
![All Tests Passing](https://user-images.githubusercontent.com/2890669/284021886-ffe5aebf-ea5d-4025-b81e-3fea44f4ab11.png)

## Screenshot of app live on ec2 (docker)
![App live on ec2](https://user-images.githubusercontent.com/2890669/284021895-5006aecc-0aef-4f75-abd8-e66c6d430ae8.png)
