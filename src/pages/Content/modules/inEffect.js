//storage helpers
import { getFromStorage } from "../../../utils/storage";

//constant
import { IS_CONTENT_SCRIPT_IN_EFFECT } from "../../../contants";

export const checkIfContentScriptIsInEffect = async () => {
    try {
        const isInEffect = Boolean(await getFromStorage(IS_CONTENT_SCRIPT_IN_EFFECT));
        return isInEffect;
    }
    catch (e) {
        console.log("keeping content script in effect by default due to storage failure");
    }
    return true;
}