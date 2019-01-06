import React from 'react';
import Notification from './Notification';

export default class NotificationService extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            queue: []
        }
    }

    notificationComplete = (index) => {
        const queue = [...this.state.queue];
        queue.splice(index, 1);
        this.setState({queue});
    }

    addNote = () => {
        const interval = setInterval(() => {
            if(this.state.queue.length === 0) {
                const queue = this.state.queue.concat({
                    index: this.state.queue.length - 1
                });
                this.setState({ queue });
                clearInterval(interval);
            }
        }, 100)
    }

    render() {
        const notifications = this.state.queue.map((item, index) => {
            return <Notification 
                key={`noti-${index}`} 
                notificationComplete={this.notificationComplete} 
                index={index} 
                displayRequest='show' />;
        });
        return (<React.Fragment>
            {notifications}
        </React.Fragment>);
    }
}