import asyncStorage from '@react-native-async-storage/async-storage'

export const login = (data) => {
    return async(dispatch) => {
        try{
            await asyncStorage.setItem('username', data)
            
            dispatch({type: "LOGIN", payload: data})
        }
        catch(err){
            console.log(err)
        }
    }
}

export const keepLogin = () => {
    return async(dispatch) => {
        try{
            const username = await asyncStorage.getItem('username')

            if(!username) return

            dispatch({type: "LOGIN", payload: username})
        }
        catch(err){
            console.log(err)
        }
    }
}

export const logout = () => {
    return async(dispatch) => {
        try {
            await asyncStorage.removeItem('username')
            dispatch({ type: 'LOGOUT'})
        }

        catch(err) {
            console.log(err)
        }
    }
}