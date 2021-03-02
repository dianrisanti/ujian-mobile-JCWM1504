import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Input, Button, Icon, Text } from 'react-native-elements'

import {useDispatch, useSelector} from 'react-redux'

// import action
import {login} from '../actions'

const Login = ({navigation}) => {
    const [usernameInput, setUsername] = React.useState("")
    const [passwordInput, setPassword] = React.useState("")
    
    const { username } = useSelector((state) => {
        return {
            username: state.userReducer.username
        }
    })

    const dispatch = useDispatch()

    const loginHandler = () => {
        let username = usernameInput
        let password = passwordInput

        if(!username || !password ) return

        dispatch(login(username))

        setUsername("")
        setPassword("")      
    }

    React.useEffect(() => {
        if(username) return navigation.navigate('Home')
    }, [username])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputContainer}>
                <Input
                    placeholder='Username'
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                    onChangeText={value => setUsername(value)}
                    style={{marginVertical: 5}}
                />
                <Input
                    placeholder='Password'
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    onChangeText={text => setPassword(text)}
                    style={{marginVertical: 5}}
                    secureTextEntry={true}
                />
            </View>
            <Button
                icon={
                    <Icon
                    name="sign-in"
                    size={30}
                    color="white"
                    type='font-awesome'
                    style={{marginRight: 8}}
                    />
                }
                buttonStyle={styles.button}
                titleStyle={{fontSize: 30}}
                title="Login"
                onPress={loginHandler}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      flex: 1,
      marginTop: 70
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    inputContainer: {
        borderRadius: 10
    },
    button: {
        width: '60%',
        height: 50,
        backgroundColor: '#f2a154',
        marginLeft: 70
    },
    signUpTxt: {
        marginLeft: 60,
        marginVertical: 25
    },
    regis: {
        color: '#161d6f'
    }
})

export default Login