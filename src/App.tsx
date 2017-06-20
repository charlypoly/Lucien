import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import './App.css';
import * as actions from './actions/';
import { ExerciceComponent, StoreState } from './types/index';

interface ConnectedProps {
    currentExercice?: ExerciceComponent;
    setCurrentExercice?: (component: ExerciceComponent) => {};
}

type Props = ConnectedProps & RouteComponentProps<{}>;

class App extends React.Component<Props, {}> {

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
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.SetCurrentExercice>):
    { setCurrentExercice?: (component: ExerciceComponent) => {}; } {

    return {
        setCurrentExercice: (component: ExerciceComponent) => dispatch(actions.setCurrentExercice(component))
    };
}

export default connect<ConnectedProps, any, Props>(mapStateToProps, mapDispatchToProps)(App);
