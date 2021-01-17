// function Order() {
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

$(document).ready(function () {

  fetch('/menu.html/identification', { method: 'GET' })
  .then(function (response) {
    console.log(response)
    if (response.ok) return response.json();
    throw new Error('Request failed.');
  })
  .then(function (data) {
    console.log(data)
    // data.forEach(dish => {})

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
    document.getElementById("order-list").style.display = "block";
    document.getElementById("choose-tb").style.display = "none";
  })

  $('#choose').on('click', function () {
    var choose = document.getElementById("choose");
    var start = document.getElementById("before-countdown");
    choose.style.display = "none";
    start.style.display = "block";  
    document.getElementById("input-number-mod").disabled = true;
    document.getElementById("option").disabled = true;
  })

  $('#reset-verification-btn').click(function(event){
		showModal();
    event.stopPropagation(); 
    console.log("hello")
  });
  $('#edit-verification-btn').click(function(event){
		showModal();
    event.stopPropagation(); 
    console.log("hello")
	});
	$('#modalClose').click(function(){
		hideModal();
	});
	
	// Do nothing when clicking on the modal content
	$('.modal-content').click(function(event){
       event.stopPropagation(); 
  });
  
})

function showModal(){
	$('#verification').fadeIn('slow');
		(function fun(){
			$('.modal-content').css({'transform':'translateY(-50px)'});
		})();
}

function hideModal(){
	$('#verification').fadeOut('fast');
		(function fun2(){
      $('.modal-content').css({ 'transform':'translateY(0px)' });
      const inputs = document.querySelectorAll('.passcode-area input');
      for (innerElem of inputs) {
        innerElem.value = '';
      }
		})();
}

$(document).on("click", function () {
    //click outside of ".nav__dropdown" class itself and menu will be hidden
  hideModal();
});

//To Do: Add Visibility toggle  
const inputs = document.querySelectorAll('.passcode-area input');
inputs[0].focus();
for (elem of inputs) {
  elem.addEventListener('input', function() {
    const value = this.value;
    const nextElement = this.nextElementSibling;
    if (value === '' || !nextElement) {
      return;
    }
    nextElement.focus();
  });
}
for (let elem of inputs) {
  elem.addEventListener('keydown', function(event) {
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
      }
      inputs[0].focus();
    } else if (event.keyCode == 8) {
      if(elem.value === '') {
        this.previousElementSibling.focus();
        return;
      }
      elem.value = '';
    }
  });
}
