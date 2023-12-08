const array2=[
    ["red","blue","green"],
    ["John","Jorge","Messi"],
    ["short","medium","tall"],
];

let fullHtmlCode="";
for(const row of array2){
    const htmlCode =row
        .map(r=> `<span>${r}</span>`)
        .join("");
    fullHtmlCode=fullHtmlCode + `<div>${htmlCode}</div   >`
}

const container = document.getElementById("Dam");
container.innerHTML =fullHtmlCode;