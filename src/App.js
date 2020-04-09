import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Ruvivo from './components/ruvivo';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { width: window.innerWidth};
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Ruvivo} />
                </Switch>
            </div>
        )
    }
}

export default App;