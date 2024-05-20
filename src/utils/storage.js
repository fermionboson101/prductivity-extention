export const getFromStorage = async (key) => {
    const pair = await chrome.storage.sync.get([key]);
    if (pair) return pair[key];
    throw new Error('no key present');
}

export const saveInStorage = (key, value) => {
    const pair = { [key]: value };
    return chrome.storage.sync.set(pair);
}
