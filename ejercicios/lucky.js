
//Autor: Alberto Ramos Rosellón

function Dia() {
    var v_dia = document.getElementById("dia");

    var dia = parseInt(v_dia.value);

    for (var i = 1; i <= 31; i++) {
        if (i == dia) {
            break;
        }
    }
    if (i > 31) {
        dia = parseInt(alert("Error. Introduce el día correcto"));
    }

    return dia;
}


//Introducimos y validamos la variable mes
function Mes() {
    var v_mes = document.getElementById("mes");

    var mes = parseInt(v_mes.value);

    for (var j = 1; j <= 12; j++) {
        if (j == mes) {
            break;
        }
    }
    if (j > 12) {
        window.alert("Error. Introduce el mes correcto");
    }

    return mes;
}

function Año() {
    var v_año = document.getElementById("año");

    var año = parseInt(v_año.value);


    for (var k = 1900; k <= 2019; k++) {
        if (k == año) {
            break;
        }
    }
    if (k > 2019) {
        año = parseInt(alert("Error. Introduce el año correcto"));
    }

    return año;
}

function Calcular() {
    var calculo = parseInt(Dia() + Mes() + Año());

    var uno = (calculo) / 1000;
    var dos = ((calculo) % 1000) / 100;
    var tres = ((calculo % 1000) % 100) / 10;
    var cuatro = (((calculo) % 1000) % 100) % 10;

    var calculo2 = parseInt(uno) + parseInt(dos) + parseInt(tres) + parseInt(cuatro);
    var numeroSuerte = (parseInt(calculo2) / 10) + (parseInt(calculo2)) % 10;

    document.getElementById("resultado").innerHTML = Math.trunc(numeroSuerte);
}
