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


    /**
     * Exercices 1 to 3
     */
    document.getElementById("click").addEventListener('click', greet);

    function greet() {
        var userName = document.getElementById("myText").value;
        var greeting = 'Hey! ' + userName + ' how you doing?';

        if (userName.toUpperCase() === "Alice".toUpperCase() || userName.toUpperCase() === "Bob".toUpperCase()) {
            document.getElementById("botText2").innerHTML = greeting;
        } else {
            document.getElementById("botText2").innerHTML = "BOO!";
        }
    }


    /**
     *
     * Exercices 4 and 5
     */
    document.getElementById("changeNumber").onclick = function () {

        var sumNumber = document.getElementById("myNumber").value;
        document.getElementById("myNumber").innerHTML = "sumNumber";

        var calculationResult = doCalculation(sumNumber);

        document.getElementById("botTextChange").innerHTML = "The sum of units multiples of three is " + calculationResult.addThree;

        document.getElementById("botTextChange1").innerHTML = "The sum of units multiples of five is " + calculationResult.addFive;

        document.getElementById("botTextChange2").innerHTML = "The sum of all units " + calculationResult.result;
        //
        // console.log("The sum of units multiples of three is " + addThree);
        // console.log("The sum of units multiples of five is " + addFive);
        // console.log("The sum of all units is " + result);

    };


    function doCalculation(sumNumber){
        var result = 0;
        var addThree = 0;
        var addFive = 0;
        var multiplication = 1;
        for (var i = 1; i <= sumNumber; i++) {

            result += i;
            multiplication *= i;

            var x = i % 3;
            var y = i % 5;

            if (x === 0) {
                addThree += i;
            } else if (y === 0) {
                addFive += i;
            }
        }

        return {
            result: result,
            addThree: addThree,
            addFive: addFive,
            multiplication: multiplication
        }
    };

    /**
     * Exercises 6
     */

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
    };

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
    };


    /**
     * Exercise 7
     */
    document.getElementById("multiplyTable").onclick = function () {

        document.getElementById("tableNumbers").innerHTML = " ";
        tableNumber = document.getElementById("myNumber").value;
        document.getElementById("myNumber").innerHTML = "tableNumber";

        var x = document.getElementById("tableNumbers");

        var result = 1;

        for (var i = 0; i <= tableNumber; i++) {
            if (tableNumber > 12) {
                document.getElementById("table").innerHTML = "Sorry, number is too high";
            } else {
                result = tableNumber * i;
                console.log(result);
                x.innerHTML += i + "x" + tableNumber + "=" + result + " "
            }
        }
    };


    /**
     * Excercise 8
     */
    document.getElementById("primeNumbers").onclick = function () {

        document.getElementById("prime").innerHTML = " ";
        inputNumber = document.getElementById("myNumber").value;

        var isCurrentNumberPrime;
        var x = document.getElementById("prime");

        for( var numberToTest = 1 ; numberToTest <= inputNumber ; numberToTest++ ) {

           isCurrentNumberPrime =  isMyNumberPrime(numberToTest);
           console.log('Is '+numberToTest+' prime ? '+ isCurrentNumberPrime);

           if (isCurrentNumberPrime === true) {

               x.innerHTML += " " + numberToTest;

           }

        }
    };

    function isMyNumberPrime(myNumber) {
        var isNumberPrime = true;
        for (var i = 2; i < myNumber; i++) {
            var x = myNumber % i;

            if (x === 0) {
                isNumberPrime = false;
                break;
            }
        }
        return isNumberPrime

    }

    /**
     * Excercise 9
     */

    document.getElementById("guessFunction").addEventListener('click', guess);

    function guess() {


        var x = document.getElementById("random");
        x.innerHTML =  Math.floor ((Math.random() * 100) + 1);

        
    }


})();