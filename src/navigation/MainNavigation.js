import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {useDispatch, useSelector} from 'react-redux'

import {keepLogin, getData} from '../actions'

import LoginScreen from '../screens/LoginScreen'
import HomeNavigation from './DrawerNavigation'

const Stack = createStackNavigator()

const MainNavigation = () => {
    const { username } = useSelector((state) => {
        return {
            username: state.userReducer.username,
        }
    })

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(keepLogin())
        dispatch(getData())
    }, [])

    return(
        <Stack.Navigator headerMode={false}>
            {
                username
                ?
                (<Stack.Screen name="Home" component={HomeNavigation}/>)
                :
                (<Stack.Screen name="Login" component={LoginScreen}/>)
            }
        </Stack.Navigator>
    )
}

export default MainNavigation