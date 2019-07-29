/* 
  Used create-react-app for generation to save time on config
  If the application were bigger, I'd consider using Redux and Redux-Saga
  for the Async Redux handler. Saga's channels works really well with streams and
  any pub-sub pattern.
  For a heavier dashboard, would probably also consider using NextJS for SSR.
  Under different time constraints, would make responsive
*/

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(<App />, document.getElementById('root'))
