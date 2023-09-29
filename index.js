let fullName;
let email;
let phoneNumber;
let dob;
let gender;

function fullNamechangeHandler(event) {   
    console.log("Event is:>" ,event.target.value); 
    


}
function emailchangeHandler(event) {   
    console.log("Event is:>" ,event.target.value);
    email = event.target.value;


}

function phoneNumberchangeHandler(event) {   
    console.log("Event is:>" ,event.target.value);
    phoneNumber = event.target.value;


}


function dobchangeHandler(event) {   
    console.log("Event is:>" ,event.target.value);
    dob = event.target.value;


}


function genderlchangeHandler(event) {   
    console.log("Event is:>" ,event.target.value);
    gender = event.target.value;


}

function onSubmitHandler(event){
    event.preventDefault();
    console.log({fullName,email,dob,gender,phoneNumber});

}
