const number=[0,1,2,3,4,5,6,7,8,9];
const lower=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const upper=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const special=['@','&','%','#','*','$'];

const btn=document.querySelector("button");
const passwordBox=document.querySelector(".password");
const h3=document.querySelector("h3");
const uppercase=document.querySelector(".uppercase");
const lowercase=document.querySelector(".lowercase");
const numbercase=document.querySelector(".number");
const specialcase=document.querySelector(".special");
const length=document.querySelector(".length");
length.value=8;
length.addEventListener("click",()=>{
    h3.firstElementChild.innerText=length.value; 
})

btn.addEventListener("click",()=>{
    let password="";
    const passwordLength=length.value;
    for(let i=1;i<=passwordLength;i++){
        const n=parseInt(Math.random()*4);
    if(n==0){
        if(numbercase.checked){
            const numberindex=parseInt(Math.random()*(number.length));
            const digit=number[numberindex];
            password+=digit;
        }
        else{
           i--;
        }
        
    }
    else if(n==1){
        if(lowercase.checked){
            const lowerindex=parseInt(Math.random()*(lower.length));
            const small=lower[lowerindex];
            password+=small;
        }else{
            i--;
        }
        
    }
    else if(n==2){
        if(uppercase.checked){
            const upperindex=parseInt(Math.random()*(upper.length));
             const capital=upper[upperindex];
            password+=capital;
        }else{
            i--;
        }
        
    }
    else{
        if(specialcase.checked){
            const specialindex=parseInt(Math.random()*(special.length));
        const char=special[specialindex];
        password+=char;
        }else{
            i--;
        }
        
    }
    }
    passwordBox.value=password;
})