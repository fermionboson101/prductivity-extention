import React, { useState } from 'react';
import './Switch';

import { updateIsContentInEffectInStorage } from "./helpers";

const Switch = () => {
    const [isOn, setIsOn] = useState(true);

    const onClick = () => {
        setIsOn(prev => {
            updateIsContentInEffectInStorage(!prev);
            return !prev;
        })
    }

    return <div>
        <input type="checkbox" onClick={onClick} checked={isOn} />
    </div>;
};

export default Switch;
