import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcards from './components/Flatcards'
import Tapped from './components/Tapped'
import Fancyimagescard from './components/Fancyimagescard'
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcards />
        <Tapped />
        <Fancyimagescard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App