
const usernameEle = document.querySelector("#username");
const emailEle = document.querySelector("#email");
const passwordEle = document.querySelector("#password");
const phoneNumberEle = document.querySelector("#phoneNumber");

const submitBtnEle = document.querySelector("#submit");

// submitBtnEle.addEventListener("click",()=>{
//     const username = usernameEle.value;
//     const email = emailEle.value;
//     const password = passwordEle.value;
//     const phoneNumber = phoneNumberEle.value;
//     sendData(username,email,password,phoneNumber);
// })

// async function sendData(username,email,password,phoneNumber){
//     const data = {
//         "username" : username,
//         "email" : email,
//         "password" : password,
//         "phoneNumber" : phoneNumber
//     }
//     const response = await fetch("http://localhost:8000/signup",{
//         method : "POST",
//         body : JSON.stringify(data)
//     });
//     return response.json();
// };
