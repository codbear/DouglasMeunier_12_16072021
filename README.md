<p align="center">
  <img src="public/favicon.png"  alt="" width="256">
</p>

<h1 align="center">SportSee</h1>

<p align="center">
  This is the source code for SportSee analytics dashboard.
</p>

## Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

You need to have SportSee's API running. [Read more here](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard).

## Install

Clone this repository
```bash
git clone https://github.com/codbear/DouglasMeunier_12_16072021.git SportSee && cd SportSee
```

Install dependencies
```bash
yarn install
```

If you serve the API from a different URL than the default one, you should set the root URL from which the API is served in `.env` at the root of the project under the key `REACT_APP_API_ROOT_URL`. 

Start the app in development mode
```bash
yarn start
```
The app is served at [http://localhost:3001?userId=12](http://localhost:3001?userId=12) if the API is served on port 3000 (default). The page will reload if you make edits.

## Usage
As the authentification is not yet implemented, you need to provide a user id through the GET param `userId`.
If you don't provide it, you will be redirected to [http://localhost:3001?userId=12](http://localhost:3001?userId=12) by default.

***Currently, two users have been mocked in the provided API. They have id 12 and 18 respectively***

## Deploy

Build the app for production to the `build` folder.
```bash
yarn build
```

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The app is ready to be deployed!

Read Create-React-App doc about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

