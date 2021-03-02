const INITIAL_STATE = {
    data: {}
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'GET_DATA' :
            return {
                ...state,
                data: action.payload
            }

        case 'LOGOUT' :
            return INITIAL_STATE

        default :
            return state
    }
}

export default userReducer