// 1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
console.log('-'.repeat(25), 'Ejercicio 1')

function sumaElementosArray(números){
    var suma = 0
    for(let i=0; i < números.length; i++){
        suma = suma + números[i]
    }
    console.log('La suma total es:', suma)
}

const num = [7,4,6,4,7,9,3]
sumaElementosArray(num)

// 2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
console.log('-'.repeat(25), 'Ejercicio 2')

function calcularPromedio(números){
    var suma = 0
    for(let i=0; i < números.length; i++){
        suma = suma + números[i]
    }
    console.log('El promedio de los números es:', suma/números.length)
}

calcularPromedio([2,5,4,7,8,9])

// 3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
console.log('-'.repeat(25), 'Ejercicio 3')

function transformarArrayStringMayus(textos){
    const tran = [];
    for(let i=0; i < textos.length; i++){
        tran[i] = textos[i].toUpperCase()
    }
    console.log('Textos sin trasformar:',textos)
    console.log('Textos trasformados:',tran)
}

transformarArrayStringMayus(['plátano','manzana','pera','uva','melon'])

// 4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
console.log('-'.repeat(25), 'Ejercicio 4')

function quitarImpares(números){
    const filtrados = [];
    let j = 0
    for(let i=0; i < números.length; i++){
        if(números[i] % 2 === 0){
            filtrados[j] = números[i]
            j++
        }
    }
    console.log('Números sin filtrar:', números)
    console.log('Números filtrados:', filtrados)
}

quitarImpares([2,8,5,7,9,12,42,50,70])