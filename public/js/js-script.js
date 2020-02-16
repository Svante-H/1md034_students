/*
for(const burger of menu) {
    let elem = document.createElement("div");
    let elemInfo = document.createTextNode(burger.burgerInfo());
    let elemName = document.createElement("h3");
    elemName.innerText = burger.name;
    let img = document.createElement("img");
    img.width = 300;
    img.height = 200;
    img.src = burger.imgSrc;

    elem.appendChild(elemName);
    elem.appendChild(img);
    elem.appendChild(document.createElement("br"));
    elem.appendChild(elemInfo);

    if (burger.name === "Big Mac") {
        document.getElementById("a").appendChild(elem);
    }

    if (burger.name === "Cheeseburger") {
        document.getElementById("b").appendChild(elem);
    }
    if (burger.name === "Vegan Mushroom") {
        document.getElementById("c").appendChild(elem);
    }
}

*/

let input = [];
/*
function getInput(){
    let fullname = document.getElementById("fullname").value;
    let houseNumer =document.getElementById("houseNumber").value;
    let gender = document.getElementsByName("gender").value;
    let payment = document.getElementById("payment").value;
    let mail = document.getElementById("mail").value;
    let streetName = document.getElementById("streetName").value;
    inputArray.push(fullname, houseNumer, gender, payment, mail, streetName);
    console.log(inputArray);
}

 */