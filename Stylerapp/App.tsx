import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import ElevatedCards from './components/ElevatedCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Welcome to React Native!</Text>
        <FlatCard />
        <ElevatedCards />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App