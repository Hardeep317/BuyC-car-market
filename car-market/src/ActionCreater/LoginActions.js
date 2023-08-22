export const loginAction = (data,dispatch) => {
    dispatch({
        type:"LOGIN",
        payload:data
    })
}

export const logoutAction = (data,dispatch) => {
    dispatch({
        type:"LOGOUT",
        payload:data
    })
}