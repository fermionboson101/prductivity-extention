//contant
import { MSG_TYPE, REDIRECTION_LINK } from "../../../contants";

//helpers
import { saveInStorage, getFromStorage } from "../../../utils";

const saveLinkInStorage = (link) => {
    saveInStorage(REDIRECTION_LINK, link)
}

export const getLinkFromStorage = async () => {
    try {
        const value = await getFromStorage(REDIRECTION_LINK);
        return value;
    }
    catch (e) {
        console.log(e);
        return null;
    }
}

export const clearRefValue = (ref) => {
    if (ref.current) {
        ref.current.value = "";
    }
}

export const hanldeInputOnSubmit = ({ event, setRedirectionLink }) => {
    event.preventDefault();
    const redirectionLink = event.target[0].value;
    if (!redirectionLink) {
        alert("Not an acceptable value. try again!");
        return;
    };
    setRedirectionLink(_ => {
        saveLinkInStorage(redirectionLink);
        return redirectionLink;
    });
};