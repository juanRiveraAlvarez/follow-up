const fecha = Date.now();
for (let i = 0; i <1000 ; i++) {
    console.log(i)
}
const fin = Date.now();
console.log(fin)
console.log(fecha)
console.log((fin-fecha)/1000)