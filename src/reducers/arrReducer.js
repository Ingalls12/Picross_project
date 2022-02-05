import { random_list } from "../funciones/getRandomArray"
const initialState = ()=>({
    list:random_list()
})

const listaReducer = (state = initialState(),action = {})=>{
    switch(action.type){
        case "NEW":
            return {list:random_list()}
        default:
            return state;
    }
}
export {listaReducer};