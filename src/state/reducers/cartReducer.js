const cartReducer = (state = 0, action)=>{
    if(action.type === 'add'){
        return state + action.payload
    }
    else if (action.type === 'delete'){
        return state - action.payload
    }
    else{
        return state
    }
};

export default cartReducer;