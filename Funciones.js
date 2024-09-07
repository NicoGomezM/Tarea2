// 1. Crea una función que reciba un string y retorne el string en mayúsculas.
console.log('-'.repeat(25), 'Ejercicio 1')

function TransformaraMayus(texto){
    console.log('Texto normal:', texto)
    console.log('Texto transformado:',texto.toUpperCase())
}

TransformaraMayus('nicolás')

// 2. Crea una función que reciba un string y retorne el string en minúsculas.
console.log('-'.repeat(25), 'Ejercicio 2')

function TransformaraMinus(texto){
    console.log('Texto normal:', texto)
    console.log('Texto transformado:',texto.toLowerCase())
}

TransformaraMinus('AZUL')
// 3. Crear una función que reciba como parámetro 2 números y los reste.
console.log('-'.repeat(25), 'Ejercicio 3')

function restar2números(numero1, numero2){
    console.log(numero1 ,'-', numero2 ,'=', numero1-numero2)
}

restar2números(5,8)

// 4. Crear una función que reciba como parámetro 2 números y los divida.
console.log('-'.repeat(25), 'Ejercicio 4')

function dividir2números(numero1, numero2){
    console.log(numero1 ,'/', numero2 ,'=', numero1/numero2)
}

dividir2números(15,5)
// 5. Crear una función que reciba como parámetro 2 números y los multiplique.
console.log('-'.repeat(25), 'Ejercicio 5')

function multiplicar2números(numero1, numero2){
    console.log(numero1 ,'*', numero2 ,'=', numero1*numero2)
}

multiplicar2números(5,7)
// 6. Crear una función que reciba un string y devuelva la longitud del string.
console.log('-'.repeat(25), 'Ejercicio 6')

function devolverLargoString(texto){
    console.log('Largo del texto [',texto,']:', texto.length, 'caracteres')
}

devolverLargoString('electroencefalografía')
