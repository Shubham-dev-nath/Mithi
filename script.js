const myFunction = () => {
  document.getElementById("first").style.display = 'block';
  document.getElementById("second").style.display = 'none'
  document.getElementById("third").style.display = 'none'
  document.getElementById("fourth").style.display = 'none'
  document.getElementById("fifth").style.display = 'none'
  document.getElementById("sixth").style.display = 'none'
  document.getElementById("seventh").style.display = 'none'
}

const myFunction2 = () => {
  document.getElementById("second").style.display = 'block'
  document.getElementById("first").style.display = 'none'
  document.getElementById("third").style.display = 'none'
  document.getElementById("fourth").style.display = 'none'
  document.getElementById("fifth").style.display = 'none'
  document.getElementById("sixth").style.display = 'none'
  document.getElementById("seventh").style.display = 'none'
}

const myFunction3 = () => {
  document.getElementById("third").style.display = 'block'
  document.getElementById("first").style.display = 'none'
  document.getElementById("second").style.display = 'none'
  document.getElementById("fourth").style.display = 'none'
  document.getElementById("fifth").style.display = 'none'
  document.getElementById("sixth").style.display = 'none'
  document.getElementById("seventh").style.display = 'none'
}
const myFunction4 = () => {
  document.getElementById("fourth").style.display = 'block'
  document.getElementById("third").style.display = 'none'
  document.getElementById("first").style.display = 'none'
  document.getElementById("second").style.display = 'none'
  document.getElementById("fifth").style.display = 'none'
  document.getElementById("sixth").style.display = 'none'
  document.getElementById("seventh").style.display = 'none'
}
const myFunction5 = () => {
  document.getElementById("fifth").style.display = 'block'
  document.getElementById("fourth").style.display = 'none'
  document.getElementById("third").style.display = 'none'
  document.getElementById("first").style.display = 'none'
  document.getElementById("second").style.display = 'none'
  document.getElementById("sixth").style.display = 'none'
  document.getElementById("seventh").style.display = 'none'
}
const myFunction6 = () => {
  document.getElementById("sixth").style.display = 'block'
  document.getElementById("fourth").style.display = 'none'
  document.getElementById("third").style.display = 'none'
  document.getElementById("first").style.display = 'none'
  document.getElementById("second").style.display = 'none'
  document.getElementById("fifth").style.display = 'none'
  document.getElementById("seventh").style.display = 'none'
}
const myFunction7 = () => {
  document.getElementById("seventh").style.display = 'block'
  document.getElementById("first").style.display = 'none'
  document.getElementById("second").style.display = 'none'
  document.getElementById("third").style.display = 'none'
  document.getElementById("fourth").style.display = 'none'
  document.getElementById("fifth").style.display = 'none'
  document.getElementById("sixth").style.display = 'none'

}


function myFunctiona() {
  document.getElementById("line1-myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.line1-dropbtn')) {
    var dropdowns = document.getElementsByClassName("line1-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function myFunctionb() {
  document.getElementById("l1-myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.l1-dropbtn')) {
    var dropdowns = document.getElementsByClassName("l1-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function myFunctionc() {
  document.getElementById("l2-myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.l2-dropbtn')) {
    var dropdowns = document.getElementsByClassName("l2-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

burger = document.querySelector('.burger')
navbar = document.querySelector('.nav-inner')
navlist = document.querySelector('.inner-col2')
topnav = document.querySelector('.topnav')


burger.addEventListener('click' , ()=>{
  navlist.classList.toggle('v-class');
  topnav.classList.toggle('h-nab');
  
  
})