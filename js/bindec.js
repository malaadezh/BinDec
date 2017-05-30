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
        
        else if(bin[binSize]>1) {
            res = "This is not a binary code!";
            break;
        }
        binSize--;
        ordinalNum*=2;
    }
    resForm.style.display = "block";
    resForm.value = "Your decimal number is: " + res;
    if(bin=="") {
        resForm.style.display = "none";
    }
}