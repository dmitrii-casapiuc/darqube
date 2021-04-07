import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Main from 'layouts/Main'
import News from 'pages/News'
import Bookmarks from 'pages/Bookmarks/'

const App: React.FC = (): JSX.Element => {
  return (
    <Main>
      <Switch>
        <Route exact path="/" component={News} />
        <Route path="/bookmarks" component={Bookmarks} />
        <Redirect to="/" />
      </Switch>
    </Main>  
  )
}

export default App
