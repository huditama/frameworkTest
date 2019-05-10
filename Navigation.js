import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Home from './containers/Home'
import Teams from './containers/Teams'
import Details from './containers/Details'
import Players from './containers/Players'

const stackNavigator = createStackNavigator({
    Teams: {
        screen: Teams
    },
    Details: {
        screen: Details
    },
    Players: {
        screen: Players
    }
}, {
        initialRouteName: 'Teams'
    }
)


const appNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor, activeTintColor }) => (
                <Icon name="home" size={30} color={tintColor} />
            )
        }
    },
    Teams: {
        screen: stackNavigator,
        navigationOptions: {
            tabBarLabel: 'Teams',
            tabBarIcon: ({ tintColor, activeTintColor }) => (
                <Icon name="group" size={30} color={tintColor} />
            )
        }
    }
}, {
        tabBarOptions: {
            activeBackgroundColor: 'steelblue',
            activeTintColor: 'white',
            showIcon: true
        }
    }
)

export default createAppContainer(appNavigator)