import React, { Component } from 'react'
import io from 'socket.io-client'
const URL = 'http://localhost:8000'

class App extends Component {
  state = {
    socket: null,
  }

  componentWillMount() {
    this.initializeConnection()
  }

  initializeConnection = () => {
    const socket = io(URL)
    try {
      socket.on('connect', () => {
        console.log('connected')
      })
      this.setState({ socket })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    this.state.socket.on('data', data => {
      console.log(data)
    })
    return <div>Practical Intro To WebSockets.</div>
  }
}

export default App
