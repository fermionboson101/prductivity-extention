//constant
import { REDIRECTION_LINK, HOST_NAMES } from "../../../../contants";

//helpers
import { getFromStorage } from "../../../../utils";

export const block9Gag = async () => {
    const redirectLink = await getFromStorage(REDIRECTION_LINK);
    if (location.hostname === HOST_NAMES.ninegag) {
        location.href = redirectLink;
    }
}
