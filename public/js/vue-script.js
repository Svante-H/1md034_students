//param inputData
function orderToString(toConvert) {
    let returnStr = "";
    returnStr += "Name: " + toConvert.name;
    returnStr += "Email: " + toConvert.email;
    returnStr += "\nStreet:" + toConvert.streetName + " " + toConvert.houseNr;
    returnStr += "\nPayment method: " + toConvert.payment;
    returnStr += "\nGender: " + toConvert.gender;
    return returnStr;
}

//function taken from stackOverflow, had this in mind but couldn't get my own implementation to work properly.
function anyCheckbox() {
    let inputElements = document.getElementsByName("burgerCheck");
    for (let i = 0; i < inputElements.length; i++)
        if (inputElements[i].type === "checkbox")
            if (inputElements[i].checked)
                return true;
    return false;
}

let inputData = {};

const vm = new Vue({
    el: "#document",
    data: {
        food: food,
        inputData: {
            name: "",
            email: "",
            streetName: "",
            houseNr: 0,
            payment: "card payment",
            gender: "",
        }
    },
    methods: {
        getInput: function () {
            let insertParent = document.getElementById("insertText");
            insertParent.innerHTML = ""; //Resets the printed text field if the button is pressed multiple times (probably not necessary in real situation)

            inputData.name = document.getElementById("fullname").value;
            inputData.email = document.getElementById("mail").value;
            inputData.streetName = document.getElementById("streetName").value;
            inputData.houseNr = document.getElementById("houseNumber").value;
            inputData.payment = document.getElementById("payment").value;
            let radioElem = document.getElementsByName("gender");

            for (let radio of radioElem) {
                if (radio.checked) {
                    inputData.gender = radio.value;
                }
            }
            let insertStr = orderToString(inputData);
            insertStr += "\nOrders made: ";

            for (let burger of vm.food) {
                let box = document.getElementById(burger.name);
                if (box.checked) {
                    insertStr += burger.name + ", "
                }
            }

            if (!anyCheckbox()) {
                console.log("No burger has been chosen");
            }

            console.log(orderToString(inputData));
            insertParent.append(document.createTextNode(insertStr));

        },
    }

});

//Should probably split the getInput function for readability

