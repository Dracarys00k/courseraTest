(function () {

    var names = ["king", "John", "dennis", "jhonny", "saun", "dost", "lobster", "misty", "kela", "doreamon"];
    
    for (var i = 0; i < names.length; i++) {
    
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } 
      else {
        helloSpeaker.speak(names[i]);
      }
    }
    
    })();