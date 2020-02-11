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
}

let burger1 = new menuItem("Big Mac", 775, true, true);
let burger2 = new menuItem("Cheeseburger", 662, false, true);
let burger3 = new menuItem("Vegan Mushroom", 512, false, false);
let burger4 = new menuItem("Chicken burger", 443, true, true);
let burger5 = new menuItem("Halloumi burger", 731, false, true);

/* putting js objects into html element, may be a more elegant way*/
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
