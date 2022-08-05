import React from 'react';

import './style.scss';

export const Player = props => {
    const { name, status, waitSrc, activeSrc, onActive, disActive } = props;
    const src = status === 'wait' ? waitSrc : activeSrc;
    const showButton = onActive && status !== 'active' || disActive && status === 'active';
    
    return (
        <section className="player">
            <h3 className="player__name">{name}</h3>
            <img src={src} alt={name} className="player__image"/>
            {showButton && <button className="player__action" onClick={onActive}>Set Active</button>}
            {showButton && <button className="player__action" onClick={disActive}>Set Not Active</button>}
        </section>
    );
};