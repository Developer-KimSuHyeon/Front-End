


console.log("background running...");


// let url = "";
// chrome.tabs.executeScript( {
//     code: "window.getSelection().toString();"
//     }, function(selection) {
//         url = selection[0];
//     });

// alert(url)

// let currentUrl
// chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//     // urlArray.push(tabs[0].url)
//     currentUrl = tabs[0].url;
// });


// chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
//     if(request.method == "getUrl") {
//       sendResponse({data: currentUrl});
//     }
//     else
//       sendResponse({}); // snub them.
// });

// chrome.extension.onMessage.addListener(function(request, sender, sendResponse) { 
//   if (request.asking === "login"){
//     console.log('got msg from popup.js');
//     return;
//   } 
// });

// chrome.browserAction.onClicked.addListener(function() {
//   chrome.tabs.create({url: 'main_window.html'});
// });