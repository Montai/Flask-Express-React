
import fs from "fs"
import path from "path"
import { URL } from "url"
import express from "express"

const CONFIG_FILE = path.join(__dirname, "../config.json")
const STATIC_DIR = path.join(__dirname, "../static")
const HTML_FILE = path.join(STATIC_DIR, "index.html")

const config = JSON.parse(fs.readFileSync(CONFIG_FILE))
const isDevelopment = process.env.NODE_ENV !== "production"
const app = express()

app.set("port", process.env.PORT || new URL(config.web.serverName).port)

if (isDevelopment) {
  const webpackDevMiddleware = require("webpack-dev-middleware")
  const webpackHotMiddleware = require("webpack-hot-middleware")
  const webpackConfig = require("../../webpack.config.js")
  const compiler = require('webpack')(webpackConfig)

	app.use(webpackDevMiddleware(compiler, {
		publicPath: webpackConfig.output.publicPath
	}))

	app.use(webpackHotMiddleware(compiler))

	app.get("/", (req, res, next) => {
		fs.readFile(HTML_FILE, (err, result) => {
			if (err) {
				return next(err)
			}
			res.set('content-type', 'text/html')
			res.send(result)
			res.end()
		})
	})
}

else {
	app.use(express.static(STATIC_DIR))
}

app.listen(app.get("port"))
