//constant
import { REDIRECTION_LINK, HOST_NAMES } from "../../../../contants";

//helpers
import { getFromStorage } from "../../../../utils";

export const blockTwitter = async () => {
    const redirectLink = await getFromStorage(REDIRECTION_LINK);
    console.log(HOST_NAMES, location.hostname, "**************")
    if (location.hostname === HOST_NAMES.twitter) {
        location.href = redirectLink;
    }
}
