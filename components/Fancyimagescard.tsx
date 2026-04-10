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
            Java script 675
          </Text>
          <Text style={styles.cardheading}>
            Java vs Script
          </Text>
          <Text style={styles.carddescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
          <Text style={styles.cardcomment}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus voluptate quas amet repellat exercitationem?
          </Text>
          <Text style={styles.cardFooter}>Footer hun me </Text>
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
    // backgroundColor: 'red', 
    alignSelf: 'center',
    marginVertical: 20
  }

  , card: {
    backgroundColor: "pink",
    marginHorizontal: 'auto',
    marginVertical: 20,
    borderRadius:10,
    padding:22,
    width:"80%",
    
    shadowColor:'red',
    shadowOpacity:5,
  },
  cardbody: {

  }
  , cardTitle: {
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 5,
    fontSize: 30,
    textAlign:'center'
  },
  cardheading: {
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 'auto',
    marginVertical: 20,
    fontSize: 24,
  },
  carddescription: {
    color: 'white',
    fontWeight: 'bold',
marginHorizontal: 'auto',
    marginVertical: 4,
    fontSize: 24,
  }
  , cardcomment: {
    color: 'white',
    fontWeight: 'bold',
marginHorizontal: 'auto',
    marginVertical: 3,
    fontSize: 24,
  }
  , cardFooter: {
    color: 'white',
    fontWeight: 'bold',
marginHorizontal: 'auto',
    marginVertical: 4,
    fontSize: 24,
  }
})