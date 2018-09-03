import React, {
  Component,
  Fragment
} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

// import Common from './../common/Common'
import DTI from './../dti/DTI'
import Board from './../board/Board'

class RouterCmp extends Component {
  constructor (props, context) {
    super(props, context);
  }

  _routingPaths () {
    return (
      <Router>
        <Switch>
          {/* <Common commonProp={this.state} /> */}
          <Route exact path='/' component={DTI} />
          <Route path='/board' component={Board} />
          {/* <DTI cpmName="DTI" /> */}
        </Switch>
      </Router>
    )
  }

  render () {
    return (
      <Fragment>
      {this._routingPaths()}
      </Fragment>
    )
  }
}

export default RouterCmp