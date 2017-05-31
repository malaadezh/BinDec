var getBin = document.getElementById("inp");
var resForm = document.getElementById("ans")
var ascii = document.getElementById("ascii")
var color = document.getElementById("color")
var hex = document.getElementById("hex")


function calc() {
    var bin = getBin.value;
    var binSize = (bin.length) - 1;
    var res = 0;
    var ordinalNum = 1;
    var oneCounter = 0;
    while ((binSize) >= 0) {
        if (bin[binSize] == 1) {
            res = res + ordinalNum;
            ++oneCounter;
        } else if (bin[binSize] > 1 || (isNaN(parseInt(bin[binSize])))) {
            res = "err";
            break;
        }
        --binSize;
        ordinalNum = ordinalNum * 2;
    }

    if (res == "err") {
        resForm.style.display = "block";
        resForm.style.color = "#ff1f1f";
        resForm.value = "This is not a binary code!";
        ascii.style.display = "none";
        hex.style.display = "none";
    } else if (bin == "" || bin == " ") {
        resForm.style.display = "none";
        ascii.style.display = "none";
        hex.style.display = "none";
    } else {
        resForm.style.display = "block";
        resForm.style.color = "#2f2f2f";
        resForm.value = "Decimal: " + res;
        ascii.style.display = "block";
        ascii.value = "Ascii: " + String.fromCharCode(res);
        hex.style.display = "block";
        hex.value = "Hex: " + decHex(res).join("");
    }
}

function decHex(dec) {
    var hexLetter = {
        10: "A",
        11: "B",
        12: "C",
        13: "D",
        14: "E",
        15: "F"
    };
    var hex = new Array;
    var rest = new Array;
    var cnt = 0;
    var k = 0;
    while (dec != dec % 16) {
        rest[cnt] = dec % 16;
        dec = parseInt(dec / 16);
        cnt++;
        rest[cnt] = dec;
    }
    for (var i = cnt; i >= 0; i--) {
        if (rest[i] > 9) {
            hex[k] = hexLetter[String(rest[i])];
        } else hex[k] = rest[i];
        k++;
    }

    return hex;
}
