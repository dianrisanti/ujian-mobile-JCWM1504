import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Icon } from 'react-native-elements'

import {useDispatch, useSelector} from 'react-redux'

import { CommonActions } from '@react-navigation/native'

import {logout} from '../actions'

const AccountScreen = ({navigation}) => {
    const dispatch = useDispatch()

    const { username } = useSelector((state) => {
        return {
            username: state.userReducer.username
        }
    })

    React.useEffect(() => {
        if(!username) {
            const resetAction = CommonActions.reset({
                index: 0,
                routes: [{ name: "Login" }]
            })
            navigation.dispatch(resetAction)
        }
    })

    return(
        <View style={styles.container} >
            <Text style={styles.title}>Profile</Text>
            <Button
                icon={
                    <Icon
                    name="sign-out"
                    size={30}
                    color="white"
                    type='font-awesome'
                    style={{marginRight: 8}}
                    />
                }
                buttonStyle={styles.button}
                titleStyle={{fontSize: 30}}
                title="Logout"
                onPress={() => dispatch(logout())}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        marginLeft: 100
    },
    button: {
        width: '60%',
        height: 50,
        backgroundColor: '#f2a154',
        marginLeft: 70
    }
})

export default AccountScreen