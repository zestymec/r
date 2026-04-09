import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Fancyimagescard() {
  return (
    <View>
      <Text  style={styles.headingtext}>Fancyimagescard</Text>
      <View style={[styles.card , ]}>

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
    card:{
        
    }
})