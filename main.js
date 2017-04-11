/**
 * Created by marcela_salas on 10/04/17.
 */



// function declaration
function myFunctionA() {
    return 'A';
}

// Function assignment
var myFunctionB = function () {
    return 'B';
};

// Function execution
myFunctionA();
myFunctionB();


// // Function declaration + execution at the same time
// var myComplexString = (function () {
//     var superComplexResult = 'a' + 'b';
//
//     return superComplexResult;
// })() + ' lol';
//
//
// // More complex data set
// var myComplexData = {
//     a: 'a',
//     fctB: (function () {
//         return 'b'
//     })()
// };
//


(function () {

    document.getElementById('botText2').innerHTML = "Hello, what's your name?";
    console.log("Hello, what's your name?");

//Greetings functions algorithm 1-3
    function sayHello(name, hey) {

        var r = 'Hey! ' + name() + hey;
        // return console.log(r);
        return r;
    }

    sayHello(
        function () {

            var userName = 'Person';
            document.getElementById("myText").innerHTML = userName;

            return userName;

            // console.log(userName);

        },
        ', how you doing?'
    );


    document.getElementById("click").onclick = function () {
        console.log('you clicked');

        function greetingAlice() {

            var userName = document.getElementById("myText").value;
            var greeting = 'Hey! ' + userName + ' how you doing?';


            if (userName === "Alice" || userName === "Bob") {
                document.getElementById("botText2").innerHTML = greeting;

            } else {
                document.getElementById("botText2").innerHTML = "BOO!";
                // document.getElementById("botText2").innerHTML = greeting;

            }
        }

        greetingAlice();
    };


// Numbers functions algorithm

    function count(numbers) {

        numbers();

    }

    count(
        function () {


            document.getElementById("changeNumber").onclick = function () {

                sumNumber = document.getElementById("myNumber").value;
                document.getElementById("myNumber").innerHTML = "sumNumber";

                console.log(sumNumber);
                var result = 0;
                var addThree = 0;
                var addFive = 0;
                for (var i = 1; i <= sumNumber; i++) {

                    result += i;

                    var x = i % 3;
                    var y = i % 5;

                    if (x === 0) {

                        addThree += i;
                        // result = addThree;

                        // console.log(addThree)
                    } else if (y === 0) {
                        addFive += i;
                        // console.log(addFive)
                    } else {

                    }
                    // console.log(result[i++]);
                }

                document.getElementById("botTextChange").innerHTML = "The sum of units multiples of three is " + addThree;

                document.getElementById("botTextChange1").innerHTML = "The sum of units multiples of five is " + addFive;

                document.getElementById("botTextChange2").innerHTML = "The sum of all units " + result;
                //
                // console.log("The sum of units multiples of three is " + addThree);
                // console.log("The sum of units multiples of five is " + addFive);
                // console.log("The sum of all units is " + result);

            }
        }
    );


    function twoOptions(sum, product) {



        // console.log(sumNumber);

        sum();
        product();

    }


    twoOptions(
        function () {
            document.getElementById("sumElements").onclick = function () {

                sumNumber = document.getElementById("myNumber").value;
                document.getElementById("myNumber").innerHTML = "sumNumber";
                var result = 0;
                for (var i = 1; i <= sumNumber; i++) {

                    result += i;

                }
                document.getElementById("botTextChange").innerHTML = "";
                document.getElementById("botTextChange1").innerHTML = "";
                document.getElementById("botTextChange2").innerHTML = "The sum of all units is " + result;
                console.log(result);
            }
        },

        function () {

            document.getElementById("multiplyElement").onclick = function () {

                sumNumber = document.getElementById("myNumber").value;
                document.getElementById("myNumber").innerHTML = "sumNumber";
                var result = 1;
                for (var i = 1; i <= sumNumber; i++) {

                    result *= i;

                }
                document.getElementById("botTextChange").innerHTML = "";
                document.getElementById("botTextChange1").innerHTML = "";
                document.getElementById("botTextChange2").innerHTML = "The mult of all units is " + result;
                console.log(result);
            }


        }
    );

    function multTable() {

        document.getElementById("multiplyTable").onclick = function () {

            document.getElementById("tableNumbers").innerHTML = " ";
            tableNumber = document.getElementById("myNumber").value;
            document.getElementById("myNumber").innerHTML = "tableNumber";


            var result = 1;

            for (var i = 0; i <= tableNumber; i ++) {

                if (tableNumber > 12){
                    document.getElementById("table").innerHTML = "Sorry, number is too high";
                } else {
                    result = tableNumber * i;
                    // document.getElementById("table").innerHTML = result; //it overwrites itself
                    console.log(result);


                    var x = document.getElementById("tableNumbers")
                    var t = document.createTextNode( i + "x" + tableNumber + "=" + result + " ");
                    x.appendChild(t);
                }
                
            }


        };

    }
    multTable();

})();