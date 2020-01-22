var bombero = [];
var motobomba = [];
var marcarB=[];
var marcarM = [];
var contenedorBom = document.getElementById("tablaBombero");
var contenedorMoto = document.getElementById("tablaMotobomba")
document.getElementById("agregarBombero")
.addEventListener("click",function(){
    document.getElementById("tablaBombero").innerHTML = "";
    let nomBre = document.getElementById("nombre").value;
    let anoNacimiento = document.getElementById("fecha").value;
    let bomBero = new Bombero(nomBre,anoNacimiento);
    bombero.push(bomBero);
    dibujarBombero();
    marcarBomberos();

    document.getElementById("nombre").value = "";
    document.getElementById("fecha").value = "";
});


var contenedor = document.getElementById("motobomba");
document.getElementById("agregarMotobombas")
.addEventListener("click",function(){
    document.getElementById("tablaMotobomba").innerHTML = "";
    let cod = document.getElementById("codigo").value;
    let motoB = new Motobomba(cod);
    motobomba.push(motoB);
    dibujarMotobomba();
    marcarMotobombas();

    document.getElementById("codigo").value = "";
});

dibujarBombero = () => {
    for (var i = 0; i < bombero.length; i++) {
        var celda = document.createElement('div');
        celda.className = 'celdas';
        celda.id = i;
        marcarB.push(i);
        celda.appendChild(document.createTextNode(bombero[i].nombre));

        contenedorBom.appendChild(celda);

    }
}
dibujarMotobomba = () => {
    for (var i = 0; i < motobomba.length; i++) {
        var celda = document.createElement('div');
        celda.className = 'celdas';
        celda.id = i;
        marcarM.push(i);
        celda.appendChild(document.createTextNode(motobomba[i].codigo));
        contenedorMoto.appendChild(celda);

    }
}

marcarBomberos = () => {
    for (let d = 0; d < marcarB.length; d++) {
        marcarBombero(d);
    }
}

marcarBombero = (d) => {
    let no = document.getElementById(d);
    let f = document.getElementById(d).innerHTML;
    let x1 = 0;
    no.addEventListener("click", function() {
        if (x1 === 0 && f != "0") {
            no.style.backgroundColor = "#5f6caf";
            x1 = 1;
            console.log(no.innerHTML);
            //console.log(f);
        } else if (f == "0") {} else {
            no.style.backgroundColor = "white";
            x1 = 0;
            //console.log(f);
        }
    });
}
marcarMotobombas = () => {
    for (let d = 0; d < marcarM.length; d++) {
        marcarMotobomba(d);
    }
}

marcarMotobomba = (d) => {
    let no = document.getElementById(d);
    let f = document.getElementById(d).innerHTML;
    let x1 = 0;
    no.addEventListener("click", function() {
        if (x1 === 0 && f != "0") {
            no.style.backgroundColor = "#f9f6f7";
            x1 = 1;
            console.log(no.innerHTML);
            //console.log(f);
        } else if (f == "0") {} else {
            no.style.backgroundColor = "white";
            x1 = 0;
            //console.log(f);
        }
    });
}
