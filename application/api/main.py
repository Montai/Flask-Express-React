
from urllib.parse import urlparse
from .app import app
from .config import config
from . import views


def main():
  info = urlparse(config['api']['serverName'])
  host, port = info.netloc.partition(':')[::2]
  app.run(host=host, port=port)
