import React from 'react';
import './Notification.scss';

export default class Notification extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            lastClass: 'card notification-end',
            lastDisplayRequest: '' // show or hide
        }
    }

    componentDidMount(){
        if(this.state.lastClass === 'card notification-start'){
            setTimeout(() => {
                this.props.notificationComplete(this.props.index);
                this.setState({ lastClass: 'card notification-end'});
            }, 7000);            
        }
    }

    static getDerivedStateFromProps(props, state){
        if(props.displayRequest === 'show' && state.lastDisplayRequest !== props.displayRequest){
            return {
                lastDisplayRequest: props.displayRequest,
                lastClass: 'card notification-start'
            }
        }
        return null;
    }    

    render() {
        const style={
            top: '10px',
            width: '18rem'
        };
        return (<div className={this.state.lastClass} style={style}>
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