import * as React from 'react';
import './App.css';
import { connect, Dispatch } from 'react-redux';
import { StoreState, ExerciceComponent } from "./types/index";
import * as actions from './actions/';


interface ConnectedProps {
  currentExercice?: ExerciceComponent;
  setCurrentExercice?: (component: ExerciceComponent) => any;
}

// function App({ currentExercice = 'IntervalQuizz', setCurrentExercice }: ConnectedProps) {
//   return <div></div>;
// }

class App extends React.Component<ConnectedProps, {}> {

  toggle = () => {
    if (this.props.setCurrentExercice) {
      if (this.props.currentExercice === 'ChordConstruction') {
        this.props.setCurrentExercice('IntervalQuizz');
      } else {
        this.props.setCurrentExercice('ChordConstruction');
      }
    }
  }
  render() {
    return (
      <div className="App">
        <div>
          {this.props.currentExercice}
        </div>
        <div>
          <button onClick={this.toggle}>
            Change exercice
          </button>
        </div>
      </div>
    );
  }
}

export function mapStateToProps({ structure }: StoreState): { currentExercice?: ExerciceComponent } {
  return {
    currentExercice: structure.currentExerciceComponent
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.SetCurrentExercice>): { setCurrentExercice?: (component: ExerciceComponent) => any; } {
  return {
    setCurrentExercice: (component: ExerciceComponent) => dispatch(actions.setCurrentExercice(component))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
