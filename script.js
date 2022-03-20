'use-strict';
const closeBtn = document.querySelectorAll(".plus");
const questionContainer = document.querySelectorAll(".info");
console.log(questionContainer);


// closeBtn.forEach(btn=>{
//     btn.addEventListener("click",()=>{
        
//         if(btn.innerHTML==='+'){
//             btn.innerHTML='x';
//             questionContainer.forEach(div=>{
//                 console.log(div);
//             })
//             console.log(index);
//         }
//         else{
//             btn.innerHTML = '+';
//         }

//     })
    
// })

for(let i=0;i<closeBtn.length;i++){
    closeBtn[i].addEventListener("click",()=>{
        if(closeBtn[i].innerHTML==='+'){
            closeBtn[i].innerHTML='x';
            questionContainer[i].classList.remove('hide-question');
           
           }
        else{
            closeBtn[i].innerHTML='+';
            questionContainer[i].classList.add('hide-question');
            
           
        }
        
    })
}


