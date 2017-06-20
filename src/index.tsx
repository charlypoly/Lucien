import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import ChordConstruction from './ChordConstruction';
// import IntervalQuizz from './IntervalQuizz';
import { structure } from './reducers/index';
import { StoreState } from './types/index';

const store = createStore<StoreState>(structure, {
  structure: {
    currentExerciceComponent: 'ChordConstruction'
  }
});

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Intervals</Link></li>
          <li><Link to="/topics">Chords</Link></li>
        </ul>

        <hr />

        <Route exact={true} path="/" component={App} />
        <Route exact={true} path="/" component={ChordConstruction} />

      </div>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
