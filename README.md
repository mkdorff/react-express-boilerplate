## What is this?

One Node project that holds the front and back end. A simple `yarn start` from the root will launch both instances for active development.

### Getting Started

From the root directory just run 

```
yarn install
```

that will install all the dependencies in both the client and server projects. Then run

```
yarn start
```

All files in both the client and server projects will be watched now. The front-end can be accesed at localhost:3000 and the back-end at localhost:3001

## What's in it?

There are a few simple scripts in the root folder to manage, run, clean, and build everything.

The client is a create-react-app project with [preprocessed sass](https://github.com/michaelwayman/node-sass-chokidar) and [redux-zero](https://github.com/concretesolutions/redux-zero). The proxy is configured to point to the backend so we can just call `fetch(/api/...)`.

The backend is super barebones right now and only depends on [express](https://expressjs.com) and [babel-preset-env](https://babeljs.io/docs/plugins/preset-env/). This will become more flushed out as I develop opinions on how I want this structured.

You can work within the individual client or server projects and run all the commands in there.

## Folder Structure

I'm a huge fan of create-react-app so I tried to keeps things as simple as possible. I also have settled into my conventions for how I structure my react app so I've set up the folder structure as the following:

```
client/
  node_modules/
  package.json
  public/
    favicon.ico
    index.html
    manifest.json
  src/
    assets/
    components/
    helpers/
    redux-zero/
      actions/
      store.js
    routes/
    services/
    _shared.scss
    index.js
```

The meat is in the **src** folder. **Assets** should hold images, fonts, and anything static we would need to serve. **Components** should be any reusable components. **Helpers** should hold any helper scripts, like your super secret hashing algorithm. **Redux-zero** deals with all things state. **store.js** is the init, **actions** holds all the actions to update the state. **Routes** holds our Router and all subsequent routing. **Index.js** typically just mounts onto #root and wraps a `<Provider>` around `<Router>`. **Services** will hold all our api calls. Finally, **_shared.scss** holds all our global mixins, colors, fonts, etc.

The server side doesn't have much configuration because I'm not much of a backend guy. I'm 100% open to suggestions.

The parent project main has these scripts we can use:

```
"install": "(cd client && yarn) && (cd server && yarn)",
"start": "concurrently \"cd client && PORT=3000 yarn start\" \"cd server && PORT=3001 yarn start\"",
"build": "concurrently \"cd client && yarn build\" \"cd server && yarn build\"",
```

They just piggyback off the installs, starts, and builds of the children projects. Simple but effective.


**Note** I'm well aware that node-sass-chokidar causes for some thrashing when compiling. I've tried debugging for a few hours and I'm pretty sure it's a node-sass library issue. Hopefully, this will be fixed with time. Also, as much as I love sass, I'm thinking of switching to another preprocessor
