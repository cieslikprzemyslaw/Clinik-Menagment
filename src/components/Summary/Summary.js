import React from 'react';

const Summary = ({ title, content, number }) => {
    return (
        <section className="summary">
            <h2 className="summary__title">{title}</h2>
            <p className="summary__content">{content}<span>{number}</span></p>
        </section>
    );
}

export default Summary;