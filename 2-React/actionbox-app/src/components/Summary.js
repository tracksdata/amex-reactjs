import React from 'react';

const Summary = (props) => {
    const {value}=props;
    return (
        <div>
            <div className="alert alert-info">
            Total Button Hits - <span className="badge badge-dark"> {value}</span>
            </div>
        </div>
    );
};

export default Summary;