var file = chrome.runtime.getURL('inject.js')
console.log(file)
var s = document.createElement('script')
s.type = 'text/javascript'
s.src = file
document.documentElement.appendChild(s)