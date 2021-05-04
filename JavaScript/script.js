var results = document.getElementById('results');
var content = document.getElementsByClassName('content');
operand1 ="";
operator = null;
operand2 ="";
for(var i=0;i<content.length;i++){
    content[i].addEventListener('click',function(){
        console.log(this)
        var value = this.getAttribute('data-value');
        console.log(value);
        if(value =="+"){
            operand1 = parseFloat(results.innerText);
            operator = "+";
            results.innerText = "";
        }
        else if(value =="-"){
            operand1 = parseFloat(results.innerText);
            operator = "-";
            results.innerText = "";
        }
        else if(value =="/"){
            operand1 = parseFloat(results.innerText);
            operator = "/";
            results.innerText = "";
        }
        else if(value =="*"){
            operand1 = parseFloat(results.innerText);
            operator = "*";
            results.innerText = "";
        }
        else if(value =="%"){
            operand1 = parseFloat(results.innerText);
            operator = "%";
            results.innerText = "";
        }
        else if(value =="AC"){
            results.innerText = "";
            operand1 ="";
            operator=null;
            operand2 = "";
        }
        else if(value == "="){
            operand2 = parseFloat(results.innerText);
            results.innerText = eval(operand1+""+operator+""+operand2);
        }
        else{
            results.innerText +=value;
        }
    });
}