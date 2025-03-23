// This file contains the background script for the extension, which runs in the background and handles events such as browser actions and alarms.

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
});
