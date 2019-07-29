/* 
  Used create-react-app for generation to save time on config
  If the application were bigger, I'd consider using Redux and Redux-Saga
    for the Async Redux handler. Saga's channels works really well with streams and
    any pub-sub pattern.
  For a heavier dashboard, would probably also consider using NextJS for SSR.
  Under different time constraints, would make responsive.
  Used Recharts as the charting library because it's lightweight and there isn't
    requirement for anything heavier.
  Would consider making a <Connection /> wrapper for App to put the websocket connection into
    if app were larger but not too large for Redux - it would separate the connection (and maybe auth)
    logicfrom the App/UI. It could then be bundled with a config component, packaged up and re-used
    across dashboards/UIs. Also reduces testing effort.
  Would consider making all html elements ada-compliant and accessible
*/

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(<App />, document.getElementById('root'))
