
import config from '../config.json'
import React from 'react'
import styled from 'styled-components'
import superagent from 'superagent'

const API = config.web.internalApiServerName || config.api.serverName

const AppStyle = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #2b2b2b;

  > div {
    padding: 1.5em;
    background-color: #eee;
  }

  .title {
    font-size: 120%;
    font-weight: bold;
    margin-top: 0;
  }

  input[type=text] {
    padding: .5em;
    border-radius: 2px;
    border: 1px solid #aaa;
    margin: 0.5em;
  }

  button {
    padding: 0.5em;
    margin: 0.5em;
    float: right;
    border-radius: 2px;
    border: 1px solid #0333b2;
    background-color: #117ee3;
    color: white;
    cursor: pointer;

    :hover {
      transition: 0.2s;
      background-color: #2188d2;
    }
  }
`

export class App extends React.Component {

  constructor(props) {
    super(props)
    this.name = React.createRef()
  }

  async send(ev) {
    ev.preventDefault()
    let name = this.name.current.value;
    let result = await superagent.get(API + '/api/hello', {'name': name})
    alert(result.body.message)
  }

  componentDidMount() {
    this.name.current.focus()
  }

  render() {
    return <AppStyle>
      <div>
        <p className="title">Hello API Test</p>
        <form>
          <label htmlFor="name">Name</label>
          <input ref={this.name} type="text" name="name"/> <br/>
          <button onClick={this.send.bind(this)}>Send</button>
        </form>
      </div>
    </AppStyle>
  }

}
