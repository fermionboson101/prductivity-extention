//to content helpers
import { sendBlockedCategoriesToContent } from "./modules/toContent";

/************************ content to background listeners ********************/
// chrome.runtime.onConnect.addListener((port) => {
//     if (port.name === 'content_to_background') {
//         port.onMessage.addListener((msg) => {
//             console.log("** content_to_background", msg);
//         });
//     }
// });

/************************ background to content tab sender ********************/
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tabId) {
        const portToContent = chrome.tabs.connect(tabId);
        sendBlockedCategoriesToContent(portToContent)
    }
});

/************************ background to popup callbacks ********************/
// const backgroundToPopupPort = chrome.runtime.connect({ name: "background_to_popup" });
// backgroundToPopupPort.postMessage({ joke: "Knock knock from background" });

