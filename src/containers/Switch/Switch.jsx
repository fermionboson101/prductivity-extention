import React, { useEffect, useState } from 'react';
import './Switch';

import { setIsContentInEffectInStorage, getIsContentInEffectInStorage } from "./helpers";

const Switch = () => {
    const [isContentInEffect, setIsContentInEffect] = useState(true);

    const onClick = () => {
        setIsContentInEffect(prev => {
            setIsContentInEffectInStorage(!prev);
            return !prev;
        })
    }

    const setContentInEffect = async () => {
        const isEffect = await getIsContentInEffectInStorage();
        console.log(isEffect, "****")
        setIsContentInEffect(isEffect);
    }

    useEffect(() => {
        console.log(isContentInEffect, "****")
        setContentInEffect();
    }, []);

    return <div>
        <input type="checkbox" onClick={onClick} checked={isContentInEffect} />
    </div>;
};

export default Switch;
