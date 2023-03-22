let input1 = document.getElementById("input1");
let button1 = document.getElementById("button1");
let h3 = document.getElementById("h44");
let expressions = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

button1.addEventListener("click", function(){
    if(expressions.test(input1.value)){
        input1.style.background = "green"
        h3.style.display = "none";
    }else{
        h3.style.display = "block";
        h3.style.color = "red";
        input1.style.borderColor = "red";
    }

})

let input2 = document.getElementById("second");
let button2 = document.getElementById("button2");
let h44 = document.querySelector(".none2");

button2.addEventListener("click", function(){
    if(expressions.test(input2.value)){
        input2.style.background = "green"
        h44.style.display = "none";
        input2.style.borderColor = "green";
    }else{
        h44.style.display = "block";
        input2.style.borderColor = "red";
    }

})
