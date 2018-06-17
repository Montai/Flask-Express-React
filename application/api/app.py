
__all__ = ['app']

import flask
import flask_cors
from urllib.parse import urlparse
from .config import config

app = flask.Flask(__name__)
app.config['SERVER_NAME'] = urlparse(config['api']['serverName']).netloc
flask_cors.CORS(app)
