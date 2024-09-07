// 1. **Crear un objeto de persona**: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.
console.log('-'.repeat(40), 'Ejercicio 1')

const Persona = {
    nombre: 'Nicolás',
    edad: 21,
    genero: 'Masculino'
}

console.log(Persona)

console.log('Nombre de la persona:',Persona.nombre)
console.log('Edad de la persona:',Persona.edad)
console.log('Genero de la persona:',Persona.genero)

// 2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.
console.log('-'.repeat(40), 'Ejercicio 2')
const Caja = {
    cuadernos: 5,
    lapices: 10,
    papel: 'Carta',
    fotografias: 20,
    BuenEstado: false,
}
console.log(Caja)

console.log('Cuadernos tiene',Caja.cuadernos,'y es:', typeof Caja.cuadernos)
console.log('Lapices tiene',Caja.lapices,'y es:', typeof Caja.lapices)
console.log('Papel tiene',Caja.papel,'y es:', typeof Caja.papel)
console.log('Fotografías tiene',Caja.fotografias,'y es:', typeof Caja.fotografias)
console.log('BuenEstado tiene',Caja.BuenEstado,'y es:', typeof Caja.BuenEstado)
