console.log("parag si");
var x = window.document.body;



chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch(message.type) {
        case "record":
            x.addEventListener('mousedown', cssSelector,true);
            x.addEventListener('keydown', cssSelector ,true);

        break;
        
        case "stop_record":
                x.removeEventListener('mousedown', cssSelector,true);
                x.removeEventListener('keydown', cssSelector,true);
                
                console.log('event listener removed');
        break;

    }
    
    return true; // Inform Chrome that we will make a delayed sendResponse.
  });


function cssSelector (event) {
    var sendobject ={};
    var element = event.target;
    my_selector_generator = new CssSelectorGenerator;
    
    var selector = my_selector_generator.getSelector(element);
 
  
    

    sendobject.eventType = event.type;
    sendobject.selector = selector;
    sendobject.selectorValue = event.keyCode ;



    console.log('type', sendobject.eventType);
    console.log('element',  sendobject.selector );
    console.log('value', sendobject.selectorValue);

    chrome.runtime.sendMessage(sendobject);

 }  

 function removeListener()

{
    console.log('listener removed');
}



