import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function Tapped() {
    return (

        <View style={[, styles.container]}>
            <Text style={
                styles.headingtext
            }>Umer</Text>
            <ScrollView horizontal={true} style={styles.cardelevated}>
                <View style={styles.cards}>
                    <Text style={[styles.headingtext]}>box1</Text>
                </View>
                <View style={styles.cards}>
                    <Text style={[styles.headingtext]}>box2</Text>
                </View>
                <View style={styles.cards}>
                    <Text style={[styles.headingtext]}>box3</Text>
                </View>
                <View style={styles.cards}>
                    <Text style={[styles.headingtext]}>box4</Text>
                </View>
                <View style={styles.cards}>
                    <Text style={[styles.headingtext]}>box5</Text>
                </View>
                <View style={styles.cards}>
                    <Text style={[styles.headingtext]}>box6</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingtext: {
        color: 'blue',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 8,
    }
    , container: {
padding:9,
    }
    , cards: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: 'black',
        borderStyle: 'solid',
        marginLeft: 5,
        backgroundColor: 'red',
      
    }
    , cardelevated: {
        backgroundColor: 'purple'
        , width: "70%"
        , margin: 'auto',
        borderRadius:5
    }
})