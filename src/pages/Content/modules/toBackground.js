//contants
import { MSG_TYPE } from "../../../contants";

export const sendInitailMsgToBackground = () => {
    let data = {};
    chrome.runtime.sendMessage({
        type: MSG_TYPE.TO_BG.blockedCategoriesData,
        data: { data: "sample data" }
    });
}
