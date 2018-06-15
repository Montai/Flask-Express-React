## Flask-Express-React

This is a template for web-applications with Python 3 [Flask], a [React]
frontend, a separate [Express] web server and [Webpack] bundling.

[Flask]: http://flask.pocoo.org/
[Express]: https://expressjs.com/
[React]: https://reactjs.org/
[Webpack]: https://webpack.js.org/
[WTFPL]: http://www.wtfpl.net/

<p align="center"><img src="https://i.imgur.com/r2QW31k.png"></p>

#### Why a separate web server?

The Flask application could just serve the React application directly.
Serving the website from a Node.js Express server instead has several
advantages such as server-side rendering and webpack hot-reloading.

#### Development

First you will need to install the Node.js and Python dependencies.

    npm i
    virtualenv .venv && source .venv/bin/activate && pip install -r requirements.txt

Then you should use two separate terminals or bash jobs to run the web and
API servers. Then visit http://localhost:8080

    npm start web:dev
    npm start api:dev

You may want to remove `package-lock.json` from `.gitignore`.

---

![](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-1.png)  
Licensed under [WTFPL]
