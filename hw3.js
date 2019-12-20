var resultel = document.getElementById("result");
var length = document.getElementById("length");
var uppercaseel = document.getElementById("uppercase");
var lowercaseel = document.getElementById("lowercase");
var numberel = document.getElementById("number");
var symbolel = document.getElementById("symbol");
var generate = document.getElementById("generate");
var clipboard = document.getElementById("clipboard");
let randomfunc = {
    lower: getrandomlower,
    upper: getrandomupper,
    number: getrandomnumber,
    symbol: getrandomsymbol,
};
generate.addEventListener("click", () => {
    const length = +length.value;
    let haslower = lowercaseel.checked;
    let hasupper = uppercaseel.checked;
    let hasnumber = numberel.checked;
    let hassymbol = symbolel.checked;
    resultel.innerText = generatepassword(haslower, hasnumber, hassymbol, hasupper);
});
function generatepassword(lower, upper, symbol, number, length) {
    let generatepassword = "";
    let typecount = lower + upper + number + symbol;
    console.log("typecount", typecount);
    var typearr = [{lower}, {upper}, {number},{ symbol}].filter(item => Object.value(item)[0]);
    
};
clipboard.addEventListener("click", () => {
    var textarea = document.createElement("textarea");
    var password = resultel.innerText;
    if(!password) {
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("password copy to the clipboard")
});

function getrandomlower() {
    var lower = a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z, ;
    return lower[Math.floor(Math.random()*lower.length)];
console.log(getrandomlower);
function getrandomupper() {
    var upper = A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z, ;
    return upper[Math.floor(Math.random()*upper.length)];
};
console.log(getrandomupper);
function getrandomnumber() {
    var number = "0,1,2,3,4,5,6,7,8,9";
    return number[Math.floor(Math.random()*10)];
};
console.log(getrandomnumber);
function getrandomsymbol() {
    var symbol = " !'()*+,-./:;<=>?@[\]^_`{|}~#$%&'";
    return symbol[Math.floor(Math.random()*symbol.length)];
};
console.log(getrandomsymbol)}
