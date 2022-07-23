let arr = [];

function User_email(email) {

     this.email= email;
    
  }

  let form = document.getElementById("user-form");
function submitProduct() {
  let form = document.getElementById("user-form");
  let email = form.email.value;
  console.log(email)

  let p = new User_email(email);
  arr=p;
  localStorage.setItem('userEmail', JSON.stringify(arr));
window.location.href="signup.html";
}

let s=JSON.parse(localStorage.getItem('userEmail'));
console.log(s);
function validation() {
  if (document.getElementById("email").value == "") {
    alert("Email Required")
  } 

 else if(document.getElementById("email").value==s.email){
  console.log("Yes");
  window.location.href='./home.html';
  }
  else {
    submitProduct();
  }
}