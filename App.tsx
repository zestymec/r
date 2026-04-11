import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcards from './components/Flatcards'
import Tapped from './components/Tapped'
import Fancyimagescard from './components/Fancyimagescard'
import Actioncard from './components/Actioncard'
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcards />
        <Tapped />
        <Fancyimagescard />
        <Actioncard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App