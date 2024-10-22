const fname = document.querySelector('.fname');
const email = document.querySelector('.semail');
const num = document.querySelector('.phno');
const num1 = document.querySelector('.age');
const pass = document.querySelector('.supassword');
const pass1 = document.querySelector('.supassword1');
const loginbut = document.querySelector('.loginbtn');

function length_not_match(){
    //alert box shows following message
    alert("Full Name must not be less than 5 characters.");
}

function invalid_num(){
    //alert box shows following message
    alert("Invalid phone number.");
}

function short_num(){
    //alert box shows following message
    alert("Enter 10 digit phone number.");
}

function invalid_age(){
    //alert box shows following message
    alert("Age cannot exceed 100.");
}

function same_pass_as_name(){
    //alert box shows following message
    alert("Password cannot be same as name.")
}

function invalid_pass(){
    //alert box shows following message
    alert("Invalid Password.");
}

function less_char(){
    //alert box shows following message
    alert("Password must be 8 or more characters strong.")
}

function pass_not_match(){
    //alert box shows following message
    alert("Password not match.");
}

loginbut.addEventListener('click', function(event){

    //full is converted to array from string seperated by whitespaces
    const fname_split = fname.value.split(" ");

    //Full name length less than 5 characters
    if(fname.value.length < 5){
        length_not_match();
        return;
    }

    //phone number is 123456789 which is invalid
    if(num.value == 123456789){
        invalid_num();     
        return;
    }
        
    //phone number length is less than 10 digits
    if(num.value.length < 10){
        short_num();   
        return;
    } 
        
    //age is greater than 100
    if(num1.value > 100){
        invalid_age();
        return;
    }

    //checks if password is same as your name?
    if(pass.value === fname_split[0]){        
        same_pass_as_name();
        return;
    }

    //check is password is the word password
    if(pass.value === "password"){
        invalid_pass();
        return;
    }

    //password length is less than 8 characters
    if(pass.value.length < 8){
        less_char();
        return;
    }

    //check if password is strong or not and suggest to include special character and numbers.
    if(!pass.value.includes("@" || "_" || "$" || "!" || "0" || "9" || "8" || "7" || "6" || "5" || "4" || "3" || "2" || "1")){
        alert("Password is not strong, use special characters and numbers.");
        return;
    }

    //check if password is same as confirm password
    if(pass.value !== pass1.value){
        pass_not_match();
        return;
    }

    window.href.location = "login.html";

});
    

