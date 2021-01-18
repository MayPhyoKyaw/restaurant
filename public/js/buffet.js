// function Order() {
var value = [];
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = 00;
    }
  }, 1000);
}

// function resetTimer(duration){
//   var timer = duration;
//   if (timer) {
//     clearInterval(timer);
//     timer = null;
//   }
// }

//To Do: Add Visibility toggle  
const inputs = document.querySelectorAll('.passcode-area input');
inputs[0].focus();
for (elem of inputs) {
  elem.addEventListener('input', function () {
    const value = this.value;
    const nextElement = this.nextElementSibling;
    if (value === '' || !nextElement) {
      return;
    }
    nextElement.focus();
  });
}
for (let elem of inputs) {
  elem.addEventListener('keydown', function (event) {
    //Right Arrow Key
    if (event.keyCode == 39) {
      this.nextElementSibling.focus();
    }
    //Left Arrow Key
    //Add Highlight
    if (event.keyCode == 37) {
      this.previousElementSibling.focus();
    }
    //Backspace Key
    if (event.keyCode == 8 && event.metaKey) {
      console.log('🐰🥚 FOUND!!! Cmd + Backspace = clear all');
      for (innerElem of inputs) {
        innerElem.value = '';
        // value = [];
      }
      value = [];
      inputs[0].focus();
    } else if (event.keyCode == 8) {
      if (elem.value === '') {
        this.previousElementSibling.focus();
        return;
        // value = [];
      }
      elem.value = '';
    }
  });
}

$(document).ready(function () {

  fetch('/menu.html/identification', { method: 'GET' })
    .then(function (response) {
      // console.log(response)
      if (response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(function (data) {
      // console.log(data)
      // console.log(data[0].password)
      data.forEach(id => {
        var identification = id.password.split('');
        for (elem of inputs) {
          elem.addEventListener('input', function () {
            value.push(this.value);
            console.log(value)
          })
        }
        $('#verify-reset').click(function () {
          // console.log(value[0])
          if (identification[0] === value[0]) {
            // console.log(true)
            if (identification[1] === value[1]) {
              // console.log(true)
              if (identification[2] === value[2]) {
                // console.log(true)
                if (identification[3] === value[3]) {
                  // console.log(true)
                  // resetTimer(30);
                  document.getElementById("choose-tb").style.display = "block";
                  document.getElementById("before-countdown").style.display = "block";
                  document.getElementById("countdown").style.display = "none";
                  document.getElementById("order-list").style.display = "none";
                } else {
                  console.log(false)
                }
              } else {
                console.log(false)
              }
            } else {
              console.log(false)
            }
          } else {
            console.log(false)
          }
          value = [];
          hideResetModal();
        })
      })

    })
    .catch(function (error) {
      console.log(error);
    });

  $('#before-countdown').on('click', function () {
    var serveTime = 60 * 30 + 3600,
      display = document.getElementById("countdown");
    startTimer(serveTime, display);

    var bIcon = document.getElementById("before-countdown");
    bIcon.style.display = "none";
    display.style.display = "block";
    // document.getElementById("order-list").style.display = "block";
    // document.getElementById("choose-tb").style.display = "none";
  })

  $('#choose').on('click', function () {
    var choose = document.getElementById("choose");
    var start = document.getElementById("before-countdown");
    choose.style.display = "none";
    start.style.display = "block";
    document.getElementById("input-number-mod").disabled = true;
    document.getElementById("option").disabled = true;
  })

  $('#reset-verification-btn').click(function (event) {
    showResetModal();
    event.stopPropagation();
    // console.log("hello")
  });
  $('#edit-verification-btn').click(function (event) {
    showEditModal();
    event.stopPropagation();
    // console.log("hello")
  });
  $('#resetModalClose').click(function () {
    hideResetModal();
  });
  $('#editModalClose').click(function () {
    hideEditModal();
  });

  // Do nothing when clicking on the modal content
  $('.modal-content').click(function (event) {
    event.stopPropagation();
  });

})

function showEditModal() {
  $('#edit-modal').fadeIn('slow');
  (function fun1() {
    $('.modal-content').css({ 'transform': 'translateY(-50px)' });
  })();
}

function hideEditModal() {
  $('#edit-modal').fadeOut('fast');
  (function fun2() {
    $('.modal-content').css({ 'transform': 'translateY(0px)' });
    const inputs = document.querySelectorAll('.passcode-area input');
    for (innerElem of inputs) {
      innerElem.value = '';
    }
  })();
  value = [];
}

function showResetModal() {
  $('#reset-modal').fadeIn('slow');
  (function fun3() {
    $('.modal-content').css({ 'transform': 'translateY(-50px)' });
  })();
}

function hideResetModal() {
  $('#reset-modal').fadeOut('fast');
  (function fun4() {
    $('.modal-content').css({ 'transform': 'translateY(0px)' });
    const inputs = document.querySelectorAll('.passcode-area input');
    for (innerElem of inputs) {
      innerElem.value = '';
    }
  })();
  value = [];
}

$(document).on("click", function () {
  //click outside of ".nav__dropdown" class itself and menu will be hidden
  hideEditModal();
  hideResetModal();
});