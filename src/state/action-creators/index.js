export const depositMoney = (amount) =>{
    return (dispatch) =>{
        dispatch({
            type: 'deposit', 
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) =>{
    return (dispatch) =>{
        dispatch({
            type: 'withdraw', 
            payload: amount
        })
    }
};

export const cartItem = (amount) =>{
    return (dispatch) =>{
        dispatch({
            type: 'add',
            payload: amount
        })
    }
}