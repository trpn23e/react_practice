import React, {
  Component,
  Fragment
} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Common from './../common/Common'
import DTI from './../dti/DTI'
import Board from './../board/Board'

class RouterCmp extends Component {
  constructor (props, context) {
    super(props, context);
  }

  // componentDidMount () {
  //   const { handle } = this.props.match.params
  //   fetch(`https://localhost:3000/${handle}`)
  //     .then((user) => {
  //       this.setState(() => ({ user }))
  //     })
  // }
  
  _routingPaths () {
    return (
      <Router>
        <Switch>
          {/* <Common commonProp={this.state} /> */}
          {/* <Route exact path='/' render={ (props) => <DTI {...props} cpmName='DTI' /> } /> */}
          <Route exact path='/' render={ (props) => <DTI {...props} cpmName='DTI' /> } />
          <Route exact path='/board' render={ (props) => <Board {...props} cpmName='BOARD' /> } />
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