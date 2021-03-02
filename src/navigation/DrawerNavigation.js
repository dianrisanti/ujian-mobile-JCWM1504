import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import FeedScreen from './FeedNavigation'
import AccountScreen from '../screens/AccountScreen'

const Drawer = createDrawerNavigator()

const HomeNavigation = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Feed" component={FeedScreen} />
            <Drawer.Screen name="Account" component={AccountScreen} />
        </Drawer.Navigator>
    )
}

export default HomeNavigation