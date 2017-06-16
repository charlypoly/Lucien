import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
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
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
