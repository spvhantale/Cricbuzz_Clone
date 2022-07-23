let EMail = document.getElementById('recieve_email').value;



let email =JSON.parse(localStorage.getItem('userEmail'));


recieve_email.innerText = email.email ;


// console.log(email[0].email);




let arr = [];



function User_detail(Name,Surname,Password){
   
    this.name = Name;
    this.surname = Surname;
    this.pass = Password;

} 





function submitDetails(e){
   e.preventDefault(); 
   let form = document.getElementById("user_formm");
    let name = form.Name.value;
    let surname = form.Surname.value;
    let pass = form.Password.value;

      let p = new User_detail( name, surname, pass);
      arr.push(p);
      localStorage.setItem('user',JSON.stringify(arr));

      
console.log(arr);

}


function  validation(e){

    if(document.getElementById("Name").value == '' && document.getElementById("Surname").value.length == '' && document.getElementById("Password").value.length == '' )
{
    alert("All Field Required")
}else{
    submitDetails(event);
    alert("Successfully signup")
    window.location.href="mainnavbar.html"
}

}


function myFunction() {
    var x = document.getElementById("Password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


