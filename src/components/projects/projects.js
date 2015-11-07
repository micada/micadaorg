import React from 'react';
import DocsList from './docs-list';

class Docs extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="section">
                    <h1>Projects</h1>
                </div>
                <div className="row">
                    <div className="column-xsmall-6">
                        <DocsList docs={this.props.docs}/>
                    </div>
                    <div className="column-xsmall-6">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Docs;
