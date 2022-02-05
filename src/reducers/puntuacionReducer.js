const initialState =()=>({
   puntos: 0,
   vidas: 3
})

const puntacionReducer = (state = initialState(),action={})=>{
    switch(action.type){
        case "POINT":
            return{...state, puntos: state.puntos + 1}
        case "ERROR":
            return {...state, vidas: state.vidas - 1};
        default:
            return state;
    }
}
export {puntacionReducer};