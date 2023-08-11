'use strict';
let input = document.querySelector(".guess").value

if (!input){
    document.querySelector(".check").addEventListener("click", function(){
        
        document.querySelector(".message").textContent = "⛔ No number!"
    })
}