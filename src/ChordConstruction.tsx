import * as React from 'react';
import { RouteComponentProps } from 'react-router';
// import './ChordConstruction.css';

interface ComponentProps { }
interface ComponentState { }
type Props = ComponentProps & RouteComponentProps<{}>;

class ChordConstruction extends React.Component<Props, ComponentState> {

    render() {
        return (
            <div>
                <div className="chord">
                    Fmaj7
                </div>
                <div>
                    <div className="intervals">
                        <div className="interval">
                            5
                        </div>
                        <div className="interval">
                            3
                        </div>
                        <div className="interval">
                            R
                        </div>
                    </div>
                    <div className="notes">
                        <div className="note">
                            G
                        </div>
                        <div className="note">
                            E
                        </div>
                        <div className="note">
                            C
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChordConstruction;
