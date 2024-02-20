import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from './screens/HomeScreen'
import AddTaskScreen from './screens/AddTaskScreen'

import theme from './themes/theme'

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          activeTintColor: theme.colors.primary,
          inactiveTintColor: theme.colors.charcoal,
          tabBarActiveBackgroundColor: theme.colors.white,
          tabBarInactiveBackgroundColor: theme.colors.backgroundDark,
          labelStyle: {fontSize: 12, fontWeight: 'bold'},
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'To-Do List',
            tabBarIcon: ({color, size}) => <Ionicons name="list" size={size} color={color} />,
          }}
        />
        <Tab.Screen
          name="AddTask"
          component={AddTaskScreen}
          options={{
            tabBarLabel: 'Add/Edit Task',
            tabBarIcon: ({color, size}) => <Ionicons name="add" size={size} color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
