import { createBottomTabNavigator, createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Home from './containers/Home'
import Teams from './containers/Teams'
import Details from './containers/Details'
import Players from './containers/Players'
import PlayerDetails from './containers/PlayerDetails'

const stackNavigator = createStackNavigator({
    Teams: {
        screen: Teams
    },
    Details: {
        screen: Details
    },
    Players: {
        screen: Players
    },
    PlayerDetails: {
        screen: PlayerDetails
    }
}, {
        initialRouteName: 'Teams'
    }
)


const appNavigator = createMaterialTopTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor, activeTintColor }) => (
                <Icon name="home" size={26} color={tintColor} />
            )
        }
    },
    Teams: {
        screen: stackNavigator,
        navigationOptions: {
            tabBarLabel: 'Teams',
            tabBarIcon: ({ tintColor, activeTintColor }) => (
                <Icon name="group" size={26} color={tintColor} />
            )
        }
    }
}, {
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: '#7B8788',
            showIcon: true,
            labelStyle: {
                margin: 2
            },
            style: {
                backgroundColor: '#2C3335',
            }
        },
        tabBarPosition: 'bottom'
    }
)

export default createAppContainer(appNavigator)