
from flask import request, jsonify
from ..app import app


@app.route('/api/hello')
def hello():
  name = request.args.get('name') or 'World'
  return jsonify(message='Hello, {}!'.format(name)), 200
