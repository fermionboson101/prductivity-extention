import { IS_CONTENT_SCRIPT_IN_EFFECT } from "../../../contants";

import { saveInStorage, getFromStorage } from "../../../utils";

export const setIsContentInEffectInStorage = (isEffective) => {
    saveInStorage(IS_CONTENT_SCRIPT_IN_EFFECT, isEffective);
}

export const getIsContentInEffectInStorage = async () => {
    const isEffective = getFromStorage(IS_CONTENT_SCRIPT_IN_EFFECT);
    return isEffective;
}