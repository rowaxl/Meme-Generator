import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'

import App from './pages/App';
import NotFound from './pages/NotFound'

import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/404" component={NotFound} />
            <Route component={App} />
          </Switch>
        </Router>
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
