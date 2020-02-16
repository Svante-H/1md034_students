class menuItem {

    constructor(name, calories, containsGluten, containsLactose, imgSrc) {
        this.name = name;
        this.calories = calories;
        this.containsGluten = containsGluten;
        this.containsLactose = containsLactose;
        this.imgSrc = imgSrc; //Is this the property described?

    }
    getName(){
        return this.name;
    }

    getCalories(){
        return this.calories;
    }

    burgerInfo() {
        let returnStr = this.calories + ' kCal,';
        if (this.containsGluten) {
            returnStr += ' Contains gluten,'
        }
        else{
            returnStr += ' Gluten free,'
        }
        if (this.containsLactose) {
            returnStr += ' Contains lactose!'
        }
        else {
            returnStr+= ' Lactose free!';
        }
        return returnStr;
    }
}



let burger1 = new menuItem("Big Mac", 775, true, true, "https://www.burgerdudes.se/wp-content/uploads/2018/09/shadyburger_basic_burger_stefan_med.jpg");
let burger2 = new menuItem("Cheeseburger", 662, false, true);
let burger3 = new menuItem("Vegan Mushroom", 512, false, false);
let burger4 = new menuItem("Chicken burger", 443, true, true);
let burger5 = new menuItem("Halloumi burger", 731, false, true);



/* putting js objects into html element, may be a more elegant way*/

/*
let b1Node = document.createElement("p");
let b1Text = document.createTextNode(burger1.getName() + ': ' + burger1.getCalories());
b1Node.appendChild(b1Text);
document.getElementById("selectBurger").appendChild(b1Node);

let b2Node = document.createElement("p");
let b2Text = document.createTextNode(burger2.getName() + ': ' + burger2.getCalories());
b2Node.appendChild(b2Text);
document.getElementById("selectBurger").appendChild(b2Node);

let b3Node = document.createElement("p");
let b3Text = document.createTextNode(burger3.getName() + ': ' + burger3.getCalories());
b3Node.appendChild(b3Text);
document.getElementById("selectBurger").appendChild(b3Node);

let b4Node = document.createElement("p");
let b4Text = document.createTextNode(burger4.getName() + ': ' + burger4.getCalories());
b4Node.appendChild(b4Text);
document.getElementById("selectBurger").appendChild(b4Node);

let b5Node = document.createElement("p");
let b5Text = document.createTextNode(burger5.getName() + ': ' + burger5.getCalories());
b5Node.appendChild(b5Text);
document.getElementById("selectBurger").appendChild(b5Node);



for (const burger in menu) {

    let burgerElem = document.createElement("p");
    let burgerInfo = document.createTextNode(burger.burgerInfo());
    burgerElem.appendChild(burgerInfo);
    document.getElementById("selectBurger").appendChild(burgerElem);
}

 */

let menu = [
    new menuItem("Big Mac", 775, true, true, "https://images.ctfassets.net/sd2voc54sjgs/5L6livQvCw28S04IUSAcm6/ebdbf21e81866fc034386ca5400ac530/Blog_Header_Hamburger_History_Option.png?fm=jpg&q=80&fl=progressive&w=1100"),
    new menuItem("Cheeseburger", 662, false, true, "https://www.burgerdudes.se/wp-content/uploads/2018/09/shadyburger_basic_burger_stefan_med.jpg"),
    new menuItem("Vegan Mushroom", 512, false, false, "https://www.thespruceeats.com/thmb/KAgMssHoQUmx30uuYL_FTahXA0A=/2048x1360/filters:fill(auto,1)/vegan-mushroom-bean-burger-recipe-3378623-13_preview1-5b241897fa6bcc0036d2c9bf.jpeg"),
    new menuItem("Chicken burger", 443, true, true, "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.foxvalleyfoodie.com%2Fchicken-burgers%2F&psig=AOvVaw1c3p8gkleXI6DGATjirIlK&ust=1581956944324000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDcn4S_1ucCFQAAAAAdAAAAABAD"),
    new menuItem("Halloumi burger", 731, false, true, "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.coop.co.uk%2Frecipes%2Fchorizo-and-halloumi-burgers&psig=AOvVaw1kzoXtXWsbm2lYyOUpXqzp&ust=1581956973658000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMift46_1ucCFQAAAAAdAAAAABAD")
];


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