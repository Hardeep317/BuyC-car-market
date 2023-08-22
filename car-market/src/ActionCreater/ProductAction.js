export const productAction = (data, dispatch) => {
    dispatch({
        type:"ADDPRODUCT",
        payload: data
    })
}