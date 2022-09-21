const input = document.querySelector("#input-box")
const resultElem = document.querySelector("#result")
console.log(input);
console.log(resultElem);

input.addEventListener("keydown", (e) => {
    if(e.keyCode == 13) {
        resultElem.innerHTML = areBracketsBalanced(input.value);
        resultElem.style.backgroundColor = areBracketsBalanced(input.value) ? "green" : "red";
    }
})

function areBracketsBalanced(y)
{
    let result = [];
  
    for(let i = 0; i < y.length; i++)
    {
        let x = y[i];
  
        if (x == '(' || x == '[' || x == '{')
        {
            result.push(x);
            continue;
        }
        if (result.length == 0)
            return false;
              
        let check;
        
        switch (x){
        case ')':
            check = result.pop();
            if (check == '{' || check == '[')
                return false;
            break;
  
        case '}':
            check = result.pop();
            if (check == '(' || check == '[')
                return false;
            break;
  
        case ']':
            check = result.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
    return (result.length == 0);
}