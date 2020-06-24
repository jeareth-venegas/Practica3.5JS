let asterisco = ""
let x = 1
let y = parseFloat(prompt("Digite el tamaño del asterisco:"))

while (x <= y) {
    asterisco = asterisco + "*";
    while (asterisco < y){
        asterisco = asterisco + "*";
    }
    console.log(asterisco);
    x++;
}
