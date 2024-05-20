import { IS_CONTENT_SCRIPT_IN_EFFECT } from "../../../contants";

import { saveInStorage } from "../../../utils";

export const updateIsContentInEffectInStorage = (isEffective) => {
    saveInStorage(IS_CONTENT_SCRIPT_IN_EFFECT, isEffective);
}