### Let's Play Client

* Client attempt #2, still implementing redux as I learn.
* Descoped to a single game list to simplify things
* React router working properly with Switch components.
* Thunk implemented with Fetch for API - currently working on Search component
* Basic actions/reducers working for deleting friends and games from their respective lists *NEW*
* Search *NEW*
	* Storing state but needs actions/reducers and needs to move search data into a parent container if possible.
	* Needs implementation of click search result to load that game's data into /game view
	* No filtering but improved search string enough may not need it.
* Components & containers are properly compartmentalized now w/imports *NEW*
* Deploys successfull to Netlify and Travis CI, single smoke test passes

#### Used references:

* https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
* https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
* http://www.jchapron.com/2015/08/14/getting-started-with-redux/
* https://daveceddia.com/avoid-bind-when-passing-props/
* Regarding use of multiple connected containers: https://twitter.com/dan_abramov/status/668585589609005056?lang=en


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### `npm start`

### `npm test`

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
