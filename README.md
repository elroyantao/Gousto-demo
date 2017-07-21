# Gousto coding exercise

### Installing the application
```javascript
yarn install
```
or
```javascript
npm install
```

### Running the application
#### in development mode
```javascript
yarn start
```
or
```javascript
npm start
```

#### in production mode
* build the file
```javascript
yarn prod:build
```
or
```javascript
npm run prod:build
```

* run production build
```javascript
yarn prod
```
or
```javascript
npm run prod
```

#### run the tests
```javascript
yarn test
```


or
```javascript
npm run test
```
### the solition
* i have used react for rendering 
* redux for state managment to have a single source of truth
* react-router for routing 
* on the backend i have used hapi to connect to the api using a library called 'isomorphic-fetch'
* for CSS i have used CSSmodules along woth postCSS and CSSnext for future CSS standards
* i have also folloed BEM naming convention
* i have tested the files using jest
* webpack is used as the build tool and webpack-dev-server is used for development along with hot module replacement
* babel is ised to transpile the es6 and jsx code
* also used yarn in place of npm

### components
* i have divided the components into 2 
> - *presentational* they role of these components is to only display the data passed into them by the parent
> - *containers* are the coponents which contain the presentaional components. they communicate with the server and has the buisness logic. they are commected to the store and pass the props to the presentaional components
* i have created an accordion component which calculated its rendered height and then uses this height to show the contents when it is opened
* the main container contains the router and the routes. and based on the selected route either show the home page or the categories page
* when there is an error in server response a modal is shown asking if you want to reload or just ignore/close the error popup

