var date = document.querySelector("#date");
var number = document.querySelector("#number");
var btnCheck = document.querySelector("#submit");
var outtext = document.querySelector("#outputMessage");

function getnumber(date){
    var sum = 0;
    var datestring = date.replaceAll('-',"")
    for (const iterator of datestring) {
        sum+=+iterator;
    }
    return sum;
}

function btnCheckHandler(){
    outtext.style.display="none";
    if(date.value !== "" && number.value !== ""){
        var birthNumberSum = getnumber(date.value)
        if(birthNumberSum%number.value === 0){
            outtext.style.display="block";
            outtext.innerHTML = number.value + " is your lucky number"
        }
        else{
            outtext.style.display="block";
            outtext.innerHTML = number.value + " is not your lucky number"
        }
    }
    else{
        outtext.style.display="block";
        outtext.innerHTML = "Both Fields are required"
    }
}

btnCheck.addEventListener("click",btnCheckHandler);