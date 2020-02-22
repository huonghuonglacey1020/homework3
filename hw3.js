var uppercaseel = document.getElementById("uppercase");
var lowercaseel = document.getElementById("lowercase");
var numberel = document.getElementById("number");
var symbolel = document.getElementById("symbol");
var generatel = document.getElementById("generate");
var clipboard = document.getElementById("clipboard");
let randomfunc = {
    lower: getrandomlower,
    upper: getrandomupper,
    number: getrandomnumber,
    symbol: getrandomsymbol,
};
generatel.addEventListener("click", () => {
    const length = +lengthel.value;
    let haslower = lowercaseel.checked;
    let hasupper = uppercaseel.checked;
    let hasnumber = numberel.checked;
    let hassymbol = symbolel.checked;
    resultel.innerText = generatepassword(haslower, hasnumber, hassymbol, hasupper);
});
function generatepassword(lower, upper, symbol, number, ) {
    let generatepassword = "";
    let typecount = lower + upper + number + symbol;
    console.log("typecount ", typecount);
    var typearr = [{lower}, {upper}, {number},{ symbol}].filter(
        item => Object.value(item)[0]);
    console.log("typearr", typearr);
};
    for(let i = 0; i < length; i+= typecount){
        typearr.forEach(type => {
            const funcname = Object.keys(type)[0];
            generatepassword +=
            console.log('funcname', funcname);
            generatepassword += randomfunc[funcname]();
        });

    console.log(generatepassword);
let finalpassword = generatepassword.slice(0, length);
return finalpassword;
    };
clipboard.addEventListener("click", () => {
    var textarea = document.createElement("textarea");
    var password = resultel.innerText;
    if(!generatepassword) {
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("clipboard");
    textarea.remove();
    alert("password copy to the clipboard")
});

function getrandomlower() {
    var lower = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z," ;
    return lower[Math.floor(Math.random()*lower.length)];
console.log(getrandomlower);
function getrandomupper() {
    var upper = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z, ";
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
console.log(getrandomsymbol)};

