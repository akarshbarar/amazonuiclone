const cartReducer=(state=[],action)=>{
    switch(action.type){
        case'INCREMENT':
            return [...state,action.data];
        case 'DECREMENT':
            console.log(state)
            return [...state];
        default:
            return state;
    }
}
export default cartReducer;