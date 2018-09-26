'user strict';
/* global chrome:false */

function readerMode(tabId, changeInfo, tabInfo) {
    if (tabInfo.isInReadermode){
        
    }
    else if (changeInfo.isArticle) {
    browser.tabs.toggleReaderMode();
  }else{
      console.log('The specified tab,'+tabId+' cannot be placed into reader mode. ');
  }
}

chrome.browserAction.onClicked.addListener(readerMode);
