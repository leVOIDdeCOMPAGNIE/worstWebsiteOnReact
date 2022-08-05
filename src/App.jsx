import React, { useState } from 'react';
import { Player } from './components'
import batterWaitSrc from './images/open.jpeg';
import batterActiveSrc from './images/closed.jpeg';

import catcherWaitSrc from './images/pizza.jpg';
import catcherActiveSrc from './images/beatfruit.png';

export const App = () => {
    const [status, setStatus] = useState('wait');
    const onActive = () => setStatus('active');

    return <div className="App">
        <Player
            name={'batter'}
            waitSrc={batterWaitSrc}
            activeSrc={batterActiveSrc}
            status={status}
            onActive={onActive}
        />
        <Player
            name={'catcher'}
            waitSrc={catcherWaitSrc}
            activeSrc={catcherActiveSrc}
            status={status}
        />
    </div>
}