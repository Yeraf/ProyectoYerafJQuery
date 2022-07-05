//Carousel
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';
  window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener('submit', function (event) {
              if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
              }
              form.classList.add('was-validated');
          }, false);
      });
  }, false);
})();


//ScrollReveal

window.sr = ScrollReveal();

sr.reveal('.navbar', { 
  duration: 2000,
  origin: 'bottom',
  distance: '-100px'
});

sr.reveal('.img-3', { 
  duration: 2000,
  origin: 'letf',
  distance: '-100px'
});

sr.reveal('.transition', { 
  duration: 2000,
  origin: 'right',
  distance: '100px'
});


sr.reveal('.logo', { 
  duration: 4000,
  rotate: {
    x: 1,
    y: 180
  }
});

//Mostrar y ocultar con JQuery
//$(".myForm").show(); // ocultar los elementos al iniciar

function ShowHideInfo () {

  let text = "";

  if ($('#myButton1').text() === "Ocultar Info") {
    $(".myForm1").hide();
    text = "Mostrar Info";
  }else{
    $(".myForm1").show();
    text = "Ocultar Info"
  }
  $("#myButton1").html(text);
}

function ShowHidediv () {

  let text = "";

  if ($('#myButton2').text() === "Ocultar Info"){
    $(".myForm2").hide();
    text = "Mostrar Info";
  }else{
    $(".myForm2").show();
    text = "Ocultar Info"
  } 
  $("#myButton2").html(text);
}

function ShowHide() {
  text = "";

  if($("#myButton3").text() === "Ocultar Info"){
    $(".myForm3").hide();
    text = "Mostrar Info";
  }else{
    $(".myForm3").show();
    text = "Ocultar Info"
  }
  $("#myButton3").html(text);
}

//Consultar un api y mostrar ventana

const URL = "https://randomuser.me/api";

  fetch(URL)
      .then(response => response.json())
      .then(data => {
        let modal = document.getElementById('modal-body') 
        modal.innerHTML =
         `
        <img class="img-random" src="${data.results[0].picture.large}" alt="team">
  
        <p>Email</p>
        <img class="icons-user email" src="icons/email.png" onclick="ShowHideemail" alt="" id="icons-user"><a href="" class="showEmail" id="showEmail"></a>
        <img class="icons-user" src="icons/facebook.png" alt="">
        <img class="icons-user" src="icons/instagram.png" alt="">
        <img class="icons-user" src="icons/right.png" alt=""></img>
        
        `;


        console.log(data)
    })
.catch(err => console.log(err))





/*

<p>${data.results[0].gender}</p>
        
        


*/