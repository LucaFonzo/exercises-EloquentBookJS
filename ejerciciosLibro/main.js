//EJERCICIO 1
/* Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo:

#
##
###
####
#####
######
#######
//for (let i = "#";i.length <= 7;i+="#"){
//    console.log(i);
//}
//EJERCICIO 2
/*Escribe un programa que use console.log para imprimir todos los números de 1 a 100, con dos excepciones. 
Para números divisibles por 3, imprime "Fizz" en lugar del número, y para los números divisibles por 5 (y no 3), imprime "Buzz" en su lugar.
Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz", para números divisibles por solo uno de ellos).
for (let i = 0;i <= 100;i++){
    if (i % 3 === 0){
        console.log("Fizz")
    }else if (i % 5 === 0){
        console.log("Buzz")
    }else{
        console.log(i);
    }
}*/

//EJERCICIO 3
/*Escribe un programa que cree un string que represente una cuadrícula de 8 × 8, usando caracteres de nueva línea para separar las líneas. 
En cada posición de la cuadrícula hay un espacio o un carácter "#"
. Los caracteres deberían de formar un tablero de ajedrez.
Pasar este string a console.log debería mostrar algo como esto:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
Cuando tengas un programa que genere este patrón, 
define una vinculación tamaño = 8 y cambia el programa para que funcione con cualquier tamaño, dando como salida una cuadrícula con el alto y ancho dados. */
let ancho = "8";
let caracter1 = "";
for(let y = 0;y < ancho;y++){
    for(let x = 0;x < ancho;x++){
        if ((x+y) % 2 == 0)
            {
            caracter1 += " ";
        }else
            {
            caracter1 += "#";
        }
    }
    caracter1 += "\n";
}

console.log(caracter1);


