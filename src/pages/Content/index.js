//storage helpers
import { checkIfContentScriptIsInEffect } from "./modules/inEffect";

//utils
import { observeDOM } from "../../utils";

//youtube
import { blurImages, blockAutoPlay } from "./modules/youtube";

//9gag
import { block9Gag } from "./modules/9gag";

//twitter
import { blockTwitter } from "./modules/twitter";

//check if script is in effect


//to background 
// import { sendInitailMsgToBackground } from "./modules/toBackground";

//recivers
import { getCategories } from "./modules/receivers";

const execute = () => {
    /**************Content to background callbacks*****************/
    // const contentToBgport = chrome.runtime.connect({ name: "content_to_background" });
    // contentToBgport.postMessage({ joke: "Knock knock from content" });

    /**************background to Content listeners*****************/
    chrome.runtime.onConnect.addListener((port) => {
        // port.onMessage.addListener(getCategories);
    });

    //youtube
    const content = document.getElementById('contents');
    blurImages(); //for initial render
    blockAutoPlay();
    observeDOM(content, blurImages); //for everytime user scrolls


    //9gag
    block9Gag();

    //twitter
    blockTwitter();
}

async function executor() {
    const canExecute = await checkIfContentScriptIsInEffect();
    console.log(canExecute);
    if (canExecute) execute();
}

executor();

//1. stop auto play
//2. switch with autotimer