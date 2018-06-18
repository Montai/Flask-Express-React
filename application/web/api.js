
import config from '../config.json'
import superagent from 'superagent'

const API = config.web.internalApiServerName || config.api.serverName

export function get() {
  arguments[0] = API + arguments[0];
  return superagent.get(...arguments);
}

export function post(url) {
  arguments[0] = API + arguments[0];
  return superagent.post(...arguments);
}

export default { get, post }
