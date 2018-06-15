
__all__ = ['config']

import json
import os
from os.path import join, dirname

filename = os.getenv('CONFIG_FILENAME', '')
if not filename:
  filename = join(dirname(dirname(__file__)), 'config.json')

with open(filename, 'r') as fp:
  config = json.load(fp)
