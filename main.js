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

        var newNumber = 12;
        document.getElementById("changeNumber").onclick = function () {

            newNumber = document.getElementById("myNumber").value;
            document.getElementById("myNumber").innerHTML = "newNumber";
            console.log(newNumber);

            return newNumber;
        };


        numbers(


        );


    }

    count(
        function () {

            sumNumber = document.getElementById("myNumber").value;
            document.getElementById("click").onclick = function () {
                console.log(sumNumber);
                var result = 0;
                for (var i = 1; i <= sumNumber; i++) {

                    result += i;
                    // console.log(result);

                    var x = result %3;
                    var y = result %5;

                    if (x === 0) {
                        console.log(result)
                    } else if (y === 0) {
                        console.log(result)
                    } else {

                    }
                }
            }
        }
    );



})();