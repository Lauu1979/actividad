console.log("Determine si un año es bisiesto o no.")
let año = 2025
console.log ("El año ingresado es : ", año) 
if ((año % 4 == 0 && año % 100 != 0) || año % 400 == 0)
{
    console.log("El año ingresa SI es  bisiesto")
}
else 
{
    console.log("El año ingresado NO es bisiesto")
}
