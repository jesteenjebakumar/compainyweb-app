let see='scale(1.5)';
let notsee='scale(0)';
let help=document.getElementById('helpers');
var messagebox=document.getElementById('messagebox');
var remove=document.getElementById('remove');
var message=document.getElementById('message');
let checked=false;

help.onclick=()=>{
    console.log("cliked");
   checked=true;
   if(checked==true){
    messagebox.style.display="flex"
    messagebox.style.opacity="1"; 
    console.log("checked");
    message.style.display="block"
    message.style.transform="scale(1.5)";
}
}


remove.onclick=()=>{
    let notseen= message.style.transform="scale(0)";
     
           messagebox.style.opacity=0;
   
           messagebox.style.display="none";
   }