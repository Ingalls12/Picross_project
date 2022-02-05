function random_list(){
    let lista = [];
    for(let x=0;x<100;x++){
        let n_random = Math.random()*2;
        lista.push(Math.floor(n_random))
    }
    return lista
}
export {random_list}