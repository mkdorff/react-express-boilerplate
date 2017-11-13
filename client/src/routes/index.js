import React from 'react'
// import { connect } from 'redux-zero/react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './routes.css'


// const MTP = ({}) => ({});
export default function Routes(props) {
  return (
    <BrowserRouter>
      <div className="site-container">
        <Switch>
          <Route path="/" render={() => (<div>Hello from front end</div>)} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

// export default connect(MTP)(Routes)