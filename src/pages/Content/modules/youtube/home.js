export const blurImages = () => {
    const imageElements = document.getElementsByTagName('ytd-thumbnail');
    for (let element of imageElements) {
        element.style.filter = "blur(8px)";
        element.addEventListener('mouseover', (e) => {
            e.preventDefault();
            e.stopPropagation();
        })
    }
}

export const blockAutoPlay = () => {
    const elements = document.getElementsByTagName('ytd-rich-grid-media');
    for (let element of elements) {
        const autoPlayEventElement = element.getElementsByClassName('ytd-rich-grid-media')[0];
        autoPlayEventElement.style.pointerEvents = "auto";
    }
}