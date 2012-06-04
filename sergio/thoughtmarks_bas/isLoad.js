function checkScriptLoad() {
  chrome.extension.onRequest.addListener(function(request, sender, response) {
  	console.log("msg received isLoad")
    if (request.msg == 'is_page_capturable') {
      try {
        if (isPageCapturable()) {
          response({msg: 'capturable'});
        } else {
          response({msg: 'uncapturable'});
        }
      } catch(e) {
        response({msg: 'loading'});
      }
    }
  });
}

checkScriptLoad();
