### Let's Play Client

* Client attempt #2, still implementing redux as I learn.
* Descoped to a single game list to simplify things
* React router working properly with Switch components.
* Thunk implemented with Fetch for API - currently working on Search component
* Basic actions/reducers working for deleting friends and games from their respective lists
* GameView *NEW*
	* New component added to view a single game selected from either search results or game list (might end up a container, not sure yet)
	* Need to pass props of a game element to GameView component when click on game title from GameList 
	* Added ADD button to GameView component to prepare for onClick add game to list function
* Search
	* Refactored search to be a Redux container *NEW*
	* Factored out a SearchResult component. Probably not totally necessary but makes it easier for me to deal with *this* bindings *NEW*
	* Laid groundwork for implementation of search result onClick for loading that game's data into /game view (SearchResult component holds complete props for each item that can be transferred to GameView component) *NEW*
	* Removed live search filtering in favor of query capture with Go button to search. It's simpler for me to implement this way for now. *NEW*
* Components & containers are properly compartmentalized now w/imports - if I end up with too many connected containers I can refactor again but for now connecting components that make sense and that don't interfere with react-router functioning (e.g. not Main/App)
* Deploys successfull to Netlify and Travis CI, single smoke test passes

#### References:

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
