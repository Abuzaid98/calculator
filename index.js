let input = document.querySelector(".input")
let numberButtons = document.querySelectorAll(".btn");
let operatorButtons = document.querySelectorAll(".operator")
let clearButton = document.querySelector(".clear")
let deleteButton = document.querySelector(".delete")
let equalButton = document.querySelector(".equal")
let dotButton = document.querySelector(".dot")


numberButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        input.value += this.innerHTML
    })
})


operatorButtons.forEach(function (operator) {
    operator.addEventListener("click", function () {

        function isOperator(char) {
            let operators = ['+', '-', '*', '/']; // List of operators
            return operators.includes(char);
        }

        let lastChar = input.value[input.value.length - 1];

        if (isOperator(lastChar)) {
            input.value = input.value.slice(0, -1);
        }

        input.value += this.innerHTML;
    });
});



dotButton.addEventListener("click", function () {
    function isDot(char) {
        return char === "."
    }
    let lastChar = input.value[input.value.length - 1];

    if (isDot(lastChar)) {
        input.value = input.value.slice(0, -1);
    }
    input.value += this.innerHTML;
});



clearButton.addEventListener("click", function () {
    input.value = ""
}) 
 

 
deleteButton.addEventListener("click", function () {
    input.value = input.value.slice(0, -1)
})



equalButton.addEventListener("click", function () {
    let expression = input.value;
    let result = eval(expression);

    // input.value = result ;
    if (isNaN(result)) {
        document.querySelector("span").innerHTML = "Please Enter Valid Number"
        console.log("hello");
    } else {
        input.value = result.toFixed(result % 1 === 0 ? 0 : 4);
    }
    // if(Number.isInteger(result)){
    //     input.value = result ;
    // }
    // else{
    //     input.value = (result).toFixed(4);
    // }
})
