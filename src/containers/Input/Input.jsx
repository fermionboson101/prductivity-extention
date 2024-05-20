import React, { useCallback, useEffect, useRef, useState } from 'react';
import './Input.scss';

//helpers
import { hanldeInputOnSubmit, getLinkFromStorage } from "./helpers";

export const Input = () => {
    const [redirectionLink, setRedirectionLink] = useState();

    const hanldeOnSubmit = useCallback((event) => {
        hanldeInputOnSubmit({ event, setRedirectionLink });
    }, [redirectionLink]);

    const setInitialData = async () => {
        const link = await getLinkFromStorage();
        setRedirectionLink(link)
    }

    useEffect(() => {
        setInitialData();
    }, []);

    return <form onSubmit={hanldeOnSubmit}>
        <input placeholder={redirectionLink} />
        <div>redirectionLink: {redirectionLink}</div>
    </form>;
};

export default Input;
