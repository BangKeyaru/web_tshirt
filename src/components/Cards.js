import React from 'react';

const Card = ({ title }) => {
    return (
    <div style={{
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '20px',
        margin: '10px',
        textAlign: 'center',
        width: '200px',
        height: '100px',
    }}>
        <h4>{title}</h4>
    </div>
    );
};

export default Card;
