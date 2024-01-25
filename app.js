/* 
    Declaración y/o incialización de variables 
*/

let attempts, secretNumber, lives, usedNumber = [], limit = 10;

/* 
    Declaración de funciones en JavaScript 
*/

// Función que nos permite asignar un texto a un elemento HTML

let assignTextToElement = (text, element) => {
    let htmlElement = document.querySelector(element);
    htmlElement.innerHTML = text;
    return;
}
// Función que genera un número aleatorio

let randomNumber = () => {
    let number =  Math.floor(Math.random() * limit) + 1;

    console.log(number);
    console.log(usedNumber);
    if(usedNumber.length === limit){
        usedNumber = [];
    }else{
        if(usedNumber.includes(number)){
            return randomNumber();
        }else{
            usedNumber.push(number);
            return number;    
        }
    }
}

// Función para definir mensajes iniciales

let initialConditions = () => {
    secretNumber = randomNumber();
    attempts = 1;
    lives = 5;
    assignTextToElement(`${lives}`,'#vidas');
    assignTextToElement('Juego del número secreto','h1');
    assignTextToElement(`Indica un número del 1 al ${limit} `,'p');    
}


// Implementación de las funciones

initialConditions();

// Función que genera un alert cuando se da click en un elemento

let verifyTry = () => {
    let userNumber = parseInt(document.getElementById('input').value);
    // console.log(secretNumber);    
    if(userNumber < 10 && userNumber > 0){
        if(secretNumber === userNumber){
            assignTextToElement(`Acertaste el número, lo lograste en ${ attempts  } ${ attempts == 1 ? 'intento' : 'intentos' } `, 'p');
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.getElementById('intentar').setAttribute('disabled', 'true');
        }else{
            lives--;

            if(lives < 1){
                assignTextToElement(`Rayos, haz perdido todas tus vidas! El numero secreto era: ${secretNumber}`,'p');
                document.getElementById('intentar').setAttribute('disabled', 'true');
                document.getElementById('reiniciar').removeAttribute('disabled');
            }else{
                assignTextToElement(`Error! El número secreto es: ${secretNumber > userNumber ? 'mayor' : 'menor'}, tienes ${parseInt(lives)} ${lives === 1 ? 'vida' : 'vidas'}`, 'p')
                assignTextToElement(`${lives}`,'#vidas')
            }
        }
    }else{
        assignTextToElement(`Revisa el valor que ingresaste es ${ userNumber > limit ? 'mayor' : 'menor'} al rango solicitado`, 'p')
    }
    // console.log('User Number: ' + int + '- Random number: ' + randomNumber());
    attempts++;
    // console.log(attempts)
    emptyInput();
}

// Función para resetear el juego

let resetGame = () => {
    emptyInput();
    initialConditions();
    document.getElementById('intentar').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

// Función para vaciar el input element

let emptyInput = () => {
    let input = document.querySelector('#input').value = '';
}


// let button = document.querySelector('button');
