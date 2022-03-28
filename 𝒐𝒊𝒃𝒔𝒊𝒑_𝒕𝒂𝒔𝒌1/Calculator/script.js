function updateTextbox(value)
{
    document.getElementById("screen").value += value;
}

function result()
{
    
    try {
        document.getElementById("screen").value = eval(document.getElementById("screen").value);      
        } 
     catch ( e ) 
     {
      alert("Please enter a valid expression");
     }  
}

function reset()
{
    document.getElementById("screen").value = '';
} 