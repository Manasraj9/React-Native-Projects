import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.card1]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
            <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
            <Text>Green</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333333',
      paddingHorizontal:8
    },
    container:{
        flex: 1,
        flexDirection: 'row',
        padding: 8
    },
    card:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        height: 100,
        width: 100,
        borderRadius: 4,
        margin: 8

    },
    card1:{
        backgroundColor: '#EF5354',
    },
    card2:{
        backgroundColor: '#50dbb4',
    },
    card3:{
        backgroundColor: '#5DA3FA',
    }
  })
export default FlatCard