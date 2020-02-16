
const vm = new Vue({
    el: "#BurgerTable",
    data:{
        food: food
    }

});


const vm1 = new Vue({
    el: "#purchase",
    data: {
        inputArray: input,
    },
    methods: {
        getInput : function() {
                let input = [];
                let fullname = document.getElementById("fullname").value;
                let mail = document.getElementById("mail").value;
                let streetName = document.getElementById("streetName").value;
                let houseNumer =document.getElementById("houseNumber").value;
                let payment = document.getElementById("payment").value;
                let radios = document.getElementsByName("gender")
                let gender;
                for(let i = 0; i < radios.length; i++){
                    if(radios[i].checked){
                        gender = radios[i].value;
                    }
                }

                input.push(fullname, mail, streetName, houseNumer, payment, gender);
                console.log(input);
            }
        }


});

