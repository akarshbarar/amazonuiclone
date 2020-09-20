export const addToBasket=(data)=>{

    return {
        type:"INCREMENT",
        data:data
    };
};
export const removeFromBasket=(data)=>{

    return {
        type:"DECREMENT",
        data:data
    };
};

export const addUser=(data)=>{

    return {
        type:"SET_USER",
        data:data
    };
};
export const addAdmin=(data)=>{

    return {
        type:"SET_ADMIN",
        data:data
    };
};
export const addMessage=(data)=>{

    return {
        type:"SET_MESSAGE",
        data:data
    };
};
export const addResult=(data)=>{

    return {
        type:"SET_RESULT",
        data:data
    };
};