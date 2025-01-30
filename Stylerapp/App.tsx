import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/actioncard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Welcome to React Native!</Text>
        <FlatCard />
        <ElevatedCards />
        <FancyCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App