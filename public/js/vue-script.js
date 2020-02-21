'use strict';
//param inputData
function orderToString(toConvert) {
    let returnStr = "";
    returnStr += "Name: " + toConvert.name + " ";
    returnStr += "Email: " + toConvert.email;
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

/* jslint es6:true, indent: 2 */
/* global Vue, io */
/* exported vm */
const socket = io();

const vmWhole = new Vue({
    el: "#document",
    data: {
        localOrder: {
            orderId : 0,
            position: {
                x: 0,
                y: 0,
                },
            display: "T",

        },
        isMapClicked: false,
        food: food,
        inputData: {
            name: "",
            email: "",
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
            inputData.payment = document.getElementById("payment").value;
            let radioElem = document.getElementsByName("gender");

            for (let radio of radioElem) {
                if (radio.checked) {
                    inputData.gender = radio.value;
                }
            }
            let insertStr = orderToString(inputData);
            insertStr += "\nOrders made: (";

            let burgerList = [];
            for (let burger of vmWhole.food) {

                let box = document.getElementById(burger.name);
                if (box.checked) {
                    burgerList.push(burger.name);
                    insertStr += burger.name + ", ";
                }
            }
            if (!anyCheckbox()) {
                console.log("No burger has been chosen");
            }
            else{
                let lastCommaIndex = insertStr.lastIndexOf(',');
                insertStr = insertStr.substring(0,lastCommaIndex) + ')';
            }



            insertParent.append(document.createTextNode(insertStr));
            vmWhole.addOrder(burgerList);
        },

        displayOrder: (event) =>{
            let offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top,
            };
            vmWhole.isMapClicked = true;
            vmWhole.localOrder.position.x = event.clientX - 10 - offset.x;
            vmWhole.localOrder.position.y = event.clientY - 10 - offset.y;
        },

        getNext: function() {
            vmWhole.localOrder.orderId++;
            return vmWhole.localOrder.orderId;
        },
        addOrder: function(list) {
            socket.emit('addOrder', {
                orderId: vmWhole.getNext(),
                details: this.localOrder,
                orderItems: list,
                customerInfo : {name : inputData.name, gender : inputData.gender, email: inputData.email, payment : inputData.payment}

            });
        },
    }

});
//Should probably split the getInput function for readability





