    function getGreeting(hour) {
        var greetingsLanguage = {
          "en": {
            morning: "Good morning!",
            afternoon: "Good afternoon!",
            evening: "Good evening!",
            night: "Good night!",
            default: "Hello!"
          },
          "hi": {
            morning: "शुभ प्रभात!",
            afternoon: "गुड आफ्टरनून!",
            evening: "सुसंध्या!",
            night: "शुभ रात्रि!",
            default: "हैलो!"
          },
          "zh": {
            morning: "早上好!",
            afternoon: "下午好!",
            evening: "晚上好!",
            night: "晚安!",
            default: "你好!"
          },
          "es": {
            morning: "¡Buenos días!",
            afternoon: "¡Buenas tardes!",
            evening: "¡Buena noches!",
            night: "¡Buena noches!",
            default: "¡Hola!"
          },
          "de": {
            morning: "Guten Morgen!",
            afternoon: "Guten Tag!",
            evening: "Guten Abend!",
            night: "Gute Nacht!",
            default: "Hallo!"     
          }
        }

        var greetings = {
          morning: "Good morning",
          afternoon: "Good afternoon",
          evening: "Good evening",
          night: "Good night",
          default: "Hello"
        };

        var userLang = (navigator.language || navigator.userLanguage); 
        userLang = userLang.substring(0,2);

        var userGreetings = greetingsLanguage[userLang] || greetings;

        if(hour < 12) {
          return userGreetings.morning;
        } else if(hour < 17) {
          return userGreetings.afternoon;
        } else if(hour < 20) {
          return userGreetings.evening;
        } else if (hour < 24) {
          return userGreetings.night;
        }

        return userGreetings.default;
      }

      document.getElementById("greeting").innerHTML = getGreeting(new Date().getHours());
      
