let arr = [];

function User_email(email) {

  this.email = email;

}

function submitProduct(e) {
  e.preventDefault();
  let form = document.getElementById("user-form");
  let email = form.email.value;
  console.log(email)

  let p = new User_email(email);
  arr.push(p);
  localStorage.setItem('userEmail', JSON.stringify(arr));
  console.log(arr);
  window.location.href = 'signup.html'

}


function validation(e) {

  if (document.getElementById("email").value == '') {
    alert("Email Required")
  } 
 else if(localStorage.getItem('UserEmail') === value('email')){
  window.location.href='mainnavbar.html';
  }
  else {
    submitProduct(event);
  }
}