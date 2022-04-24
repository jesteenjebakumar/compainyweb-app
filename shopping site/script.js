let triger=document.getElementById('triger');
let phone=document.getElementById('phone');
let check=0;
let svg=document.querySelector('svg')
phone.style.height=0;






triger.onclick=()=>{
    console.log("click");
    if(!check){
         phone.style.height="100%";
        console.log("cliked");
        svg.classList.remove('animate-pulse');
        check=1;
            }
            else{
         phone.style.height=0;
        console.log("unclicked");
        check=0;
            }
};
