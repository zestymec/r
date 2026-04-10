import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Fancyimagescard() {
  return (
   
      <View>
        <Text style={styles.headingtext}>Fancyimagescard</Text>
        <View style={[styles.card,]}>
          <Image
            source={
              { uri: 'https://avatars.githubusercontent.com/u/171046526?v=4' }

            }
            style={styles.cardimage} />
        </View>
       
      </View>
  )
}

const styles = StyleSheet.create({
  headingtext: {
    color: 'blue',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 8,
  },
  cardimage: {
    width: 100,
    height: 50,
    margin: 'auto',
  }

  , card: {

  }
})