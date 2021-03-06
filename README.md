# flutefish

Example isomorphic app with product listing, individual product page and fav items. Uses [Goflux](https://github.com/tomchentw/goflux/) + [Yahoo Routr](https://github.com/yahoo/routr).

Running example: http://flutefish.herokuapp.com/

## Solution Stack

* Frontend
  - React.js
  - [Goflux](https://github.com/tomchentw/goflux/)
  - [Yahoo Routr](https://github.com/yahoo/routr)
  - [webpack](http://webpack.github.io/docs/)

* Backend
  - Express.js
  - React.js server side rendering
  - [Goflux](https://github.com/tomchentw/goflux/)

## Starting Points

* `common/views/app.jsx`: Isomorphic React component of the entire app.
* `server/server.js`: ExpressJS server that acts as an API server, and invokes ReactJS server-side rendering, which loads `common/views/app.jsx`.
* `client/js/client.js`: Front-end javascript starting point. Also loads `common/view/app.jsx` and initializes the app in the browser.
* `client/css/client.css`: Starting point of all styles of the app.


## Run locally

```
git clone https://github.com/MrOrz/flutefish.git
cd flutefish
npm install
npm start
```

If you wish to change files and have them automatically recompiled, you may also want to run this in a separate shell window:

```
npm run watch
```

## Omitted (out of scope) webdev issues
* Persistent database storage
* Anti-CSRF
