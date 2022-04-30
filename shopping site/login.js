                                 
                                      var name_p= localStorage.getItem('name',sign_name);
  var password= localStorage.getItem('password',sign_password);
  var login_name=document.getElementById('name-login');
  var login_password=document.getElementById('password-login');
  var action=document.getElementById('out');
  action.addEventListener('click',()=>{

      if(login_name.value==name_p){
         
    if(login_password.value==password){
    window.location.href="intro.html"
    }
    else{
    
        alert('password is incorrect')
    }
      }
      else{
         
            alert('name is incorrect')
        
    }  
  })