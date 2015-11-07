import React from 'react';
import DocsList from './docs-list';

class Docs extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="panel awf-header">
                    <h1>react-starter Docs</h1>
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
