var getBin = document.getElementById("inp");
var resForm = document.getElementById("ans")


function calc(bin) {
    var bin = getBin.value;
    var binSize = (bin.length)-1;
    var res=0;
    var ordinalNum = 1;
    var oneCounter = 0;
    while((binSize)>=0) {
        if(bin[binSize]==1){
           res+=ordinalNum;
            oneCounter++;
        }
        
        else if(bin[binSize]>1 || (isNaN(parseInt(bin[binSize])))) {
            res = "err";
            break;
        }
        binSize--;
        ordinalNum*=2;
    }
    
    if(res == "err") {
        resForm.style.display = "block";
        resForm.style.color = "#ff1f1f";
        resForm.value = "This is not a binary code!";
    }
    
    else if(bin=="") {
        resForm.style.display = "none";
    }
    
    else {
        resForm.style.display = "block";
        resForm.style.color = "#2f2f2f";
        resForm.value = "Your decimal number is: " + res;
    }
}