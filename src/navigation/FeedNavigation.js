import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'

import HomeScreen from '../screens/HomeScreen'
import LiveScreen from '../screens/LiveUpdateScreen'

const Tab = createBottomTabNavigator()

const FeedScreen = () => {
    return(
        <Tab.Navigator 
            headerMode={false}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName

                    if(route.name === 'Home Tab') {
                        iconName = 'home'
                    } else if (route.name === 'Live Tab') {
                        iconName = 'calendar-alt'
                    }
                    return <FontAwesomeIcon name={iconName} color={color} size={size}/>
                }
            })}
            tabBarOptions={{
                activeTintColor: '#0f4c5c',
                inactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen name="Home Tab" component={HomeScreen} />
            <Tab.Screen name="Live Tab" component={LiveScreen} />
        </Tab.Navigator>
    )
}

export default FeedScreen