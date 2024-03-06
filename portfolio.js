//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}


// For Validation of Form 

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var isValid = true;

    // Validate name
    if (name == "") {
      document.getElementById("nameError").innerHTML = "Name is required";
      isValid = false;
    } else {
      document.getElementById("nameError").innerHTML = "";
    }

    // Validate email
    if (email == "") {
      document.getElementById("emailError").innerHTML = "Email is required";
      isValid = false;
    } else if (!validateEmail(email)) {
      document.getElementById("emailError").innerHTML = "Invalid email format";
      isValid = false;
    } else {
      document.getElementById("emailError").innerHTML = "";
    }


    // If message is empty
    if (message == "") {
      document.getElementById("messageError").innerHTML = "Message is required";
      isValid = false;
    } else {
      document.getElementById("messageError").innerHTML = "";
    }

   

    var badWords = ["lodu", "chutiyo", "chodu", "bsdk", "lund", "bkl", "mc", "chutiye", "jhathu", "chut"];
    var rudeWords = ["fuck", "fucking", "fuck you"]; // Words to handle differently
    
    var messageLower = message.toLowerCase();
    var isRude = false;
    
    for (var i = 0; i < badWords.length; i++) {
      if (messageLower.indexOf(badWords[i]) !== -1) {
        var typed = new Typed('#msgvalid', {
          strings: ['chal be ' + badWords[i] + ' 🖕🏻 Baap Se Pangga Nhi lete..! Kindy Write Something else..!'],
          typeSpeed: 50,
        });
        isValid = false;
        setTimeout(function () {
          document.getElementById("msgvalid").innerHTML = "";
        }, 8000);
        isRude = true;
        break;
      }
    }
    
    if (!isRude) {
      for (var j = 0; j < rudeWords.length; j++) {
        if (messageLower.indexOf(rudeWords[j]) !== -1) {
          // Handle differently
          var typed = new Typed('#msgvalid', {
            strings: ['Ohh! Seriously !! I will Fuck You 4 Times 🖕🏻🖕🏻🖕🏻🖕🏻'],
            typeSpeed: 50,
          });
          isValid = false;
          setTimeout(function () {
            document.getElementById("msgvalid").innerHTML = "";
          }, 7000);
          isRude = true;
          break; // No need to continue checking if a rude word is found
        }
      }
    }
    
    return isValid;

  }

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
