const initialState = {
    products:[]
}


export const productReducer = (state = initialState, action) => {

    switch(action.type){
        case "ADDPRODUCT":{
            return {
                ...state,
                products: action.payload
            }
        }

        default:{
            return state
        }
    }
}