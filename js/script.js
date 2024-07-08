let functionButtons = document.querySelectorAll(".function")

// let result = 0
let processDiv = document.querySelector(".process")
let resultDiv = document.querySelector(".finalAnswer")
resultDiv.innerText = 0

let processString = ""

for (let i = 0; i < functionButtons.length; i++) {
    let clickedButton = functionButtons[i]
    
    clickedButton.addEventListener('click', () => {
        let operator = clickedButton.innerText


        if(isNaN(parseInt(operator)) || operator =="÷" || operator == "+" || operator == "X" || operator == "-"){//if 'operator' variable is  X,+, - etc
            
            if(operator == "X"){
                operator = "*"
                processString += operator
                processDiv.innerText = processString

            }

            else if(operator == "÷"){
                operator = "/"
                processString += operator
                processDiv.innerText = processString

            }

            else if(operator == "remove") {
                operator = "-"
                processString += operator
                processDiv.innerText = processString
            }

            else if(operator == "CE"||operator == "C"){
                resultDecider(operator)
            }

            else if(operator == "backspace"){
                processString = processString.slice(0, -1)
                processDiv.innerText = processString

            }

            else if (operator != "=") {
                processString += operator
                processDiv.innerText = processString
                resultDecider(operator)
            }
            else if (operator == "=") {
                resultDecider(operator)
            }
            // resultDecider(operator)
        }
        else if(!isNaN(parseInt(operator))){
            
            processString += operator
            if (resultDiv.innerText == 0) {
                resultDiv.innerText = ""
            }
            resultDiv.innerText += operator

            processDiv.innerText = processString
        }
    })
}

function resultDecider(operator) {
    
    if (operator == "C" || operator == "CE") {
        processString = ""
        processDiv.innerText = ""
        resultDiv.innerText = 0
    }
    else if (operator == "=") {
        let ans = math.evaluate(processString)
        
        resultDiv.innerText = ans
    }   
}

// resultDecider("X",0 ,2,3,3,3) 