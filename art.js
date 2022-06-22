const darkPurple = [
    'div.1560', 
    'div.1562', 
    'div.1564', 
    'div.1595', 
    'div.1597', 
    'div.1599',
]

const darkPurpleLen = darkPurple.length;

for(i=0; i<darkPurpleLen; i++) {
    const selector = classFormat(darkPurple[i]);
    const darkPurplePixel = document.querySelector(selector);
    darkPurplePixel.style.backgroundColor = "rgb(156, 89, 182)";
};


function classFormat(formatting) {
    const id = parseInt(formatting.replace('div.',''))+1;
    const nth = `.wrapper > div > div:nth-child(${id})`
    return nth;
};