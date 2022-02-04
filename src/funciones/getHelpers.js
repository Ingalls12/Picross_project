function separacion(lista){
    let contenido_x = []
    for(let x=0;x<lista.length;x=x+10){
        let n_lista = lista.slice(x,x+10);
        contenido_x.push(n_lista)
    }
    return contenido_x
}
function transpuesta(lista){
    let array = lista[0].map((col, i) => lista.map(row => row[i]));
    return array;
}
function contador(lista){
    let contenido_x = {};
    let n = 1;
    lista.forEach(element => {
        contenido_x[n] = [];
        let cuenta = 0;
        while(element.length>0){
            let valor = element.shift();
            if(valor>0){
                cuenta = cuenta + 1;
            }else{
                if(cuenta>0){
                    contenido_x[n].push(cuenta);
                }
                cuenta=0;
            }
        }
        if(cuenta>0){
            contenido_x[n].push(cuenta);
        }
        n++;
    });
    return contenido_x;
}

export{separacion,contador,transpuesta}