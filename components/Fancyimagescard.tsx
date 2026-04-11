import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Fancyimagescard() {
  return (

    <View>
      <Text style={styles.headingtext}>Fancyimagescard</Text>
      <View style={[styles.card,]}>
        <Image
          source={require('./React-native-2-logo.png')}
          style={styles.cardimage}
        />

        <View style={styles.cardbody}>
          <Text style={styles.cardTitle}>
            React JS
          </Text>
          <Text style={styles.cardheading}>
            React is Js library
          </Text>
          <Text style={styles.cardFooter}>React is used to design ui</Text>
          <Text style={styles.carddescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus voluptate quas amet repellat exercitationem?
          </Text>
          <Text style={styles.cardcomment}>
            12 min ago
          </Text>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  headingtext: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 8,
  },
  cardimage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
    marginVertical: 1,
    backgroundColor: "red",
  }

  , card: {
    backgroundColor: "pink",
    marginHorizontal: 'auto',
    marginVertical: 20,
    borderRadius: 20,
    padding: 22,
    width: "80%",
    shadowColor: 'red',
    shadowOpacity: 5,
  },
  cardbody: {
    width: '90%',
    marginHorizontal: 'auto',
  }
  , cardTitle: {
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 5,
    fontSize: 40,
   
  },
  cardheading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  carddescription: {
    color: 'black',
    marginVertical: 4,
    fontSize: 22,
  }
  , cardcomment: {
    color: 'black',
    fontWeight: 'bold',
   marginStart:2,
    marginVertical: 3,
    fontSize: 18,
  }
  , cardFooter: {
    color: 'black',
    marginVertical: 4,
    fontSize: 22,
  }
})