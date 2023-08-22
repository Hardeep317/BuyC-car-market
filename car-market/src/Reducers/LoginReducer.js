const initialData = {
    userDetails:{
        detail:'',
        token:''
    }
}


export const loginReducer = (state = initialData, action) => {

    switch(action.type){
        case "LOGIN":{
            return {
                ...state,
                userDetails: action.payload
            }
        }

        case "LOGOUT":{
            return {
                ...state,
                userDetails: action.payload
            }
        }

        default:{
            return state
        } 
    }
}