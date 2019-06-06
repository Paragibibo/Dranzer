var data = [];
var url_data =[];
var last_tab_url = "https://www.google.com/";
var new_tab_url ="";

var keyboardMap = [
    "", // [0]
    "", // [1]
    "", // [2]
    "CANCEL", // [3]
    "", // [4]
    "", // [5]
    "HELP", // [6]
    "", // [7]
    "Backspace", // [8]
    "TAB", // [9]
    "", // [10]
    "", // [11]
    "CLEAR", // [12]
    "ENTER", // [13]
    "ENTER_SPECIAL", // [14]
    "", // [15]
    "SHIFT", // [16]
    "CONTROL", // [17]
    "ALT", // [18]
    "PAUSE", // [19]
    "CAPS_LOCK", // [20]
    "KANA", // [21]
    "EISU", // [22]
    "JUNJA", // [23]
    "FINAL", // [24]
    "HANJA", // [25]
    "", // [26]
    "ESCAPE", // [27]
    "CONVERT", // [28]
    "NONCONVERT", // [29]
    "ACCEPT", // [30]
    "MODECHANGE", // [31]
    "SPACE", // [32]
    "PAGE_UP", // [33]
    "PAGE_DOWN", // [34]
    "END", // [35]
    "HOME", // [36]
    "ArrowLeft", // [37]
    "ArrowUp", // [38]
    "ArrowRight", // [39]
    "ArrowDown", // [40]
    "SELECT", // [41]
    "PRINT", // [42]
    "EXECUTE", // [43]
    "PRINTSCREEN", // [44]
    "INSERT", // [45]
    "DELETE", // [46]
    "", // [47]
    "0", // [48]
    "1", // [49]
    "2", // [50]
    "3", // [51]
    "4", // [52]
    "5", // [53]
    "6", // [54]
    "7", // [55]
    "8", // [56]
    "9", // [57]
    "COLON", // [58]
    "SEMICOLON", // [59]
    "LESS_THAN", // [60]
    "EQUALS", // [61]
    "GREATER_THAN", // [62]
    "QUESTION_MARK", // [63]
    "AT", // [64]
    "A", // [65]
    "B", // [66]
    "C", // [67]
    "D", // [68]
    "E", // [69]
    "F", // [70]
    "G", // [71]
    "H", // [72]
    "I", // [73]
    "J", // [74]
    "K", // [75]
    "L", // [76]
    "M", // [77]
    "N", // [78]
    "O", // [79]
    "P", // [80]
    "Q", // [81]
    "R", // [82]
    "S", // [83]
    "T", // [84]
    "U", // [85]
    "V", // [86]
    "W", // [87]
    "X", // [88]
    "Y", // [89]
    "Z", // [90]
    "OS_KEY", // [91] Windows Key (Windows) or Command Key (Mac)
    "", // [92]
    "CONTEXT_MENU", // [93]
    "", // [94]
    "SLEEP", // [95]
    "NUMPAD0", // [96]
    "NUMPAD1", // [97]
    "NUMPAD2", // [98]
    "NUMPAD3", // [99]
    "NUMPAD4", // [100]
    "NUMPAD5", // [101]
    "NUMPAD6", // [102]
    "NUMPAD7", // [103]
    "NUMPAD8", // [104]
    "NUMPAD9", // [105]
    "MULTIPLY", // [106]
    "ADD", // [107]
    "SEPARATOR", // [108]
    "SUBTRACT", // [109]
    "DECIMAL", // [110]
    "DIVIDE", // [111]
    "F1", // [112]
    "F2", // [113]
    "F3", // [114]
    "F4", // [115]
    "F5", // [116]
    "F6", // [117]
    "F7", // [118]
    "F8", // [119]
    "F9", // [120]
    "F10", // [121]
    "F11", // [122]
    "F12", // [123]
    "F13", // [124]
    "F14", // [125]
    "F15", // [126]
    "F16", // [127]
    "F17", // [128]
    "F18", // [129]
    "F19", // [130]
    "F20", // [131]
    "F21", // [132]
    "F22", // [133]
    "F23", // [134]
    "F24", // [135]
    "", // [136]
    "", // [137]
    "", // [138]
    "", // [139]
    "", // [140]
    "", // [141]
    "", // [142]
    "", // [143]
    "NUM_LOCK", // [144]
    "SCROLL_LOCK", // [145]
    "WIN_OEM_FJ_JISHO", // [146]
    "WIN_OEM_FJ_MASSHOU", // [147]
    "WIN_OEM_FJ_TOUROKU", // [148]
    "WIN_OEM_FJ_LOYA", // [149]
    "WIN_OEM_FJ_ROYA", // [150]
    "", // [151]
    "", // [152]
    "", // [153]
    "", // [154]
    "", // [155]
    "", // [156]
    "", // [157]
    "", // [158]
    "", // [159]
    "CIRCUMFLEX", // [160]
    "EXCLAMATION", // [161]
    "DOUBLE_QUOTE", // [162]
    "HASH", // [163]
    "DOLLAR", // [164]
    "PERCENT", // [165]
    "AMPERSAND", // [166]
    "UNDERSCORE", // [167]
    "OPEN_PAREN", // [168]
    "CLOSE_PAREN", // [169]
    "ASTERISK", // [170]
    "PLUS", // [171]
    "PIPE", // [172]
    "HYPHEN_MINUS", // [173]
    "OPEN_CURLY_BRACKET", // [174]
    "CLOSE_CURLY_BRACKET", // [175]
    "TILDE", // [176]
    "", // [177]
    "", // [178]
    "", // [179]
    "", // [180]
    "VOLUME_MUTE", // [181]
    "VOLUME_DOWN", // [182]
    "VOLUME_UP", // [183]
    "", // [184]
    "", // [185]
    "SEMICOLON", // [186]
    "EQUALS", // [187]
    "COMMA", // [188]
    "MINUS", // [189]
    "PERIOD", // [190]
    "SLASH", // [191]
    "BACK_QUOTE", // [192]
    "", // [193]
    "", // [194]
    "", // [195]
    "", // [196]
    "", // [197]
    "", // [198]
    "", // [199]
    "", // [200]
    "", // [201]
    "", // [202]
    "", // [203]
    "", // [204]
    "", // [205]
    "", // [206]
    "", // [207]
    "", // [208]
    "", // [209]
    "", // [210]
    "", // [211]
    "", // [212]
    "", // [213]
    "", // [214]
    "", // [215]
    "", // [216]
    "", // [217]
    "", // [218]
    "OPEN_BRACKET", // [219]
    "BACK_SLASH", // [220]
    "CLOSE_BRACKET", // [221]
    "QUOTE", // [222]
    "", // [223]
    "META", // [224]
    "ALTGR", // [225]
    "", // [226]
    "WIN_ICO_HELP", // [227]
    "WIN_ICO_00", // [228]
    "", // [229]
    "WIN_ICO_CLEAR", // [230]
    "", // [231]
    "", // [232]
    "WIN_OEM_RESET", // [233]
    "WIN_OEM_JUMP", // [234]
    "WIN_OEM_PA1", // [235]
    "WIN_OEM_PA2", // [236]
    "WIN_OEM_PA3", // [237]
    "WIN_OEM_WSCTRL", // [238]
    "WIN_OEM_CUSEL", // [239]
    "WIN_OEM_ATTN", // [240]
    "WIN_OEM_FINISH", // [241]
    "WIN_OEM_COPY", // [242]
    "WIN_OEM_AUTO", // [243]
    "WIN_OEM_ENLW", // [244]
    "WIN_OEM_BACKTAB", // [245]
    "ATTN", // [246]
    "CRSEL", // [247]
    "EXSEL", // [248]
    "EREOF", // [249]
    "PLAY", // [250]
    "ZOOM", // [251]
    "", // [252]
    "PA1", // [253]
    "WIN_OEM_CLEAR", // [254]
    "" // [255]
  ];

function notify_message_click( message) {
    chrome.notifications.create("richnotifyMessage", {
        type: "list",
        title: "Extension Notifications",
        message: 'Element Selected',
        iconUrl: "Desert.svg", 
        items: [{ title: "EventType", message: message.eventType},
                { title: "Selector", message: message.selector}
                 ]
      }, function () {
            console.log("Notification message showed!")
      })
  }


  function notify_message_keypress( message) {
    chrome.notifications.create("richnotifyMessage", {
        type: "list",
        title: "Extension Notifications",
        message: 'Element Selected',
        iconUrl: "Desert.svg", 
        items: [{ title: "EventType", message: message.eventType},
                { title: "Selector", message: message.selector},
                { title: "Value", message: JSON.stringify(message.selectorValue)} ]
      }, function () {
            console.log("Notification message showed!")
      })
  }

  function notify_url( message) {
    chrome.notifications.create("richnotifyUrl", {
        type: "list",
        title: "Extension Notifications",
        message: 'URL',
        iconUrl: "Desert.svg", 
        items: [{ title: "url", message: message}]
      }, function () {
            console.log("Notification url showed!")
      })
  }



chrome.runtime.onMessage.addListener(function(message)
{
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    
   
    new_tab_url =tabs[0].url;
    if( new_tab_url != last_tab_url)
    {

        notify_url(new_tab_url);
        data.push({
            "eventType" : "go_to_url",
            "url"   : new_tab_url
        })
        last_tab_url = new_tab_url;
    }

    add_message();
    conToPup(data);
   
  })
    
    function add_message() {
        if(message.eventType == "mousedown")
            notify_message_click(message);
        else if(message.eventType == "keydown")
        {
            notify_message_keypress(message);
        }
        
      
        
        data.push(message);
        
        

    }

    function conToPup(data)
    {
    let str_middle="";
    const str_initial =`const puppeteer = require('puppeteer');\nconst sleep = require('sleep');\n(async () => {\nconst browser = await puppeteer.launch();\nconst page = await browser.newPage();\nconst navigationPromise = page.waitForNavigation();\nawait sleep.sleep(5);\n`;
    const str_final = `await browser.close()})\nawait sleep.sleep(3);\n`;
      
        
        data.forEach(function(element) {
            
            switch(element.eventType){
                
                case "go_to_url":
                str_middle = str_middle + `try {\nawait page.goto('${element.url}');\nawait sleep.sleep(3);\n}catch (error){\nconsole.log(error);\n}\n`
                console.log(str_middle, "str_middle");
                break;

                case "mousedown":
                str_middle = str_middle + ` await page.waitForSelector('${element.selector}');\nawait sleep.sleep(3);\nawait page.evaluate(()=>{document.querySelector('${element.selector}').click()});\nawait sleep.sleep(3);\n`
                break;

                case "keydown":
                    if(element.selectorValue == 13)
                    {
                        str_middle =str_middle + `await sleep.sleep(3);\nawait sleep.sleep(1);\nawait page.keyboard.press('Enter');\nawait sleep.sleep(3);\n`
                    }
                    else if(element.selectorValue == 40)
                    {
                        str_middle =str_middle + `await sleep.sleep(3);\nawait page.keyboard.press('ArrowDown');\nawait sleep.sleep(3);\n`
                    }
                    else if(element.selectorValue >=65 && element.selectorValue<=90)
                    {
                        str_middle =str_middle +  `await sleep.sleep(3);\nawait sleep.sleep(1);\nawait page.keyboard.down('${String.fromCharCode(element.selectorValue)}')();`;
                    }
                    break;

                   
                    
                }
            
                
            });
            
            console.log(str_initial +str_middle + str_final);
     
            }

})



 chrome.webRequest.onCompleted.addListener(
    function(details) {
            url_data.push({
                "url" : details.url
            })
  
    }, 
    {
        urls: ["<all_urls>"]
        
    },
    ["responseHeaders"])











