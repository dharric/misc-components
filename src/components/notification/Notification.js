import React from 'react';
import './Notification.scss';

export default class Notification extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            currentClass: 'card notification-end'
        }
    }

    componentDidUpdate() {
        if(this.state.currentClass === 'card notification-start'){
            setTimeout(() => {
                this.setState({ currentClass: 'card notification-end'});
            }, 3500);            
        }
    }

    show = () => {
        this.setState({ currentClass: 'card notification-start'})
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