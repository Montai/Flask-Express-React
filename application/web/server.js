
import fs from "fs"
import path from "path"
import { URL } from "url"
import express from "express"

const CONFIG_FILE = path.join(__dirname, "../config.json")
const config = JSON.parse(fs.readFileSync(CONFIG_FILE))
const isDevelopment = process.env.NODE_ENV !== "production"

const app = express()
app.set("port", process.env.PORT || new URL(config.web.serverName).port);

if (isDevelopment) {
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const webpackConfig = require("../../webpack.config.js");
  const compiler = require('webpack')(webpackConfig);
  const HTML_FILE = path.join(__dirname, "index.html")

	app.use(webpackDevMiddleware(compiler, {
		publicPath: webpackConfig.output.publicPath
	}));

	app.use(webpackHotMiddleware(compiler));

	app.get("*", (req, res, next) => {
		fs.readFile(HTML_FILE, (err, result) => {
			if (err) {
				return next(err);
			}
			res.set('content-type', 'text/html');
			res.send(result);
			res.end();
		});
	});
}

else {
  const DIST_DIR = path.join(__dirname, "../dist")
  const HTML_FILE = path.join(DIST_DIR, "index.html")

	app.use(express.static(DIST_DIR));
	app.get("*", (req, res) => res.sendFile(HTML_FILE));
}

app.listen(app.get("port"));
