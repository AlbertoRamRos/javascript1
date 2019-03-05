

//autor: Alberto Ramos Rosellón

function Banda1(){
    
    var v_banda1 = document.getElementById("banda1");
    
     var banda1 = (v_banda1.value);
   
    return banda1;
}
function Banda2(){
    
    var v_banda2 = document.getElementById("banda2");
    
     var banda2 = (v_banda2.value);
   
    return banda2;
}
function Banda3(){
    
    var v_banda3 = document.getElementById("banda3");
    
     var banda3 = (v_banda3.value);
   
    return banda3;
}

function Multiplicador(){
    
    var v_multip = document.getElementById("multi");
    
     var multip = (v_multip.value);
   
    return multip;
}

function Calcular (){

    var resultado = (Banda1()+(Banda2()+Banda3()))*Multiplicador();

    return resultado;
}
function Calcular2 (){

    var v_tolerancia = document.getElementById("toler");
    
    var tolerancia = (v_tolerancia.value);
    
    document.getElementById("resultado").innerHTML = 
     Calcular()+"  Ω  " + parseFloat(tolerancia) +" %";
}