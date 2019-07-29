/* 
  Was able to mock out the socket-io to test UI but not able to
  get to testing connection itself
*/
let EVENTS = {}

function emit(event, ...args) {
  EVENTS[event].forEach(func => func(...args))
}

const socket = {
  on: (event, func) => {
    if (EVENTS[event]) {
      return EVENTS[event].push(func)
    }
    EVENTS[event] = [func]
  },
}

export const io = () => {
  return socket
}

// to emulate server emit
export const serverSocket = { emit }
// cleanup helper
export function cleanup() {
  EVENTS = {}
}

export default io
