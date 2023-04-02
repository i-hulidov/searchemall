## How To Run

- First Git Clone Or Download Project
- `npm install` or `yarn add`
- Run: `npm start` or `yarn start`

## Description
The main limitation of pokeapi is that it only allows to search a single pokemon by its full name. 
To work around this limitation this app pre-downloads all the pokemons. Then it's possible to filter out and display pokemons which names contain search query from the input field. For example, the results of query pid would include pidgey and pidgeot.

The app consists of three screens:
1) The Welcome screen
2) The Home screen with input field and the list of pokemons;
3) The Details screen with the additional information about the selected pokemon;

## Folder structure
- src 
  - api - requests and api client configuration 
  - assets - images, fonts etc.
  - components 
    - shared - basic and reusable components 
    - composite - components that are built with reusable components
    - screens - pages of the application
  - contexts - business logic
  - data 
    - constants
  - styles - global styles, fonts, variables
  - types - global typings
  - routes - routing information
  - utils - common utility functions

### Components folder structure
SomeComponent
- hooks - component specific hooks
- utils - component specific utility functions
- index.ts
- SomeComponent,tsx
- SomeComponent.styles.module.scss - sass styles module file

## Routing
For routing in the application `react-router-dom` package was used as it is the most suitable option for routing in the browser environments.

### Completion time of this demo: ±30h

## Possible additions/improvements:
* Caching of Pokemons results (localStorage or IndexedDB);
* Centralized data store (e.g. Redux);
* Add more test coverage;
* Code refactoring and bug fixes;
