// function Order() {
var value = [];
var timeLeft;
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  timeLeft = setInterval(function () {
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

const { to, set, timeline, registerPlugin } = gsap

registerPlugin(MorphSVGPlugin)

document.querySelectorAll('.password-field').forEach(field => {
    let input = field.querySelectorAll('input'),
        button = field.querySelector('button'),
        time = timeline({
            paused: true
        }).to(field.querySelector('svg .top'), {
            morphSVG: 'M2 10.5C2 10.5 6.43686 15.5 10.5 15.5C14.5631 15.5 19 10.5 19 10.5',
            duration: .2
        }).to(field, {
            keyframes: [{
                '--eye-s': 0,
                '--eye-background': 1,
                duration: .2
            }, {
                '--eye-offset': '0px',
                duration: .15
            }]
        }, 0)
    button.addEventListener('click', e => {
        if(field.classList.contains('show')) {
            field.classList.remove('show')
            time.reverse(0)
            return
        }
        field.classList.add('show')
        time.play(0)
    })
    field.addEventListener('pointermove', e => {
        const rect = button.getBoundingClientRect()
        const fullWidth = rect.width
        const halfWidth = fullWidth / 2
        const fullHeight = rect.height
        const halfHeight = fullHeight / 2
        let x = e.clientX - rect.left - halfWidth,
            y = e.clientY - rect.top - halfHeight

        field.style.setProperty('--eye-x', (x < -halfWidth ? -halfWidth : x > fullWidth ? fullWidth : x) / 15 + 'px')
        field.style.setProperty('--eye-y', (y < -halfHeight ? -halfHeight : y > fullHeight ? fullHeight : y) / 25 + 'px')
    })
    field.addEventListener('pointerleave', e => {
        field.style.setProperty('--eye-x', '0px')
        field.style.setProperty('--eye-y', '0px')
    })
    input.forEach(single => 
      single.addEventListener('input', 
        e => input.forEach(
          i => 
          // {
            i.value = e.target.value,
          //   console.log(i.value)
          // }
        )
      )
    )
    // console.log(input);
})
var msgForReset = document.getElementById('Rmsg');
var warningForReset = document.getElementById('Rpwd-warning');
var focusInputForReset = document.getElementById('focusR');

var msgForEdit = document.getElementById('Emsg');
var warningForEdit = document.getElementById('Epwd-warning');
var focusInputForEdit = document.getElementById('focusE');

$(document).ready(function () {

  var serveTime = 60 * 30 + 3600;
  var choose = document.getElementById("choose");
  var start = document.getElementById("before-countdown");
  var display = document.getElementById("countdown");
  $('#before-countdown').on('click', function () {
    startTimer(serveTime, display);
    start.style.display = "none";
    display.style.display = "block";
    document.getElementById("order-list").style.display = "block";
    // document.getElementById("choose-tb").style.display = "none";
  })

  $('#choose').on('click', function () {
    choose.style.display = "none";
    start.style.display = "block";  
    document.getElementById("input-number-mod").disabled = true;
    document.getElementById("option").disabled = true;
  })

  fetch('/menu.html/identification', { method: 'GET' })
  .then(function (response) {
    // console.log(response)
    if (response.ok) return response.json();
    throw new Error('Request failed.');
  })
  .then(function (data) {
    // console.log(serveTime);
    // console.log(data)
    // console.log(data[0].password)
    data.forEach(id => {
      $('#verify-reset').click(function(){
        console.log($('.reset-pwd').val(), id.password)
        var pwdForReset = $('.reset-pwd').val();
        if(id.password === pwdForReset){
          hideResetModal();
          clearInterval(timeLeft);
          choose.style.display = "inline-block";
          display.style.display = "none";
        }else{
          msgForReset.style.display = "none";
          warningForReset.style.display = "block";
          focusInputForReset.focus();
          focusInputForReset.value = '';
        }
      })
      $('#verify-edit').click(function(){
        console.log($('.edit-pwd').val(), id.password)
        var pwdForEdit = $('.edit-pwd').val();
        if(id.password === pwdForEdit){
          hideEditModal();

        }else{
          msgForEdit.style.display = "none";
          warningForEdit.style.display = "block";
          focusInputForEdit.focus();
          focusInputForEdit.value = '';
        }
      })
    })

  })
  .catch(function (error) {
    console.log(error);
  });

  $('#reset-verification-btn').click(function(event){
    showResetModal();
    focusInputForReset.focus();
    event.stopPropagation(); 
    // console.log("hello")
  });
  $('#edit-verification-btn').click(function(event){
    showEditModal();
    focusInputForEdit.focus();
    event.stopPropagation(); 
    // console.log("hello")
	});
	$('#resetModalClose').click(function(){
    hideResetModal();
  });
  $('#editModalClose').click(function(){
		hideEditModal();
	});
	
	// Do nothing when clicking on the modal content
	$('.modal-content').click(function(event){
       event.stopPropagation(); 
  });
  
})

function showEditModal(){
	$('#edit-modal').fadeIn('slow');
		(function fun1(){
			$('.modal-content').css({'transform':'translateY(-50px)'});
    })();
    msgForEdit.style.display = "block";
    warningForEdit.style.display = "none";
}

function hideEditModal(){
	$('#edit-modal').fadeOut('fast');
		(function fun2(){
      $('.modal-content').css({ 'transform':'translateY(0px)' });
      const inputs = document.querySelectorAll('.passcode-area input');
    })();
    focusInputForEdit.value = '';
}

function showResetModal(){
	$('#reset-modal').fadeIn('slow');
		(function fun3(){
			$('.modal-content').css({'transform':'translateY(-50px)'});
    })();
    msgForReset.style.display = "block";
    warningForReset.style.display = "none";
}

function hideResetModal(){
	$('#reset-modal').fadeOut('fast');
		(function fun4(){
      $('.modal-content').css({ 'transform':'translateY(0px)' });
      const inputs = document.querySelectorAll('.passcode-area input');
    })();
    focusInputForReset.value = '';
}

$(document).on("click", function () {
    //click outside of ".nav__dropdown" class itself and menu will be hidden
  hideEditModal();
  hideResetModal();
});