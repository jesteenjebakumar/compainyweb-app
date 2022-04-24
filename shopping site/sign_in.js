var sign_up_btn=document.getElementById('sign-up-btn');
var sign_name=document.getElementById('name-sign-up');
var sign_password=document.getElementById('password-sign-up');
var sign_password_confirm=document.getElementById('password-sign-up-confirm');

sign_up_btn.addEventListener('click',()=>{
    if(sign_name.value=="" && sign_name.value==null){
        alert('please enter the form')
        
    }
  
       
        console.log(sign_name.value);
       
    
        if(sign_password.value==""  && sign_password.value==null){
            console.log('please fill out the form');
    }
    console.log(sign_password.value);
    console.log(sign_name.value);
    if(sign_password_confirm.value=="" && sign_password_confirm.value==null){
        console.log('please fill out the form');

    }
    console.log(sign_password_confirm.value);
    if(sign_password.value==sign_password_confirm.value){
console.log("correct");
if(name_p==null && name_p==""){


 
}
if(name_p==sign_name.value){
    alert('you have the account alread')
}
else{

    localStorage.setItem('name',sign_name.value);
    localStorage.setItem('password',sign_password.value);
    window.location.href="loginpage.html";
}


    }
    else{

        alert('enter the correct password in password confirm box ')
    }
})