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


    function doCalculation(sumNumber) {
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

        for (var numberToTest = 1; numberToTest <= inputNumber; numberToTest++) {

            isCurrentNumberPrime = isMyNumberPrime(numberToTest);
            console.log('Is ' + numberToTest + ' prime ? ' + isCurrentNumberPrime);

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


    // Generates the random number to guess in the future
    document.getElementById("numberToGuess").addEventListener("click", generateNumber);
    function generateNumber () {
        // Is not within a variable so it can be reached globally, for the isUserRight function
        numberToGuess = Math.floor((Math.random() * 100) + 1);
        console.log("number generated " + numberToGuess);
        document.getElementById("randomGenerated").innerHTML= "Random number generated, guess!";
        return numberToGuess;
    }


    // Checks if the user is right and counts the amount of tries
    document.getElementById("amIRight").addEventListener("click", isUserRight);
    var numberOfInputs = 0;
    var previousValue = null;

    function isUserRight() {

        var y = parseInt(document.getElementById("guessNumber").value); //User input
        var z = document.getElementById("guessMessages");

        if( previousValue && previousValue === y) { //if previousValue is different from null and not equal to Y
            z.innerHTML= "Attemp number " + numberOfInputs + "failed";
            console.log('Not counting');

        } else {
            previousValue = y; //takes the value from the input field and inserts it into Previous Value
            numberOfInputs += 1;
            console.log ('Attempt number' + numberOfInputs);

            if ( y < numberToGuess) {
                z.innerHTML = "Your number is too LOW";
                console.log ("Your number is too low")

            } else if (y > numberToGuess) {
                z.innerHTML = "Your number is too HIGH";
                console.log ("Your number is too high")

            }  else if (y === numberToGuess){
                z.innerHTML= "CONGRATS! you don't suck, got it at the " + numberOfInputs + " try";
                document.getElementById("randomGenerated").innerHTML= "You guessed generate a new none";
                numberOfInputs = 0;
                previousValue = null; //reset previous value
            }

             if (numberOfInputs === 5 && y !== numberToGuess) { // if it's higher and not accurate to numbertoGuess
                z.innerHTML= "GAME OVER";
                numberOfInputs = 0;
                previousValue = null;
                document.getElementById("randomGenerated").innerHTML= "Generated new number";
                document.getElementById("guessNumber").innerHTML = '';
            }
        }


    }


    /**
     * Excercise 10: Leap years
     */

    document.getElementById("leapYears").addEventListener("click", leapYear);
    function leapYear() {

        var numberYears = 20;
        x = 2016;
        i = 1;

        while ( i < numberYears){
            nextLeapYear = x+=4;
            i++;
            document.getElementById("oneLeapYear").innerHTML += "   " + nextLeapYear + "<br>";
            console.log(nextLeapYear);

        }
    }


    /**
     * Excercise 1: Lists and strings, check longest element in array.
     */

    //Array created manually
    cars = [ "Volvo", "Volkswagen", "Mercedes-Benz", "Audi", "Toyota", "Mitsubishi"];

    document.getElementById("longestElement").addEventListener("click", longestElementInArray);
    function longestElementInArray () {



        // var defined to save previous elements and compare sizes
        var largestElement = '';
        var element;
        var previousElement = "";

        for (i = 0; i < cars.length; i++) {
            element = cars[i];

            // if defines previous element to 0, otherwise is not posible to compare give i[0] doesn't
            // have a previous element

            previousElement = largestElement;


            if (element.length > previousElement.length) {
                largestElement = element; //replaces largest element if actual is larger.
            }
        }

        document.getElementById("longestElementInArray").innerHTML = largestElement;
        return largestElement;
    }


    /**
     * Excercise 2: Reverse Array
     */

    document.getElementById("reverseList").addEventListener("click", reverseList);

    function reverseList () {
        cars.reverse();
        console.log(cars);
        document.getElementById("searchResult").innerHTML = cars;
        return cars;

    }


    /**
     * Excercise 3: Find element in array
     */

    document.getElementById("searchElement").addEventListener("click", searchElement);

    function searchElement() {

        searchedElement = 'Mitsubishi';

        for (i = 0; i < cars.length; i++) {
            element = cars[i];

            // if defines previous element to 0, otherwise is not posible to compare give i[0] doesn't
            // have a previous element
            if (element === searchedElement) {
                result = "It contains the element";
                console.log("Bingo " + result);
            } else {
                result = "there's NO element";
                console.log(result);
            }

        }

        document.getElementById("searchResult").innerHTML = "It exists";
        return result;
    }


    /**
     * Excercise 4: Returns elements on odd positions in a list
     */


    document.getElementById("oddElements").addEventListener("click", oddElements);

    function oddElements () {

        for (i=0; i < cars.length; i ++) {

            var x = i % 2;

            if (x === 0){
                console.log(cars[i]);
                document.getElementById("showOddElements").innerHTML += " " + cars[i] + " ";
            }

        }
    }

    /**
     * Excercise 6: check if word is a palindrome
     */
        pal = ['acer', 'kayak', 'madam', 'motor','redder', 'alula', 'elle', 'casa'];

        for (i = pal.length-1; i >= 0 ; i -- ){

            console.log(pal[i]);
            var originalWord = pal[i].split('');
            var reversedWord = pal[i].split('').reverse();

            var x = originalWord.toString();
            var y = reversedWord.toString();


            if (x === y) {
                console.log ('is palidrome');
            } else {
                console.log ('failure');
            }
        }

    /**
     * Excercise 7:  three functions that compute the sum of the numbers in a list: using a for-loop,
     * a while-loop and recursion
     */

    numbers = [32, 45, 10, 8, 12, 15];
    var sum = 0;

    for (i =0; i < numbers.length ; i ++){
        sum += numbers[i];
    }
    console.log(sum);
    return sum

})();