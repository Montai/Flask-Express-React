
import React from 'react'
import ReactDOM from 'react-dom'

export class IndexComponent extends React.Component {

  render() {
    return <p>Hello, World</p>
  }

}

ReactDOM.render(<IndexComponent/>, document.getElementById('main'))
