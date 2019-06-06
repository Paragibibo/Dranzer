document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#start_recording').addEventListener('click', record_start);
    document.querySelector('#stop_recording').addEventListener('click', stop_record);
    
  });

 function record_start() {
      console.log('start the recording');


    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type:"record"}, function(response){
            console.log("connection established");
        });
    });

    
  }

  function stop_record() {
        console.log('stop the recording');
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {type:"stop_record"}, function(response){
                console.log("connection should break");
            });
        });
    
  }

