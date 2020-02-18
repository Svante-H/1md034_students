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
        orders: {},
        food: food,
        inputData: {
            name: "",
            email: "",
            payment: "card payment",
            gender: "",
        }
    },
        created: function() {
            /* When the page is loaded, get the current orders stored on the server.
             * (the server's code is in app.js) */
            socket.on('initialize', function(data) {
                this.orders = data.orders;
            }.bind(this));

            /* Whenever an addOrder is emitted by a client (every open map.html is
             * a client), the server responds with a currentQueue message (this is
             * defined in app.js). The message's data payload is the entire updated
             * order object. Here we define what the client should do with it.
             * Spoiler: We replace the current local order object with the new one. */
            socket.on('currentQueue', function(data) {
                this.orders = data.orders;
            }.bind(this));
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
            insertStr += "\nOrders made: ";

            for (let burger of vmWhole.food) {
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
        getNext: function() {
            /* This function returns the next available key (order number) in
             * the orders object, it works under the assumptions that all keys
             * are integers. */
            let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        addOrder: function(event) {
            /* When you click in the map, a click event object is sent as parameter
             * to the function designated in v-on:click (i.e. this one).
             * The click event object contains among other things different
             * coordinates that we need when calculating where in the map the click
             * actually happened. */
            let offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top,
            };
            socket.emit('addOrder', {
                orderId: this.getNext(),
                details: {
                    x: event.clientX - 10 - offset.x,
                    y: event.clientY - 10 - offset.y,
                },
                orderItems: ['Beans', 'Curry'],
            })
        },
    }

});

//Should probably split the getInput function for readability





