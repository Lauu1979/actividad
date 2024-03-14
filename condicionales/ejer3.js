console.log("Leer tres números enteros positivos y calcular cual es el mayor y cual es el menor ")
console.log("Ingrese tres numeros enteros positivos")
let primer_num = 67
let segundo_num = 98
let tercer_num = 33
console.log("Primer numero ingresado :", primer_num)
console.log("Segundo numero ingresado : ", segundo_num)
console.log("Tercer numero ingresado : ",tercer_num)
if (primer_num<segundo_num)
{
    menor_num = primer_num
}
else 
{
    menor_num = segundo_num
}
if (menor_num < tercer_num)
{
    menor_num = menor_num
}
else 
{
    menor_num = tercer_num
}
if (primer_num>segundo_num)
{
    mayor_num = primer_num
}
else 
{
    mayor_num = segundo_num
}
if (mayor_num > tercer_num)
{
    mayor_num = mayor_num
}
else
{
    mayor_num = tercer_num
}
console.log("El numero mayor de los tres numeros ingresados es : ", mayor_num)
console.log ("El numero menor de los los tres numeros ingresados es : ", menor_num)