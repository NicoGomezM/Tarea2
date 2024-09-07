// 1. Imprimir en consola los números del 1 al 10.
console.log('-'.repeat(25), 'Ejercicio 1')
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
// 2. Imprimir en consola los números del 10 al 1.
console.log('-'.repeat(25), 'Ejercicio 2')
for (let i = 10; i >= 1; i--) {
    console.log(i)
}
// 3. Imprimir en consola los números del 1 al 10 pero solo los pares.
console.log('-'.repeat(25), 'Ejercicio 3')
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0){
        console.log(i)
    }
}
// 4. Imprimir en consola los números del 1 al 10 pero solo los impares.
console.log('-'.repeat(25), 'Ejercicio 4')
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0){
        console.log(i)
    }
}
// 5. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3.
console.log('-'.repeat(25), 'Ejercicio 5')
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0){
        console.log(i)
    }
}
// 6. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5.
console.log('-'.repeat(25), 'Ejercicio 6')
for (let i = 1; i <= 10; i++) {
    if (i % 5 === 0){
        console.log(i)
    }
}
// 7. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5.
console.log('-'.repeat(25), 'Ejercicio 7')
for (let i = 1; i <= 10; i++) {
    if (i % 5 === 0 && i % 3 === 0){
        console.log(i)
    }
}
// 8. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5.
console.log('-'.repeat(25), 'Ejercicio 8')
for (let i = 1; i <= 10; i++) {
    if (i % 5 === 0 || i % 3 === 0){
        console.log(i)
    }
}
