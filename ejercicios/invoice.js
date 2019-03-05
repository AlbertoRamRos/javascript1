

//autor: Alberto Ramos Rosellón

function calcular1() {

    var v_precio1 = document.getElementById("precio1");
    var v_cantidad1 = document.getElementById("cantidad1");

    var precio1 = parseInt(v_precio1.value);
    var cantidad1 = parseInt(v_cantidad1.value);


    var result1 = (precio1) * (cantidad1);
    document.getElementById("total1").innerHTML = parseInt(result1);

    return result1;
}
function calcular2() {

    var v_precio2 = document.getElementById("precio2");
    var v_cantidad2 = document.getElementById("cantidad2");

    var precio2 = parseInt(v_precio2.value);
    var cantidad2 = parseInt(v_cantidad2.value);

    var result2 = (precio2) * (cantidad2);
    document.getElementById("total2").innerHTML = parseInt(result2);

    return result2;
}

function calcular3() {

    var v_precio3 = document.getElementById("precio3");
    var v_cantidad3 = document.getElementById("cantidad3");

    var precio3 = parseInt(v_precio3.value);
    var cantidad3 = parseInt(v_cantidad3.value);

    var result3 = (precio3) * (cantidad3);
    document.getElementById("total3").innerHTML = parseInt(result3);

    return result3;
}

function Suma() {
    var suma = parseFloat(calcular1() + calcular2() + calcular3())
    document.getElementById("totalsuma").innerHTML = parseFloat(suma);
    return suma;
}

function iva() {
    var Iva = 0.21;
    var iva = parseFloat(Suma() * Iva);
    document.getElementById("IVA").innerHTML = parseFloat(iva.toFixed(2));
    return iva;
}

function total() {
    var resultado = parseFloat(Suma() - iva());
    document.getElementById("Total").innerHTML = parseFloat(resultado.toFixed(2));
}

