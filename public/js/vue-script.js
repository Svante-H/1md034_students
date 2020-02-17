function orderToString(toConvert) {
    let returnStr = "";
    returnStr += "Name: " + toConvert.name;
    returnStr += "\nEmail: " + toConvert.email;
    returnStr += "\nStreet:" + toConvert.streetName + " " + toConvert.houseNr;
    returnStr += "\nPayment method: " + toConvert.payment;
    returnStr += "\nGender: " + toConvert.gender;
    return returnStr;


}

const vm = new Vue({
    el: "#BurgerTable",
    data: {
        food: food
    }

});
let inputData = {};

const vm1 = new Vue({
    el: "#purchase",
    data: {
        inputData: {
            name: "",
            email: "",
            streetName: "",
            houseNr: 0,
            payment: "card payment",
            gender: "male",
        }
    },
    methods: {
        getInput: function () {
            inputData.name = document.getElementById("fullname").value;
            inputData.email = document.getElementById("mail").value;
            inputData.streetName = document.getElementById("streetName").value;
            inputData.houseNr = document.getElementById("houseNumber").value;
            inputData.payment = document.getElementById("payment").value;
            let radios = document.getElementsByName("radios");
            let gender;
            for (let i = 0; i < radios.length; i++) {
                if (radios[i].checked) {
                    gender = radios[i].value;
                }
            }
            inputData.gender = gender;
        },
        printInfo: function () {


            let stringOfInfo = orderToString(vm1.inputData);

        }
    }


});
