## How To Run

- First Git Clone Or Download Project
- `npm install` or `yarn add`
- Run: `npm start` or `yarn start`

## Description
The main limitation of pokeapi is that it only allows to search a single pokemon by its full name. 
To work around this limitation this app pre-downloads all the pokemons. Then it's possible to filter out and display pokemons which names contain search query from the input field. For example, the results of query pid would include pidgey and pidgeot.

The app consists of two screens:
1) The Home screen with input field and the list of pokemons;
2) The Details screen with the additional information about the selected pokemon;

* react-router-dom was used for navigation between screens.
* Input field utilizes useDebounce hook to prevent multiple requests on input change;

Completion time of this demo: ±8h

## Possible additions/improvements:
* Pokemons caching (localStorage or IndexedDB);
* Centralized data store (e.g. Redux);
* Add more details about the pokemons on Details screen;
* Add tests;
* Code refactoring and bug fixes;
