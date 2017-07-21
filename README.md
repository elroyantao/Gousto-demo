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
