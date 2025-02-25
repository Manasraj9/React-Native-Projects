import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Navigation
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//Screen
import Home from './screens/Home'
import Details from './screens/Details'

export type RootStackPramList = {
  Home:undefined;
  Details: {productId: Product};
}

const Stack = createNativeStackNavigator<RootStackPramList>()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{title:"Product Details"}} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
