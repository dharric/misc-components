import React from 'react';
import './BoarderHighlight.scss';

export default class BoarderHighlight extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            currentClass: 'card highlight-end'
        }
    }

    componentDidUpdate() {
        if(this.state.currentClass === 'card highlight-start'){
            setTimeout(() => {
                this.setState({ currentClass: 'card highlight-end'});
            }, 2410);            
        }
    }

    show = () => {
        this.setState({ currentClass: 'card highlight-start'})
    }

    hide = () => {
        
    }

    render() {
        return (<div className={this.state.currentClass} style={{width: '18rem'}}>
            <div className="card-header">
                My Title
            </div>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                this is a nice body
            </div>
        </div>);
    }
}