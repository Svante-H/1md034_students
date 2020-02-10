function menuItem(name, calories, containsGluten, containsLactose, imgSrc) {
    this.name = name;
    this.calories = calories;
    this.containsGluten = containsGluten;
    this.containsLactose = containsLactose;
    this.imgSrc = imgSrc; //Is this the property described?
}

function burgerInfo(burger){
    return burger.name + ' ' + burger.calories;
}
let burger1 = new menuItem("Big Mac", 775, true, true);
let burger2 = new menuItem("Cheeseburger", 662, false, true);
let burger3 = new menuItem("Vegan Mushroom", 512, false, false);
let burger4 = new menuItem("Chicken burger", 443, true, true);
let burger5 = new menuItem("Halloumi burger", 731, false, true);
burgerInfo(burger1, burger2);