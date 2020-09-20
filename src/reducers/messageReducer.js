function messageReducer(state=null,action){
    switch(action.type){
        case 'SET_MESSAGE':
            return action.data;
        default:
            return state;
    }
}
export default messageReducer;