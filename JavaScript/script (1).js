var elements = window.document.getElementsByClassName("elements");
var results = window.document.getElementById("results")
var operand1=0;
var operand2=null;
var operator=null;
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value= this.getAttribute('data-value');
        if( value=="+"){
            operator="+";
            operand1=parseFloat(results.textContent);
        }
        if( value=="="){
            operand2=parseFloat(results.textContent);
        }
        else{
            results +=value
        }
    })
};