function resultReducer(state=null,action){
    switch(action.type){
        case 'SET_RESULT':
            return action.data;
        default:
            return state;
    }
}
export default resultReducer;