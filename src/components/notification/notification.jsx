import React from 'react';
import Button from '../button/button.jsx';

const style = {
    padding: '30px',
    margin: '30px',
    border: '1px solid grey'
}

const Notification = () => {
    return (
        <div style={style} className="notification-component">
            <Button name="Get Started" />
        </div>
    );
}

export default Notification;